import type { MetadataRoute } from "next";
import { localizePath } from "@/lib/i18n";

/**
 * /sitemap.xml: every page under app/[lang], at its one real address, with its
 * French twin. /launch and /demo are left out (both are marked noindex).
 * Add a page here when one is added to app/[lang].
 */
const PAGES = [
  "/",
  "/product",
  "/product/virtual-fencing",
  "/pricing",
  "/company",
  "/news",
  "/faq",
  "/contact",
  "/software-leads",
  "/privacy",
  "/service-terms",
  "/cookie-policy",
];

const SITE = "https://agrivanna.com";
const url = (path: string) => (path === "/" ? SITE : `${SITE}${path}`);

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.flatMap((path) => {
    const languages = { en: url(path), fr: url(localizePath("fr", path)), "x-default": url(path) };
    const priority = path === "/" ? 1 : ["/privacy", "/service-terms", "/cookie-policy"].includes(path) ? 0.3 : 0.7;
    return [
      { url: url(path), alternates: { languages }, priority },
      { url: url(localizePath("fr", path)), alternates: { languages }, priority },
    ];
  });
}
