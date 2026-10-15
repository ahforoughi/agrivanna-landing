import { ClosingCta } from "@/components/HomeSections";
import FaqList from "@/components/FaqList";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import TrialButton from "@/components/TrialButton";
import { CONTACT_EMAIL } from "@/lib/cta";
import { getDictionary } from "@/lib/dictionaries";
import { pageLocale, type PageProps } from "@/lib/i18n";
import { pageMetadata } from "@/lib/page-meta";

export const generateMetadata = pageMetadata("faq", "/faq");

export default async function FaqPage({ params }: PageProps) {
  const dict = getDictionary(await pageLocale(params));
  const p = dict.site.pages.faq;
  const [before, after] = p.stillBody.split("{email}");

  return (
    <>
      <PageHeader eyebrow={p.eyebrow} line1={p.headLine1} line2={p.headLine2} intro={p.intro} />

      <section className="relative border-t border-white/5 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <FaqList items={dict.site.faq} />
          </div>
          <div className="lg:col-span-4">
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-white/10 bg-ink-900 p-8 lg:sticky lg:top-32">
                <h2 className="text-2xl font-medium tracking-tight text-bone-50">{p.stillTitle}</h2>
                <p className="mt-3 text-base leading-relaxed text-bone-300">
                  {before}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-bone-50 underline underline-offset-4 hover:text-lime-400"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  {after}
                </p>
                <div className="mt-6">
                  <TrialButton source="faq" className="btn" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
