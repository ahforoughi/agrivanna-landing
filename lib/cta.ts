import type { Locale } from "@/lib/i18n"

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
  /** Site language the form was sent from; the rancher's copy is written in it. */
  lang: Locale
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

type OptionValue =
  | (typeof HEAD_OPTIONS)[number]
  | (typeof OPERATION_OPTIONS)[number]
  | (typeof RECORD_OPTIONS)[number]

/**
 * What the French form shows for each option. The value sent is always the
 * English one above, so every enquiry reaches the team in the same words.
 */
export const OPTION_LABELS_FR: Record<OptionValue, string> = {
  "Under 100": "Moins de 100",
  "100 – 300": "100 à 300",
  "300 – 800": "300 à 800",
  "800 – 2,000": "800 à 2 000",
  "Over 2,000": "Plus de 2 000",
  "Cow-calf": "Vache-veau",
  "Cow-calf plus backgrounding": "Vache-veau et semi-finition",
  "Backgrounding or feedlot": "Semi-finition ou parc d’engraissement",
  "Community pasture or grazing association": "Pâturage communautaire ou association de pâturage",
  "Seedstock / purebred": "Sujets reproducteurs / race pure",
  "Something else": "Autre chose",
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
    location: "Where",
    head: "Head",
    operation: "Operation",
    records: "Records kept in",
    notes: "Notes",
  },
  fr: {
    name: "Nom",
    email: "Courriel",
    phone: "Téléphone",
    ranch: "Ranch",
    location: "Lieu",
    head: "Têtes",
    operation: "Exploitation",
    records: "Registres tenus",
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
export function confirmationBody(d: TrialSubmission) {
  if (d.lang === "fr") return confirmationBodyFr(d)

  const greeting = d.name.trim().split(/\s+/)[0] || "there"
  const outfit = d.ranch ? `try Agrivanna on ${d.ranch}` : "try Agrivanna"

  return [
    `Hello ${greeting},`,
    "",
    `We have your request to ${outfit}. It reached us on ${today("en")}.`,
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

/** The same reply, for a rancher who used the French site. */
function confirmationBodyFr(d: TrialSubmission) {
  const first = d.name.trim().split(/\s+/)[0]
  const outfit = d.ranch ? `essayer Agrivanna sur ${d.ranch}` : "essayer Agrivanna"

  return [
    first ? `Bonjour ${first},` : "Bonjour,",
    "",
    `Nous avons bien reçu votre demande pour ${outfit}. Elle nous est parvenue le ${today("fr")}.`,
    "",
    "Haden Harrison vous répondra d’ici un jour ouvrable et configurera le ranch avant que vous l’utilisiez : pâturages cartographiés, troupeaux chargés, et votre lecteur ou votre indicateur de balance jumelé.",
    "",
    "Voici ce que vous nous avez envoyé, pour que vous puissiez nous signaler toute erreur :",
    "",
    submissionLines(d, "fr"),
    "",
    `Si quelque chose ci-dessus est inexact, ou si vous avez des questions avant que Haden vous écrive, répondez à ce courriel ou écrivez à ${CONTACT_EMAIL}.`,
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
