import { Building2, Users, Globe, TrendingUp, Ship, FileText, Shield, Target } from 'lucide-react'

export interface Stakeholder {
  id: string
  name: string
  type: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  color: string
}

export const stakeholdersData: Stakeholder[] = [
  {
    id: 'empresas-exportadoras',
    name: 'Empresas Exportadoras',
    type: 'Sector Privado',
    description: 'Compañías que buscan expandir su presencia en mercados internacionales',
    icon: Building2,
    color: 'from-blue-500/20 to-blue-600/20'
  },
  {
    id: 'consultores-comerciales',
    name: 'Consultores Comerciales',
    type: 'Servicios',
    description: 'Expertos que asesoran en estrategias de comercio exterior',
    icon: Users,
    color: 'from-green-500/20 to-green-600/20'
  },
  {
    id: 'agencias-gubernamentales',
    name: 'Agencias Gubernamentales',
    type: 'Sector Público',
    description: 'Organismos que promueven el comercio internacional',
    icon: Globe,
    color: 'from-purple-500/20 to-purple-600/20'
  },
  {
    id: 'instituciones-financieras',
    name: 'Instituciones Financieras',
    type: 'Sector Financiero',
    description: 'Bancos y entidades que financian el comercio exterior',
    icon: TrendingUp,
    color: 'from-orange-500/20 to-orange-600/20'
  },
  {
    id: 'logisticas-transporte',
    name: 'Logística y Transporte',
    type: 'Servicios',
    description: 'Empresas que facilitan el movimiento de mercancías',
    icon: Ship,
    color: 'from-red-500/20 to-red-600/20'
  },
  {
    id: 'investigacion-mercado',
    name: 'Investigación de Mercado',
    type: 'Servicios',
    description: 'Consultoras especializadas en análisis de mercados globales',
    icon: FileText,
    color: 'from-teal-500/20 to-teal-600/20'
  },
  {
    id: 'seguros-comercio',
    name: 'Seguros de Comercio',
    type: 'Servicios',
    description: 'Aseguradoras que protegen operaciones comerciales internacionales',
    icon: Shield,
    color: 'from-indigo-500/20 to-indigo-600/20'
  },
  {
    id: 'certificacion-calidad',
    name: 'Certificación de Calidad',
    type: 'Servicios',
    description: 'Organismos que verifican estándares de calidad internacionales',
    icon: Target,
    color: 'from-pink-500/20 to-pink-600/20'
  }
]

// Puedes agregar más stakeholders aquí siguiendo el mismo formato:
/*
{
  id: 'nuevo-stakeholder',
  name: 'Nombre del Stakeholder',
  type: 'Tipo de Sector',
  description: 'Descripción detallada del stakeholder',
  icon: IconComponent, // Importa el icono de lucide-react
  color: 'from-color-500/20 to-color-600/20' // Gradiente de color
}
*/
