import { HeroSection } from "@/components/home/hero-section"
import { FeaturesSection } from "@/components/home/features-section"
import { HowItWorksSection } from "@/components/home/how-it-works-section"
import Testimonals  from "@/components/home/testimonals"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import TrustedByClient from "@/components/home/trusted-by-client"
import CTASection  from "@/components/home/cta-section"
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <Testimonals />
      <TrustedByClient />
      <CTASection />
      <Footer />
    </div>
  )
}
