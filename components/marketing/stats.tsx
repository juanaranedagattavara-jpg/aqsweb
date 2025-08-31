'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Globe, Zap } from 'lucide-react'

interface StatItem {
  icon: React.ComponentType<{ className?: string }>
  value: string
  label: string
  color: string
}

const stats: StatItem[] = [
  {
    icon: TrendingUp,
    value: "98%",
    label: "Precisión en Datos",
    color: "text-accent"
  },
  {
    icon: Users,
    value: "10K+",
    label: "Usuarios Activos",
    color: "text-accent-2"
  },
  {
    icon: Globe,
    value: "150+",
    label: "Países Cubiertos",
    color: "text-warning"
  },
  {
    icon: Zap,
    value: "<100ms",
    label: "Latencia Promedio",
    color: "text-accent"
  }
]

export function Stats() {
  return (
    <section className="py-20 bg-primary-900/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Números que Hablan por Sí Solos
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Nuestra plataforma ha transformado la forma en que las empresas acceden y analizan datos globales.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="card p-8 text-center">
                <div className={`w-16 h-16 mx-auto mb-6 bg-primary-800 rounded-2xl flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl lg:text-4xl font-display font-bold text-white mb-2">{stat.value}</div>
                <p className="text-muted text-sm lg:text-base">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
