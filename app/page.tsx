"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Stethoscope, Brain, Shield, Users, ArrowRight, ChevronDown, Search, Menu, X, Globe, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react"
import Image from "next/image"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function LandingPage() {
  const [currentText, setCurrentText] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [solutionsTimeout, setSolutionsTimeout] = useState<NodeJS.Timeout | null>(null)
  const [aboutTimeout, setAboutTimeout] = useState<NodeJS.Timeout | null>(null)
  const rotatingTexts = ["Tracking System", "Health Management", "Virtual Grazing"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  // Helper functions for dropdown timing
  const handleSolutionsMouseEnter = () => {
    if (solutionsTimeout) {
      clearTimeout(solutionsTimeout)
      setSolutionsTimeout(null)
    }
    setSolutionsOpen(true)
  }

  const handleSolutionsMouseLeave = () => {
    const timeout = setTimeout(() => {
      setSolutionsOpen(false)
    }, 150) // 150ms delay
    setSolutionsTimeout(timeout)
  }

  const handleAboutMouseEnter = () => {
    if (aboutTimeout) {
      clearTimeout(aboutTimeout)
      setAboutTimeout(null)
    }
    setAboutOpen(true)
  }

  const handleAboutMouseLeave = () => {
    const timeout = setTimeout(() => {
      setAboutOpen(false)
    }, 150) // 150ms delay
    setAboutTimeout(timeout)
  }

  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      <SpeedInsights />
      {/* Header */}
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-6">
            {/* Logo */}
            <div className="flex items-center animate-fade-in">
              <Image
                src="/LOGO-black.png"
                alt="Agrivanna Logo"
                width={222}
                height={75}
                className="h-6 w-auto hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#product" className="text-black hover:text-gray-600 transition-all duration-300 hover:scale-105 relative group">
                Product
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              
              {/* Solutions Dropdown */}
              <div className="relative group">
                <button 
                  className="flex items-center space-x-1 text-black hover:text-gray-600 transition-all duration-300 hover:scale-105"
                  onMouseEnter={handleSolutionsMouseEnter}
                  onMouseLeave={handleSolutionsMouseLeave}
                >
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {solutionsOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50"
                    onMouseEnter={handleSolutionsMouseEnter}
                    onMouseLeave={handleSolutionsMouseLeave}
                  >
                    <a href="#virtual-fencing" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-black">Virtual Fencing</a>
                    <a href="#ai-tracking" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-black">AI Weight Tracking</a>
                    <a href="#health-monitoring" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-black">Health Monitoring</a>
                    <a href="#farm-management" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-black">Farm Management</a>
                  </div>
                )}
              </div>

              {/* About us Dropdown */}
              <div className="relative group">
                <button 
                  className="flex items-center space-x-1 text-black hover:text-gray-600 transition-all duration-300 hover:scale-105"
                  onMouseEnter={handleAboutMouseEnter}
                  onMouseLeave={handleAboutMouseLeave}
                >
                  <span>About us</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {aboutOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50"
                    onMouseEnter={handleAboutMouseEnter}
                    onMouseLeave={handleAboutMouseLeave}
                  >
                    <a href="#company" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-black">Company</a>
                    <a href="#team" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-black">Team</a>
                    <a href="#careers" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-black">Careers</a>
                  </div>
                )}
              </div>

              <a href="#news" className="text-black hover:text-gray-600 transition-all duration-300 hover:scale-105 relative group">
                News
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
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
                <a href="#product" className="text-black hover:text-gray-600">Product</a>
                
                {/* Services Mobile */}
                <div>
                  <div className="text-black font-medium mb-2">Services</div>
                  <div className="ml-4 space-y-2">
                    <a href="#virtual-fencing" className="block text-gray-600 hover:text-black">Virtual Fencing</a>
                    <a href="#ai-tracking" className="block text-gray-600 hover:text-black">AI Weight Tracking</a>
                    <a href="#health-monitoring" className="block text-gray-600 hover:text-black">Health Monitoring</a>
                    <a href="#farm-management" className="block text-gray-600 hover:text-black">Farm Management</a>
                  </div>
                </div>

                {/* About us Mobile */}
                <div>
                  <div className="text-black font-medium mb-2">About us</div>
                  <div className="ml-4 space-y-2">
                    <a href="#company" className="block text-gray-600 hover:text-black">Company</a>
                    <a href="#team" className="block text-gray-600 hover:text-black">Team</a>
                    <a href="#careers" className="block text-gray-600 hover:text-black">Careers</a>
                  </div>
                </div>

                <a href="#news" className="text-black hover:text-gray-600">News</a>
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
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/20251009_1242_Remix Video_remix_01k754f9zke3qbkagga2zj02j2.mp4" type="video/mp4" />
        </video>
        
        {/* Content Overlay */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl lg:text-6xl font-bold text-[#2A5F36] leading-tight mb-6">
                <span className="block animate-slide-in-left" style={{ animationDelay: '0.1s' }}>Smarter livestock</span>
                <span className="block animate-slide-in-left" style={{ animationDelay: '0.2s' }}>tracking, minimal</span>
                <span className="block animate-slide-in-left" style={{ animationDelay: '0.3s' }}>effort.</span>
              </h1>
              <p className="text-xl text-black leading-relaxed mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
                Virtual grazing, AI weight estimation, and early health detection in one platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <Button
                  size="lg"
                  className="bg-[#2A5F36] hover:bg-[#637D59] text-white text-lg px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  asChild
                >
                  <a
                    href="https://calendly.com/aminrezaabbasi-agrivanna/meeting-with-agrivanna-team"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Start free trial
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#637D59] text-[#2A5F36] hover:bg-[#637D59] hover:text-white text-lg px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Watch demo
                </Button>
              </div>
              <p className="text-sm text-[#637D59] animate-fade-in" style={{ animationDelay: '0.6s' }}>
                Trusted by producers in Alberta
              </p>
            </div>
            <div className="relative animate-fade-in-right">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#637D59] hover:shadow-xl transition-all duration-500 hover:scale-105">
                <div className="grid grid-cols-3 gap-4">
                  {/* Virtual Grazing Card */}
                  <div className="bg-white rounded-xl p-4 border border-[#637D59] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#4A90E2] group">
                    <div className="w-8 h-8 bg-[#2A5F36] rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-[#2A5F36] group-hover:text-[#4A90E2] transition-colors duration-300">Virtual Grazing</p>
                  </div>

                  {/* AI Weight Card */}
                  <div className="bg-white rounded-xl p-4 border border-[#637D59] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#4A90E2] group" style={{ animationDelay: '0.1s' }}>
                    <div className="w-8 h-8 bg-[#2A5F36] rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-[#2A5F36] group-hover:text-[#4A90E2] transition-colors duration-300">AI Weight</p>
                  </div>

                  {/* Health Monitor Card */}
                  <div className="bg-white rounded-xl p-4 border border-[#637D59] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#4A90E2] group" style={{ animationDelay: '0.2s' }}>
                    <div className="w-8 h-8 bg-[#2A5F36] rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-[#2A5F36] group-hover:text-[#4A90E2] transition-colors duration-300">Health Monitor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section id="product" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2A5F36] mb-4">Sowing the seeds of ingenuity.</h2>
            <p className="text-xl text-[#637D59] max-w-3xl mx-auto">
              Agrivanna's precision technologies are revolutionizing the way we farm the land. By harnessing the power of innovation, farmers can now achieve higher yields with fewer resources.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Virtual Fencing */}
            <Card className="bg-[#F2F2F2] border border-[#637D59] hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4A90E2] bg-opacity-20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Stethoscope className="w-6 h-6 text-[#4A90E2]" />
                </div>
                <h3 className="text-xl font-semibold text-[#2A5F36] mb-3 group-hover:text-[#4A90E2] transition-colors duration-300">
                 Virtual Fencing Without Physical Barriers
                </h3>
                <p className="text-[#637D59] leading-relaxed">
                Create dynamic, GPS-based grazing zones in seconds — no wires, no hassle.
                </p>
              </CardContent>
            </Card>

            {/* AI-Powered Weight Tracking */}
            <Card className="bg-[#F2F2F2] border border-[#637D59] hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#637D59] bg-opacity-20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-6 h-6 text-[#637D59]" />
                </div>
                <h3 className="text-xl font-semibold text-[#2A5F36] mb-3 group-hover:text-[#637D59] transition-colors duration-300">
                AI-Powered Weighing & Feed Optimization
                </h3>
                <p className="text-[#637D59] leading-relaxed">
                Built-in weighing systems track weight during natural movement, while AI models suggest tailored feed plans to boost growth or recovery.
                </p>
              </CardContent>
            </Card>

            {/* Early health detection */}
            <Card className="bg-[#F2F2F2] border border-[#637D59] hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#2A5F36] bg-opacity-20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-6 h-6 text-[#2A5F36]" />
                </div>
                <h3 className="text-xl font-semibold text-[#2A5F36] mb-3 group-hover:text-[#2A5F36] transition-colors duration-300">Early Health Detection with No Extra Hardware</h3>
                <p className="text-[#637D59] leading-relaxed">
                Our system analyzes camera, collar, and sensor data to flag abnormal behaviors, slow growth, or escape attempts.
                </p>
              </CardContent>
            </Card>

            {/* Offline */}
            <Card className="bg-[#F2F2F2] border border-[#637D59] hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4A90E2] bg-opacity-20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-[#4A90E2]" />
                </div>
                <h3 className="text-xl font-semibold text-[#2A5F36] mb-3 group-hover:text-[#4A90E2] transition-colors duration-300">
                Offline-Ready & Built for Farms
                </h3>
                <p className="text-[#637D59] leading-relaxed">
                Whether you're in the foothills or the far north, Agrivanna works. Collars store data locally and sync when back online.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News & Updates</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed about the latest developments in agricultural technology and Agrivanna's innovations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                  Technology
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Agrivanna Launches Next-Generation AI Platform
                </h3>
                <p className="text-gray-600 mb-4">
                  Revolutionary AI-powered livestock management system with enhanced predictive analytics and real-time monitoring capabilities.
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Learn More →
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                  Sustainability
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Reducing Environmental Impact Through Smart Farming
                </h3>
                <p className="text-gray-600 mb-4">
                  How Agrivanna's precision agriculture solutions are helping farmers reduce resource usage while increasing productivity.
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Learn More →
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-purple-100 text-purple-800 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                  Partnership
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Agrivanna Partners with Leading Agricultural Universities
                </h3>
                <p className="text-gray-600 mb-4">
                  New research collaborations to advance precision agriculture and develop cutting-edge farming technologies.
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Learn More →
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Today's challenges are tomorrow's possibilities.</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Our purpose at Agrivanna is to provide farmer-focused solutions to sustainably feed our world. Our ambition is to accelerate innovation and efficiency to drive positive outcomes for farmers and the planet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-green-600 hover:bg-green-700 text-white" asChild>
                  <a href="#sustainability">Read our Sustainability Report</a>
                </Button>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Sustainable Agriculture</h3>
                <p className="text-gray-600">Building a better future for farming</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works
      <section id="how-it-works" className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-dm-sans text-4xl font-bold text-white mb-4">How Agrivanna Works</h2>
            <p className="font-inter text-xl text-gray-300 max-w-2xl mx-auto">
              Simple, effective livestock health management in three easy steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-dm-sans text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="font-dm-sans text-2xl font-semibold text-white mb-4">Monitor</h3>
              <p className="font-inter text-gray-300 leading-relaxed">
                Use your smartphone to capture symptoms and behavioral changes in your livestock.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-dm-sans text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="font-dm-sans text-2xl font-semibold text-white mb-4">Analyze</h3>
              <p className="font-inter text-gray-300 leading-relaxed">
                Our AI analyzes the data and provides instant health assessments and treatment suggestions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-dm-sans text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="font-dm-sans text-2xl font-semibold text-white mb-4">Connect</h3>
              <p className="font-inter text-gray-300 leading-relaxed">
                Connect with veterinarians when needed and maintain compliance records automatically.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#2A5F36]">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Together, we're helping change the world for good.
          </h2>
          <p className="text-xl text-[#F2F2F2] mb-8 max-w-3xl mx-auto">
            Not everyone can claim to feed the world, but it is part of our every day. Behind everything we do for our farmers, there is one Agrivanna team making it happen. We are proud to put our curiosity to work, building a better and more sustainable world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#2A5F36] hover:bg-[#F2F2F2] text-lg px-8 py-3" asChild>
              <a
                href="https://calendly.com/aminrezaabbasi-agrivanna/meeting-with-agrivanna-team"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#2A5F36] text-lg px-8 py-3">
              Learn More
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
                  src="/LOGO White.png"
                  alt="Agrivanna Logo"
                  width={200}
                  height={67}
                  className="h-16 w-auto"
                />
              </div>
              <p className="text-gray-300 mb-6">
                Agrivanna is a global leader in design, manufacture and distribution of agricultural technology and precision solutions.
              </p>
              <p className="text-gray-300">
                Agrivanna delivers value to farmers through its innovative technology portfolio including virtual fencing, AI-powered tracking, and smart farming solutions that help farmers sustainably feed our world.
              </p>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Solutions</h3>
              <ul className="space-y-3">
                <li><a href="#virtual-fencing" className="text-gray-300 hover:text-white transition-colors">Virtual Fencing</a></li>
                <li><a href="#ai-tracking" className="text-gray-300 hover:text-white transition-colors">AI Weight Tracking</a></li>
                <li><a href="#health-monitoring" className="text-gray-300 hover:text-white transition-colors">Health Monitoring</a></li>
                <li><a href="#farm-management" className="text-gray-300 hover:text-white transition-colors">Farm Management</a></li>
                <li><a href="#precision-ag" className="text-gray-300 hover:text-white transition-colors">Precision Agriculture</a></li>
                <li><a href="#data-analytics" className="text-gray-300 hover:text-white transition-colors">Data Analytics</a></li>
                <li><a href="#automation" className="text-gray-300 hover:text-white transition-colors">Farm Automation</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#leadership" className="text-gray-300 hover:text-white transition-colors">Leadership</a></li>
                <li><a href="#careers" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#news" className="text-gray-300 hover:text-white transition-colors">News</a></li>
                <li><a href="#sustainability" className="text-gray-300 hover:text-white transition-colors">Sustainability</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#investors" className="text-gray-300 hover:text-white transition-colors">Investors</a></li>
              </ul>
            </div>

            {/* Support & Legal */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Support & Legal</h3>
              <ul className="space-y-3 mb-6">
                <li><a href="#support" className="text-gray-300 hover:text-white transition-colors">Support</a></li>
                <li><a href="#documentation" className="text-gray-300 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#training" className="text-gray-300 hover:text-white transition-colors">Training</a></li>
                <li><a href="#privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#terms" className="text-gray-300 hover:text-white transition-colors">Terms of Use</a></li>
                <li><a href="#accessibility" className="text-gray-300 hover:text-white transition-colors">Accessibility</a></li>
              </ul>
              
              {/* Social Media */}
              <div>
                <h4 className="text-sm font-semibold mb-4">FOLLOW AGRIVANNA</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
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
    </div>
  )
}
