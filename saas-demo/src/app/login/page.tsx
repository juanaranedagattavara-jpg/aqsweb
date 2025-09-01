'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/store/useAuth';
import { PLAN_NAME, PLAN_PRICES, PLAN_FEATURES, PlanId } from '@/lib/plans';
import { ArrowRight, Check } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [selectedPlan, setSelectedPlan] = useState<PlanId>('basic');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Create mock user
    const user = {
      userId: `user_${Date.now()}`,
      email: email.trim(),
      plan: selectedPlan
    };
    
    login(user);
    router.push('/app/dashboards');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Accede a tu Demo
          </h1>
          <p className="text-xl text-slate-600">
            Selecciona un plan y comienza a explorar nuestros dashboards
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Plan Selection */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">
              Selecciona tu Plan
            </h2>
            
            {(['basic', 'pro', 'premium'] as PlanId[]).map((plan) => (
              <div
                key={plan}
                onClick={() => setSelectedPlan(plan)}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                  selectedPlan === plan
                    ? 'border-indigo-500 bg-indigo-50'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {PLAN_NAME[plan]}
                  </h3>
                  <div className="text-2xl font-bold text-slate-900">
                    ${PLAN_PRICES[plan]}
                    <span className="text-sm text-slate-500">/mes</span>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {PLAN_FEATURES[plan].map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-slate-600">
                      <Check className="w-4 h-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Login Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">
              Información de Acceso
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="font-medium text-slate-900 mb-2">
                  Plan Seleccionado: {PLAN_NAME[selectedPlan]}
                </h4>
                <p className="text-sm text-slate-600">
                  Accederás a {selectedPlan === 'basic' ? '4' : selectedPlan === 'pro' ? '8' : '16'} dashboards
                </p>
              </div>

              <button
                type="submit"
                disabled={isLoading || !email.trim()}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? 'Accediendo...' : 'Acceder al Demo'}
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-slate-500">
                Al continuar, aceptas nuestros términos de servicio
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
