import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Planes y Precios - AQS Web',
  description: 'Elige el plan que mejor se adapte a las necesidades de tu empresa.',
}

export default function PlanesPage() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          Planes y Precios
        </h1>
        <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
          Soluciones flexibles y escalables para empresas de todos los tamaños.
        </p>
      </section>
    </main>
  )
}
