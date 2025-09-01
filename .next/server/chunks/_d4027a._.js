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
"[project]/components/marketing/cta-section.tsx [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "CTASection": ()=>CTASection
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/lucide-react.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/button.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
function CTASection() {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("section", {
        className: "py-24 bg-gradient-to-br from-[#0A2540] via-[#113A63] to-[#0B1220] text-white",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "container mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "text-center mb-20",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("h2", {
                            className: "text-4xl md:text-5xl lg:text-6xl font-bold mb-8",
                            children: "\xbfListo para transformar tu negocio?"
                        }, void 0, false, {
                            fileName: "<[project]/components/marketing/cta-section.tsx>",
                            lineNumber: 12,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                            className: "text-xl text-blue-100 max-w-3xl mx-auto mb-8",
                            children: "\xdanete a m\xe1s de 500 empresas que ya est\xe1n tomando decisiones basadas en datos y viendo resultados extraordinarios."
                        }, void 0, false, {
                            fileName: "<[project]/components/marketing/cta-section.tsx>",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/marketing/cta-section.tsx>",
                    lineNumber: 11,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-16",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "inline-flex p-4 bg-white/20 rounded-full mb-6",
                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Play"], {
                                        className: "h-8 w-8 text-white"
                                    }, void 0, false, {
                                        fileName: "<[project]/components/marketing/cta-section.tsx>",
                                        lineNumber: 25,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/components/marketing/cta-section.tsx>",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                    className: "text-xl font-semibold mb-4",
                                    children: "Ver Demo en Vivo"
                                }, void 0, false, {
                                    fileName: "<[project]/components/marketing/cta-section.tsx>",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                    className: "text-blue-100 mb-6",
                                    children: "Descubre c\xf3mo nuestra plataforma puede transformar tu an\xe1lisis de datos."
                                }, void 0, false, {
                                    fileName: "<[project]/components/marketing/cta-section.tsx>",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    className: "border-white text-white hover:bg-white hover:text-[#0A2540]",
                                    asChild: true,
                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/demo",
                                        children: [
                                            "Ver demo",
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ArrowRight"], {
                                                className: "ml-2 h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "<[project]/components/marketing/cta-section.tsx>",
                                                lineNumber: 38,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/components/marketing/cta-section.tsx>",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/components/marketing/cta-section.tsx>",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/marketing/cta-section.tsx>",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "inline-flex p-4 bg-white/20 rounded-full mb-6",
                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Calendar"], {
                                        className: "h-8 w-8 text-white"
                                    }, void 0, false, {
                                        fileName: "<[project]/components/marketing/cta-section.tsx>",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/components/marketing/cta-section.tsx>",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                    className: "text-xl font-semibold mb-4",
                                    children: "Prueba Gratuita"
                                }, void 0, false, {
                                    fileName: "<[project]/components/marketing/cta-section.tsx>",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                    className: "text-blue-100 mb-6",
                                    children: "Comienza con una prueba gratuita de 14 d\xedas. Sin compromisos."
                                }, void 0, false, {
                                    fileName: "<[project]/components/marketing/cta-section.tsx>",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    className: "border-white text-white hover:bg-white hover:text-[#0A2540]",
                                    asChild: true,
                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/planes",
                                        children: [
                                            "Empezar gratis",
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ArrowRight"], {
                                                className: "ml-2 h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "<[project]/components/marketing/cta-section.tsx>",
                                                lineNumber: 59,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/components/marketing/cta-section.tsx>",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/components/marketing/cta-section.tsx>",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/marketing/cta-section.tsx>",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "inline-flex p-4 bg-white/20 rounded-full mb-6",
                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MessageSquare"], {
                                        className: "h-8 w-8 text-white"
                                    }, void 0, false, {
                                        fileName: "<[project]/components/marketing/cta-section.tsx>",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/components/marketing/cta-section.tsx>",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                    className: "text-xl font-semibold mb-4",
                                    children: "Hablar con Expertos"
                                }, void 0, false, {
                                    fileName: "<[project]/components/marketing/cta-section.tsx>",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                    className: "text-blue-100 mb-6",
                                    children: "Nuestro equipo est\xe1 listo para ayudarte a encontrar la mejor soluci\xf3n."
                                }, void 0, false, {
                                    fileName: "<[project]/components/marketing/cta-section.tsx>",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    className: "border-white text-white hover:bg-white hover:text-[#0A2540]",
                                    asChild: true,
                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/contacto",
                                        children: [
                                            "Contactar",
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ArrowRight"], {
                                                className: "ml-2 h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "<[project]/components/marketing/cta-section.tsx>",
                                                lineNumber: 80,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/components/marketing/cta-section.tsx>",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/components/marketing/cta-section.tsx>",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/marketing/cta-section.tsx>",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/marketing/cta-section.tsx>",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "inline-flex flex-col sm:flex-row gap-4",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "lg",
                                    className: "bg-white text-[#0A2540] hover:bg-gray-100 px-8 py-4 text-lg",
                                    asChild: true,
                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/planes",
                                        children: [
                                            "Empezar ahora",
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ArrowRight"], {
                                                className: "ml-2 h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "<[project]/components/marketing/cta-section.tsx>",
                                                lineNumber: 96,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/components/marketing/cta-section.tsx>",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/components/marketing/cta-section.tsx>",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "lg",
                                    className: "border-white text-white hover:bg-white hover:text-[#0A2540] px-8 py-4 text-lg",
                                    asChild: true,
                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/contacto",
                                        children: "Hablar con ventas"
                                    }, void 0, false, {
                                        fileName: "<[project]/components/marketing/cta-section.tsx>",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/components/marketing/cta-section.tsx>",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/marketing/cta-section.tsx>",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                            className: "text-blue-100 mt-6 text-sm",
                            children: "Sin tarjeta de cr\xe9dito • Configuraci\xf3n en 5 minutos • Soporte 24/7"
                        }, void 0, false, {
                            fileName: "<[project]/components/marketing/cta-section.tsx>",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/marketing/cta-section.tsx>",
                    lineNumber: 87,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/components/marketing/cta-section.tsx>",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/components/marketing/cta-section.tsx>",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}

})()),

};

//# sourceMappingURL=_d4027a._.js.map