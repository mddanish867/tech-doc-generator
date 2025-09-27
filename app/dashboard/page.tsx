"use client"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { RepositoryGrid } from "@/components/dashboard/repository-grid"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { RecentDocuments } from "@/components/dashboard/recent-documents"
import { DashboardSkeleton } from "@/components/skeletons/dashboard-skeleton"
import { HeaderSkeleton } from "@/components/skeletons/header-skeleton"
import { useLoadingState } from "@/hooks/use-loading-state"

// Simulate API call for dashboard data
const fetchDashboardData = async () => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800))
  return {
    repositories: [],
    documents: [],
    stats: {},
  }
}

export default function DashboardPage() {
  const { isLoading } = useLoadingState(fetchDashboardData, {
    minLoadingTime: 1200,
  })

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50">
        <HeaderSkeleton />
        <main>
          <DashboardSkeleton />
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          <div className="xl:col-span-3 space-y-8">
            <QuickActions />
            <RepositoryGrid />
          </div>

          <div className="xl:col-span-1 space-y-8">
            <RecentDocuments />
          </div>
        </div>
      </main>
    </div>
  )
}
