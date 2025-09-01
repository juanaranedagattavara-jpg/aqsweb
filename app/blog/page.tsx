'use client'

import React, { useState, useEffect } from 'react';
import { FooterMinimal } from '@/components/layout/footer-minimal';
import { Calendar, Clock, User, ArrowRight, TrendingUp, BarChart3, Globe, Users, BookOpen, Zap } from 'lucide-react';
import Link from 'next/link';
import { CategoryFilter } from '@/components/ui/category-filter';
import { ArticlesGrid } from '@/components/ui/articles-grid';
import { 
  blogCategories, 
  blogArticles, 
  getArticlesByCategory, 
  getFeaturedArticle,
  BlogArticle 
} from '@/lib/blog-data';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [filteredArticles, setFilteredArticles] = useState<BlogArticle[]>(blogArticles);
  const [featuredArticle] = useState(getFeaturedArticle());
  const [isFiltering, setIsFiltering] = useState(false);

  // Filtrar artículos cuando cambie la categoría
  useEffect(() => {
    setIsFiltering(true);
    
    // Simular un pequeño delay para mostrar el efecto de filtrado
    setTimeout(() => {
      const articles = getArticlesByCategory(selectedCategory);
      setFilteredArticles(articles);
      setIsFiltering(false);
    }, 300);
  }, [selectedCategory]);

  const handleCategoryChange = (categorySlug: string) => {
    setSelectedCategory(categorySlug);
    
    // Scroll suave a la sección de artículos
    setTimeout(() => {
      const articlesSection = document.getElementById('articles-section');
      if (articlesSection) {
        articlesSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

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
              <BookOpen className="w-5 h-5" />
              <span className="text-sm font-medium">Blog QSP Analytics</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Insights y análisis del
              <span className="text-primary-400 block">comercio exterior</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Descubre las últimas tendencias, análisis de mercado y estrategias comerciales 
              que están transformando el comercio exterior global.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 border-t border-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Artículo Destacado</h2>
          
          {featuredArticle && (
            <Link href={`/blog/${featuredArticle.slug}`} className="block">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 cursor-pointer group">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="inline-flex items-center space-x-2 bg-primary-600/20 text-primary-400 px-3 py-1 rounded-full text-sm mb-4">
                      <TrendingUp className="w-4 h-4" />
                      <span>{featuredArticle.category}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                      {featuredArticle.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex items-center space-x-6 text-sm text-gray-400 mb-6">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{featuredArticle.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredArticle.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>Por {featuredArticle.author}</span>
                      </div>
                    </div>
                    <div className="inline-flex items-center space-x-2 text-primary-400 group-hover:text-primary-300 transition-colors font-medium">
                      <span>Leer artículo completo</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-primary-600/20 to-primary-800/20 rounded-xl p-8 text-center">
                    <div className="w-24 h-24 bg-primary-600/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-12 h-12 text-primary-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">Artículo Destacado</h4>
                    <p className="text-gray-300 text-sm">
                      Contenido seleccionado por nuestro equipo editorial
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          )}
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-16 border-t border-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Filtrar por Categoría</h2>
          
          <CategoryFilter
            categories={blogCategories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>
      </section>

            {/* Articles Grid */}
      <section id="articles-section" className="py-16 border-t border-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              {selectedCategory === 'todos' ? 'Todos los Artículos' : `Artículos de ${blogCategories.find(c => c.slug === selectedCategory)?.name}`}
            </h2>
            <p className="text-gray-400">
              {filteredArticles.length} artículo{filteredArticles.length !== 1 ? 's' : ''} encontrado{filteredArticles.length !== 1 ? 's' : ''}
            </p>
          </div>
          
          {isFiltering ? (
            <div className="text-center py-16">
              <div className="inline-flex items-center space-x-2 bg-primary-600/20 text-primary-400 px-6 py-3 rounded-full">
                <div className="w-4 h-4 border-2 border-primary-400 border-t-transparent rounded-full animate-spin"></div>
                <span>Filtrando artículos...</span>
              </div>
            </div>
          ) : (
            <ArticlesGrid 
              articles={filteredArticles}
              selectedCategory={selectedCategory}
            />
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 border-t border-gray-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              ¿Quieres recibir nuestros artículos por email?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Suscríbete a nuestro newsletter y recibe los mejores insights del comercio exterior 
              directamente en tu correo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/newsletter"
                className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-500/25 flex items-center space-x-2"
              >
                <span>Suscribirse al Newsletter</span>
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
