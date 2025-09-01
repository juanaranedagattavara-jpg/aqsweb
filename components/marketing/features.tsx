'use client'

import { BarChart3, Shield, Zap, Globe, TrendingUp, Users } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Dashboards Avanzados',
    description: 'Métricas clave y análisis en tiempo real del comercio exterior con visualizaciones interactivas.'
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Datos Confiables',
    description: 'Fuentes oficiales y verificación en tiempo real para garantizar la precisión de la información.'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Actualizaciones en Tiempo Real',
    description: 'Información actualizada constantemente para decisiones basadas en datos frescos.'
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Cobertura Global',
    description: 'Análisis de mercados internacionales con datos de más de 200 países y territorios.'
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Tendencias de Mercado',
    description: 'Identificación de patrones y tendencias emergentes para anticipar cambios del mercado.'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Colaboración en Equipo',
    description: 'Herramientas para compartir insights y trabajar en conjunto con tu equipo.'
  }
]

export function Features() {
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
            Características Principales
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nuestra plataforma combina tecnología avanzada con datos confiables para ofrecerte la mejor experiencia de análisis.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:border-primary-500/30"
            >
              <div className="w-16 h-16 bg-primary-500/20 rounded-2xl flex items-center justify-center mb-6 text-primary-400">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
