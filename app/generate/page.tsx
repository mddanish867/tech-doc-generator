"use client"

import { DocumentGenerator } from "@/components/generate/document-generator"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { GenerationSkeleton } from "@/components/skeletons/generation-skeleton"
import { HeaderSkeleton } from "@/components/skeletons/header-skeleton"
import { useLoadingState } from "@/hooks/use-loading-state"

// Simulate API call for generation data
const fetchGenerationData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500))
  return { repositories: [], templates: [] }
}

export default function GeneratePage() {
  const { isLoading } = useLoadingState(fetchGenerationData, {
    minLoadingTime: 900,
  })

  return (
    <div className="min-h-screen bg-slate-50">
      {isLoading ? <HeaderSkeleton /> : <DashboardHeader />}

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {isLoading ? (
            <>
              <div className="text-center mb-8 space-y-2">
                <div className="h-8 w-80 bg-slate-200 rounded animate-pulse mx-auto" />
                <div className="h-4 w-96 bg-slate-200 rounded animate-pulse mx-auto" />
              </div>
              <GenerationSkeleton />
            </>
          ) : (
            <>
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Generate Documentation</h1>
                <p className="text-slate-600">Create comprehensive documentation from your repository using AI</p>
              </div>
              <DocumentGenerator />
            </>
          )}
        </div>
      </main>
    </div>
  )
}
