'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Check, Star, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const plans = [
  {
    id: 'basic',
    name: 'Básico',
    description: 'Perfecto para startups y pequeñas empresas',
    monthlyPrice: 99,
    annualPrice: 79,
    color: 'basic',
    features: [
      'Hasta 5 usuarios',
      '3 proyectos activos',
      '10GB de almacenamiento',
      'Análisis básicos',
      'Soporte por email',
      'Integraciones básicas'
    ],
    cta: 'get-started',
    popular: false
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'Ideal para empresas en crecimiento',
    monthlyPrice: 299,
    annualPrice: 239,
    color: 'pro',
    features: [
      'Hasta 20 usuarios',
      '10 proyectos activos',
      '50GB de almacenamiento',
      'Análisis avanzados',
      'Soporte prioritario',
      'Integraciones premium',
      'Reportes personalizados',
      'API access'
    ],
    cta: 'get-started',
    popular: true
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Para grandes empresas y corporaciones',
    monthlyPrice: 599,
    annualPrice: 479,
    color: 'premium',
    features: [
      'Usuarios ilimitados',
      'Proyectos ilimitados',
      '500GB de almacenamiento',
      'AI Analytics',
      'Soporte 24/7',
      'Integraciones enterprise',
      'Reportes avanzados',
      'API completa',
      'Consultoría incluida',
      'SLA garantizado',
      'Onboarding dedicado',
      'Training personalizado'
    ],
    cta: 'talk-to-sales',
    popular: false
  }
]

const featureList = [
  'Análisis de datos en tiempo real',
  'Dashboards personalizables',
  'Exportación de reportes',
  'Integración con CRM',
  'Análisis de cohortes',
  'Funnel analysis',
  'A/B testing',
  'Predictive analytics',
  'Machine learning models',
  'Data warehousing',
  'ETL automático',
  'Backup automático',
  'Audit logs',
  'Compliance reporting',
  'White-label solution',
  'Custom integrations'
]

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false)

  const getPrice = (plan: typeof plans[0]) => {
    return isAnnual ? plan.annualPrice : plan.monthlyPrice
  }

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'basic':
        return 'border-blue-200 bg-blue-50'
      case 'pro':
        return 'border-teal-200 bg-teal-50'
      case 'premium':
        return 'border-amber-200 bg-amber-50'
      default:
        return 'border-gray-200 bg-gray-50'
    }
  }

  const getTextColor = (color: string) => {
    switch (color) {
      case 'basic':
        return 'text-blue-600'
      case 'pro':
        return 'text-teal-600'
      case 'premium':
        return 'text-amber-600'
      default:
        return 'text-gray-600'
    }
  }

  return (
    <div className="w-full">
      {/* Toggle */}
      <div className="flex justify-center mb-12">
        <div className="relative bg-gray-100 p-1 rounded-lg">
          <button
            onClick={() => setIsAnnual(false)}
            className={`relative px-6 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
              !isAnnual
                ? 'text-white bg-blue-600 shadow-sm'
                : 'text-gray-700 hover:text-gray-900'
            }`}
          >
            Mensual
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`relative px-6 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
              isAnnual
                ? 'text-white bg-blue-600 shadow-sm'
                : 'text-gray-700 hover:text-gray-900'
            }`}
          >
            Anual
            <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
              Ahorra 20%
            </span>
          </button>
        </div>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`relative rounded-2xl border-2 p-8 ${
              plan.popular 
                ? 'border-blue-500 shadow-xl scale-105' 
                : 'border-gray-200 shadow-lg'
            } bg-white`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                  <Star className="w-4 h-4 mr-2" />
                  Más Popular
                </div>
              </div>
            )}

            <div className="text-center mb-8">
              <h3 className={`text-2xl font-bold mb-2 ${getTextColor(plan.color)}`}>
                {plan.name}
              </h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <div className="mb-2">
                <span className="text-4xl font-bold text-gray-900">
                  ${getPrice(plan)}
                </span>
                <span className="text-gray-600">/mes</span>
              </div>
              {isAnnual && (
                <p className="text-sm text-green-600 font-medium">
                  Facturación anual
                </p>
              )}
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              className={`w-full ${
                plan.cta === 'talk-to-sales' 
                  ? 'bg-amber-600 hover:bg-amber-700' 
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
              asChild
            >
              <Link href={plan.cta === 'talk-to-sales' ? '/contacto' : '/planes'}>
                {plan.cta === 'talk-to-sales' ? 'Hablar con ventas' : 'Empezar ahora'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        ))}
      </div>

      {/* Feature comparison */}
      <div className="bg-gray-50 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-center mb-8">
          Comparación completa de características
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-1">
            <div className="font-medium text-gray-900 mb-4">Características</div>
            {featureList.map((feature, index) => (
              <div key={index} className="py-3 text-sm text-gray-600 border-b border-gray-200">
                {feature}
              </div>
            ))}
          </div>
          
          {plans.map((plan) => (
            <div key={plan.id} className="text-center">
              <div className={`font-medium mb-4 ${getTextColor(plan.color)}`}>
                {plan.name}
              </div>
              {featureList.map((_, index) => {
                const hasFeature = index < plan.features.length
                return (
                  <div key={index} className="py-3 border-b border-gray-200">
                    {hasFeature ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <div className="w-5 h-5 mx-auto text-gray-300">—</div>
                    )}
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
