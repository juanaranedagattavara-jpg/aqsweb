import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Cookies - AQS Web',
  description: 'Política de cookies y tecnologías de seguimiento de AQS Web.',
}

export default function CookiesPage() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          Política de Cookies
        </h1>
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p className="text-gray-600">
            Esta política explica cómo AQS Web utiliza cookies y tecnologías similares para mejorar tu experiencia.
          </p>
        </div>
      </section>
    </main>
  )
}
