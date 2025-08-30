'use client'

import { 
  BarChart3, 
  Brain, 
  Target, 
  Zap, 
  Shield, 
  Users,
  TrendingUp,
  Globe
} from 'lucide-react'

const features = [
  {
    icon: BarChart3,
    title: 'Análisis Avanzado',
    description: 'Utilizamos las últimas tecnologías de machine learning para extraer insights valiosos de tus datos.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Brain,
    title: 'AI Inteligente',
    description: 'Nuestro sistema de IA aprende y se adapta a tus necesidades específicas del negocio.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Target,
    title: 'Resultados Medibles',
    description: 'Cada proyecto incluye KPIs claros y reportes de ROI para demostrar el valor generado.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Zap,
    title: 'Implementación Rápida',
    description: 'Configuración en minutos, no en meses. Empieza a ver resultados desde el primer día.',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    icon: Shield,
    title: 'Seguridad Enterprise',
    description: 'Cumplimiento con GDPR, SOC2 y las más altas estándares de seguridad empresarial.',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: Users,
    title: 'Consultoría Experta',
    description: 'Equipo de expertos con más de 10 años de experiencia en analytics y estrategia empresarial.',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: TrendingUp,
    title: 'Escalabilidad',
    description: 'Crece con tu empresa. Nuestra plataforma se adapta a cualquier volumen de datos.',
    color: 'from-pink-500 to-pink-600'
  },
  {
    icon: Globe,
    title: 'Integración Global',
    description: 'Conecta con más de 100 herramientas y plataformas de tu stack tecnológico.',
    color: 'from-teal-500 to-teal-600'
  }
]

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Por qué elegirnos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones de analytics que marcan la diferencia. 
            Combinamos tecnología de vanguardia con experiencia empresarial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-6 w-6" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Empresas confían en nosotros</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-purple-600 mb-2">40%</div>
            <div className="text-gray-600">ROI promedio</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
            <div className="text-gray-600">Soporte disponible</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-600 mb-2">99.9%</div>
            <div className="text-gray-600">Uptime garantizado</div>
          </div>
        </div>
      </div>
    </section>
  )
}
