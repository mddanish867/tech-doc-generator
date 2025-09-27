"use client"

import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DocumentManager } from "@/components/documents/document-manager"
import { DocumentSkeleton } from "@/components/skeletons/document-skeleton"
import { HeaderSkeleton } from "@/components/skeletons/header-skeleton"
import { useLoadingState } from "@/hooks/use-loading-state"

// Simulate API call for documents data
const fetchDocumentsData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 700))
  return { documents: [] }
}

export default function DocumentsPage() {
  const { isLoading } = useLoadingState(fetchDocumentsData, {
    minLoadingTime: 1100,
  })

  return (
    <div className="min-h-screen bg-slate-50">
      {isLoading ? <HeaderSkeleton /> : <DashboardHeader />}

      <main className="container mx-auto px-4 py-8">
        {isLoading ? (
          <>
            <div className="mb-8 space-y-2">
              <div className="h-8 w-48 bg-slate-200 rounded animate-pulse" />
              <div className="h-4 w-80 bg-slate-200 rounded animate-pulse" />
            </div>
            <DocumentSkeleton />
          </>
        ) : (
          <>
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-slate-900 mb-2">My Documents</h1>
              <p className="text-slate-600">Manage and download your generated documentation</p>
            </div>
            <DocumentManager />
          </>
        )}
      </main>
    </div>
  )
}
