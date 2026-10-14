import { ClosingCta, FeaturesSection } from "@/components/HomeSections";
import PageHeader from "@/components/PageHeader";
import { getDictionary } from "@/lib/dictionaries";
import { pageLocale, type PageProps } from "@/lib/i18n";
import { pageMetadata } from "@/lib/page-meta";

export const generateMetadata = pageMetadata("features", "/features");

export default async function FeaturesPage({ params }: PageProps) {
  const dict = getDictionary(await pageLocale(params));
  const p = dict.site.pages.features;

  return (
    <>
      <PageHeader
        eyebrow={p.eyebrow}
        line1={p.headLine1}
        line2={p.headLine2}
        intro={p.intro}
      />
      <FeaturesSection />
      <ClosingCta />
    </>
  );
}
