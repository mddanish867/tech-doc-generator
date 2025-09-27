"use client"

import { cn } from "@/lib/utils"

interface PulseLoaderProps {
  className?: string
  color?: string
}

export function PulseLoader({ className, color = "bg-blue-600" }: PulseLoaderProps) {
  return (
    <div className={cn("flex justify-center items-center", className)}>
      <div className={cn("w-12 h-12 rounded-full animate-pulse", color)}></div>
    </div>
  )
}
