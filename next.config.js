/** @type {import('next').NextConfig} */
const nextConfig = {
  // Deshabilitar características problemáticas en Windows
  experimental: {
    outputFileTracingRoot: undefined,
    serverComponentsExternalPackages: [],
  },
  
  // Configuración webpack optimizada para Windows
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.watchOptions = {
        poll: 3000,
        aggregateTimeout: 1000,
        ignored: ['**/node_modules', '**/.git', '**/.next', '**/dist'],
      }
    }
    
    // Deshabilitar caché problemático
    config.cache = false
    
    // Configuración específica para Windows
    config.optimization = {
      ...config.optimization,
      removeAvailableModules: false,
      removeEmptyChunks: false,
    }
    
    return config
  },
  
  // Deshabilitar caché de entrada
  onDemandEntries: {
    maxInactiveAge: 5 * 1000,
    pagesBufferLength: 1,
  },
  
  // Configuración de compilación
  swcMinify: false, // Deshabilitar para evitar problemas en Windows
  
  // Deshabilitar optimizaciones problemáticas
  compress: false,
  
  // Configuración de archivos estáticos
  trailingSlash: false,
  
  // Configuración de imágenes
  images: {
    unoptimized: true,
    domains: ['localhost'],
  },
  
  // Configuración específica para desarrollo
  devIndicators: {
    buildActivity: false,
    buildActivityPosition: 'bottom-right',
  },
  
  // Configuración de archivos estáticos
  staticPageGenerationTimeout: 120,
  
  // Deshabilitar telemetría
  telemetry: false,
}

module.exports = nextConfig
