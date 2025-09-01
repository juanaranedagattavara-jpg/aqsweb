export interface BlogArticle {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  categorySlug: string
  date: string
  readTime: string
  author: string
  featured?: boolean
  tags: string[]
}

export interface BlogCategory {
  id: string
  name: string
  slug: string
  description: string
  icon: string
  articleCount: number
}

export const blogCategories: BlogCategory[] = [
  {
    id: 'tendencias',
    name: 'Tendencias',
    slug: 'tendencias',
    description: 'Últimas tendencias y novedades del comercio exterior',
    icon: 'TrendingUp',
    articleCount: 12
  },
  {
    id: 'analisis',
    name: 'Análisis',
    slug: 'analisis',
    description: 'Análisis profundos de mercados y estrategias',
    icon: 'BarChart3',
    articleCount: 8
  },
  {
    id: 'mercados',
    name: 'Mercados',
    slug: 'mercados',
    description: 'Exploración de mercados internacionales',
    icon: 'Globe',
    articleCount: 15
  },
  {
    id: 'casos-exito',
    name: 'Casos de Éxito',
    slug: 'casos-exito',
    description: 'Historias reales de empresas exitosas',
    icon: 'Users',
    articleCount: 6
  },
  {
    id: 'estrategias',
    name: 'Estrategias',
    slug: 'estrategias',
    description: 'Estrategias comerciales y tácticas de mercado',
    icon: 'Target',
    articleCount: 9
  },
  {
    id: 'tecnologia',
    name: 'Tecnología',
    slug: 'tecnologia',
    description: 'Innovación tecnológica en comercio exterior',
    icon: 'Zap',
    articleCount: 7
  }
]

export const blogArticles: BlogArticle[] = [
  {
    id: '1',
    slug: 'tendencias-2024',
    title: 'El Futuro del Comercio Exterior: Tendencias 2024',
    excerpt: 'Analizamos las principales tendencias que están transformando el comercio exterior global, desde la digitalización hasta los nuevos acuerdos comerciales y la sostenibilidad como factor clave.',
    content: 'Contenido completo del artículo...',
    category: 'Tendencias',
    categorySlug: 'tendencias',
    date: '15 de Enero, 2024',
    readTime: '8 min',
    author: 'QSP Analytics',
    featured: true,
    tags: ['tendencias', '2024', 'global', 'digitalización']
  },
  {
    id: '2',
    slug: 'mercados-emergentes-asia',
    title: 'Análisis de Mercados Emergentes en Asia',
    excerpt: 'Exploramos las oportunidades en mercados asiáticos y estrategias de entrada para empresas latinoamericanas.',
    content: 'Contenido completo del artículo...',
    category: 'Análisis',
    categorySlug: 'analisis',
    date: '12 de Enero, 2024',
    readTime: '6 min',
    author: 'María González',
    tags: ['asia', 'mercados emergentes', 'latinoamérica']
  },
  {
    id: '3',
    slug: 'digitalizacion-comercio-exterior',
    title: 'Digitalización del Comercio Exterior',
    excerpt: 'Cómo la tecnología está transformando los procesos de importación y exportación en América Latina.',
    content: 'Contenido completo del artículo...',
    category: 'Tendencias',
    categorySlug: 'tendencias',
    date: '10 de Enero, 2024',
    readTime: '7 min',
    author: 'Carlos Rodríguez',
    tags: ['digitalización', 'tecnología', 'américa latina']
  },
  {
    id: '4',
    slug: 'empresa-mexicana-europa',
    title: 'Empresa Mexicana Expande a Europa',
    excerpt: 'Historia de cómo una empresa mexicana logró expandirse exitosamente al mercado europeo.',
    content: 'Contenido completo del artículo...',
    category: 'Casos de Éxito',
    categorySlug: 'casos-exito',
    date: '8 de Enero, 2024',
    readTime: '5 min',
    author: 'Ana Martínez',
    tags: ['méxico', 'europa', 'expansión', 'caso éxito']
  },
  {
    id: '5',
    slug: 'acuerdos-comerciales',
    title: 'Impacto de los Acuerdos Comerciales',
    excerpt: 'Análisis del impacto de los nuevos acuerdos comerciales en la región latinoamericana.',
    content: 'Contenido completo del artículo...',
    category: 'Análisis',
    categorySlug: 'analisis',
    date: '5 de Enero, 2024',
    readTime: '9 min',
    author: 'Luis Fernández',
    tags: ['acuerdos comerciales', 'latinoamérica', 'política comercial']
  },
  {
    id: '6',
    slug: 'mercado-africano',
    title: 'Oportunidades en el Mercado Africano',
    excerpt: 'Descubre las oportunidades emergentes en mercados africanos para exportadores latinoamericanos.',
    content: 'Contenido completo del artículo...',
    category: 'Mercados',
    categorySlug: 'mercados',
    date: '3 de Enero, 2024',
    readTime: '8 min',
    author: 'Sofia Herrera',
    tags: ['áfrica', 'mercados emergentes', 'exportación']
  },
  {
    id: '7',
    slug: 'sostenibilidad-comercio',
    title: 'Sostenibilidad en el Comercio Global',
    excerpt: 'Cómo la sostenibilidad se está convirtiendo en un factor clave para el éxito comercial internacional.',
    content: 'Contenido completo del artículo...',
    category: 'Tendencias',
    categorySlug: 'tendencias',
    date: '1 de Enero, 2024',
    readTime: '6 min',
    author: 'Roberto Silva',
    tags: ['sostenibilidad', 'comercio global', 'medio ambiente']
  },
  {
    id: '8',
    slug: 'estrategias-exportacion',
    title: 'Estrategias de Exportación para Pymes',
    excerpt: 'Guía completa de estrategias de exportación adaptadas a las necesidades de las pequeñas y medianas empresas.',
    content: 'Contenido completo del artículo...',
    category: 'Estrategias',
    categorySlug: 'estrategias',
    date: '28 de Diciembre, 2023',
    readTime: '10 min',
    author: 'Carmen López',
    tags: ['pymes', 'exportación', 'estrategias', 'guía']
  },
  {
    id: '9',
    slug: 'blockchain-comercio',
    title: 'Blockchain en el Comercio Internacional',
    excerpt: 'Cómo la tecnología blockchain está revolucionando la trazabilidad y seguridad en el comercio exterior.',
    content: 'Contenido completo del artículo...',
    category: 'Tecnología',
    categorySlug: 'tecnologia',
    date: '25 de Diciembre, 2023',
    readTime: '7 min',
    author: 'Diego Morales',
    tags: ['blockchain', 'tecnología', 'trazabilidad', 'seguridad']
  },
  {
    id: '10',
    slug: 'mercado-chino',
    title: 'Navegando el Mercado Chino',
    excerpt: 'Estrategias y consideraciones para empresas latinoamericanas que buscan entrar al mercado chino.',
    content: 'Contenido completo del artículo...',
    category: 'Mercados',
    categorySlug: 'mercados',
    date: '22 de Diciembre, 2023',
    readTime: '9 min',
    author: 'Patricia Wong',
    tags: ['china', 'mercado chino', 'estrategias', 'latinoamérica']
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
