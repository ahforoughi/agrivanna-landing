import type { Metadata } from "next";
import LegalPageView from "@/components/LegalPage";
import { getDictionary } from "@/lib/dictionaries";
import { alternates, pageLocale, type PageProps } from "@/lib/i18n";
import en from "@/content/legal/service-terms.en";
import fr from "@/content/legal/service-terms.fr";

const PAGES = { en, fr };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = await pageLocale(params);
  return {
    title: `${PAGES[locale].title} — Agrivanna`,
    description: PAGES[locale].description,
    alternates: alternates(locale, "/service-terms"),
  };
}

export default async function ServiceTermsPage({ params }: PageProps) {
  const locale = await pageLocale(params);
  const { legal } = getDictionary(locale);
  return (
    <LegalPageView
      page={PAGES[locale]}
      eyebrow={legal.eyebrow}
      translationNote={legal.translationNote}
    />
  );
}
