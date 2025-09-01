'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAuth } from '@/store/useAuth';
import { DASHBOARDS } from '@/lib/dashboards';
import { canAccessDashboard } from '@/lib/access';
import { ArrowLeft, ExternalLink, Lock, Clock } from 'lucide-react';
import Link from 'next/link';

export default function DashboardDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  
  const dashboardCode = params.code as string;
  const dashboard = DASHBOARDS.find(d => d.code === dashboardCode);
  const dashboardIndex = DASHBOARDS.findIndex(d => d.code === dashboardCode);

  useEffect(() => {
    if (!dashboard) {
      router.push('/app/dashboards');
      return;
    }

    // Verificar acceso
    if (!canAccessDashboard(dashboardCode, user?.plan || 'basic')) {
      router.push('/app/dashboards');
      return;
    }

    // Simular carga del dashboard
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [dashboard, dashboardCode, user?.plan, router]);

  if (!dashboard) {
    return null;
  }

  if (isLoading) {
    return (
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-6">
          <Link href="/app/dashboards" className="btn-outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver
          </Link>
        </div>
        
        <div className="text-center py-20">
          <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-white mb-2">Cargando Dashboard</h2>
          <p className="text-slate-400">Preparando {dashboard.title}...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <Link href="/app/dashboards" className="btn-outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver
          </Link>
          
          <div>
            <h1 className="text-3xl font-bold text-white flex items-center space-x-3">
              <span className="text-4xl">{dashboard.icon}</span>
              <span>{dashboard.title}</span>
            </h1>
            <p className="text-slate-300 mt-1">{dashboard.description}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="inline-block px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-full">
            {dashboard.category}
          </span>
          {dashboard.soon && (
            <span className="inline-flex items-center px-3 py-1 bg-yellow-500/20 text-yellow-400 text-sm rounded-full">
              <Clock className="w-4 h-4 mr-1" />
              Próximamente
            </span>
          )}
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
        {/* Toolbar */}
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          <div className="flex items-center space-x-4">
            <button className="btn-secondary text-sm">
              <ExternalLink className="w-4 h-4 mr-2" />
              Exportar
            </button>
            <button className="btn-outline text-sm">
              <ExternalLink className="w-4 h-4 mr-2" />
              Compartir
            </button>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-slate-400">
            <span>Última actualización:</span>
            <span className="text-white">{new Date().toLocaleString('es-ES')}</span>
          </div>
        </div>

        {/* Dashboard Frame */}
        <div className="p-6">
          <div className="bg-slate-900 border border-slate-600 rounded-lg p-8 text-center">
            <div className="text-6xl mb-4">📊</div>
            <h3 className="text-2xl font-bold text-white mb-4">
              {dashboard.title}
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              {dashboard.description}
            </p>
            
            {/* Simulated Dashboard Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-400 mb-2">$2.4M</div>
                <div className="text-slate-400 text-sm">Exportaciones</div>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-400 mb-2">+12.5%</div>
                <div className="text-slate-400 text-sm">Crecimiento</div>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <div className="text-2xl font-bold text-purple-400 mb-2">156</div>
                <div className="text-slate-400 text-sm">Transacciones</div>
              </div>
            </div>
            
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Gráfico de Tendencias</h4>
              <div className="h-64 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">📈</div>
                  <p className="text-slate-400">Gráfico interactivo del dashboard</p>
                  <p className="text-slate-500 text-sm mt-2">
                    En una implementación real, aquí se mostraría un iframe o componente embebido
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-sm text-slate-500">
              <p>
                <strong>Nota:</strong> Este es un placeholder del dashboard. En una implementación real, 
                aquí se mostraría el contenido embebido del dashboard a través de un iframe o API.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Dashboards */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-white mb-4">Dashboards Relacionados</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {DASHBOARDS
            .filter(d => d.category === dashboard.category && d.code !== dashboard.code)
            .slice(0, 3)
            .map(relatedDashboard => (
              <Link
                key={relatedDashboard.code}
                href={`/app/dashboards/${relatedDashboard.code}`}
                className="bg-slate-800 border border-slate-700 rounded-lg p-4 hover:border-slate-600 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{relatedDashboard.icon}</span>
                  <div>
                    <h4 className="font-medium text-white">{relatedDashboard.title}</h4>
                    <p className="text-sm text-slate-400">{relatedDashboard.category}</p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
