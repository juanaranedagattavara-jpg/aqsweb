'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, User, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { BlogArticle } from '@/lib/blog-data'

interface ArticlesGridProps {
  articles: BlogArticle[]
  selectedCategory: string
}

export function ArticlesGrid({ articles, selectedCategory }: ArticlesGridProps) {
  if (articles.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-16"
      >
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
          <div className="w-24 h-24 bg-primary-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Calendar className="w-12 h-12 text-primary-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            No hay artículos en esta categoría
          </h3>
          <p className="text-gray-300 mb-6 max-w-md mx-auto">
            Pronto publicaremos contenido en esta categoría. Mientras tanto, explora otras categorías o suscríbete a nuestro newsletter.
          </p>
          <Link
            href="/newsletter"
            className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300"
          >
            Suscribirse al Newsletter
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <AnimatePresence mode="wait">
        {articles.map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            layout
          >
            <Link href={`/blog/${article.slug}`}>
              <article className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group cursor-pointer h-full flex flex-col">
                {/* Categoría */}
                <div className="inline-flex items-center space-x-2 bg-primary-600/20 text-primary-400 px-3 py-1 rounded-full text-xs mb-4 self-start">
                  <span>{article.category}</span>
                </div>

                {/* Título */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors flex-1">
                  {article.title}
                </h3>

                {/* Extracto */}
                <p className="text-gray-300 mb-4 text-sm leading-relaxed flex-1">
                  {article.excerpt}
                </p>

                {/* Metadatos */}
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

                {/* Autor y flecha */}
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-sm text-gray-400">Por {article.author}</span>
                  <div className="text-primary-400 group-hover:text-primary-300 transition-colors group-hover:translate-x-1 transform duration-200">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </article>
            </Link>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
