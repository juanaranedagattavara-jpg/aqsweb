'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/store/useAuth';
import { PlanId, PLAN_NAME, PLAN_PRICES, PLAN_FEATURES, PLAN_LIMIT } from '@/lib/plans';
import { BarChart3, Check, ArrowRight, Crown } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [selectedPlan, setSelectedPlan] = useState<PlanId>('pro');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const plans: PlanId[] = ['basic', 'pro', 'premium'];

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) return;
    
    setIsLoading(true);
    
    // Simular delay de login
    setTimeout(() => {
      // TODO: Implementar autenticación real con backend
      const mockUser = {
        userId: `user_${Date.now()}`,
        email: email.trim(),
        plan: selectedPlan
      };
      
      login(mockUser);
      router.push('/app/dashboards');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-flex items-center space-x-2 mb-8">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">QSP Analytics</span>
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Comienza tu Prueba Gratuita
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Accede a dashboards especializados en comercio exterior. 
            Sin tarjeta de crédito, cancelación en cualquier momento.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Plan Selection */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Elige tu Plan</h2>
            
            <div className="space-y-4">
              {plans.map((plan) => {
                const isSelected = selectedPlan === plan;
                const isPopular = plan === 'pro';
                
                return (
                  <div
                    key={plan}
                    className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all ${
                      isSelected
                        ? 'border-indigo-500 bg-indigo-500/10'
                        : 'border-slate-600 bg-slate-800 hover:border-slate-500'
                    }`}
                    onClick={() => setSelectedPlan(plan)}
                  >
                    {isPopular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-indigo-500 text-white text-xs px-3 py-1 rounded-full">
                          Más Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <Crown className={`h-6 w-6 ${isSelected ? 'text-indigo-400' : 'text-slate-400'}`} />
                          <h3 className="text-xl font-semibold text-white">{PLAN_NAME[plan]}</h3>
                        </div>
                        
                        <div className="text-3xl font-bold text-white mb-3">
                          ${PLAN_PRICES[plan]}
                          <span className="text-lg text-slate-400">/mes</span>
                        </div>
                        
                        <p className="text-slate-300 mb-4">
                          Acceso a {PLAN_LIMIT[plan]} dashboard{PLAN_LIMIT[plan] > 1 ? 's' : ''}
                        </p>
                        
                        <ul className="space-y-2">
                          {PLAN_FEATURES[plan].map((feature, index) => (
                            <li key={index} className="flex items-center text-sm text-slate-300">
                              <Check className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {isSelected && (
                        <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Login Form */}
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Crea tu Cuenta</h2>
            
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Correo Electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="input w-full"
                  required
                />
              </div>
              
              <div className="bg-slate-700 rounded-lg p-4">
                <h4 className="font-medium text-white mb-2">Plan Seleccionado: {PLAN_NAME[selectedPlan]}</h4>
                <p className="text-sm text-slate-300">
                  Acceso a {PLAN_LIMIT[selectedPlan]} dashboard{PLAN_LIMIT[selectedPlan] > 1 ? 's' : ''} por ${PLAN_PRICES[selectedPlan]}/mes
                </p>
              </div>
              
              <button
                type="submit"
                disabled={isLoading || !email.trim()}
                className="btn-primary w-full py-3 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Creando cuenta...</span>
                  </>
                ) : (
                  <>
                    <span>Comenzar Prueba Gratuita</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-slate-400">
                Al crear tu cuenta, aceptas nuestros{' '}
                <Link href="#" className="text-indigo-400 hover:text-indigo-300">
                  Términos de Servicio
                </Link>{' '}
                y{' '}
                <Link href="#" className="text-indigo-400 hover:text-indigo-300">
                  Política de Privacidad
                </Link>
              </p>
            </div>
            
            <div className="mt-6 pt-6 border-t border-slate-700">
              <div className="text-center">
                <p className="text-sm text-slate-400 mb-2">¿Ya tienes una cuenta?</p>
                <button
                  onClick={() => {
                    // TODO: Implementar login existente
                    alert('Funcionalidad de login existente - TODO');
                  }}
                  className="text-indigo-400 hover:text-indigo-300 font-medium"
                >
                  Iniciar Sesión
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-sm">
            Prueba gratuita de 14 días • Sin compromiso • Cancelación en cualquier momento
          </p>
        </div>
      </div>
    </div>
  );
}
