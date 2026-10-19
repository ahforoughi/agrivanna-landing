import type { Locale } from "@/lib/i18n"

/** Where trial enquiries land. Every submission goes to all of these. */
export const TRIAL_EMAILS = ["haden@agrivanna.com", "info@agrivanna.com"] as const

/** The one address we print when copy has to name a single inbox. */
export const TRIAL_EMAIL = TRIAL_EMAILS[0]

/** Where we tell a rancher to write with questions. */
export const CONTACT_EMAIL = "info@agrivanna.com"

/** Any button anywhere opens the trial form by dispatching this. */
export const OPEN_TRIAL_EVENT = "agrivanna-open-trial"

/**
 * Every tag the site's buttons and forms send as `source`. The API refuses
 * any other value: a request without one of these didn't come from our pages.
 */
export const TRIAL_SOURCES = [
  "navbar",
  "navbar-mobile",
  "hero",
  "hero-herd",
  "pricing",
  "faq",
  "closing-cta",
  "virtual-fencing",
  "virtual-fencing-hero",
  "contact-page",
  "software-leads-page",
] as const

/** Bots fill in every field; people never see this one. A name browser autofill doesn't recognise, so it's never filled for a real visitor. */
export const TRIAL_TRAP_FIELD = "agv_hp_extra"

/** Faster than this from opening the form to sending is a machine (even autofill plus a click takes longer). */
export const TRIAL_MIN_FILL_MS = 1500

export function openTrialForm(source: string) {
  window.dispatchEvent(new CustomEvent(OPEN_TRIAL_EVENT, { detail: source }))
}

export type TrialSubmission = {
  name: string
  email: string
  phone: string
  ranch: string
  records: string
  notes: string
  source: string
  /** Site language the form was sent from; the rancher's copy is written in it. */
  lang: Locale
}

export const RECORD_OPTIONS = [
  "Notebook, calving book, or whiteboard",
  "Spreadsheets",
  "Another ranch program",
  "Mostly in my head",
] as const

type OptionValue = (typeof RECORD_OPTIONS)[number]

/**
 * What the French form shows for each option. The value sent is always the
 * English one above, so every enquiry reaches the team in the same words.
 */
export const OPTION_LABELS_FR: Record<OptionValue, string> = {
  "Notebook, calving book, or whiteboard": "Calepin, registre de vêlage ou tableau blanc",
  Spreadsheets: "Feuilles de calcul",
  "Another ranch program": "Un autre logiciel de ranch",
  "Mostly in my head": "Surtout dans ma tête",
}

/** An option as a rancher reading the given language would see it. */
export function optionLabel(value: string, lang: Locale) {
  return lang === "fr" ? (OPTION_LABELS_FR[value as OptionValue] ?? value) : value
}

type Field = keyof Omit<TrialSubmission, "source" | "lang">

const LABELS: Record<Locale, Record<Field, string>> = {
  en: {
    name: "Name",
    email: "Email",
    phone: "Phone",
    ranch: "Ranch",
    records: "Records kept in",
    notes: "Notes",
  },
  fr: {
    name: "Nom",
    email: "Courriel",
    phone: "Téléphone",
    ranch: "Ranch",
    records: "Tenue des registres",
    notes: "Notes",
  },
}

/** The submitted fields as labelled lines, echoed to us and back to the rancher. */
function submissionLines(d: TrialSubmission, lang: Locale = "en") {
  return (Object.keys(LABELS[lang]) as Field[])
    // French sets a non-breaking space before the colon
    .map((k) => `${LABELS[lang][k]}${lang === "fr" ? "\u00a0:" : ":"} ${optionLabel(d[k], lang) || "—"}`)
    .join("\n")
}

/** Plain-text body shared by the email we send and the mailto fallback. */
export function trialBody(d: TrialSubmission) {
  const language = d.lang === "fr" ? "French — reply in French" : "English"
  return `New free trial request\n\n${submissionLines(d)}\n\nCame from: ${d.source}\nSite language: ${language}`
}

/** Subject of the email the team gets. (FR) flags a French-speaking rancher in the inbox. */
export function trialSubject(d: TrialSubmission) {
  return `Free trial — ${d.ranch || d.name || "Agrivanna"}${d.lang === "fr" ? " (FR)" : ""}`
}

export const CONFIRMATION_SUBJECT: Record<Locale, string> = {
  en: "We have your Agrivanna trial request",
  fr: "Nous avons bien reçu votre demande d’essai Agrivanna",
}

/** House style: 16 September 2026 / 16 septembre 2026, in the ranch's own time zone. */
function today(lang: Locale) {
  return new Intl.DateTimeFormat(lang === "fr" ? "fr-CA" : "en-GB", {
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
/**
 * The visitor's copy. It repeats nothing they typed (not even their name), so
 * the form can't be used to send someone else's text from our domain to an
 * address a bot entered. Our own copy (trialBody) still has every field.
 */
export function confirmationBody(d: TrialSubmission) {
  if (d.lang === "fr") return confirmationBodyFr()

  return [
    "Hello,",
    "",
    `We have your request to try Agrivanna. It reached us on ${today("en")}.`,
    "",
    "Our team will be in touch soon to set up your ranch.",
    "",
    `If you have questions in the meantime, reply to this email or write to ${CONTACT_EMAIL}.`,
    "",
    "Agrivanna Inc.",
    "1315 Northmount Dr NW, Calgary, AB T2L 0C9",
    CONTACT_EMAIL,
  ].join("\n")
}

function confirmationBodyFr() {
  return [
    "Bonjour,",
    "",
    `Nous avons bien reçu votre demande d’essai d’Agrivanna. Elle nous est parvenue le ${today("fr")}.`,
    "",
    "Notre équipe communiquera avec vous sous peu pour configurer votre ranch.",
    "",
    `Si vous avez des questions d’ici là, répondez à ce courriel ou écrivez à ${CONTACT_EMAIL}.`,
    "",
    "Agrivanna Inc.",
    "1315 Northmount Dr NW, Calgary (Alberta) T2L 0C9",
    CONTACT_EMAIL,
  ].join("\n")
}

/** Used only if the server has no mail credentials configured. */
export function trialMailto(d: TrialSubmission) {
  return `mailto:${TRIAL_EMAILS.join(",")}?subject=${encodeURIComponent(trialSubject(d))}&body=${encodeURIComponent(
    trialBody(d)
  )}`
}
