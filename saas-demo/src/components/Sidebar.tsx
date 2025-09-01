'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BarChart3, User, LogOut } from 'lucide-react';
import { useAuth } from '@/store/useAuth';

export function Sidebar() {
  const pathname = usePathname();
  const { logout } = useAuth();

  const navigation = [
    {
      name: 'Dashboards',
      href: '/app/dashboards',
      icon: BarChart3,
      current: pathname === '/app/dashboards'
    },
    {
      name: 'Mi Plan',
      href: '/app/account',
      icon: User,
      current: pathname === '/app/account'
    }
  ];

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="w-64 bg-white border-r border-slate-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-slate-900">QSP Analytics</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    item.current
                      ? 'bg-indigo-50 text-indigo-700'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-200">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors w-full"
        >
          <LogOut className="w-5 h-5" />
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
}
