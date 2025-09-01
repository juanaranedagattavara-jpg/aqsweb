'use client';

import { Dashboard } from '@/lib/dashboards';
import { PlanId } from '@/lib/plans';
import { getDashboardAccess, getRequiredPlan } from '@/lib/access';
import { Lock, Play, Clock, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { LockedDialog } from './LockedDialog';

interface DashboardCardProps {
  dashboard: Dashboard;
  index: number;
  userPlan: PlanId;
  onUpgradeClick: (requiredPlan: PlanId) => void;
}

export function DashboardCard({ dashboard, index, userPlan, onUpgradeClick }: DashboardCardProps) {
  const [showLockedDialog, setShowLockedDialog] = useState(false);
  const access = getDashboardAccess(dashboard, index, userPlan);

  const handleClick = () => {
    if (access.status === 'locked') {
      setShowLockedDialog(true);
    } else if (access.status === 'available') {
      // TODO: Navigate to dashboard
      console.log('Navigating to dashboard:', dashboard.code);
    }
  };

  const getStatusColor = () => {
    switch (access.status) {
      case 'available':
        return 'bg-green-100 text-green-700';
      case 'locked':
        return 'bg-red-100 text-red-700';
      case 'coming-soon':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  const getStatusIcon = () => {
    switch (access.status) {
      case 'available':
        return <Play className="w-4 h-4" />;
      case 'locked':
        return <Lock className="w-4 h-4" />;
      case 'coming-soon':
        return <Clock className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <>
      <div
        className={`card cursor-pointer transition-all hover:shadow-lg ${
          access.status === 'locked' ? 'opacity-75' : ''
        }`}
        onClick={handleClick}
      >
        <div className="flex items-start justify-between mb-4">
          <div className="text-3xl">{dashboard.icon}</div>
          <span className={`badge ${getStatusColor()} flex items-center gap-1`}>
            {getStatusIcon()}
            {access.message}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-slate-900 mb-2">
          {dashboard.title}
        </h3>
        
        <p className="text-slate-600 text-sm mb-4 line-clamp-2">
          {dashboard.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">
            {dashboard.category}
          </span>
          
          {access.status === 'available' && (
            <button className="text-indigo-600 hover:text-indigo-700 transition-colors">
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
          
          {access.status === 'locked' && (
            <button 
              className="text-red-600 hover:text-red-700 transition-colors text-sm font-medium"
              onClick={(e) => {
                e.stopPropagation();
                onUpgradeClick(access.requiredPlan!);
              }}
            >
              Desbloquear
            </button>
          )}
        </div>
      </div>

      {showLockedDialog && (
        <LockedDialog
          isOpen={showLockedDialog}
          onClose={() => setShowLockedDialog(false)}
          requiredPlan={access.requiredPlan!}
          dashboardTitle={dashboard.title}
        />
      )}
    </>
  );
}
