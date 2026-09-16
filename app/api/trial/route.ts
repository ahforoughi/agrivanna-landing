import { NextResponse } from "next/server";
import {
  CONFIRMATION_SUBJECT,
  CONTACT_EMAIL,
  TRIAL_EMAILS,
  confirmationBody,
  trialBody,
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
  let payload: Partial<TrialSubmission>;
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
    location: clean(payload.location, 160),
    head: clean(payload.head, 60),
    operation: clean(payload.operation, 120),
    records: clean(payload.records, 120),
    notes: clean(payload.notes, 2000),
    source: clean(payload.source, 60) || "website",
  };

  if (!data.name || !data.email) {
    return NextResponse.json(
      { ok: false, error: "Name and email are required." },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email)) {
    return NextResponse.json({ ok: false, error: "That email looks off." }, { status: 400 });
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
      subject: `Free trial — ${data.ranch || data.name}`,
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
      subject: CONFIRMATION_SUBJECT,
      text: confirmationBody(data),
    });
  } catch (err) {
    console.error("Trial confirmation to rancher failed to send", err);
  }

  return NextResponse.json({ ok: true });
}
