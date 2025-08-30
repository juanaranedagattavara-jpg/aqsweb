// Configuración del CMS (Sanity)
export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
}

// Funciones de consulta
export const createClient = () => {
  // Aquí iría la lógica para crear el cliente de Sanity
  // Por ahora es un placeholder
  return {
    fetch: async (query: string) => {
      // Implementar lógica de fetch
      return []
    }
  }
}

// Tipos de contenido
export interface Post {
  _id: string
  title: string
  slug: string
  excerpt: string
  content: any
  publishedAt: string
  author: {
    name: string
    image: string
  }
}

export interface Case {
  _id: string
  title: string
  slug: string
  description: string
  client: string
  services: string[]
  results: string[]
  images: string[]
}
