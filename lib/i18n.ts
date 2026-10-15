/**
 * English lives at the bare URL (/team), French under /fr (/fr/team). The
 * middleware maps bare URLs onto app/[lang] with lang = "en", so every page
 * renders from the same files in both languages.
 */
export const LOCALES = ["en", "fr"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

/** Set when a visitor picks a language, so the choice sticks across visits. */
export const LOCALE_COOKIE = "NEXT_LOCALE";

/** BCP 47 tags for <html lang> and Open Graph. */
export const HTML_LANG: Record<Locale, string> = { en: "en-CA", fr: "fr-CA" };
export const OG_LOCALE: Record<Locale, string> = { en: "en_CA", fr: "fr_CA" };

export function isLocale(value: string | undefined): value is Locale {
  return LOCALES.includes(value as Locale);
}

/**
 * The URL of an internal link in a given language. External, mailto and
 * same-page (#anchor) links pass through untouched.
 */
export function localizePath(locale: Locale, href: string) {
  if (locale === DEFAULT_LOCALE || !href.startsWith("/")) return href;
  if (href === "/") return "/fr";
  if (href.startsWith("/#") || href.startsWith("/?")) return `/fr${href.slice(1)}`;
  return `/fr${href}`;
}

/**
 * The language-neutral path behind a URL: /fr/team → /team, /fr → /.
 * Also strips /en: the middleware rewrites English pages onto /en/…, and that
 * internal path is what the server sees while rendering.
 */
export function stripLocale(pathname: string) {
  for (const prefix of ["/fr", "/en"]) {
    if (pathname === prefix) return "/";
    if (pathname.startsWith(`${prefix}/`)) return pathname.slice(prefix.length);
  }
  return pathname;
}

/** Canonical URL plus hreflang links, so search engines pair the two versions. */
export function alternates(locale: Locale, path: string) {
  return {
    canonical: localizePath(locale, path),
    languages: { en: path, fr: localizePath("fr", path), "x-default": path },
  };
}

/** Fills {name} placeholders. Dictionaries hold strings, not functions, so they
    can be passed from the server to client components. */
export function fmt(template: string, vars: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`));
}

/** Props of every page under app/[lang]. */
export type PageProps = { params: Promise<{ lang: string }> };

/** The page's language. The middleware only ever routes "en" or "fr" here. */
export async function pageLocale(params: PageProps["params"]): Promise<Locale> {
  const { lang } = await params;
  return isLocale(lang) ? lang : DEFAULT_LOCALE;
}
