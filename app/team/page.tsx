import Image from "next/image";
import { COFOUNDERS, ADVISORS } from "@/lib/team";
import PersonCard from "@/components/PersonCard";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Team — Agrivanna",
  description:
    "The founders and advisors building Agrivanna — AI researchers, FPGA engineers, ranchers, and operators.",
};

export default function TeamPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden pt-40 pb-20">
        <div className="absolute inset-0 grid-backdrop" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4">
          <Reveal>
            <p className="eyebrow">Who we are</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 max-w-4xl text-5xl font-medium tracking-tightest sm:text-7xl lg:text-8xl">
              Engineers,
              <br />
              <span className="text-bone-300">ranchers,</span>
              <br />
              <span className="text-lime-400">operators.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-10 max-w-xl text-bone-300">
              Agrivanna is a small team that built a system most of the industry said couldn&apos;t
              exist: offline grazing intelligence that works on working ranches. Here&apos;s who&apos;s
              behind it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Co-founders */}
      <section className="relative border-t border-white/5 py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="eyebrow">Co-founders</p>
              <h2 className="mt-4 text-3xl font-medium tracking-tighter sm:text-4xl">
                The three building the company.
              </h2>
            </div>
            <p className="hidden max-w-xs font-mono text-[11px] uppercase tracking-[0.18em] text-bone-300 md:block">
              Calgary, AB · Founded Oct 2024
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {COFOUNDERS.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <PersonCard person={p} variant="founder" index={i} />
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
              <p className="eyebrow">Advisory board</p>
              <h2 className="mt-4 text-3xl font-medium tracking-tighter sm:text-4xl">
                The people we call when it counts.
              </h2>
            </div>
          </div>
          <div>
            {ADVISORS.map((p, i) => (
              <PersonCard key={p.slug} person={p} variant="advisor" index={i} />
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
                alt="The Agrivanna team"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 1100px, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
              <div className="absolute inset-x-8 bottom-8 flex items-end justify-between">
                <p className="max-w-md text-lg font-medium tracking-tight text-bone-50 sm:text-2xl">
                  Built in Calgary.
                  <br />
                  Tested on Alberta ranches.
                </p>
                <p className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-bone-50/80 md:block">
                  Agrivanna / Team
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
