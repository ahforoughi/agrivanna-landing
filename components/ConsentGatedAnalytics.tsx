"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next";

const STORAGE_KEY = "agrivanna-cookie-consent";

/** Only loads analytics once the visitor has accepted in the cookie banner. */
export default function ConsentGatedAnalytics() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const read = () => {
      try {
        setAllowed(localStorage.getItem(STORAGE_KEY) === "accepted");
      } catch {
        setAllowed(false);
      }
    };
    read();
    const onChoice = (e: Event) =>
      setAllowed((e as CustomEvent<string>).detail === "accepted");
    window.addEventListener("agrivanna-consent", onChoice);
    return () => window.removeEventListener("agrivanna-consent", onChoice);
  }, []);

  if (!allowed) return null;
  return <Analytics />;
}
