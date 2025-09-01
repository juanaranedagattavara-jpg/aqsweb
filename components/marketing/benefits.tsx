'use client'

import { CheckCircle, TrendingUp, Shield, Zap, Users, Globe } from 'lucide-react'
import { motion } from 'framer-motion'

const benefits = [
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: 'Decisiones Informadas',
    description: 'Toma decisiones estratégicas basadas en datos reales y análisis profundos del mercado.'
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Crecimiento Sostenible',
    description: 'Identifica oportunidades de mercado y optimiza tus operaciones para un crecimiento constante.'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Reducción de Riesgos',
    description: 'Anticipa cambios del mercado y minimiza riesgos con análisis predictivo avanzado.'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Eficiencia Operativa',
    description: 'Automatiza procesos de análisis y libera tiempo para estrategias más importantes.'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Colaboración en Equipo',
    description: 'Comparte insights y trabaja en conjunto con herramientas colaborativas integradas.'
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Expansión Global',
    description: 'Accede a datos de mercados internacionales para expandir tu presencia global.'
  }
]

export function Benefits() {
  return (
    <section className="py-20 bg-black border-b border-gray-800">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Beneficios Clave
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre cómo QSP Analytics puede transformar tu negocio y llevarte al siguiente nivel.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:border-primary-500/30"
            >
              <div className="w-16 h-16 bg-primary-500/20 rounded-2xl flex items-center justify-center mb-6 text-primary-400">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
              <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
