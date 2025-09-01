import { Hero } from '@/components/marketing/hero'
import { Benefits } from '@/components/marketing/benefits'
import { Differentiation } from '@/components/marketing/differentiation'
import { Vision } from '@/components/marketing/vision'
import { UseCases } from '@/components/marketing/use-cases'
import { FinalCTA } from '@/components/marketing/final-cta'
import { FooterMinimal } from '@/components/layout/footer-minimal'
import { DashboardCarousel } from '@/components/ui/dashboard-carousel'
import { dashboardCards } from '@/lib/dashboard-data'

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col">
      <Hero />
      <Benefits />
      <Differentiation />
      <Vision />
      <UseCases />
      
      {/* Dashboard Carousel */}
      <section className="py-20 border-t border-gray-800">
        <DashboardCarousel 
          cards={dashboardCards}
          title="Dashboards Interactivos"
          description="Explora nuestros dashboards especializados en comercio exterior diseñados para transformar datos en decisiones estratégicas"
        />
      </section>
      
      <FinalCTA />
      
      {/* Footer Minimalista */}
      <FooterMinimal />
    </main>
  )
}
