'use client'

import { motion } from 'framer-motion'
import { 
  Database, 
  BarChart3, 
  TrendingUp, 
  Shield, 
  Zap, 
  Users, 
  Globe, 
  Lock, 
  Cpu, 
  Target, 
  RefreshCw, 
  Calendar, 
  Code, 
  Bug, 
  Eye, 
  Settings, 
  Palette, 
  Layout, 
  Moon, 
  MousePointer, 
  Upload, 
  MessageSquare, 
  Clock, 
  BookOpen, 
  Video, 
  Lightbulb, 
  Award 
} from 'lucide-react'

// Configuración de animaciones optimizada
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const features = [
  {
    icon: Database,
    title: 'Análisis Avanzado',
    description: 'Utilizamos las últimas tecnologías de machine learning para extraer insights valiosos de tus datos.',
    color: 'text-accent'
  },
  {
    icon: BarChart3,
    title: 'Consultoría Experta',
    description: 'Equipo de expertos con más de 10 años de experiencia en analytics y estrategia empresarial.',
    color: 'text-accent-2'
  },
  {
    icon: TrendingUp,
    title: 'Resultados Medibles',
    description: 'Cada proyecto incluye KPIs claros y reportes de ROI para demostrar el valor generado.',
    color: 'text-warning'
  },
  {
    icon: Shield,
    title: 'Seguridad de Datos',
    description: 'Protección de nivel empresarial para tus datos más sensibles con encriptación de extremo a extremo.',
    color: 'text-accent'
  },
  {
    icon: Zap,
    title: 'Procesamiento Rápido',
    description: 'Análisis en tiempo real con latencia mínima para decisiones instantáneas y respuestas inmediatas.',
    color: 'text-accent-2'
  },
  {
    icon: Users,
    title: 'Colaboración en Equipo',
    description: 'Herramientas para compartir insights y trabajar en conjunto de manera eficiente y segura.',
    color: 'text-warning'
  },
  {
    icon: Globe,
    title: 'Cobertura Mundial',
    description: 'Datos de más de 150 países con información detallada de importaciones y exportaciones.',
    color: 'text-accent'
  },
  {
    icon: Lock,
    title: 'Cumplimiento Normativo',
    description: 'Garantía de cumplimiento con todas las regulaciones internacionales de comercio y datos.',
    color: 'text-accent'
  },
  {
    icon: Cpu,
    title: 'Inteligencia Artificial',
    description: 'Algoritmos de IA avanzados para análisis predictivo y detección de anomalías.',
    color: 'text-accent-2'
  },
  {
    icon: Target,
    title: 'Precisión Garantizada',
    description: '99.9% de precisión en todos nuestros datos con verificación continua de calidad.',
    color: 'text-warning'
  }
]

const workflowFeatures = [
  { icon: RefreshCw, title: 'Actualización automática de datos', color: 'text-accent' },
  { icon: Calendar, title: 'Programación de refrescos', color: 'text-accent-2' },
  { icon: Code, title: 'API de gestión de activos', color: 'text-warning' },
  { icon: Bug, title: 'Herramientas de depuración', color: 'text-accent' },
  { icon: Eye, title: 'Vista del código fuente', color: 'text-accent-2' },
  { icon: Settings, title: 'Propiedades de usuario y cuenta', color: 'text-warning' },
  { icon: Zap, title: 'Fuentes de datos dinámicas', color: 'text-accent' },
  { icon: Upload, title: 'Plantillas de dashboard', color: 'text-accent-2' }
]

const dashboardFeatures = [
  { icon: BarChart3, title: '30+ visualizaciones de mejores prácticas', color: 'text-accent' },
  { icon: Palette, title: 'Tematización personalizada y white-label', color: 'text-accent-2' },
  { icon: Layout, title: 'Diseños de dashboard infinitos', color: 'text-warning' },
  { icon: Moon, title: 'Soporte integrado para modo oscuro', color: 'text-accent' },
  { icon: MousePointer, title: 'Control a nivel de píxel', color: 'text-accent-2' },
  { icon: Upload, title: 'Carga de logos', color: 'text-warning' },
  { icon: Palette, title: 'Colores e indicadores personalizados', color: 'text-accent' },
  { icon: TrendingUp, title: 'Drill-down', color: 'text-accent-2' }
]

const decisionFeatures = [
  { icon: Shield, title: 'Construido sobre datos confiables', color: 'text-accent' },
  { icon: MessageSquare, title: 'Comentarios para contexto', color: 'text-accent-2' },
  { icon: Clock, title: 'Visualizaciones en tiempo real', color: 'text-warning' },
  { icon: Database, title: 'Acceso centralizado a datos', color: 'text-accent' },
  { icon: Users, title: 'Alineación y colaboración del equipo', color: 'text-accent-2' },
  { icon: Target, title: 'Dashboards personalizados', color: 'text-warning' },
  { icon: BarChart3, title: 'Narrativa visual clara', color: 'text-accent' },
  { icon: Users, title: 'Empoderamiento para usuarios no técnicos', color: 'text-accent-2' }
]

const supportFeatures = [
  { icon: Award, title: 'Equipo de soporte legendario', color: 'text-accent' },
  { icon: BookOpen, title: 'Recursos extensos del centro de ayuda', color: 'text-accent-2' },
  { icon: Users, title: 'Opciones de incorporación y capacitación', color: 'text-warning' },
  { icon: Video, title: 'Guías de video y tutoriales', color: 'text-accent' },
  { icon: Lightbulb, title: 'Consejos y sugerencias en la aplicación', color: 'text-accent-2' },
  { icon: Award, title: 'Servicios profesionales disponibles', color: 'text-warning' },
  { icon: Users, title: 'Red de socios sólida', color: 'text-accent' },
  { icon: BookOpen, title: 'Biblioteca de plantillas curada', color: 'text-accent-2' }
]

const dashboardExamples = [
  { category: 'Ejecutivo', title: 'Reportes Ejecutivos', description: 'Un dashboard de reportes ejecutivos le da a los líderes una vista rápida y clara del rendimiento empresarial.' },
  { category: 'Marketing', title: 'Marketing Digital', description: 'Alcanza tu audiencia objetivo rastreando las métricas principales de marketing digital que miden tu éxito.' },
  { category: 'Finanzas', title: 'Flujo de Caja', description: 'Un dashboard de flujo de caja monitorea el poder de gasto inmediato y la posición de efectivo de tu empresa.' },
  { category: 'Ventas', title: 'Ventas Mensuales', description: 'Un dashboard de ventas mensuales le da a tu equipo una vista clara y en tiempo real de las metas y rendimiento mensual.' },
  { category: 'Social', title: 'Monitoreo de Redes', description: 'Rastrea métricas clave de múltiples plataformas de redes sociales en un dashboard integral.' },
  { category: 'SaaS', title: 'Soporte al Cliente', description: 'Un dashboard de soporte te ayuda a ver qué tan bien está funcionando tu servicio al cliente, en tiempo real.' }
]

const stats = [
  { value: '6.7', unit: 'tb', label: 'Datos procesados cada 24hrs' },
  { value: '82', unit: '', label: 'Países con clientes felices' },
  { value: '646', unit: '', label: 'Actualizaciones en 12 meses' },
  { value: '100', unit: 'k', label: 'Usuarios activos diarios' }
]

const featureTabs = [
  'Automatiza tu flujo de trabajo de gestión de datos',
  'Construye dashboards hermosos',
  'Inspira toma de decisiones confiada',
  'Obtén ayuda cuando la necesites'
]

export function Features() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl lg:text-6xl font-display font-medium text-white mb-6 leading-tight">
            Poder de análisis con{' '}
            <span className="font-bold bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
              claridad de dashboard
            </span>
          </h1>
          <p className="text-xl text-muted max-w-4xl mx-auto text-lg">
            AQSWeb es una solución completa de dashboard que automatiza la recuperación de datos y ofrece opciones ilimitadas de presentación y distribución de dashboards, todo con el poder y la familiaridad de las herramientas de análisis modernas.
          </p>
          <div className="mt-8">
            <button className="bg-gradient-to-r from-accent to-accent-2 text-white font-bold py-4 px-8 rounded-lg text-lg hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary-900">
              Comenzar
            </button>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 text-center"
        >
          <div className="relative inline-block">
            <div className="rounded-lg shadow-2xl" style={{
              boxShadow: '0px 0px 10px rgba(165, 171, 192, 0.3), 0px 2px 2px rgba(165, 171, 192, 0.6), 0px 4px 4px rgba(165, 171, 192, 0.6), 0px 16px 16px rgba(165, 171, 192, 0.6), 0px 32px 32px rgba(165, 171, 192, 0.6)'
            }}>
              <div className="w-full max-w-4xl h-96 bg-gradient-to-br from-primary-800 to-primary-900 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Database className="w-24 h-24 text-accent mx-auto mb-4" />
                  <p className="text-white text-xl">Dashboard de Análisis AQSWeb</p>
                  <p className="text-muted text-sm mt-2">Imagen representativa del sistema</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Company Trust Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl lg:text-4xl font-display font-semibold text-white mb-6">
            Nos enorgullece ser definidos por la{' '}
            <span className="font-bold bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
              empresa que mantenemos.
            </span>
          </h2>
          <p className="text-xl text-muted mb-8">
            Más de <strong>25,000 clientes</strong> han entregado dashboards increíbles con AQSWeb.
          </p>
          <div className="bg-primary-800 rounded-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-primary-700 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Database className="w-8 h-8 text-accent" />
                  </div>
                  <p className="text-white font-semibold">Cliente {i}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Main Value Proposition */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl lg:text-4xl font-display font-medium text-white mb-6">
            El análisis tradicional no está hecho para dashboards.{' '}
            <span className="font-bold bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
              AQSWeb sí lo está.
            </span>
          </h2>
          <p className="text-lg text-muted max-w-4xl mx-auto">
            Lo entendemos. Eres un <strong>profesional del análisis</strong>—un maestro de fórmulas, filtros y tablas dinámicas. Pero, con datos dispersos en herramientas, errores esperando suceder, y gráficos que apenas pasan como "intuitivos", es hora de que tus dashboards den un paso adelante.
          </p>
        </motion.div>
        
        {/* Three Steps Section */}
            <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-medium text-white mb-6">
              Tres pasos simples para{' '}
              <span className="font-bold bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
                el éxito del dashboard.
              </span>
            </h2>
            <div className="flex justify-center space-x-8 mb-8">
              {['Conectar', 'Construir', 'Compartir'].map((step, index) => (
                <div key={step} className="text-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold ${
                    index === 0 ? 'bg-accent text-white' : 'bg-primary-700 text-muted'
                  }`}>
                    {index + 1}
                  </div>
                  <p className={`mt-2 font-bold ${index === 0 ? 'text-accent' : 'text-muted'}`}>
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Automatiza datos desde hojas de cálculo</h4>
                  <p className="text-muted">Extrae datos en vivo directamente desde Excel o Sheets y deja de perseguir los números de ayer.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-accent-2" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Conecta directamente a 200+ servicios</h4>
                  <p className="text-muted">Ya sea tu CRM, Google Ads o redes sociales, tus datos se mantienen conectados y confiables.</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-warning" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Salta el almacén de datos (o no)</h4>
                  <p className="text-muted">¿Aún trabajando en tu infraestructura de datos? AQSWeb funciona genial con o sin un almacén de datos.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Code className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Ve pro con SQL, REST y más</h4>
                  <p className="text-muted">Obtén datos de casi cualquier lugar con un conjunto robusto de conectores de consulta.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-medium text-white mb-6">
              Dashboards que deslumbran con herramientas{' '}
              <span className="font-bold bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
                que entregan.
              </span>
            </h2>
            <p className="text-lg text-muted max-w-4xl mx-auto">
              AQSWeb tiene todo lo que necesitas para ir de datos desordenados a dashboards pulidos.
              <br />Sin límites, sin problemas, sin complicaciones.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-4 mb-8">
                {featureTabs.map((title, index) => (
                  <div key={index} className={`cursor-pointer p-4 rounded-lg transition-colors ${
                    index === 0 ? 'bg-accent/20 border border-accent' : 'bg-primary-800 hover:bg-primary-700'
                  }`}>
                    <h4 className="text-lg font-medium text-white">{title}</h4>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary-800 rounded-lg p-8">
              <div className="w-full h-64 bg-gradient-to-br from-primary-700 to-primary-800 rounded-lg mb-6 flex items-center justify-center">
                <Database className="w-16 h-16 text-accent" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {workflowFeatures.slice(0, 8).map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-8 h-8 bg-primary-700 rounded-lg flex items-center justify-center ${feature.color}`}>
                      <feature.icon className="w-4 h-4" />
                    </div>
                    <p className="text-sm font-medium text-white">{feature.title}</p>
                  </div>
                ))}
              </div>
                </div>
              </div>
            </motion.div>

        {/* Dashboard Examples */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-medium text-white mb-6">
              Click. Boom.{' '}
              <span className="font-bold bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
                Inspirado.
              </span>
            </h2>
            <p className="text-lg text-muted max-w-4xl mx-auto">
              Miles de empresas como la tuya han automatizado sus flujos de trabajo de dashboarding y reporting y han impresionado a sus equipos o clientes con AQSWeb.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dashboardExamples.map((example, index) => (
              <div key={index} className="bg-primary-800 rounded-lg p-6 hover:bg-primary-700 transition-colors">
                <div className="mb-4">
                  <span className="text-xs font-bold text-accent bg-accent/20 px-2 py-1 rounded">
                    {example.category}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">{example.title}</h4>
                <p className="text-muted text-sm mb-4">{example.description}</p>
                <div className="w-full h-32 bg-gradient-to-br from-primary-700 to-primary-800 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-accent" />
                </div>
              </div>
          ))}
        </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-medium text-white mb-6">
              Fuerza en números. Y{' '}
              <span className="font-bold bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
                en estrellas.
              </span>
            </h2>
            <p className="text-lg text-muted">
              Amamos lo que hacemos. Y nuestros clientes también.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent mb-2">
                  {stat.value}<span className="text-2xl">{stat.unit}</span>
                </div>
                <p className="text-muted">{stat.label}</p>
              </div>
            ))}
            <div className="text-center">
              <div className="w-32 h-16 bg-primary-800 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <p className="text-muted">G2 Crowd High Performer</p>
            </div>
          </div>
        </motion.div>

        {/* Pricing CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-display font-medium text-white mb-6">
            Ver ojo a ojo con los datos{' '}
            <span className="font-bold bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
              no debería costar un brazo y una pierna.
            </span>
          </h2>
          <p className="text-lg text-muted mb-8">
            Los precios de AQSWeb comienzan en solo{' '}
            <span className="font-bold text-white">$120/mes</span> USD.
            <br />Un pequeño precio a pagar por la confianza.
          </p>
          <button className="bg-gradient-to-r from-accent to-accent-2 text-white font-bold py-4 px-8 rounded-lg text-lg hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary-900">
            Ver Precios
          </button>
        </motion.div>
      </div>
    </section>
  )
}
