import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Casos de Éxito - AQS Web',
  description: 'Descubre cómo hemos ayudado a otras empresas a alcanzar sus objetivos digitales.',
}

export default function CasosPage() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          Casos de Éxito
        </h1>
        <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
          Proyectos exitosos que demuestran nuestro compromiso con la excelencia y la innovación.
        </p>
      </section>
    </main>
  )
}
