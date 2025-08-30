'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "¿Puedo cambiar de plan en cualquier momento?",
    answer: "Sí, puedes cambiar de plan en cualquier momento. Los cambios se aplican inmediatamente y se prorratean en tu facturación."
  },
  {
    question: "¿Hay un período de prueba gratuito?",
    answer: "Sí, ofrecemos una prueba gratuita de 14 días para todos nuestros planes. No se requiere tarjeta de crédito para comenzar."
  },
  {
    question: "¿Qué incluye el soporte técnico?",
    answer: "El plan Básico incluye soporte por email, el plan Pro incluye soporte prioritario, y el plan Premium incluye soporte 24/7 con SLA garantizado."
  },
  {
    question: "¿Puedo cancelar mi suscripción?",
    answer: "Sí, puedes cancelar tu suscripción en cualquier momento desde tu panel de control. No hay penalizaciones por cancelación."
  },
  {
    question: "¿Los precios incluyen impuestos?",
    answer: "Los precios mostrados no incluyen impuestos. Los impuestos se calcularán según tu ubicación y se agregarán a tu factura."
  },
  {
    question: "¿Ofrecen descuentos para organizaciones sin fines de lucro?",
    answer: "Sí, ofrecemos descuentos especiales para organizaciones sin fines de lucro y startups. Contáctanos para más información."
  },
  {
    question: "¿Puedo exportar mis datos?",
    answer: "Sí, todos nuestros planes incluyen la capacidad de exportar tus datos en múltiples formatos (CSV, JSON, Excel)."
  },
  {
    question: "¿Qué integraciones están disponibles?",
    answer: "Ofrecemos más de 100 integraciones con herramientas populares como Salesforce, HubSpot, Google Analytics, y muchas más."
  }
]

export function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Preguntas frecuentes
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Resolvemos las dudas más comunes sobre nuestros planes y servicios.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                aria-expanded={openIndex === index}
                aria-controls={`faq-${index}`}
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              <div
                id={`faq-${index}`}
                className={`px-6 transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100 pb-4' 
                    : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center p-8 bg-blue-50 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿No encuentras la respuesta que buscas?
          </h3>
          <p className="text-gray-600 mb-6">
            Nuestro equipo de soporte está aquí para ayudarte con cualquier pregunta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:soporte@analyticsquietstorm.com"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Enviar email
            </a>
            <a
              href="/contacto"
              className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-200"
            >
              Contactar soporte
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
