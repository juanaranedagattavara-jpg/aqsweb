import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Empresa - AQS Web',
  description: 'Conoce más sobre AQS Web, nuestra misión, visión y el equipo que hace posible la innovación.',
}

export default function EmpresaPage() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          Sobre AQS Web
        </h1>
        <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
          Somos una empresa comprometida con la excelencia y la innovación en el mundo digital.
        </p>
      </section>
    </main>
  )
}
