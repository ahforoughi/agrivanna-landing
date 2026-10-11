import type { Metadata } from "next";
import Image from "next/image";
import { COFOUNDERS, ADVISORS, type TeamMember, type TeamSlug } from "@/lib/team";
import PersonCard from "@/components/PersonCard";
import Reveal from "@/components/Reveal";
import { getDictionary } from "@/lib/dictionaries";
import { alternates, fmt, pageLocale, type PageProps } from "@/lib/i18n";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = await pageLocale(params);
  const t = getDictionary(locale).team;
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: alternates(locale, "/team"),
  };
}

export default async function TeamPage({ params }: PageProps) {
  const t = getDictionary(await pageLocale(params)).team;
  const person = (m: TeamMember & { slug: TeamSlug }) => ({ ...m, ...t.people[m.slug] });

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
                <h1 className="mt-6 max-w-4xl text-5xl font-medium tracking-tightest sm:text-7xl lg:text-8xl">
                  {t.headLine1}
                  <br />
                  <span className="text-bone-300">{t.headLine2}</span>
                  <br />
                  <span className="text-lime-400">{t.headLine3}</span>
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
                <div className="media relative aspect-[4/3]">
                  <Image
                    src="/story/founding-team-collar.jpg"
                    alt={t.photoAlt}
                    fill
                    quality={95}
                    className="object-cover"
                    sizes="(min-width: 1024px) 480px, 100vw"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Co-founders */}
      <section className="relative border-t border-white/5 py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="eyebrow">{t.cofoundersEyebrow}</p>
              <h2 className="mt-4 text-3xl font-medium tracking-tighter sm:text-4xl">
                {t.cofoundersHeading}
              </h2>
            </div>
            <p className="hidden max-w-xs font-mono text-[11px] uppercase tracking-[0.18em] text-bone-300 md:block">
              {t.founded}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {COFOUNDERS.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <PersonCard
                  person={person(p)}
                  variant="founder"
                  index={i}
                  linkedinAria={fmt(t.linkedinAria, { name: p.name })}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section className="relative border-t border-white/5 py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="eyebrow">{t.advisorsEyebrow}</p>
              <h2 className="mt-4 text-3xl font-medium tracking-tighter sm:text-4xl">
                {t.advisorsHeading}
              </h2>
            </div>
          </div>
          <div>
            {ADVISORS.map((p, i) => (
              <PersonCard
                key={p.slug}
                person={person(p)}
                variant="advisor"
                index={i}
                linkedinAria={fmt(t.linkedinAria, { name: p.name })}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team photo */}
      <section className="relative border-t border-white/5 py-24">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-white/5">
              <Image
                src="/story/team-photo.jpg"
                alt={t.teamPhotoAlt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 1100px, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
              <div className="absolute inset-x-8 bottom-8 flex items-end justify-between">
                <p className="max-w-md text-lg font-medium tracking-tight text-bone-50 sm:text-2xl">
                  {t.closingLine1}
                  <br />
                  {t.closingLine2}
                </p>
                <p className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-bone-50/80 md:block">
                  {t.closingTag}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
