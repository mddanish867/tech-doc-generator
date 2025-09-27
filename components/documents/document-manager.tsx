"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, Download, Edit, Trash2, Search, Filter, Calendar, Clock, Eye, Share } from "lucide-react"

const mockDocuments = [
  {
    id: 1,
    title: "React Dashboard API Documentation",
    repository: "react-dashboard",
    platform: "GitHub",
    status: "completed",
    format: "PDF",
    size: "2.4 MB",
    pages: 32,
    createdAt: "2024-01-15",
    updatedAt: "2 hours ago",
    downloads: 15,
  },
  {
    id: 2,
    title: "AWS Lambda Functions Guide",
    repository: "aws-lambda-functions",
    platform: "AWS",
    status: "completed",
    format: "Markdown",
    size: "1.8 MB",
    pages: 28,
    createdAt: "2024-01-14",
    updatedAt: "1 day ago",
    downloads: 8,
  },
  {
    id: 3,
    title: "GCP Microservices Architecture",
    repository: "gcp-microservices",
    platform: "GCP",
    status: "completed",
    format: "HTML",
    size: "3.2 MB",
    pages: 45,
    createdAt: "2024-01-12",
    updatedAt: "3 days ago",
    downloads: 22,
  },
  {
    id: 4,
    title: "Azure DevOps Pipeline Setup",
    repository: "azure-devops-pipeline",
    platform: "Azure",
    status: "draft",
    format: "PDF",
    size: "956 KB",
    pages: 18,
    createdAt: "2024-01-10",
    updatedAt: "1 week ago",
    downloads: 3,
  },
  {
    id: 5,
    title: "Node.js REST API Documentation",
    repository: "nodejs-api",
    platform: "GitHub",
    status: "generating",
    format: "Markdown",
    size: "0 MB",
    pages: 0,
    createdAt: "2024-01-16",
    updatedAt: "30 minutes ago",
    downloads: 0,
  },
  {
    id: 6,
    title: "Python Data Pipeline Guide",
    repository: "python-pipeline",
    platform: "AWS",
    status: "completed",
    format: "DOCX",
    size: "2.1 MB",
    pages: 38,
    createdAt: "2024-01-08",
    updatedAt: "2 weeks ago",
    downloads: 12,
  },
]

export function DocumentManager() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [formatFilter, setFormatFilter] = useState("all")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "generating":
        return "bg-yellow-100 text-yellow-800"
      case "draft":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getFormatColor = (format: string) => {
    switch (format) {
      case "PDF":
        return "bg-red-100 text-red-800"
      case "Markdown":
        return "bg-blue-100 text-blue-800"
      case "HTML":
        return "bg-orange-100 text-orange-800"
      case "DOCX":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

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

  const filteredDocuments = mockDocuments.filter((doc) => {
    const matchesSearch =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.repository.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || doc.status === statusFilter
    const matchesFormat = formatFilter === "all" || doc.format === formatFilter

    return matchesSearch && matchesStatus && matchesFormat
  })

  return (
    <div className="space-y-6">
      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Document Library</span>
            <Button onClick={() => (window.location.href = "/generate")}>Generate New Document</Button>
          </CardTitle>
          <CardDescription>{filteredDocuments.length} documents found</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                placeholder="Search documents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-32">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="generating">Generating</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                </SelectContent>
              </Select>

              <Select value={formatFilter} onValueChange={setFormatFilter}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Formats</SelectItem>
                  <SelectItem value="PDF">PDF</SelectItem>
                  <SelectItem value="Markdown">Markdown</SelectItem>
                  <SelectItem value="HTML">HTML</SelectItem>
                  <SelectItem value="DOCX">DOCX</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Documents Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredDocuments.map((doc) => (
          <Card key={doc.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-slate-900 truncate mb-2">{doc.title}</h3>
                  <div className="flex flex-wrap gap-1 mb-2">
                    <Badge className={getPlatformColor(doc.platform)}>{doc.platform}</Badge>
                    <Badge variant="outline" className={getStatusColor(doc.status)}>
                      {doc.status}
                    </Badge>
                    <Badge variant="outline" className={getFormatColor(doc.format)}>
                      {doc.format}
                    </Badge>
                  </div>
                </div>
              </div>
              <p className="text-sm text-slate-600">Repository: {doc.repository}</p>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-4 text-sm text-slate-500">
                  <div className="flex items-center space-x-1">
                    <FileText className="w-3 h-3" />
                    <span>{doc.pages} pages</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Download className="w-3 h-3" />
                    <span>{doc.downloads} downloads</span>
                  </div>
                </div>

                <div className="text-xs text-slate-500 space-y-1">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>Created: {doc.createdAt}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>Updated: {doc.updatedAt}</span>
                  </div>
                  <div>Size: {doc.size}</div>
                </div>

                <div className="flex space-x-2 pt-2">
                  {doc.status === "completed" && (
                    <>
                      <Button size="sm" className="flex-1">
                        <Download className="w-3 h-3 mr-1" />
                        Download
                      </Button>
                      <Button variant="outline" size="sm">
                        <Eye className="w-3 h-3" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="w-3 h-3" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Share className="w-3 h-3" />
                      </Button>
                    </>
                  )}

                  {doc.status === "draft" && (
                    <>
                      <Button size="sm" className="flex-1">
                        <Edit className="w-3 h-3 mr-1" />
                        Continue Editing
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </>
                  )}

                  {doc.status === "generating" && (
                    <div className="flex-1 text-center">
                      <div className="text-sm text-slate-600">Generating...</div>
                      <div className="w-full bg-slate-200 rounded-full h-1 mt-1">
                        <div className="bg-blue-600 h-1 rounded-full animate-pulse" style={{ width: "60%" }}></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredDocuments.length === 0 && (
        <Card>
          <CardContent className="pt-6">
            <div className="text-center py-12">
              <FileText className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">No documents found</h3>
              <p className="text-slate-600 mb-4">
                {searchQuery || statusFilter !== "all" || formatFilter !== "all"
                  ? "Try adjusting your search or filters"
                  : "Generate your first document to get started"}
              </p>
              <Button onClick={() => (window.location.href = "/generate")}>Generate Documentation</Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
