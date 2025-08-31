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
          <div className="relative w-full max-w-6xl">
            <a 
              href="/dashboard" 
              className="block group transition-transform duration-300 hover:scale-105"
            >
              <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-gray-700 shadow-2xl hover:shadow-primary-500/25 transition-all duration-300 group-hover:border-primary-500/50">
                <div className="bg-white rounded-xl p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Cambios en el posicionamiento de las empresas</h3>
                  
                  {/* Imagen del gráfico */}
                  <div className="flex justify-center mb-4">
                    <img 
                      src="img/8badbfb8-a048-4771-b348-bb340d670d8a.png" 
                      alt="Gráfico de cambios en el posicionamiento de las empresas (2010-2025)" 
                      className="w-full max-w-4xl h-auto rounded-lg shadow-lg"
                    />
                  </div>
                  
                  <div className="mt-4 flex items-center justify-center space-x-2 text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium">Haz clic para explorar el Dashboard completo</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
