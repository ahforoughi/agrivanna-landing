import { NextResponse } from "next/server";
import { checkBotId } from "botid/server";
import { CONTACT_EMAIL, LAUNCH_CONFIRMATION_SUBJECT, launchConfirmationBody } from "@/lib/cta";
import { FROM, sendEmail } from "@/lib/resend";
import { allowedOrigin, clientIp, isDisposable, rateLimited } from "@/lib/signup-guard";

/**
 * Sends the confirmation email for the launch party sign up (agrivanna.com/launch).
 *
 * The sign up itself still goes from the page straight to the Google Sheet (and
 * from there to Attio); this route only sends the visitor their copy, from the
 * same address and in the same style as the trial form's confirmation.
 *
 * It always answers { ok: true }, so the page never shows an error over an email
 * and a bot can't tell which check caught it. Failures are only logged, without
 * the address.
 */

/** Everyone at the party shares the venue's Wi-Fi, so one IP is many people. */
const PER_IP_IN_10_MIN = 60;
/** Faster than this from opening the page to sending is a machine. */
const MIN_FILL_MS = 1500;

const ok = () => NextResponse.json({ ok: true });

export async function POST(request: Request) {
  if (!allowedOrigin(request.headers.get("origin"))) {
    return NextResponse.json({ ok: false }, { status: 403 });
  }

  // Vercel BotID, as on the trial form. If BotID itself fails, carry on to the checks below.
  try {
    if ((await checkBotId()).isBot) return ok();
  } catch (err) {
    console.error("BotID check failed on /api/launch; using the form's own checks", err);
  }

  let p: Record<string, unknown>;
  try {
    p = await request.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const email = typeof p.email === "string" ? p.email.trim().slice(0, 254) : "";
  const role = typeof p.role === "string" ? p.role : "";
  const trapFilled = typeof p.website === "string" && p.website.trim() !== "";
  const tooFast = typeof p.elapsedMs !== "number" || p.elapsedMs < MIN_FILL_MS;
  if (trapFilled || tooFast || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || isDisposable(email)) {
    console.warn("Launch confirmation not sent", { trapFilled, tooFast });
    return ok();
  }
  if (rateLimited(`launch:${clientIp(request)}`, Date.now(), PER_IP_IN_10_MIN)) {
    console.warn("Launch confirmation not sent: rate limit");
    return ok();
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.warn("Launch confirmation not sent: RESEND_API_KEY is not set");
    return ok();
  }
  try {
    await sendEmail(key, {
      from: FROM,
      to: [email],
      reply_to: CONTACT_EMAIL,
      subject: LAUNCH_CONFIRMATION_SUBJECT,
      text: launchConfirmationBody(role),
    });
  } catch (err) {
    // Resend's error text can quote the address; log the status only
    console.error("Launch confirmation failed to send", { status: String(err).slice(7, 10) });
  }
  return ok();
}
