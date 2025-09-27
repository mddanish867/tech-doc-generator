"use client"

import { ConnectRepoForm } from "@/components/connect-repo/connect-repo-form"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { ConnectRepoSkeleton } from "@/components/skeletons/connect-repo-skeleton"
import { HeaderSkeleton } from "@/components/skeletons/header-skeleton"
import { useLoadingState } from "@/hooks/use-loading-state"

// Simulate API call for connection data
const fetchConnectionData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 400))
  return { platforms: [], settings: {} }
}

export default function ConnectRepoPage() {
  const { isLoading } = useLoadingState(fetchConnectionData, {
    minLoadingTime: 800,
  })

  return (
    <div className="min-h-screen bg-slate-50">
      {isLoading ? <HeaderSkeleton /> : <DashboardHeader />}

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {isLoading ? (
            <>
              <div className="text-center mb-8 space-y-2">
                <div className="h-8 w-64 bg-slate-200 rounded animate-pulse mx-auto" />
                <div className="h-4 w-96 bg-slate-200 rounded animate-pulse mx-auto" />
              </div>
              <ConnectRepoSkeleton />
            </>
          ) : (
            <>
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Connect Repository</h1>
                <p className="text-slate-600">
                  Connect your repository to start generating comprehensive documentation
                </p>
              </div>
              <ConnectRepoForm />
            </>
          )}
        </div>
      </main>
    </div>
  )
}
