'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, BarChart3, Globe, Users, Target, Zap } from 'lucide-react'
import { BlogCategory } from '@/lib/blog-data'

interface CategoryFilterProps {
  categories: BlogCategory[]
  selectedCategory: string
  onCategoryChange: (categorySlug: string) => void
}

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  TrendingUp,
  BarChart3,
  Globe,
  Users,
  Target,
  Zap
}

export function CategoryFilter({ 
  categories, 
  selectedCategory, 
  onCategoryChange 
}: CategoryFilterProps) {
  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {/* Botón "Todos" */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onCategoryChange('todos')}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
            selectedCategory === 'todos'
              ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25'
              : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
          }`}
        >
          Todos los Artículos
        </motion.button>

        {/* Botones de categorías */}
        {categories.map((category) => {
          const IconComponent = iconMap[category.icon]
          
          return (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onCategoryChange(category.slug)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                selectedCategory === category.slug
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
              }`}
            >
              {IconComponent && <IconComponent className="w-4 h-4" />}
              <span>{category.name}</span>
              <span className="text-xs opacity-75">({category.articleCount})</span>
            </motion.button>
          )
        })}
      </div>

               {/* Indicador de categoría seleccionada */}
         {selectedCategory !== 'todos' && (
           <motion.div
             initial={{ opacity: 0, y: -10 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-center mb-8"
           >
             <div className="inline-flex items-center space-x-2 bg-primary-600/20 text-primary-400 px-4 py-2 rounded-full">
               <span className="text-sm font-medium">
                 Mostrando artículos de: {categories.find(c => c.slug === selectedCategory)?.name}
               </span>
               <button
                 onClick={() => onCategoryChange('todos')}
                 className="ml-2 hover:bg-primary-500/20 rounded-full p-1 transition-colors"
                 title="Limpiar filtro"
               >
                 <span className="text-xs">×</span>
               </button>
             </div>
           </motion.div>
         )}
    </div>
  )
}
