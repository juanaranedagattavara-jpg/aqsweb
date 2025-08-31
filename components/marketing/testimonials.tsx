'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'María González',
    role: 'Directora de Operaciones',
    company: 'ImportExport Pro',
    content: 'QSP nos ha permitido transformar completamente nuestro análisis de datos de importaciones. Ahora podemos anticipar tendencias del mercado y tomar decisiones estratégicas con confianza.',
    rating: 5,
    avatar: '/avatars/maria.jpg'
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    role: 'CEO',
    company: 'Global Trade Solutions',
    content: 'La plataforma de QSP es increíblemente intuitiva. En solo unas semanas, pudimos identificar oportunidades de mercado que antes nos pasaban desapercibidas.',
    rating: 5,
    avatar: '/avatars/carlos.jpg'
  },
  {
    id: 3,
    name: 'Ana Martínez',
    role: 'Directora de Estrategia',
    company: 'Trade Dynamics',
    content: 'Los insights que obtenemos de QSP nos han ayudado a optimizar nuestras rutas de importación y reducir costos en un 25%. Es una herramienta indispensable.',
    rating: 5,
    avatar: '/avatars/ana.jpg'
  },
  {
    id: 4,
    name: 'Luis Fernández',
    role: 'Director Comercial',
    company: 'Export Masters',
    content: 'QSP nos da una ventaja competitiva real. Podemos ver exactamente cómo se comporta la competencia y ajustar nuestra estrategia en tiempo real.',
    rating: 5,
    avatar: '/avatars/luis.jpg'
  }
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-24 bg-[#F6F8FB]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A2540] mb-8">
            Lo que dicen nuestros{' '}
            <span className="bg-gradient-to-r from-[#2F81F7] to-[#E65C3D] bg-clip-text text-transparent">
              clientes
            </span>
          </h2>
          <p className="text-xl text-[#374151] max-w-3xl mx-auto leading-relaxed">
            Descubre cómo QSP está transformando el análisis de datos para empresas 
            líderes en importaciones y exportaciones.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-[#2F81F7]/10">
            {/* Quote Icon */}
            <div className="absolute top-6 left-8 text-[#2F81F7]/20">
              <Quote className="h-12 w-12" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center">
              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-[#F59E0B] fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-[#0A2540] leading-relaxed mb-8 italic">
                "{currentTestimonial.content}"
              </blockquote>

              {/* Author Info */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2F81F7] to-[#E65C3D] rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                  {currentTestimonial.name.charAt(0)}
                </div>
                <div className="text-center">
                  <div className="font-semibold text-[#0A2540] text-lg">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-[#2F81F7] font-medium">
                    {currentTestimonial.role}
                  </div>
                  <div className="text-[#374151] text-sm">
                    {currentTestimonial.company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white border border-[#2F81F7]/20 text-[#2F81F7] p-3 rounded-full shadow-lg hover:bg-[#2F81F7] hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white border border-[#2F81F7]/20 text-[#2F81F7] p-3 rounded-full shadow-lg hover:bg-[#2F81F7] hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="Testimonio siguiente"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-[#2F81F7] scale-125' 
                    : 'bg-[#2F81F7]/30 hover:bg-[#2F81F7]/50'
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-8 py-4 bg-[#0A2540] hover:bg-[#113A63] text-white font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            <Quote className="w-5 h-5 mr-2" />
            Únete a nuestros clientes satisfechos
          </div>
        </div>
      </div>
    </section>
  )
}
