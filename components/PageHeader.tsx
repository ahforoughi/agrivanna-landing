import Image from "next/image";
import Reveal from "@/components/Reveal";
import RndBadge from "@/components/RndBadge";

/**
 * The opening band every inner page shares: eyebrow, two-line headline, intro,
 * and a photo or other content on the right.
 */
export default function PageHeader({
  eyebrow,
  line1,
  line2,
  intro,
  image,
  aside,
}: {
  eyebrow: string;
  line1: string;
  line2: string;
  intro: string;
  image?: { src: string; alt: string; badge?: string };
  aside?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-40 pb-20">
      <div className="absolute inset-0 grid-backdrop" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow">{eyebrow}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 max-w-4xl text-5xl font-medium tracking-tightest sm:text-6xl lg:text-7xl">
                {line1}
                <br />
                <span className="text-lime-400">{line2}</span>
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-10 max-w-xl text-base text-bone-300">{intro}</p>
            </Reveal>
          </div>
          {(image || aside) && (
            <div className="lg:col-span-5">
              <Reveal delay={0.2}>
                {image ? (
                  <div className="media relative aspect-[4/3]">
                    {image.badge && <RndBadge label={image.badge} />}
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      priority
                      quality={95}
                      className="object-cover"
                      sizes="(min-width: 1024px) 480px, 100vw"
                    />
                  </div>
                ) : (
                  aside
                )}
              </Reveal>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
