import React from 'react';
import { FooterMinimal } from '@/components/layout/footer-minimal';
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark } from 'lucide-react';
import Link from 'next/link';

export default function SostenibilidadComercio() {
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
              <span className="text-sm font-medium">Tendencias</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Sostenibilidad en el Comercio Global
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Cómo la sostenibilidad se está convirtiendo en un factor clave para el éxito 
              comercial internacional y qué están haciendo las empresas líderes.
            </p>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 mb-8">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>1 de Enero, 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>6 min lectura</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Roberto Silva</span>
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
                La sostenibilidad ya no es solo una tendencia, sino un imperativo empresarial en el 
                comercio global. Los consumidores, reguladores e inversores están exigiendo cada vez 
                más que las empresas demuestren su compromiso con prácticas comerciales responsables.
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4 mt-8">El Nuevo Paradigma Comercial</h2>
              <p className="mb-6">
                Las empresas que integran la sostenibilidad en su estrategia comercial no solo 
                cumplen con las expectativas del mercado, sino que también descubren nuevas 
                oportunidades de negocio y ventajas competitivas significativas.
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4 mt-8">Dimensiones de la Sostenibilidad</h2>
              <p className="mb-6">
                La sostenibilidad en el comercio abarca tres dimensiones principales: ambiental 
                (reducción de emisiones, gestión de residuos), social (condiciones laborales, 
                impacto en comunidades) y económica (transparencia, gobernanza corporativa).
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4 mt-8">Estrategias de Implementación</h2>
              <p className="mb-6">
                Las empresas líderes están implementando estrategias como la trazabilidad de la 
                cadena de suministro, certificaciones de sostenibilidad, reportes de impacto 
                ambiental y social, y alianzas con proveedores que comparten sus valores.
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4 mt-8">Beneficios Tangibles</h2>
              <p className="mb-6">
                Los beneficios incluyen acceso a nuevos mercados, preferencia del consumidor, 
                reducción de costos operativos, mejor reputación corporativa y acceso a 
                financiamiento preferencial para proyectos sostenibles.
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4 mt-8">El Futuro del Comercio Sostenible</h2>
              <p className="mb-6">
                El futuro del comercio global será cada vez más sostenible, con regulaciones 
                más estrictas, mayor transparencia en la cadena de suministro, y tecnologías 
                que faciliten el seguimiento del impacto ambiental y social de las operaciones comerciales.
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
                <h3 className="text-xl font-semibold text-white">Roberto Silva</h3>
                <p className="text-gray-400">Especialista en Sostenibilidad Corporativa</p>
                <p className="text-gray-300 mt-2">
                  Experto en implementación de estrategias de sostenibilidad en empresas 
                  de comercio exterior, con más de 12 años de experiencia en el sector.
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
            
            <Link href="/blog/acuerdos-comerciales">
              <article className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                <div className="inline-flex items-center space-x-2 bg-primary-600/20 text-primary-400 px-3 py-1 rounded-full text-xs mb-4">
                  <span>Análisis</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors">
                  Impacto de los Acuerdos Comerciales
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  Análisis del impacto de los nuevos acuerdos comerciales en la región latinoamericana.
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
