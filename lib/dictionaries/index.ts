import type { Locale } from "@/lib/i18n";
import en, { type Dictionary } from "./en";
import fr from "./fr";

export type { Dictionary };

const DICTIONARIES: Record<Locale, Dictionary> = { en, fr };

/** Server-side lookup. Client components get theirs from useI18n(). */
export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}
