'use client';

import { useState } from 'react';
import { useAuth } from '@/store/useAuth';
import { DASHBOARDS } from '@/lib/dashboards';
import { DashboardCard } from '@/components/DashboardCard';
import { PlanId } from '@/lib/plans';
import { Search, Grid, List, Filter } from 'lucide-react';

export default function DashboardsPage() {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = ['all', ...Array.from(new Set(DASHBOARDS.map(d => d.category)))];

  const filteredDashboards = DASHBOARDS.filter(dashboard => {
    const matchesSearch = dashboard.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dashboard.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || dashboard.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleUpgradeClick = (requiredPlan: PlanId) => {
    // TODO: Implement upgrade logic
    console.log('Upgrade required to plan:', requiredPlan);
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Dashboards
        </h1>
        <p className="text-slate-600">
          Explora nuestros {DASHBOARDS.length} dashboards especializados en comercio exterior
        </p>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar dashboards..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-3">
            <Filter className="w-5 h-5 text-slate-500" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === 'all' ? 'Todas las Categorías' : category}
                </option>
              ))}
            </select>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid' 
                  ? 'bg-indigo-100 text-indigo-600' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list' 
                  ? 'bg-indigo-100 text-indigo-600' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mt-4 text-center">
          <p className="text-slate-600">
            Mostrando {filteredDashboards.length} de {DASHBOARDS.length} dashboards
            {selectedCategory !== 'all' && ` en la categoría "${selectedCategory}"`}
          </p>
        </div>
      </div>

      {/* Dashboards Grid */}
      {filteredDashboards.length === 0 ? (
        <div className="text-center py-20">
          <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="w-10 h-10 text-slate-400" />
          </div>
          <h3 className="text-xl font-semibold text-slate-900 mb-2">No se encontraron dashboards</h3>
          <p className="text-slate-600">
            Intenta ajustar los filtros o términos de búsqueda
          </p>
        </div>
      ) : (
        <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
          {filteredDashboards.map((dashboard, index) => (
            <DashboardCard
              key={dashboard.code}
              dashboard={dashboard}
              index={index + 1}
              userPlan={user?.plan || 'basic'}
              onUpgradeClick={handleUpgradeClick}
            />
          ))}
        </div>
      )}
    </div>
  );
}
