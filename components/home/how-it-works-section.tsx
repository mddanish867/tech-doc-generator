"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, GitBranch, Zap, FileText, Download } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      icon: GitBranch,
      title: "Connect Your Repository",
      description:
        "Link your GitHub, AWS, GCP, or Azure repository with just a few clicks. Our secure connection ensures your code stays private.",
      features: ["One-click OAuth integration", "Support for private repositories", "Multiple platform support"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      step: "02",
      icon: Zap,
      title: "AI Analyzes Your Code",
      description:
        "Our advanced AI scans your entire codebase, understanding structure, dependencies, APIs, and documentation patterns.",
      features: ["Deep code analysis", "API endpoint detection", "Architecture mapping"],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      step: "03",
      icon: FileText,
      title: "Generate Documentation",
      description:
        "Choose your preferred format and template. Our AI generates comprehensive, professional documentation in minutes.",
      features: ["Multiple output formats", "Professional templates", "Customizable sections"],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
    },
    {
      step: "04",
      icon: Download,
      title: "Download & Share",
      description:
        "Download your documentation or share it with your team. Edit, customize, and keep it updated automatically.",
      features: ["Instant download", "Team collaboration", "Auto-sync updates"],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            How{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AutoDocGen
            </span>{" "}
            Works
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From repository connection to professional documentation in just 4 simple steps. No manual work required.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 top-32 w-px h-24 bg-gradient-to-b from-slate-300 to-transparent transform -translate-x-1/2 z-0" />
              )}

              <div
                className={`flex flex-col lg:flex-row items-center gap-8 mb-16 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Content */}
                <div className="flex-1 lg:max-w-lg">
                  <div className="text-center lg:text-left">
                    <div className="inline-flex items-center space-x-3 mb-4">
                      <span
                        className={`text-2xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}
                      >
                        {step.step}
                      </span>
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center`}
                      >
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{step.title}</h3>
                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">{step.description}</p>
                    <ul className="space-y-2 mb-6">
                      {step.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-slate-600">
                          <div className={`w-2 h-2 bg-gradient-to-r ${step.color} rounded-full`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Visual */}
                <div className="flex-1 lg:max-w-lg">
                  <Card
                    className= "bg-white border-none transition-all duration-300 group"
                  >
                    <CardContent className="p-8">
                      <div className="text-center">
                        <div
                          className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <step.icon className="w-10 h-10 text-white" />
                        </div>
                        <div className="space-y-3">
                          <div className="h-3 bg-white/60 rounded-full"></div>
                          <div className="h-3 bg-white/40 rounded-full w-3/4 mx-auto"></div>
                          <div className="h-3 bg-white/60 rounded-full w-1/2 mx-auto"></div>
                        </div>
                        
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
            onClick={() => (window.location.href = "/login")}
          >
            Start Your Documentation Journey
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
