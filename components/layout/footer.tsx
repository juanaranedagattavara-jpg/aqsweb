'use client'

import { Play, Star, Mail, Phone, MapPin, Twitter, Linkedin, Facebook, Instagram, ArrowRight } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary-900/50 border-t border-border">
      {/* Top Section */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
            <div className="flex items-center space-x-8">
              <button 
                className="flex items-center space-x-2 text-white hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary-900 rounded-lg px-2 py-1"
                aria-label="Ver demostración del producto"
              >
                <Play className="w-5 h-5" />
                <span>Ver demo</span>
              </button>
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1" role="img" aria-label="5 estrellas de calificación">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-warning fill-current" />
                  ))}
                </div>
                <span className="text-muted text-sm">1,000+ reseñas</span>
              </div>
              <a 
                href="#platform" 
                className="inline-flex items-center space-x-2 text-white hover:text-accent transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary-900 rounded-lg px-2 py-1"
                aria-label="Explorar plataforma de analytics"
              >
                <span>Explora Nuestra Plataforma de Analytics Avanzado</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <a 
              href="#samples" 
              className="inline-flex items-center space-x-2 text-white hover:text-accent transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary-900 rounded-lg px-2 py-1"
              aria-label="Obtener muestras de datos"
            >
              <span>Obtener Muestras de Datos de Comercio Global</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Main Footer Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Q</span>
                </div>
                <span className="text-white font-display text-xl font-semibold">Analytics Quiet Storm</span>
              </div>
              <p className="text-muted mb-6 max-w-md">
                Somos expertos en análisis de datos y consultoría estratégica. Ayudamos a empresas a tomar decisiones basadas en datos para impulsar el crecimiento y la innovación.
              </p>
              <div className="space-y-3">
                <a 
                  href="mailto:contacto@analyticsquietstorm.com"
                  className="flex items-center space-x-3 text-muted hover:text-accent transition-colors"
                  aria-label="Enviar email a contacto@analyticsquietstorm.com"
                >
                  <Mail className="w-4 h-4" />
                  <span>contacto@analyticsquietstorm.com</span>
                </a>
                <a 
                  href="tel:+15551234567"
                  className="flex items-center space-x-3 text-muted hover:text-accent transition-colors"
                  aria-label="Llamar al +1 (555) 123-4567"
                >
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </a>
                <div className="flex items-center space-x-3 text-muted">
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="text-white font-semibold mb-6">Producto</h3>
              <ul className="space-y-3">
                {[
                  { href: '#features', label: 'Características' },
                  { href: '#solutions', label: 'Soluciones' },
                  { href: '#pricing', label: 'Precios' },
                  { href: '#api', label: 'API' },
                  { href: '#docs', label: 'Documentación' }
                ].map((link) => (
                  <li key={link.href}>
                    <a 
                      href={link.href} 
                      className="text-muted hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary-900 rounded px-1 py-0.5"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-white font-semibold mb-6">Empresa</h3>
              <ul className="space-y-3">
                {[
                  { href: '#about', label: 'Acerca de' },
                  { href: '#blog', label: 'Blog' },
                  { href: '#careers', label: 'Carreras' },
                  { href: '#press', label: 'Prensa' },
                  { href: '#contact', label: 'Contacto' }
                ].map((link) => (
                  <li key={link.href}>
                    <a 
                      href={link.href} 
                      className="text-muted hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary-900 rounded px-1 py-0.5"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="text-white font-semibold mb-6">Recursos</h3>
              <ul className="space-y-3">
                {[
                  { href: '#help', label: 'Centro de Ayuda' },
                  { href: '#community', label: 'Comunidad' },
                  { href: '#webinars', label: 'Webinars' },
                  { href: '#events', label: 'Eventos' },
                  { href: '#support', label: 'Soporte' }
                ].map((link) => (
                  <li key={link.href}>
                    <a 
                      href={link.href} 
                      className="text-muted hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary-900 rounded px-1 py-0.5"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-white font-semibold mb-6">Legal</h3>
              <ul className="space-y-3">
                {[
                  { href: '#privacy', label: 'Privacidad' },
                  { href: '#terms', label: 'Términos' },
                  { href: '#cookies', label: 'Cookies' },
                  { href: '#licenses', label: 'Licencias' },
                  { href: '#security', label: 'Seguridad' }
                ].map((link) => (
                  <li key={link.href}>
                    <a 
                      href={link.href} 
                      className="text-muted hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary-900 rounded px-1 py-0.5"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="max-w-2xl">
              <h3 className="text-white font-semibold mb-4">Mantente actualizado</h3>
              <p className="text-muted mb-6">Recibe las últimas noticias sobre analytics y actualizaciones de la plataforma.</p>
              <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="flex-1 px-4 py-3 bg-primary-800 border border-border rounded-2xl text-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  aria-label="Correo electrónico para suscripción"
                  required
                />
                <button 
                  type="submit"
                  className="bg-gradient-to-r from-accent to-accent-2 text-white font-bold px-6 py-3 rounded-2xl hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary-900"
                >
                  Suscribirse
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="py-8 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <span className="text-muted text-sm">© 2024 Analytics Quiet Storm. Todos los derechos reservados.</span>
            </div>
            <div className="flex items-center space-x-4">
              {[
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Instagram, href: '#', label: 'Instagram' }
              ].map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center text-muted hover:text-accent hover:bg-accent/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary-900" 
                  aria-label={`Síguenos en ${social.label}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}
