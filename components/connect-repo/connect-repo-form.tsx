"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { GitBranch, Link, Settings, CheckCircle } from "lucide-react"

export function ConnectRepoForm() {
  const [selectedPlatform, setSelectedPlatform] = useState("")
  const [isConnecting, setIsConnecting] = useState(false)
  const [connectionStep, setConnectionStep] = useState(1)

  const platforms = [
    { id: "github", name: "GitHub", icon: "🐙", description: "Connect your GitHub repositories" },
    { id: "aws", name: "AWS CodeCommit", icon: "☁️", description: "Connect AWS CodeCommit repositories" },
    { id: "gcp", name: "Google Cloud Source", icon: "🌐", description: "Connect Google Cloud Source repositories" },
    { id: "azure", name: "Azure DevOps", icon: "🔷", description: "Connect Azure DevOps repositories" },
  ]

  const handleConnect = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsConnecting(true)

    // Simulate connection process
    setTimeout(() => {
      setConnectionStep(2)
      setTimeout(() => {
        setConnectionStep(3)
        setIsConnecting(false)
      }, 2000)
    }, 2000)
  }

  if (connectionStep === 3) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">Repository Connected Successfully!</h3>
            <p className="text-slate-600">
              Your repository has been connected and is ready for documentation generation.
            </p>
            <div className="flex space-x-3 justify-center">
              <Button onClick={() => (window.location.href = "/generate")}>Generate Documentation</Button>
              <Button variant="outline" onClick={() => (window.location.href = "/dashboard")}>
                Back to Dashboard
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {/* Platform Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Link className="w-5 h-5" />
            <span>Select Platform</span>
          </CardTitle>
          <CardDescription>Choose the platform where your repository is hosted</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {platforms.map((platform) => (
              <div
                key={platform.id}
                className={`p-4 border rounded-lg cursor-pointer transition-all ${
                  selectedPlatform === platform.id
                    ? "border-blue-500 bg-blue-50"
                    : "border-slate-200 hover:border-slate-300"
                }`}
                onClick={() => setSelectedPlatform(platform.id)}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{platform.icon}</span>
                  <div>
                    <h3 className="font-medium text-slate-900">{platform.name}</h3>
                    <p className="text-sm text-slate-600">{platform.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Repository Configuration */}
      {selectedPlatform && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Settings className="w-5 h-5" />
              <span>Repository Configuration</span>
            </CardTitle>
            <CardDescription>Configure your repository connection settings</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleConnect} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="repo-url">Repository URL</Label>
                  <Input id="repo-url" type="url" placeholder="https://github.com/username/repository" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="access-token">Access Token</Label>
                  <Input id="access-token" type="password" placeholder="Enter your access token" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="repo-name">Repository Name</Label>
                <Input id="repo-name" type="text" placeholder="my-awesome-project" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description (Optional)</Label>
                <Textarea id="description" placeholder="Brief description of your repository" rows={3} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="main-branch">Main Branch</Label>
                  <Select defaultValue="main">
                    <SelectTrigger>
                      <SelectValue placeholder="Select main branch" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="main">main</SelectItem>
                      <SelectItem value="master">master</SelectItem>
                      <SelectItem value="develop">develop</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language">Primary Language</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="javascript">JavaScript</SelectItem>
                      <SelectItem value="typescript">TypeScript</SelectItem>
                      <SelectItem value="python">Python</SelectItem>
                      <SelectItem value="java">Java</SelectItem>
                      <SelectItem value="go">Go</SelectItem>
                      <SelectItem value="rust">Rust</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">
                    <GitBranch className="w-3 h-3 mr-1" />
                    {selectedPlatform.toUpperCase()}
                  </Badge>
                </div>
                <div className="flex space-x-3">
                  <Button type="button" variant="outline" onClick={() => (window.location.href = "/dashboard")}>
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isConnecting}>
                    {isConnecting ? "Connecting..." : "Connect Repository"}
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Connection Progress */}
      {isConnecting && connectionStep === 2 && (
        <Card>
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto animate-pulse">
                <GitBranch className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Connecting Repository...</h3>
              <p className="text-slate-600">We're establishing connection and fetching repository details.</p>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full animate-pulse" style={{ width: "60%" }}></div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
