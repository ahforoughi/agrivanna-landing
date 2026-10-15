"use client";

import { usePathname } from "next/navigation";
import { stripLocale } from "@/lib/i18n";

/**
 * Credit for the photo-scanned cow, shown only in the footer of the page whose
 * 3D herd uses it (the virtual fencing page). Required by the scan's licence
 * and the University of Arizona's permission.
 */
export default function ScanCredit({ label }: { label: string }) {
  const path = stripLocale(usePathname() || "/");
  if (path !== "/product/virtual-fencing") return null;
  return (
    <a
      href="https://sketchfab.com/3d-models/none-b6c8c027ab2f44de8b4a9ff518ea5f56"
      target="_blank"
      rel="noopener noreferrer"
      className="text-bone-300/70 transition-colors hover:text-lime-400"
    >
      {label}
    </a>
  );
}
