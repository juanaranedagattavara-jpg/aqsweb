import { Mail, Phone, MapPin } from 'lucide-react'

export function FooterMinimal() {
  return (
    <footer className="bg-primary-900/30 border-t border-border/50 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Logo y nombre */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Q</span>
            </div>
            <span className="text-white font-semibold">QSP Analytics</span>
          </div>

          {/* Información de contacto */}
          <div className="flex items-center space-x-6 text-sm text-muted">
            <a 
              href="mailto:contacto@qspanalytics.com"
              className="flex items-center space-x-2 hover:text-accent transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">contacto@qspanalytics.com</span>
            </a>
            <a 
              href="tel:+15551234567"
              className="flex items-center space-x-2 hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">+1 (555) 123-4567</span>
            </a>
            <div className="flex items-center space-x-2 text-muted">
              <MapPin className="w-4 h-4" />
              <span className="hidden sm:inline">San Francisco, CA</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted">
            © 2024 QSP Analytics. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  )
}
