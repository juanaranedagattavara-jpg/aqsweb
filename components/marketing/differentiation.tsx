'use client'

import { Target, Zap, Shield, Users, Globe, BarChart3 } from 'lucide-react'
import { motion } from 'framer-motion'

const differentiators = [
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Enfoque Especializado',
    description: 'Nos enfocamos exclusivamente en comercio exterior, con expertise profundo en el sector.'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Tecnología de Vanguardia',
    description: 'Utilizamos las últimas tecnologías de IA y machine learning para análisis predictivo.'
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Datos Verificados',
    description: 'Todas nuestras fuentes son oficiales y verificadas, garantizando la máxima precisión.'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Soporte Experto',
    description: 'Equipo de especialistas en comercio exterior disponible para consultoría personalizada.'
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Cobertura Global',
    description: 'Acceso a datos de más de 200 países con análisis regional y local detallado.'
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Dashboards Personalizados',
    description: 'Cada dashboard se adapta a las necesidades específicas de tu industria y mercado.'
  }
]

export function Differentiation() {
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
            ¿Por Qué Elegir QSP?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nuestra propuesta de valor única nos distingue de la competencia y nos convierte en tu socio estratégico.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((differentiator, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:border-primary-500/30"
            >
              <div className="w-16 h-16 bg-primary-500/20 rounded-2xl flex items-center justify-center mb-6 text-primary-400">
                {differentiator.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{differentiator.title}</h3>
              <p className="text-gray-300 leading-relaxed">{differentiator.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
