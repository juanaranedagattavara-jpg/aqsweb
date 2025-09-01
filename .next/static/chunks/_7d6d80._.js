(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_7d6d80._.js", {

"[project]/lib/dashboard-data.ts [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "dashboardCards": ()=>dashboardCards
});
const dashboardCards = [
    {
        id: 'analitico',
        title: 'Dashboard Analítico',
        type: 'analitico',
        description: 'Monitoreo en tiempo real de métricas clave de comercio exterior con análisis profundo de datos y tendencias del mercado.',
        features: [
            'Volúmenes de exportación por región',
            'Tendencias de precios y demanda',
            'Análisis de competencia',
            'Indicadores de rendimiento'
        ]
    },
    {
        id: 'tendencias',
        title: 'Dashboard de Tendencias',
        type: 'tendencias',
        description: 'Visualización dinámica de patrones y flujos del mercado con predicciones estacionales y alertas de oportunidades.',
        features: [
            'Análisis de ondas de demanda',
            'Predicciones estacionales',
            'Cambios en preferencias del mercado',
            'Alertas de oportunidades'
        ]
    },
    {
        id: 'geometrico',
        title: 'Dashboard Geométrico',
        type: 'geometrico',
        description: 'Representación estructural de datos complejos con mapeo de relaciones comerciales y análisis de clusters.',
        features: [
            'Mapeo de relaciones comerciales',
            'Análisis de clusters de mercado',
            'Patrones de distribución geográfica',
            'Segmentación de clientes'
        ]
    },
    {
        id: 'redes',
        title: 'Dashboard de Redes',
        type: 'redes',
        description: 'Análisis de conexiones y flujos comerciales con mapeo de cadenas de suministro y socios comerciales.',
        features: [
            'Mapeo de cadenas de suministro',
            'Análisis de socios comerciales',
            'Flujos de capital y mercancías',
            'Identificación de cuellos de botella'
        ]
    },
    {
        id: 'mercado',
        title: 'Dashboard de Mercado',
        type: 'mercado',
        description: 'Análisis completo del mercado con métricas de participación, segmentación y oportunidades de crecimiento.',
        features: [
            'Market share por empresa',
            'Segmentación de mercados',
            'Análisis de productos',
            'Oportunidades de expansión'
        ]
    },
    {
        id: 'competencia',
        title: 'Dashboard de Competencia',
        type: 'competencia',
        description: 'Monitoreo inteligente de la competencia con análisis de posicionamiento y estrategias competitivas.',
        features: [
            'Análisis de posicionamiento',
            'Estrategias competitivas',
            'Benchmarking de rendimiento',
            'Alertas de movimientos'
        ]
    }
];

})()),
"[project]/lib/utils.ts [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "capitalize": ()=>capitalize,
    "cn": ()=>cn,
    "debounce": ()=>debounce,
    "formatDate": ()=>formatDate,
    "formatNumber": ()=>formatNumber,
    "generateGradient": ()=>generateGradient,
    "generateId": ()=>generateId,
    "getContrastColor": ()=>getContrastColor,
    "isInViewport": ()=>isInViewport,
    "isValidEmail": ()=>isValidEmail,
    "isValidUrl": ()=>isValidUrl,
    "simpleHash": ()=>simpleHash,
    "smoothScrollTo": ()=>smoothScrollTo,
    "throttle": ()=>throttle,
    "truncateText": ()=>truncateText
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["twMerge"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["clsx"](inputs));
}
function generateId() {
    let prefix = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'id';
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}
function debounce(func, wait) {
    let timeout;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        clearTimeout(timeout);
        timeout = setTimeout(()=>func(...args), wait);
    };
}
function throttle(func, limit) {
    let inThrottle;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(()=>inThrottle = false, limit);
        }
    };
}
function formatNumber(num, options) {
    return new Intl.NumberFormat('es-ES', options).format(num);
}
function formatDate(date, options) {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return new Intl.DateTimeFormat('es-ES', options).format(dateObj);
}
function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + '...';
}
function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}
function generateGradient(colors) {
    let direction = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'to-r';
    return `linear-gradient(${direction}, ${colors.join(', ')})`;
}
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function isValidUrl(url) {
    try {
        new URL(url);
        return true;
    } catch  {
        return false;
    }
}
function getContrastColor(hexColor) {
    const hex = hexColor.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? 'black' : 'white';
}
function simpleHash(str) {
    let hash = 0;
    for(let i = 0; i < str.length; i++){
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash // Convert to 32bit integer
        ;
    }
    return Math.abs(hash);
}
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}
function smoothScrollTo(element) {
    let offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    const target = typeof element === 'string' ? document.querySelector(element) : element;
    if (target) {
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

})()),
"[project]/components/ui/button.tsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Button": ()=>Button,
    "buttonVariants": ()=>buttonVariants
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/class-variance-authority/dist/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
const buttonVariants = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["cva"]("inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-accent text-white shadow-glow-blue hover:shadow-glow-blue hover:scale-105",
            secondary: "bg-transparent text-white border border-border hover:bg-white/5",
            outline: "bg-transparent text-accent border-2 border-accent hover:bg-accent hover:text-white",
            ghost: "bg-transparent text-white hover:bg-white/5",
            destructive: "bg-red-600 text-white hover:bg-red-700",
            premium: "bg-gradient-to-r from-accent to-accent-2 text-white shadow-glow-blue hover:shadow-glow-blue hover:scale-105"
        },
        size: {
            default: "h-12 px-6 py-3",
            sm: "h-9 px-4 py-2",
            lg: "h-14 px-8 py-4 text-base",
            xl: "h-16 px-10 py-5 text-lg",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__.forwardRef(_c = (param, ref)=>{
    let { className, variant, size, asChild = false, ...props } = param;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](Comp, {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"](buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "<[project]/components/ui/button.tsx>",
        lineNumber: 43,
        columnNumber: 7
    }, this);
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_refresh__.register(_c, "Button$React.forwardRef");
__turbopack_refresh__.register(_c1, "Button");

})()),
"[project]/components/ui/dashboard-carousel.tsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "DashboardCarousel": ()=>DashboardCarousel
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/lucide-react.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/button.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
function DashboardCarousel(param) {
    let { cards, title = "Dashboards Disponibles", description = "Explora nuestros dashboards interactivos diseñados para el comercio exterior" } = param;
    _s();
    const [currentIndex, setCurrentIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](0);
    const [isAutoPlaying, setIsAutoPlaying] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](true);
    // Auto-play functionality
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (!isAutoPlaying) return;
        const interval = setInterval(()=>{
            setCurrentIndex((prev)=>{
                const nextIndex = prev + 3;
                return nextIndex >= cards.length ? 0 : nextIndex;
            });
        }, 5000);
        return ()=>clearInterval(interval);
    }, [
        isAutoPlaying,
        cards.length
    ]);
    const nextSlide = ()=>{
        setCurrentIndex((prev)=>{
            const nextIndex = prev + 3;
            return nextIndex >= cards.length ? 0 : nextIndex;
        });
        setIsAutoPlaying(false);
    };
    const prevSlide = ()=>{
        setCurrentIndex((prev)=>{
            const prevIndex = prev - 3;
            return prevIndex < 0 ? Math.max(0, cards.length - 3) : prevIndex;
        });
        setIsAutoPlaying(false);
    };
    const goToSlide = (index)=>{
        setCurrentIndex(index);
        setIsAutoPlaying(false);
    };
    const pauseAutoPlay = ()=>setIsAutoPlaying(false);
    const resumeAutoPlay = ()=>setIsAutoPlaying(true);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "text-center mb-12",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h2", {
                        className: "text-3xl md:text-4xl font-bold text-white mb-4",
                        children: title
                    }, void 0, false, {
                        fileName: "<[project]/components/ui/dashboard-carousel.tsx>",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                        className: "text-xl text-gray-300 max-w-2xl mx-auto",
                        children: description
                    }, void 0, false, {
                        fileName: "<[project]/components/ui/dashboard-carousel.tsx>",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/components/ui/dashboard-carousel.tsx>",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "relative group",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                        onClick: prevSlide,
                        className: "absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 backdrop-blur-sm border border-white/20",
                        "aria-label": "Anterior slide",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ChevronLeft"], {
                            className: "w-6 h-6"
                        }, void 0, false, {
                            fileName: "<[project]/components/ui/dashboard-carousel.tsx>",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/components/ui/dashboard-carousel.tsx>",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                        onClick: nextSlide,
                        className: "absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 backdrop-blur-sm border border-white/20",
                        "aria-label": "Siguiente slide",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ChevronRight"], {
                            className: "w-6 h-6"
                        }, void 0, false, {
                            fileName: "<[project]/components/ui/dashboard-carousel.tsx>",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/components/ui/dashboard-carousel.tsx>",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "overflow-hidden rounded-2xl",
                        onMouseEnter: pauseAutoPlay,
                        onMouseLeave: resumeAutoPlay,
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "flex transition-transform duration-500 ease-out",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                mode: "wait",
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        x: 100
                                    },
                                    animate: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    exit: {
                                        opacity: 0,
                                        x: -100
                                    },
                                    transition: {
                                        duration: 0.5
                                    },
                                    className: "w-full flex-shrink-0",
                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6",
                                        children: Array.from({
                                            length: 3
                                        }).map((_, index)=>{
                                            const cardIndex = currentIndex + index;
                                            const card = cards[cardIndex];
                                            if (!card) return null;
                                            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    y: 20
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                transition: {
                                                    duration: 0.5,
                                                    delay: index * 0.1
                                                },
                                                className: "group/card",
                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "bg-gradient-to-br from-primary-900/20 to-primary-800/20 border border-primary-500/30 rounded-2xl p-6 h-full hover:scale-105 transition-all duration-300 cursor-pointer backdrop-blur-sm",
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                            className: "h-32 mb-4 rounded-lg bg-gradient-to-br from-primary-600/20 to-primary-400/20 border border-primary-500/30 flex items-center justify-center",
                                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                className: "text-primary-400 text-4xl",
                                                                children: [
                                                                    card.type === 'analitico' && '📊',
                                                                    card.type === 'tendencias' && '🌊',
                                                                    card.type === 'geometrico' && '🔷',
                                                                    card.type === 'redes' && '🌐',
                                                                    card.type === 'mercado' && '📈',
                                                                    card.type === 'competencia' && '🎯'
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "<[project]/components/ui/dashboard-carousel.tsx>",
                                                                lineNumber: 135,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/ui/dashboard-carousel.tsx>",
                                                            lineNumber: 134,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                                            className: "text-xl font-bold text-white mb-3 group-hover/card:text-primary-400 transition-colors",
                                                            children: card.title
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/ui/dashboard-carousel.tsx>",
                                                            lineNumber: 146,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                            className: "text-gray-300 text-sm mb-4 line-clamp-3",
                                                            children: card.description
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/ui/dashboard-carousel.tsx>",
                                                            lineNumber: 149,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/dashboard",
                                                            className: "inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors group-hover/card:text-primary-300",
                                                            children: [
                                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                    className: "text-sm font-medium",
                                                                    children: "Explorar Dashboard"
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/components/ui/dashboard-carousel.tsx>",
                                                                    lineNumber: 155,
                                                                    columnNumber: 28
                                                                }, this),
                                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ArrowRight"], {
                                                                    className: "w-4 h-4 ml-2 group-hover/card:translate-x-1 transition-transform"
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/components/ui/dashboard-carousel.tsx>",
                                                                    lineNumber: 156,
                                                                    columnNumber: 28
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "<[project]/components/ui/dashboard-carousel.tsx>",
                                                            lineNumber: 154,
                                                            columnNumber: 26
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/components/ui/dashboard-carousel.tsx>",
                                                    lineNumber: 132,
                                                    columnNumber: 23
                                                }, this)
                                            }, `${currentIndex}-${index}`, false, {
                                                fileName: "<[project]/components/ui/dashboard-carousel.tsx>",
                                                lineNumber: 125,
                                                columnNumber: 24
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "<[project]/components/ui/dashboard-carousel.tsx>",
                                        lineNumber: 116,
                                        columnNumber: 34
                                    }, this)
                                }, currentIndex, false, {
                                    fileName: "<[project]/components/ui/dashboard-carousel.tsx>",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/components/ui/dashboard-carousel.tsx>",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/components/ui/dashboard-carousel.tsx>",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/components/ui/dashboard-carousel.tsx>",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex justify-center mt-8 space-x-2",
                        children: Array.from({
                            length: Math.ceil(cards.length / 3)
                        }).map((_, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                onClick: ()=>goToSlide(index * 3),
                                className: `w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index * 3 ? 'bg-primary-500 scale-125' : 'bg-gray-600 hover:bg-gray-500'}`,
                                "aria-label": `Ir al slide ${index + 1}`
                            }, index, false, {
                                fileName: "<[project]/components/ui/dashboard-carousel.tsx>",
                                lineNumber: 171,
                                columnNumber: 14
                            }, this))
                    }, void 0, false, {
                        fileName: "<[project]/components/ui/dashboard-carousel.tsx>",
                        lineNumber: 169,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex justify-center mt-6",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "text-sm text-gray-400",
                            children: [
                                Math.floor(currentIndex / 3) + 1,
                                " de ",
                                Math.ceil(cards.length / 3)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/ui/dashboard-carousel.tsx>",
                            lineNumber: 186,
                            columnNumber: 12
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/components/ui/dashboard-carousel.tsx>",
                        lineNumber: 185,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex justify-center mt-4 space-x-2",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                onClick: pauseAutoPlay,
                                className: `px-3 py-1 text-xs rounded-full transition-all ${!isAutoPlaying ? 'bg-primary-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`,
                                children: "Pausar"
                            }, void 0, false, {
                                fileName: "<[project]/components/ui/dashboard-carousel.tsx>",
                                lineNumber: 193,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                onClick: resumeAutoPlay,
                                className: `px-3 py-1 text-xs rounded-full transition-all ${isAutoPlaying ? 'bg-primary-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`,
                                children: "Reproducir"
                            }, void 0, false, {
                                fileName: "<[project]/components/ui/dashboard-carousel.tsx>",
                                lineNumber: 203,
                                columnNumber: 12
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/components/ui/dashboard-carousel.tsx>",
                        lineNumber: 192,
                        columnNumber: 10
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/components/ui/dashboard-carousel.tsx>",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "text-center mt-12",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/dashboard",
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "premium",
                        size: "lg",
                        className: "group",
                        children: [
                            "Ver Todos los Dashboards",
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ArrowRight"], {
                                className: "w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                            }, void 0, false, {
                                fileName: "<[project]/components/ui/dashboard-carousel.tsx>",
                                lineNumber: 221,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/components/ui/dashboard-carousel.tsx>",
                        lineNumber: 219,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/components/ui/dashboard-carousel.tsx>",
                    lineNumber: 218,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/components/ui/dashboard-carousel.tsx>",
                lineNumber: 217,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/components/ui/dashboard-carousel.tsx>",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_s(DashboardCarousel, "GaMjhoJL+kq9QyJhTWKgFkGeqfI=");
_c = DashboardCarousel;
var _c;
__turbopack_refresh__.register(_c, "DashboardCarousel");

})()),
"[project]/components/ui/input.tsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Input": ()=>Input
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__.forwardRef(_c = (param, ref)=>{
    let { className, type, error, success, ...props } = param;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
        type: type,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"]("input w-full px-4 py-3 bg-primary-800 border border-border rounded-lg text-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200", error && "border-red-500 focus:ring-red-500", success && "border-green-500 focus:ring-green-500", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "<[project]/components/ui/input.tsx>",
        lineNumber: 13,
        columnNumber: 7
    }, this);
});
_c1 = Input;
Input.displayName = "Input";
;
var _c, _c1;
__turbopack_refresh__.register(_c, "Input$React.forwardRef");
__turbopack_refresh__.register(_c1, "Input");

})()),
"[project]/components/ui/card.tsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Card": ()=>Card,
    "CardContent": ()=>CardContent,
    "CardDescription": ()=>CardDescription,
    "CardFooter": ()=>CardFooter,
    "CardHeader": ()=>CardHeader,
    "CardTitle": ()=>CardTitle
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__.forwardRef(_c = (param, ref)=>/*#__PURE__*/ {
    let { className, ...props } = param;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        ref: ref,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"]("card", className),
        ...props
    }, void 0, false, {
        fileName: "<[project]/components/ui/card.tsx>",
        lineNumber: 8,
        columnNumber: 3
    }, this);
});
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__.forwardRef(_c2 = (param, ref)=>/*#__PURE__*/ {
    let { className, ...props } = param;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        ref: ref,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"]("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "<[project]/components/ui/card.tsx>",
        lineNumber: 23,
        columnNumber: 3
    }, this);
});
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__.forwardRef(_c4 = (param, ref)=>/*#__PURE__*/ {
    let { className, ...props } = param;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
        ref: ref,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"]("text-xl font-semibold text-white", className),
        ...props
    }, void 0, false, {
        fileName: "<[project]/components/ui/card.tsx>",
        lineNumber: 35,
        columnNumber: 3
    }, this);
});
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__.forwardRef(_c6 = (param, ref)=>/*#__PURE__*/ {
    let { className, ...props } = param;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
        ref: ref,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"]("text-muted leading-relaxed", className),
        ...props
    }, void 0, false, {
        fileName: "<[project]/components/ui/card.tsx>",
        lineNumber: 47,
        columnNumber: 3
    }, this);
});
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__.forwardRef(_c8 = (param, ref)=>/*#__PURE__*/ {
    let { className, ...props } = param;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        ref: ref,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"]("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "<[project]/components/ui/card.tsx>",
        lineNumber: 59,
        columnNumber: 3
    }, this);
});
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__.forwardRef(_c10 = (param, ref)=>/*#__PURE__*/ {
    let { className, ...props } = param;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        ref: ref,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"]("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "<[project]/components/ui/card.tsx>",
        lineNumber: 67,
        columnNumber: 3
    }, this);
});
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_refresh__.register(_c, "Card$React.forwardRef");
__turbopack_refresh__.register(_c1, "Card");
__turbopack_refresh__.register(_c2, "CardHeader$React.forwardRef");
__turbopack_refresh__.register(_c3, "CardHeader");
__turbopack_refresh__.register(_c4, "CardTitle$React.forwardRef");
__turbopack_refresh__.register(_c5, "CardTitle");
__turbopack_refresh__.register(_c6, "CardDescription$React.forwardRef");
__turbopack_refresh__.register(_c7, "CardDescription");
__turbopack_refresh__.register(_c8, "CardContent$React.forwardRef");
__turbopack_refresh__.register(_c9, "CardContent");
__turbopack_refresh__.register(_c10, "CardFooter$React.forwardRef");
__turbopack_refresh__.register(_c11, "CardFooter");

})()),
"[project]/app/solicitar-demo/page.tsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>SolicitarDemoPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$calendar$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-calendar/dist/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/date-fns/format.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/date-fns/locale.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/card.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/input.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/button.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/lucide-react.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dashboard$2d$carousel$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/dashboard-carousel.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dashboard$2d$data$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/dashboard-data.ts [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
const horasDisponibles = [
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00'
];
function SolicitarDemoPage() {
    _s();
    const [formData, setFormData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"]({
        nombre: '',
        email: '',
        fecha: null,
        hora: ''
    });
    const [isSubmitted, setIsSubmitted] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [errors, setErrors] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"]({});
    const handleInputChange = (field, value)=>{
        setFormData((prev)=>({
                ...prev,
                [field]: value
            }));
        // Limpiar error del campo
        if (errors[field]) {
            setErrors((prev)=>({
                    ...prev,
                    [field]: undefined
                }));
        }
    };
    const validateForm = ()=>{
        const newErrors = {};
        if (!formData.nombre.trim()) {
            newErrors.nombre = 'El nombre es requerido';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'El email es requerido';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'El email no es válido';
        }
        if (!formData.fecha) {
            newErrors.fecha = 'Selecciona una fecha';
        }
        if (!formData.hora) {
            newErrors.hora = 'Selecciona una hora';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (validateForm()) {
            // Aquí puedes enviar los datos a tu API
            console.log('Datos del demo:', formData);
            setIsSubmitted(true);
            // Resetear formulario después de 3 segundos
            setTimeout(()=>{
                setIsSubmitted(false);
                setFormData({
                    nombre: '',
                    email: '',
                    fecha: null,
                    hora: ''
                });
            }, 3000);
        }
    };
    const tileDisabled = (param)=>{
        let { date } = param;
        // Deshabilitar fines de semana y fechas pasadas
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return date < today || date.getDay() === 0 || // Domingo
        date.getDay() === 6 // Sábado
        ;
    };
    if (isSubmitted) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 flex items-center justify-center p-4",
            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "w-full max-w-md text-center",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "pt-6",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__["CheckCircle"], {
                            className: "w-16 h-16 text-green-500 mx-auto mb-4"
                        }, void 0, false, {
                            fileName: "<[project]/app/solicitar-demo/page.tsx>",
                            lineNumber: 111,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h2", {
                            className: "text-2xl font-bold text-white mb-2",
                            children: "\xa1Demo Solicitado!"
                        }, void 0, false, {
                            fileName: "<[project]/app/solicitar-demo/page.tsx>",
                            lineNumber: 112,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                            className: "text-muted mb-4",
                            children: "Hemos recibido tu solicitud de demo. Te contactaremos pronto para confirmar los detalles."
                        }, void 0, false, {
                            fileName: "<[project]/app/solicitar-demo/page.tsx>",
                            lineNumber: 113,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: ()=>setIsSubmitted(false),
                            variant: "outline",
                            className: "w-full",
                            children: "Solicitar Otro Demo"
                        }, void 0, false, {
                            fileName: "<[project]/app/solicitar-demo/page.tsx>",
                            lineNumber: 116,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/app/solicitar-demo/page.tsx>",
                    lineNumber: 110,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "<[project]/app/solicitar-demo/page.tsx>",
                lineNumber: 109,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "<[project]/app/solicitar-demo/page.tsx>",
            lineNumber: 108,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "container mx-auto px-4 py-8",
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "text-center mb-12",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                            className: "text-4xl md:text-5xl font-bold text-white mb-4",
                            children: "Solicita tu Demo"
                        }, void 0, false, {
                            fileName: "<[project]/app/solicitar-demo/page.tsx>",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                            className: "text-xl text-muted max-w-2xl mx-auto",
                            children: "Descubre c\xf3mo nuestra plataforma puede transformar tu negocio. Agenda una demostraci\xf3n personalizada con nuestro equipo de expertos."
                        }, void 0, false, {
                            fileName: "<[project]/app/solicitar-demo/page.tsx>",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/app/solicitar-demo/page.tsx>",
                    lineNumber: 133,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "bg-primary-800/50 border-border/50 backdrop-blur-sm",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            className: "flex items-center gap-2 text-white",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__["CalendarIcon"], {
                                                    className: "w-5 h-5 text-accent"
                                                }, void 0, false, {
                                                    fileName: "<[project]/app/solicitar-demo/page.tsx>",
                                                    lineNumber: 148,
                                                    columnNumber: 17
                                                }, this),
                                                "Selecciona una Fecha"
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/app/solicitar-demo/page.tsx>",
                                            lineNumber: 147,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                            children: "Elige el d\xeda que mejor te convenga para tu demo"
                                        }, void 0, false, {
                                            fileName: "<[project]/app/solicitar-demo/page.tsx>",
                                            lineNumber: 151,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/app/solicitar-demo/page.tsx>",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "flex justify-center",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$calendar$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                onChange: (value)=>{
                                                    if (value instanceof Date) {
                                                        handleInputChange('fecha', value);
                                                    }
                                                },
                                                value: formData.fecha,
                                                tileDisabled: tileDisabled,
                                                minDate: new Date(),
                                                maxDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
                                                className: "demo-calendar"
                                            }, void 0, false, {
                                                fileName: "<[project]/app/solicitar-demo/page.tsx>",
                                                lineNumber: 157,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/app/solicitar-demo/page.tsx>",
                                            lineNumber: 156,
                                            columnNumber: 15
                                        }, this),
                                        errors.fecha && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                            className: "text-red-400 text-sm mt-2",
                                            children: errors.fecha
                                        }, void 0, false, {
                                            fileName: "<[project]/app/solicitar-demo/page.tsx>",
                                            lineNumber: 171,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/app/solicitar-demo/page.tsx>",
                                    lineNumber: 155,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/app/solicitar-demo/page.tsx>",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "bg-primary-800/50 border-border/50 backdrop-blur-sm",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            className: "text-white",
                                            children: "Informaci\xf3n de Contacto"
                                        }, void 0, false, {
                                            fileName: "<[project]/app/solicitar-demo/page.tsx>",
                                            lineNumber: 179,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                            children: "Completa tus datos para programar la demo"
                                        }, void 0, false, {
                                            fileName: "<[project]/app/solicitar-demo/page.tsx>",
                                            lineNumber: 180,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/app/solicitar-demo/page.tsx>",
                                    lineNumber: 178,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("form", {
                                        onSubmit: handleSubmit,
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                        htmlFor: "nombre",
                                                        className: "block text-sm font-medium text-white mb-2",
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__["User"], {
                                                                className: "w-4 h-4 inline mr-2"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/app/solicitar-demo/page.tsx>",
                                                                lineNumber: 189,
                                                                columnNumber: 21
                                                            }, this),
                                                            "Nombre Completo"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/app/solicitar-demo/page.tsx>",
                                                        lineNumber: 188,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        id: "nombre",
                                                        type: "text",
                                                        placeholder: "Tu nombre completo",
                                                        value: formData.nombre,
                                                        onChange: (e)=>handleInputChange('nombre', e.target.value),
                                                        error: !!errors.nombre
                                                    }, void 0, false, {
                                                        fileName: "<[project]/app/solicitar-demo/page.tsx>",
                                                        lineNumber: 192,
                                                        columnNumber: 19
                                                    }, this),
                                                    errors.nombre && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                        className: "text-red-400 text-sm mt-1",
                                                        children: errors.nombre
                                                    }, void 0, false, {
                                                        fileName: "<[project]/app/solicitar-demo/page.tsx>",
                                                        lineNumber: 201,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/app/solicitar-demo/page.tsx>",
                                                lineNumber: 187,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                        htmlFor: "email",
                                                        className: "block text-sm font-medium text-white mb-2",
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Mail"], {
                                                                className: "w-4 h-4 inline mr-2"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/app/solicitar-demo/page.tsx>",
                                                                lineNumber: 208,
                                                                columnNumber: 21
                                                            }, this),
                                                            "Correo Electr\xf3nico"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/app/solicitar-demo/page.tsx>",
                                                        lineNumber: 207,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        id: "email",
                                                        type: "email",
                                                        placeholder: "tu@email.com",
                                                        value: formData.email,
                                                        onChange: (e)=>handleInputChange('email', e.target.value),
                                                        error: !!errors.email
                                                    }, void 0, false, {
                                                        fileName: "<[project]/app/solicitar-demo/page.tsx>",
                                                        lineNumber: 211,
                                                        columnNumber: 19
                                                    }, this),
                                                    errors.email && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                        className: "text-red-400 text-sm mt-1",
                                                        children: errors.email
                                                    }, void 0, false, {
                                                        fileName: "<[project]/app/solicitar-demo/page.tsx>",
                                                        lineNumber: 220,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/app/solicitar-demo/page.tsx>",
                                                lineNumber: 206,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                        htmlFor: "hora",
                                                        className: "block text-sm font-medium text-white mb-2",
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Clock"], {
                                                                className: "w-4 h-4 inline mr-2"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/app/solicitar-demo/page.tsx>",
                                                                lineNumber: 227,
                                                                columnNumber: 21
                                                            }, this),
                                                            "Hora Preferida"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/app/solicitar-demo/page.tsx>",
                                                        lineNumber: 226,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("select", {
                                                        id: "hora",
                                                        value: formData.hora,
                                                        onChange: (e)=>handleInputChange('hora', e.target.value),
                                                        className: "w-full px-4 py-3 bg-primary-800 border border-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200",
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("option", {
                                                                value: "",
                                                                children: "Selecciona una hora"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/app/solicitar-demo/page.tsx>",
                                                                lineNumber: 236,
                                                                columnNumber: 21
                                                            }, this),
                                                            horasDisponibles.map((hora)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("option", {
                                                                    value: hora,
                                                                    children: hora
                                                                }, hora, false, {
                                                                    fileName: "<[project]/app/solicitar-demo/page.tsx>",
                                                                    lineNumber: 238,
                                                                    columnNumber: 23
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/app/solicitar-demo/page.tsx>",
                                                        lineNumber: 230,
                                                        columnNumber: 19
                                                    }, this),
                                                    errors.hora && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                        className: "text-red-400 text-sm mt-1",
                                                        children: errors.hora
                                                    }, void 0, false, {
                                                        fileName: "<[project]/app/solicitar-demo/page.tsx>",
                                                        lineNumber: 244,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/app/solicitar-demo/page.tsx>",
                                                lineNumber: 225,
                                                columnNumber: 17
                                            }, this),
                                            formData.fecha && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "p-4 bg-accent/10 border border-accent/20 rounded-lg",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                        className: "text-sm text-muted mb-1",
                                                        children: "Fecha seleccionada:"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/app/solicitar-demo/page.tsx>",
                                                        lineNumber: 251,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                        className: "text-white font-medium",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"](formData.fecha, 'EEEE, d \'de\' MMMM \'de\' yyyy', {
                                                            locale: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2e$js__$5b$client$5d$__$28$ecmascript$29$__["es"]
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "<[project]/app/solicitar-demo/page.tsx>",
                                                        lineNumber: 252,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/app/solicitar-demo/page.tsx>",
                                                lineNumber: 250,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["Button"], {
                                                type: "submit",
                                                className: "w-full h-14 text-lg font-semibold",
                                                variant: "premium",
                                                children: "Solicitar Demo"
                                            }, void 0, false, {
                                                fileName: "<[project]/app/solicitar-demo/page.tsx>",
                                                lineNumber: 259,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/app/solicitar-demo/page.tsx>",
                                        lineNumber: 185,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/app/solicitar-demo/page.tsx>",
                                    lineNumber: 184,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/app/solicitar-demo/page.tsx>",
                            lineNumber: 177,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/app/solicitar-demo/page.tsx>",
                    lineNumber: 143,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "mt-16 text-center",
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "grid md:grid-cols-3 gap-8 max-w-4xl mx-auto",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4",
                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Clock"], {
                                            className: "w-8 h-8 text-accent"
                                        }, void 0, false, {
                                            fileName: "<[project]/app/solicitar-demo/page.tsx>",
                                            lineNumber: 276,
                                            columnNumber: 18
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/app/solicitar-demo/page.tsx>",
                                        lineNumber: 275,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                        className: "text-xl font-semibold text-white mb-2",
                                        children: "Demo Personalizada"
                                    }, void 0, false, {
                                        fileName: "<[project]/app/solicitar-demo/page.tsx>",
                                        lineNumber: 278,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                        className: "text-muted",
                                        children: "Adaptamos la demostraci\xf3n a tus necesidades espec\xedficas"
                                    }, void 0, false, {
                                        fileName: "<[project]/app/solicitar-demo/page.tsx>",
                                        lineNumber: 279,
                                        columnNumber: 16
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/app/solicitar-demo/page.tsx>",
                                lineNumber: 274,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4",
                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__["User"], {
                                            className: "w-8 h-8 text-accent"
                                        }, void 0, false, {
                                            fileName: "<[project]/app/solicitar-demo/page.tsx>",
                                            lineNumber: 285,
                                            columnNumber: 18
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/app/solicitar-demo/page.tsx>",
                                        lineNumber: 284,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                        className: "text-xl font-semibold text-white mb-2",
                                        children: "Experto Dedicado"
                                    }, void 0, false, {
                                        fileName: "<[project]/app/solicitar-demo/page.tsx>",
                                        lineNumber: 287,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                        className: "text-muted",
                                        children: "Un especialista te guiar\xe1 durante toda la sesi\xf3n"
                                    }, void 0, false, {
                                        fileName: "<[project]/app/solicitar-demo/page.tsx>",
                                        lineNumber: 288,
                                        columnNumber: 16
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/app/solicitar-demo/page.tsx>",
                                lineNumber: 283,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4",
                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__["CheckCircle"], {
                                            className: "w-8 h-8 text-accent"
                                        }, void 0, false, {
                                            fileName: "<[project]/app/solicitar-demo/page.tsx>",
                                            lineNumber: 294,
                                            columnNumber: 18
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/app/solicitar-demo/page.tsx>",
                                        lineNumber: 293,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                        className: "text-xl font-semibold text-white mb-2",
                                        children: "Sin Compromiso"
                                    }, void 0, false, {
                                        fileName: "<[project]/app/solicitar-demo/page.tsx>",
                                        lineNumber: 296,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                        className: "text-muted",
                                        children: "La demo es completamente gratuita y sin obligaciones"
                                    }, void 0, false, {
                                        fileName: "<[project]/app/solicitar-demo/page.tsx>",
                                        lineNumber: 297,
                                        columnNumber: 16
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/app/solicitar-demo/page.tsx>",
                                lineNumber: 292,
                                columnNumber: 14
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/app/solicitar-demo/page.tsx>",
                        lineNumber: 273,
                        columnNumber: 12
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/app/solicitar-demo/page.tsx>",
                    lineNumber: 272,
                    columnNumber: 10
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "mt-20",
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dashboard$2d$carousel$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["DashboardCarousel"], {
                        cards: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dashboard$2d$data$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["dashboardCards"],
                        title: "Dashboards que Ver\xe1s en tu Demo",
                        description: "Durante la demostraci\xf3n exploraremos estos dashboards especializados en comercio exterior"
                    }, void 0, false, {
                        fileName: "<[project]/app/solicitar-demo/page.tsx>",
                        lineNumber: 306,
                        columnNumber: 12
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/app/solicitar-demo/page.tsx>",
                    lineNumber: 305,
                    columnNumber: 10
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/app/solicitar-demo/page.tsx>",
            lineNumber: 132,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/app/solicitar-demo/page.tsx>",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
_s(SolicitarDemoPage, "JOJjvtUPl+5VcstE4wLgPFORfIk=");
_c = SolicitarDemoPage;
var _c;
__turbopack_refresh__.register(_c, "SolicitarDemoPage");

})()),
}]);

//# sourceMappingURL=_7d6d80._.js.map