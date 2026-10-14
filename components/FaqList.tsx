import { Plus } from "lucide-react";
import Reveal from "@/components/Reveal";

/** Questions as native <details>, so they open without JavaScript. */
export default function FaqList({ items }: { items: readonly { q: string; a: string }[] }) {
  return (
    <div className="border-t border-white/10">
      {items.map((item, i) => (
        <Reveal key={item.q} delay={0.03 * i}>
          <details className="group border-b border-white/10 py-6">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-lg font-medium tracking-tight text-bone-50 marker:hidden hover:text-lime-400 sm:text-xl [&::-webkit-details-marker]:hidden">
              {item.q}
              <Plus
                aria-hidden="true"
                className="mt-1 h-5 w-5 shrink-0 text-lime-400 transition-transform duration-300 group-open:rotate-45"
              />
            </summary>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-bone-300">{item.a}</p>
          </details>
        </Reveal>
      ))}
    </div>
  );
}
