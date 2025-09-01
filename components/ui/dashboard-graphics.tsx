'use client'

import * as React from "react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

// Visual Component Props
interface VisualProps {
  mainColor?: string
  secondaryColor?: string
  gridColor?: string
}

interface LayerProps {
  color: string
  secondaryColor?: string
  hovered?: boolean
}

// Shared Components
const EllipseGradient: React.FC<{ color: string }> = ({ color }) => {
  return (
    <div className="absolute inset-0 z-[5] flex h-full w-full items-center justify-center">
      <svg
        width="320"
        height="160"
        viewBox="0 0 320 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="320" height="160" fill="url(#paint0_radial)" />
        <defs>
          <radialGradient
            id="paint0_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(190 100) rotate(90) scale(100 190)"
          >
            <stop stopColor={color} stopOpacity="0.3" />
            <stop offset="0.4" stopColor={color} stopOpacity="0.2" />
            <stop offset="1" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}

const GridLayer: React.FC<{ color: string }> = ({ color }) => {
  return (
    <div
      style={{ "--grid-color": color } as React.CSSProperties}
      className="pointer-events-none absolute inset-0 z-[4] h-full w-full bg-transparent bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] bg-[size:20px_20px] bg-center opacity-60"
    />
  )
}

// Visual 1: Analytics Card
const AnalyticsVisual: React.FC<VisualProps> = ({
  mainColor = "#8b5cf6",
  secondaryColor = "#fbbf24",
  gridColor = "#80808020",
}) => {
  const [hovered, setHovered] = useState(false)
  const [mainProgress, setMainProgress] = useState(15)
  const [secondaryProgress, setSecondaryProgress] = useState(0)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (hovered) {
      timeout = setTimeout(() => {
        setMainProgress(75)
        setSecondaryProgress(100)
      }, 300)
    } else {
      setMainProgress(15)
      setSecondaryProgress(0)
    }

    return () => clearTimeout(timeout)
  }, [hovered])

  return (
    <div
      className="relative h-full w-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <EllipseGradient color={mainColor} />
      <GridLayer color={gridColor} />
      
      {/* Performance Analytics Pop-up */}
      <div className="absolute top-4 left-4 z-[6] flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
        <div className="text-xs font-semibold text-gray-800">Performance Analytics</div>
      </div>
      <div className="absolute top-12 left-4 z-[6] text-xs text-gray-600">Real-time metrics and insights</div>
      
      {/* Circular Progress */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[6]">
        <svg width="120" height="120" viewBox="0 0 120 120" className="transform -rotate-90">
          <circle
            cx="60"
            cy="60"
            r="50"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-gray-200"
          />
          <circle
            cx="60"
            cy="60"
            r="50"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            strokeDasharray={`${2 * Math.PI * 50}`}
            strokeDashoffset={`${2 * Math.PI * 50 * (1 - mainProgress / 100)}`}
            className="text-purple-500 transition-all duration-1000 ease-out"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-gray-800">
          {mainProgress}%
        </div>
      </div>
      
      {/* Analytics Dashboard Text */}
      <div className="absolute bottom-4 left-4 z-[6]">
        <div className="text-lg font-bold text-gray-800">Analytics Dashboard</div>
        <div className="text-xs text-gray-600 max-w-[280px]">
          Interactive data visualization with real-time progress tracking and technology stack overview.
        </div>
      </div>
    </div>
  )
}

// Visual 2: Wave Analytics
const WaveVisual: React.FC<VisualProps> = ({
  mainColor = "#06b6d4",
  secondaryColor = "#8b5cf6",
  gridColor = "#80808020",
}) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="relative h-full w-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <EllipseGradient color={mainColor} />
      <GridLayer color={gridColor} />
      
      {/* Wave Chart */}
      <div className="absolute inset-0 z-[6] flex items-center justify-center">
        <svg width="280" height="120" viewBox="0 0 280 120" className="overflow-visible">
          <path
            d="M0 60 Q35 40 70 60 T140 60 T210 60 T280 60"
            stroke={mainColor}
            strokeWidth="3"
            fill="none"
            className="transition-all duration-500"
            style={{
              strokeDasharray: hovered ? "0" : "5,5",
              strokeDashoffset: hovered ? "0" : "10"
            }}
          />
          <path
            d="M0 70 Q35 50 70 70 T140 70 T210 70 T280 70"
            stroke={secondaryColor}
            strokeWidth="2"
            fill="none"
            opacity="0.7"
            className="transition-all duration-500"
            style={{
              strokeDasharray: hovered ? "0" : "3,3",
              strokeDashoffset: hovered ? "0" : "6"
            }}
          />
        </svg>
      </div>
      
      {/* Data Points */}
      <div className="absolute top-4 right-4 z-[6] text-xs text-gray-600">
        <div className="font-semibold">Wave Analytics</div>
        <div>Pattern recognition & trend analysis</div>
      </div>
    </div>
  )
}

// Visual 3: Geometric Patterns
const GeometricVisual: React.FC<VisualProps> = ({
  mainColor = "#10b981",
  secondaryColor = "#f59e0b",
  gridColor = "#80808020",
}) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="relative h-full w-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <EllipseGradient color={mainColor} />
      <GridLayer color={gridColor} />
      
      {/* Geometric Shapes */}
      <div className="absolute inset-0 z-[6] flex items-center justify-center">
        <div className="relative">
          <div 
            className={`w-16 h-16 border-4 border-current transition-all duration-500 ${
              hovered ? 'rotate-45 scale-110' : 'rotate-0 scale-100'
            }`}
            style={{ color: mainColor }}
          />
          <div 
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-current transition-all duration-500 ${
              hovered ? 'scale-75' : 'scale-100'
            }`}
            style={{ color: secondaryColor }}
          />
        </div>
      </div>
      
      {/* Pattern Info */}
      <div className="absolute bottom-4 right-4 z-[6] text-xs text-gray-600">
        <div className="font-semibold">Geometric Patterns</div>
        <div>Structural analysis & symmetry detection</div>
      </div>
    </div>
  )
}

// Visual 4: Network Connections
const NetworkVisual: React.FC<VisualProps> = ({
  mainColor = "#ef4444",
  secondaryColor = "#8b5cf6",
  gridColor = "#80808020",
}) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="relative h-full w-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <EllipseGradient color={mainColor} />
      <GridLayer color={gridColor} />
      
      {/* Network Nodes */}
      <div className="absolute inset-0 z-[6] flex items-center justify-center">
        <div className="relative">
          {/* Central Node */}
          <div 
            className={`w-6 h-6 bg-current rounded-full transition-all duration-500 ${
              hovered ? 'scale-125' : 'scale-100'
            }`}
            style={{ color: mainColor }}
          />
          
          {/* Connected Nodes */}
          {[0, 60, 120, 180, 240, 300].map((angle, index) => (
            <div
              key={index}
              className={`absolute w-4 h-4 bg-current rounded-full transition-all duration-500 ${
                hovered ? 'scale-110' : 'scale-100'
              }`}
              style={{
                color: secondaryColor,
                top: `${60 + 40 * Math.sin(angle * Math.PI / 180)}px`,
                left: `${60 + 40 * Math.cos(angle * Math.PI / 180)}px`,
                transform: 'translate(-50%, -50%)'
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Network Info */}
      <div className="absolute top-4 left-4 z-[6] text-xs text-gray-600">
        <div className="font-semibold">Network Analysis</div>
        <div>Connection mapping & relationship insights</div>
      </div>
    </div>
  )
}

// Visual 5: Data Flow
const DataFlowVisual: React.FC<VisualProps> = ({
  mainColor = "#8b5cf6",
  secondaryColor = "#06b6d4",
  gridColor = "#80808020",
}) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="relative h-full w-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <EllipseGradient color={mainColor} />
      <GridLayer color={gridColor} />
      
      {/* Data Flow Lines */}
      <div className="absolute inset-0 z-[6] flex items-center justify-center">
        <svg width="280" height="120" viewBox="0 0 280 120" className="overflow-visible">
          <path
            d="M20 60 Q70 20 120 60 T220 60"
            stroke={mainColor}
            strokeWidth="2"
            fill="none"
            className="transition-all duration-500"
            style={{
              strokeDasharray: hovered ? "0" : "8,8",
              strokeDashoffset: hovered ? "0" : "16"
            }}
          />
          <circle
            cx="20"
            cy="60"
            r="4"
            fill={mainColor}
            className="transition-all duration-500"
            style={{
              transform: hovered ? 'scale(1.2)' : 'scale(1)'
            }}
          />
          <circle
            cx="220"
            cy="60"
            r="4"
            fill={secondaryColor}
            className="transition-all duration-500"
            style={{
              transform: hovered ? 'scale(1.2)' : 'scale(1)'
            }}
          />
        </svg>
      </div>
      
      {/* Flow Info */}
      <div className="absolute bottom-4 left-4 z-[6] text-xs text-gray-600">
        <div className="font-semibold">Data Flow</div>
        <div>Stream processing & pipeline optimization</div>
      </div>
    </div>
  )
}

// Visual 6: Timeline
const TimelineVisual: React.FC<VisualProps> = ({
  mainColor = "#f59e0b",
  secondaryColor = "#10b981",
  gridColor = "#80808020",
}) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="relative h-full w-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <EllipseGradient color={mainColor} />
      <GridLayer color={gridColor} />
      
      {/* Timeline */}
      <div className="absolute inset-0 z-[6] flex items-center justify-center">
        <div className="relative w-64">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-300 transform -translate-y-1/2" />
          
          {/* Timeline Points */}
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className={`absolute top-1/2 w-3 h-3 bg-current rounded-full transform -translate-y-1/2 transition-all duration-500 ${
                hovered ? 'scale-125' : 'scale-100'
              }`}
              style={{
                color: index % 2 === 0 ? mainColor : secondaryColor,
                left: `${(index / 3) * 100}%`
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Timeline Info */}
      <div className="absolute top-4 right-4 z-[6] text-xs text-gray-600">
        <div className="font-semibold">Timeline Analysis</div>
        <div>Historical trends & temporal patterns</div>
      </div>
    </div>
  )
}

// Main Dashboard Graphics Component
export function DashboardGraphics() {
  const graphics = [
    { component: AnalyticsVisual, title: "Analytics Dashboard" },
    { component: WaveVisual, title: "Wave Analytics" },
    { component: GeometricVisual, title: "Geometric Patterns" },
    { component: NetworkVisual, title: "Network Analysis" },
    { component: DataFlowVisual, title: "Data Flow" },
    { component: TimelineVisual, title: "Timeline Analysis" }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {graphics.map(({ component: Component, title }, index) => (
        <div
          key={index}
          className="group relative w-full max-w-[380px] overflow-hidden rounded-2xl border border-zinc-200/50 bg-white/80 shadow-xl backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:scale-105 dark:border-zinc-800/50 dark:bg-black/80"
        >
          <div className="h-[160px] w-full overflow-hidden">
            <Component />
          </div>
          <div className="flex flex-col space-y-2 border-t border-zinc-200/30 p-4 dark:border-zinc-800/30">
            <h3 className="text-lg font-bold text-black dark:text-white">{title}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}
