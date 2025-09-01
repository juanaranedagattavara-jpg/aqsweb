export interface BlogCategory {
  id: string
  name: string
  count: number
}

export interface BlogArticle {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  readTime: number
  image: string
  tags: string[]
}

export const blogCategories: BlogCategory[] = [
  { id: 'all', name: 'Todos', count: 12 },
  { id: 'analytics', name: 'Analytics', count: 4 },
  { id: 'trade', name: 'Comercio Exterior', count: 3 },
  { id: 'insights', name: 'Insights', count: 2 },
  { id: 'technology', name: 'Tecnología', count: 3 }
]

export const blogArticles: BlogArticle[] = [
  {
    id: '1',
    title: 'Cómo optimizar tu estrategia de exportación con datos',
    excerpt: 'Descubre las mejores prácticas para usar analytics en comercio exterior',
    content: 'Contenido completo del artículo...',
    author: 'Equipo QSP',
    date: '2024-01-15',
    category: 'trade',
    readTime: 5,
    image: '/images/blog/export-strategy.jpg',
    tags: ['exportación', 'estrategia', 'analytics']
  },
  {
    id: '2',
    title: 'Tendencias del mercado global en 2024',
    excerpt: 'Análisis de las principales tendencias que afectarán el comercio internacional',
    content: 'Contenido completo del artículo...',
    author: 'María González',
    date: '2024-01-10',
    category: 'insights',
    readTime: 8,
    image: '/images/blog/global-trends.jpg',
    tags: ['tendencias', 'mercado global', '2024']
  },
  {
    id: '3',
    title: 'Implementando IA en análisis de comercio exterior',
    excerpt: 'Guía práctica para integrar inteligencia artificial en tu análisis',
    content: 'Contenido completo del artículo...',
    author: 'Dr. Carlos Ruiz',
    date: '2024-01-05',
    category: 'technology',
    readTime: 10,
    image: '/images/blog/ai-trade.jpg',
    tags: ['IA', 'inteligencia artificial', 'comercio']
  }
]

// Función para obtener artículos por categoría
export const getArticlesByCategory = (categorySlug: string): BlogArticle[] => {
  if (categorySlug === 'todos') {
    return blogArticles
  }
  return blogArticles.filter(article => article.categorySlug === categorySlug)
}

// Función para obtener el artículo destacado
export const getFeaturedArticle = (): BlogArticle | undefined => {
  return blogArticles.find(article => article.featured)
}

// Función para obtener categoría por slug
export const getCategoryBySlug = (slug: string): BlogCategory | undefined => {
  return blogCategories.find(category => category.slug === slug)
}
