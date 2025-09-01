import React from 'react';
import { PricingSection } from '@/components/ui/pricing';
import { FooterMinimal } from '@/components/layout/footer-minimal';
import { DashboardCarousel } from '@/components/ui/dashboard-carousel';
import { dashboardCards } from '@/lib/dashboard-data';

export default function Precios() {
	return (
		<div className="min-h-screen bg-black py-12 flex flex-col">
			<PricingSection
				plans={PLANS}
				heading="Planes y Precios"
				description="Elige el plan que mejor se adapte a tus necesidades de análisis de comercio exterior."
			/>
			
			{/* Dashboard Carousel */}
			<section className="py-20 border-t border-gray-800">
				<DashboardCarousel 
					cards={dashboardCards}
					title="Dashboards Incluidos en tu Plan"
					description="Cada plan incluye acceso completo a nuestros dashboards especializados en comercio exterior"
				/>
			</section>
			
			{/* Footer Minimalista */}
			<FooterMinimal />
		</div>
	);
}

const PLANS = [
	{
		id: 'basic',
		name: 'BÁSICO',
		info: 'Para análisis básicos de mercado',
		price: {
			monthly: 68,
			yearly: 795.6,
		},
		features: [
			{ text: 'Base de Datos Compilada' },
			{ text: 'Resumen Ejecutivo' },
			{ text: 'Análisis de Tendencias' },
			{ text: 'Ranking de Empresas' },
			{ text: 'Ranking de Mercados' },
		],
		btn: {
			text: 'Comenzar Plan Básico',
			href: '#',
		},
	},
	{
		highlighted: true,
		id: 'pro',
		name: 'PRO',
		info: 'Para análisis profesionales',
		price: {
			monthly: 156,
			yearly: 1825.2,
		},
		features: [
			{ text: 'Todo lo del plan Básico' },
			{ text: 'Market Share Empresas' },
			{ text: 'Market Share Destinos / Origen' },
			{ text: 'Mix de Productos' },
		],
		btn: {
			text: 'Comenzar Plan Pro',
			href: '#',
		},
	},
	{
		id: 'premium',
		name: 'PREMIUM',
		info: 'Para análisis completos y avanzados',
		price: {
			monthly: 276,
			yearly: 3229.2,
		},
		features: [
			{ text: 'Todo lo del plan PRO' },
			{ text: 'Comparación de Calibres' },
			{ text: 'Participación de Calibres por Empresa' },
			{ text: 'Participación de Calibres por Mercado' },
			{ text: 'Análisis de Rango de Precios' },
			{ text: 'Análisis de Distribución de Precios' },
			{ text: 'Análisis de Composición de Precios' },
			{ text: 'Desempeño Comparado' },
			{ text: 'Informe de Clientes Extranjeros' },
		],
		btn: {
			text: 'Contactar para Premium',
			href: '#',
		},
	},
];
