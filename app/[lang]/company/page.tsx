import { BuiltWithSection, ClosingCta } from "@/components/HomeSections";
import PageHeader from "@/components/PageHeader";
import PartnersMarquee from "@/components/PartnersMarquee";
import StorySection from "@/components/home/StorySection";
import TeamSections from "@/components/TeamSections";
import { getDictionary } from "@/lib/dictionaries";
import { pageLocale, type PageProps } from "@/lib/i18n";
import { pageMetadata } from "@/lib/page-meta";

export const generateMetadata = pageMetadata("company", "/company");

export default async function CompanyPage({ params }: PageProps) {
  const locale = await pageLocale(params);
  const dict = getDictionary(locale);
  const p = dict.site.pages.company;

  return (
    <>
      <PageHeader
        eyebrow={p.eyebrow}
        line1={p.headLine1}
        line2={p.headLine2}
        intro={p.intro}
        image={{ src: "/story/founding-team-collar.jpg", alt: p.photoAlt, badge: dict.site.rndBadge }}
      />

      <TeamSections dict={dict} />

      <StorySection />

      <BuiltWithSection />
      <PartnersMarquee id="partners" />

      <ClosingCta />
    </>
  );
}
