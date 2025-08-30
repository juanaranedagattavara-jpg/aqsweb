import { PricingSection } from '@/components/pricing/pricing-section'
import { PricingFAQ } from '@/components/pricing/pricing-faq'

export const metadata = {
  title: 'Planes y Precios | Analytics Quiet Storm',
  description: 'Elige el plan que mejor se adapte a tus necesidades. Desde startups hasta grandes empresas, tenemos la solución perfecta para ti.',
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Planes y Precios
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Elige el plan que mejor se adapte a tus necesidades. 
            Desde startups hasta grandes empresas, tenemos la solución perfecta para ti.
          </p>
        </div>
        
        <PricingSection />
        <PricingFAQ />
      </div>
    </div>
  )
}
