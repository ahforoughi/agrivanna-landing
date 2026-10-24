import "server-only";
import type { TrialSubmission } from "@/lib/cta";

/**
 * Puts a trial request into Attio: the person (matched on email, so a repeat
 * signup updates them instead of making a duplicate), then an entry on the
 * Website Signups list carrying where they signed up and what they told us.
 *
 * Server only. ATTIO_TOKEN must never reach the browser. Turned off when the
 * token isn't set. Never throws and never logs names, emails or the token: the
 * visitor's request has already landed by email, so Attio failing is only logged.
 */

const API = "https://api.attio.com/v2";
const TIMEOUT_MS = 8000;

/** The UTM tags we keep, in the order they're written into details. */
export const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;
export type Utm = Partial<Record<(typeof UTM_KEYS)[number], string>>;

type Extra = { utm?: Utm; page?: string };

/** "Jane van der Berg" -> first "Jane", last "van der Berg". */
export function splitName(full: string) {
  const parts = full.trim().split(/\s+/);
  return { first_name: parts[0] ?? "", last_name: parts.slice(1).join(" "), full_name: parts.join(" ") };
}

/**
 * A phone number Attio will accept, or null. Attio rejects the whole record over
 * a number it can't parse, so anything doubtful stays in details only.
 */
export function phoneForAttio(raw: string) {
  const digits = raw.replace(/[^\d+]/g, "");
  if (/^\+[1-9]\d{7,14}$/.test(digits)) return digits;
  const d = digits.replace(/\+/g, "");
  if (/^[2-9]\d{9}$/.test(d)) return `+1${d}`; // Canada / US written without the 1
  if (/^1[2-9]\d{9}$/.test(d)) return `+${d}`;
  return null;
}

/** Everything the form collected besides name and email, as "Label: value" lines. */
export function detailsText(data: TrialSubmission, extra: Extra = {}) {
  const lines: [string, string | undefined][] = [
    ["Phone", data.phone],
    ["Ranch", data.ranch],
    ["Records kept in", data.records],
    ["Notes", data.notes],
    ["Language", data.lang === "fr" ? "French" : "English"],
    ["Page", extra.page],
    ...UTM_KEYS.map((k) => [k, extra.utm?.[k]] as [string, string | undefined]),
  ];
  return lines
    .filter(([, v]) => v && v.trim())
    .map(([k, v]) => `${k}: ${v!.trim()}`)
    .join("\n");
}

class AttioError extends Error {
  constructor(public step: string, public status: number, public code?: string) {
    super(`Attio ${step} failed: ${status}${code ? ` ${code}` : ""}`);
  }
}

/** One call to Attio: 8 s timeout, one retry on 429 or a 5xx. */
async function call(step: string, token: string, method: string, path: string, body: unknown) {
  for (let attempt = 0; ; attempt++) {
    let res: Response;
    try {
      res = await fetch(`${API}${path}`, {
        method,
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(TIMEOUT_MS),
      });
    } catch {
      if (attempt === 0) continue;
      throw new AttioError(step, 0, "timeout or network");
    }
    if (res.ok) return res.json();
    if (attempt === 0 && (res.status === 429 || res.status >= 500)) {
      await new Promise((r) => setTimeout(r, res.status === 429 ? 1000 : 300));
      continue;
    }
    // Attio's error code ("validation_type" etc.) is safe to log; its message can quote the values, so it isn't
    const code = await res.json().then((j) => j?.code, () => undefined);
    throw new AttioError(step, res.status, code);
  }
}

export async function sendToAttio(data: TrialSubmission, extra: Extra = {}) {
  const token = process.env.ATTIO_TOKEN;
  const list = process.env.ATTIO_LIST || "website_signups";
  if (!token) {
    console.warn("Attio skipped: ATTIO_TOKEN is not set");
    return false;
  }
  try {
    const values: Record<string, unknown> = {
      email_addresses: [data.email],
      name: [splitName(data.name)],
    };
    const phone = phoneForAttio(data.phone);
    let person;
    try {
      person = await call("person", token, "PUT", "/objects/people/records?matching_attribute=email_addresses",
        { data: { values: phone ? { ...values, phone_numbers: [{ original_phone_number: phone }] } : values } });
    } catch (err) {
      // A number Attio doesn't like shouldn't cost us the lead: try again without it
      if (!(phone && err instanceof AttioError && err.status === 400)) throw err;
      person = await call("person", token, "PUT", "/objects/people/records?matching_attribute=email_addresses", { data: { values } });
    }
    const recordId = person?.data?.id?.record_id;
    if (!recordId) throw new AttioError("person", 200, "no record id");

    await call("list entry", token, "POST", `/lists/${encodeURIComponent(list)}/entries`, {
      data: {
        parent_record_id: recordId,
        parent_object: "people",
        entry_values: { source: data.source, details: detailsText(data, extra) },
      },
    });
    return true;
  } catch (err) {
    const e = err instanceof AttioError ? { step: err.step, status: err.status, code: err.code } : { error: String(err).slice(0, 120) };
    console.error("Attio sync failed (the email still went out)", { source: data.source, ...e });
    return false;
  }
}
