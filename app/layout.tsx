import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@/components/analytics'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Analytics Quiet Storm - Transformamos datos en decisiones estratégicas',
  description: 'Somos expertos en análisis de datos y consultoría estratégica. Ayudamos a empresas a tomar decisiones basadas en datos para impulsar el crecimiento y la innovación.',
  keywords: ['analytics', 'consultoría', 'datos', 'estrategia', 'business intelligence'],
  authors: [{ name: 'Analytics Quiet Storm' }],
  creator: 'Analytics Quiet Storm',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://analyticsquietstorm.com',
    title: 'Analytics Quiet Storm',
    description: 'Transformamos datos en decisiones estratégicas',
    siteName: 'Analytics Quiet Storm',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Analytics Quiet Storm',
    description: 'Transformamos datos en decisiones estratégicas',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        <a href="#main-content" className="skip-link">
          Saltar al contenido principal
        </a>
        
        <Header />
        
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        
        <Footer />
        
        <Analytics />
      </body>
    </html>
  )
}
