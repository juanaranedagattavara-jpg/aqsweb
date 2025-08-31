import { Header } from '@/components/layout/header'
import { Hero } from '@/components/marketing/hero'
import { Features } from '@/components/marketing/features'
import { Stats } from '@/components/marketing/stats'
import { Footer } from '@/components/layout/footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-primary">
      <Header />
      <main>
        <Hero />
        <Features />
        <Stats />
      </main>
      <Footer />
    </div>
  )
}
