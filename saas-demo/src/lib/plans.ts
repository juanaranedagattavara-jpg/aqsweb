export type PlanId = 'basic' | 'pro' | 'premium';

export const PLAN_LIMIT: Record<PlanId, number> = {
  basic: 4,
  pro: 8,
  premium: 16
};

export const PLAN_NAME = {
  basic: 'Básico',
  pro: 'Pro',
  premium: 'Premium'
} as const;

export const PLAN_PRICES = {
  basic: 29,
  pro: 79,
  premium: 199
} as const;

export const PLAN_FEATURES = {
  basic: [
    '4 dashboards',
    'Datos básicos',
    'Soporte por email'
  ],
  pro: [
    '8 dashboards',
    'Datos avanzados',
    'Soporte prioritario',
    'Exportaciones'
  ],
  premium: [
    '16 dashboards',
    'Datos completos',
    'Soporte 24/7',
    'API access',
    'Personalización'
  ]
} as const;
