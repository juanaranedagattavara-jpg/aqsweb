import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solicitar Demo - QSP Premium',
  description: 'Agenda una demostración personalizada de nuestra plataforma QSP Premium. Descubre cómo podemos transformar tu negocio.',
  keywords: 'demo, demostración, QSP, plataforma, agenda, cita',
}

export default function SolicitarDemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  )
}
