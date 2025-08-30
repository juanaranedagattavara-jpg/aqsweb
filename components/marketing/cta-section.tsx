'use client'

import { ArrowRight, Play, Calendar, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
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
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
              asChild
            >
              <Link href="/demo">
                Ver demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
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
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
              asChild
            >
              <Link href="/planes">
                Empezar gratis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
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
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
              asChild
            >
              <Link href="/contacto">
                Contactar
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg"
              asChild
            >
              <Link href="/planes">
                Empezar ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg"
              asChild
            >
              <Link href="/contacto">
                Hablar con ventas
              </Link>
            </Button>
          </div>
          
          <p className="text-blue-100 mt-6 text-sm">
            Sin tarjeta de crédito • Configuración en 5 minutos • Soporte 24/7
          </p>
        </div>
      </div>
    </section>
  )
}
