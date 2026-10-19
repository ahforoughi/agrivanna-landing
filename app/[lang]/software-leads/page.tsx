import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import TrialForm from "@/components/TrialForm";
import { getDictionary } from "@/lib/dictionaries";
import { alternates, pageLocale, type PageProps } from "@/lib/i18n";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = await pageLocale(params);
  const t = getDictionary(locale).softwareLeads;
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: alternates(locale, "/software-leads"),
  };
}

export default async function SoftwareLeadsPage({ params }: PageProps) {
  const t = getDictionary(await pageLocale(params)).softwareLeads;

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden pt-40 pb-20">
        <div className="absolute inset-0 grid-backdrop" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="eyebrow">{t.eyebrow}</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-6 max-w-3xl text-5xl font-medium tracking-tightest sm:text-6xl lg:text-7xl">
                  {t.headLine1}
                  <br />
                  <span className="text-lime-400">{t.headLine2}</span>
                </h1>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-10 max-w-xl text-bone-300">
                  {t.intro}
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.2}>
                <ul className="space-y-4 border-l border-white/10 pl-6">
                  {t.asks.map((ask) => (
                    <li
                      key={ask}
                      className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone-300"
                    >
                      {ask}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="relative border-t border-white/5 py-20 sm:py-24">
        <div className="mx-auto max-w-2xl px-4">
          <Reveal>
            <TrialForm inline source="software-leads-page" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 text-center text-sm text-bone-300">
              {t.questionsBefore}
              <a
                href="mailto:haden@agrivanna.com"
                className="underline underline-offset-4 hover:text-lime-400"
              >
                haden@agrivanna.com
              </a>
              {t.questionsAfter}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
