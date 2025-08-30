import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidad - AQS Web',
  description: 'Política de privacidad y protección de datos de AQS Web.',
}

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          Política de Privacidad
        </h1>
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p className="text-gray-600">
            Esta política de privacidad describe cómo AQS Web recopila, utiliza y protege tu información personal.
          </p>
        </div>
      </section>
    </main>
  )
}
