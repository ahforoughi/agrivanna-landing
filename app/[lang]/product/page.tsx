import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Check, ClipboardList, LayoutGrid, Map, Monitor, Smartphone, Sprout, type LucideIcon } from "lucide-react";
import { ClosingCta, FeaturesSection } from "@/components/HomeSections";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { getDictionary, type Dictionary } from "@/lib/dictionaries";
import { pageLocale, type PageProps } from "@/lib/i18n";
import { pageMetadata } from "@/lib/page-meta";

export const generateMetadata = pageMetadata("software", "/product");

type SectionKey = keyof Dictionary["site"]["pages"]["software"]["sections"];

/**
 * The software, one section per part, in the order of the Product menu. Ids
 * match the menu's links (lib/site-nav). Light and dark alternate; the picture
 * swaps sides each time.
 */
const SECTIONS: {
  key: SectionKey;
  id: string;
  icon: LucideIcon;
  /** "screen" is a bare screenshot we frame; "device" already shows the laptop or phone */
  shot: { src: string; width: number; height: number; kind: "screen" | "device" };
}[] = [
  { key: "webApp", id: "web-app", icon: Monitor, shot: { src: "/app/web-dashboard.png", width: 1663, height: 909, kind: "device" } },
  { key: "iosApp", id: "ios-app", icon: Smartphone, shot: { src: "/app/voice-listening-phone.png", width: 681, height: 1455, kind: "device" } },
  { key: "pasture", id: "pasture", icon: Map, shot: { src: "/app/pasture-satellite-phone.png", width: 681, height: 1455, kind: "device" } },
  { key: "herd", id: "herd", icon: ClipboardList, shot: { src: "/app/herd-web.png", width: 2400, height: 1199, kind: "device" } },
  { key: "grazing", id: "grazing", icon: Sprout, shot: { src: "/app/grazing-ndvi-phone.png", width: 681, height: 1455, kind: "device" } },
];

export default async function SoftwarePage({ params }: PageProps) {
  const dict = getDictionary(await pageLocale(params));
  const p = dict.site.pages.software;
  const items = dict.site.menu.items;

  const jump = [
    ...SECTIONS.map((s) => ({ id: s.id, icon: s.icon, label: items[s.key].label })),
    { id: "features", icon: LayoutGrid, label: items.features.label },
  ];

  return (
    <>
      <PageHeader
        eyebrow={p.eyebrow}
        line1={p.headLine1}
        line2={p.headLine2}
        intro={p.intro}
        aside={
          <nav aria-label={p.jumpTitle} className="rounded-3xl border border-white/10 bg-ink-900 p-3">
            <p className="px-3 pb-2 pt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-bone-400">{p.jumpTitle}</p>
            <ul>
              {jump.map(({ id, icon: Icon, label }) => (
                <li key={id}>
                  <Link
                    href={`#${id}`}
                    className="group flex items-center gap-3 rounded-2xl px-3 py-2.5 text-[0.95rem] text-bone-50 transition-colors hover:bg-white/5 hover:text-lime-400"
                  >
                    <Icon aria-hidden="true" className="h-4 w-4 shrink-0 text-lime-400" />
                    {label}
                    <ArrowDown aria-hidden="true" className="ml-auto h-3.5 w-3.5 text-bone-400 transition-transform group-hover:translate-y-0.5 group-hover:text-lime-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        }
      />

      {SECTIONS.map(({ key, id, shot }, i) => {
        const s = p.sections[key];
        const light = i % 2 === 1;
        return (
          <section
            key={id}
            id={id}
            className={`relative scroll-mt-24 overflow-hidden border-t py-24 sm:py-28 ${
              light ? "section-light border-ink-950/10" : "border-white/5"
            }`}
          >
            <div className="mx-auto max-w-6xl px-4">
              <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
                <div className={`lg:col-span-5 ${light ? "lg:order-2 lg:col-start-8" : ""}`}>
                  <Reveal>
                    <p className="eyebrow">{items[key].label}</p>
                  </Reveal>
                  <Reveal delay={0.05}>
                    <h2 className={`mt-6 text-4xl font-medium tracking-tighter sm:text-5xl ${light ? "text-ink-950" : "text-bone-50"}`}>
                      {s.head1}
                      <br />
                      <span className={light ? "text-ink-700" : "text-bone-300"}>{s.head2}</span>
                    </h2>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <p className={`mt-6 text-base leading-relaxed ${light ? "text-ink-700" : "text-bone-300"}`}>{s.body}</p>
                  </Reveal>
                  <Reveal delay={0.15}>
                    <ul className="mt-8 space-y-4">
                      {s.bullets.map((b) => (
                        <li
                          key={b}
                          className={`flex items-start gap-3 border-t pt-4 text-base leading-relaxed ${
                            light ? "border-ink-950/10 text-ink-700" : "border-white/10 text-bone-300"
                          }`}
                        >
                          <Check aria-hidden="true" className={`mt-1 h-4 w-4 shrink-0 ${light ? "text-[#2F6A14]" : "text-lime-400"}`} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </div>

                <div className={`lg:col-span-7 ${light ? "lg:order-1 lg:col-start-1" : ""}`}>
                  <Reveal delay={0.15}>
                    <div className="flex justify-center">
                      <Image
                        src={shot.src}
                        alt={s.imageAlt}
                        width={shot.width}
                        height={shot.height}
                        quality={95}
                        sizes={shot.height > shot.width ? "(min-width: 1024px) 320px, 70vw" : "(min-width: 1024px) 700px, 100vw"}
                        className={`h-auto w-full ${shot.height > shot.width ? "max-w-[280px] sm:max-w-[320px]" : ""} ${
                          shot.kind === "screen"
                            ? "rounded-[2rem] border border-black/10 shadow-[0_30px_60px_-10px_rgba(20,22,26,0.45)]"
                            : "drop-shadow-[0_30px_45px_rgba(20,22,26,0.35)]"
                        }`}
                      />
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <FeaturesSection />
      <ClosingCta />
    </>
  );
}
