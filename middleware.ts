import { NextResponse, type NextRequest } from "next/server";
import { LOCALE_COOKIE, isLocale, type Locale } from "@/lib/i18n";

/** French if the browser ranks French above English, otherwise English. */
function fromAcceptLanguage(header: string | null): Locale {
  if (!header) return "en";
  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().toLowerCase().split(";");
      const q = params.find((p) => p.trim().startsWith("q="));
      return { lang: tag.split("-")[0], q: q ? Number(q.trim().slice(2)) : 1 };
    })
    .filter((l) => l.lang === "en" || l.lang === "fr")
    .sort((a, b) => b.q - a.q);
  return ranked[0]?.lang === "fr" ? "fr" : "en";
}

/**
 * /fr/... is French and passes straight through. Bare URLs are English and are
 * rewritten onto app/[lang] as "en", so English keeps its existing URLs.
 *
 * A visitor who picked French with the toggle, or whose browser asks for French
 * and who hasn't picked yet, is sent from a bare URL to its /fr twin.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1];

  if (first === "fr") return NextResponse.next();

  // English has no prefix; /en/team would be a duplicate of /team.
  if (first === "en") {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, 308);
  }

  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  const preferred = isLocale(saved) ? saved : fromAcceptLanguage(request.headers.get("accept-language"));

  if (preferred === "fr") {
    const url = request.nextUrl.clone();
    url.pathname = pathname === "/" ? "/fr" : `/fr${pathname}`;
    return NextResponse.redirect(url, 307);
  }

  const url = request.nextUrl.clone();
  url.pathname = `/en${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Pages only: not the trial API, Next's own assets, files in public/, or the
  // path Vercel BotID routes its checks through (it must not get a /en prefix),
  // or /launch, the Launch Party sign up page (app/launch, English only).
  matcher: ["/((?!api|_next|_vercel|149e9513-01fa-4fb0-aad4-566afd725d1b|launch$|.*\\..*).*)"],
};
