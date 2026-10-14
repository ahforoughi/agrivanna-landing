import { ClosingCta, HouseSection } from "@/components/HomeSections";
import PageHeader from "@/components/PageHeader";
import { getDictionary } from "@/lib/dictionaries";
import { pageLocale, type PageProps } from "@/lib/i18n";
import { pageMetadata } from "@/lib/page-meta";

export const generateMetadata = pageMetadata("web", "/product/web");

export default async function WebPage({ params }: PageProps) {
  const dict = getDictionary(await pageLocale(params));
  const p = dict.site.pages.web;

  return (
    <>
      <PageHeader
        eyebrow={p.eyebrow}
        line1={p.headLine1}
        line2={p.headLine2}
        intro={p.intro}
      />
      <HouseSection />
      <ClosingCta />
    </>
  );
}
