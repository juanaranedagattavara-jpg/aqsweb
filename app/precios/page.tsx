'use client';

import { useState } from 'react';
import { Check, Star, ArrowRight, Zap, Shield, Users, BarChart3 } from 'lucide-react';

interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  icon: React.ReactNode;
}

export default function PreciosPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const plans: PricingPlan[] = [
    {
      id: 'basic',
      name: 'Básico',
      price: billingPeriod === 'monthly' ? 29 : 290,
      period: billingPeriod === 'monthly' ? 'mes' : 'año',
      description: 'Perfecto para pequeñas empresas que comienzan',
      icon: <BarChart3 className="w-6 h-6" />,
      features: [
        '4 dashboards básicos',
        'Datos de los últimos 6 meses',
        'Soporte por email',
        'Exportaciones en PDF',
        'Acceso web y móvil',
        'Actualizaciones mensuales'
      ]
    },
    {
      id: 'pro',
      name: 'Profesional',
      price: billingPeriod === 'monthly' ? 79 : 790,
      period: billingPeriod === 'monthly' ? 'mes' : 'año',
      description: 'Ideal para empresas en crecimiento',
      icon: <Zap className="w-6 h-6" />,
      popular: true,
      features: [
        '8 dashboards avanzados',
        'Datos de los últimos 2 años',
        'Soporte prioritario',
        'Exportaciones en Excel y PDF',
        'API básica',
        'Alertas personalizadas',
        'Análisis comparativo',
        'Actualizaciones semanales'
      ]
    },
    {
      id: 'premium',
      name: 'Premium',
      price: billingPeriod === 'monthly' ? 199 : 1990,
      period: billingPeriod === 'monthly' ? 'mes' : 'año',
      description: 'Para grandes empresas con necesidades complejas',
      icon: <Shield className="w-6 h-6" />,
      features: [
        '16 dashboards completos',
        'Datos históricos completos',
        'Soporte 24/7',
        'API completa',
        'Integraciones personalizadas',
        'Consultoría incluida',
        'Reportes personalizados',
        'Actualizaciones en tiempo real',
        'Múltiples usuarios',
        'White-label disponible'
      ]
    }
  ];

  const handlePlanSelect = (planId: string) => {
    // TODO: Implementar lógica de selección de plan
    console.log('Plan seleccionado:', planId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">
              Planes de Precios Transparentes
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Elige el plan que mejor se adapte a tus necesidades. Todos incluyen acceso completo a nuestra plataforma 
              de análisis de comercio exterior con diferentes niveles de funcionalidad.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-sm font-medium ${billingPeriod === 'monthly' ? 'text-slate-900' : 'text-slate-500'}`}>
                Mensual
              </span>
              <button
                onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  billingPeriod === 'yearly' ? 'bg-indigo-600' : 'bg-slate-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingPeriod === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm font-medium ${billingPeriod === 'yearly' ? 'text-slate-900' : 'text-slate-500'}`}>
                Anual
                <span className="ml-1 text-xs text-indigo-600 font-semibold">(Ahorra 20%)</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white rounded-2xl shadow-xl p-8 ${
                  plan.popular ? 'ring-2 ring-indigo-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      Más Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className="mx-auto w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-4">
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-slate-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-slate-900">${plan.price}</span>
                    <span className="text-slate-500">/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handlePlanSelect(plan.id)}
                  className={`w-full py-4 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  {plan.popular ? 'Comenzar Ahora' : 'Seleccionar Plan'}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-slate-600">
              Resolvemos las dudas más comunes sobre nuestros planes y servicios
            </p>
          </div>

          <div className="space-y-8">
            <div className="border-b border-slate-200 pb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                ¿Puedo cambiar de plan en cualquier momento?
              </h3>
              <p className="text-slate-600">
                Sí, puedes cambiar de plan en cualquier momento. Los cambios se aplicarán en tu próxima facturación 
                y se ajustará el precio proporcionalmente.
              </p>
            </div>

            <div className="border-b border-slate-200 pb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                ¿Ofrecen período de prueba gratuito?
              </h3>
              <p className="text-slate-600">
                Sí, ofrecemos un período de prueba gratuito de 14 días para todos nuestros planes. 
                No se requiere tarjeta de crédito para comenzar.
              </p>
            </div>

            <div className="border-b border-slate-200 pb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                ¿Qué métodos de pago aceptan?
              </h3>
              <p className="text-slate-600">
                Aceptamos todas las tarjetas de crédito principales (Visa, MasterCard, American Express) 
                y transferencias bancarias para planes anuales.
              </p>
            </div>

            <div className="border-b border-slate-200 pb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                ¿Puedo cancelar mi suscripción?
              </h3>
              <p className="text-slate-600">
                Sí, puedes cancelar tu suscripción en cualquier momento desde tu panel de control. 
                Tendrás acceso hasta el final del período facturado.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Necesitas un Plan Personalizado?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Contáctanos para discutir tus necesidades específicas y crear un plan a medida
          </p>
          <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-colors flex items-center gap-2 mx-auto">
            Contactar Ventas
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
