export type Dashboard = {
  code: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  soon?: boolean;
};

export const DASHBOARDS: Dashboard[] = [
  {
    code: 'd01',
    title: 'Visión General',
    description: 'Métricas clave y KPIs del comercio exterior',
    icon: '📊',
    category: 'Analytics'
  },
  {
    code: 'd02',
    title: 'Top Importadores',
    description: 'Ranking de los principales importadores por volumen',
    icon: '📈',
    category: 'Rankings'
  },
  {
    code: 'd03',
    title: 'Top Exportadores',
    description: 'Ranking de los principales exportadores por volumen',
    icon: '📉',
    category: 'Rankings'
  },
  {
    code: 'd04',
    title: 'Tendencias de Precios',
    description: 'Análisis de precios y fluctuaciones del mercado',
    icon: '💰',
    category: 'Precios'
  },
  {
    code: 'd05',
    title: 'Riesgo de Suministro',
    description: 'Evaluación de riesgos en la cadena de suministro',
    icon: '⚠️',
    category: 'Riesgos'
  },
  {
    code: 'd06',
    title: 'Señales de Demanda',
    description: 'Indicadores de demanda y oportunidades de mercado',
    icon: '🎯',
    category: 'Demanda'
  },
  {
    code: 'd07',
    title: 'Costos Logísticos',
    description: 'Análisis de costos de transporte y logística',
    icon: '🚢',
    category: 'Logística'
  },
  {
    code: 'd08',
    title: 'Competencia Directa',
    description: 'Análisis de competidores y posicionamiento',
    icon: '🏆',
    category: 'Competencia'
  },
  {
    code: 'd09',
    title: 'Participación por País',
    description: 'Distribución geográfica del comercio',
    icon: '🌍',
    category: 'Geografía'
  },
  {
    code: 'd10',
    title: 'Impacto Cambiario',
    description: 'Análisis del impacto de las fluctuaciones cambiarias',
    icon: '💱',
    category: 'Finanzas'
  },
  {
    code: 'd11',
    title: 'Regulatorio y Aranceles',
    description: 'Información sobre regulaciones y aranceles',
    icon: '📋',
    category: 'Regulaciones'
  },
  {
    code: 'd12',
    title: 'Calidad de Datos',
    description: 'Métricas de calidad y confiabilidad de datos',
    icon: '✅',
    category: 'Calidad'
  },
  {
    code: 'd13',
    title: 'Forecast Volúmenes',
    description: 'Predicciones de volúmenes de comercio',
    icon: '🔮',
    category: 'Predicciones'
  },
  {
    code: 'd14',
    title: 'Alertas y Umbrales',
    description: 'Sistema de alertas y notificaciones',
    icon: '🔔',
    category: 'Alertas'
  },
  {
    code: 'd15',
    title: 'Benchmarks HS Code',
    description: 'Comparativas por códigos arancelarios',
    icon: '🏷️',
    category: 'Benchmarks'
  },
  {
    code: 'd16',
    title: 'IA Insights',
    description: 'Análisis avanzado con inteligencia artificial',
    icon: '🤖',
    category: 'IA',
    soon: true
  }
];
