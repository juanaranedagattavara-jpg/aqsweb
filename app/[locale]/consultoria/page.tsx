import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Consultoría - AQS Web',
  description: 'Servicios de consultoría digital especializada para transformar tu negocio.',
}

export default function ConsultoriaPage() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          Consultoría Digital
        </h1>
        <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
          Asesoramiento experto para optimizar tu estrategia digital y maximizar el retorno de inversión.
        </p>
      </section>
    </main>
  )
}
