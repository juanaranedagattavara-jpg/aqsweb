'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { contactSchema, type ContactForm as ContactFormType } from '@/lib/zod-schemas'
import { Mail, Phone, Building, MessageSquare, Send, CheckCircle } from 'lucide-react'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormType>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactFormType) => {
    setIsSubmitting(true)
    
    try {
      // Simular envío de formulario
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Aquí iría la lógica real de envío
      console.log('Form data:', data)
      
      setIsSubmitted(true)
      reset()
      
      // Resetear estado después de 5 segundos
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center p-8 bg-green-50 rounded-2xl border border-green-200">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-800 mb-2">
          ¡Mensaje enviado!
        </h3>
        <p className="text-green-700 mb-4">
          Gracias por contactarnos. Nos pondremos en contacto contigo en las próximas 24 horas.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="border-green-300 text-green-700 hover:bg-green-100"
        >
          Enviar otro mensaje
        </Button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Hablemos sobre tu proyecto
        </h3>
        <p className="text-gray-600">
          Cuéntanos sobre tus necesidades y te ayudaremos a encontrar la mejor solución.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Nombre */}
          <div className="form-group">
            <label htmlFor="name" className="label">
              <span className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                Nombre completo
              </span>
            </label>
            <input
              {...register('name')}
              type="text"
              id="name"
              className={`input ${errors.name ? 'border-red-500' : ''}`}
              placeholder="Tu nombre completo"
            />
            {errors.name && (
              <p className="error-message">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email" className="label">
              <span className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                Email corporativo
              </span>
            </label>
            <input
              {...register('email')}
              type="email"
              id="email"
              className={`input ${errors.email ? 'border-red-500' : ''}`}
              placeholder="tu@empresa.com"
            />
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Empresa */}
        <div className="form-group">
          <label htmlFor="company" className="label">
            <span className="flex items-center">
              <Building className="w-4 h-4 mr-2" />
              Empresa
            </span>
          </label>
          <input
            {...register('company')}
            type="text"
            id="company"
            className={`input ${errors.company ? 'border-red-500' : ''}`}
            placeholder="Nombre de tu empresa"
          />
          {errors.company && (
            <p className="error-message">{errors.company.message}</p>
          )}
        </div>

        {/* Teléfono */}
        <div className="form-group">
          <label htmlFor="phone" className="label">
            <span className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              Teléfono (opcional)
            </span>
          </label>
          <input
            {...register('phone')}
            type="tel"
            id="phone"
            className="input"
            placeholder="+34 XXX XXX XXX"
          />
        </div>

        {/* Servicio */}
        <div className="form-group">
          <label htmlFor="service" className="label">
            Tipo de servicio
          </label>
          <select
            {...register('service')}
            id="service"
            className="input"
          >
            <option value="">Selecciona un servicio</option>
            <option value="analytics">Analytics y BI</option>
            <option value="consulting">Consultoría estratégica</option>
            <option value="implementation">Implementación</option>
            <option value="other">Otro</option>
          </select>
        </div>

        {/* Mensaje */}
        <div className="form-group">
          <label htmlFor="message" className="label">
            <span className="flex items-center">
              <MessageSquare className="w-4 h-4 mr-2" />
              Cuéntanos sobre tu proyecto
            </span>
          </label>
          <textarea
            {...register('message')}
            id="message"
            rows={5}
            className={`textarea ${errors.message ? 'border-red-500' : ''}`}
            placeholder="Describe tu proyecto, objetivos y desafíos..."
          />
          {errors.message && (
            <p className="error-message">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 text-lg"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Enviando...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Enviar mensaje
            </>
          )}
        </Button>

        <p className="text-sm text-gray-500 text-center">
          Al enviar este formulario, aceptas nuestra{' '}
          <a href="/legal/privacidad" className="text-blue-600 hover:underline">
            política de privacidad
          </a>
          .
        </p>
      </form>
    </div>
  )
}
