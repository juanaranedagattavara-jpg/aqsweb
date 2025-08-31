import { Header } from '@/components/layout/header'
import { Hero } from '@/components/marketing/hero'
import { Benefits } from '@/components/marketing/benefits'
import { Differentiation } from '@/components/marketing/differentiation'
import { Vision } from '@/components/marketing/vision'
import { UseCases } from '@/components/marketing/use-cases'
import { FinalCTA } from '@/components/marketing/final-cta'
import { Footer } from '@/components/layout/footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-primary">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Differentiation />
        <Vision />
        <UseCases />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
