"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GitBranch, Star, Eye, Calendar, ExternalLink, Plus } from "lucide-react"
import { useState, useEffect } from "react"
import { Skeleton } from "@/components/ui/skeleton"

const mockRepositories = [
  {
    id: 1,
    name: "react-dashboard",
    platform: "GitHub",
    description: "A modern React dashboard with TypeScript and Tailwind CSS",
    language: "TypeScript",
    stars: 245,
    watchers: 32,
    lastUpdated: "2 days ago",
    branches: 8,
    status: "connected",
  },
  {
    id: 2,
    name: "aws-lambda-functions",
    platform: "AWS",
    description: "Collection of serverless functions for various use cases",
    language: "Python",
    stars: 89,
    watchers: 15,
    lastUpdated: "1 week ago",
    branches: 3,
    status: "connected",
  },
  {
    id: 3,
    name: "gcp-microservices",
    platform: "GCP",
    description: "Microservices architecture deployed on Google Cloud Platform",
    language: "Go",
    stars: 156,
    watchers: 28,
    lastUpdated: "3 days ago",
    branches: 12,
    status: "connected",
  },
  {
    id: 4,
    name: "azure-devops-pipeline",
    platform: "Azure",
    description: "CI/CD pipeline configuration for Azure DevOps",
    language: "YAML",
    stars: 67,
    watchers: 9,
    lastUpdated: "5 days ago",
    branches: 4,
    status: "connected",
  },
]

export function RepositoryGrid() {
  const [isLoadingRepos, setIsLoadingRepos] = useState(true)
  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case "GitHub":
        return "bg-gray-900 text-white"
      case "AWS":
        return "bg-orange-500 text-white"
      case "GCP":
        return "bg-blue-500 text-white"
      case "Azure":
        return "bg-blue-600 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  const getLanguageColor = (language: string) => {
    switch (language) {
      case "TypeScript":
        return "bg-blue-100 text-blue-800"
      case "Python":
        return "bg-green-100 text-green-800"
      case "Go":
        return "bg-cyan-100 text-cyan-800"
      case "YAML":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadingRepos(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoadingRepos) {
    return (
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="space-y-2">
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-4 w-64" />
          </div>
          <Skeleton className="h-10 w-32" />
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <Card key={index}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Skeleton className="h-5 w-16" />
                      <Skeleton className="h-5 w-20" />
                    </div>
                    <Skeleton className="h-8 w-8" />
                  </div>
                  <Skeleton className="h-6 w-32 mb-2" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-sm mb-4">
                    <div className="flex items-center space-x-4">
                      <Skeleton className="h-3 w-8" />
                      <Skeleton className="h-3 w-8" />
                      <Skeleton className="h-3 w-6" />
                    </div>
                    <Skeleton className="h-3 w-16" />
                  </div>
                  <div className="flex space-x-2">
                    <Skeleton className="h-8 flex-1" />
                    <Skeleton className="h-8 flex-1" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Connected Repositories</CardTitle>
          <CardDescription>Manage your connected repositories across platforms</CardDescription>
        </div>
        <Button onClick={() => (window.location.href = "/connect-repo")}>
          <Plus className="w-4 h-4 mr-2" />
          Connect New
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {mockRepositories.map((repo) => (
            <Card key={repo.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Badge className={getPlatformColor(repo.platform)}>{repo.platform}</Badge>
                    <Badge variant="outline" className={getLanguageColor(repo.language)}>
                      {repo.language}
                    </Badge>
                  </div>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
                <CardTitle className="text-lg">{repo.name}</CardTitle>
                <CardDescription className="text-sm">{repo.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3" />
                      <span>{repo.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>{repo.watchers}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitBranch className="w-3 h-3" />
                      <span>{repo.branches}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{repo.lastUpdated}</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" className="flex-1">
                    Generate Docs
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
