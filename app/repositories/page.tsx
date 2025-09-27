"use client"

import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { RepositoryManager } from "@/components/repositories/repository-manager"
import { RepositorySkeleton } from "@/components/skeletons/repository-skeleton"
import { HeaderSkeleton } from "@/components/skeletons/header-skeleton"
import { useLoadingState } from "@/hooks/use-loading-state"

// Simulate API call for repositories data
const fetchRepositoriesData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 600))
  return { repositories: [] }
}

export default function RepositoriesPage() {
  const { isLoading } = useLoadingState(fetchRepositoriesData, {
    minLoadingTime: 1000,
  })

  return (
    <div className="min-h-screen bg-slate-50">
      {isLoading ? <HeaderSkeleton /> : <DashboardHeader />}

      <main className="container mx-auto px-4 py-8">
        {isLoading ? (
          <>
            <div className="mb-8 space-y-2">
              <div className="h-8 w-64 bg-slate-200 rounded animate-pulse" />
              <div className="h-4 w-96 bg-slate-200 rounded animate-pulse" />
            </div>
            <RepositorySkeleton />
          </>
        ) : (
          <>
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Connected Repositories</h1>
              <p className="text-slate-600">Manage your connected repositories and their documentation settings</p>
            </div>
            <RepositoryManager />
          </>
        )}
      </main>
    </div>
  )
}
