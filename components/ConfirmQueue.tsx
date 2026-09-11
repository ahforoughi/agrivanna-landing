import { Check, X } from "lucide-react";

/**
 * A few days' worth of spoken notes waiting on a yes or no — one row per action,
 * across the whole operation rather than one animal.
 *
 * Drawn in markup rather than shipped as a screenshot so the copy can change
 * without a re-export. Swap for a real app export when one exists.
 */
const QUEUED = [
  {
    date: "Sep 11",
    action: "Calving",
    subject: "Cow 418",
    detail: "Bull calf, unassisted, north pasture",
  },
  {
    date: "Sep 11",
    action: "Pasture move",
    subject: "Yearling steers · 88 head",
    detail: "North Meadow → South",
  },
  {
    date: "Sep 10",
    action: "Treatment",
    subject: "Blue 61",
    detail: "Pinkeye, 8 cc, withdrawal logged",
  },
  {
    date: "Sep 10",
    action: "Bales out",
    subject: "12 round bales",
    detail: "Creek pasture, west gate",
  },
  {
    date: "Sep 09",
    action: "Salt & mineral",
    subject: "Block set out",
    detail: "South pasture, by the dugout",
  },
] as const;

export default function ConfirmQueue() {
  return (
    <div className="overflow-hidden rounded-4xl border border-ink-950/10 bg-cream-100">
      <div className="flex items-center justify-between gap-4 border-b border-ink-950/10 px-6 py-5 sm:px-8">
        <p className="text-base font-medium tracking-tight text-ink-950">Ready to confirm</p>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-700">
          5 records
        </p>
      </div>

      <ul className="divide-y divide-ink-950/10">
        {QUEUED.map((q) => (
          <li
            key={`${q.date}-${q.action}`}
            className="flex items-center gap-4 bg-white px-6 py-4 sm:gap-6 sm:px-8"
          >
            <p className="hidden w-14 shrink-0 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-700 sm:block">
              {q.date}
            </p>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-ink-950">
                {q.action}
                <span className="text-ink-700"> · {q.subject}</span>
              </p>
              <p className="mt-1 text-sm leading-snug text-ink-700">
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] sm:hidden">
                  {q.date} ·{" "}
                </span>
                {q.detail}
              </p>
            </div>
            <div className="flex shrink-0 gap-2">
              <span
                aria-hidden="true"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-950/15 text-ink-700"
              >
                <X className="h-4 w-4" />
              </span>
              <span
                aria-hidden="true"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-lime-400 text-ink-950"
              >
                <Check className="h-4 w-4" />
              </span>
            </div>
          </li>
        ))}
      </ul>

      <p className="bg-white px-6 py-5 text-sm text-ink-700 sm:px-8">
        Tap the check and it&apos;s in the book. Nothing is written to your records until you
        say so.
      </p>
    </div>
  );
}
