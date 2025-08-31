import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Demo - QSP Analytics',
  description: 'Ver demo en vivo de QSP Analytics para análisis de importaciones y exportaciones.',
}

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A2540] mb-8">
            Demo en{' '}
            <span className="bg-gradient-to-r from-[#2F81F7] to-[#E65C3D] bg-clip-text text-transparent">
              Vivo
            </span>
          </h1>
          <p className="text-xl text-[#374151] max-w-3xl mx-auto leading-relaxed">
            Descubre cómo nuestra plataforma puede transformar tu análisis de datos
          </p>
        </div>
        
        <div className="text-center">
          <p className="text-lg text-[#374151]">
            Esta página está en desarrollo. Pronto tendrás acceso a nuestro demo en vivo.
          </p>
        </div>
      </div>
    </div>
  )
}
