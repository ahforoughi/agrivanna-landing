/** Where trial enquiries land. Every submission goes to all of these. */
export const TRIAL_EMAILS = ["haden@agrivanna.com", "info@agrivanna.com"] as const

/** The one address we print when copy has to name a single inbox. */
export const TRIAL_EMAIL = TRIAL_EMAILS[0]

/** Where we tell a rancher to write with questions. */
export const CONTACT_EMAIL = "info@agrivanna.com"

export const DEMO_CALENDLY =
  "https://calendly.com/aminrezaabbasi-agrivanna/meeting-with-agrivanna-team"

/** Any button anywhere opens the trial form by dispatching this. */
export const OPEN_TRIAL_EVENT = "agrivanna-open-trial"

export function openTrialForm(source: string) {
  window.dispatchEvent(new CustomEvent(OPEN_TRIAL_EVENT, { detail: source }))
}

export type TrialSubmission = {
  name: string
  email: string
  phone: string
  ranch: string
  location: string
  head: string
  operation: string
  records: string
  notes: string
  source: string
}

export const HEAD_OPTIONS = [
  "Under 100",
  "100 – 300",
  "300 – 800",
  "800 – 2,000",
  "Over 2,000",
] as const

export const OPERATION_OPTIONS = [
  "Cow-calf",
  "Cow-calf plus backgrounding",
  "Backgrounding or feedlot",
  "Community pasture or grazing association",
  "Seedstock / purebred",
  "Something else",
] as const

export const RECORD_OPTIONS = [
  "Notebook, calving book, or whiteboard",
  "Spreadsheets",
  "Another ranch program",
  "Mostly in my head",
] as const

const LABELS: Record<keyof Omit<TrialSubmission, "source">, string> = {
  name: "Name",
  email: "Email",
  phone: "Phone",
  ranch: "Ranch",
  location: "Where",
  head: "Head",
  operation: "Operation",
  records: "Records kept in",
  notes: "Notes",
}

/** The submitted fields as labelled lines, echoed to us and back to the rancher. */
function submissionLines(d: TrialSubmission) {
  return (Object.keys(LABELS) as (keyof typeof LABELS)[])
    .map((k) => `${LABELS[k]}: ${d[k] || "—"}`)
    .join("\n")
}

/** Plain-text body shared by the email we send and the mailto fallback. */
export function trialBody(d: TrialSubmission) {
  return `New free trial request\n\n${submissionLines(d)}\n\nCame from: ${d.source}`
}

export const CONFIRMATION_SUBJECT = "We have your Agrivanna trial request"

/** House style: 16 September 2026, in the ranch's own time zone. */
function today() {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "America/Edmonton",
  }).format(new Date())
}

/**
 * The automatic reply a rancher gets. Says what happens next and who does it,
 * repeats back what they sent so a wrong tag or town is easy to catch, and
 * points at CONTACT_EMAIL for anything they want to ask in the meantime.
 */
export function confirmationBody(d: TrialSubmission) {
  const greeting = d.name.trim().split(/\s+/)[0] || "there"
  const outfit = d.ranch ? `try Agrivanna on ${d.ranch}` : "try Agrivanna"

  return [
    `Hello ${greeting},`,
    "",
    `We have your request to ${outfit}. It reached us on ${today()}.`,
    "",
    "Haden Harrison will write back within one business day and set the ranch up before you touch it: pastures mapped, herds loaded, and your wand or scale head paired.",
    "",
    "Here is what you sent, so you can tell us if anything is wrong:",
    "",
    submissionLines(d),
    "",
    `If something above is off, or you have questions before Haden writes, reply to this email or write to ${CONTACT_EMAIL}.`,
    "",
    "Agrivanna Inc.",
    "1315 Northmount Dr NW, Calgary, AB T2L 0C9",
    CONTACT_EMAIL,
  ].join("\n")
}

/** Used only if the server has no mail credentials configured. */
export function trialMailto(d: TrialSubmission) {
  const subject = `Free trial — ${d.ranch || d.name || "Agrivanna"}`
  return `mailto:${TRIAL_EMAILS.join(",")}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    trialBody(d)
  )}`
}
