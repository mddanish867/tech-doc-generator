"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, Edit, Clock } from "lucide-react"
import { useState, useEffect } from "react"
import { Skeleton } from "@/components/ui/skeleton"

const mockDocuments = [
  {
    id: 1,
    title: "React Dashboard API Documentation",
    repository: "react-dashboard",
    status: "completed",
    createdAt: "2 hours ago",
    size: "2.4 MB",
    format: "PDF",
  },
  {
    id: 2,
    title: "AWS Lambda Functions Guide",
    repository: "aws-lambda-functions",
    status: "generating",
    createdAt: "1 day ago",
    size: "1.8 MB",
    format: "Markdown",
  },
  {
    id: 3,
    title: "GCP Microservices Architecture",
    repository: "gcp-microservices",
    status: "completed",
    createdAt: "3 days ago",
    size: "3.2 MB",
    format: "HTML",
  },
  {
    id: 4,
    title: "Azure DevOps Pipeline Setup",
    repository: "azure-devops-pipeline",
    status: "draft",
    createdAt: "1 week ago",
    size: "956 KB",
    format: "PDF",
  },
]

export function RecentDocuments() {
  const [isLoadingDocs, setIsLoadingDocs] = useState(true)
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
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadingDocs(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  if (isLoadingDocs) {
    return (
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="space-y-2">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-4 w-48" />
          </div>
          <Skeleton className="h-8 w-16" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3 flex-1">
                  <Skeleton className="w-10 h-10 rounded-lg" />
                  <div className="flex-1 min-w-0">
                    <Skeleton className="h-4 w-full mb-2" />
                    <div className="flex items-center space-x-2 mb-1">
                      <Skeleton className="h-3 w-16" />
                      <Skeleton className="h-3 w-12" />
                      <Skeleton className="h-3 w-10" />
                    </div>
                    <div className="flex items-center space-x-3">
                      <Skeleton className="h-3 w-12" />
                      <Skeleton className="h-3 w-8" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Skeleton className="w-8 h-8" />
                  <Skeleton className="w-8 h-8" />
                </div>
              </div>
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
          <CardTitle>Recent Documents</CardTitle>
          <CardDescription>Your latest generated documentation</CardDescription>
        </div>
        <Button variant="outline" size="sm" onClick={() => (window.location.href = "/documents")}>
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockDocuments.map((doc) => (
            <div
              key={doc.id}
              className="flex items-center justify-between p-3 border rounded-lg hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-900 truncate">{doc.title}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <p className="text-xs text-slate-500">{doc.repository}</p>
                    <Badge variant="outline" className={getStatusColor(doc.status)}>
                      {doc.status}
                    </Badge>
                    <Badge variant="outline" className={getFormatColor(doc.format)}>
                      {doc.format}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-3 mt-1 text-xs text-slate-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{doc.createdAt}</span>
                    </div>
                    <span>{doc.size}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                {doc.status === "completed" && (
                  <>
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </>
                )}
                {doc.status === "draft" && (
                  <Button variant="ghost" size="sm">
                    <Edit className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
