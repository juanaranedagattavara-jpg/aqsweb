import { Metadata } from 'next'

interface RecursoPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: RecursoPageProps): Promise<Metadata> {
  return {
    title: `Recurso: ${params.slug} - AQS Web`,
    description: `Accede al recurso: ${params.slug}`,
  }
}

export default function RecursoPage({ params }: RecursoPageProps) {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          Recurso: {params.slug}
        </h1>
        <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
          Contenido valioso y herramientas para impulsar tu estrategia digital.
        </p>
      </section>
    </main>
  )
}
