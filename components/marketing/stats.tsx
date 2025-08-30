'use client'

import { TrendingUp, Users, Target, Award } from 'lucide-react'

const stats = [
  {
    icon: TrendingUp,
    value: '+500',
    label: 'Empresas confían en nosotros',
    description: 'Desde startups hasta Fortune 500',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Users,
    value: '+10,000',
    label: 'Usuarios activos',
    description: 'En más de 50 países',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Target,
    value: '+40%',
    label: 'ROI promedio',
    description: 'Mejora en resultados de negocio',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Award,
    value: '99.9%',
    label: 'Uptime garantizado',
    description: 'Disponibilidad del servicio',
    color: 'from-orange-500 to-orange-600'
  }
]

export function Stats() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Números que hablan por sí solos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestro impacto medido en resultados tangibles y crecimiento empresarial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${stat.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="h-8 w-8" />
              </div>

              {/* Value */}
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-lg font-semibold text-gray-700 mb-3">
                {stat.label}
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {stat.description}
              </p>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200">
            <TrendingUp className="w-5 h-5 mr-2" />
            Ver más casos de éxito
          </div>
        </div>
      </div>
    </section>
  )
}
