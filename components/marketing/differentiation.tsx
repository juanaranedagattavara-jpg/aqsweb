'use client'

import { Lightbulb, Zap, Target } from "lucide-react"
import { motion } from "framer-motion"

export function Differentiation() {
  return (
    <section className="py-24 bg-black border-b border-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Más que datos, conocimiento estratégico
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              No necesitas más planillas: necesitas un socio que convierta la información en claridad y dirección.
            </p>
            
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              En QSP creemos que <span className="text-primary-400 font-semibold">"lo que no se mide, no se puede mejorar"</span> y por eso diseñamos inteligencia de mercado que impulsa resultados tangibles.
            </p>

            {/* Key points */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Insights Accionables
                  </h3>
                  <p className="text-gray-400">
                    No solo números, sino recomendaciones claras para tu negocio
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Anticipación al Mercado
                  </h3>
                  <p className="text-gray-400">
                    Identifica tendencias antes de que se vuelvan obvias
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Enfoque Estratégico
                  </h3>
                  <p className="text-gray-400">
                    Cada dato se convierte en una ventaja competitiva
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-gray-700 shadow-2xl">
              <div className="bg-noise rounded-xl p-12 text-center">
                <div className="w-32 h-32 bg-primary-500/20 rounded-full mx-auto mb-8 flex items-center justify-center">
                  <Target className="w-16 h-16 text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Conocimiento Estratégico
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Transformamos datos en ventajas competitivas para tu empresa
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-400 mb-2">100%</div>
                    <div className="text-gray-400 text-sm">Datos Verificados</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-400 mb-2">24/7</div>
                    <div className="text-gray-400 text-sm">Acceso Continuo</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
