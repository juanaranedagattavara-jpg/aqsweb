import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Productos - AQS Web',
  description: 'Descubre nuestra gama completa de productos digitales y soluciones tecnológicas.',
}

export default function ProductoPage() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          Nuestros Productos
        </h1>
        <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
          Soluciones digitales diseñadas para optimizar tu negocio y mejorar la experiencia de tus clientes.
        </p>
      </section>
    </main>
  )
}
