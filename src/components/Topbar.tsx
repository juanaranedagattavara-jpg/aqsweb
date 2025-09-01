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
    <div className="flex h-16 items-center justify-between border-b border-slate-700 bg-slate-800 px-6">
      {/* Left side - Search */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar dashboards..."
            className="w-64 bg-slate-700 border border-slate-600 text-white placeholder-slate-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Right side - User info and actions */}
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>

        {/* User info */}
        <div className="flex items-center space-x-3">
          <div className="text-right">
            <p className="text-sm font-medium text-white">{user?.email}</p>
            <p className="text-xs text-slate-400 capitalize">{user?.plan}</p>
          </div>
          
          {/* Avatar */}
          <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium text-white">
              {user?.email?.charAt(0).toUpperCase()}
            </span>
          </div>
        </div>

        {/* Logout button */}
        <button
          onClick={handleLogout}
          className="flex items-center space-x-2 px-3 py-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors duration-200"
        >
          <LogOut className="h-4 w-4" />
          <span className="text-sm">Salir</span>
        </button>
      </div>
    </div>
  );
}
