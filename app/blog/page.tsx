'use client';

import { useState } from 'react';
import { Search, Calendar, User, ArrowRight, Filter } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  tags: string[];
}

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    'all',
    'Análisis de Mercado',
    'Tendencias',
    'Comercio Exterior',
    'Logística',
    'Regulaciones',
    'Tecnología',
    'Casos de Estudio'
  ];

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Tendencias del Comercio Exterior en 2024',
      excerpt: 'Análisis profundo de las principales tendencias que están moldeando el comercio internacional este año, incluyendo cambios en las cadenas de suministro y nuevas regulaciones.',
      author: 'María González',
      date: '2024-01-15',
      category: 'Tendencias',
      readTime: '5 min',
      image: '/api/placeholder/400/250',
      tags: ['Tendencias', '2024', 'Comercio Internacional']
    },
    {
      id: '2',
      title: 'Impacto de la IA en el Análisis de Datos de Comercio',
      excerpt: 'Cómo la inteligencia artificial está revolucionando la forma en que analizamos y interpretamos los datos del comercio exterior para tomar mejores decisiones.',
      author: 'Carlos Rodríguez',
      date: '2024-01-12',
      category: 'Tecnología',
      readTime: '7 min',
      image: '/api/placeholder/400/250',
      tags: ['IA', 'Tecnología', 'Análisis de Datos']
    },
    {
      id: '3',
      title: 'Guía Completa de Aranceles y Regulaciones 2024',
      excerpt: 'Actualización completa de los aranceles y regulaciones que afectan el comercio exterior, con ejemplos prácticos y consejos para la compliance.',
      author: 'Ana Martínez',
      date: '2024-01-10',
      category: 'Regulaciones',
      readTime: '8 min',
      image: '/api/placeholder/400/250',
      tags: ['Aranceles', 'Regulaciones', 'Compliance']
    },
    {
      id: '4',
      title: 'Optimización de Cadenas de Suministro Post-Pandemia',
      excerpt: 'Lecciones aprendidas y estrategias para optimizar las cadenas de suministro en el nuevo panorama del comercio internacional.',
      author: 'Luis Fernández',
      date: '2024-01-08',
      category: 'Logística',
      readTime: '6 min',
      image: '/api/placeholder/400/250',
      tags: ['Supply Chain', 'Logística', 'Post-Pandemia']
    },
    {
      id: '5',
      title: 'Análisis del Mercado de Commodities en América Latina',
      excerpt: 'Estudio detallado de los principales commodities exportados por América Latina y su impacto en la economía regional.',
      author: 'Patricia López',
      date: '2024-01-05',
      category: 'Análisis de Mercado',
      readTime: '9 min',
      image: '/api/placeholder/400/250',
      tags: ['Commodities', 'América Latina', 'Exportaciones']
    },
    {
      id: '6',
      title: 'Casos de Éxito: Empresas que Triunfaron en Mercados Internacionales',
      excerpt: 'Historias inspiradoras de empresas latinoamericanas que lograron expandirse exitosamente a mercados internacionales.',
      author: 'Roberto Silva',
      date: '2024-01-03',
      category: 'Casos de Estudio',
      readTime: '10 min',
      image: '/api/placeholder/400/250',
      tags: ['Casos de Éxito', 'Expansión Internacional', 'Empresas']
    },
    {
      id: '7',
      title: 'El Futuro del Comercio Digital y E-commerce B2B',
      excerpt: 'Exploración de las tendencias emergentes en comercio digital B2B y cómo están transformando las relaciones comerciales internacionales.',
      author: 'Carmen Ruiz',
      date: '2024-01-01',
      category: 'Tecnología',
      readTime: '6 min',
      image: '/api/placeholder/400/250',
      tags: ['E-commerce', 'B2B', 'Comercio Digital']
    },
    {
      id: '8',
      title: 'Sostenibilidad en el Comercio Exterior: Nuevas Exigencias',
      excerpt: 'Cómo las nuevas regulaciones de sostenibilidad están afectando el comercio internacional y qué deben hacer las empresas para adaptarse.',
      author: 'Diego Morales',
      date: '2023-12-28',
      category: 'Regulaciones',
      readTime: '7 min',
      image: '/api/placeholder/400/250',
      tags: ['Sostenibilidad', 'Regulaciones', 'Comercio Verde']
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">
              Blog de Comercio Exterior
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Mantente actualizado con las últimas noticias, análisis y tendencias del comercio internacional. 
              Insights expertos para impulsar tu negocio global.
            </p>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar artículos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-3">
              <Filter className="w-5 h-5 text-slate-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'Todas las Categorías' : category}
                  </option>
                ))}
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-indigo-100 text-indigo-600' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-indigo-100 text-indigo-600' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6 text-center">
            <p className="text-slate-600">
              Mostrando {filteredPosts.length} de {blogPosts.length} artículos
              {selectedCategory !== 'all' && ` en la categoría "${selectedCategory}"`}
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">No se encontraron artículos</h3>
              <p className="text-slate-600">
                Intenta ajustar los filtros o términos de búsqueda
              </p>
            </div>
          ) : (
            <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-8'}>
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${
                    viewMode === 'list' ? 'flex gap-6' : ''
                  }`}
                >
                  {viewMode === 'list' ? (
                    <>
                      <div className="flex-shrink-0">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-48 h-32 object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                          <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium">
                            {post.category}
                          </span>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {formatDate(post.date)}
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {post.author}
                          </div>
                          <span>{post.readTime}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-slate-900 mb-3 hover:text-indigo-600 transition-colors">
                          {post.title}
                        </h3>
                        
                        <p className="text-slate-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 3).map((tag, index) => (
                              <span
                                key={index}
                                className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <button className="text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-2 transition-colors">
                            Leer más
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                          <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium">
                            {post.category}
                          </span>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {formatDate(post.date)}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-slate-900 mb-3 hover:text-indigo-600 transition-colors">
                          {post.title}
                        </h3>
                        
                        <p className="text-slate-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-1 text-sm text-slate-500">
                            <User className="w-4 h-4" />
                            {post.author}
                          </div>
                          <span className="text-sm text-slate-500">{post.readTime}</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 2).map((tag, index) => (
                              <span
                                key={index}
                                className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <button className="text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-2 transition-colors">
                            Leer más
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </article>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Quieres Recibir Nuestros Artículos?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Suscríbete a nuestro newsletter y recibe los mejores artículos directamente en tu inbox
          </p>
          <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-colors flex items-center gap-2 mx-auto">
            Suscribirme al Newsletter
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
