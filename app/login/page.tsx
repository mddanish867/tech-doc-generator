import { LoginForm } from "@/components/auth/login-form"
import { Navbar } from "@/components/layout/navbar"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navbar />

      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome Back</h1>
              <p className="text-slate-600">Sign in to continue generating amazing documentation</p>
            </div>
            <LoginForm />
          </div>
        </div>
      </main>
    </div>
  )
}
