'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    quote: "Analytics Quiet Storm transformó completamente nuestra estrategia de datos. En solo 3 meses, aumentamos nuestro ROI en un 45%.",
    author: "María González",
    company: "TechCorp",
    role: "CTO"
  },
  {
    id: 2,
    quote: "La implementación fue increíblemente rápida y el equipo de soporte es excepcional. Ahora tenemos insights que nunca antes habíamos tenido.",
    author: "Carlos Rodríguez",
    company: "DataFlow",
    role: "Director de Analytics"
  },
  {
    id: 3,
    quote: "Su plataforma de AI nos permite predecir tendencias del mercado con una precisión del 92%. Es como tener una bola de cristal.",
    author: "Ana Martínez",
    company: "InnovateLab",
    role: "CEO"
  }
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empresas de todo el mundo confían en nosotros para transformar 
            sus datos en ventajas competitivas.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial */}
          <div className="text-center">
            <div className="mb-8">
              <Quote className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-8 leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              <div className="text-center">
                <div className="font-semibold text-gray-900 text-lg">
                  {testimonials[currentIndex].author}
                </div>
                <div className="text-gray-600">
                  {testimonials[currentIndex].role} en {testimonials[currentIndex].company}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            
            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
