"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { X } from "lucide-react"

const STORAGE_KEY = "agrivanna-announcement-dismissed"

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(false)
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dismissed = typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY)
    if (!dismissed) setIsVisible(true)
  }, [])

  // Sync --announcement-height with actual bar height so the header never overlaps
  useEffect(() => {
    if (!isVisible || typeof document === "undefined") {
      document.documentElement.style.setProperty("--announcement-height", "0")
      return
    }
    const el = barRef.current
    if (!el) {
      document.documentElement.style.setProperty("--announcement-height", "3.5rem")
      return
    }
    const setHeight = () => {
      document.documentElement.style.setProperty(
        "--announcement-height",
        `${el.getBoundingClientRect().height}px`
      )
    }
    setHeight()
    const ro = new ResizeObserver(setHeight)
    ro.observe(el)
    return () => ro.disconnect()
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
      ref={barRef}
      className="w-full min-h-[3.5rem] bg-[#2A5F36] text-white flex items-center"
      role="banner"
      aria-label="Announcement"
    >
      <div className="container mx-auto px-3 sm:px-4 py-2.5 sm:py-3 w-full">
        {/* Mobile: stack text then buttons so height is predictable and no overlap */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-2 sm:gap-4">
          <p className="text-center text-xs sm:text-sm md:text-base font-medium px-1 order-1">
            We&apos;re launching our <strong>Pasture Management app</strong> with satellite integration soon.
          </p>
          <div className="flex items-center gap-2 order-2 shrink-0">
            <Link
              href="/pilot-waitlist"
              className="inline-flex items-center rounded-lg bg-white px-3 py-2 sm:px-4 sm:py-2.5 min-h-[44px] text-xs sm:text-sm font-semibold text-[#2A5F36] transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2A5F36]"
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
