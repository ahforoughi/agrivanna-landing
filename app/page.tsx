"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Stethoscope, Brain, Shield, Users, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function LandingPage() {
  const [currentText, setCurrentText] = useState(0)
  const rotatingTexts = ["Tracking System", "Health Management", "Vet Marketplace"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="/logo-agrivanna-white.png"
              alt="Agrivanna Logo"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="font-inter text-gray-300 hover:text-purple-400 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="font-inter text-gray-300 hover:text-purple-400 transition-colors">
              How it Works
            </a>
            <a href="#contact" className="font-inter text-gray-300 hover:text-purple-400 transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              className="font-inter bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              asChild
            >
              <a
                href="https://calendly.com/ah-foroughi98/meeting-with-vanna-team?month=2025-05"
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

          <h1 className="font-dm-sans text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Smart Livestock
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent transition-all duration-500 ease-in-out">
              {" "}
              {rotatingTexts[currentText]}
            </span>
          </h1>

          <p className="font-inter text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            An AI-powered livestock health tracking system with a built-in vet marketplace, enabling farmers to monitor
            symptoms, get treatment recommendations, connect with veterinarians, and ensure seamless regulatory
            compliance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="font-inter bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-8 py-3"
              asChild
            >
              <a
                href="https://calendly.com/ah-foroughi98/meeting-with-vanna-team?month=2025-05"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
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
            {/* Disease Detection */}
            <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-dm-sans text-xl font-semibold text-white mb-3">
                  Disease Detection Without Expensive Hardware
                </h3>
                <p className="font-inter text-gray-300 leading-relaxed">
                  Advanced AI algorithms detect health issues early using simple smartphone cameras and sensors you
                  already have.
                </p>
              </CardContent>
            </Card>

            {/* AI Assistant */}
            <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-dm-sans text-xl font-semibold text-white mb-3">
                  AI Assistant for Disease Detection and Treatment Suggestions
                </h3>
                <p className="font-inter text-gray-300 leading-relaxed">
                  Get instant, evidence-based treatment recommendations powered by machine learning and veterinary
                  expertise.
                </p>
              </CardContent>
            </Card>

            {/* Compliance */}
            <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-dm-sans text-xl font-semibold text-white mb-3">Compliance & Farm Management</h3>
                <p className="font-inter text-gray-300 leading-relaxed">
                  Automated record-keeping and compliance tracking to meet regulatory requirements effortlessly.
                </p>
              </CardContent>
            </Card>

            {/* Veterinary Assistance */}
            <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-dm-sans text-xl font-semibold text-white mb-3">
                  Veterinary Assistance & Treatment Recommendations
                </h3>
                <p className="font-inter text-gray-300 leading-relaxed">
                  Connect directly with certified veterinarians through our integrated marketplace for expert care.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
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
      </section>

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
          <Button size="lg" className="font-inter bg-white text-black hover:bg-gray-100 text-lg px-8 py-3">
            Start Your Free Trial Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Image
                src="/logo-agrivanna-white.png"
                alt="Agrivanna Logo"
                width={180}
                height={60}
                className="h-12 w-auto"
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
