module.exports = {

"[project]/lib/utils.ts [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function cn(...inputs) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["twMerge"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["clsx"](inputs));
}
function generateId(prefix = 'id') {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}
function debounce(func, wait) {
    let timeout;
    return (...args)=>{
        clearTimeout(timeout);
        timeout = setTimeout(()=>func(...args), wait);
    };
}
function throttle(func, limit) {
    let inThrottle;
    return (...args)=>{
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
function generateGradient(colors, direction = 'to-r') {
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
function smoothScrollTo(element, offset = 0) {
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
"[project]/components/ui/button.tsx [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Button": ()=>Button,
    "buttonVariants": ()=>buttonVariants
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/class-variance-authority/dist/index.mjs [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
const buttonVariants = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["cva"]("inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary disabled:pointer-events-none disabled:opacity-50", {
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
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__.forwardRef(({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](Comp, {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["cn"](buttonVariants({
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
Button.displayName = "Button";
;

})()),
"[project]/components/ui/dashboard-carousel.tsx [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "DashboardCarousel": ()=>DashboardCarousel
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/index.mjs [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/lucide-react.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/button.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
;
;
function DashboardCarousel({ cards, title = "Dashboards Disponibles", description = "Explora nuestros dashboards interactivos diseñados para el comercio exterior" }) {
    const [currentIndex, setCurrentIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useState"](0);
    const [isAutoPlaying, setIsAutoPlaying] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useState"](true);
    // Auto-play functionality
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
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
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "text-center mb-12",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("h2", {
                        className: "text-3xl md:text-4xl font-bold text-white mb-4",
                        children: title
                    }, void 0, false, {
                        fileName: "<[project]/components/ui/dashboard-carousel.tsx>",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
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
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "relative group",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                        onClick: prevSlide,
                        className: "absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 backdrop-blur-sm border border-white/20",
                        "aria-label": "Anterior slide",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ChevronLeft"], {
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
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                        onClick: nextSlide,
                        className: "absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 backdrop-blur-sm border border-white/20",
                        "aria-label": "Siguiente slide",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ChevronRight"], {
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
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "overflow-hidden rounded-2xl",
                        onMouseEnter: pauseAutoPlay,
                        onMouseLeave: resumeAutoPlay,
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "flex transition-transform duration-500 ease-out",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                mode: "wait",
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6",
                                        children: Array.from({
                                            length: 3
                                        }).map((_, index)=>{
                                            const cardIndex = currentIndex + index;
                                            const card = cards[cardIndex];
                                            if (!card) return null;
                                            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "bg-gradient-to-br from-primary-900/20 to-primary-800/20 border border-primary-500/30 rounded-2xl p-6 h-full hover:scale-105 transition-all duration-300 cursor-pointer backdrop-blur-sm",
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                            className: "h-32 mb-4 rounded-lg bg-gradient-to-br from-primary-600/20 to-primary-400/20 border border-primary-500/30 flex items-center justify-center",
                                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
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
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                                            className: "text-xl font-bold text-white mb-3 group-hover/card:text-primary-400 transition-colors",
                                                            children: card.title
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/ui/dashboard-carousel.tsx>",
                                                            lineNumber: 146,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                            className: "text-gray-300 text-sm mb-4 line-clamp-3",
                                                            children: card.description
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/ui/dashboard-carousel.tsx>",
                                                            lineNumber: 149,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/dashboard",
                                                            className: "inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors group-hover/card:text-primary-300",
                                                            children: [
                                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                    className: "text-sm font-medium",
                                                                    children: "Explorar Dashboard"
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/components/ui/dashboard-carousel.tsx>",
                                                                    lineNumber: 155,
                                                                    columnNumber: 28
                                                                }, this),
                                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ArrowRight"], {
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
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex justify-center mt-8 space-x-2",
                        children: Array.from({
                            length: Math.ceil(cards.length / 3)
                        }).map((_, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
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
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex justify-center mt-6",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
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
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex justify-center mt-4 space-x-2",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                onClick: pauseAutoPlay,
                                className: `px-3 py-1 text-xs rounded-full transition-all ${!isAutoPlaying ? 'bg-primary-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`,
                                children: "Pausar"
                            }, void 0, false, {
                                fileName: "<[project]/components/ui/dashboard-carousel.tsx>",
                                lineNumber: 193,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
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
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "text-center mt-12",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/dashboard",
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "premium",
                        size: "lg",
                        className: "group",
                        children: [
                            "Ver Todos los Dashboards",
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ArrowRight"], {
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

})()),

};

//# sourceMappingURL=_0cb2f6._.js.map