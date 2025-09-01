export interface DashboardCard {
  id: string
  title: string
  description: string
  type: string
  features: string[]
  color: string
}

export const dashboardCards: DashboardCard[] = [
  {
    id: 'analitico',
    title: 'Dashboard Analítico',
    type: 'analitico',
    description: 'Monitoreo en tiempo real de métricas clave de comercio exterior con análisis profundo de datos y tendencias del mercado.',
    features: [
      'Volúmenes de exportación por región',
      'Tendencias de precios y demanda',
      'Análisis de competencia',
      'Indicadores de rendimiento'
    ],
    color: 'from-blue-500/20 to-blue-600/20'
  },
  {
    id: 'tendencias',
    title: 'Dashboard de Tendencias',
    type: 'tendencias',
    description: 'Visualización dinámica de patrones y flujos del mercado con predicciones estacionales y alertas de oportunidades.',
    features: [
      'Análisis de ondas de demanda',
      'Predicciones estacionales',
      'Cambios en preferencias del mercado',
      'Alertas de oportunidades'
    ],
    color: 'from-green-500/20 to-green-600/20'
  },
  {
    id: 'geometrico',
    title: 'Dashboard Geométrico',
    type: 'geometrico',
    description: 'Representación estructural de datos complejos con mapeo de relaciones comerciales y análisis de clusters.',
    features: [
      'Mapeo de relaciones comerciales',
      'Análisis de clusters de mercado',
      'Patrones de distribución geográfica',
      'Segmentación de clientes'
    ],
    color: 'from-purple-500/20 to-purple-600/20'
  },
  {
    id: 'redes',
    title: 'Dashboard de Redes',
    type: 'redes',
    description: 'Análisis de conexiones y flujos comerciales con mapeo de cadenas de suministro y socios comerciales.',
    features: [
      'Mapeo de cadenas de suministro',
      'Análisis de socios comerciales',
      'Flujos de capital y mercancías',
      'Identificación de cuellos de botella'
    ],
    color: 'from-orange-500/20 to-orange-600/20'
  },
  {
    id: 'mercado',
    title: 'Dashboard de Mercado',
    type: 'mercado',
    description: 'Análisis completo del mercado con métricas de participación, segmentación y oportunidades de crecimiento.',
    features: [
      'Market share por empresa',
      'Segmentación de mercados',
      'Análisis de productos',
      'Oportunidades de expansión'
    ]
  },
  {
    id: 'competencia',
    title: 'Dashboard de Competencia',
    type: 'competencia',
    description: 'Monitoreo inteligente de la competencia con análisis de posicionamiento y estrategias competitivas.',
    features: [
      'Análisis de posicionamiento',
      'Estrategias competitivas',
      'Benchmarking de rendimiento',
      'Alertas de movimientos'
    ]
  }
]
