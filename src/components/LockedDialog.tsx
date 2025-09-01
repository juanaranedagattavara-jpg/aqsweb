'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { X, Crown, Check, ArrowRight } from 'lucide-react';
import { PlanId, PLAN_NAME, PLAN_PRICES, PLAN_FEATURES } from '@/lib/plans';
import { useAuth } from '@/store/useAuth';
import { useRouter } from 'next/navigation';

interface LockedDialogProps {
  isOpen: boolean;
  onClose: () => void;
  requiredPlan: PlanId;
  dashboardTitle: string;
}

export function LockedDialog({ isOpen, onClose, requiredPlan, dashboardTitle }: LockedDialogProps) {
  const { user, upgradePlan } = useAuth();
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<PlanId>(requiredPlan);

  const handleUpgrade = () => {
    // TODO: Integrar con Stripe para procesamiento real de pagos
    upgradePlan(selectedPlan);
    onClose();
    router.push('/app/account');
  };

  const plans: PlanId[] = ['basic', 'pro', 'premium'];

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-slate-800 p-6 text-left align-middle shadow-xl transition-all">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <Dialog.Title as="h3" className="text-2xl font-bold text-white">
                      Desbloquea {dashboardTitle}
                    </Dialog.Title>
                    <p className="text-slate-400 mt-2">
                      Actualiza tu plan para acceder a este dashboard y muchos más
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Plan Selection */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {plans.map((plan) => {
                    const isSelected = selectedPlan === plan;
                    const isCurrentPlan = user?.plan === plan;
                    const isUpgrade = user?.plan !== plan;
                    
                    return (
                      <div
                        key={plan}
                        className={`relative p-6 rounded-xl border-2 transition-all cursor-pointer ${
                          isSelected
                            ? 'border-indigo-500 bg-indigo-500/10'
                            : 'border-slate-600 bg-slate-700 hover:border-slate-500'
                        }`}
                        onClick={() => setSelectedPlan(plan)}
                      >
                        {isCurrentPlan && (
                          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                            <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                              Plan Actual
                            </span>
                          </div>
                        )}
                        
                        <div className="text-center">
                          <div className="flex items-center justify-center mb-4">
                            <Crown className={`h-8 w-8 ${isSelected ? 'text-indigo-400' : 'text-slate-400'}`} />
                          </div>
                          
                          <h4 className="text-xl font-bold text-white mb-2">
                            {PLAN_NAME[plan]}
                          </h4>
                          
                          <div className="text-3xl font-bold text-white mb-4">
                            ${PLAN_PRICES[plan]}
                            <span className="text-lg text-slate-400">/mes</span>
                          </div>
                          
                          <ul className="space-y-2 text-sm text-slate-300">
                            {PLAN_FEATURES[plan].map((feature, index) => (
                              <li key={index} className="flex items-center">
                                <Check className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {isUpgrade && (
                          <div className="mt-4 text-center">
                            <button
                              className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                                isSelected
                                  ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                                  : 'bg-slate-600 hover:bg-slate-500 text-white'
                              }`}
                            >
                              {isSelected ? 'Seleccionado' : 'Seleccionar'}
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <div className="text-slate-400">
                    <p className="text-sm">
                      Plan actual: <span className="text-white font-medium capitalize">{user?.plan}</span>
                    </p>
                  </div>
                  
                  <div className="flex space-x-4">
                    <button
                      onClick={onClose}
                      className="btn-outline"
                    >
                      Cancelar
                    </button>
                    
                    <button
                      onClick={handleUpgrade}
                      disabled={selectedPlan === user?.plan}
                      className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                    >
                      <span>Actualizar Plan</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Footer note */}
                <div className="mt-6 text-center text-xs text-slate-500">
                  <p>
                    Al actualizar tu plan, serás redirigido a nuestra plataforma de pagos segura.
                    <br />
                    Puedes cancelar tu suscripción en cualquier momento desde tu cuenta.
                  </p>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
