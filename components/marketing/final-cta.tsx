'use client'

import { MessageCircle, ArrowRight, Star, Users, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

export function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-black border-b border-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Dirigir es decidir bajo{" "}
            <span className="text-primary-400">
              incertidumbre
            </span>
          </h2>
          
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Con QSP, esa incertidumbre se convierte en{" "}
            <span className="text-primary-400">
              oportunidad
            </span>
          </h3>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            No dejes que tus datos se queden en el pasado. Transforma la información aduanera en el motor de tu crecimiento futuro.
          </p>

          {/* Main CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16"
          >
            <button className="group relative px-10 py-5 bg-primary-600 hover:bg-primary-700 text-white font-bold text-xl rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-primary-500/25">
              <MessageCircle className="w-6 h-6 mr-3 inline-block" />
              Habla con un experto y transforma tus decisiones
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-gray-400">Empresas confían en QSP</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-primary-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">98%</div>
            <div className="text-gray-400">Mejora en decisiones estratégicas</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-primary-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
            <div className="text-gray-400">Satisfacción del cliente</div>
          </div>
        </motion.div>

        {/* Additional benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-500/10 to-primary-600/10 rounded-2xl p-8 border border-primary-500/20">
            <h3 className="text-2xl font-bold text-white mb-6">
              ¿Por qué esperar para transformar tu negocio?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-300">Consulta gratuita sin compromiso</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-300">Demo personalizada de tu industria</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-300">Análisis de ROI personalizado</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-300">Implementación en menos de 2 semanas</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
