import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { PlanId } from '@/lib/plans';

interface User {
  userId: string;
  email: string;
  plan: PlanId;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
  upgradePlan: (newPlan: PlanId) => void;
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      
      login: (user: User) => set({
        user,
        isAuthenticated: true
      }),
      
      logout: () => set({
        user: null,
        isAuthenticated: false
      }),
      
      upgradePlan: (newPlan: PlanId) => set((state) => ({
        user: state.user ? { ...state.user, plan: newPlan } : null
      }))
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ user: state.user, isAuthenticated: state.isAuthenticated })
    }
  )
);
