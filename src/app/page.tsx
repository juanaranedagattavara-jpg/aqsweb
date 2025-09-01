import Link from 'next/link';
import { ArrowRight, BarChart3, Shield, Zap, Users } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="border-b border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">QSP Analytics</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-slate-300 hover:text-white transition-colors">
                Iniciar Sesión
              </Link>
              <Link href="/login" className="btn-primary">
                Comenzar Gratis
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Analytics de Comercio Exterior
            <br />
            <span className="text-indigo-400">que Transforman Datos</span>
            <br />
            en Decisiones
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Accede a 16 dashboards especializados que te darán una visión completa del mercado 
            internacional. Desde análisis básicos hasta insights de IA avanzados.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/login" className="btn-primary text-lg px-8 py-4 flex items-center space-x-2">
              <span>Probar Gratis por 14 Días</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="#features" className="btn-outline text-lg px-8 py-4">
              Ver Características
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Todo lo que Necesitas para el Comercio Exterior
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Dashboards especializados diseñados por expertos en comercio internacional
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">16 Dashboards Especializados</h3>
              <p className="text-slate-300">
                Desde métricas básicas hasta análisis avanzados con IA, cubrimos todos los aspectos del comercio exterior.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Datos Confiables</h3>
              <p className="text-slate-300">
                Fuentes oficiales y verificación en tiempo real para garantizar la precisión de tus decisiones.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Tiempo Real</h3>
              <p className="text-slate-300">
                Actualizaciones automáticas y alertas instantáneas para mantenerte al día con el mercado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Planes que se Adaptan a tus Necesidades
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Comienza con el plan básico y escala según crezcan tus necesidades
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Básico</h3>
              <div className="text-3xl font-bold text-white mb-4">$29<span className="text-lg text-slate-400">/mes</span></div>
              <p className="text-slate-300 mb-4">4 dashboards esenciales</p>
              <Link href="/login" className="btn-outline w-full">Comenzar</Link>
            </div>
            
            <div className="bg-slate-800 border-2 border-indigo-500 rounded-xl p-6 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-indigo-500 text-white text-xs px-3 py-1 rounded-full">Más Popular</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Pro</h3>
              <div className="text-3xl font-bold text-white mb-4">$79<span className="text-lg text-slate-400">/mes</span></div>
              <p className="text-slate-300 mb-4">8 dashboards avanzados</p>
              <Link href="/login" className="btn-primary w-full">Comenzar</Link>
            </div>
            
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Premium</h3>
              <div className="text-3xl font-bold text-white mb-4">$199<span className="text-lg text-slate-400">/mes</span></div>
              <p className="text-slate-300 mb-4">16 dashboards completos</p>
              <Link href="/login" className="btn-outline w-full">Comenzar</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para Transformar tu Comercio Exterior?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Únete a cientos de empresas que ya confían en QSP Analytics para tomar decisiones informadas.
          </p>
          <Link href="/login" className="btn-primary text-lg px-8 py-4 flex items-center space-x-2 mx-auto w-fit">
            <span>Comienza tu Prueba Gratuita</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">QSP Analytics</span>
          </div>
          <p className="text-slate-400">
            © 2024 QSP Analytics. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
