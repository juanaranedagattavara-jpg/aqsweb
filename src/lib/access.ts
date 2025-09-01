import { PLAN_LIMIT, PlanId } from './plans';
import { Dashboard } from './dashboards';

export const isAllowedByIndex = (idx1: number, plan: PlanId): boolean => {
  return idx1 <= PLAN_LIMIT[plan];
};

export const getDashboardAccess = (dashboard: Dashboard, index: number, plan: PlanId) => {
  if (dashboard.soon) {
    return 'coming-soon';
  }
  
  if (isAllowedByIndex(index + 1, plan)) {
    return 'available';
  }
  
  return 'locked';
};

export const getRequiredPlan = (index: number): PlanId => {
  if (index < 4) return 'basic';
  if (index < 8) return 'pro';
  return 'premium';
};

export const canAccessDashboard = (dashboardCode: string, plan: PlanId): boolean => {
  const dashboardIndex = DASHBOARDS.findIndex(d => d.code === dashboardCode);
  if (dashboardIndex === -1) return false;
  
  return isAllowedByIndex(dashboardIndex + 1, plan);
};
