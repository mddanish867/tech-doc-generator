"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Zap } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">Ready to Transform Your Documentation?</span>
          </div>

          {/* Main heading */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Stop Writing Docs.{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Start Generating.
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of developers who've already saved weeks of work with AutoDocGen. Generate professional
            documentation in minutes, not days.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">95%</div>
              <div className="text-sm text-blue-200">Time Saved</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">10K+</div>
              <div className="text-sm text-blue-200">Docs Created</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-sm text-blue-200">Happy Teams</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">4.9★</div>
              <div className="text-sm text-blue-200">Rating</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
              onClick={() => (window.location.href = "/login")}
            >
              <Zap className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold backdrop-blur-sm bg-transparent"
            >
              View Pricing
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="text-center">
            <p className="text-blue-200 text-sm mb-4">Trusted by developers at</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              <div className="text-white font-semibold">GitHub</div>
              <div className="text-white font-semibold">Microsoft</div>
              <div className="text-white font-semibold">Google</div>
              <div className="text-white font-semibold">Amazon</div>
              <div className="text-white font-semibold">Meta</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
