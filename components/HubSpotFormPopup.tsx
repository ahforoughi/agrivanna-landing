"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import Script from "next/script"

export default function HubSpotFormPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScriptLoaded, setIsScriptLoaded] = useState(false)

  useEffect(() => {
    // Check if user has already seen the popup
    const hasSeenPopup = localStorage.getItem("agrivanna-form-popup-seen")
    
    if (!hasSeenPopup) {
      // Show popup immediately
      setIsOpen(true)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    // Mark that the user has seen the popup
    localStorage.setItem("agrivanna-form-popup-seen", "true")
  }

  // Don't render anything if popup shouldn't be shown
  if (!isOpen) return null

  return (
    <>
      <Script
        src="https://js-na3.hsforms.net/forms/embed/342489770.js"
        strategy="lazyOnload"
        onLoad={() => setIsScriptLoaded(true)}
      />
      
      {/* Overlay */}
      <div 
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        style={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.3)', 
          backdropFilter: 'blur(8px)', 
          WebkitBackdropFilter: 'blur(8px)' 
        }}
      >
        {/* Popup */}
        <div className="relative bg-white rounded-lg shadow-xl max-w-xl w-full max-h-[90vh] overflow-auto">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
            aria-label="Close popup"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Form Container */}
          <div className="p-6">
            {!isScriptLoaded && (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2A5F36]"></div>
              </div>
            )}
            {isScriptLoaded && (
              <div 
                className="hs-form-frame" 
                data-region="na3" 
                data-form-id="7a9b5027-edb2-4e96-96cd-840d6cd13b1d" 
                data-portal-id="342489770"
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}
