'use client'

import { ArrowRight, CheckCircle, Users, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'

const highlights = [
  {
    icon: <CheckCircle className="w-6 h-6" />,
    text: 'Datos verificados y confiables'
  },
  {
    icon: <Users className="w-6 h-6" />,
    text: 'Soporte experto disponible 24/7'
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    text: 'Resultados medibles y tangibles'
  }
]

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700 border-b border-primary-500/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para Transformar tu Comercio Exterior?
          </h2>
          
          <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
            Únete a cientos de empresas que ya confían en QSP Analytics para tomar decisiones estratégicas 
            y mantener su ventaja competitiva en mercados globales.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
              >
                <div className="text-primary-200">
                  {highlight.icon}
                </div>
                <span className="text-white font-medium">{highlight.text}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="/precios"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="group bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center"
            >
              Ver Planes
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <motion.a
              href="/dashboard"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="group border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
            >
              Explorar Dashboard
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-primary-200 text-sm mb-4">
              Más de 500 empresas confían en nosotros
            </p>
            <div className="flex justify-center space-x-8 opacity-60">
              {/* Placeholder para logos de empresas */}
              <div className="w-20 h-8 bg-white/20 rounded"></div>
              <div className="w-20 h-8 bg-white/20 rounded"></div>
              <div className="w-20 h-8 bg-white/20 rounded"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
