import Image from "next/image"
import Link from "next/link"
import { FaLinkedinIn, FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa"

const SOCIAL_LINKS = [
  { href: "https://www.linkedin.com/company/agrivanna/", icon: FaLinkedinIn, label: "LinkedIn" },
  { href: "https://www.instagram.com/agrivanna/", icon: FaInstagram, label: "Instagram" },
  { href: "https://www.youtube.com/@Agrivanna", icon: FaYoutube, label: "YouTube" },
  { href: "mailto:info@agrivanna.com", icon: FaEnvelope, label: "Email" },
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
          className="text-gray-400 hover:text-white transition-colors"
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
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Image
                src="/LOGO-black.png"
                alt="Agrivanna Logo"
                width={200}
                height={67}
                className="h-16 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-6">
              Agrivanna is a global leader in design, manufacture and distribution of agricultural technology and precision solutions.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services#virtual-grazing-management" className="text-gray-300 hover:text-white transition-colors">Virtual Grazing Management</Link></li>
              <li><Link href="/services#ai-enhanced-smart-weighing" className="text-gray-300 hover:text-white transition-colors">AI-Enhanced Smart Weighing</Link></li>
              <li><Link href="/services#health--behavior-monitoring" className="text-gray-300 hover:text-white transition-colors">Health & Behavior Monitoring</Link></li>
              <li><Link href="/services#livestock-lifecycle-management" className="text-gray-300 hover:text-white transition-colors">Livestock Lifecycle Management</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/news" className="text-gray-300 hover:text-white transition-colors">News</Link></li>
              <li><Link href="/investment" className="text-gray-300 hover:text-white transition-colors">Investment</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Social Media</h3>
            <SocialLinks />
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Agrivanna Corporation. All Rights Reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Center</a>
              <a href="#terms" className="text-gray-400 hover:text-white transition-colors">Terms of Use</a>
              <a href="#cookies" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
              <a href="#accessibility" className="text-gray-400 hover:text-white transition-colors">Accessibility Statement</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
