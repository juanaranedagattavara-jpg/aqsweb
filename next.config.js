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
        poll: 2000,
        aggregateTimeout: 500,
        ignored: ['**/node_modules', '**/.git', '**/.next'],
      }
    }
    
    // Deshabilitar caché problemático
    config.cache = false
    
    return config
  },
  
  // Deshabilitar caché de entrada
  onDemandEntries: {
    maxInactiveAge: 10 * 1000,
    pagesBufferLength: 1,
  },
  
  // Configuración de compilación
  swcMinify: true,
  
  // Deshabilitar optimizaciones problemáticas
  compress: false,
  
  // Configuración de archivos estáticos
  trailingSlash: false,
  
  // Configuración de imágenes
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
