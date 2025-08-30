'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  Twitter, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUp 
} from 'lucide-react'

const footerNavigation = {
  producto: [
    { name: 'Características', href: '/producto' },
    { name: 'Integraciones', href: '/producto#integraciones' },
    { name: 'API', href: '/producto#api' },
    { name: 'Documentación', href: '/docs' },
  ],
  empresa: [
    { name: 'Sobre nosotros', href: '/empresa' },
    { name: 'Equipo', href: '/empresa#equipo' },
    { name: 'Carreras', href: '/carreras' },
    { name: 'Prensa', href: '/prensa' },
  ],
  recursos: [
    { name: 'Blog', href: '/recursos' },
    { name: 'Casos de éxito', href: '/casos' },
    { name: 'Webinars', href: '/webinars' },
    { name: 'Whitepapers', href: '/whitepapers' },
  ],
  soporte: [
    { name: 'Centro de ayuda', href: '/ayuda' },
    { name: 'Contacto', href: '/contacto' },
    { name: 'Estado del servicio', href: '/status' },
    { name: 'Comunidad', href: '/comunidad' },
  ],
}

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Company info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">QSP</span>
              </div>
              <span className="text-xl font-bold">Analytics Quiet Storm</span>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Transformamos datos en decisiones estratégicas. Somos expertos en análisis 
              de datos y consultoría estratégica.
            </p>
            <div className="flex space-x-4">
              <Link href="https://twitter.com/analyticsquietstorm" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://linkedin.com/company/analyticsquietstorm" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="mailto:info@analyticsquietstorm.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          {/* Navigation sections */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Producto
            </h3>
            <ul className="space-y-3">
              {footerNavigation.producto.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Empresa
            </h3>
            <ul className="space-y-3">
              {footerNavigation.empresa.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Recursos
            </h3>
            <ul className="space-y-3">
              {footerNavigation.recursos.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Soporte
            </h3>
            <ul className="space-y-3">
              {footerNavigation.soporte.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact info */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-blue-400" />
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-gray-400">info@analyticsquietstorm.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-blue-400" />
              <div>
                <p className="text-sm font-medium">Teléfono</p>
                <p className="text-gray-400">+34 XXX XXX XXX</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-blue-400" />
              <div>
                <p className="text-sm font-medium">Ubicación</p>
                <p className="text-gray-400">España</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Analytics Quiet Storm. Todos los derechos reservados.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link href="/legal/privacidad" className="text-gray-400 hover:text-white transition-colors">
              Privacidad
            </Link>
            <Link href="/legal/terminos" className="text-gray-400 hover:text-white transition-colors">
              Términos
            </Link>
            <Link href="/legal/cookies" className="text-gray-400 hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Volver arriba"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  )
}
