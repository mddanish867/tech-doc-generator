"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GitBranch, Zap, FileText, Shield, Palette, Clock, Code, Users, Settings, Sparkles } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: GitBranch,
      title: "Multi-Platform Support",
      description:
        "Connect repositories from GitHub, AWS CodeCommit, Google Cloud Source, and Azure DevOps seamlessly.",
      badge: "Popular",
      color: "bg-blue-500",
    },
    {
      icon: Zap,
      title: "AI-Powered Analysis",
      description:
        "Advanced AI understands your code structure, dependencies, and generates comprehensive documentation automatically.",
      badge: "AI",
      color: "bg-purple-500",
    },
    // {
    //   icon: FileText,
    //   title: "Multiple Formats",
    //   description: "Export documentation in PDF, Markdown, HTML, or Word formats with professional templates.",
    //   badge: "Flexible",
    //   color: "bg-green-500",
    // },
    // {
    //   icon: Palette,
    //   title: "Beautiful Templates",
    //   description: "Choose from modern, classic, minimal, or technical templates to match your brand.",
    //   badge: "Design",
    //   color: "bg-pink-500",
    // },
    {
      icon: Clock,
      title: "Real-time Updates",
      description: "Automatically sync with repository changes and update documentation in real-time.",
      badge: "Live",
      color: "bg-orange-500",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Enterprise-grade security with encrypted connections and private repository support.",
      badge: "Secure",
      color: "bg-red-500",
    },
    {
      icon: Code,
      title: "Code Analysis",
      description: "Deep code analysis including API endpoints, function documentation, and architecture diagrams.",
      badge: "Smart",
      color: "bg-cyan-500",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share documentation with team members and collaborate on improvements together.",
      badge: "Team",
      color: "bg-indigo-500",
    },
    // {
    //   icon: Settings,
    //   title: "Customizable",
    //   description: "Fine-tune documentation sections, styling, and content to match your specific needs.",
    //   badge: "Custom",
    //   color: "bg-yellow-500",
    // },
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Powerful Features</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Everything You Need for{" "}<br/>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Perfect Documentation
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            AutoDocGen combines cutting-edge AI with intuitive design to deliver the most comprehensive documentation
            solution for modern development teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-none hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="bg-slate-100 text-slate-700 hover:bg-slate-100">
                    {feature.badge}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
