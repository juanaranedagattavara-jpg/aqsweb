import { Hero } from '@/components/marketing/hero'
import { Features } from '@/components/marketing/features'
import { Benefits } from '@/components/marketing/benefits'
import { Differentiation } from '@/components/marketing/differentiation'
import { Vision } from '@/components/marketing/vision'
import { UseCases } from '@/components/marketing/use-cases'
import { CTA } from '@/components/marketing/cta'
import { Footer } from '@/components/layout/footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Benefits />
      <Differentiation />
      <Vision />
      <UseCases />
      <CTA />
      <Footer />
    </div>
  )
}
