import Image from "next/image";
import Link from "next/link";
import { Linkedin, ArrowUpRight } from "lucide-react";
import { Person } from "@/lib/team";

type Variant = "founder" | "advisor";

export default function PersonCard({
  person,
  variant = "founder",
  index,
}: {
  person: Person;
  variant?: Variant;
  index: number;
}) {
  const number = String(index + 1).padStart(2, "0");

  if (variant === "founder") {
    return (
      <article className="group relative overflow-hidden rounded-3xl border border-white/5 bg-ink-900 transition-colors hover:border-lime-400/30">
        <div className="relative aspect-[4/5] overflow-hidden bg-ink-800">
          <Image
            src={person.photo}
            alt={person.name}
            fill
            quality={95}
            className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
            sizes="(min-width: 1280px) 420px, (min-width: 1024px) 33vw, 100vw"
          />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink-900 to-transparent" />
          <span className="absolute left-5 top-5 font-mono text-[10px] uppercase tracking-[0.2em] text-bone-50/80">
            / {number}
          </span>
          <Link
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-ink-950/50 backdrop-blur transition-colors hover:border-lime-400 hover:text-lime-400"
            aria-label={`${person.name} on LinkedIn`}
          >
            <Linkedin className="h-4 w-4" />
          </Link>
        </div>
        <div className="p-7">
          <p className="text-xs uppercase tracking-[0.16em] text-lime-400">{person.role}</p>
          <h3 className="mt-3 text-2xl font-medium tracking-tight text-bone-50">
            {person.name}
          </h3>
          <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-bone-300">
            {person.focus}
          </p>
          <p className="mt-5 text-sm leading-relaxed text-bone-300">{person.bio}</p>
        </div>
      </article>
    );
  }

  // advisor variant — horizontal list row
  return (
    <article className="group grid gap-6 border-t border-white/5 py-10 md:grid-cols-[180px_1fr_auto] md:items-center">
      <div className="flex items-center gap-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-300">
          / {number}
        </span>
        <div className="relative h-20 w-20 overflow-hidden rounded-full border border-white/10">
          <Image
            src={person.photo}
            alt={person.name}
            fill
            className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
            sizes="80px"
          />
        </div>
      </div>
      <div>
        <h3 className="text-xl font-medium tracking-tight text-bone-50">{person.name}</h3>
        <p className="mt-1 text-xs uppercase tracking-[0.14em] text-lime-400">{person.role}</p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-bone-300">{person.bio}</p>
      </div>
      <Link
        href={person.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="btn justify-self-start md:justify-self-end"
        aria-label={`${person.name} on LinkedIn`}
      >
        LinkedIn <ArrowUpRight className="h-4 w-4" />
      </Link>
    </article>
  );
}
