module.exports = {

"[project]/components/marketing/features.tsx [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Features": ()=>Features
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/index.mjs [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/lucide-react.js [ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
// Configuración de animaciones optimizada
const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};
const itemVariants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};
const features = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Database"],
        title: 'Análisis Avanzado',
        description: 'Utilizamos las últimas tecnologías de machine learning para extraer insights valiosos de tus datos.',
        color: 'text-accent'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["BarChart3"],
        title: 'Consultoría Experta',
        description: 'Equipo de expertos con más de 10 años de experiencia en analytics y estrategia empresarial.',
        color: 'text-accent-2'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["TrendingUp"],
        title: 'Resultados Medibles',
        description: 'Cada proyecto incluye KPIs claros y reportes de ROI para demostrar el valor generado.',
        color: 'text-warning'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Shield"],
        title: 'Seguridad de Datos',
        description: 'Protección de nivel empresarial para tus datos más sensibles con encriptación de extremo a extremo.',
        color: 'text-accent'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Zap"],
        title: 'Procesamiento Rápido',
        description: 'Análisis en tiempo real con latencia mínima para decisiones instantáneas y respuestas inmediatas.',
        color: 'text-accent-2'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Users"],
        title: 'Colaboración en Equipo',
        description: 'Herramientas para compartir insights y trabajar en conjunto de manera eficiente y segura.',
        color: 'text-warning'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Globe"],
        title: 'Cobertura Mundial',
        description: 'Datos de más de 150 países con información detallada de importaciones y exportaciones.',
        color: 'text-accent'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Lock"],
        title: 'Cumplimiento Normativo',
        description: 'Garantía de cumplimiento con todas las regulaciones internacionales de comercio y datos.',
        color: 'text-accent'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Cpu"],
        title: 'Inteligencia Artificial',
        description: 'Algoritmos de IA avanzados para análisis predictivo y detección de anomalías.',
        color: 'text-accent-2'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Target"],
        title: 'Precisión Garantizada',
        description: '99.9% de precisión en todos nuestros datos con verificación continua de calidad.',
        color: 'text-warning'
    }
];
const workflowFeatures = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["RefreshCw"],
        title: 'Actualización automática de datos',
        color: 'text-accent'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Calendar"],
        title: 'Programación de refrescos',
        color: 'text-accent-2'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Code"],
        title: 'API de gestión de activos',
        color: 'text-warning'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Bug"],
        title: 'Herramientas de depuración',
        color: 'text-accent'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Eye"],
        title: 'Vista del código fuente',
        color: 'text-accent-2'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Settings"],
        title: 'Propiedades de usuario y cuenta',
        color: 'text-warning'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Zap"],
        title: 'Fuentes de datos dinámicas',
        color: 'text-accent'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Upload"],
        title: 'Plantillas de dashboard',
        color: 'text-accent-2'
    }
];
const dashboardFeatures = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["BarChart3"],
        title: '30+ visualizaciones de mejores prácticas',
        color: 'text-accent'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Palette"],
        title: 'Tematización personalizada y white-label',
        color: 'text-accent-2'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Layout"],
        title: 'Diseños de dashboard infinitos',
        color: 'text-warning'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Moon"],
        title: 'Soporte integrado para modo oscuro',
        color: 'text-accent'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MousePointer"],
        title: 'Control a nivel de píxel',
        color: 'text-accent-2'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Upload"],
        title: 'Carga de logos',
        color: 'text-warning'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Palette"],
        title: 'Colores e indicadores personalizados',
        color: 'text-accent'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["TrendingUp"],
        title: 'Drill-down',
        color: 'text-accent-2'
    }
];
const decisionFeatures = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Shield"],
        title: 'Construido sobre datos confiables',
        color: 'text-accent'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MessageSquare"],
        title: 'Comentarios para contexto',
        color: 'text-accent-2'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Clock"],
        title: 'Visualizaciones en tiempo real',
        color: 'text-warning'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Database"],
        title: 'Acceso centralizado a datos',
        color: 'text-accent'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Users"],
        title: 'Alineación y colaboración del equipo',
        color: 'text-accent-2'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Target"],
        title: 'Dashboards personalizados',
        color: 'text-warning'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["BarChart3"],
        title: 'Narrativa visual clara',
        color: 'text-accent'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Users"],
        title: 'Empoderamiento para usuarios no técnicos',
        color: 'text-accent-2'
    }
];
const supportFeatures = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Award"],
        title: 'Equipo de soporte legendario',
        color: 'text-accent'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["BookOpen"],
        title: 'Recursos extensos del centro de ayuda',
        color: 'text-accent-2'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Users"],
        title: 'Opciones de incorporación y capacitación',
        color: 'text-warning'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Video"],
        title: 'Guías de video y tutoriales',
        color: 'text-accent'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Lightbulb"],
        title: 'Consejos y sugerencias en la aplicación',
        color: 'text-accent-2'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Award"],
        title: 'Servicios profesionales disponibles',
        color: 'text-warning'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Users"],
        title: 'Red de socios sólida',
        color: 'text-accent'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["BookOpen"],
        title: 'Biblioteca de plantillas curada',
        color: 'text-accent-2'
    }
];
const dashboardExamples = [
    {
        category: 'Ejecutivo',
        title: 'Reportes Ejecutivos',
        description: 'Un dashboard de reportes ejecutivos le da a los líderes una vista rápida y clara del rendimiento empresarial.'
    },
    {
        category: 'Marketing',
        title: 'Marketing Digital',
        description: 'Alcanza tu audiencia objetivo rastreando las métricas principales de marketing digital que miden tu éxito.'
    },
    {
        category: 'Finanzas',
        title: 'Flujo de Caja',
        description: 'Un dashboard de flujo de caja monitorea el poder de gasto inmediato y la posición de efectivo de tu empresa.'
    },
    {
        category: 'Ventas',
        title: 'Ventas Mensuales',
        description: 'Un dashboard de ventas mensuales le da a tu equipo una vista clara y en tiempo real de las metas y rendimiento mensual.'
    },
    {
        category: 'Social',
        title: 'Monitoreo de Redes',
        description: 'Rastrea métricas clave de múltiples plataformas de redes sociales en un dashboard integral.'
    },
    {
        category: 'SaaS',
        title: 'Soporte al Cliente',
        description: 'Un dashboard de soporte te ayuda a ver qué tan bien está funcionando tu servicio al cliente, en tiempo real.'
    }
];
const stats = [
    {
        value: '6.7',
        unit: 'tb',
        label: 'Datos procesados cada 24hrs'
    },
    {
        value: '82',
        unit: '',
        label: 'Países con clientes felices'
    },
    {
        value: '646',
        unit: '',
        label: 'Actualizaciones en 12 meses'
    },
    {
        value: '100',
        unit: 'k',
        label: 'Usuarios activos diarios'
    }
];
const featureTabs = [
    'Automatiza tu flujo de trabajo de gestión de datos',
    'Construye dashboards hermosos',
    'Inspira toma de decisiones confiada',
    'Obtén ayuda cuando la necesites'
];
function Features() {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("section", {
        className: "py-20",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "container mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: itemVariants,
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: {
                        once: true,
                        margin: "-100px"
                    },
                    className: "text-center mb-20",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                            className: "text-5xl lg:text-6xl font-display font-medium text-white mb-6 leading-tight",
                            children: [
                                "Poder de an\xe1lisis con",
                                ' ',
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                    className: "font-bold bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent",
                                    children: "claridad de dashboard"
                                }, void 0, false, {
                                    fileName: "<[project]/components/marketing/features.tsx>",
                                    lineNumber: 199,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/marketing/features.tsx>",
                            lineNumber: 197,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                            className: "text-xl text-muted max-w-4xl mx-auto text-lg",
                            children: "AQSWeb es una soluci\xf3n completa de dashboard que automatiza la recuperaci\xf3n de datos y ofrece opciones ilimitadas de presentaci\xf3n y distribuci\xf3n de dashboards, todo con el poder y la familiaridad de las herramientas de an\xe1lisis modernas."
                        }, void 0, false, {
                            fileName: "<[project]/components/marketing/features.tsx>",
                            lineNumber: 203,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "mt-8",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                className: "bg-gradient-to-r from-accent to-accent-2 text-white font-bold py-4 px-8 rounded-lg text-lg hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary-900",
                                children: "Comenzar"
                            }, void 0, false, {
                                fileName: "<[project]/components/marketing/features.tsx>",
                                lineNumber: 207,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/components/marketing/features.tsx>",
                            lineNumber: 206,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/marketing/features.tsx>",
                    lineNumber: 190,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: itemVariants,
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: {
                        once: true,
                        margin: "-100px"
                    },
                    className: "mb-20 text-center",
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "relative inline-block",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "rounded-lg shadow-2xl",
                            style: {
                                boxShadow: '0px 0px 10px rgba(165, 171, 192, 0.3), 0px 2px 2px rgba(165, 171, 192, 0.6), 0px 4px 4px rgba(165, 171, 192, 0.6), 0px 16px 16px rgba(165, 171, 192, 0.6), 0px 32px 32px rgba(165, 171, 192, 0.6)'
                            },
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "w-full max-w-4xl h-96 bg-gradient-to-br from-primary-800 to-primary-900 rounded-lg flex items-center justify-center",
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Database"], {
                                            className: "w-24 h-24 text-accent mx-auto mb-4"
                                        }, void 0, false, {
                                            fileName: "<[project]/components/marketing/features.tsx>",
                                            lineNumber: 227,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                            className: "text-white text-xl",
                                            children: "Dashboard de An\xe1lisis AQSWeb"
                                        }, void 0, false, {
                                            fileName: "<[project]/components/marketing/features.tsx>",
                                            lineNumber: 228,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                            className: "text-muted text-sm mt-2",
                                            children: "Imagen representativa del sistema"
                                        }, void 0, false, {
                                            fileName: "<[project]/components/marketing/features.tsx>",
                                            lineNumber: 229,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/components/marketing/features.tsx>",
                                    lineNumber: 226,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/components/marketing/features.tsx>",
                                lineNumber: 225,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/components/marketing/features.tsx>",
                            lineNumber: 222,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/components/marketing/features.tsx>",
                        lineNumber: 221,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/components/marketing/features.tsx>",
                    lineNumber: 214,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: itemVariants,
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: {
                        once: true,
                        margin: "-100px"
                    },
                    className: "text-center mb-20",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("h2", {
                            className: "text-3xl lg:text-4xl font-display font-semibold text-white mb-6",
                            children: [
                                "Nos enorgullece ser definidos por la",
                                ' ',
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                    className: "font-bold bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent",
                                    children: "empresa que mantenemos."
                                }, void 0, false, {
                                    fileName: "<[project]/components/marketing/features.tsx>",
                                    lineNumber: 246,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/marketing/features.tsx>",
                            lineNumber: 244,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                            className: "text-xl text-muted mb-8",
                            children: [
                                "M\xe1s de ",
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("strong", {
                                    children: "25,000 clientes"
                                }, void 0, false, {
                                    fileName: "<[project]/components/marketing/features.tsx>",
                                    lineNumber: 251,
                                    columnNumber: 20
                                }, this),
                                " han entregado dashboards incre\xedbles con AQSWeb."
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/marketing/features.tsx>",
                            lineNumber: 250,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "bg-primary-800 rounded-lg p-8",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "grid grid-cols-2 md:grid-cols-4 gap-8",
                                children: [
                                    1,
                                    2,
                                    3,
                                    4
                                ].map((i)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "w-16 h-16 bg-primary-700 rounded-lg mx-auto mb-4 flex items-center justify-center",
                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Database"], {
                                                    className: "w-8 h-8 text-accent"
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/marketing/features.tsx>",
                                                    lineNumber: 258,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/components/marketing/features.tsx>",
                                                lineNumber: 257,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                className: "text-white font-semibold",
                                                children: [
                                                    "Cliente ",
                                                    i
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/components/marketing/features.tsx>",
                                                lineNumber: 260,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "<[project]/components/marketing/features.tsx>",
                                        lineNumber: 256,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "<[project]/components/marketing/features.tsx>",
                                lineNumber: 254,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/components/marketing/features.tsx>",
                            lineNumber: 253,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/marketing/features.tsx>",
                    lineNumber: 237,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: itemVariants,
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: {
                        once: true,
                        margin: "-100px"
                    },
                    className: "text-center mb-20",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("h2", {
                            className: "text-3xl lg:text-4xl font-display font-medium text-white mb-6",
                            children: [
                                "El an\xe1lisis tradicional no est\xe1 hecho para dashboards.",
                                ' ',
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                    className: "font-bold bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent",
                                    children: "AQSWeb s\xed lo est\xe1."
                                }, void 0, false, {
                                    fileName: "<[project]/components/marketing/features.tsx>",
                                    lineNumber: 277,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/marketing/features.tsx>",
                            lineNumber: 275,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                            className: "text-lg text-muted max-w-4xl mx-auto",
                            children: [
                                "Lo entendemos. Eres un ",
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("strong", {
                                    children: "profesional del an\xe1lisis"
                                }, void 0, false, {
                                    fileName: "<[project]/components/marketing/features.tsx>",
                                    lineNumber: 282,
                                    columnNumber: 36
                                }, this),
                                '—un maestro de f\xf3rmulas, filtros y tablas din\xe1micas. Pero, con datos dispersos en herramientas, errores esperando suceder, y gr\xe1ficos que apenas pasan como "intuitivos", es hora de que tus dashboards den un paso adelante.'
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/marketing/features.tsx>",
                            lineNumber: 281,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/marketing/features.tsx>",
                    lineNumber: 268,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: itemVariants,
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: {
                        once: true,
                        margin: "-100px"
                    },
                    className: "mb-20",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "text-center mb-12",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("h2", {
                                    className: "text-3xl lg:text-4xl font-display font-medium text-white mb-6",
                                    children: [
                                        "Tres pasos simples para",
                                        ' ',
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                            className: "font-bold bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent",
                                            children: "el \xe9xito del dashboard."
                                        }, void 0, false, {
                                            fileName: "<[project]/components/marketing/features.tsx>",
                                            lineNumber: 297,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/components/marketing/features.tsx>",
                                    lineNumber: 295,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "flex justify-center space-x-8 mb-8",
                                    children: [
                                        'Conectar',
                                        'Construir',
                                        'Compartir'
                                    ].map((step, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: `w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold ${index === 0 ? 'bg-accent text-white' : 'bg-primary-700 text-muted'}`,
                                                    children: index + 1
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/marketing/features.tsx>",
                                                    lineNumber: 304,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: `mt-2 font-bold ${index === 0 ? 'text-accent' : 'text-muted'}`,
                                                    children: step
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/marketing/features.tsx>",
                                                    lineNumber: 309,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, step, true, {
                                            fileName: "<[project]/components/marketing/features.tsx>",
                                            lineNumber: 303,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "<[project]/components/marketing/features.tsx>",
                                    lineNumber: 301,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/marketing/features.tsx>",
                            lineNumber: 294,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "grid lg:grid-cols-2 gap-12",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "space-y-8",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "flex items-start space-x-4",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "w-12 h-12 bg-primary-800 rounded-lg flex items-center justify-center flex-shrink-0",
                                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Database"], {
                                                        className: "w-6 h-6 text-accent"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/marketing/features.tsx>",
                                                        lineNumber: 321,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/marketing/features.tsx>",
                                                    lineNumber: 320,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("h4", {
                                                            className: "text-xl font-semibold text-white mb-2",
                                                            children: "Automatiza datos desde hojas de c\xe1lculo"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/marketing/features.tsx>",
                                                            lineNumber: 324,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                            className: "text-muted",
                                                            children: "Extrae datos en vivo directamente desde Excel o Sheets y deja de perseguir los n\xfameros de ayer."
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/marketing/features.tsx>",
                                                            lineNumber: 325,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/components/marketing/features.tsx>",
                                                    lineNumber: 323,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/components/marketing/features.tsx>",
                                            lineNumber: 319,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "flex items-start space-x-4",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "w-12 h-12 bg-primary-800 rounded-lg flex items-center justify-center flex-shrink-0",
                                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Globe"], {
                                                        className: "w-6 h-6 text-accent-2"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/marketing/features.tsx>",
                                                        lineNumber: 331,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/marketing/features.tsx>",
                                                    lineNumber: 330,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("h4", {
                                                            className: "text-xl font-semibold text-white mb-2",
                                                            children: "Conecta directamente a 200+ servicios"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/marketing/features.tsx>",
                                                            lineNumber: 334,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                            className: "text-muted",
                                                            children: "Ya sea tu CRM, Google Ads o redes sociales, tus datos se mantienen conectados y confiables."
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/marketing/features.tsx>",
                                                            lineNumber: 335,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/components/marketing/features.tsx>",
                                                    lineNumber: 333,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/components/marketing/features.tsx>",
                                            lineNumber: 329,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/components/marketing/features.tsx>",
                                    lineNumber: 318,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "space-y-8",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "flex items-start space-x-4",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "w-12 h-12 bg-primary-800 rounded-lg flex items-center justify-center flex-shrink-0",
                                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Shield"], {
                                                        className: "w-6 h-6 text-warning"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/marketing/features.tsx>",
                                                        lineNumber: 343,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/marketing/features.tsx>",
                                                    lineNumber: 342,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("h4", {
                                                            className: "text-xl font-semibold text-white mb-2",
                                                            children: "Salta el almac\xe9n de datos (o no)"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/marketing/features.tsx>",
                                                            lineNumber: 346,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                            className: "text-muted",
                                                            children: "\xbfA\xfan trabajando en tu infraestructura de datos? AQSWeb funciona genial con o sin un almac\xe9n de datos."
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/marketing/features.tsx>",
                                                            lineNumber: 347,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/components/marketing/features.tsx>",
                                                    lineNumber: 345,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/components/marketing/features.tsx>",
                                            lineNumber: 341,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "flex items-start space-x-4",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "w-12 h-12 bg-primary-800 rounded-lg flex items-center justify-center flex-shrink-0",
                                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Code"], {
                                                        className: "w-6 h-6 text-accent"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/marketing/features.tsx>",
                                                        lineNumber: 353,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/marketing/features.tsx>",
                                                    lineNumber: 352,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("h4", {
                                                            className: "text-xl font-semibold text-white mb-2",
                                                            children: "Ve pro con SQL, REST y m\xe1s"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/marketing/features.tsx>",
                                                            lineNumber: 356,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                            className: "text-muted",
                                                            children: "Obt\xe9n datos de casi cualquier lugar con un conjunto robusto de conectores de consulta."
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/marketing/features.tsx>",
                                                            lineNumber: 357,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/components/marketing/features.tsx>",
                                                    lineNumber: 355,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/components/marketing/features.tsx>",
                                            lineNumber: 351,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/components/marketing/features.tsx>",
                                    lineNumber: 340,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/marketing/features.tsx>",
                            lineNumber: 317,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/marketing/features.tsx>",
                    lineNumber: 287,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: itemVariants,
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: {
                        once: true,
                        margin: "-100px"
                    },
                    className: "mb-20",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "text-center mb-12",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("h2", {
                                    className: "text-3xl lg:text-4xl font-display font-medium text-white mb-6",
                                    children: [
                                        "Dashboards que deslumbran con herramientas",
                                        ' ',
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                            className: "font-bold bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent",
                                            children: "que entregan."
                                        }, void 0, false, {
                                            fileName: "<[project]/components/marketing/features.tsx>",
                                            lineNumber: 375,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/components/marketing/features.tsx>",
                                    lineNumber: 373,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                    className: "text-lg text-muted max-w-4xl mx-auto",
                                    children: [
                                        "AQSWeb tiene todo lo que necesitas para ir de datos desordenados a dashboards pulidos.",
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("br", {}, void 0, false, {
                                            fileName: "<[project]/components/marketing/features.tsx>",
                                            lineNumber: 381,
                                            columnNumber: 15
                                        }, this),
                                        "Sin l\xedmites, sin problemas, sin complicaciones."
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/components/marketing/features.tsx>",
                                    lineNumber: 379,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/marketing/features.tsx>",
                            lineNumber: 372,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "grid lg:grid-cols-2 gap-12",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "space-y-4 mb-8",
                                        children: featureTabs.map((title, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: `cursor-pointer p-4 rounded-lg transition-colors ${index === 0 ? 'bg-accent/20 border border-accent' : 'bg-primary-800 hover:bg-primary-700'}`,
                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("h4", {
                                                    className: "text-lg font-medium text-white",
                                                    children: title
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/marketing/features.tsx>",
                                                    lineNumber: 392,
                                                    columnNumber: 21
                                                }, this)
                                            }, index, false, {
                                                fileName: "<[project]/components/marketing/features.tsx>",
                                                lineNumber: 389,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "<[project]/components/marketing/features.tsx>",
                                        lineNumber: 387,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/components/marketing/features.tsx>",
                                    lineNumber: 386,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "bg-primary-800 rounded-lg p-8",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "w-full h-64 bg-gradient-to-br from-primary-700 to-primary-800 rounded-lg mb-6 flex items-center justify-center",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Database"], {
                                                className: "w-16 h-16 text-accent"
                                            }, void 0, false, {
                                                fileName: "<[project]/components/marketing/features.tsx>",
                                                lineNumber: 400,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/components/marketing/features.tsx>",
                                            lineNumber: 399,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "grid grid-cols-2 gap-4",
                                            children: workflowFeatures.slice(0, 8).map((feature, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "flex items-center space-x-3",
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                            className: `w-8 h-8 bg-primary-700 rounded-lg flex items-center justify-center ${feature.color}`,
                                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](feature.icon, {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/marketing/features.tsx>",
                                                                lineNumber: 406,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/marketing/features.tsx>",
                                                            lineNumber: 405,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                            className: "text-sm font-medium text-white",
                                                            children: feature.title
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/marketing/features.tsx>",
                                                            lineNumber: 408,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "<[project]/components/marketing/features.tsx>",
                                                    lineNumber: 404,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "<[project]/components/marketing/features.tsx>",
                                            lineNumber: 402,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/components/marketing/features.tsx>",
                                    lineNumber: 398,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/marketing/features.tsx>",
                            lineNumber: 385,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/marketing/features.tsx>",
                    lineNumber: 365,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: itemVariants,
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: {
                        once: true,
                        margin: "-100px"
                    },
                    className: "mb-20",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "text-center mb-12",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("h2", {
                                    className: "text-3xl lg:text-4xl font-display font-medium text-white mb-6",
                                    children: [
                                        "Click. Boom.",
                                        ' ',
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                            className: "font-bold bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent",
                                            children: "Inspirado."
                                        }, void 0, false, {
                                            fileName: "<[project]/components/marketing/features.tsx>",
                                            lineNumber: 427,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/components/marketing/features.tsx>",
                                    lineNumber: 425,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                    className: "text-lg text-muted max-w-4xl mx-auto",
                                    children: "Miles de empresas como la tuya han automatizado sus flujos de trabajo de dashboarding y reporting y han impresionado a sus equipos o clientes con AQSWeb."
                                }, void 0, false, {
                                    fileName: "<[project]/components/marketing/features.tsx>",
                                    lineNumber: 431,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/marketing/features.tsx>",
                            lineNumber: 424,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                            children: dashboardExamples.map((example, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "bg-primary-800 rounded-lg p-6 hover:bg-primary-700 transition-colors",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "mb-4",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                className: "text-xs font-bold text-accent bg-accent/20 px-2 py-1 rounded",
                                                children: example.category
                                            }, void 0, false, {
                                                fileName: "<[project]/components/marketing/features.tsx>",
                                                lineNumber: 440,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/components/marketing/features.tsx>",
                                            lineNumber: 439,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("h4", {
                                            className: "text-lg font-semibold text-white mb-3",
                                            children: example.title
                                        }, void 0, false, {
                                            fileName: "<[project]/components/marketing/features.tsx>",
                                            lineNumber: 444,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                            className: "text-muted text-sm mb-4",
                                            children: example.description
                                        }, void 0, false, {
                                            fileName: "<[project]/components/marketing/features.tsx>",
                                            lineNumber: 445,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "w-full h-32 bg-gradient-to-br from-primary-700 to-primary-800 rounded-lg flex items-center justify-center",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["BarChart3"], {
                                                className: "w-8 h-8 text-accent"
                                            }, void 0, false, {
                                                fileName: "<[project]/components/marketing/features.tsx>",
                                                lineNumber: 447,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/components/marketing/features.tsx>",
                                            lineNumber: 446,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "<[project]/components/marketing/features.tsx>",
                                    lineNumber: 438,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "<[project]/components/marketing/features.tsx>",
                            lineNumber: 436,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/marketing/features.tsx>",
                    lineNumber: 417,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: itemVariants,
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: {
                        once: true,
                        margin: "-100px"
                    },
                    className: "mb-20",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "text-center mb-12",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("h2", {
                                    className: "text-3xl lg:text-4xl font-display font-medium text-white mb-6",
                                    children: [
                                        "Fuerza en n\xfameros. Y",
                                        ' ',
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                            className: "font-bold bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent",
                                            children: "en estrellas."
                                        }, void 0, false, {
                                            fileName: "<[project]/components/marketing/features.tsx>",
                                            lineNumber: 465,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/components/marketing/features.tsx>",
                                    lineNumber: 463,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                    className: "text-lg text-muted",
                                    children: "Amamos lo que hacemos. Y nuestros clientes tambi\xe9n."
                                }, void 0, false, {
                                    fileName: "<[project]/components/marketing/features.tsx>",
                                    lineNumber: 469,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/marketing/features.tsx>",
                            lineNumber: 462,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "grid grid-cols-2 md:grid-cols-5 gap-8",
                            children: [
                                stats.map((stat, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "text-4xl font-bold bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent mb-2",
                                                children: [
                                                    stat.value,
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                        className: "text-2xl",
                                                        children: stat.unit
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/marketing/features.tsx>",
                                                        lineNumber: 478,
                                                        columnNumber: 31
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/components/marketing/features.tsx>",
                                                lineNumber: 477,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                className: "text-muted",
                                                children: stat.label
                                            }, void 0, false, {
                                                fileName: "<[project]/components/marketing/features.tsx>",
                                                lineNumber: 480,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "<[project]/components/marketing/features.tsx>",
                                        lineNumber: 476,
                                        columnNumber: 15
                                    }, this)),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "w-32 h-16 bg-primary-800 rounded-lg mx-auto mb-2 flex items-center justify-center",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Award"], {
                                                className: "w-8 h-8 text-accent"
                                            }, void 0, false, {
                                                fileName: "<[project]/components/marketing/features.tsx>",
                                                lineNumber: 485,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/components/marketing/features.tsx>",
                                            lineNumber: 484,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                            className: "text-muted",
                                            children: "G2 Crowd High Performer"
                                        }, void 0, false, {
                                            fileName: "<[project]/components/marketing/features.tsx>",
                                            lineNumber: 487,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/components/marketing/features.tsx>",
                                    lineNumber: 483,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/marketing/features.tsx>",
                            lineNumber: 474,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/marketing/features.tsx>",
                    lineNumber: 455,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: itemVariants,
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: {
                        once: true,
                        margin: "-100px"
                    },
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("h2", {
                            className: "text-3xl lg:text-4xl font-display font-medium text-white mb-6",
                            children: [
                                "Ver ojo a ojo con los datos",
                                ' ',
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                    className: "font-bold bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent",
                                    children: "no deber\xeda costar un brazo y una pierna."
                                }, void 0, false, {
                                    fileName: "<[project]/components/marketing/features.tsx>",
                                    lineNumber: 502,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/marketing/features.tsx>",
                            lineNumber: 500,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                            className: "text-lg text-muted mb-8",
                            children: [
                                "Los precios de AQSWeb comienzan en solo",
                                ' ',
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                    className: "font-bold text-white",
                                    children: "$120/mes"
                                }, void 0, false, {
                                    fileName: "<[project]/components/marketing/features.tsx>",
                                    lineNumber: 508,
                                    columnNumber: 13
                                }, this),
                                " USD.",
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("br", {}, void 0, false, {
                                    fileName: "<[project]/components/marketing/features.tsx>",
                                    lineNumber: 509,
                                    columnNumber: 13
                                }, this),
                                "Un peque\xf1o precio a pagar por la confianza."
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/marketing/features.tsx>",
                            lineNumber: 506,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                            className: "bg-gradient-to-r from-accent to-accent-2 text-white font-bold py-4 px-8 rounded-lg text-lg hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary-900",
                            children: "Ver Precios"
                        }, void 0, false, {
                            fileName: "<[project]/components/marketing/features.tsx>",
                            lineNumber: 511,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/marketing/features.tsx>",
                    lineNumber: 493,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/components/marketing/features.tsx>",
            lineNumber: 188,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/components/marketing/features.tsx>",
        lineNumber: 187,
        columnNumber: 5
    }, this);
}

})()),

};

//# sourceMappingURL=components_marketing_features_tsx_59ec34._.js.map