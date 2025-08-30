import { ContactForm } from '@/components/forms/contact-form'
import { ContactInfo } from '@/components/contact/contact-info'

export const metadata = {
  title: 'Contacto | Analytics Quiet Storm',
  description: 'Hablemos sobre tu proyecto. Nuestro equipo de expertos está listo para ayudarte a transformar tus datos en decisiones estratégicas.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contacto
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hablemos sobre tu proyecto. Nuestro equipo de expertos está listo para 
            ayudarte a transformar tus datos en decisiones estratégicas.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </div>
  )
}
