import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Analytics Quiet Storm - Transformamos datos en decisiones estratégicas',
  description: 'Somos expertos en análisis de datos y consultoría estratégica. Ayudamos a empresas a tomar decisiones basadas en datos para impulsar el crecimiento y la innovación.',
  keywords: ['analytics', 'análisis de datos', 'consultoría estratégica', 'machine learning', 'inteligencia empresarial', 'Analytics Quiet Storm'],
  authors: [{ name: 'Analytics Quiet Storm Team' }],
  openGraph: {
    title: 'Analytics Quiet Storm - Transformamos datos en decisiones estratégicas',
    description: 'Somos expertos en análisis de datos y consultoría estratégica. Ayudamos a empresas a tomar decisiones basadas en datos para impulsar el crecimiento y la innovación.',
    type: 'website',
    locale: 'es_ES',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
