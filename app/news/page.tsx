"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Menu, X, Calendar, Tag, TrendingUp, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function NewsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const articles = [
    {
      id: 1,
      title: "Agrivanna Seeks Strategic Investors to Accelerate Agricultural Innovation",
      category: "Investment",
      date: "January 2025",
      author: "Agrivanna Team",
      image: "/investment-news.jpg",
      excerpt: "Agrivanna is actively seeking strategic investors and partners to accelerate the development and deployment of our revolutionary livestock management platform. Join us in transforming the future of agriculture.",
      content: "Agrivanna Corporation, a leading innovator in agricultural technology, announced today that it is actively seeking strategic investors to accelerate the development and deployment of its comprehensive livestock management platform. The company is looking for partners who share their vision of revolutionizing agriculture through cutting-edge technology.\n\nFounded in October 2024, Agrivanna has developed a suite of integrated solutions including virtual grazing management, AI-enhanced smart weighing, health and behavior monitoring, and livestock lifecycle management. The platform addresses the growing need for efficient, sustainable, and technology-driven farming solutions.\n\n'We're at an exciting inflection point in our journey,' said Amirhossein Foroughi, CEO of Agrivanna. 'The agricultural technology market presents a massive $26B opportunity, and we're well-positioned to capture significant market share with our innovative approach to livestock management.'\n\nThe company is seeking investors who can provide not only capital but also strategic guidance and industry connections to help scale the business across North America and beyond. With the AI in AgTech sector growing at 21.6% CAGR, Agrivanna represents a compelling investment opportunity in a rapidly expanding market.\n\nInterested investors are encouraged to schedule a call with the Agrivanna team to learn more about the investment opportunity and how they can be part of transforming the agricultural industry."
    }
  ]

  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      {/* Header */}
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-6">
            {/* Logo */}
            <div className="flex items-center animate-fade-in">
              <Link href="/">
                <Image
                  src="/LOGO-black.png"
                  alt="Agrivanna Logo"
                  width={222}
                  height={75}
                  className="h-6 w-auto hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/services" className="text-black hover:text-gray-600 transition-all duration-300 hover:scale-105 relative group">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link href="/about" className="text-black hover:text-gray-600 transition-all duration-300 hover:scale-105 relative group">
                About us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link href="/news" className="text-[#2A5F36] font-semibold relative group">
                News
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#2A5F36]"></span>
              </Link>

              <Link href="/investment" className="text-black hover:text-gray-600 transition-all duration-300 hover:scale-105 relative group">
                Investment
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link href="/careers" className="text-black hover:text-gray-600 transition-all duration-300 hover:scale-105 relative group">
                Careers
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/contact" className="text-black hover:text-gray-600 transition-all duration-300 hover:scale-105 relative group">
                Contact us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button
                className="bg-[#2A5F36] hover:bg-[#637D59] text-white rounded-lg px-6 py-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                asChild
              >
                <a
                  href="https://calendly.com/aminrezaabbasi-agrivanna/meeting-with-agrivanna-team"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book demo
                </a>
              </Button>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-300 py-4">
              <nav className="flex flex-col space-y-4">
                <Link href="/services" className="text-black hover:text-gray-600">Services</Link>
                <Link href="/about" className="text-black hover:text-gray-600">About us</Link>
                <Link href="/news" className="text-[#2A5F36] font-semibold">News</Link>
                <Link href="/investment" className="text-black hover:text-gray-600">Investment</Link>
                        <Link href="/careers" className="text-black hover:text-gray-600">Careers</Link>
                        <Link href="/contact" className="text-black hover:text-gray-600">Contact us</Link>
                <Button
                  className="bg-[#2A5F36] hover:bg-[#637D59] text-white w-full"
                  asChild
                >
                  <a
                    href="https://calendly.com/aminrezaabbasi-agrivanna/meeting-with-agrivanna-team"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book demo
                  </a>
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-[#F2F2F2] py-20 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-[#2A5F36] leading-tight mb-6">
            Agrivanna News & Updates
          </h1>
          <p className="text-xl text-black leading-relaxed mb-8 max-w-3xl mx-auto">
            Stay informed about our latest developments, company milestones, and industry insights as we revolutionize agriculture through technology.
          </p>
        </div>
      </section>

      {/* Featured Article Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2A5F36] mb-4">Latest News</h2>
            <p className="text-xl text-[#637D59] max-w-3xl mx-auto">
              Our most recent announcements and company updates.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {articles.map(article => (
              <Card key={article.id} className="bg-white border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden mb-8">
                <div className="p-8">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <Tag className="w-4 h-4" />
                      <span className="bg-[#2A5F36] text-white px-3 py-1 rounded-full text-xs font-medium">{article.category}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-[#2A5F36] mb-4">
                    {article.title}
                  </h3>
                  
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
                    {article.content}
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <Button 
                      size="lg" 
                      className="bg-[#2A5F36] hover:bg-[#637D59] text-white px-8 py-3"
                      asChild
                    >
                      <a
                        href="https://calendly.com/aminrezaabbasi-agrivanna/meeting-with-agrivanna-team"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Schedule Investment Call
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-20 bg-[#2A5F36] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Stay Connected
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Subscribe to our newsletter for the latest news, updates, and insights from Agrivanna.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#637D59] text-gray-900"
            />
            <Button size="lg" className="bg-white text-[#2A5F36] hover:bg-gray-100 text-lg px-8 py-3">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                  className="h-16 w-auto"
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
                <li><Link href="/news" className="text-gray-300 hover:text-white transition-colors">News</Link></li>
                <li><Link href="/investment" className="text-gray-300 hover:text-white transition-colors">Investment</Link></li>
                <li><Link href="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
                        <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Social Media</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/agrivanna/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 Agrivanna Corporation. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}