"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"

const STORAGE_KEY = "agrivanna-announcement-dismissed"

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const dismissed = typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY)
    if (!dismissed) setIsVisible(true)
  }, [])

  useEffect(() => {
    if (typeof document === "undefined") return
    document.documentElement.style.setProperty(
      "--announcement-height",
      isVisible ? "3.5rem" : "0"
    )
  }, [isVisible])

  const handleDismiss = () => {
    setIsVisible(false)
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, "true")
    }
  }

  if (!isVisible) return null

  return (
    <div
      className="w-full min-h-[3.5rem] bg-[#2A5F36] text-white shadow-md flex items-center"
      role="banner"
      aria-label="Announcement"
    >
      <div className="container mx-auto px-4 py-3 w-full">
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <p className="text-center text-sm sm:text-base font-medium">
            We&apos;re launching our <strong>Pasture Management app</strong> with satellite integration soon.
          </p>
          <div className="flex items-center gap-2">
            <Link
              href="/pilot-waitlist"
              className="inline-flex items-center rounded-lg bg-white px-4 py-2.5 min-h-[44px] text-sm font-semibold text-[#2A5F36] transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2A5F36]"
            >
              Join the waitlist
            </Link>
            <button
              type="button"
              onClick={handleDismiss}
              className="rounded p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center text-white/90 hover:bg-white/10 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Dismiss announcement"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
