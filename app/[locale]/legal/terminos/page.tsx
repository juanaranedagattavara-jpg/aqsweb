import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Términos y Condiciones - AQS Web',
  description: 'Términos y condiciones de uso de los servicios de AQS Web.',
}

export default function TerminosPage() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          Términos y Condiciones
        </h1>
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p className="text-gray-600">
            Estos términos y condiciones establecen las reglas y regulaciones para el uso de los servicios de AQS Web.
          </p>
        </div>
      </section>
    </main>
  )
}
