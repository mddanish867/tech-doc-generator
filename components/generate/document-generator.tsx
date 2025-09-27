"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { FileText, Settings, Zap, CheckCircle, Download } from "lucide-react"

export function DocumentGenerator() {
  const [selectedRepo, setSelectedRepo] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generationStep, setGenerationStep] = useState(0)
  const [progress, setProgress] = useState(0)

  const repositories = [
    { id: "react-dashboard", name: "react-dashboard", platform: "GitHub", language: "TypeScript" },
    { id: "aws-lambda-functions", name: "aws-lambda-functions", platform: "AWS", language: "Python" },
    { id: "gcp-microservices", name: "gcp-microservices", platform: "GCP", language: "Go" },
    { id: "azure-devops-pipeline", name: "azure-devops-pipeline", platform: "Azure", language: "YAML" },
  ]

  const documentSections = [
    { id: "overview", label: "Project Overview", checked: true },
    { id: "installation", label: "Installation Guide", checked: true },
    { id: "api", label: "API Documentation", checked: true },
    { id: "architecture", label: "Architecture Diagram", checked: true },
    { id: "contributing", label: "Contributing Guidelines", checked: false },
    { id: "changelog", label: "Changelog", checked: false },
    { id: "deployment", label: "Deployment Guide", checked: true },
    { id: "testing", label: "Testing Documentation", checked: false },
  ]

  const handleGenerate = async () => {
    setIsGenerating(true)
    setGenerationStep(1)

    // Simulate generation process
    const steps = [
      { step: 1, message: "Analyzing repository structure...", progress: 20 },
      { step: 2, message: "Extracting code documentation...", progress: 40 },
      { step: 3, message: "Generating API documentation...", progress: 60 },
      { step: 4, message: "Creating architecture diagrams...", progress: 80 },
      { step: 5, message: "Finalizing documentation...", progress: 100 },
    ]

    for (const stepData of steps) {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setGenerationStep(stepData.step)
      setProgress(stepData.progress)
    }

    setTimeout(() => {
      setGenerationStep(6) // Completed
      setIsGenerating(false)
    }, 1000)
  }

  if (generationStep === 6) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">Documentation Generated Successfully!</h3>
              <p className="text-slate-600">Your comprehensive documentation is ready for download and editing.</p>
            </div>

            <div className="bg-slate-50 rounded-lg p-4 max-w-md mx-auto">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Generated Document</span>
                <Badge variant="outline">PDF</Badge>
              </div>
              <p className="text-sm text-slate-600 mb-3">react-dashboard-documentation.pdf</p>
              <div className="text-xs text-slate-500">Size: 3.2 MB • 45 pages</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button className="flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </Button>
              <Button variant="outline" onClick={() => (window.location.href = "/editor")}>
                Edit Document
              </Button>
              <Button variant="outline" onClick={() => (window.location.href = "/dashboard")}>
                Back to Dashboard
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (isGenerating) {
    const stepMessages = [
      "",
      "Analyzing repository structure...",
      "Extracting code documentation...",
      "Generating API documentation...",
      "Creating architecture diagrams...",
      "Finalizing documentation...",
    ]

    return (
      <Card>
        <CardContent className="pt-6">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto animate-pulse">
              <Zap className="w-10 h-10 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Generating Documentation...</h3>
              <p className="text-slate-600 mb-4">{stepMessages[generationStep]}</p>
              <div className="max-w-md mx-auto">
                <Progress value={progress} className="h-2" />
                <p className="text-sm text-slate-500 mt-2">{progress}% complete</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {/* Repository Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="w-5 h-5" />
            <span>Select Repository</span>
          </CardTitle>
          <CardDescription>Choose the repository you want to generate documentation for</CardDescription>
        </CardHeader>
        <CardContent>
          <Select value={selectedRepo} onValueChange={setSelectedRepo}>
            <SelectTrigger>
              <SelectValue placeholder="Select a repository" />
            </SelectTrigger>
            <SelectContent>
              {repositories.map((repo) => (
                <SelectItem key={repo.id} value={repo.id}>
                  <div className="flex items-center space-x-2">
                    <span>{repo.name}</span>
                    <Badge variant="outline">{repo.platform}</Badge>
                    <Badge variant="outline">{repo.language}</Badge>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Documentation Configuration */}
      {selectedRepo && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Settings className="w-5 h-5" />
              <span>Documentation Configuration</span>
            </CardTitle>
            <CardDescription>Customize what sections to include in your documentation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label className="text-base font-medium mb-4 block">Document Sections</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {documentSections.map((section) => (
                  <div key={section.id} className="flex items-center space-x-2">
                    <Checkbox id={section.id} defaultChecked={section.checked} />
                    <Label htmlFor={section.id} className="text-sm font-normal">
                      {section.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="output-format">Output Format</Label>
                <Select defaultValue="pdf">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pdf">PDF Document</SelectItem>
                    <SelectItem value="markdown">Markdown Files</SelectItem>
                    <SelectItem value="html">HTML Website</SelectItem>
                    <SelectItem value="docx">Word Document</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="template">Documentation Template</Label>
                <Select defaultValue="modern">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="modern">Modern</SelectItem>
                    <SelectItem value="classic">Classic</SelectItem>
                    <SelectItem value="minimal">Minimal</SelectItem>
                    <SelectItem value="technical">Technical</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="custom-instructions">Custom Instructions (Optional)</Label>
              <Textarea
                id="custom-instructions"
                placeholder="Add any specific instructions for documentation generation..."
                rows={3}
              />
            </div>

            <div className="flex items-center justify-between pt-4 border-t">
              <div className="text-sm text-slate-600">Estimated generation time: 2-5 minutes</div>
              <div className="flex space-x-3">
                <Button variant="outline" onClick={() => (window.location.href = "/dashboard")}>
                  Cancel
                </Button>
                <Button onClick={handleGenerate} className="flex items-center space-x-2">
                  <Zap className="w-4 h-4" />
                  <span>Generate Documentation</span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
