export type Dashboard = { 
  code: string; 
  title: string; 
  description: string;
  icon: string;
  soon?: boolean;
  category: string;
};

export const DASHBOARDS: Dashboard[] = [
  { 
    code: 'd01', 
    title: 'Visión general',
    description: 'Métricas clave y KPIs del comercio exterior',
    icon: '📊',
    category: 'Analytics'
  },
  { 
    code: 'd02', 
    title: 'Top importadores',
    description: 'Ranking de los principales importadores por volumen',
    icon: '📈',
    category: 'Rankings'
  },
  { 
    code: 'd03', 
    title: 'Top exportadores',
    description: 'Ranking de los principales exportadores por volumen',
    icon: '📉',
    category: 'Rankings'
  },
  { 
    code: 'd04', 
    title: 'Tendencias de precios',
    description: 'Análisis de evolución de precios por producto',
    icon: '💰',
    category: 'Pricing'
  },
  { 
    code: 'd05', 
    title: 'Riesgo de suministro',
    description: 'Evaluación de riesgos en la cadena de suministro',
    icon: '⚠️',
    category: 'Risk'
  },
  { 
    code: 'd06', 
    title: 'Señales de demanda',
    description: 'Indicadores de demanda futura por mercado',
    icon: '🔮',
    category: 'Forecasting'
  },
  { 
    code: 'd07', 
    title: 'Costos logísticos',
    description: 'Análisis de costos de transporte y logística',
    icon: '🚢',
    category: 'Logistics'
  },
  { 
    code: 'd08', 
    title: 'Competencia directa',
    description: 'Análisis de competidores y posicionamiento',
    icon: '⚔️',
    category: 'Competition'
  },
  { 
    code: 'd09', 
    title: 'Participación por país',
    description: 'Market share por país y región',
    icon: '🌍',
    category: 'Geography'
  },
  { 
    code: 'd10', 
    title: 'Impacto cambiario',
    description: 'Análisis del impacto de fluctuaciones cambiarias',
    icon: '💱',
    category: 'Finance'
  },
  { 
    code: 'd11', 
    title: 'Regulatorio y aranceles',
    description: 'Cambios regulatorios y estructura arancelaria',
    icon: '⚖️',
    category: 'Regulatory'
  },
  { 
    code: 'd12', 
    title: 'Calidad de datos',
    description: 'Métricas de calidad y confiabilidad de datos',
    icon: '✅',
    category: 'Data Quality'
  },
  { 
    code: 'd13', 
    title: 'Forecast volúmenes',
    description: 'Predicciones de volúmenes de comercio',
    icon: '📋',
    category: 'Forecasting'
  },
  { 
    code: 'd14', 
    title: 'Alertas y umbrales',
    description: 'Sistema de alertas y notificaciones',
    icon: '🔔',
    category: 'Alerts'
  },
  { 
    code: 'd15', 
    title: 'Benchmarks HS Code',
    description: 'Comparativas por código arancelario',
    icon: '🏷️',
    category: 'Benchmarks'
  },
  { 
    code: 'd16', 
    title: 'IA Insights',
    description: 'Análisis avanzado con inteligencia artificial',
    icon: '🤖',
    category: 'AI',
    soon: true
  }
];
