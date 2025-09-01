import React from 'react';
import { FooterMinimal } from '@/components/layout/footer-minimal';
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark } from 'lucide-react';
import Link from 'next/link';

export default function AcuerdosComerciales() {
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

        <div className="relative z-10 container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link 
              href="/blog" 
              className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver al blog</span>
            </Link>
          </div>

          {/* Article Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary-600/20 text-primary-400 px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-medium">Análisis</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Impacto de los Acuerdos Comerciales
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Análisis del impacto de los nuevos acuerdos comerciales en la región latinoamericana 
              y cómo están transformando las oportunidades de negocio.
            </p>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 mb-8">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>5 de Enero, 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>9 min lectura</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Luis Fernández</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300">
                <Share2 className="w-4 h-4" />
                <span>Compartir</span>
              </button>
              <button className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300">
                <Bookmark className="w-4 h-4" />
                <span>Guardar</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 border-t border-gray-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="text-gray-300 leading-relaxed">
              <p className="mb-6">
                Los acuerdos comerciales han sido fundamentales para el desarrollo económico de América Latina 
                en las últimas décadas. Estos tratados no solo facilitan el comercio, sino que también 
                crean nuevas oportunidades de inversión y cooperación entre países.
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4 mt-8">Tipos de Acuerdos Comerciales</h2>
              <p className="mb-6">
                Existen diferentes tipos de acuerdos: bilaterales entre dos países, multilaterales que 
                involucran a varios países, y acuerdos de integración regional como la Alianza del Pacífico 
                o el Mercosur. Cada uno tiene sus propias características y beneficios.
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4 mt-8">Beneficios para las Empresas</h2>
              <p className="mb-6">
                Los acuerdos comerciales ofrecen múltiples ventajas: reducción o eliminación de aranceles, 
                acceso preferencial a mercados, protección de inversiones, y resolución de disputas comerciales. 
                Para las empresas, esto significa mayor competitividad y nuevas oportunidades de mercado.
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4 mt-8">Desafíos y Consideraciones</h2>
              <p className="mb-6">
                A pesar de los beneficios, los acuerdos comerciales también presentan desafíos: la necesidad 
                de cumplir con reglas de origen, adaptarse a estándares técnicos, y competir con empresas 
                locales que ya conocen el mercado.
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4 mt-8">Tendencias Futuras</h2>
              <p className="mb-6">
                El futuro de los acuerdos comerciales apunta hacia una mayor digitalización, inclusión de 
                temas ambientales y laborales, y acuerdos más específicos por sector. Las empresas deben 
                mantenerse informadas sobre estos desarrollos para aprovechar las nuevas oportunidades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-16 border-t border-gray-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-primary-600/30 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-primary-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Luis Fernández</h3>
                <p className="text-gray-400">Analista de Política Comercial</p>
                <p className="text-gray-300 mt-2">
                  Especialista en análisis de acuerdos comerciales y su impacto en las empresas 
                  latinoamericanas, con amplia experiencia en el sector público y privado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 border-t border-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Artículos Relacionados</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/blog/tendencias-2024">
              <article className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                <div className="inline-flex items-center space-x-2 bg-primary-600/20 text-primary-400 px-3 py-1 rounded-full text-xs mb-4">
                  <span>Tendencias</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors">
                  El Futuro del Comercio Exterior: Tendencias 2024
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  Analizamos las principales tendencias que están transformando el comercio exterior global.
                </p>
                <div className="text-primary-400 group-hover:text-primary-300 transition-colors group-hover:translate-x-1 transform duration-200 inline-flex items-center space-x-2">
                  <span>Leer más</span>
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </div>
              </article>
            </Link>
            
            <Link href="/blog/mercados-emergentes-asia">
              <article className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                <div className="inline-flex items-center space-x-2 bg-primary-600/20 text-primary-400 px-3 py-1 rounded-full text-xs mb-4">
                  <span>Análisis de Mercado</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors">
                  Análisis de Mercados Emergentes en Asia
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  Exploramos las oportunidades en mercados asiáticos y estrategias de entrada.
                </p>
                <div className="text-primary-400 group-hover:text-primary-300 transition-colors group-hover:translate-x-1 transform duration-200 inline-flex items-center space-x-2">
                  <span>Leer más</span>
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </div>
              </article>
            </Link>
            
            <Link href="/blog/digitalizacion-comercio-exterior">
              <article className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                <div className="inline-flex items-center space-x-2 bg-primary-600/20 text-primary-400 px-3 py-1 rounded-full text-xs mb-4">
                  <span>Tendencias</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors">
                  Digitalización del Comercio Exterior
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  Cómo la tecnología está transformando los procesos de importación y exportación.
                </p>
                <div className="text-primary-400 group-hover:text-primary-300 transition-colors group-hover:translate-x-1 transform duration-200 inline-flex items-center space-x-2">
                  <span>Leer más</span>
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </div>
              </article>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterMinimal />
    </div>
  );
}
