'use client';

import { useState } from 'react';
import { useAuth } from '@/store/useAuth';
import { PLAN_NAME, PLAN_PRICES, PLAN_FEATURES, PLAN_LIMIT, PlanId } from '@/lib/plans';
import { DASHBOARDS } from '@/lib/dashboards';
import { Crown, Check, ArrowRight, CreditCard, Calendar, Users, Zap } from 'lucide-react';

export default function AccountPage() {
  const { user, upgradePlan } = useAuth();
  const [isUpgrading, setIsUpgrading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PlanId | null>(null);

  const currentPlan = user?.plan || 'basic';
  const availableDashboards = DASHBOARDS.filter((_, index) => 
    index < PLAN_LIMIT[currentPlan]
  );
  const lockedDashboards = DASHBOARDS.filter((_, index) => 
    index >= PLAN_LIMIT[currentPlan]
  );

  const handleUpgrade = async (newPlan: PlanId) => {
    if (newPlan === currentPlan) return;
    
    setIsUpgrading(true);
    
    // Simular proceso de upgrade
    setTimeout(() => {
      upgradePlan(newPlan);
      setIsUpgrading(false);
      setSelectedPlan(null);
      
      // TODO: Integrar con Stripe para procesamiento real de pagos
      alert(`Plan actualizado a ${PLAN_NAME[newPlan]}. En una implementación real, esto se procesaría a través de Stripe.`);
    }, 2000);
  };

  const plans: PlanId[] = ['basic', 'pro', 'premium'];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Mi Cuenta</h1>
        <p className="text-slate-300">
          Gestiona tu suscripción y configuración de cuenta
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Current Plan */}
        <div className="lg:col-span-2">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Plan Actual</h2>
                <p className="text-slate-300">
                  Estás en el plan {PLAN_NAME[currentPlan]}
                </p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-white">
                  ${PLAN_PRICES[currentPlan]}
                  <span className="text-lg text-slate-400">/mes</span>
                </div>
                <div className="text-sm text-slate-400">
                  Próxima facturación: {new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('es-ES')}
                </div>
              </div>
            </div>

            {/* Plan Features */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Características del Plan</h3>
              <ul className="space-y-2">
                {PLAN_FEATURES[currentPlan].map((feature, index) => (
                  <li key={index} className="flex items-center text-slate-300">
                    <Check className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Usage Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-700 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-400">
                  {availableDashboards.length}
                </div>
                <div className="text-slate-400 text-sm">Dashboards Disponibles</div>
              </div>
              <div className="bg-slate-700 rounded-lg p-4">
                <div className="text-2xl font-bold text-red-400">
                  {lockedDashboards.length}
                </div>
                <div className="text-slate-400 text-sm">Dashboards Bloqueados</div>
              </div>
            </div>
          </div>

          {/* Available Dashboards */}
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-semibold text-white mb-4">Dashboards Disponibles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {availableDashboards.map((dashboard) => (
                <div key={dashboard.code} className="flex items-center space-x-3 p-3 bg-slate-700 rounded-lg">
                  <span className="text-2xl">{dashboard.icon}</span>
                  <div className="flex-1">
                    <h4 className="font-medium text-white">{dashboard.title}</h4>
                    <p className="text-sm text-slate-400">{dashboard.category}</p>
                  </div>
                  <span className="text-green-400 text-sm">✓ Disponible</span>
                </div>
              ))}
            </div>
          </div>

          {/* Locked Dashboards */}
          {lockedDashboards.length > 0 && (
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Dashboards Bloqueados</h3>
              <p className="text-slate-300 mb-4">
                Actualiza tu plan para acceder a estos dashboards adicionales
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {lockedDashboards.slice(0, 6).map((dashboard) => (
                  <div key={dashboard.code} className="flex items-center space-x-3 p-3 bg-slate-700 rounded-lg opacity-60">
                    <span className="text-2xl">{dashboard.icon}</span>
                    <div className="flex-1">
                      <h4 className="font-medium text-white">{dashboard.title}</h4>
                      <p className="text-sm text-slate-400">{dashboard.category}</p>
                    </div>
                    <span className="text-red-400 text-sm">🔒 Bloqueado</span>
                  </div>
                ))}
              </div>
              {lockedDashboards.length > 6 && (
                <p className="text-slate-400 text-sm mt-4 text-center">
                  Y {lockedDashboards.length - 6} dashboard{lockedDashboards.length - 6 > 1 ? 's' : ''} más...
                </p>
              )}
            </div>
          )}
        </div>

        {/* Upgrade Options */}
        <div className="space-y-6">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Actualizar Plan</h3>
            <p className="text-slate-300 mb-6">
              Desbloquea más dashboards y características avanzadas
            </p>
            
            <div className="space-y-4">
              {plans.map((plan) => {
                const isCurrentPlan = plan === currentPlan;
                const isUpgrade = plan !== currentPlan;
                
                return (
                  <div
                    key={plan}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      isCurrentPlan
                        ? 'border-green-500 bg-green-500/10'
                        : 'border-slate-600 bg-slate-700 hover:border-slate-500'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-white">{PLAN_NAME[plan]}</h4>
                      {isCurrentPlan && (
                        <span className="text-green-400 text-sm">Plan Actual</span>
                      )}
                    </div>
                    
                    <div className="text-2xl font-bold text-white mb-2">
                      ${PLAN_PRICES[plan]}
                      <span className="text-sm text-slate-400">/mes</span>
                    </div>
                    
                    <p className="text-sm text-slate-300 mb-3">
                      {PLAN_LIMIT[plan]} dashboard{PLAN_LIMIT[plan] > 1 ? 's' : ''}
                    </p>
                    
                    {isUpgrade && (
                      <button
                        onClick={() => handleUpgrade(plan)}
                        disabled={isUpgrading}
                        className="btn-primary w-full text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isUpgrading ? 'Actualizando...' : 'Actualizar'}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Account Info */}
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Información de Cuenta</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-slate-400" />
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="text-white">{user?.email}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-slate-400" />
                <div>
                  <p className="text-sm text-slate-400">Miembro desde</p>
                  <p className="text-white">
                    {new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toLocaleDateString('es-ES')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Zap className="h-5 w-5 text-slate-400" />
                <div>
                  <p className="text-sm text-slate-400">Estado</p>
                  <p className="text-green-400">Activo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Billing */}
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Facturación</h3>
            
            <div className="space-y-4">
              <button className="btn-outline w-full flex items-center justify-center space-x-2">
                <CreditCard className="h-4 w-4" />
                <span>Gestionar Método de Pago</span>
              </button>
              
              <button className="btn-outline w-full flex items-center justify-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>Ver Historial de Facturas</span>
              </button>
              
              <button className="btn-outline w-full flex items-center justify-center space-x-2 text-red-400 hover:text-red-300 hover:border-red-400">
                <span>Cancelar Suscripción</span>
              </button>
            </div>
            
            <div className="mt-4 text-xs text-slate-500 text-center">
              <p>
                Al cancelar, perderás acceso a todos los dashboards al final del período facturado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
