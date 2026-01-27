"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Stethoscope, Shield, Users, ArrowRight, Menu, X, Linkedin, Smartphone, Radio, TrendingUp, Clock, DollarSign, Activity, Check, Sprout, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      <SpeedInsights />
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
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
                  className="h-6 w-auto hover:scale-105 transition-transform duration-300 brightness-0 invert"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/services" className="text-white hover:text-neutral-gray transition-all duration-300 hover:scale-105 relative group">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link href="/about" className="text-white hover:text-neutral-gray transition-all duration-300 hover:scale-105 relative group">
                About us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link href="/news" className="text-white hover:text-neutral-gray transition-all duration-300 hover:scale-105 relative group">
                News
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link href="/investment" className="text-white hover:text-neutral-gray transition-all duration-300 hover:scale-105 relative group">
                Investment
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link href="/careers" className="text-white hover:text-neutral-gray transition-all duration-300 hover:scale-105 relative group">
                Careers
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/contact" className="text-white hover:text-neutral-gray transition-all duration-300 hover:scale-105 relative group">
                Contact us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button
                className="!bg-primary-green hover:!bg-primary-green/90 !text-white rounded-lg px-6 py-2 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2"
                style={{ backgroundColor: '#288A5C' }}
                asChild
              >
                <a
                  href="https://calendly.com/aminrezaabbasi-agrivanna/meeting-with-agrivanna-team"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat with us
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-white/20 py-4 bg-primary-dark/95 backdrop-blur-sm rounded-lg mt-2">
              <nav className="flex flex-col space-y-4">
                <Link href="/services" className="text-white hover:text-neutral-gray">Services</Link>
                <Link href="/about" className="text-white hover:text-neutral-gray">About us</Link>
                <Link href="/news" className="text-white hover:text-neutral-gray">News</Link>
                <Link href="/investment" className="text-white hover:text-neutral-gray">Investment</Link>
                <Link href="/careers" className="text-white hover:text-neutral-gray">Careers</Link>
                <Link href="/contact" className="text-white hover:text-neutral-gray">Contact us</Link>
                <Button
                  className="!bg-primary-green hover:!bg-primary-green/90 !text-white w-full flex items-center justify-center gap-2"
                  style={{ backgroundColor: '#288A5C', color: '#ffffff' }}
                  asChild
                >
                  <a
                    href="https://calendly.com/aminrezaabbasi-agrivanna/meeting-with-agrivanna-team"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat with us
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            console.error("Video failed to load:", e);
            // Fallback: hide video on error
            const video = e.currentTarget;
            if (video) {
              video.style.display = "none";
            }
          }}
        >
          <source src="/cow-grazing-hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-primary-dark opacity-60"></div>
        
        {/* Content Overlay */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up">
              <span className="block animate-slide-in-left" style={{ animationDelay: '0.1s' }}>Smarter livestock</span>
              <span className="block animate-slide-in-left" style={{ animationDelay: '0.2s' }}>tracking, minimal</span>
              <span className="block animate-slide-in-left" style={{ animationDelay: '0.3s' }}>effort.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Virtual grazing management, AI-enhanced smart weighing, health monitoring, and livestock lifecycle management in one platform.
            </p>
          </div>
          
          {/* Partners Section */}
          <div className="relative z-10 mt-16">
            <div className="text-center mb-4">
              <p className="text-white text-sm font-medium">Trusted Partners</p>
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


      {/* Features Section */}
      <section id="product" className="py-24 px-4" style={{ backgroundColor: '#F5F5F0' }}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2A5F36] mb-4">
              The leading digital platform for managing pasture-based operations
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Remote Fencing and Herd Moves */}
            <div className="flex flex-col">
              {/* Image */}
              <div className="relative w-full h-64 rounded-lg overflow-hidden mb-4 bg-gray-100 shadow-sm">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Stethoscope className="w-24 h-24 text-[#2A5F36] opacity-30" />
                  </div>
                </div>
              </div>
              
              {/* Icon */}
              <div className="mb-4">
                <div className="w-10 h-10 bg-[#2A5F36] rounded-lg flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 text-white" />
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-[#2A5F36] mb-6">
                Remote fencing and herd moves
              </h3>
              
              {/* Features List */}
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-[#2A5F36] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Adjust grazing areas and move herds from your device</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-[#2A5F36] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Create temporary paddocks without reels, posts, or tape</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-[#2A5F36] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Advance to the next allocation in seconds</span>
                </li>
              </ul>
            </div>

            {/* Grazing and Pasture Planning */}
            <div className="flex flex-col">
              {/* Image */}
              <div className="relative w-full h-64 rounded-lg overflow-hidden mb-4 bg-gray-100 shadow-sm">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Smartphone className="w-24 h-24 text-[#2A5F36] opacity-30" />
                  </div>
                </div>
              </div>
              
              {/* Icon */}
              <div className="mb-4">
                <div className="w-10 h-10 bg-[#2A5F36] rounded-lg flex items-center justify-center">
                  <Sprout className="w-5 h-5 text-white" />
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-[#2A5F36] mb-6">
                Grazing and pasture planning
              </h3>
              
              {/* Features List */}
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-[#2A5F36] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Build grazing plans with paddock-level precision</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-[#2A5F36] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Allocate feed based on data, not guesswork</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-[#2A5F36] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Track pasture growth and condition in near real time</span>
                </li>
              </ul>
            </div>

            {/* Reproduction and Animal Wellbeing Insights */}
            <div className="flex flex-col">
              {/* Image */}
              <div className="relative w-full h-64 rounded-lg overflow-hidden mb-4 bg-gray-100 shadow-sm">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Shield className="w-24 h-24 text-[#2A5F36] opacity-30" />
                  </div>
                </div>
              </div>
              
              {/* Icon */}
              <div className="mb-4">
                <div className="w-10 h-10 bg-[#2A5F36] rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-[#2A5F36] mb-6">
                Reproduction and animal wellbeing insights
              </h3>
              
              {/* Features List */}
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-[#2A5F36] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Detect heat activity automatically</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-[#2A5F36] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Get notifications for health or behavior changes</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-[#2A5F36] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Monitor animal locations around the clock</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Statistics Section */}
      <section className="py-20 bg-[#2A5F36] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Real Results, Real Impact</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              See how Agrivanna is transforming farms across Alberta and beyond
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl font-bold mb-2">30%</div>
              <div className="text-white/80 text-lg">Reduction in Labor Costs</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl font-bold mb-2">3hrs</div>
              <div className="text-white/80 text-lg">Saved Per Day on Average</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl font-bold mb-2">20%</div>
              <div className="text-white/80 text-lg">Increase in Feed Efficiency</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl font-bold mb-2">95%</div>
              <div className="text-white/80 text-lg">Early Health Detection Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2A5F36] mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, effective livestock management in three easy steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="mb-8">
                <div className="w-16 h-16 bg-[#2A5F36] rounded-lg flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#2A5F36] mb-4">The Collar</h3>
              <p className="text-gray-600 leading-relaxed">
                Lightweight, solar-powered collars guide your livestock with gentle audio cues and vibration. Built to last in harsh farming conditions.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-8">
                <div className="w-16 h-16 bg-[#637D59] rounded-lg flex items-center justify-center mx-auto">
                  <Radio className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#2A5F36] mb-4">The Tower</h3>
              <p className="text-gray-600 leading-relaxed">
                Connects collars and app with no cell coverage needed. Solar-powered and easy to install, designed for remote Alberta farms.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-8">
                <div className="w-16 h-16 bg-[#4A90E2] rounded-lg flex items-center justify-center mx-auto">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#2A5F36] mb-4">The App</h3>
              <p className="text-gray-600 leading-relaxed">
                Remotely manage and shift livestock, optimize grazing and feed management with virtual fencing. Access your farm anywhere, anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Farmer Testimonials Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2A5F36] mb-4">Real Farmers, Real Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by dairy and beef farmers from family operations to large-scale enterprises
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-[#2A5F36]">John & Sarah Miller</h4>
                  <p className="text-sm text-gray-600">Alberta • 450 Head</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                &quot;We didn&apos;t think it would work with our operation, but Agrivanna has transformed how we manage our herd. We&apos;re saving hours every day and our feed costs are down significantly.&quot;
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-[#2A5F36]">Mike Thompson</h4>
                  <p className="text-sm text-gray-600">Saskatchewan • 580 Cows</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                &quot;I would say we are saving 3 hours of labor a day. The virtual fencing alone has paid for itself, and the health monitoring caught issues we would have missed.&quot;
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-[#2A5F36]">Lisa & David Chen</h4>
                  <p className="text-sm text-gray-600">Alberta • 320 Head</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                &quot;Agrivanna doesn&apos;t replace being a farmer, it helps you be a better farmer. It&apos;s another set of hands so I can focus on what matters most.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#2A5F36] mb-6">Today&apos;s challenges are tomorrow&apos;s possibilities.</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Our purpose at Agrivanna is to provide farmer-focused solutions to sustainably feed our world. Our ambition is to accelerate innovation and efficiency to drive positive outcomes for farmers and the planet.
              </p>
              <Button
                size="lg"
                className="bg-[#2A5F36] hover:bg-[#637D59] text-white text-lg px-8 py-3"
                asChild
              >
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden bg-gray-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#2A5F36] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Sustainable Agriculture</h3>
                  <p className="text-gray-600">Building a better future for farming</p>
                </div>
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
      <section className="py-24 px-4 bg-primary-green" style={{ backgroundColor: '#288A5C' }}>
        <div className="container mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6" style={{ 
            textRendering: 'optimizeLegibility',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale'
          }}>
            Together, we&apos;re helping change the world for good.
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto" style={{ 
            textRendering: 'optimizeLegibility',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale'
          }}>
            Not everyone can claim to feed the world, but it is part of our every day. Behind everything we do for our farmers, there is one Agrivanna team making it happen. We are proud to put our curiosity to work, building a better and more sustainable world.
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="!bg-white !text-primary-green hover:!bg-background-light text-lg px-8 py-3 flex items-center gap-2" style={{ backgroundColor: '#ffffff', color: '#288A5C' }} asChild>
              <a
                href="https://calendly.com/aminrezaabbasi-agrivanna/meeting-with-agrivanna-team"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
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
