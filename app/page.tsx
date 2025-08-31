import { Hero } from '@/components/marketing/hero'
import { Benefits } from '@/components/marketing/benefits'
import { Differentiation } from '@/components/marketing/differentiation'
import { Vision } from '@/components/marketing/vision'
import { UseCases } from '@/components/marketing/use-cases'
import { FinalCTA } from '@/components/marketing/final-cta'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Benefits />
      <Differentiation />
      <Vision />
      <UseCases />
      <FinalCTA />
    </main>
  )
}
