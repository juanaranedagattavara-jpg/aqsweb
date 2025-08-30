import { Metadata } from 'next'

interface CasoPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: CasoPageProps): Promise<Metadata> {
  return {
    title: `Caso: ${params.slug} - AQS Web`,
    description: `Descripción detallada del caso de éxito: ${params.slug}`,
  }
}

export default function CasoPage({ params }: CasoPageProps) {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          Caso de Éxito: {params.slug}
        </h1>
        <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
          Descubre los detalles de este proyecto exitoso y cómo hemos ayudado a alcanzar los objetivos.
        </p>
      </section>
    </main>
  )
}
