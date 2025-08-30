import { NextSeoProps } from 'next-seo'

export const defaultSEO: NextSeoProps = {
  titleTemplate: '%s | Analytics Quiet Storm',
  defaultTitle: 'Analytics Quiet Storm - Transformamos datos en decisiones estratégicas',
  description: 'Somos expertos en análisis de datos y consultoría estratégica. Ayudamos a empresas a tomar decisiones basadas en datos para impulsar el crecimiento y la innovación.',
  canonical: 'https://analyticsquietstorm.com',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://analyticsquietstorm.com',
    siteName: 'Analytics Quiet Storm',
    images: [
      {
        url: 'https://analyticsquietstorm.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Analytics Quiet Storm',
      },
    ],
  },
  twitter: {
    handle: '@analyticsquietstorm',
    site: '@analyticsquietstorm',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#3b82f6',
    },
  ],
}

// Schema.org Organization
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Analytics Quiet Storm',
  url: 'https://analyticsquietstorm.com',
  logo: 'https://analyticsquietstorm.com/logo.png',
  description: 'Expertos en análisis de datos y consultoría estratégica',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'ES',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+34-XXX-XXX-XXX',
    contactType: 'customer service',
    email: 'info@analyticsquietstorm.com',
  },
  sameAs: [
    'https://linkedin.com/company/analyticsquietstorm',
    'https://twitter.com/analyticsquietstorm',
  ],
}

// Schema.org SoftwareApplication
export const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Analytics Quiet Storm Platform',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '99',
    priceCurrency: 'EUR',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: '99',
      priceCurrency: 'EUR',
      billingIncrement: 'P1M',
    },
  },
  description: 'Plataforma de análisis de datos y business intelligence',
}

// Schema.org WebSite
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Analytics Quiet Storm',
  url: 'https://analyticsquietstorm.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://analyticsquietstorm.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

// Función para generar metadatos dinámicos
export const generateMetadata = (
  title: string,
  description: string,
  path: string = '',
  image?: string
): NextSeoProps => ({
  ...defaultSEO,
  title,
  description,
  canonical: `https://analyticsquietstorm.com${path}`,
  openGraph: {
    ...defaultSEO.openGraph,
    title,
    description,
    url: `https://analyticsquietstorm.com${path}`,
    images: image ? [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: title,
      },
    ] : defaultSEO.openGraph?.images,
  },
  twitter: {
    ...defaultSEO.twitter,
    title,
    description,
  },
})
