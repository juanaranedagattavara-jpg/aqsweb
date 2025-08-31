/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuraciones para Docker
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: undefined,
  },
  
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/webp', 'image/avif'],
  },
  
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ]
  },
  
  async redirects() {
    return [
      {
        source: '/login',
        destination: 'https://app.analyticsquietstorm.com',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
