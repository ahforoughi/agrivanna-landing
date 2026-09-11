/** Where trial enquiries land. */
export const TRIAL_EMAIL = "haden@agrivanna.com"

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

/** Plain-text body shared by the email we send and the mailto fallback. */
export function trialBody(d: TrialSubmission) {
  const lines = (Object.keys(LABELS) as (keyof typeof LABELS)[])
    .map((k) => `${LABELS[k]}: ${d[k] || "—"}`)
    .join("\n")
  return `New free trial request\n\n${lines}\n\nCame from: ${d.source}`
}

/** Used only if the server has no mail credentials configured. */
export function trialMailto(d: TrialSubmission) {
  const subject = `Free trial — ${d.ranch || d.name || "Agrivanna"}`
  return `mailto:${TRIAL_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    trialBody(d)
  )}`
}
