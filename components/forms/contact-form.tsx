'use client'

import { useState } from 'react'
import { Mail, Phone, Building, MessageSquare, Send, CheckCircle } from 'lucide-react'

interface ContactFormData {
  name: string
  email: string
  company: string
  phone: string
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  })
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El email no es válido'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    
    try {
      // Simular envío de formulario
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Aquí iría la lógica real de envío
      console.log('Form data:', formData)
      
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      })
      
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
        <button
          onClick={() => setIsSubmitted(false)}
          className="px-6 py-2 border border-green-300 text-green-700 rounded-lg hover:bg-green-100 transition-colors"
        >
          Enviar otro mensaje
        </button>
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

      <form onSubmit={onSubmit} className="space-y-6">
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
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className={`input ${errors.name ? 'border-red-500' : ''}`}
              placeholder="Tu nombre completo"
            />
            {errors.name && (
              <p className="error-message">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email" className="label">
              <span className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                Email
              </span>
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`input ${errors.email ? 'border-red-500' : ''}`}
              placeholder="tu@email.com"
            />
            {errors.email && (
              <p className="error-message">{errors.email}</p>
            )}
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
              type="text"
              id="company"
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              className="input"
              placeholder="Nombre de tu empresa"
            />
          </div>

          {/* Teléfono */}
          <div className="form-group">
            <label htmlFor="phone" className="label">
              <span className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                Teléfono
              </span>
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="input"
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>

        {/* Mensaje */}
        <div className="form-group">
          <label htmlFor="message" className="label">
            <span className="flex items-center">
              <MessageSquare className="w-4 h-4 mr-2" />
              Mensaje
            </span>
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            className={`input min-h-[120px] resize-none ${errors.message ? 'border-red-500' : ''}`}
            placeholder="Cuéntanos sobre tu proyecto, necesidades o cualquier consulta que tengas..."
          />
          {errors.message && (
            <p className="error-message">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary inline-flex items-center gap-2 px-8 py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Enviando...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Enviar mensaje
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}
