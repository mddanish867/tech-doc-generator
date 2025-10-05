"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, Sparkles, Zap, GitBranch } from "lucide-react"

export function HeroSection() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2 mb-8 animate-in fade-in-50 slide-in-from-bottom-3 duration-1000">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-slate-700">AI-Powered Documentation Generator</span>
            <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-100">
              New
            </Badge>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 animate-in fade-in-50 slide-in-from-bottom-4 duration-1000 delay-200">
            Transform Your{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Code
            </span>{" "}
            Into{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-800 bg-clip-text text-transparent">
              Documentation
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-in fade-in-50 slide-in-from-bottom-5 duration-1000 delay-400">
            AutoDocGen uses advanced AI to automatically generate comprehensive, professional documentation from your
            GitHub, AWS, GCP, and Azure repositories. Save weeks of manual work with intelligent code analysis and
            beautiful formatting.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-in fade-in-50 slide-in-from-bottom-6 duration-1000 delay-600">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-8 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
              onClick={() => (window.location.href = "/login")}
            >
              Start Generating Docs
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-8 text-lg font-semibold border-2 hover:bg-slate-50 group bg-transparent"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>

        
        </div>

        {/* Hero Image/Animation */}
        <div className="max-w-5xl mx-auto mt-16 animate-in fade-in-50 slide-in-from-bottom-8 duration-1000 delay-1000">
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
              <div className="bg-slate-900 px-4 py-3 flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="flex-1 text-center">
                  <span className="text-slate-400 text-sm">AutoDocGen Dashboard</span>
                </div>
              </div>
              <div className="p-8 bg-gradient-to-br from-slate-50 to-white">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                      <GitBranch className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-1">Connect Repository</h3>
                    <p className="text-sm text-slate-600">Link your GitHub, AWS, GCP repos</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                      <Zap className="w-5 h-5 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-1">AI Analysis</h3>
                    <p className="text-sm text-slate-600">Smart code understanding</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                      <Sparkles className="w-5 h-5 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-1">Generate Docs</h3>
                    <p className="text-sm text-slate-600">Beautiful documentation ready</p>
                  </div>
                </div>
              </div>
            </div>           
          </div>
        </div>
      </div>
    </section>
  )
}
