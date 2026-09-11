"use client";

import { ArrowUpRight } from "lucide-react";
import { openTrialForm } from "@/lib/cta";

/**
 * Every path into the trial form. `source` is passed through to the email so we
 * know which button a rancher used.
 */
export default function TrialButton({
  source,
  children = "Start a free trial",
  className = "btn btn-solid",
  arrow = true,
}: {
  source: string;
  children?: React.ReactNode;
  className?: string;
  arrow?: boolean;
}) {
  return (
    <button type="button" onClick={() => openTrialForm(source)} className={className}>
      <span>{children}</span>
      {arrow && <ArrowUpRight className="h-4 w-4" />}
    </button>
  );
}
