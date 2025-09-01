'use client'

import { ArrowRight, Play, Calendar, MessageSquare } from 'lucide-react'
// Button component removed - using standard HTML buttons
import Link from 'next/link'

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0A2540] via-[#113A63] to-[#0B1220] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            ¿Listo para transformar tu negocio?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Únete a más de 500 empresas que ya están tomando decisiones
            basadas en datos y viendo resultados extraordinarios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Demo CTA */}
          <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="inline-flex p-4 bg-white/20 rounded-full mb-6">
              <Play className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Ver Demo en Vivo</h3>
            <p className="text-blue-100 mb-6">
              Descubre cómo nuestra plataforma puede transformar tu análisis de datos.
            </p>
            <Link href="/demo" className="inline-flex items-center px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-[#0A2540] transition-colors">
              Ver demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Free Trial CTA */}
          <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="inline-flex p-4 bg-white/20 rounded-full mb-6">
              <Calendar className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Prueba Gratuita</h3>
            <p className="text-blue-100 mb-6">
              Comienza con una prueba gratuita de 14 días. Sin compromisos.
            </p>
            <Link href="/planes" className="inline-flex items-center px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-[#0A2540] transition-colors">
              Empezar gratis
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Contact CTA */}
          <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="inline-flex p-4 bg-white/20 rounded-full mb-6">
              <MessageSquare className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Hablar con Expertos</h3>
            <p className="text-blue-100 mb-6">
              Nuestro equipo está listo para ayudarte a encontrar la mejor solución.
            </p>
            <Link href="/contacto" className="inline-flex items-center px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-[#0A2540] transition-colors">
              Contactar
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link href="/planes" className="inline-flex items-center px-8 py-4 bg-white text-[#0A2540] hover:bg-gray-100 rounded-lg text-lg font-semibold transition-colors">
              Empezar ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/contacto" className="inline-flex items-center px-8 py-4 border border-white text-white hover:bg-white hover:text-[#0A2540] rounded-lg text-lg font-semibold transition-colors">
              Hablar con ventas
            </Link>
          </div>

          <p className="text-blue-100 mt-6 text-sm">
            Sin tarjeta de crédito • Configuración en 5 minutos • Soporte 24/7
          </p>
        </div>
      </div>
    </section>
  )
}
