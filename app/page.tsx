"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Stethoscope, Brain, Shield, Users, ArrowRight } from "lucide-react"
import Image from "next/image"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function LandingPage() {
  const [currentText, setCurrentText] = useState(0)
  const rotatingTexts = ["Tracking System", "Health Management", "Virtual Grazing"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-black">
      <SpeedInsights />
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="/LOGO White.png"
              alt="Agrivanna Logo"
              width={320}
              height={107}
              className="h-24 w-auto"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="font-inter text-gray-300 hover:text-purple-400 transition-colors">
              Features
            </a>
            <a href="#features" className="font-inter text-gray-300 hover:text-purple-400 transition-colors">
              How it Works
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              className="font-inter bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              asChild
            >
              <a
                href="https://calendly.com/aminrezaabbasi-agrivanna/meeting-with-agrivanna-team"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-purple-900/50 text-purple-300 border-purple-700">AI-Powered Livestock Health</Badge>

          <div className="mb-6">
            <h1 className="font-dm-sans text-5xl md:text-6xl font-bold text-white leading-tight">
              Smart Livestock
            </h1>
            <div className="h-16 md:h-20 flex items-center justify-center">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent transition-all duration-500 ease-in-out font-dm-sans text-5xl md:text-6xl font-bold" style={{minWidth: '300px'}}>
                {rotatingTexts[currentText]}
              </span>
            </div>
          </div>

          <p className="font-inter text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto"> 
          Agrivanna is an AI-powered modular platform that combines virtual grazing, AI-powered weight tracking, and livestock health monitoring.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="font-inter bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-8 py-3"
              asChild
            >
              <a
                href="https://calendly.com/aminrezaabbasi-agrivanna/meeting-with-agrivanna-team"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* Partners Section */}
          <div className="mt-16 pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-sm mb-6 font-inter">Partners</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
              {/* Partner Logos */}
              <div className="flex items-center justify-center h-12 w-32">
                <Image
                  src="/svg.png"
                  alt="svg"
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain filter brightness-0 invert"
                />
              </div>
              <div className="flex items-center justify-center h-12 w-32">
                <Image
                  src="/pnp.svg"
                  alt="pnp"
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain filter brightness-0 invert"
                />
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-dm-sans text-4xl font-bold text-white mb-4">Comprehensive Livestock Care</h2>
            <p className="font-inter text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to keep your livestock healthy and your farm compliant
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Virtual Fencing */}
            <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-dm-sans text-xl font-semibold text-white mb-3">
                 Virtual Fencing Without Physical Barriers
                </h3>
                <p className="font-inter text-gray-300 leading-relaxed">
                Create dynamic, GPS-based grazing zones in seconds — no wires, no hassle.
                </p>
              </CardContent>
            </Card>

            {/* AI-Powered Weight Tracking */}
            <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-dm-sans text-xl font-semibold text-white mb-3">
                AI-Powered Weighing & Feed Optimization
                </h3>
                <p className="font-inter text-gray-300 leading-relaxed">
                Built-in weighing systems track weight during natural movement, while AI models suggest tailored feed plans to boost growth or recovery.
                </p>
              </CardContent>
            </Card>

            {/* Early health detection */}
            <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-dm-sans text-xl font-semibold text-white mb-3">Early Health Detection with No Extra Hardware</h3>
                <p className="font-inter text-gray-300 leading-relaxed">
                Our system analyzes camera, collar, and sensor data to flag abnormal behaviors, slow growth, or escape attempts.
                </p>
              </CardContent>
            </Card>

            {/* Offline */}
            <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-dm-sans text-xl font-semibold text-white mb-3">
                Offline-Ready & Built for Farms
                </h3>
                <p className="font-inter text-gray-300 leading-relaxed">
                Whether you’re in the foothills or the far north, Agrivanna works. Collars store data locally and sync when back online.
                </p>
              </CardContent>
            </Card>
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
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="container mx-auto text-center">
          <h2 className="font-dm-sans text-4xl font-bold text-white mb-6">
            Ready to Transform Your Livestock Management?
          </h2>
          <p className="font-inter text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of farmers who trust Agrivanna to keep their livestock healthy and their operations
            compliant.
          </p>
          <Button size="lg" className="font-inter bg-white text-black hover:bg-gray-100 text-lg px-8 py-3" asChild>
            <a
              href="https://calendly.com/aminrezaabbasi-agrivanna/meeting-with-agrivanna-team"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Your Free Trial Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Image
                src="/LOGO White.png"
                alt="Agrivanna Logo"
                width={320}
                height={107}
                className="h-24 w-auto"
              />
            </div>

            <div className="flex space-x-8">
              <a href="#" className="font-inter text-gray-400 hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="font-inter text-gray-400 hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="font-inter text-gray-400 hover:text-white transition-colors">
                Support
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="font-inter text-gray-400">© 2024 Agrivanna. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
