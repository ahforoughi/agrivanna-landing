"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { X } from "lucide-react";

// HubSpot config — carried forward from the existing site so CRM pipeline stays intact.
const HS = {
  portalId: "342489770",
  formId: "7a9b5027-edb2-4e96-96cd-840d6cd13b1d",
  region: "na3",
  script: "https://js-na3.hsforms.net/forms/embed/342489770.js",
} as const;

const STORAGE_KEY = "agrivanna-v2-form-popup";

export default function HubSpotFormPopup() {
  const [open, setOpen] = useState(false);
  const [formReady, setFormReady] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = window.localStorage.getItem(STORAGE_KEY);
    if (!seen) {
      const t = window.setTimeout(() => setOpen(true), 4000);
      return () => window.clearTimeout(t);
    }
  }, []);

  // Watch the frame for HubSpot's injected form so we can hide the spinner.
  useEffect(() => {
    if (!open) return;
    const node = frameRef.current;
    if (!node) return;

    const check = () => {
      if (node.querySelector("form, iframe")) {
        setFormReady(true);
        return true;
      }
      return false;
    };

    if (check()) return;

    const observer = new MutationObserver(() => {
      if (check()) observer.disconnect();
    });
    observer.observe(node, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [open]);

  const dismiss = () => {
    setOpen(false);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, "true");
    }
  };

  if (!open) return null;

  return (
    <>
      <Script src={HS.script} strategy="afterInteractive" />
      <div
        className="fixed inset-0 z-[120] flex items-end sm:items-center justify-center p-0 sm:p-4"
        style={{ background: "rgba(5, 6, 7, 0.7)", backdropFilter: "blur(12px)" }}
        onClick={dismiss}
      >
        <div
          className="relative w-full max-h-[85svh] overflow-y-auto rounded-t-2xl sm:rounded-3xl sm:max-w-lg border border-white/10 bg-ink-900"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={dismiss}
            aria-label="Close"
            className="sticky right-0 top-0 z-10 ml-auto mr-3 mt-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-ink-900/80 text-bone-50/70 transition-colors hover:border-lime-400 hover:text-lime-400"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="px-6 pb-8 sm:px-8 -mt-4">
            <p className="eyebrow">Pilot waitlist</p>
            <h3 className="mt-3 text-xl sm:text-2xl font-medium tracking-tight text-bone-50">
              Run your ranch smarter.
            </h3>
            <p className="mt-2 text-sm text-bone-300">
              Summer 2026 pilots are filling up. Drop your details and we&apos;ll be in touch.
            </p>

            <div className="relative mt-6 min-h-[260px] [&_input]:!bg-ink-800 [&_input]:!text-bone-50 [&_label]:!text-bone-300">
              {/* HubSpot mounts the form into this frame. It MUST be in the DOM
                  before the embed script scans, so we render it unconditionally. */}
              <div
                ref={frameRef}
                className="hs-form-frame"
                data-region={HS.region}
                data-form-id={HS.formId}
                data-portal-id={HS.portalId}
              />
              {!formReady && (
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-lime-400" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
