// Configuración del CMS (Sanity) o fallback a Contentlayer
export const cmsConfig = {
  type: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ? 'sanity' : 'contentlayer',
  sanity: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
    useCdn: process.env.NODE_ENV === 'production',
  },
}

// Funciones de consulta para Sanity
export const createSanityClient = () => {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    throw new Error('Sanity no está configurado')
  }

  // Aquí iría la lógica para crear el cliente de Sanity
  // Por ahora es un placeholder
  return {
    fetch: async (query: string) => {
      // Implementar lógica de fetch
      return []
    }
  }
}

// Funciones de consulta para Contentlayer
export const getContentlayerData = async () => {
  if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return null // Usar Sanity si está disponible
  }

  try {
    // Importar dinámicamente para evitar errores de build
    const { allPosts } = await import('contentlayer/generated')
    const { allCaseStudies } = await import('contentlayer/generated')
    
    return {
      posts: allPosts,
      caseStudies: allCaseStudies,
    }
  } catch (error) {
    console.warn('Contentlayer no está disponible:', error)
    return null
  }
}

// Tipos de contenido unificados
export interface Post {
  _id: string
  title: string
  slug: string
  excerpt?: string
  description: string
  content?: any
  body?: any
  publishedAt: string
  date: string
  author: string
  tags?: string[]
  image?: string
  mainImage?: string
  ogImage?: string
}

export interface CaseStudy {
  _id: string
  title: string
  slug: string
  description: string
  industry: string
  client: string
  challenge: string
  solution: string
  results: string[]
  kpis?: Array<{
    label: string
    value: string
    unit?: string
  }>
  quote?: string
  cover?: string
  image?: string
  publishedAt?: string
  date?: string
}

export interface Plan {
  _id: string
  name: string
  color: 'basic' | 'pro' | 'premium'
  monthly: number
  annual: number
  features: number[]
  limits?: {
    maxUsers?: number
    maxProjects?: number
    storageGB?: number
  }
  cta: 'get-started' | 'talk-to-sales'
  isPopular?: boolean
}

export interface Page {
  _id: string
  slug: string
  title: string
  hero?: {
    title: string
    subtitle: string
    cta?: any
  }
  blocks?: any[]
}

// Función para obtener datos del CMS activo
export const getCMSData = async () => {
  if (cmsConfig.type === 'sanity') {
    const client = createSanityClient()
    // Implementar consultas de Sanity
    return {
      posts: [],
      caseStudies: [],
      plans: [],
      pages: [],
    }
  } else {
    const contentlayerData = await getContentlayerData()
    if (contentlayerData) {
      return {
        posts: contentlayerData.posts,
        caseStudies: contentlayerData.caseStudies,
        plans: [], // Los planes se definen estáticamente
        pages: [], // Las páginas se definen estáticamente
      }
    }
    
    // Fallback a datos estáticos
    return {
      posts: [],
      caseStudies: [],
      plans: [],
      pages: [],
    }
  }
}

// Función para obtener un post por slug
export const getPostBySlug = async (slug: string): Promise<Post | null> => {
  const data = await getCMSData()
  return data.posts.find(post => post.slug === slug) || null
}

// Función para obtener un caso de estudio por slug
export const getCaseStudyBySlug = async (slug: string): Promise<CaseStudy | null> => {
  const data = await getCMSData()
  return data.caseStudies.find(caseStudy => caseStudy.slug === slug) || null
}

// Función para obtener todos los posts
export const getAllPosts = async (): Promise<Post[]> => {
  const data = await getCMSData()
  return data.posts.sort((a, b) => new Date(b.date || b.publishedAt).getTime() - new Date(a.date || a.publishedAt).getTime())
}

// Función para obtener todos los casos de estudio
export const getAllCaseStudies = async (): Promise<CaseStudy[]> => {
  const data = await getCMSData()
  return data.caseStudies.sort((a, b) => new Date(b.date || b.publishedAt || '').getTime() - new Date(a.date || a.publishedAt || '').getTime())
}

// Función para obtener todos los planes
export const getAllPlans = async (): Promise<Plan[]> => {
  const data = await getCMSData()
  if (data.plans.length > 0) {
    return data.plans
  }
  
  // Planes estáticos como fallback
  return [
    {
      _id: 'basic',
      name: 'Básico',
      color: 'basic' as const,
      monthly: 99,
      annual: 79,
      features: [1, 2, 3, 4, 5],
      limits: {
        maxUsers: 5,
        maxProjects: 3,
        storageGB: 10,
      },
      cta: 'get-started' as const,
      isPopular: false,
    },
    {
      _id: 'pro',
      name: 'Pro',
      color: 'pro' as const,
      monthly: 299,
      annual: 239,
      features: [1, 2, 3, 4, 5, 6, 7, 8],
      limits: {
        maxUsers: 20,
        maxProjects: 10,
        storageGB: 50,
      },
      cta: 'get-started' as const,
      isPopular: true,
    },
    {
      _id: 'premium',
      name: 'Premium',
      color: 'premium' as const,
      monthly: 599,
      annual: 479,
      features: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      limits: {
        maxUsers: 100,
        maxProjects: 50,
        storageGB: 500,
      },
      cta: 'talk-to-sales' as const,
      isPopular: false,
    },
  ]
}
