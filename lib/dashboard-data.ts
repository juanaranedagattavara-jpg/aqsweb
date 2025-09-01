export interface DashboardCard {
  id: string
  title: string
  description: string
  type: string
  color: string
  features: string[]
}

export const dashboardCards: DashboardCard[] = [
  {
    id: '1',
    title: 'Análisis de Comercio',
    description: 'Dashboard completo para análisis de importaciones y exportaciones',
    type: 'analitico',
    color: 'from-blue-500/20 to-purple-500/20',
    features: ['Métricas en tiempo real', 'Tendencias históricas', 'Análisis por país']
  },
  {
    id: '2',
    title: 'Tendencias de Mercado',
    description: 'Identifica patrones y tendencias emergentes en el mercado',
    type: 'tendencias',
    color: 'from-cyan-500/20 to-blue-500/20',
    features: ['Predicciones de demanda', 'Análisis estacional', 'Indicadores clave']
  },
  {
    id: '3',
    title: 'Análisis Geométrico',
    description: 'Visualización avanzada de datos geoespaciales',
    type: 'geometrico',
    color: 'from-orange-500/20 to-red-500/20',
    features: ['Mapas interactivos', 'Clusters geográficos', 'Análisis de rutas']
  },
  {
    id: '4',
    title: 'Redes de Comercio',
    description: 'Análisis de conexiones y relaciones comerciales',
    type: 'redes',
    color: 'from-green-500/20 to-blue-500/20',
    features: ['Grafos de relaciones', 'Análisis de influencia', 'Patrones de conexión']
  },
  {
    id: '5',
    title: 'Mercado Global',
    description: 'Visión completa del mercado internacional',
    type: 'mercado',
    color: 'from-red-500/20 to-orange-500/20',
    features: ['Indicadores globales', 'Comparativas por región', 'Análisis de competencia']
  },
  {
    id: '6',
    title: 'Competencia',
    description: 'Análisis detallado de la competencia directa',
    type: 'competencia',
    color: 'from-teal-500/20 to-purple-500/20',
    features: ['Benchmarking', 'Análisis de precios', 'Posicionamiento']
  }
]
