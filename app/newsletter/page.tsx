import React from 'react';
import { FooterMinimal } from '@/components/layout/footer-minimal';
import { ArrowRight, Mail, TrendingUp, BarChart3, Globe, Users } from 'lucide-react';

export default function Newsletter() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-primary-800/10 to-primary-900/20" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-primary-600/20 text-primary-400 px-4 py-2 rounded-full mb-6">
              <Mail className="w-5 h-5" />
              <span className="text-sm font-medium">Newsletter Semanal</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Mantente al día con el
              <span className="text-primary-400 block">comercio exterior</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Recibe análisis semanales, tendencias del mercado, casos de éxito y insights exclusivos 
              para tomar decisiones informadas en tu negocio de comercio exterior.
            </p>

            {/* Newsletter Form */}
            <div className="max-w-2xl mx-auto">
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent backdrop-blur-sm"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-500/25 flex items-center justify-center space-x-2"
                >
                  <span>Suscribirse</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
              <p className="text-sm text-gray-400 mt-3">
                🔒 Tu información está segura. No compartimos tu email con terceros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Qué recibirás cada semana?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Contenido valioso y accionable para impulsar tu estrategia de comercio exterior
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-primary-600/20 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Análisis de Tendencias</h3>
              <p className="text-gray-300">
                Resúmenes semanales de las tendencias más importantes en comercio exterior, 
                con datos actualizados y análisis expertos.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-primary-600/20 rounded-2xl flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Métricas Clave</h3>
              <p className="text-gray-300">
                Indicadores de rendimiento, estadísticas del mercado y métricas que 
                te ayudarán a medir el éxito de tu estrategia.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-primary-600/20 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Oportunidades Globales</h3>
              <p className="text-gray-300">
                Identificación de nuevos mercados, productos emergentes y 
                oportunidades de negocio en diferentes regiones del mundo.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-primary-600/20 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Casos de Éxito</h3>
              <p className="text-gray-300">
                Historias reales de empresas que han tenido éxito en comercio exterior, 
                con lecciones aprendidas y estrategias replicables.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-primary-600/20 rounded-2xl flex items-center justify-center mb-6">
                <Mail className="w-8 h-8 text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Contenido Exclusivo</h3>
              <p className="text-gray-300">
                Acceso anticipado a reportes, whitepapers y contenido premium 
                que no está disponible públicamente.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-primary-600/20 rounded-2xl flex items-center justify-center mb-6">
                <ArrowRight className="w-8 h-8 text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Acciones Inmediatas</h3>
              <p className="text-gray-300">
                Recomendaciones prácticas y pasos concretos que puedes implementar 
                de inmediato en tu estrategia de comercio exterior.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Listo para transformar tu comercio exterior?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Únete a más de 2,000 profesionales que ya reciben insights semanales 
              para tomar mejores decisiones en sus negocios.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/solicitar-demo"
                className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-500/25 flex items-center space-x-2"
              >
                <span>Solicita una demo</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/precios"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-300 border border-white/20"
              >
                Ver planes
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterMinimal />
    </div>
  );
}
