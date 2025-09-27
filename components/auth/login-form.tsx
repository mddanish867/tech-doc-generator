"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSocialLogin = (provider: string) => {
    setIsLoading(true)
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false)
      // Redirect to dashboard
      window.location.href = "/dashboard"
    }, 1500)
  }

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      window.location.href = "/dashboard"
    }, 1500)
  }

  return (
    <Card className="w-full">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Welcome to AutoDocGen</CardTitle>
        <CardDescription>Sign in to start generating beautiful documentation from your repositories</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleEmailLogin} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" required />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-slate-500">Or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" onClick={() => handleSocialLogin("github")} disabled={isLoading} className="w-full">
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </Button>
          <Button variant="outline" onClick={() => handleSocialLogin("google")} disabled={isLoading} className="w-full">
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Google
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Button
            variant="outline"
            onClick={() => handleSocialLogin("microsoft")}
            disabled={isLoading}
            className="w-full"
          >
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z" />
            </svg>
            Microsoft
          </Button>
          <Button variant="outline" onClick={() => handleSocialLogin("aws")} disabled={isLoading} className="w-full">
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335c-.072.048-.144.072-.208.072-.08 0-.16-.04-.239-.112-.112-.12-.207-.248-.279-.383-.072-.135-.144-.296-.207-.495-.527.623-1.191.934-1.975.934-.559 0-1.007-.16-1.335-.479-.328-.32-.488-.744-.488-1.279 0-.567.2-1.023.608-1.375.407-.352.944-.528 1.618-.528.224 0 .455.016.703.056.247.04.503.088.767.16v-.528c0-.551-.112-.936-.344-1.167-.231-.232-.625-.344-1.183-.344-.255 0-.519.032-.791.088-.272.056-.535.127-.791.24-.119.056-.207.088-.256.104-.048.016-.088.024-.112.024-.096 0-.144-.072-.144-.216v-.336c0-.112.016-.2.056-.255.04-.056.112-.112.207-.16.272-.144.6-.264.983-.36.384-.096.8-.144 1.231-.144.936 0 1.622.216 2.054.647.432.432.647 1.087.647 1.967v2.583zm-2.734 1.031c.216 0 .44-.04.679-.112.24-.072.455-.2.647-.376.12-.112.207-.24.256-.376.048-.135.08-.296.08-.479v-.231c-.199-.048-.415-.088-.647-.112-.231-.024-.456-.04-.671-.04-.479 0-.831.096-1.063.288-.231.192-.344.464-.344.823 0 .328.08.576.247.736.167.16.415.24.735.24.08 0 .151-.008.223-.016zm5.39.799c-.12 0-.199-.024-.247-.064-.048-.048-.088-.144-.127-.288L7.583 2.24c-.04-.144-.056-.24-.056-.279 0-.112.056-.175.168-.175h.687c.127 0 .207.024.247.064.048.048.08.144.112.288l1.695 6.678 1.575-6.678c.024-.144.064-.24.112-.288.048-.048.127-.064.247-.064h.559c.127 0 .207.024.247.064.048.048.088.144.112.288l1.593 6.766 1.743-6.766c.032-.144.072-.24.112-.288.048-.048.127-.064.247-.064h.647c.112 0 .175.056.175.175 0 .032-.008.072-.016.112-.008.04-.024.104-.048.2L14.648 11.4c-.04.144-.088.24-.127.288-.048.048-.135.064-.247.064h-.6c-.127 0-.207-.024-.247-.064-.048-.048-.088-.144-.112-.288l-1.567-6.519L10.182 11.4c-.024.144-.064.24-.112.288-.048.048-.127.064-.247.064h-.6zm8.943.112c-.44 0-.791-.048-1.071-.144-.279-.096-.487-.2-.631-.32-.144-.119-.239-.24-.279-.36-.04-.119-.064-.2-.064-.24v-.336c0-.144.056-.216.16-.216.04 0 .08.008.127.024.048.016.12.048.207.088.271.12.559.216.863.279.303.064.607.096.911.096.487 0 .863-.088 1.127-.264.264-.176.4-.432.4-.767 0-.224-.072-.416-.207-.567-.144-.152-.415-.296-.823-.432l-1.183-.376c-.599-.192-1.039-.479-1.31-.863-.272-.384-.407-.808-.407-1.279 0-.367.08-.695.239-.983.16-.288.375-.535.647-.743.272-.207.583-.367.935-.479.352-.112.719-.168 1.111-.168.191 0 .391.016.591.048.2.032.383.072.559.112.175.048.336.096.479.152.144.056.256.112.336.168.08.056.144.112.175.168.032.056.048.127.048.2v.304c0 .144-.056.216-.168.216-.064 0-.168-.032-.303-.096-.455-.216-.967-.32-1.535-.32-.44 0-.783.072-1.023.216-.24.144-.36.368-.36.671 0 .224.08.416.24.583.16.168.447.32.863.456l1.159.367c.591.192 1.023.456 1.279.792.256.336.383.735.383 1.191 0 .383-.08.735-.231 1.047-.152.312-.375.583-.671.807-.296.224-.647.4-1.063.528-.416.128-.88.192-1.384.192z" />
            </svg>
            AWS
          </Button>
        </div>

        <div className="text-center text-sm text-slate-500">
          Don't have an account? <button className="text-blue-600 hover:underline">Sign up</button>
        </div>
      </CardContent>
    </Card>
  )
}
