import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AQS Web - Soluciones Digitales',
  description: 'Somos una empresa especializada en desarrollo web, consultoría digital y soluciones tecnológicas innovadoras.',
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          Bienvenido a AQS Web
        </h1>
        <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
          Transformamos ideas en soluciones digitales excepcionales. 
          Desarrollo web, consultoría y estrategias que impulsan tu negocio.
        </p>
      </section>
    </main>
  )
}
