import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Recursos - AQS Web',
  description: 'Accede a recursos valiosos, guías y herramientas para impulsar tu negocio digital.',
}

export default function RecursosPage() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          Recursos Digitales
        </h1>
        <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
          Herramientas, guías y contenido educativo para ayudarte a crecer en el mundo digital.
        </p>
      </section>
    </main>
  )
}
