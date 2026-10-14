import { FlaskConical } from "lucide-react";

/** Pinned on any photo that shows collar hardware: it's a prototype, not for sale. */
export default function RndBadge({ label, className = "" }: { label: string; className?: string }) {
  return (
    <span
      className={`pointer-events-none absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full border border-lime-400/40 bg-ink-950/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-lime-400 backdrop-blur ${className}`}
    >
      <FlaskConical aria-hidden="true" className="h-3 w-3" />
      {label}
    </span>
  );
}
