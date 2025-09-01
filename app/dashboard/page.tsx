'use client';

import { useState } from 'react';
import { TrendingUp, TrendingDown, DollarSign, Package, Globe, Users, BarChart3, Calendar } from 'lucide-react';

interface MetricCard {
  title: string;
  value: string;
  change: number;
  changeType: 'increase' | 'decrease';
  icon: React.ReactNode;
  color: string;
}

interface ChartData {
  month: string;
  exports: number;
  imports: number;
  balance: number;
}

export default function DashboardPage() {
  const [selectedPeriod, setSelectedPeriod] = useState<'7d' | '30d' | '90d' | '1y'>('30d');

  const metrics: MetricCard[] = [
    {
      title: 'Exportaciones Totales',
      value: '$2.4B',
      change: 12.5,
      changeType: 'increase',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'text-green-600'
    },
    {
      title: 'Importaciones Totales',
      value: '$1.8B',
      change: -3.2,
      changeType: 'decrease',
      icon: <TrendingDown className="w-6 h-6" />,
      color: 'text-red-600'
    },
    {
      title: 'Balance Comercial',
      value: '$600M',
      change: 8.7,
      changeType: 'increase',
      icon: <DollarSign className="w-6 h-6" />,
      color: 'text-blue-600'
    },
    {
      title: 'Volumen de Carga',
      value: '45.2K',
      change: 15.3,
      changeType: 'increase',
      icon: <Package className="w-6 h-6" />,
      color: 'text-purple-600'
    }
  ];

  const chartData: ChartData[] = [
    { month: 'Ene', exports: 180, imports: 150, balance: 30 },
    { month: 'Feb', exports: 220, imports: 170, balance: 50 },
    { month: 'Mar', exports: 200, imports: 160, balance: 40 },
    { month: 'Abr', exports: 250, imports: 190, balance: 60 },
    { month: 'May', exports: 280, imports: 210, balance: 70 },
    { month: 'Jun', exports: 320, imports: 240, balance: 80 }
  ];

  const topProducts = [
    { name: 'Soja', value: 450, change: 12.5, category: 'Agro' },
    { name: 'Carne Bovina', value: 320, change: 8.3, category: 'Agro' },
    { name: 'Mineral de Hierro', value: 280, change: -2.1, category: 'Minería' },
    { name: 'Petróleo Crudo', value: 250, change: 15.7, category: 'Energía' },
    { name: 'Vino', value: 180, change: 6.8, category: 'Agro' }
  ];

  const topCountries = [
    { name: 'China', value: 680, change: 18.2, flag: '🇨🇳' },
    { name: 'Brasil', value: 420, change: 12.5, flag: '🇧🇷' },
    { name: 'Estados Unidos', value: 380, change: 8.7, flag: '🇺🇸' },
    { name: 'Unión Europea', value: 320, change: 5.3, flag: '🇪🇺' },
    { name: 'India', value: 280, change: 22.1, flag: '🇮🇳' }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Dashboard de Comercio Exterior</h1>
            <p className="text-slate-600">Vista general de las métricas comerciales</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-slate-500" />
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value as any)}
                className="border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="7d">Últimos 7 días</option>
                <option value="30d">Últimos 30 días</option>
                <option value="90d">Últimos 90 días</option>
                <option value="1y">Último año</option>
              </select>
            </div>
            
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Exportar Reporte
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-lg ${metric.color.replace('text-', 'bg-')} bg-opacity-10`}>
                  <div className={metric.color}>{metric.icon}</div>
                </div>
                <div className={`flex items-center gap-1 text-sm ${
                  metric.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.changeType === 'increase' ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                  <span>{Math.abs(metric.change)}%</span>
                </div>
              </div>
              
              <h3 className="text-sm font-medium text-slate-600 mb-1">{metric.title}</h3>
              <p className="text-2xl font-bold text-slate-900">{metric.value}</p>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Trade Balance Chart */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Balance Comercial Mensual</h3>
            <div className="space-y-4">
              {chartData.map((data, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 text-sm font-medium text-slate-600">{data.month}</div>
                  <div className="flex-1">
                    <div className="flex h-8 bg-slate-100 rounded-lg overflow-hidden">
                      <div 
                        className="bg-green-500 h-full flex items-center justify-center text-white text-xs font-medium"
                        style={{ width: `${(data.exports / 400) * 100}%` }}
                      >
                        {data.exports}M
                      </div>
                      <div 
                        className="bg-red-500 h-full flex items-center justify-center text-white text-xs font-medium"
                        style={{ width: `${(data.imports / 400) * 100}%` }}
                      >
                        {data.imports}M
                      </div>
                    </div>
                  </div>
                  <div className="w-16 text-right">
                    <span className={`text-sm font-medium ${
                      data.balance >= 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {data.balance >= 0 ? '+' : ''}{data.balance}M
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4 mt-4 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded"></div>
                <span>Exportaciones</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded"></div>
                <span>Importaciones</span>
              </div>
            </div>
          </div>

          {/* Geographic Distribution */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Distribución Geográfica</h3>
            <div className="space-y-4">
              {topCountries.map((country, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="text-2xl">{country.flag}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-slate-900">{country.name}</span>
                      <span className="text-sm text-slate-600">${country.value}M</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className="bg-indigo-600 h-2 rounded-full"
                        style={{ width: `${(country.value / 700) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className={`text-sm font-medium ${
                    country.change >= 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {country.change >= 0 ? '+' : ''}{country.change}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Products and Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Products */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Productos Principales</h3>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Package className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-slate-900">{product.name}</span>
                      <span className="text-sm text-slate-600">${product.value}M</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-500">{product.category}</span>
                      <span className={`text-xs font-medium ${
                        product.change >= 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {product.change >= 0 ? '+' : ''}{product.change}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Actividad Reciente</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-green-50 border border-green-200">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-medium text-slate-900">Nueva exportación registrada</p>
                  <p className="text-xs text-slate-600">Soja - China - $45M</p>
                  <p className="text-xs text-slate-500">Hace 2 horas</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-50 border border-blue-200">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-medium text-slate-900">Actualización de aranceles</p>
                  <p className="text-xs text-slate-600">Nuevos aranceles para productos textiles</p>
                  <p className="text-xs text-slate-500">Hace 4 horas</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 rounded-lg bg-yellow-50 border border-yellow-200">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-medium text-slate-900">Alerta de mercado</p>
                  <p className="text-xs text-slate-600">Fluctuación en precios de commodities</p>
                  <p className="text-xs text-slate-500">Hace 6 horas</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 rounded-lg bg-purple-50 border border-purple-200">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-medium text-slate-900">Nuevo cliente registrado</p>
                  <p className="text-xs text-slate-600">Empresa de logística internacional</p>
                  <p className="text-xs text-slate-500">Hace 8 horas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
