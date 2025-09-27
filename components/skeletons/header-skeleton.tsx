"use client"

import { Skeleton } from "@/components/ui/skeleton"

export function HeaderSkeleton() {
  return (
    <header className="bg-white border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Skeleton className="h-6 w-32" />
            <div className="hidden md:flex items-center space-x-2 bg-slate-100 rounded-lg px-3 py-2 w-96">
              <Skeleton className="h-10 w-full" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Skeleton className="h-8 w-8" />
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
        </div>
      </div>
    </header>
  )
}
