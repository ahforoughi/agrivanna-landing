import { ClosingCta, ProblemSection, RecordingSection } from "@/components/HomeSections";
import PageHeader from "@/components/PageHeader";
import { getDictionary } from "@/lib/dictionaries";
import { pageLocale, type PageProps } from "@/lib/i18n";
import { pageMetadata } from "@/lib/page-meta";

export const generateMetadata = pageMetadata("voice", "/product/voice");

export default async function VoicePage({ params }: PageProps) {
  const dict = getDictionary(await pageLocale(params));
  const p = dict.site.pages.voice;

  return (
    <>
      <PageHeader
        eyebrow={p.eyebrow}
        line1={p.headLine1}
        line2={p.headLine2}
        intro={p.intro}
      image={{ src: "/app/chute-side-weigh.jpg", alt: dict.home.heroPhotoAlt }}
      />
      <ProblemSection />
      <RecordingSection />
      <ClosingCta />
    </>
  );
}
