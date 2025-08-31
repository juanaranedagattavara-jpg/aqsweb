'use client'

import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Gradient background with grain effect */}
      <div className="flex flex-col items-end absolute -right-60 -top-10 blur-xl z-0">
        <div className="h-[10rem] rounded-full w-[60rem] z-1 bg-gradient-to-b blur-[6rem] from-accent to-accent-2"></div>
        <div className="h-[10rem] rounded-full w-[90rem] z-1 bg-gradient-to-b blur-[6rem] from-primary-800 to-warning"></div>
        <div className="h-[10rem] rounded-full w-[60rem] z-1 bg-gradient-to-b blur-[6rem] from-warning to-accent"></div>
      </div>
      <div className="absolute inset-0 z-0 bg-noise opacity-30"></div>

      {/* Content container */}
      <div className="relative z-10">
        {/* Badge */}
        <div className="mx-auto mt-6 flex max-w-fit items-center justify-center space-x-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
          <span className="text-sm font-medium text-white">
            ¡Únete a la revolución del analytics hoy!
          </span>
          <ArrowRight className="h-4 w-4 text-white" />
        </div>

        {/* Hero section */}
        <div className="container mx-auto mt-12 px-4 text-center">
          <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            Poder de análisis con claridad de dashboard
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            AQSWeb es una solución completa de dashboard que automatiza la recuperación de datos y ofrece opciones ilimitadas de presentación y distribución de dashboards, todo con el poder y la familiaridad de las herramientas de análisis modernas.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <button className="h-12 rounded-full bg-white px-8 text-base font-medium text-black hover:bg-white/90 transition-colors">
              Comenzar Prueba Gratuita de 7 Días
            </button>
            <button className="h-12 rounded-full border border-gray-600 px-8 text-base font-medium text-white hover:bg-white/10 transition-colors">
              Ver Demo
            </button>
          </div>

          <div className="relative mx-auto my-20 w-full max-w-6xl">
            <div className="absolute inset-0 rounded shadow-lg bg-white blur-[10rem] bg-grainy opacity-20" />

            {/* Hero Image */}
            <div className="relative w-full h-96 bg-gradient-to-br from-primary-800 to-primary-900 rounded-lg flex items-center justify-center shadow-md">
              <div className="text-center">
                <div className="w-24 h-24 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">Q</span>
                </div>
                <p className="text-white text-xl">Dashboard de Análisis AQSWeb</p>
                <p className="text-gray-300 text-sm mt-2">Imagen representativa del sistema</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
