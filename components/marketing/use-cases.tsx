'use client'

import { Building2, Ship, Factory, Globe, TrendingUp, Users } from 'lucide-react'
import { motion } from 'framer-motion'

const useCases = [
  {
    icon: <Building2 className="w-8 h-8" />,
    title: 'Empresas Exportadoras',
    description: 'Identifica nuevos mercados, optimiza precios y monitorea la competencia en tiempo real.',
    examples: ['Análisis de demanda por país', 'Optimización de precios', 'Monitoreo de competencia']
  },
  {
    icon: <Ship className="w-8 h-8" />,
    title: 'Importadores',
    description: 'Encuentra los mejores proveedores, optimiza costos y gestiona riesgos de suministro.',
    examples: ['Evaluación de proveedores', 'Análisis de costos', 'Gestión de riesgos']
  },
  {
    icon: <Factory className="w-8 h-8" />,
    title: 'Manufactureras',
    description: 'Optimiza tu cadena de suministro y anticipa cambios en la demanda del mercado.',
    examples: ['Planificación de producción', 'Gestión de inventarios', 'Análisis de demanda']
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Consultoras',
    description: 'Ofrece servicios de consultoría basados en datos confiables y análisis profundo.',
    examples: ['Reportes personalizados', 'Análisis de mercado', 'Consultoría estratégica']
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Inversores',
    description: 'Identifica oportunidades de inversión en sectores del comercio exterior.',
    examples: ['Análisis de sectores', 'Evaluación de riesgos', 'Identificación de oportunidades']
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Gobiernos',
    description: 'Desarrolla políticas comerciales basadas en datos reales del mercado.',
    examples: ['Análisis de políticas', 'Monitoreo de comercio', 'Planificación estratégica']
  }
]

export function UseCases() {
  return (
    <section className="py-20 bg-gray-900 border-b border-gray-800">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Casos de Uso y Cliente Tipo
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nuestra plataforma se adapta a diferentes tipos de empresas y sectores del comercio exterior.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:border-primary-500/30"
            >
              <div className="w-16 h-16 bg-primary-500/20 rounded-2xl flex items-center justify-center mb-6 text-primary-400">
                {useCase.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{useCase.title}</h3>
              <p className="text-gray-300 leading-relaxed mb-6">{useCase.description}</p>
              
              <div className="space-y-2">
                {useCase.examples.map((example, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-400">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mr-3"></div>
                    {example}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
