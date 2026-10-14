import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import { ClosingCta, PayoffSection, PricingSection } from "@/components/HomeSections";
import FaqList from "@/components/FaqList";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { getDictionary } from "@/lib/dictionaries";
import { localizePath, pageLocale, type PageProps } from "@/lib/i18n";
import { pageMetadata } from "@/lib/page-meta";

export const generateMetadata = pageMetadata("pricing", "/pricing");

export default async function PricingPage({ params }: PageProps) {
  const locale = await pageLocale(params);
  const dict = getDictionary(locale);
  const scope = dict.site.pricingScope;
  const p = dict.site.pages.pricing;

  return (
    <>
      <PageHeader eyebrow={p.eyebrow} line1={p.headLine1} line2={p.headLine2} intro={p.intro} />

      {/* What's for sale today: the software. The hardware is R&D. */}
      <div className="relative mx-auto -mt-6 mb-16 max-w-6xl px-4">
        <Reveal delay={0.2}>
          <div className="flex flex-col gap-4 rounded-3xl border border-lime-400/25 bg-lime-400/[0.05] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div className="flex items-start gap-4">
              <Info aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-lime-400" />
              <div>
                <p className="text-base font-medium text-bone-50">{scope.title}</p>
                <p className="mt-1 max-w-2xl text-sm leading-relaxed text-bone-300">{scope.body}</p>
              </div>
            </div>
            <Link
              href={localizePath(locale, "/product/virtual-fencing")}
              className="inline-flex shrink-0 items-center gap-2 text-sm text-lime-400 hover:underline"
            >
              {scope.link} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>

      <PricingSection />
      <PayoffSection />

      <section className="relative border-t border-white/5 py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow">{p.faqEyebrow}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 text-4xl font-medium tracking-tighter text-bone-50 sm:text-5xl">
                {p.faqHeading}
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <FaqList items={dict.site.faq.filter((f) => f.pricing)} />
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
