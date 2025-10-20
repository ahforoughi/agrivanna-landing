"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Stethoscope, Brain, Shield, Users, ArrowRight, Menu, X, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentFeature, setCurrentFeature] = useState(0)
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null)
  const [startX, setStartX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const features = [
    {
      icon: Stethoscope,
      title: "Virtual Fencing Without Physical Barriers",
      shortDescription: "Create dynamic, GPS-based grazing zones in seconds — no wires, no hassle.",
      fullDescription: "Revolutionary GPS-based virtual fencing system that creates precise grazing boundaries without physical barriers. Set up grazing zones in minutes, adjust boundaries remotely, and monitor livestock movement in real-time. Our advanced technology uses gentle audio cues and vibration to guide animals, ensuring they stay within designated areas while maintaining their natural grazing patterns.",
      color: "#4A90E2",
      bgColor: "bg-blue-50"
    },
    {
      icon: Brain,
      title: "AI-Powered Weighing & Feed Optimization",
      shortDescription: "Built-in weighing systems track weight during natural movement, while AI models suggest tailored feed plans to boost growth or recovery.",
      fullDescription: "Advanced AI-powered weight tracking system that monitors livestock weight during natural movement patterns. Our machine learning algorithms analyze behavioral data to suggest optimized feeding schedules, detect early signs of illness, and predict growth patterns. The system automatically adjusts feed recommendations based on individual animal needs, weather conditions, and seasonal changes.",
      color: "#637D59",
      bgColor: "bg-green-50"
    },
    {
      icon: Shield,
      title: "Early Health Detection with No Extra Hardware",
      shortDescription: "Our system analyzes camera, collar, and sensor data to flag abnormal behaviors, slow growth, or escape attempts.",
      fullDescription: "Comprehensive health monitoring system that uses existing camera, collar, and sensor data to detect early signs of illness, injury, or behavioral changes. Our AI algorithms analyze movement patterns, feeding behavior, and vital signs to identify potential health issues before they become serious. Get instant alerts for lameness, respiratory issues, or unusual behavior patterns.",
      color: "#2A5F36",
      bgColor: "bg-emerald-50"
    },
    {
      icon: Users,
      title: "Offline-Ready & Built for Farms",
      shortDescription: "Whether you're in the foothills or the far north, Agrivanna works. Collars store data locally and sync when back online.",
      fullDescription: "Robust offline-capable system designed specifically for remote farming operations. Our collars store all data locally and automatically sync when internet connectivity is restored. Perfect for operations in remote areas, mountainous terrain, or locations with unreliable internet. Data is securely stored and backed up, ensuring you never lose critical information about your livestock.",
      color: "#4A90E2",
      bgColor: "bg-blue-50"
    }
  ]


  // Swipe handling functions
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX)
    setIsDragging(true)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    e.preventDefault()
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging) return
    setIsDragging(false)
    
    const endX = e.changedTouches[0].clientX
    const diff = startX - endX
    
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentFeature < features.length - 1) {
        setCurrentFeature(currentFeature + 1)
      } else if (diff < 0 && currentFeature > 0) {
        setCurrentFeature(currentFeature - 1)
      }
    }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setStartX(e.clientX)
    setIsDragging(true)
  }

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return
    setIsDragging(false)
    
    const endX = e.clientX
    const diff = startX - endX
    
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentFeature < features.length - 1) {
        setCurrentFeature(currentFeature + 1)
      } else if (diff < 0 && currentFeature > 0) {
        setCurrentFeature(currentFeature - 1)
      }
    }
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

                      <Link href="/news" className="text-black hover:text-gray-600 transition-all duration-300 hover:scale-105 relative group">
                        News
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-600 transition-all duration-300 group-hover:w-full"></span>
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
                        <Link href="/news" className="text-black hover:text-gray-600">News</Link>
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
                Virtual grazing management, AI-enhanced smart weighing, health monitoring, and livestock lifecycle management in one platform.
              </p>
              <div className="flex justify-center mb-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
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
              </div>
              <p className="text-sm text-[#637D59] animate-fade-in" style={{ animationDelay: '0.6s' }}>
                Trusted by producers in Alberta
              </p>
            </div>
            <div className="relative animate-fade-in-right">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#637D59] hover:shadow-xl transition-all duration-500 hover:scale-105">
                <div className="grid grid-cols-2 gap-4">
                  {/* Virtual Grazing Card */}
                  <Link href="/services#virtual-grazing-management" className="bg-white rounded-xl p-4 border border-[#637D59] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#4A90E2] group">
                    <div className="w-8 h-8 bg-[#2A5F36] rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-[#2A5F36] group-hover:text-[#4A90E2] transition-colors duration-300">Virtual Grazing</p>
                  </Link>

                  {/* AI Weight Card */}
                  <Link href="/services#ai-enhanced-smart-weighing" className="bg-white rounded-xl p-4 border border-[#637D59] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#4A90E2] group" style={{ animationDelay: '0.1s' }}>
                    <div className="w-8 h-8 bg-[#2A5F36] rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-[#2A5F36] group-hover:text-[#4A90E2] transition-colors duration-300">AI Weighing</p>
                  </Link>

                  {/* Health Monitor Card */}
                  <Link href="/services#health--behavior-monitoring" className="bg-white rounded-xl p-4 border border-[#637D59] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#4A90E2] group" style={{ animationDelay: '0.2s' }}>
                    <div className="w-8 h-8 bg-[#2A5F36] rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-[#2A5F36] group-hover:text-[#4A90E2] transition-colors duration-300">Health Monitor</p>
                  </Link>

                  {/* Livestock Lifecycle Card */}
                  <Link href="/services#livestock-lifecycle-management" className="bg-white rounded-xl p-4 border border-[#637D59] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#4A90E2] group" style={{ animationDelay: '0.3s' }}>
                    <div className="w-8 h-8 bg-[#2A5F36] rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-[#2A5F36] group-hover:text-[#4A90E2] transition-colors duration-300">Livestock Lifecycle</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Partners Section */}
          <div className="relative z-10 mt-4">
            <div className="text-center mb-4">
              <p className="text-black text-sm font-medium">Trusted Partners</p>
            </div>
            <div className="flex justify-center items-center space-x-12">
              <a 
                href="https://www.plugandplaytechcenter.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity duration-300"
              >
                <Image
                  src="/pnp.svg"
                  alt="Plug and Play Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              </a>
              <a 
                href="https://thriveagrifood.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity duration-300"
              >
                <Image
                  src="/svg.png"
                  alt="THRIVE by SVG Ventures Logo"
                  width={100}
                  height={40}
                  className="h-8 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Features Section - Swiping Cards */}
      <section id="product" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2A5F36] mb-4">Smart livestock management, reimagined.</h2>
            <p className="text-xl text-[#637D59] max-w-3xl mx-auto">
              Agrivanna&apos;s AI-powered collar system and intelligent monitoring platform are transforming how farmers manage their livestock. With virtual fencing, smart weighing, and health monitoring, you can optimize animal welfare while maximizing profitability.
            </p>
          </div>

          {/* Swiping Cards Container */}
          <div className="max-w-4xl mx-auto">
            {/* Feature Titles Row - Moved to top */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {features.map((feature, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFeature(index)}
                  className={`p-4 rounded-lg border-2 transition-all duration-300 text-left hover:shadow-md ${
                    index === currentFeature
                      ? 'border-[#2A5F36] bg-[#2A5F36] text-white shadow-lg'
                      : 'border-gray-200 bg-white hover:border-[#637D59]'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ 
                        backgroundColor: index === currentFeature 
                          ? 'rgba(255,255,255,0.2)' 
                          : `${feature.color}20`
                      }}
                    >
                      {(() => {
                        const IconComponent = feature.icon
                        return <IconComponent 
                          className="w-4 h-4" 
                          style={{ color: index === currentFeature ? 'white' : feature.color }}
                        />
                      })()}
                    </div>
                    <span className={`text-sm font-medium line-clamp-2 ${
                      index === currentFeature ? 'text-white' : 'text-[#2A5F36]'
                    }`}>
                      {feature.title}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Main Card Display */}
            <div 
              className="relative overflow-hidden rounded-2xl shadow-xl bg-white border border-[#637D59]"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              style={{ userSelect: 'none' }}
            >
              <div className="relative">
                {/* Card Content */}
                <div className="p-8 md:p-12">
                  <div className="flex items-center justify-center mb-8">
                    <div 
                      className="w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-300"
                      style={{ backgroundColor: `${features[currentFeature].color}20` }}
                    >
                      {(() => {
                        const IconComponent = features[currentFeature].icon
                        return <IconComponent 
                          className="w-10 h-10 transition-colors duration-300" 
                          style={{ color: features[currentFeature].color }}
                        />
                      })()}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-[#2A5F36] text-center mb-6 leading-tight">
                    {features[currentFeature].title}
                  </h3>
                  
                  <div className="text-center mb-8">
                    {expandedFeature === currentFeature ? (
                      <p className="text-lg text-[#637D59] leading-relaxed max-w-3xl mx-auto">
                        {features[currentFeature].fullDescription}
                      </p>
                    ) : (
                      <p className="text-lg text-[#637D59] leading-relaxed max-w-3xl mx-auto">
                        {features[currentFeature].shortDescription}
                      </p>
                    )}
                  </div>

                  <div className="text-center">
                    <Button
                      onClick={() => setExpandedFeature(expandedFeature === currentFeature ? null : currentFeature)}
                      variant="outline"
                      className="border-[#637D59] text-[#2A5F36] hover:bg-[#637D59] hover:text-white transition-all duration-300 hover:scale-105"
                    >
                      {expandedFeature === currentFeature ? 'Show Less' : 'Learn More'}
                    </Button>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={() => currentFeature > 0 && setCurrentFeature(currentFeature - 1)}
                  disabled={currentFeature === 0}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ArrowRight className="w-6 h-6 text-gray-600 rotate-180" />
                </button>
                
                <button
                  onClick={() => currentFeature < features.length - 1 && setCurrentFeature(currentFeature + 1)}
                  disabled={currentFeature === features.length - 1}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ArrowRight className="w-6 h-6 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Feature Indicators */}
            <div className="flex justify-center mt-8 space-x-3">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFeature(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentFeature 
                      ? 'bg-[#2A5F36] scale-125' 
                      : 'bg-[#637D59] bg-opacity-30 hover:bg-opacity-60'
                  }`}
                />
              ))}
            </div>

            {/* Swipe Instruction */}
            <div className="text-center mt-6">
              <p className="text-sm text-[#637D59] flex items-center justify-center space-x-2">
                <span>Swipe or click arrows to explore features</span>
                <ArrowRight className="w-4 h-4" />
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Sustainability Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Today&apos;s challenges are tomorrow&apos;s possibilities.</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Our purpose at Agrivanna is to provide farmer-focused solutions to sustainably feed our world. Our ambition is to accelerate innovation and efficiency to drive positive outcomes for farmers and the planet.
              </p>
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
            Together, we&apos;re helping change the world for good.
          </h2>
          <p className="text-xl text-[#F2F2F2] mb-8 max-w-3xl mx-auto">
            Not everyone can claim to feed the world, but it is part of our every day. Behind everything we do for our farmers, there is one Agrivanna team making it happen. We are proud to put our curiosity to work, building a better and more sustainable world.
          </p>
          <div className="flex justify-center">
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
                <li><Link href="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/news" className="text-gray-300 hover:text-white transition-colors">News</Link></li>
                <li><Link href="/investment" className="text-gray-300 hover:text-white transition-colors">Investment</Link></li>
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
