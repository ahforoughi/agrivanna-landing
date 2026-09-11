import Reveal from "@/components/Reveal";
import TrialForm from "@/components/TrialForm";

export const metadata = {
  title: "Get started — Agrivanna",
  description:
    "Tell us about your operation and get set up with Agrivanna grazing intelligence software.",
};

export default function SoftwareLeadsPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden pt-40 pb-20">
        <div className="absolute inset-0 grid-backdrop" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="eyebrow">Get started</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-6 max-w-3xl text-5xl font-medium tracking-tightest sm:text-6xl lg:text-7xl">
                  Put Agrivanna
                  <br />
                  <span className="text-lime-400">on your ranch.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-10 max-w-xl text-bone-300">
                  Tell us about your operation and we&apos;ll get you set up. It takes a couple of
                  minutes — the questions below are the same ones we ask on a first call.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.2}>
                <ul className="space-y-4 border-l border-white/10 pl-6">
                  <li className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone-300">
                    Where you run cattle
                  </li>
                  <li className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone-300">
                    Operation type &amp; herd size
                  </li>
                  <li className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone-300">
                    Pasture boundaries, if you have them
                  </li>
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
            <TrialForm inline />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 text-center text-sm text-bone-300">
              Questions before you start? Email{" "}
              <a
                href="mailto:haden@agrivanna.com"
                className="underline underline-offset-4 hover:text-lime-400"
              >
                haden@agrivanna.com
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
