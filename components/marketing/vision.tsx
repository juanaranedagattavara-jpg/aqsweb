'use client'

import { Eye, Calendar, TrendingUp, Shield } from "lucide-react"
import { motion } from "framer-motion"

export function Vision() {
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Planifica el futuro hoy
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Los mercados son cambiantes y perecibles. En QSP te ayudamos a adelantarte, tomar decisiones informadas y sostener tu competitividad en el tiempo.
          </p>
        </motion.div>

        {/* Vision cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center group"
          >
            <div className="w-16 h-16 bg-primary-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-500/20 transition-colors">
              <Eye className="w-8 h-8 text-primary-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Visión Clara
            </h3>
            <p className="text-gray-400">
              Anticipa cambios y oportunidades en el mercado
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
              <Calendar className="w-8 h-8 text-primary-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Planificación Estratégica
            </h3>
            <p className="text-gray-400">
              Toma decisiones basadas en datos reales
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
              <TrendingUp className="w-8 h-8 text-primary-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Crecimiento Sostenible
            </h3>
            <p className="text-gray-400">
              Mantén tu ventaja competitiva a largo plazo
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
              <Shield className="w-8 h-8 text-primary-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Protección del Negocio
            </h3>
            <p className="text-gray-400">
              Minimiza riesgos y maximiza oportunidades
            </p>
          </motion.div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-500/10 to-primary-600/10 rounded-2xl p-8 border border-primary-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Estás listo para planificar el futuro?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Únete a las empresas que ya están transformando sus datos en estrategias ganadoras
            </p>
            <button className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors">
              Comenzar Ahora
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
