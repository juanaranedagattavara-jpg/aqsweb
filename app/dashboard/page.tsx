"use client"

import * as React from "react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { FooterMinimal } from "@/components/layout/footer-minimal"

// Card Components
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

function AnimatedCard({ className, ...props }: CardProps) {
  return (
    <div
      role="region"
      aria-labelledby="card-title"
      aria-describedby="card-description"
      className={cn(
        "group/animated-card relative w-[380px] overflow-hidden rounded-2xl border border-zinc-200/50 bg-white/80 shadow-xl backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:scale-105 dark:border-zinc-800/50 dark:bg-black/80",
        className
      )}
      {...props}
    />
  )
}

function CardBody({ className, ...props }: CardProps) {
  return (
    <div
      role="group"
      className={cn(
        "flex flex-col space-y-2 border-t border-zinc-200/30 p-6 dark:border-zinc-800/30",
        className
      )}
      {...props}
    />
  )
}

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

function CardTitle({ className, ...props }: CardTitleProps) {
  return (
    <h3
      className={cn(
        "text-xl leading-none font-bold tracking-tight text-black dark:text-white",
        className
      )}
      {...props}
    />
  )
}

interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

function CardDescription({ className, ...props }: CardDescriptionProps) {
  return (
    <p
      className={cn(
        "text-sm leading-relaxed text-neutral-600 dark:text-neutral-300",
        className
      )}
      {...props}
    />
  )
}

function CardVisual({ className, ...props }: CardProps) {
  return (
    <div
      className={cn("h-[160px] w-[320px] overflow-hidden", className)}
      {...props}
    />
  )
}

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

// Visual 1: Analytics Card (Enhanced Original)
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

  const radius = 45
  const circumference = 2 * Math.PI * radius
  const mainDashoffset = circumference - (mainProgress / 100) * circumference
  const secondaryDashoffset = circumference - (secondaryProgress / 100) * circumference

  const techItems = [
    { id: 1, translateX: "100", translateY: "50", text: "React", icon: "⚛️" },
    { id: 2, translateX: "100", translateY: "-50", text: "Next.js", icon: "🔷" },
    { id: 3, translateX: "120", translateY: "0", text: "TypeScript", icon: "📘" },
    { id: 4, translateX: "-120", translateY: "0", text: "Tailwind", icon: "💨" },
    { id: 5, translateX: "-100", translateY: "50", text: "Prisma", icon: "🔺" },
    { id: 6, translateX: "-100", translateY: "-50", text: "GraphQL", icon: "🌸" },
  ]

  return (
    <>
      <div
        className="absolute inset-0 z-20"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
      <div className="relative h-[200px] w-[380px] overflow-hidden rounded-t-2xl">
        {/* Main Chart */}
        <div className="ease-[cubic-bezier(0.6, 0.6, 0, 1)] absolute top-0 left-0 z-[7] flex h-[320px] w-[320px] transform items-center justify-center transition-transform duration-700 group-hover/animated-card:-translate-y-[80px] group-hover/animated-card:scale-110">
          <div className="relative flex h-[140px] w-[140px] items-center justify-center">
            <svg width="140" height="140" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r={radius}
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                opacity={0.1}
                className="text-zinc-400 dark:text-zinc-600"
              />
              <circle
                cx="50"
                cy="50"
                r={radius}
                stroke={secondaryColor}
                strokeWidth="12"
                fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={secondaryDashoffset}
                transform="rotate(-90 50 50)"
                style={{
                  transition: "stroke-dashoffset 0.7s cubic-bezier(0.6, 0.6, 0, 1)",
                }}
              />
              <circle
                cx="50"
                cy="50"
                r={radius}
                stroke={mainColor}
                strokeWidth="12"
                fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={mainDashoffset}
                transform="rotate(-90 50 50)"
                style={{
                  transition: "stroke-dashoffset 0.7s cubic-bezier(0.6, 0.6, 0, 1)",
                }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-black dark:text-white">
                {hovered ? (secondaryProgress > 75 ? secondaryProgress : mainProgress) : mainProgress}%
              </span>
            </div>
          </div>
        </div>

        {/* Info Badge */}
        <div className="ease-[cubic-bezier(0.6, 0.6, 0, 1)] absolute inset-0 z-[6] flex w-[380px] translate-y-0 items-start justify-center bg-transparent p-6 transition-transform duration-700 group-hover/animated-card:translate-y-full">
          <div className="ease-[cubic-bezier(0.6, 0.6, 0, 1)] rounded-lg border border-zinc-200/40 bg-white/40 px-4 py-3 opacity-100 backdrop-blur-md transition-opacity duration-500 group-hover/animated-card:opacity-0 dark:border-zinc-800/40 dark:bg-black/40">
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 shrink-0 rounded-full" style={{ backgroundColor: mainColor }} />
              <p className="text-sm font-medium text-black dark:text-white">
                Performance Analytics
              </p>
            </div>
            <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-300">
              Real-time metrics and insights
            </p>
          </div>
        </div>

        {/* Tech Stack Items */}
        <div className="ease-[cubic-bezier(0.6, 0.6, 0, 1)] absolute inset-0 z-[7] flex items-center justify-center opacity-0 transition-opacity duration-700 group-hover/animated-card:opacity-100">
          {techItems.map((item, index) => (
            <div
              key={item.id}
              className="ease-[cubic-bezier(0.6, 0.6, 0, 1)] absolute flex items-center justify-center gap-2 rounded-full border border-zinc-200/60 bg-white/80 px-3 py-1.5 backdrop-blur-md transition-all duration-700 dark:border-zinc-800/60 dark:bg-black/80"
              style={{
                transform: hovered
                  ? `translate(${item.translateX}px, ${item.translateY}px)`
                  : "translate(0px, 0px)",
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <span className="text-sm">{item.icon}</span>
              <span className="text-xs font-medium text-black dark:text-white">
                {item.text}
              </span>
            </div>
          ))}
        </div>

        <EllipseGradient color={mainColor} />
        <GridLayer color={gridColor} />
      </div>
    </>
  )
}

// Visual 2: Wave Animation Card
const WaveVisual: React.FC<VisualProps> = ({
  mainColor = "#06b6d4",
  secondaryColor = "#8b5cf6",
  gridColor = "#80808020",
}) => {
  const [hovered, setHovered] = useState(false)

  return (
    <>
      <div
        className="absolute inset-0 z-20"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
      <div className="relative h-[200px] w-[380px] overflow-hidden rounded-t-2xl">
        {/* Animated Waves */}
        <div className="absolute inset-0 z-[6]">
          <svg
            className="absolute bottom-0 left-0 w-full"
            viewBox="0 0 320 160"
            fill="none"
          >
            <path
              d="M0,160 Q95,120 190,140 T380,130 L380,200 L0,200 Z"
              fill={`${mainColor}40`}
              className={cn(
                "transition-all duration-1000 ease-in-out",
                hovered ? "translate-y-0" : "translate-y-8"
              )}
            />
            <path
              d="M0,170 Q95,130 190,150 T380,140 L380,200 L0,200 Z"
              fill={`${secondaryColor}30`}
              className={cn(
                "transition-all duration-1000 ease-in-out",
                hovered ? "translate-y-0" : "translate-y-6"
              )}
              style={{ transitionDelay: "200ms" }}
            />
          </svg>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 z-[7]">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={cn(
                "absolute h-2 w-2 rounded-full opacity-60 transition-all duration-1000 ease-in-out",
                hovered ? "animate-bounce" : ""
              )}
              style={{
                backgroundColor: i % 2 === 0 ? mainColor : secondaryColor,
                left: `${15 + i * 50}px`,
                top: `${65 + (i % 3) * 25}px`,
                animationDelay: `${i * 200}ms`,
                transform: hovered ? `translateY(-${(i + 1) * 15}px)` : "translateY(0)",
              }}
            />
          ))}
        </div>

        {/* Central Icon */}
        <div className="ease-[cubic-bezier(0.6, 0.6, 0, 1)] absolute inset-0 z-[8] flex items-center justify-center transition-transform duration-700 group-hover/animated-card:scale-110 group-hover/animated-card:rotate-12">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm dark:bg-black/80">
            <span className="text-2xl">🌊</span>
          </div>
        </div>

        <GridLayer color={gridColor} />
      </div>
    </>
  )
}

// Visual 3: Geometric Morphing Card
const GeometricVisual: React.FC<VisualProps> = ({
  mainColor = "#f59e0b",
  secondaryColor = "#ef4444",
  gridColor = "#80808020",
}) => {
  const [hovered, setHovered] = useState(false)

  return (
    <>
      <div
        className="absolute inset-0 z-20"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
      <div className="relative h-[200px] w-[380px] overflow-hidden rounded-t-2xl">
        {/* Morphing Shapes */}
        <div className="absolute inset-0 z-[6] flex items-center justify-center">
          <div className="relative">
            {/* Main Shape */}
            <div
              className={cn(
                "transition-all duration-1000 ease-in-out",
                hovered ? "rotate-180 scale-150" : "rotate-0 scale-100"
              )}
              style={{ backgroundColor: mainColor }}
            >
              <div className="h-20 w-20 rounded-lg opacity-80" />
            </div>
            
            {/* Orbiting Shapes */}
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className={cn(
                  "absolute h-4 w-4 rounded-full transition-all duration-1000 ease-in-out",
                  hovered ? "opacity-100" : "opacity-60"
                )}
                style={{
                  backgroundColor: i % 2 === 0 ? secondaryColor : mainColor,
                  top: "50%",
                  left: "50%",
                  transform: hovered
                    ? `translate(-50%, -50%) rotate(${i * 90 + 180}deg) translateX(60px) rotate(-${i * 90 + 180}deg)`
                    : `translate(-50%, -50%) rotate(${i * 90}deg) translateX(40px) rotate(-${i * 90}deg)`,
                  transitionDelay: `${i * 100}ms`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 z-[5]">
          <svg width="320" height="160" className="opacity-20">
            <defs>
              <pattern id="hexagon" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
                <polygon points="20,2 32,12 32,28 20,38 8,28 8,12" fill="none" stroke={mainColor} strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagon)" />
          </svg>
        </div>

        <GridLayer color={gridColor} />
      </div>
    </>
  )
}

// Visual 4: Network Graph Card
const NetworkVisual: React.FC<VisualProps> = ({
  mainColor = "#10b981",
  secondaryColor = "#3b82f6",
  gridColor = "#80808020",
}) => {
  const [hovered, setHovered] = useState(false)

  const nodes = [
    { id: 1, x: 160, y: 80, size: 6 },
    { id: 2, x: 100, y: 50, size: 5 },
    { id: 3, x: 220, y: 65, size: 5 },
    { id: 4, x: 80, y: 110, size: 4 },
    { id: 5, x: 240, y: 110, size: 4 },
    { id: 6, x: 160, y: 30, size: 3 },
    { id: 7, x: 160, y: 130, size: 3 },
  ]

  return (
    <>
      <div
        className="absolute inset-0 z-20"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
      <div className="relative h-[200px] w-[380px] overflow-hidden rounded-t-2xl">
        {/* Network Lines */}
        <svg className="absolute inset-0 z-[6] h-full w-full" viewBox="0 0 320 160">
          {nodes.map((node, i) =>
            nodes.slice(i + 1).map((targetNode, j) => (
              <line
                key={`${i}-${j}`}
                x1={node.x}
                y1={node.y}
                x2={targetNode.x}
                y2={targetNode.y}
                stroke={hovered ? mainColor : secondaryColor}
                strokeWidth={hovered ? 2 : 1}
                opacity={hovered ? 0.8 : 0.4}
                className="transition-all duration-500 ease-in-out"
                style={{ transitionDelay: `${(i + j) * 50}ms` }}
              />
            ))
          )}
        </svg>

        {/* Network Nodes */}
        <div className="absolute inset-0 z-[7]">
          {nodes.map((node, i) => (
            <div
              key={node.id}
              className={cn(
                "absolute rounded-full transition-all duration-500 ease-in-out",
                hovered ? "animate-pulse" : ""
              )}
              style={{
                left: node.x - node.size / 2,
                top: node.y - node.size / 2,
                width: hovered ? node.size * 1.5 : node.size,
                height: hovered ? node.size * 1.5 : node.size,
                backgroundColor: i === 0 ? mainColor : secondaryColor,
                transitionDelay: `${i * 100}ms`,
              }}
            />
          ))}
        </div>

        <EllipseGradient color={mainColor} />
        <GridLayer color={gridColor} />
      </div>
    </>
  )
}

// Visual 5: Data Flow Card
const DataFlowVisual: React.FC<VisualProps> = ({
  mainColor = "#ec4899",
  secondaryColor = "#8b5cf6",
  gridColor = "#80808020",
}) => {
  const [hovered, setHovered] = useState(false)

  return (
    <>
      <div
        className="absolute inset-0 z-20"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
      <div className="relative h-[160px] w-[320px] overflow-hidden rounded-t-2xl">
        {/* Flowing Data Streams */}
        <div className="absolute inset-0 z-[6]">
          <svg width="320" height="160" className="opacity-80">
            <defs>
              <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={mainColor} />
                <stop offset="50%" stopColor={secondaryColor} />
                <stop offset="100%" stopColor={mainColor} />
              </linearGradient>
            </defs>
            <path
              d="M0,80 Q80,40 160,80 T320,80"
              stroke="url(#flowGradient)"
              strokeWidth={hovered ? 4 : 2}
              fill="none"
              className="transition-all duration-1000 ease-in-out"
              style={{
                strokeDasharray: hovered ? "20,10" : "5,5",
                animation: hovered ? "flow 2s linear infinite" : "none"
              }}
            />
            <path
              d="M0,100 Q80,60 160,100 T320,100"
              stroke={secondaryColor}
              strokeWidth={hovered ? 3 : 1.5}
              fill="none"
              opacity={0.6}
              className="transition-all duration-1000 ease-in-out"
              style={{
                strokeDasharray: hovered ? "15,8" : "3,3",
                animation: hovered ? "flow 2.5s linear infinite" : "none"
              }}
            />
          </svg>
        </div>

        {/* Data Points */}
        <div className="absolute inset-0 z-[7]">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={cn(
                "absolute h-2 w-2 rounded-full transition-all duration-500 ease-in-out",
                hovered ? "animate-ping" : ""
              )}
              style={{
                backgroundColor: i % 2 === 0 ? mainColor : secondaryColor,
                left: `${i * 40}px`,
                top: `${70 + Math.sin(i * 0.5) * 20}px`,
                animationDelay: `${i * 100}ms`,
                transform: hovered ? `scale(1.5) translateY(-${Math.sin(i * 0.5) * 10}px)` : "scale(1)",
              }}
            />
          ))}
        </div>

        {/* Central Icon */}
        <div className="ease-[cubic-bezier(0.6, 0.6, 0, 1)] absolute inset-0 z-[8] flex items-center justify-center transition-transform duration-700 group-hover/animated-card:scale-110 group-hover/animated-card:rotate-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm dark:bg-black/80">
            <span className="text-xl">📊</span>
          </div>
        </div>

        <GridLayer color={gridColor} />
      </div>
    </>
  )
}

// Visual 6: Timeline Card
const TimelineVisual: React.FC<VisualProps> = ({
  mainColor = "#f59e0b",
  secondaryColor = "#ef4444",
  gridColor = "#80808020",
}) => {
  const [hovered, setHovered] = useState(false)

  const timelinePoints = [
    { x: 40, y: 80, label: "2020", size: 4 },
    { x: 80, y: 60, label: "2021", size: 5 },
    { x: 120, y: 40, label: "2022", size: 6 },
    { x: 160, y: 30, label: "2023", size: 7 },
    { x: 200, y: 50, label: "2024", size: 6 },
    { x: 240, y: 70, label: "2025", size: 5 },
    { x: 280, y: 90, label: "2026", size: 4 },
  ]

  return (
    <>
      <div
        className="absolute inset-0 z-20"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
      <div className="relative h-[160px] w-[320px] overflow-hidden rounded-t-2xl">
        {/* Timeline Line */}
        <svg className="absolute inset-0 z-[6] h-full w-full">
          <path
            d={`M${timelinePoints.map(p => `${p.x},${p.y}`).join(' L')}`}
            stroke={hovered ? mainColor : secondaryColor}
            strokeWidth={hovered ? 3 : 2}
            fill="none"
            className="transition-all duration-500 ease-in-out"
            style={{
              strokeDasharray: hovered ? "10,5" : "5,2",
              animation: hovered ? "flow 3s linear infinite" : "none"
            }}
          />
        </svg>

        {/* Timeline Points */}
        <div className="absolute inset-0 z-[7]">
          {timelinePoints.map((point, i) => (
            <div
              key={i}
              className={cn(
                "absolute rounded-full transition-all duration-500 ease-in-out",
                hovered ? "animate-bounce" : ""
              )}
              style={{
                left: point.x - point.size / 2,
                top: point.y - point.size / 2,
                width: hovered ? point.size * 1.8 : point.size,
                height: hovered ? point.size * 1.8 : point.size,
                backgroundColor: i === 3 ? mainColor : secondaryColor,
                transitionDelay: `${i * 80}ms`,
              }}
            />
          ))}
        </div>

        {/* Labels */}
        <div className="absolute inset-0 z-[8]">
          {timelinePoints.map((point, i) => (
            <div
              key={i}
              className={cn(
                "absolute text-xs font-medium transition-all duration-500 ease-in-out",
                hovered ? "opacity-100" : "opacity-60"
              )}
              style={{
                left: point.x - 15,
                top: point.y + 15,
                color: i === 3 ? mainColor : secondaryColor,
                transitionDelay: `${i * 80}ms`,
              }}
            >
              {point.label}
            </div>
          ))}
        </div>

        <EllipseGradient color={mainColor} />
        <GridLayer color={gridColor} />
      </div>
    </>
  )
}

// Main Component
export default function DashboardPage() {
  const cards = [
    {
      visual: <AnalyticsVisual />,
      title: "Analytics Dashboard",
      description: "Interactive data visualization with real-time progress tracking and technology stack overview."
    },
    {
      visual: <WaveVisual />,
      title: "Wave Dynamics",
      description: "Fluid wave animations with floating particles that respond to user interaction."
    },
    {
      visual: <GeometricVisual />,
      title: "Geometric Morphing",
      description: "Shape transformation animations with rotating elements and geometric patterns."
    },
    {
      visual: <NetworkVisual />,
      title: "Network Graph",
      description: "Dynamic network visualization showing connected nodes with interactive animations."
    },
    {
      visual: <DataFlowVisual />,
      title: "Data Flow",
      description: "Real-time data streams with flowing analytics and interactive data points visualization."
    },
    {
      visual: <TimelineVisual />,
      title: "Timeline Analysis",
      description: "Historical trend analysis with interactive timeline points and predictive insights."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-black text-white">
      {/* Header Section */}
      <div className="max-w-5xl mx-auto px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
            Dashboard Interactivo
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Explora los diferentes tipos de dashboard disponibles en QSP Analytics. Cada uno está diseñado para 
            proporcionar insights únicos sobre el comercio exterior y la toma de decisiones estratégicas.
          </p>
        </div>



        {/* Interactive Cards Section */}
        <div className="max-w-7xl mx-auto px-16">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary-400">
            Demostración Interactiva
          </h2>
          <p className="text-center text-gray-400 mb-20 max-w-3xl mx-auto">
            Pasa el cursor sobre cada tarjeta para ver las animaciones y entender mejor cómo funcionan 
            los diferentes tipos de visualización en nuestros dashboards.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-16 place-items-center justify-items-center mx-auto max-w-7xl">
            {cards.map((card, index) => (
              <AnimatedCard key={index} className="w-[320px] mx-4 my-4">
                <CardVisual className="h-[160px] w-[320px]">
                  {card.visual}
                </CardVisual>
                <CardBody>
                  <CardTitle>{card.title}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </CardBody>
              </AnimatedCard>
            ))}
          </div>
          
          {/* Spacing after cards */}
          <div className="h-20"></div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-600/20 to-primary-800/20 p-8 rounded-2xl border border-primary-500/30">
            <h3 className="text-2xl font-bold mb-4 text-primary-300">
              ¿Listo para explorar tu dashboard personalizado?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Cada dashboard se adapta a tus necesidades específicas y te proporciona la información 
              que necesitas para tomar decisiones informadas en el comercio exterior.
            </p>
            <a 
              href="/precios"
              className="inline-block px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-500/25"
            >
              Ver planes
            </a>
          </div>
        </div>

        {/* Context Section - Moved below CTA */}
        <div className="max-w-5xl mx-auto mt-16 p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
          <h2 className="text-3xl font-bold mb-6 text-primary-400">Tipos de Dashboard Disponibles</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary-300">📊 Dashboard Analítico</h3>
              <p className="text-gray-300 mb-4">
                Monitoreo en tiempo real de métricas clave de comercio exterior, incluyendo:
              </p>
              <ul className="text-gray-400 space-y-2 ml-4">
                <li>• Volúmenes de exportación por región</li>
                <li>• Tendencias de precios y demanda</li>
                <li>• Análisis de competencia</li>
                <li>• Indicadores de rendimiento</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary-300">🌊 Dashboard de Tendencias</h3>
              <p className="text-gray-300 mb-4">
                Visualización dinámica de patrones y flujos del mercado:
              </p>
              <ul className="text-gray-400 space-y-2 ml-4">
                <li>• Análisis de ondas de demanda</li>
                <li>• Predicciones estacionales</li>
                <li>• Cambios en preferencias del mercado</li>
                <li>• Alertas de oportunidades</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary-300">🔷 Dashboard Geométrico</h3>
              <p className="text-gray-300 mb-4">
                Representación estructural de datos complejos:
              </p>
              <ul className="text-gray-400 space-y-2 ml-4">
                <li>• Mapeo de relaciones comerciales</li>
                <li>• Análisis de clusters de mercado</li>
                <li>• Patrones de distribución geográfica</li>
                <li>• Segmentación de clientes</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary-300">🌐 Dashboard de Redes</h3>
              <p className="text-gray-300 mb-4">
                Análisis de conexiones y flujos comerciales:
              </p>
              <ul className="text-gray-400 space-y-2 ml-4">
                <li>• Mapeo de cadenas de suministro</li>
                <li>• Análisis de socios comerciales</li>
                <li>• Flujos de capital y mercancías</li>
                <li>• Identificación de cuellos de botella</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
