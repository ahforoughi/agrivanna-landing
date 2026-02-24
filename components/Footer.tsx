import Image from "next/image"
import Link from "next/link"
import { Linkedin, Instagram, Youtube, Mail } from "lucide-react"

const SOCIAL_LINKS = [
  { href: "https://www.linkedin.com/company/agrivanna/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.instagram.com/agrivanna/", icon: Instagram, label: "Instagram" },
  { href: "https://www.youtube.com/@Agrivanna", icon: Youtube, label: "YouTube" },
  { href: "mailto:info@agrivanna.com", icon: Mail, label: "Email" },
]

function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex space-x-4 ${className}`}>
      {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          className="text-gray-400 hover:text-white transition-colors p-2 -m-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded"
          aria-label={label}
        >
          <Icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  )
}

export { SocialLinks, SOCIAL_LINKS }

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4 sm:mb-6">
              <Image
                src="/LOGO-black.png"
                alt="Agrivanna Logo"
                width={200}
                height={67}
                className="h-12 sm:h-16 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              Agrivanna is a global leader in design, manufacture and distribution of agricultural technology and precision solutions.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Services</h3>
            <ul className="space-y-1 sm:space-y-3">
              <li><Link href="/services#virtual-grazing-management" className="text-gray-300 hover:text-white transition-colors py-2 sm:py-0 block text-sm sm:text-base">Virtual Grazing Management</Link></li>
              <li><Link href="/services#ai-enhanced-smart-weighing" className="text-gray-300 hover:text-white transition-colors py-2 sm:py-0 block text-sm sm:text-base">AI-Enhanced Smart Weighing</Link></li>
              <li><Link href="/services#health--behavior-monitoring" className="text-gray-300 hover:text-white transition-colors py-2 sm:py-0 block text-sm sm:text-base">Health & Behavior Monitoring</Link></li>
              <li><Link href="/services#livestock-lifecycle-management" className="text-gray-300 hover:text-white transition-colors py-2 sm:py-0 block text-sm sm:text-base">Livestock Lifecycle Management</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Company</h3>
            <ul className="space-y-1 sm:space-y-3">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors py-2 sm:py-0 block text-sm sm:text-base">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors py-2 sm:py-0 block text-sm sm:text-base">Contact Us</Link></li>
              <li><Link href="/pilot-waitlist" className="text-gray-300 hover:text-white transition-colors py-2 sm:py-0 block text-sm sm:text-base">Pilot Waitlist</Link></li>
              <li><Link href="/service-terms" className="text-gray-300 hover:text-white transition-colors py-2 sm:py-0 block text-sm sm:text-base">Terms of Use</Link></li>
              <li><Link href="/cookie-policy" className="text-gray-300 hover:text-white transition-colors py-2 sm:py-0 block text-sm sm:text-base">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Social Media</h3>
            <SocialLinks />
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2026 Agrivanna Inc. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
