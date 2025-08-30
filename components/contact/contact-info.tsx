import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare,
  Calendar,
  Users,
  Globe
} from 'lucide-react'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    value: 'info@analyticsquietstorm.com',
    description: 'Responde en 24 horas',
    href: 'mailto:info@analyticsquietstorm.com'
  },
  {
    icon: Phone,
    title: 'Teléfono',
    value: '+34 XXX XXX XXX',
    description: 'Lun-Vie 9:00-18:00',
    href: 'tel:+34XXXXXXXXX'
  },
  {
    icon: MapPin,
    title: 'Oficina',
    value: 'Madrid, España',
    description: 'Visitas con cita previa',
    href: '#'
  }
]

const quickActions = [
  {
    icon: Calendar,
    title: 'Agendar demo',
    description: 'Reserva una demo personalizada',
    href: '/contacto',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: MessageSquare,
    title: 'Chat en vivo',
    description: 'Habla con nuestro equipo',
    href: '#',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Users,
    title: 'Soporte técnico',
    description: 'Ayuda técnica especializada',
    href: '/ayuda',
    color: 'from-purple-500 to-purple-600'
  }
]

const officeHours = [
  { day: 'Lunes - Viernes', hours: '9:00 - 18:00' },
  { day: 'Sábado', hours: '10:00 - 14:00' },
  { day: 'Domingo', hours: 'Cerrado' }
]

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Información de contacto */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Información de contacto
        </h3>
        
        <div className="space-y-6">
          {contactMethods.map((method, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <method.icon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">{method.title}</h4>
                <a 
                  href={method.href}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  {method.value}
                </a>
                <p className="text-sm text-gray-600 mt-1">{method.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Acciones rápidas */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Acciones rápidas
        </h3>
        
        <div className="space-y-4">
          {quickActions.map((action, index) => (
            <a
              key={index}
              href={action.href}
              className="block p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{action.title}</h4>
                  <p className="text-sm text-gray-600">{action.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Horarios de oficina */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Horarios de oficina
        </h3>
        
        <div className="space-y-3">
          {officeHours.map((schedule, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
              <span className="text-gray-700">{schedule.day}</span>
              <span className="font-medium text-gray-900">{schedule.hours}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-800">
              Soporte 24/7 disponible para clientes Premium
            </span>
          </div>
        </div>
      </div>

      {/* Información adicional */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
        <div className="text-center">
          <Globe className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            ¿Trabajas en una zona horaria diferente?
          </h3>
          <p className="text-gray-600 mb-4">
            No te preocupes, nuestro equipo está disponible en múltiples zonas horarias 
            y siempre podemos encontrar un momento que funcione para ambos.
          </p>
          <a
            href="/contacto"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Solicitar horario especial
          </a>
        </div>
      </div>
    </div>
  )
}
