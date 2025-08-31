'use client'

import { Container, TrendingUp, Users, BarChart3, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function UseCases() {
  return (
    <section className="py-24 bg-black border-b border-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-gray-700 shadow-2xl">
              <div className="bg-noise rounded-xl p-12 text-center">
                <div className="w-32 h-32 bg-primary-500/20 rounded-full mx-auto mb-8 flex items-center justify-center">
                  <Container className="w-16 h-16 text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Operación → Estrategia
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  Transforma tu enfoque operativo en visión estratégica
                </p>
                
                {/* Journey steps */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-left">
                    <div className="w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center">
                      <span className="text-primary-400 text-sm font-bold">1</span>
                    </div>
                    <span className="text-gray-300">Operación diaria</span>
                  </div>
                  <div className="flex items-center space-x-3 text-left">
                    <div className="w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center">
                      <span className="text-primary-400 text-sm font-bold">2</span>
                    </div>
                    <span className="text-gray-300">Análisis de datos</span>
                  </div>
                  <div className="flex items-center space-x-3 text-left">
                    <div className="w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center">
                      <span className="text-primary-400 text-sm font-bold">3</span>
                    </div>
                    <span className="text-gray-300">Estrategia ganadora</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              De la dirección a la{" "}
              <span className="text-primary-400">
                visión estratégica
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Dirigir una empresa exportadora significa enfrentar decisiones complejas cada día:
            </p>

            {/* Questions */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-400 text-sm font-bold">?</span>
                </div>
                <p className="text-lg text-gray-300">
                  ¿Cómo anticipar cambios en la demanda global?
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-400 text-sm font-bold">?</span>
                </div>
                <p className="text-lg text-gray-300">
                  ¿Cómo proteger la posición competitiva frente a nuevos actores?
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-400 text-sm font-bold">?</span>
                </div>
                <p className="text-lg text-gray-300">
                  ¿Cómo asegurar un crecimiento sostenible en un mercado volátil?
                </p>
              </div>
            </div>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              En QSP convertimos la incertidumbre en claridad. Nuestra plataforma transforma datos dispersos en inteligencia confiable y accionable, dándote la tranquilidad de tomar decisiones respaldadas y la fuerza para liderar con visión.
            </p>

            {/* Impact phrase */}
            <div className="bg-gradient-to-r from-primary-500/10 to-primary-600/10 rounded-2xl p-8 border border-primary-500/20 mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-primary-400 text-center leading-tight">
                "Tu mejor ventaja competitiva es decidir con certeza."
              </h3>
            </div>

            {/* CTA */}
            <button className="group flex items-center space-x-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors">
              <span>Descubre tu caso de uso</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
