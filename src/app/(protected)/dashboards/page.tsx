'use client';

import { useState } from 'react';
import { useAuth } from '@/store/useAuth';
import { DASHBOARDS } from '@/lib/dashboards';
import { DashboardCard } from '@/components/DashboardCard';
import { LockedDialog } from '@/components/LockedDialog';
import { Search, Filter, Grid, List } from 'lucide-react';

export default function DashboardsPage() {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [lockedDialog, setLockedDialog] = useState<{
    isOpen: boolean;
    requiredPlan: string;
    dashboardTitle: string;
  }>({
    isOpen: false,
    requiredPlan: '',
    dashboardTitle: ''
  });

  // Obtener categorías únicas
  const categories = ['all', ...Array.from(new Set(DASHBOARDS.map(d => d.category)))];

  // Filtrar dashboards
  const filteredDashboards = DASHBOARDS.filter(dashboard => {
    const matchesSearch = dashboard.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dashboard.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || dashboard.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleUpgradeClick = (requiredPlan: string, dashboardTitle: string) => {
    setLockedDialog({
      isOpen: true,
      requiredPlan,
      dashboardTitle
    });
  };

  const closeLockedDialog = () => {
    setLockedDialog({
      isOpen: false,
      requiredPlan: '',
      dashboardTitle: ''
    });
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Dashboards</h1>
        <p className="text-slate-300">
          Accede a {DASHBOARDS.length} dashboards especializados en comercio exterior
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        {/* Search */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar dashboards..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-800 border border-slate-600 text-white placeholder-slate-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        {/* Category Filter */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="bg-slate-800 border border-slate-600 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category === 'all' ? 'Todas las categorías' : category}
            </option>
          ))}
        </select>

        {/* View Mode Toggle */}
        <div className="flex bg-slate-800 border border-slate-600 rounded-lg p-1">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-md transition-colors ${
              viewMode === 'grid' 
                ? 'bg-indigo-600 text-white' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Grid className="h-4 w-4" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-md transition-colors ${
              viewMode === 'list' 
                ? 'bg-indigo-600 text-white' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <List className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
          <div className="text-2xl font-bold text-white">{DASHBOARDS.length}</div>
          <div className="text-slate-400 text-sm">Total Dashboards</div>
        </div>
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
          <div className="text-2xl font-bold text-green-400">
            {DASHBOARDS.filter((_, index) => 
              index < (user?.plan === 'basic' ? 4 : user?.plan === 'pro' ? 8 : 16)
            ).length}
          </div>
          <div className="text-slate-400 text-sm">Disponibles</div>
        </div>
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
          <div className="text-2xl font-bold text-red-400">
            {DASHBOARDS.filter((_, index) => 
              index >= (user?.plan === 'basic' ? 4 : user?.plan === 'pro' ? 8 : 16)
            ).length}
          </div>
          <div className="text-slate-400 text-sm">Bloqueados</div>
        </div>
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
          <div className="text-2xl font-bold text-yellow-400">
            {DASHBOARDS.filter(d => d.soon).length}
          </div>
          <div className="text-slate-400 text-sm">Próximamente</div>
        </div>
      </div>

      {/* Dashboards Grid */}
      {filteredDashboards.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-white mb-2">No se encontraron dashboards</h3>
          <p className="text-slate-400">
            Intenta ajustar los filtros de búsqueda o categoría
          </p>
        </div>
      ) : (
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {filteredDashboards.map((dashboard, index) => (
            <DashboardCard
              key={dashboard.code}
              dashboard={dashboard}
              index={index}
              userPlan={user?.plan || 'basic'}
              onUpgradeClick={() => {
                const requiredPlan = index < 4 ? 'basic' : index < 8 ? 'pro' : 'premium';
                handleUpgradeClick(requiredPlan, dashboard.title);
              }}
            />
          ))}
        </div>
      )}

      {/* Locked Dialog */}
      <LockedDialog
        isOpen={lockedDialog.isOpen}
        onClose={closeLockedDialog}
        requiredPlan={lockedDialog.requiredPlan as any}
        dashboardTitle={lockedDialog.dashboardTitle}
      />
    </div>
  );
}
