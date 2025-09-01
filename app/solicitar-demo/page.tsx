'use client'

import React, { useState } from 'react'
import Calendar from 'react-calendar'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { CalendarIcon, Clock, User, Mail, CheckCircle } from 'lucide-react'
import { FooterMinimal } from '@/components/layout/footer-minimal'
import { DashboardCarousel } from '@/components/ui/dashboard-carousel'
import { dashboardCards } from '@/lib/dashboard-data'

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

interface DemoFormData {
  nombre: string
  email: string
  fecha: Date | null
  hora: string
}

const horasDisponibles = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'
]

export default function SolicitarDemoPage() {
  const [formData, setFormData] = useState<DemoFormData>({
    nombre: '',
    email: '',
    fecha: null,
    hora: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof DemoFormData, string>>>({})

  const handleInputChange = (field: keyof DemoFormData, value: string | Date) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Limpiar error del campo
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof DemoFormData, string>> = {}

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'El email no es válido'
    }

    if (!formData.fecha) {
      newErrors.fecha = 'Selecciona una fecha'
    }

    if (!formData.hora) {
      newErrors.hora = 'Selecciona una hora'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (validateForm()) {
      // Aquí puedes enviar los datos a tu API
      console.log('Datos del demo:', formData)
      setIsSubmitted(true)
      
      // Resetear formulario después de 3 segundos
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          nombre: '',
          email: '',
          fecha: null,
          hora: ''
        })
      }, 3000)
    }
  }

  const tileDisabled = ({ date }: { date: Date }) => {
    // Deshabilitar fines de semana y fechas pasadas
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    
    return (
      date < today ||
      date.getDay() === 0 || // Domingo
      date.getDay() === 6    // Sábado
    )
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center">
          <CardContent className="pt-6">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">¡Demo Solicitado!</h2>
            <p className="text-muted mb-4">
              Hemos recibido tu solicitud de demo. Te contactaremos pronto para confirmar los detalles.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="w-full"
            >
              Solicitar Otro Demo
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Solicita tu Demo
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Descubre cómo nuestra plataforma puede transformar tu negocio. 
            Agenda una demostración personalizada con nuestro equipo de expertos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Calendario */}
          <Card className="bg-primary-800/50 border-border/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <CalendarIcon className="w-5 h-5 text-accent" />
                Selecciona una Fecha
              </CardTitle>
              <CardDescription>
                Elige el día que mejor te convenga para tu demo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                <Calendar
                  onChange={(value: Value) => {
                    if (value instanceof Date) {
                      handleInputChange('fecha', value)
                    }
                  }}
                  value={formData.fecha}
                  tileDisabled={tileDisabled}
                  minDate={new Date()}
                  maxDate={new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)} // 30 días
                  className="demo-calendar"
                />
              </div>
              {errors.fecha && (
                <p className="text-red-400 text-sm mt-2">{errors.fecha}</p>
              )}
            </CardContent>
          </Card>

          {/* Formulario */}
          <Card className="bg-primary-800/50 border-border/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Información de Contacto</CardTitle>
              <CardDescription>
                Completa tus datos para programar la demo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nombre */}
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-white mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Nombre Completo
                  </label>
                  <Input
                    id="nombre"
                    type="text"
                    placeholder="Tu nombre completo"
                    value={formData.nombre}
                    onChange={(e) => handleInputChange('nombre', e.target.value)}
                    error={!!errors.nombre}
                  />
                  {errors.nombre && (
                    <p className="text-red-400 text-sm mt-1">{errors.nombre}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Correo Electrónico
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    error={!!errors.email}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Hora */}
                <div>
                  <label htmlFor="hora" className="block text-sm font-medium text-white mb-2">
                    <Clock className="w-4 h-4 inline mr-2" />
                    Hora Preferida
                  </label>
                  <select
                    id="hora"
                    value={formData.hora}
                    onChange={(e) => handleInputChange('hora', e.target.value)}
                    className="w-full px-4 py-3 bg-primary-800 border border-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Selecciona una hora</option>
                    {horasDisponibles.map((hora) => (
                      <option key={hora} value={hora}>
                        {hora}
                      </option>
                    ))}
                  </select>
                  {errors.hora && (
                    <p className="text-red-400 text-sm mt-1">{errors.hora}</p>
                  )}
                </div>

                {/* Fecha seleccionada */}
                {formData.fecha && (
                  <div className="p-4 bg-accent/10 border border-accent/20 rounded-lg">
                    <p className="text-sm text-muted mb-1">Fecha seleccionada:</p>
                    <p className="text-white font-medium">
                      {format(formData.fecha, 'EEEE, d \'de\' MMMM \'de\' yyyy', { locale: es })}
                    </p>
                  </div>
                )}

                {/* Botón de envío */}
                <Button 
                  type="submit" 
                  className="w-full h-14 text-lg font-semibold"
                  variant="premium"
                >
                  Solicitar Demo
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

                 {/* Información adicional */}
         <div className="mt-16 text-center">
           <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
             <div className="text-center">
               <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                 <Clock className="w-8 h-8 text-accent" />
               </div>
               <h3 className="text-xl font-semibold text-white mb-2">Demo Personalizada</h3>
               <p className="text-muted">
                 Adaptamos la demostración a tus necesidades específicas
               </p>
             </div>
             <div className="text-center">
               <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                 <User className="w-8 h-8 text-accent" />
               </div>
               <h3 className="text-xl font-semibold text-white mb-2">Experto Dedicado</h3>
               <p className="text-muted">
                 Un especialista te guiará durante toda la sesión
               </p>
             </div>
             <div className="text-center">
               <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                 <CheckCircle className="w-8 h-8 text-accent" />
               </div>
               <h3 className="text-xl font-semibold text-white mb-2">Sin Compromiso</h3>
               <p className="text-muted">
                 La demo es completamente gratuita y sin obligaciones
               </p>
             </div>
           </div>
         </div>

         {/* Dashboard Carousel */}
         <div className="mt-20">
           <DashboardCarousel 
             cards={dashboardCards}
             title="Dashboards que Verás en tu Demo"
             description="Durante la demostración exploraremos estos dashboards especializados en comercio exterior"
           />
         </div>
      </div>


    </div>
  )
}
