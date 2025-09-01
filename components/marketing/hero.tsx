'use client'

import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { InteractiveDashboardCarousel } from "@/components/ui/interactive-dashboard-carousel"

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black border-b border-gray-800">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0">
        {/* Background limpio y profesional */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        
        {/* Gradientes sutiles para profundidad */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-l from-black/30 via-transparent to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
        
        {/* Efectos de iluminación sutiles */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-32 max-w-5xl">
        {/* Hero section */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-2xl"
          >
            Toma decisiones seguras en{" "}
            <span className="text-primary-400 drop-shadow-lg">
              mercados inciertos
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-xl"
          >
            QSP transforma datos de comercio exterior en inteligencia clara, confiable y accionable, para que dirijas tu empresa con visión y confianza.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a 
              href="/precios"
              className="group relative px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-500/25 backdrop-blur-sm inline-block"
            >
              Ver planes
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform inline-block" />
            </a>
          </motion.div>
        </div>

        {/* Interactive Dashboards Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20"
        >
          <InteractiveDashboardCarousel
            title="Dashboards Especializados"
            description="Explora nuestros dashboards interactivos diseñados para transformar datos en decisiones estratégicas"
          />
        </motion.div>
      </div>
    </section>
  )
}
