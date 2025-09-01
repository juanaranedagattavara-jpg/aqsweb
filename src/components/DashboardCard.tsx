'use client';

import { Dashboard } from '@/lib/dashboards';
import { PlanId } from '@/lib/plans';
import { getDashboardAccess, getRequiredPlan } from '@/lib/access';
import { Lock, Clock, ExternalLink, Crown } from 'lucide-react';
import Link from 'next/link';

interface DashboardCardProps {
  dashboard: Dashboard;
  index: number;
  userPlan: PlanId;
  onUpgradeClick: () => void;
}

export function DashboardCard({ dashboard, index, userPlan, onUpgradeClick }: DashboardCardProps) {
  const access = getDashboardAccess(dashboard, index, userPlan);
  const requiredPlan = getRequiredPlan(index);

  const getStatusBadge = () => {
    switch (access) {
      case 'available':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Disponible
          </span>
        );
      case 'locked':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            Bloqueado
          </span>
        );
      case 'coming-soon':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            Próximamente
          </span>
        );
      default:
        return null;
    }
  };

  const getActionButton = () => {
    switch (access) {
      case 'available':
        return (
          <Link
            href={`/app/dashboards/${dashboard.code}`}
            className="btn-primary w-full flex items-center justify-center space-x-2"
          >
            <span>Abrir Dashboard</span>
            <ExternalLink className="h-4 w-4" />
          </Link>
        );
      case 'locked':
        return (
          <button
            onClick={onUpgradeClick}
            className="btn-secondary w-full flex items-center justify-center space-x-2"
          >
            <Lock className="h-4 w-4" />
            <span>Desbloquear</span>
          </button>
        );
      case 'coming-soon':
        return (
          <button
            disabled
            className="btn-outline w-full flex items-center justify-center space-x-2 opacity-50 cursor-not-allowed"
          >
            <Clock className="h-4 w-4" />
            <span>Próximamente</span>
          </button>
        );
      default:
        return null;
    }
  };

  return (
    <div className="card hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="text-3xl">{dashboard.icon}</div>
        <div className="flex items-center space-x-2">
          {getStatusBadge()}
          {access === 'locked' && (
            <div className="flex items-center space-x-1 text-xs text-slate-400">
              <Crown className="h-3 w-3" />
              <span className="capitalize">{requiredPlan}</span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-white mb-2">{dashboard.title}</h3>
        <p className="text-slate-300 text-sm leading-relaxed">{dashboard.description}</p>
      </div>

      {/* Category */}
      <div className="mb-4">
        <span className="inline-block px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-md">
          {dashboard.category}
        </span>
      </div>

      {/* Action Button */}
      <div className="mt-auto">
        {getActionButton()}
      </div>

      {/* Plan requirement info */}
      {access === 'locked' && (
        <div className="mt-3 text-xs text-slate-400 text-center">
          Requiere plan {requiredPlan} o superior
        </div>
      )}
    </div>
  );
}
