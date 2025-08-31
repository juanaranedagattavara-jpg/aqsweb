import { Metadata } from 'next'
import { Hero } from '@/components/marketing/hero'
import { Features } from '@/components/marketing/features'
import { Testimonials } from '@/components/marketing/testimonials'
import { Stats } from '@/components/marketing/stats'
import { CTASection } from '@/components/marketing/cta-section'

export const metadata: Metadata = {
  title: 'QSP - Analytics Quiet Storm | Análisis de Importaciones y Exportaciones',
  description: 'QSP es una solución pre-configurada de estadísticas de importaciones y exportaciones que transforma datos crudos de aduanas en información depurada, estandarizada y lista para análisis estratégico.',
  keywords: 'analytics, importaciones, exportaciones, aduanas, datos, estadísticas, QSP, Analytics Quiet Storm',
  openGraph: {
    title: 'QSP - Analytics Quiet Storm | Análisis de Importaciones y Exportaciones',
    description: 'Transformamos datos crudos de aduanas en información depurada, estandarizada y lista para análisis estratégico.',
    type: 'website',
    locale: 'es_ES',
  },
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
