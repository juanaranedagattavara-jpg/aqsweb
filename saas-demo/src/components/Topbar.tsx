'use client';

import { useAuth } from '@/store/useAuth';
import { LogOut, Bell, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function Topbar() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <div className="bg-white border-b border-slate-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar dashboards..."
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
            <Bell className="w-5 h-5" />
          </button>

          {/* User info */}
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-medium text-slate-900">{user?.email}</p>
              <p className="text-xs text-slate-500">Plan {user?.plan}</p>
            </div>
            
            <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-indigo-700">
                {user?.email?.charAt(0).toUpperCase()}
              </span>
            </div>
          </div>

          {/* Logout button */}
          <button
            onClick={handleLogout}
            className="p-2 text-slate-400 hover:text-slate-600 transition-colors"
            title="Cerrar sesión"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
