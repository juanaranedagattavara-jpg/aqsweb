import { Metadata } from 'next'
import { Hero } from '@/components/marketing/hero'
import { Features } from '@/components/marketing/features'
import { Testimonials } from '@/components/marketing/testimonials'
import { Stats } from '@/components/marketing/stats'
import { CTASection } from '@/components/marketing/cta-section'

export const metadata: Metadata = {
  title: 'Analytics Quiet Storm - Transformamos datos en decisiones estratégicas',
  description: 'Somos expertos en análisis de datos y consultoría estratégica. Ayudamos a empresas a tomar decisiones basadas en datos para impulsar el crecimiento y la innovación.',
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Stats />
      <Testimonials />
      <CTASection />
    </main>
  )
}
