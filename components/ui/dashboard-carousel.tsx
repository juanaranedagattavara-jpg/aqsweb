'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { Button } from './button'
import Link from 'next/link'

interface DashboardCard {
  id: string
  title: string
  description: string
  type: string
  features: string[]
}

interface DashboardCarouselProps {
  cards: DashboardCard[]
  title?: string
  description?: string
}

export function DashboardCarousel({ 
  cards, 
  title = "Dashboards Disponibles",
  description = "Explora nuestros dashboards interactivos diseñados para el comercio exterior"
}: DashboardCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = prev + 3
        return nextIndex >= cards.length ? 0 : nextIndex
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, cards.length])

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + 3
      return nextIndex >= cards.length ? 0 : nextIndex
    })
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const prevIndex = prev - 3
      return prevIndex < 0 ? Math.max(0, cards.length - 3) : prevIndex
    })
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const pauseAutoPlay = () => setIsAutoPlaying(false)
  const resumeAutoPlay = () => setIsAutoPlaying(true)

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative group">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 backdrop-blur-sm border border-white/20"
          aria-label="Anterior slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 backdrop-blur-sm border border-white/20"
          aria-label="Siguiente slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Carousel Track */}
        <div 
          className="overflow-hidden rounded-2xl"
          onMouseEnter={pauseAutoPlay}
          onMouseLeave={resumeAutoPlay}
        >
          <div className="flex transition-transform duration-500 ease-out">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-full flex-shrink-0"
              >
                                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                   {/* Current slide cards */}
                   {Array.from({ length: 3 }).map((_, index) => {
                     const cardIndex = currentIndex + index
                     const card = cards[cardIndex]
                     
                     if (!card) return null
                     
                     return (
                       <motion.div
                         key={`${currentIndex}-${index}`}
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.5, delay: index * 0.1 }}
                         className="group/card"
                       >
                      <div className="bg-gradient-to-br from-primary-900/20 to-primary-800/20 border border-primary-500/30 rounded-2xl p-6 h-full hover:scale-105 transition-all duration-300 cursor-pointer backdrop-blur-sm">
                        {/* Visual */}
                        <div className="h-32 mb-4 rounded-lg bg-gradient-to-br from-primary-600/20 to-primary-400/20 border border-primary-500/30 flex items-center justify-center">
                          <div className="text-primary-400 text-4xl">
                            {card.type === 'analitico' && '📊'}
                            {card.type === 'tendencias' && '🌊'}
                            {card.type === 'geometrico' && '🔷'}
                            {card.type === 'redes' && '🌐'}
                            {card.type === 'mercado' && '📈'}
                            {card.type === 'competencia' && '🎯'}
                          </div>
                        </div>

                        {/* Content */}
                        <h3 className="text-xl font-bold text-white mb-3 group-hover/card:text-primary-400 transition-colors">
                          {card.title}
                        </h3>
                        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                          {card.description}
                        </p>

                                                 {/* CTA Button */}
                         <Link href="/dashboard" className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors group-hover/card:text-primary-300">
                           <span className="text-sm font-medium">Explorar Dashboard</span>
                           <ArrowRight className="w-4 h-4 ml-2 group-hover/card:translate-x-1 transition-transform" />
                         </Link>
                       </div>
                     </motion.div>
                   )
                   })}
                 </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

                 {/* Dots Indicator */}
         <div className="flex justify-center mt-8 space-x-2">
           {Array.from({ length: Math.ceil(cards.length / 3) }).map((_, index) => (
             <button
               key={index}
               onClick={() => goToSlide(index * 3)}
               className={`w-3 h-3 rounded-full transition-all duration-300 ${
                 currentIndex === index * 3
                   ? 'bg-primary-500 scale-125'
                   : 'bg-gray-600 hover:bg-gray-500'
               }`}
               aria-label={`Ir al slide ${index + 1}`}
             />
           ))}
         </div>

                 {/* Progress Indicator */}
         <div className="flex justify-center mt-6">
           <div className="text-sm text-gray-400">
             {Math.floor(currentIndex / 3) + 1} de {Math.ceil(cards.length / 3)}
           </div>
         </div>

         {/* Auto-play Controls */}
         <div className="flex justify-center mt-4 space-x-2">
           <button
             onClick={pauseAutoPlay}
             className={`px-3 py-1 text-xs rounded-full transition-all ${
               !isAutoPlaying
                 ? 'bg-primary-600 text-white'
                 : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
             }`}
           >
             Pausar
           </button>
           <button
             onClick={resumeAutoPlay}
             className={`px-3 py-1 text-xs rounded-full transition-all ${
               isAutoPlaying
                 ? 'bg-primary-600 text-white'
                 : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
             }`}
           >
             Reproducir
           </button>
         </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-12">
        <Link href="/dashboard">
          <Button variant="premium" size="lg" className="group">
            Ver Todos los Dashboards
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
