'use client'

import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black border-b border-gray-800">
      {/* Gradient background with grain effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-noise opacity-20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-32 max-w-5xl">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-medium mb-8"
        >
          <span>🚀 Transforma tu comercio exterior</span>
          <ArrowRight className="ml-2 w-4 h-4" />
        </motion.div>

        {/* Hero section */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
          >
            Toma decisiones seguras en{" "}
            <span className="text-primary-400">
              mercados inciertos
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            QSP transforma datos de comercio exterior en inteligencia clara, confiable y accionable, para que dirijas tu empresa con visión y confianza.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="group relative px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-500/25">
              Descubre cómo anticiparte al mercado
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 flex justify-center"
        >
          <div className="relative w-full max-w-4xl">
            <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-gray-700 shadow-2xl">
              <div className="bg-noise rounded-xl p-12 text-center">
                <div className="w-24 h-24 bg-primary-500/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary-400">Q</span>
                </div>
                <p className="text-gray-400 text-lg">
                  Dashboard de análisis de comercio exterior
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
