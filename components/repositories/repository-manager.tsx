"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  GitBranch,
  Star,
  Eye,
  Calendar,
  Settings,
  Trash2,
  RefreshCw,
  Search,
  Filter,
  Plus,
  ExternalLink,
  FileText,
  Users,
  Code,
} from "lucide-react"

const mockRepositories = [
  {
    id: 1,
    name: "react-dashboard",
    platform: "GitHub",
    url: "https://github.com/user/react-dashboard",
    description: "A modern React dashboard with TypeScript and Tailwind CSS",
    language: "TypeScript",
    stars: 245,
    watchers: 32,
    forks: 18,
    branches: 8,
    commits: 156,
    contributors: 3,
    lastUpdated: "2 days ago",
    connectedAt: "2024-01-10",
    status: "active",
    docsGenerated: 3,
    lastDocGenerated: "2 hours ago",
  },
  {
    id: 2,
    name: "aws-lambda-functions",
    platform: "AWS",
    url: "https://codecommit.aws.com/user/aws-lambda-functions",
    description: "Collection of serverless functions for various use cases",
    language: "Python",
    stars: 89,
    watchers: 15,
    forks: 7,
    branches: 3,
    commits: 89,
    contributors: 2,
    lastUpdated: "1 week ago",
    connectedAt: "2024-01-08",
    status: "active",
    docsGenerated: 2,
    lastDocGenerated: "1 day ago",
  },
  {
    id: 3,
    name: "gcp-microservices",
    platform: "GCP",
    url: "https://source.cloud.google.com/user/gcp-microservices",
    description: "Microservices architecture deployed on Google Cloud Platform",
    language: "Go",
    stars: 156,
    watchers: 28,
    forks: 12,
    branches: 12,
    commits: 234,
    contributors: 5,
    lastUpdated: "3 days ago",
    connectedAt: "2024-01-05",
    status: "active",
    docsGenerated: 4,
    lastDocGenerated: "3 days ago",
  },
  {
    id: 4,
    name: "azure-devops-pipeline",
    platform: "Azure",
    url: "https://dev.azure.com/user/azure-devops-pipeline",
    description: "CI/CD pipeline configuration for Azure DevOps",
    language: "YAML",
    stars: 67,
    watchers: 9,
    forks: 4,
    branches: 4,
    commits: 45,
    contributors: 1,
    lastUpdated: "5 days ago",
    connectedAt: "2024-01-03",
    status: "inactive",
    docsGenerated: 1,
    lastDocGenerated: "1 week ago",
  },
]

export function RepositoryManager() {
  const [searchQuery, setSearchQuery] = useState("")
  const [platformFilter, setPlatformFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "inactive":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const filteredRepositories = mockRepositories.filter((repo) => {
    const matchesSearch =
      repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      repo.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesPlatform = platformFilter === "all" || repo.platform === platformFilter
    const matchesStatus = statusFilter === "all" || repo.status === statusFilter

    return matchesSearch && matchesPlatform && matchesStatus
  })

  return (
    <div className="space-y-6">
      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Repository Management</span>
            <Button onClick={() => (window.location.href = "/connect-repo")}>
              <Plus className="w-4 h-4 mr-2" />
              Connect Repository
            </Button>
          </CardTitle>
          <CardDescription>{filteredRepositories.length} repositories connected</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                placeholder="Search repositories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Select value={platformFilter} onValueChange={setPlatformFilter}>
                <SelectTrigger className="w-32">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Platforms</SelectItem>
                  <SelectItem value="GitHub">GitHub</SelectItem>
                  <SelectItem value="AWS">AWS</SelectItem>
                  <SelectItem value="GCP">GCP</SelectItem>
                  <SelectItem value="Azure">Azure</SelectItem>
                </SelectContent>
              </Select>

              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Repository Cards */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {filteredRepositories.map((repo) => (
          <Card key={repo.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge className={getPlatformColor(repo.platform)}>{repo.platform}</Badge>
                    <Badge variant="outline" className={getLanguageColor(repo.language)}>
                      {repo.language}
                    </Badge>
                    <Badge variant="outline" className={getStatusColor(repo.status)}>
                      {repo.status}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">{repo.name}</h3>
                  <p className="text-sm text-slate-600 mb-3">{repo.description}</p>
                </div>
                <Button variant="ghost" size="sm">
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Repository Stats */}
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="text-center p-2 bg-slate-50 rounded">
                  <div className="flex items-center justify-center space-x-1 text-slate-600 mb-1">
                    <Star className="w-3 h-3" />
                    <span>Stars</span>
                  </div>
                  <div className="font-semibold">{repo.stars}</div>
                </div>
                <div className="text-center p-2 bg-slate-50 rounded">
                  <div className="flex items-center justify-center space-x-1 text-slate-600 mb-1">
                    <GitBranch className="w-3 h-3" />
                    <span>Branches</span>
                  </div>
                  <div className="font-semibold">{repo.branches}</div>
                </div>
                <div className="text-center p-2 bg-slate-50 rounded">
                  <div className="flex items-center justify-center space-x-1 text-slate-600 mb-1">
                    <Code className="w-3 h-3" />
                    <span>Commits</span>
                  </div>
                  <div className="font-semibold">{repo.commits}</div>
                </div>
              </div>

              {/* Additional Stats */}
              <div className="grid grid-cols-2 gap-4 text-xs text-slate-500">
                <div className="flex items-center space-x-1">
                  <Eye className="w-3 h-3" />
                  <span>{repo.watchers} watchers</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-3 h-3" />
                  <span>{repo.contributors} contributors</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-3 h-3" />
                  <span>Updated {repo.lastUpdated}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FileText className="w-3 h-3" />
                  <span>{repo.docsGenerated} docs generated</span>
                </div>
              </div>

              {/* Documentation Info */}
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-blue-900">Documentation</span>
                  <Badge variant="outline" className="text-blue-800">
                    {repo.docsGenerated} generated
                  </Badge>
                </div>
                <p className="text-xs text-blue-700">Last generated: {repo.lastDocGenerated}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2 pt-2">
                <Button size="sm" className="flex-1">
                  <FileText className="w-3 h-3 mr-1" />
                  Generate Docs
                </Button>
                <Button variant="outline" size="sm">
                  <RefreshCw className="w-3 h-3" />
                </Button>
                <Button variant="outline" size="sm">
                  <Settings className="w-3 h-3" />
                </Button>
                <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 bg-transparent">
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredRepositories.length === 0 && (
        <Card>
          <CardContent className="pt-6">
            <div className="text-center py-12">
              <GitBranch className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">No repositories found</h3>
              <p className="text-slate-600 mb-4">
                {searchQuery || platformFilter !== "all" || statusFilter !== "all"
                  ? "Try adjusting your search or filters"
                  : "Connect your first repository to get started"}
              </p>
              <Button onClick={() => (window.location.href = "/connect-repo")}>
                <Plus className="w-4 h-4 mr-2" />
                Connect Repository
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
