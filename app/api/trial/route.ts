import { NextResponse } from "next/server";
import { checkBotId } from "botid/server";
import {
  CONFIRMATION_SUBJECT,
  CONTACT_EMAIL,
  TRIAL_EMAILS,
  TRIAL_MIN_FILL_MS,
  TRIAL_SOURCES,
  TRIAL_TRAP_FIELD,
  confirmationBody,
  trialBody,
  trialSubject,
  type TrialSubmission,
} from "@/lib/cta";

/**
 * Sends a trial request to TRIAL_EMAILS through Resend's REST API — no SDK, so
 * nothing to install. Set RESEND_API_KEY (and optionally TRIAL_FROM, which must
 * be on a domain verified in Resend) to turn it on.
 *
 * With no key configured the route reports `fallback: true` and the form opens a
 * prefilled email instead, so an enquiry is never silently dropped.
 */
// Must be on a domain verified in Resend. notify.agrivanna.com is the verified
// one — sending from bare agrivanna.com gets a 403 and the enquiry falls back.
const FROM = process.env.TRIAL_FROM ?? "Agrivanna Website <noreply@notify.agrivanna.com>";

/** Posts one email to Resend. Throws with the status and body if it refuses. */
async function send(key: string, payload: Record<string, unknown>) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
}

function clean(v: unknown, max = 400) {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
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

  let payload: Partial<TrialSubmission> & Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Malformed request." }, { status: 400 });
  }

  const data: TrialSubmission = {
    name: clean(payload.name, 120),
    email: clean(payload.email, 200),
    phone: clean(payload.phone, 60),
    ranch: clean(payload.ranch, 160),
    records: clean(payload.records, 120),
    notes: clean(payload.notes, 2000),
    source: clean(payload.source, 60) || "website",
    lang: payload.lang === "fr" ? "fr" : "en",
  };
  const fr = data.lang === "fr";

  // Spam checks, before anything is sent. Each one answers "ok" so a bot
  // can't tell it was caught and learn to get around it; nothing goes out.
  const fromOurPages = (TRIAL_SOURCES as readonly string[]).includes(data.source);
  const trapFilled = clean(payload[TRIAL_TRAP_FIELD], 200) !== "";
  const tooFast = typeof payload.elapsedMs !== "number" || payload.elapsedMs < TRIAL_MIN_FILL_MS;
  if (!fromOurPages || trapFilled || tooFast) {
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
