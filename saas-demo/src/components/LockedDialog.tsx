'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { X, Lock, Check, ArrowRight } from 'lucide-react';
import { PLAN_NAME, PLAN_PRICES, PLAN_FEATURES, PlanId } from '@/lib/plans';
import { useRouter } from 'next/navigation';

interface LockedDialogProps {
  isOpen: boolean;
  onClose: () => void;
  requiredPlan: PlanId;
  dashboardTitle: string;
}

export function LockedDialog({ isOpen, onClose, requiredPlan, dashboardTitle }: LockedDialogProps) {
  const [isUpgrading, setIsUpgrading] = useState(false);
  const router = useRouter();

  const handleUpgrade = async () => {
    setIsUpgrading(true);
    
    // Simulate upgrade process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsUpgrading(false);
    onClose();
    
    // TODO: Implement real upgrade logic
    console.log('Upgrading to plan:', requiredPlan);
  };

  const handleGoToAccount = () => {
    onClose();
    router.push('/app/account');
  };

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
          <div className="fixed inset-0 bg-black bg-opacity-25" />
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
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      <Lock className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <Dialog.Title as="h3" className="text-lg font-semibold text-slate-900">
                        Dashboard Bloqueado
                      </Dialog.Title>
                      <p className="text-sm text-slate-600">
                        {dashboardTitle}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    className="text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="mb-6">
                  <p className="text-slate-600 mb-4">
                    Este dashboard requiere el plan <strong>{PLAN_NAME[requiredPlan]}</strong> o superior.
                  </p>
                  
                  <div className="bg-indigo-50 rounded-lg p-4">
                    <h4 className="font-medium text-indigo-900 mb-3">
                      Plan {PLAN_NAME[requiredPlan]} - ${PLAN_PRICES[requiredPlan]}/mes
                    </h4>
                    <ul className="space-y-2">
                      {PLAN_FEATURES[requiredPlan].map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-indigo-700">
                          <Check className="w-4 h-4" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={handleUpgrade}
                    disabled={isUpgrading}
                    className="btn-primary flex-1 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isUpgrading ? 'Actualizando...' : 'Actualizar Ahora'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  
                  <button
                    onClick={handleGoToAccount}
                    className="btn-outline flex-1"
                  >
                    Ver Mi Plan
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
