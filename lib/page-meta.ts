import type { Metadata } from "next";
import { getDictionary, type Dictionary } from "@/lib/dictionaries";
import { alternates, pageLocale, type PageProps } from "@/lib/i18n";

/** generateMetadata for a page whose copy lives under site.pages[key]. */
export function pageMetadata(key: keyof Dictionary["site"]["pages"], path: string) {
  return async ({ params }: PageProps): Promise<Metadata> => {
    const locale = await pageLocale(params);
    const p = getDictionary(locale).site.pages[key];
    return { title: p.metaTitle, description: p.metaDescription, alternates: alternates(locale, path) };
  };
}
