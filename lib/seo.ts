import { Metadata } from 'next'

export const defaultMetadata: Metadata = {
  title: {
    default: 'AQS Web - Soluciones Digitales',
    template: '%s | AQS Web'
  },
  description: 'Somos una empresa especializada en desarrollo web, consultoría digital y soluciones tecnológicas innovadoras.',
  keywords: ['desarrollo web', 'consultoría digital', 'tecnología', 'innovación', 'soluciones digitales'],
  authors: [{ name: 'AQS Web' }],
  creator: 'AQS Web',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://aqsweb.com',
    title: 'AQS Web - Soluciones Digitales',
    description: 'Transformamos ideas en soluciones digitales excepcionales',
    siteName: 'AQS Web',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AQS Web - Soluciones Digitales',
    description: 'Transformamos ideas en soluciones digitales excepcionales',
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
