"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, GitBranch, FileText, Download } from "lucide-react"

export function QuickActions() {
  const actions = [
    {
      title: "Connect Repository",
      description: "Add a new repository to generate documentation",
      icon: Plus,
      action: () => (window.location.href = "/connect-repo"),
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      title: "Generate Documentation",
      description: "Create docs from your connected repositories",
      icon: FileText,
      action: () => (window.location.href = "/generate"),
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      title: "View All Repos",
      description: "Manage your connected repositories",
      icon: GitBranch,
      action: () => (window.location.href = "/repositories"),
      color: "bg-purple-500 hover:bg-purple-600",
    },
    {
      title: "Download Docs",
      description: "Export your generated documentation",
      icon: Download,
      action: () => (window.location.href = "/documents"),
      color: "bg-orange-500 hover:bg-orange-600",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Get started with common tasks</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-auto p-4 flex flex-col items-center space-y-2 hover:shadow-md transition-shadow bg-transparent"
              onClick={action.action}
            >
              <div className={`w-10 h-10 rounded-lg ${action.color} flex items-center justify-center`}>
                <action.icon className="w-5 h-5 text-white" />
              </div>
              <div className="text-center">
                <div className="font-medium text-sm">{action.title}</div>
                <div className="text-xs text-slate-500 mt-1">{action.description}</div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
