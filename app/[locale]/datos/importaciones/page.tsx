import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datos de Importaciones - QSP Analytics',
  description: 'Datos completos de importaciones de más de 200 países.',
}

export default function ImportacionesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A2540] mb-8">
            Datos de{' '}
            <span className="bg-gradient-to-r from-[#2F81F7] to-[#E65C3D] bg-clip-text text-transparent">
              Importaciones
            </span>
          </h1>
          <p className="text-xl text-[#374151] max-w-3xl mx-auto leading-relaxed">
            Acceso completo a estadísticas de importaciones de más de 200 países
          </p>
        </div>
        
        <div className="text-center">
          <p className="text-lg text-[#374151]">
            Esta página está en desarrollo. Pronto tendrás acceso a nuestros datos de importaciones.
          </p>
        </div>
      </div>
    </div>
  )
}
