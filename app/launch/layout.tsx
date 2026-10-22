import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

// Same fonts as the main site (app/[lang]/layout.tsx)
const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Try Agrivanna on your land",
  description: "Leave your details and we'll set you up.",
  icons: { icon: "/logos/logo-mark.png" },
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#14161A",
};

/**
 * Root layout for /launch, the Launch Party sign up page the booth QR code
 * opens. Its own layout (no site menu, footer or cookie banner): a phone
 * visitor at the booth should see the form and nothing else.
 */
export default function LaunchLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="bg-ink-950 font-sans text-bone-50 antialiased">{children}</body>
    </html>
  );
}
