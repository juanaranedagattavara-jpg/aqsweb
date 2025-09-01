'use client';

import { useState } from 'react';
import { useAuth } from '@/store/useAuth';
import { PLAN_NAME, PLAN_PRICES, PLAN_FEATURES, PLAN_LIMIT, PlanId } from '@/lib/plans';
import { DASHBOARDS } from '@/lib/dashboards';
import { getDashboardAccess } from '@/lib/access';
import { Check, Crown, Zap, Shield, ArrowRight, CreditCard } from 'lucide-react';

export default function AccountPage() {
  const { user, upgradePlan } = useAuth();
  const [isUpgrading, setIsUpgrading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PlanId | null>(null);

  if (!user) return null;

  const currentPlan = user.plan;
  const availableDashboards = DASHBOARDS.filter((_, index) => 
    getDashboardAccess(DASHBOARDS[index], index + 1, currentPlan).status === 'available'
  );
  
  const lockedDashboards = DASHBOARDS.filter((_, index) => 
    getDashboardAccess(DASHBOARDS[index], index + 1, currentPlan).status === 'locked'
  );

  const handleUpgrade = async (newPlan: PlanId) => {
    setIsUpgrading(true);
    setSelectedPlan(newPlan);
    
    // Simulate upgrade process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    upgradePlan(newPlan);
    setIsUpgrading(false);
    setSelectedPlan(null);
  };

  const getPlanIcon = (plan: PlanId) => {
    switch (plan) {
      case 'basic':
        return <Shield className="w-6 h-6" />;
      case 'pro':
        return <Zap className="w-6 h-6" />;
      case 'premium':
        return <Crown className="w-6 h-6" />;
      default:
        return <Shield className="w-6 h-6" />;
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Mi Cuenta
        </h1>
        <p className="text-slate-600">
          Gestiona tu plan y accede a tus dashboards
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Current Plan */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-slate-900">
            Plan Actual
          </h2>
          
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                {getPlanIcon(currentPlan)}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {PLAN_NAME[currentPlan]}
                </h3>
                <p className="text-slate-600">
                  ${PLAN_PRICES[currentPlan]}/mes
                </p>
              </div>
            </div>
            
            <ul className="space-y-3 mb-6">
              {PLAN_FEATURES[currentPlan].map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-slate-700">
                  <Check className="w-5 h-5 text-green-500" />
                  {feature}
                </li>
              ))}
            </ul>
            
            <div className="bg-slate-50 rounded-lg p-4">
              <p className="text-sm text-slate-600">
                Acceso a <strong>{PLAN_LIMIT[currentPlan]} dashboards</strong> de los {DASHBOARDS.length} disponibles
              </p>
            </div>
          </div>
        </div>

        {/* Dashboard Access */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-slate-900">
            Acceso a Dashboards
          </h2>
          
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-1">
                  {availableDashboards.length}
                </div>
                <div className="text-sm text-green-700">Disponibles</div>
              </div>
              
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-2xl font-bold text-red-600 mb-1">
                  {lockedDashboards.length}
                </div>
                <div className="text-sm text-red-700">Bloqueados</div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium text-slate-900">Dashboards Disponibles:</h4>
              <div className="grid grid-cols-2 gap-2">
                {availableDashboards.slice(0, 6).map((dashboard) => (
                  <div key={dashboard.code} className="flex items-center gap-2 text-sm text-slate-600">
                    <span>{dashboard.icon}</span>
                    <span className="truncate">{dashboard.title}</span>
                  </div>
                ))}
                {availableDashboards.length > 6 && (
                  <div className="text-sm text-slate-500">
                    +{availableDashboards.length - 6} más...
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upgrade Options */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-slate-900 mb-6">
          Actualizar Plan
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {(['basic', 'pro', 'premium'] as PlanId[]).map((plan) => {
            if (plan === currentPlan) return null;
            
            return (
              <div
                key={plan}
                className={`bg-white rounded-xl shadow-sm border-2 p-6 ${
                  plan === 'premium' 
                    ? 'border-indigo-500 bg-indigo-50' 
                    : 'border-slate-200'
                }`}
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    plan === 'premium' ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {getPlanIcon(plan)}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {PLAN_NAME[plan]}
                  </h3>
                  <div className="text-3xl font-bold text-slate-900">
                    ${PLAN_PRICES[plan]}
                    <span className="text-lg text-slate-500">/mes</span>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {PLAN_FEATURES[plan].slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="w-4 h-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => handleUpgrade(plan)}
                  disabled={isUpgrading && selectedPlan === plan}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 ${
                    plan === 'premium'
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  } disabled:opacity-50`}
                >
                  {isUpgrading && selectedPlan === plan ? (
                    'Actualizando...'
                  ) : (
                    <>
                      Actualizar a {PLAN_NAME[plan]}
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Billing Info */}
      <div className="mt-12 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h2 className="text-2xl font-semibold text-slate-900 mb-6">
          Información de Facturación
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-slate-900 mb-3">Método de Pago</h4>
            <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
              <CreditCard className="w-6 h-6 text-slate-600" />
              <span className="text-slate-600">Tarjeta terminada en ****1234</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-slate-900 mb-3">Próxima Facturación</h4>
            <div className="p-4 bg-slate-50 rounded-lg">
              <p className="text-slate-600">
                <strong>15 de Enero, 2025</strong><br />
                ${PLAN_PRICES[currentPlan]} - Plan {PLAN_NAME[currentPlan]}
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-slate-500">
            Para cambios en tu plan o facturación, contacta a nuestro equipo de soporte
          </p>
        </div>
      </div>
    </div>
  );
}
