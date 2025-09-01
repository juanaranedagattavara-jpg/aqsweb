'use client'

import { Building2, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'
import Link from 'next/link'

const footerLinks = {
  producto: [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Precios', href: '/precios' },
    { name: 'Características', href: '#' },
    { name: 'API', href: '#' }
  ],
  recursos: [
    { name: 'Blog', href: '/blog' },
    { name: 'Newsletter', href: '/newsletter' },
    { name: 'Documentación', href: '#' },
    { name: 'Casos de Éxito', href: '#' }
  ],
  empresa: [
    { name: 'Acerca de', href: '#' },
    { name: 'Contacto', href: '#' },
    { name: 'Carreras', href: '#' },
    { name: 'Prensa', href: '#' }
  ],
  soporte: [
    { name: 'Centro de Ayuda', href: '#' },
    { name: 'Soporte Técnico', href: '#' },
    { name: 'Comunidad', href: '#' },
    { name: 'Estado del Sistema', href: '#' }
  ]
}

const socialLinks = [
  { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: '#' },
  { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: '#' },
  { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, href: '#' }
]

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Building2 className="w-8 h-8 text-primary-400" />
              <span className="text-2xl font-bold text-white">QSP Analytics</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transformamos datos de comercio exterior en inteligencia clara, confiable y accionable 
              para que dirijas tu empresa con visión y confianza.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>contacto@qspanalytics.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+54 11 1234-5678</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Producto</h3>
            <ul className="space-y-2">
              {footerLinks.producto.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              {footerLinks.recursos.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Soporte</h3>
            <ul className="space-y-2">
              {footerLinks.soporte.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 QSP Analytics. Todos los derechos reservados.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
