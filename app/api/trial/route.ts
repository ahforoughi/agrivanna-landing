import { NextResponse, after } from "next/server";
import { checkBotId } from "botid/server";
import {
  CONFIRMATION_SUBJECT,
  CONTACT_EMAIL,
  TRIAL_EMAILS,
  TRIAL_MIN_FILL_MS,
  TRIAL_TRAP_FIELD,
  confirmationBody,
  trialBody,
  trialSubject,
  type TrialSubmission,
} from "@/lib/cta";
import { sendToAttio } from "@/lib/attio";
import { FROM, sendEmail as send } from "@/lib/resend";
import { allowedOrigin, clientIp, isDisposable, parseSignup, rateLimited } from "@/lib/signup-guard";

/**
 * Sends a trial request to TRIAL_EMAILS through Resend's REST API — no SDK, so
 * nothing to install. Set RESEND_API_KEY (and optionally TRIAL_FROM, which must
 * be on a domain verified in Resend) to turn it on.
 *
 * With no key configured the route reports `fallback: true` and the form opens a
 * prefilled email instead, so an enquiry is never silently dropped.
 *
 * Every real request also goes to Attio (lib/attio), after the reply is sent:
 * alongside the email, never instead of it.
 */
export async function POST(request: Request) {
  // Only our own pages post here. A browser always sends Origin with a POST;
  // a script that leaves it out, or fakes another site, is turned away.
  if (!allowedOrigin(request.headers.get("origin"))) {
    return NextResponse.json({ ok: false, blocked: true }, { status: 403 });
  }

  // Vercel BotID (set up in instrumentation-client.ts). Bots, including
  // scripts posting here without loading the site, are turned away before
  // anything is read or sent. If BotID itself fails (off Vercel, or the
  // project's OIDC token isn't available) it must not take the form down
  // with it: the request carries on to the spam checks below.
  let verification: Awaited<ReturnType<typeof checkBotId>> | null = null;
  try {
    verification = await checkBotId();
  } catch (err) {
    console.error("BotID check failed; falling back to the form's own spam checks", err);
  }
  if (verification?.isBot) {
    // No error text: the form then shows its own message, in the visitor's
    // language, with our email address, so a person wrongly flagged can still
    // reach us
    return NextResponse.json({ ok: false, blocked: true }, { status: 403 });
  }

  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Malformed request." }, { status: 400 });
  }
  const fr = payload?.lang === "fr";

  // 5 sends per address in 10 minutes. Someone correcting a typo never gets near it.
  if (rateLimited(clientIp(request))) {
    return NextResponse.json(
      { ok: false, error: fr ? "Trop d'envois d'un coup. Réessayez dans quelques minutes." : "Too many requests at once. Please try again in a few minutes." },
      { status: 429 }
    );
  }

  // Every field trimmed, cut to its maximum length and cleaned of control characters
  const parsed = parseSignup(payload);
  if (!parsed.ok) {
    return NextResponse.json(
      { ok: false, error: fr ? "Cette adresse courriel semble incorrecte." : "That email looks off." },
      { status: 400 }
    );
  }
  const { page, utm, ...rest } = parsed.data;
  const data: TrialSubmission = rest;

  // Spam checks, before anything is sent. Each one answers "ok" so a bot
  // can't tell it was caught and learn to get around it; nothing goes out.
  const trapFilled = typeof payload[TRIAL_TRAP_FIELD] === "string" && (payload[TRIAL_TRAP_FIELD] as string).trim() !== "";
  const tooFast = typeof payload.elapsedMs !== "number" || payload.elapsedMs < TRIAL_MIN_FILL_MS;
  if (!parsed.fromOurPages || trapFilled || tooFast) {
    console.warn("Trial request dropped as spam", { source: data.source, trapFilled, tooFast });
    return NextResponse.json({ ok: true });
  }

  if (!data.name || !data.email) {
    return NextResponse.json(
      { ok: false, error: fr ? "Le nom et le courriel sont obligatoires." : "Name and email are required." },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email)) {
    return NextResponse.json(
      { ok: false, error: fr ? "Cette adresse courriel semble incorrecte." : "That email looks off." },
      { status: 400 }
    );
  }
  if (isDisposable(data.email)) {
    return NextResponse.json(
      { ok: false, error: fr ? "Merci d'utiliser votre adresse courriel habituelle." : "Please use your regular email address." },
      { status: 400 }
    );
  }

  // Into Attio once the visitor has their answer, whatever happens with the email
  after(() => sendToAttio(data, { utm, page }));

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    return NextResponse.json({ ok: false, fallback: true }, { status: 200 });
  }

  // The enquiry itself. If this one doesn't land we have lost the lead, so a
  // failure here is what sends the visitor to the mailto fallback.
  try {
    await send(key, {
      from: FROM,
      to: [...TRIAL_EMAILS],
      reply_to: data.email,
      subject: trialSubject(data),
      text: trialBody(data),
    });
  } catch (err) {
    console.error("Trial request failed to send", err);
    return NextResponse.json({ ok: false, fallback: true }, { status: 200 });
  }

  // The rancher's copy. We already have the enquiry at this point, so a bad
  // address or a Resend hiccup here is logged and nothing more — it must never
  // send someone to the mailto fallback for a request that did land.
  try {
    await send(key, {
      from: FROM,
      to: [data.email],
      reply_to: CONTACT_EMAIL,
      subject: CONFIRMATION_SUBJECT[data.lang],
      text: confirmationBody(data),
    });
  } catch (err) {
    console.error("Trial confirmation to rancher failed to send", err);
  }

  return NextResponse.json({ ok: true });
}
