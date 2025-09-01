import React from 'react';
import { FooterMinimal } from '@/components/layout/footer-minimal';
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark, TrendingUp, BarChart3, Globe, Users } from 'lucide-react';
import Link from 'next/link';

// Datos de los artículos (en un proyecto real esto vendría de una base de datos o CMS)
const articles = {
  'tendencias-2024': {
    title: 'El Futuro del Comercio Exterior: Tendencias 2024',
    category: 'Tendencias',
    excerpt: 'Analizamos las principales tendencias que están transformando el comercio exterior global, desde la digitalización hasta los nuevos acuerdos comerciales y la sostenibilidad como factor clave.',
    content: `
      <p class="mb-6 text-gray-300 leading-relaxed">
        El comercio exterior está experimentando una transformación sin precedentes en 2024. 
        Las empresas que logren adaptarse a estas nuevas tendencias tendrán una ventaja 
        competitiva significativa en los mercados globales.
      </p>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">1. Digitalización y Automatización</h2>
      <p class="mb-6 text-gray-300 leading-relaxed">
        La pandemia aceleró la adopción de tecnologías digitales en el comercio exterior. 
        Las empresas están implementando sistemas de gestión automatizados, blockchain para 
        la trazabilidad, e inteligencia artificial para la predicción de tendencias de mercado.
      </p>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">2. Sostenibilidad como Prioridad</h2>
      <p class="mb-6 text-gray-300 leading-relaxed">
        Los consumidores y reguladores están exigiendo mayor transparencia en la cadena de 
        suministro. Las empresas que demuestren compromiso con prácticas sostenibles 
        tendrán acceso preferencial a mercados premium.
      </p>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">3. Nuevos Acuerdos Comerciales</h2>
      <p class="mb-6 text-gray-300 leading-relaxed">
        La proliferación de acuerdos comerciales bilaterales y multilaterales está 
        creando nuevas oportunidades de mercado. Las empresas deben mantenerse informadas 
        sobre estos desarrollos para aprovechar las ventajas arancelarias.
      </p>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">4. Comercio Electrónico B2B</h2>
      <p class="mb-6 text-gray-300 leading-relaxed">
        El comercio electrónico B2B está creciendo exponencialmente, facilitando las 
        transacciones internacionales y reduciendo los costos operativos para las empresas.
      </p>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Conclusión</h2>
      <p class="mb-6 text-gray-300 leading-relaxed">
        Las empresas que inviertan en digitalización, adopten prácticas sostenibles y 
        se mantengan informadas sobre los nuevos acuerdos comerciales estarán mejor 
        posicionadas para el éxito en el comercio exterior global.
      </p>
    `,
    date: '15 de Enero, 2024',
    readTime: '8 min',
    author: 'QSP Analytics',
    authorRole: 'Equipo de Análisis',
    image: '/img/blog-tendencias-2024.jpg'
  },
  'mercados-emergentes-asia': {
    title: 'Análisis de Mercados Emergentes en Asia',
    category: 'Análisis de Mercado',
    excerpt: 'Exploramos las oportunidades en mercados asiáticos y estrategias de entrada para empresas latinoamericanas.',
    content: `
      <p class="mb-6 text-gray-300 leading-relaxed">
        Asia representa una de las regiones de mayor crecimiento económico en el mundo, 
        ofreciendo oportunidades únicas para empresas latinoamericanas que buscan expandir 
        sus operaciones internacionales.
      </p>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Mercados Clave</h2>
      <p class="mb-6 text-gray-300 leading-relaxed">
        China, India, Vietnam, Indonesia y Filipinas están emergiendo como destinos 
        atractivos para inversiones y exportaciones. Cada mercado presenta características 
        únicas que requieren estrategias de entrada personalizadas.
      </p>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Estrategias de Entrada</h2>
      <p class="mb-6 text-gray-300 leading-relaxed">
        Las empresas latinoamericanas deben considerar alianzas estratégicas con 
        empresas locales, inversión en investigación de mercado, y adaptación de 
        productos a las preferencias culturales locales.
      </p>
    `,
    date: '12 de Enero, 2024',
    readTime: '6 min',
    author: 'María González',
    authorRole: 'Analista de Mercados Emergentes',
    image: '/img/blog-asia-mercados.jpg'
  },
  'digitalizacion-comercio-exterior': {
    title: 'Digitalización del Comercio Exterior',
    category: 'Tendencias',
    excerpt: 'Cómo la tecnología está transformando los procesos de importación y exportación en América Latina.',
    content: `
      <p class="mb-6 text-gray-300 leading-relaxed">
        La digitalización está revolucionando el comercio exterior en América Latina, 
        eliminando barreras tradicionales y creando nuevas oportunidades de crecimiento 
        para las empresas de la región.
      </p>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Tecnologías Clave</h2>
      <p class="mb-6 text-gray-300 leading-relaxed">
        Blockchain, inteligencia artificial, internet de las cosas y big data están 
        transformando la forma en que se realizan las transacciones comerciales 
        internacionales.
      </p>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Beneficios de la Digitalización</h2>
      <p class="mb-6 text-gray-300 leading-relaxed">
        Reducción de costos operativos, mayor transparencia en la cadena de suministro, 
        y acceso a nuevos mercados son solo algunos de los beneficios que ofrece la 
        digitalización del comercio exterior.
      </p>
    `,
    date: '10 de Enero, 2024',
    readTime: '7 min',
    author: 'Carlos Rodríguez',
    authorRole: 'Especialista en Tecnología',
    image: '/img/blog-digitalizacion.jpg'
  }
};

export default function BlogArticle({ params }: { params: { slug: string } }) {
  const article = articles[params.slug as keyof typeof articles];
  
  if (!article) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Artículo no encontrado</h1>
          <Link href="/blog" className="text-primary-400 hover:text-primary-300">
            Volver al blog
          </Link>
        </div>
      </div>
    );
  }

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
              <span className="text-sm font-medium">{article.category}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {article.title}
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              {article.excerpt}
            </p>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 mb-8">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime} lectura</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
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
            <div 
              className="text-gray-300 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
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
                <h3 className="text-xl font-semibold text-white">{article.author}</h3>
                <p className="text-gray-400">{article.authorRole}</p>
                <p className="text-gray-300 mt-2">
                  Especialista en análisis de comercio exterior con amplia experiencia 
                  en mercados internacionales y estrategias comerciales.
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
            {Object.entries(articles)
              .filter(([slug]) => slug !== params.slug)
              .slice(0, 3)
              .map(([slug, article]) => (
                <article
                  key={slug}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="inline-flex items-center space-x-2 bg-primary-600/20 text-primary-400 px-3 py-1 rounded-full text-xs mb-4">
                    <span>{article.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${slug}`}
                    className="text-primary-400 hover:text-primary-300 transition-colors group-hover:translate-x-1 transform duration-200 inline-flex items-center space-x-2"
                  >
                    <span>Leer más</span>
                    <ArrowLeft className="w-4 h-4 rotate-180" />
                  </Link>
                </article>
              ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterMinimal />
    </div>
  );
}
