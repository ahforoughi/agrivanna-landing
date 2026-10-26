import "server-only";

/**
 * Sending email through Resend's REST API: no SDK, so nothing to install.
 * Used by the trial form (/api/trial) and the launch party sign up (/api/launch).
 */

// Must be on a domain verified in Resend. notify.agrivanna.com is the verified
// one: sending from bare agrivanna.com gets a 403.
export const FROM = process.env.TRIAL_FROM ?? "Agrivanna Website <noreply@notify.agrivanna.com>";

/** Posts one email to Resend. Throws with the status and body if it refuses. */
export async function sendEmail(key: string, payload: Record<string, unknown>) {
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
