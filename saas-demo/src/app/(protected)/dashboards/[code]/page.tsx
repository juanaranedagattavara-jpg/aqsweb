'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAuth } from '@/store/useAuth';
import { DASHBOARDS } from '@/lib/dashboards';
import { canAccessDashboard } from '@/lib/access';
import { ArrowLeft, Lock, Play } from 'lucide-react';
import Link from 'next/link';

export default function DashboardDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { user } = useAuth();
  const [dashboard, setDashboard] = useState<typeof DASHBOARDS[0] | null>(null);

  useEffect(() => {
    const code = params.code as string;
    const foundDashboard = DASHBOARDS.find(d => d.code === code);
    
    if (!foundDashboard) {
      router.push('/app/dashboards');
      return;
    }

    if (!canAccessDashboard(code, user?.plan || 'basic')) {
      router.push('/app/dashboards');
      return;
    }

    setDashboard(foundDashboard);
  }, [params.code, user?.plan, router]);

  if (!dashboard) {
    return (
      <div className="p-6">
        <div className="text-center py-20">
          <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Play className="w-10 h-10 text-slate-400" />
          </div>
          <h3 className="text-xl font-semibold text-slate-900 mb-2">Cargando dashboard...</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/app/dashboards"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a Dashboards
        </Link>
        
        <div className="flex items-start gap-4">
          <div className="text-4xl">{dashboard.icon}</div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              {dashboard.title}
            </h1>
            <p className="text-slate-600 text-lg mb-3">
              {dashboard.description}
            </p>
            <div className="flex items-center gap-4">
              <span className="badge badge-primary">
                {dashboard.category}
              </span>
              <span className="text-sm text-slate-500">
                Código: {dashboard.code}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="text-center py-20">
          <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Play className="w-10 h-10 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold text-slate-900 mb-2">
            Dashboard {dashboard.title}
          </h3>
          <p className="text-slate-600 mb-6">
            Contenido del dashboard se cargaría aquí en una implementación real
          </p>
          
          <div className="bg-slate-50 rounded-lg p-6 max-w-md mx-auto">
            <h4 className="font-medium text-slate-900 mb-3">Información del Dashboard</h4>
            <div className="space-y-2 text-sm text-slate-600">
              <div className="flex justify-between">
                <span>Estado:</span>
                <span className="badge badge-success">Disponible</span>
              </div>
              <div className="flex justify-between">
                <span>Categoría:</span>
                <span>{dashboard.category}</span>
              </div>
              <div className="flex justify-between">
                <span>Plan Requerido:</span>
                <span>Básico</span>
              </div>
            </div>
          </div>
          
          <p className="text-xs text-slate-500 mt-6">
            Este es un demo. En producción, aquí se mostraría el contenido real del dashboard.
          </p>
        </div>
      </div>
    </div>
  );
}
