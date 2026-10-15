import Image from "next/image";
import { COFOUNDERS, ADVISORS, type TeamMember, type TeamSlug } from "@/lib/team";
import PersonCard from "@/components/PersonCard";
import Reveal from "@/components/Reveal";
import type { Dictionary } from "@/lib/dictionaries";
import { fmt } from "@/lib/i18n";

/**
 * Who's behind Agrivanna: co-founders, advisory board and the team photo.
 * Lives on the About page under #team (the old /team address redirects there).
 */
export default function TeamSections({ dict }: { dict: Dictionary }) {
  const t = dict.team;
  const person = (m: TeamMember & { slug: TeamSlug }) => ({ ...m, ...t.people[m.slug] });

  return (
    <div id="team" className="scroll-mt-24">
      {/* Who we are */}
      <section className="relative border-t border-white/5 pt-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <p className="eyebrow">{t.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 text-4xl font-medium tracking-tighter text-bone-50 sm:text-5xl">
                {t.headLine1} <span className="text-bone-300">{t.headLine2}</span>{" "}
                <span className="text-lime-400">{t.headLine3}</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-base leading-relaxed text-bone-300">{t.intro}</p>
          </Reveal>
        </div>
      </section>

      {/* Co-founders: no divider, it continues the intro above */}
      <section className="relative pb-24 pt-16">
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

    </div>
  );
}
