'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  BarChart3, 
  User, 
  Home,
  Settings,
  HelpCircle
} from 'lucide-react';

const navigation = [
  { name: 'Inicio', href: '/app/dashboards', icon: Home },
  { name: 'Dashboards', href: '/app/dashboards', icon: BarChart3 },
  { name: 'Mi Plan', href: '/app/account', icon: User },
  { name: 'Configuración', href: '/app/settings', icon: Settings },
  { name: 'Ayuda', href: '/app/help', icon: HelpCircle },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-64 flex-col bg-slate-900 border-r border-slate-700">
      {/* Logo */}
      <div className="flex h-16 items-center justify-center border-b border-slate-700">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white">QSP Analytics</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-4 py-6">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                isActive
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <item.icon
                className={`mr-3 h-5 w-5 flex-shrink-0 ${
                  isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'
                }`}
              />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-slate-700 p-4">
        <div className="text-xs text-slate-400 text-center">
          © 2024 QSP Analytics
          <br />
          <span className="text-slate-500">v1.0.0</span>
        </div>
      </div>
    </div>
  );
}
