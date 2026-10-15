import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ClosingCta } from "@/components/HomeSections";
import HerdHero from "@/components/herd/HerdHero";
import Reveal from "@/components/Reveal";
import RndBadge from "@/components/RndBadge";
import TrialButton from "@/components/TrialButton";
import { getDictionary } from "@/lib/dictionaries";
import { localizePath, pageLocale, type PageProps } from "@/lib/i18n";
import { pageMetadata } from "@/lib/page-meta";

export const generateMetadata = pageMetadata("fencing", "/product/virtual-fencing");

/**
 * Virtual fencing, told as what it is: in research and development, not for
 * sale. The herd scene shows the idea; the photos show real prototypes, each
 * labelled R&D.
 */
export default async function VirtualFencingPage({ params }: PageProps) {
  const locale = await pageLocale(params);
  const dict = getDictionary(locale);
  const p = dict.site.pages.fencing;
  const pasture = dict.home.pasture;
  const rnd = dict.site.rndBadge;

  const PHOTOS = [
    { src: "/story/timeline-ranch-pilot-collars-v2.jpg", alt: p.photoPilots, className: "row-span-2 aspect-[3/4] sm:aspect-auto" },
    { src: "/cow-with-collar.png", alt: p.photoCow, className: "aspect-[16/10]" },
    { src: "/story/founding-team-collar.jpg", alt: p.photoTeam, className: "aspect-[16/10]" },
  ];

  return (
    <>
      <HerdHero
        copy={{ eyebrow: p.eyebrow, line1: p.heroLine1, line2: p.heroLine2, line3: p.heroLine3, body: p.heroBody }}
        actions={
          <>
            <TrialButton source="virtual-fencing-hero" />
            <Link href="#idea" className="btn">
              {p.howLink}
            </Link>
          </>
        }
      />

      {/* The idea, in three steps */}
      <section id="idea" className="section-light relative scroll-mt-24 overflow-hidden border-t border-ink-950/10 py-28">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <p className="eyebrow">{p.ideaEyebrow}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 text-4xl font-medium tracking-tighter text-ink-950 sm:text-5xl">
              {p.ideaLine1}
              <br />
              <span className="text-ink-700">{p.ideaLine2}</span>
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-px border border-ink-950/10 bg-ink-950/10 md:grid-cols-3">
            {p.ideaSteps.map((s, i) => (
              <Reveal key={s.step} delay={0.05 * i}>
                <div className="flex h-full flex-col bg-cream-50 p-8 lg:p-10">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#2F6A14]">{s.step}</p>
                  <div className="mt-16">
                    <h3 className="text-2xl font-medium tracking-tight text-ink-950">{s.head}</h3>
                    <p className="mt-3 text-base leading-relaxed text-ink-700">{s.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="relative overflow-hidden border-t border-white/5 py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow">{p.whyEyebrow}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 text-4xl font-medium tracking-tighter text-bone-50 sm:text-5xl">
                {p.whyLine1}
                <br />
                <span className="text-lime-400">{p.whyLine2}</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-6">
            <p className="text-lg leading-relaxed text-bone-300">{pasture.fenceBody}</p>
          </Reveal>
        </div>
      </section>

      {/* Where it stands: R&D, with the prototypes to show for it */}
      <section className="relative overflow-hidden border-t border-white/5 py-28">
        <div className="absolute inset-0 grid-backdrop" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow">{p.statusEyebrow}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 text-4xl font-medium tracking-tighter text-bone-50 sm:text-5xl">
                {p.statusLine1}
                <br />
                <span className="text-bone-300">{p.statusLine2}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 text-base leading-relaxed text-bone-300">{p.statusBody}</p>
              <p className="mt-5 text-base leading-relaxed text-bone-300">{pasture.fenceHonest}</p>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:grid-rows-2 lg:col-span-7">
            {PHOTOS.map((ph, i) => (
              <Reveal key={ph.src} delay={0.08 * i} className={ph.className.includes("row-span-2") ? "sm:row-span-2" : ""}>
                <div className={`media relative h-full overflow-hidden ${ph.className}`}>
                  <RndBadge label={rnd} />
                  <Image
                    src={ph.src}
                    alt={ph.alt}
                    fill
                    quality={90}
                    className="object-cover"
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Start with the software */}
      <section className="section-light relative overflow-hidden border-t border-ink-950/10 py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <p className="eyebrow">{p.softwareEyebrow}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 max-w-2xl text-4xl font-medium tracking-tighter text-ink-950 sm:text-5xl">
                {p.softwareLine1}
                <br />
                <span className="text-ink-700">{p.softwareLine2}</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="max-w-sm">
              <p className="text-base leading-relaxed text-ink-700">{p.softwareBody}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <TrialButton source="virtual-fencing" />
                <Link href={localizePath(locale, "/product#pasture")} className="btn">
                  {p.softwareLink} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
