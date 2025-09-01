'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { dashboardCards } from '@/lib/dashboard-data'
import Link from 'next/link'

interface InteractiveDashboardCarouselProps {
  title?: string
  description?: string
}

// Visual Components
const AnalyticsVisual = () => {
  const [hovered, setHovered] = useState(false)
  return (
    <div 
      className="relative h-[200px] w-full overflow-hidden rounded-t-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`w-24 h-24 rounded-full border-4 border-purple-400 transition-all duration-500 ${hovered ? 'scale-125 rotate-180' : 'scale-100'}`}>
          <div className="w-full h-full rounded-full bg-purple-500/30 flex items-center justify-center">
            <span className="text-2xl">📊</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const WaveVisual = () => {
  const [hovered, setHovered] = useState(false)
  return (
    <div 
      className="relative h-[200px] w-full overflow-hidden rounded-t-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`transition-all duration-500 ${hovered ? 'scale-125' : 'scale-100'}`}>
          <span className="text-4xl">🌊</span>
        </div>
      </div>
    </div>
  )
}

const GeometricVisual = () => {
  const [hovered, setHovered] = useState(false)
  return (
    <div 
      className="relative h-[200px] w-full overflow-hidden rounded-t-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`w-20 h-20 bg-orange-400 rounded-lg transition-all duration-500 ${hovered ? 'rotate-180 scale-150' : 'rotate-0 scale-100'}`} />
      </div>
    </div>
  )
}

const NetworkVisual = () => {
  const [hovered, setHovered] = useState(false)
  return (
    <div 
      className="relative h-[200px] w-full overflow-hidden rounded-t-2xl bg-gradient-to-br from-green-500/20 to-blue-500/20"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`transition-all duration-500 ${hovered ? 'scale-125' : 'scale-100'}`}>
          <span className="text-4xl">🕸️</span>
        </div>
      </div>
    </div>
  )
}

const MarketVisual = () => {
  const [hovered, setHovered] = useState(false)
  return (
    <div 
      className="relative h-[200px] w-full overflow-hidden rounded-t-2xl bg-gradient-to-br from-red-500/20 to-orange-500/20"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`transition-all duration-500 ${hovered ? 'scale-125' : 'scale-100'}`}>
          <span className="text-4xl">📈</span>
        </div>
      </div>
    </div>
  )
}

const CompetitionVisual = () => {
  const [hovered, setHovered] = useState(false)
  return (
    <div 
      className="relative h-[200px] w-full overflow-hidden rounded-t-2xl bg-gradient-to-br from-teal-500/20 to-purple-500/20"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`transition-all duration-500 ${hovered ? 'scale-125' : 'scale-100'}`}>
          <span className="text-4xl">🎯</span>
        </div>
      </div>
    </div>
  )
}

// Mapeo de visuales a dashboards
const getVisualForDashboard = (dashboardType: string) => {
  switch (dashboardType) {
    case 'analitico':
      return <AnalyticsVisual />
    case 'tendencias':
      return <WaveVisual />
    case 'geometrico':
      return <GeometricVisual />
    case 'redes':
      return <NetworkVisual />
    case 'mercado':
      return <MarketVisual />
    case 'competencia':
      return <CompetitionVisual />
    default:
      return <AnalyticsVisual />
  }
}

export function InteractiveDashboardCarousel({ 
  title = "Dashboards Especializados",
  description = "Explora nuestros dashboards interactivos diseñados para transformar datos en decisiones estratégicas"
}: InteractiveDashboardCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = prev + 3
        return nextIndex >= dashboardCards.length ? 0 : nextIndex
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + 3
      return nextIndex >= dashboardCards.length ? 0 : nextIndex
    })
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const prevIndex = prev - 3
      return prevIndex < 0 ? Math.max(0, dashboardCards.length - 3) : prevIndex
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
    <div className="w-full max-w-6xl mx-auto">
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                  {/* Current slide dashboards */}
                  {Array.from({ length: 3 }).map((_, index) => {
                    const dashboardIndex = currentIndex + index
                    const dashboard = dashboardCards[dashboardIndex]
                    
                    if (!dashboard) return null
                    
                    return (
                      <motion.div
                        key={`${currentIndex}-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group/dashboard"
                      >
                        <Link href="/dashboard">
                          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden h-full hover:scale-105 transition-all duration-300 cursor-pointer hover:border-primary-500/30">
                            {/* Visual Component */}
                            <div className="relative">
                              {getVisualForDashboard(dashboard.type)}
                            </div>
                            
                            {/* Content */}
                            <div className="p-6">
                              {/* Header */}
                              <div className="text-center mb-4">
                                <h3 className="text-lg font-bold text-white mb-2 group-hover/dashboard:text-primary-400 transition-colors">
                                  {dashboard.title}
                                </h3>
                                <span className="inline-block px-3 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20">
                                  {dashboard.type}
                                </span>
                              </div>
                              
                              {/* Description */}
                              <p className="text-gray-300 text-sm text-center leading-relaxed mb-4">
                                {dashboard.description}
                              </p>
                              
                              {/* Features */}
                              <div className="space-y-2 mb-4">
                                {dashboard.features.slice(0, 2).map((feature, idx) => (
                                  <div key={idx} className="flex items-center text-xs text-gray-400">
                                    <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2"></div>
                                    {feature}
                                  </div>
                                ))}
                              </div>
                              
                              {/* CTA */}
                              <div className="flex items-center justify-center text-primary-400 group-hover/dashboard:text-primary-300 transition-colors">
                                <span className="text-sm font-medium">Explorar Dashboard</span>
                                <ArrowRight className="w-4 h-4 ml-2 group-hover/dashboard:translate-x-1 transition-transform" />
                              </div>
                            </div>
                          </div>
                        </Link>
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
          {Array.from({ length: Math.ceil(dashboardCards.length / 3) }).map((_, index) => (
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
            {Math.floor(currentIndex / 3) + 1} de {Math.ceil(dashboardCards.length / 3)}
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
    </div>
  )
}
