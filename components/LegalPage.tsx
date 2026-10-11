import Reveal from "@/components/Reveal";

/** One legal document in one language. Texts live in content/legal/<slug>.<lang>.tsx. */
export type LegalPage = {
  title: string;
  description: string;
  intro: string;
  /** e.g. "Agrivanna Inc. · Effective October 1, 2026" */
  updated?: string;
  body: React.ReactNode;
};

/** The shared hero and prose column every legal page uses. */
export default function LegalPageView({
  page,
  eyebrow,
  translationNote,
}: {
  page: LegalPage;
  eyebrow: string;
  /** Shown above translated text; empty for the English original. */
  translationNote: string;
}) {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-20">
        <div className="absolute inset-0 grid-backdrop" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4">
          <Reveal>
            <p className="eyebrow">{eyebrow}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 max-w-3xl text-5xl font-medium tracking-tightest sm:text-6xl">
              {page.title}
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-bone-300">{page.intro}</p>
          </Reveal>
          {page.updated && (
            <Reveal delay={0.2}>
              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-bone-300">
                {page.updated}
              </p>
            </Reveal>
          )}
        </div>
      </section>

      <section className="section-light border-t border-ink-950/10 py-20 sm:py-24">
        <div className="legal-prose mx-auto max-w-3xl px-4">
          {translationNote && (
            <p className="rounded-2xl border border-ink-950/10 bg-white px-5 py-4 text-sm">
              {translationNote}
            </p>
          )}
          {page.body}
        </div>
      </section>
    </>
  );
}
