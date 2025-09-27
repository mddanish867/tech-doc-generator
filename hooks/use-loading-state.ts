"use client"

import { useState, useEffect } from "react"

interface LoadingStateConfig {
  initialDelay?: number
  minLoadingTime?: number
}

export function useLoadingState(asyncOperation?: () => Promise<any>, config: LoadingStateConfig = {}) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const { initialDelay = 0, minLoadingTime = 1000 } = config

  useEffect(() => {
    let mounted = true
    const startTime = Date.now()

    const executeOperation = async () => {
      try {
        // Add initial delay if specified
        if (initialDelay > 0) {
          await new Promise((resolve) => setTimeout(resolve, initialDelay))
        }

        // Execute the async operation if provided
        if (asyncOperation) {
          await asyncOperation()
        }

        // Ensure minimum loading time
        const elapsedTime = Date.now() - startTime
        const remainingTime = Math.max(0, minLoadingTime - elapsedTime)

        if (remainingTime > 0) {
          await new Promise((resolve) => setTimeout(resolve, remainingTime))
        }

        if (mounted) {
          setIsLoading(false)
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err : new Error("Unknown error"))
          setIsLoading(false)
        }
      }
    }

    executeOperation()

    return () => {
      mounted = false
    }
  }, [asyncOperation, initialDelay, minLoadingTime])

  return { isLoading, error, setIsLoading }
}
