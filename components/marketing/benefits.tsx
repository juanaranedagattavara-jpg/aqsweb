'use client'

import { TrendingUp, Target, BarChart3, Clock, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

const benefits = [
  {
    icon: TrendingUp,
    title: "Analiza tendencias y proyecta el futuro de tu industria",
    description: "Identifica patrones y anticipa cambios en el mercado"
  },
  {
    icon: Target,
    title: "Evalúa tu desempeño frente a la competencia",
    description: "Compara métricas y encuentra oportunidades de mejora"
  },
  {
    icon: BarChart3,
    title: "Accede a dashboards visuales y fáciles de interpretar",
    description: "Información clara y accionable en tiempo real"
  },
  {
    icon: Clock,
    title: "Ahorra tiempo con datos estandarizados y verificados",
    description: "Información confiable y lista para usar"
  }
]

export function Benefits() {
  return (
    <section className="py-24 bg-gray-900 border-b border-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            De la incertidumbre a la claridad
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Confianza en tus decisiones: datos validados y estandarizados. Anticipa riesgos: detecta tendencias y cambios del mercado antes que tu competencia. Ahorra tiempo y energía mental: dashboards claros en lugar de planillas interminables. Construye ventaja competitiva: conoce el presente y proyecta el futuro de tu industria.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center group"
          >
            <div className="w-16 h-16 bg-primary-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-500/20 transition-colors">
              <TrendingUp className="w-8 h-8 text-primary-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Confianza en tus decisiones
            </h3>
            <p className="text-gray-400">
              Datos validados y estandarizados
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center group"
          >
            <div className="w-16 h-16 bg-primary-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-500/20 transition-colors">
              <Target className="w-8 h-8 text-primary-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Anticipa riesgos
            </h3>
            <p className="text-gray-400">
              Detecta tendencias y cambios del mercado antes que tu competencia
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center group"
          >
            <div className="w-16 h-16 bg-primary-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-500/20 transition-colors">
              <BarChart3 className="w-8 h-8 text-primary-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Ahorra tiempo y energía mental
            </h3>
            <p className="text-gray-400">
              Dashboards claros en lugar de planillas interminables
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center group"
          >
            <div className="w-16 h-16 bg-primary-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-500/20 transition-colors">
              <Clock className="w-8 h-8 text-primary-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Construye ventaja competitiva
            </h3>
            <p className="text-gray-400">
              Conoce el presente y proyecta el futuro de tu industria
            </p>
          </motion.div>
        </div>

        {/* Additional highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center px-6 py-3 bg-primary-500/10 border border-primary-500/20 rounded-full">
            <CheckCircle className="w-5 h-5 text-primary-400 mr-2" />
            <span className="text-primary-400 font-medium">
              Todos los beneficios incluidos en cada plan
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
