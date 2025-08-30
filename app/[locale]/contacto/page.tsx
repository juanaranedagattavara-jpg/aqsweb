import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto - AQS Web',
  description: 'Ponte en contacto con nuestro equipo para discutir cómo podemos ayudarte con tu proyecto digital.',
}

export default function ContactoPage() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          Contacto
        </h1>
        <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
          ¿Tienes un proyecto en mente? Hablemos sobre cómo podemos ayudarte a alcanzar tus objetivos.
        </p>
      </section>
    </main>
  )
}
