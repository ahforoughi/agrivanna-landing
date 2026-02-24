import type React from "react"
import type { Metadata } from "next"
import { dmSans, inter } from "@/lib/fonts"
import { Analytics } from "@vercel/analytics/next"
import HubSpotFormPopup from "@/components/HubSpotFormPopup"
import AnnouncementBar from "@/components/AnnouncementBar"
import "./globals.css"

export const metadata: Metadata = {
  title: "Agrivanna - AI-Powered Livestock Health Tracking",
  description:
    "An AI-powered livestock health tracking system with a built-in vet marketplace, enabling farmers to monitor symptoms, get treatment recommendations, connect with veterinarians, and ensure seamless regulatory compliance.",
  icons: {
    icon: '/logo-typo.png',
    shortcut: '/logo-typo.png',
    apple: '/logo-typo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${inter.variable}`}>
      <body className="font-inter antialiased" suppressHydrationWarning>
        <AnnouncementBar />
        {children}
        <HubSpotFormPopup />
        <Analytics />
      </body>
    </html>
  )
}
