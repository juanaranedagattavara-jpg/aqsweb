(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_8f7e09._.js", {

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
"[project]/app/dashboard/page.tsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>DashboardPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature(), _s2 = __turbopack_refresh__.signature(), _s3 = __turbopack_refresh__.signature(), _s4 = __turbopack_refresh__.signature(), _s5 = __turbopack_refresh__.signature();
"use client";
;
;
function AnimatedCard(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        role: "region",
        "aria-labelledby": "card-title",
        "aria-describedby": "card-description",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"]("group/animated-card relative w-[380px] overflow-hidden rounded-2xl border border-zinc-200/50 bg-white/80 shadow-xl backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:scale-105 dark:border-zinc-800/50 dark:bg-black/80", className),
        ...props
    }, void 0, false, {
        fileName: "<[project]/app/dashboard/page.tsx>",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = AnimatedCard;
function CardBody(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        role: "group",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"]("flex flex-col space-y-2 border-t border-zinc-200/30 p-6 dark:border-zinc-800/30", className),
        ...props
    }, void 0, false, {
        fileName: "<[project]/app/dashboard/page.tsx>",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c1 = CardBody;
function CardTitle(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"]("text-xl leading-none font-bold tracking-tight text-black dark:text-white", className),
        ...props
    }, void 0, false, {
        fileName: "<[project]/app/dashboard/page.tsx>",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"]("text-sm leading-relaxed text-neutral-600 dark:text-neutral-300", className),
        ...props
    }, void 0, false, {
        fileName: "<[project]/app/dashboard/page.tsx>",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardVisual(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"]("h-[160px] w-[320px] overflow-hidden", className),
        ...props
    }, void 0, false, {
        fileName: "<[project]/app/dashboard/page.tsx>",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_c4 = CardVisual;
// Shared Components
const EllipseGradient = (param)=>{
    let { color } = param;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "absolute inset-0 z-[5] flex h-full w-full items-center justify-center",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
            width: "320",
            height: "160",
            viewBox: "0 0 320 160",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("rect", {
                    width: "320",
                    height: "160",
                    fill: "url(#paint0_radial)"
                }, void 0, false, {
                    fileName: "<[project]/app/dashboard/page.tsx>",
                    lineNumber: 100,
                    columnNumber: 19
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("defs", {
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("radialGradient", {
                        id: "paint0_radial",
                        cx: "0",
                        cy: "0",
                        r: "1",
                        gradientUnits: "userSpaceOnUse",
                        gradientTransform: "translate(190 100) rotate(90) scale(100 190)",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("stop", {
                                stopColor: color,
                                stopOpacity: "0.3"
                            }, void 0, false, {
                                fileName: "<[project]/app/dashboard/page.tsx>",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("stop", {
                                offset: "0.4",
                                stopColor: color,
                                stopOpacity: "0.2"
                            }, void 0, false, {
                                fileName: "<[project]/app/dashboard/page.tsx>",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("stop", {
                                offset: "1",
                                stopOpacity: "0"
                            }, void 0, false, {
                                fileName: "<[project]/app/dashboard/page.tsx>",
                                lineNumber: 112,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/app/dashboard/page.tsx>",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/app/dashboard/page.tsx>",
                    lineNumber: 101,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/app/dashboard/page.tsx>",
            lineNumber: 93,
            columnNumber: 15
        }, this)
    }, void 0, false, {
        fileName: "<[project]/app/dashboard/page.tsx>",
        lineNumber: 92,
        columnNumber: 5
    }, this);
};
_c5 = EllipseGradient;
const GridLayer = (param)=>{
    let { color } = param;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        style: {
            "--grid-color": color
        },
        className: "pointer-events-none absolute inset-0 z-[4] h-full w-full bg-transparent bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] bg-[size:20px_20px] bg-center opacity-60"
    }, void 0, false, {
        fileName: "<[project]/app/dashboard/page.tsx>",
        lineNumber: 122,
        columnNumber: 5
    }, this);
};
_c6 = GridLayer;
// Visual 1: Analytics Card (Enhanced Original)
const AnalyticsVisual = (param)=>{
    let { mainColor = "#8b5cf6", secondaryColor = "#fbbf24", gridColor = "#80808020" } = param;
    _s();
    const [hovered, setHovered] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [mainProgress, setMainProgress] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](15);
    const [secondaryProgress, setSecondaryProgress] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](0);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        let timeout;
        if (hovered) {
            timeout = setTimeout(()=>{
                setMainProgress(75);
                setSecondaryProgress(100);
            }, 300);
        } else {
            setMainProgress(15);
            setSecondaryProgress(0);
        }
        return ()=>clearTimeout(timeout);
    }, [
        hovered
    ]);
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const mainDashoffset = circumference - mainProgress / 100 * circumference;
    const secondaryDashoffset = circumference - secondaryProgress / 100 * circumference;
    const techItems = [
        {
            id: 1,
            translateX: "100",
            translateY: "50",
            text: "React",
            icon: "⚛️"
        },
        {
            id: 2,
            translateX: "100",
            translateY: "-50",
            text: "Next.js",
            icon: "🔷"
        },
        {
            id: 3,
            translateX: "120",
            translateY: "0",
            text: "TypeScript",
            icon: "📘"
        },
        {
            id: 4,
            translateX: "-120",
            translateY: "0",
            text: "Tailwind",
            icon: "💨"
        },
        {
            id: 5,
            translateX: "-100",
            translateY: "50",
            text: "Prisma",
            icon: "🔺"
        },
        {
            id: 6,
            translateX: "-100",
            translateY: "-50",
            text: "GraphQL",
            icon: "🌸"
        }
    ];
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "absolute inset-0 z-20",
                onMouseEnter: ()=>setHovered(true),
                onMouseLeave: ()=>setHovered(false)
            }, void 0, false, {
                fileName: "<[project]/app/dashboard/page.tsx>",
                lineNumber: 171,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "relative h-[200px] w-[380px] overflow-hidden rounded-t-2xl",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "ease-[cubic-bezier(0.6, 0.6, 0, 1)] absolute top-0 left-0 z-[7] flex h-[320px] w-[320px] transform items-center justify-center transition-transform duration-700 group-hover/animated-card:-translate-y-[80px] group-hover/animated-card:scale-110",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "relative flex h-[140px] w-[140px] items-center justify-center",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
                                    width: "140",
                                    height: "140",
                                    viewBox: "0 0 100 100",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("circle", {
                                            cx: "50",
                                            cy: "50",
                                            r: radius,
                                            stroke: "currentColor",
                                            strokeWidth: "8",
                                            fill: "transparent",
                                            opacity: 0.1,
                                            className: "text-zinc-400 dark:text-zinc-600"
                                        }, void 0, false, {
                                            fileName: "<[project]/app/dashboard/page.tsx>",
                                            lineNumber: 181,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("circle", {
                                            cx: "50",
                                            cy: "50",
                                            r: radius,
                                            stroke: secondaryColor,
                                            strokeWidth: "12",
                                            fill: "transparent",
                                            strokeDasharray: circumference,
                                            strokeDashoffset: secondaryDashoffset,
                                            transform: "rotate(-90 50 50)",
                                            style: {
                                                transition: "stroke-dashoffset 0.7s cubic-bezier(0.6, 0.6, 0, 1)"
                                            }
                                        }, void 0, false, {
                                            fileName: "<[project]/app/dashboard/page.tsx>",
                                            lineNumber: 191,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("circle", {
                                            cx: "50",
                                            cy: "50",
                                            r: radius,
                                            stroke: mainColor,
                                            strokeWidth: "12",
                                            fill: "transparent",
                                            strokeDasharray: circumference,
                                            strokeDashoffset: mainDashoffset,
                                            transform: "rotate(-90 50 50)",
                                            style: {
                                                transition: "stroke-dashoffset 0.7s cubic-bezier(0.6, 0.6, 0, 1)"
                                            }
                                        }, void 0, false, {
                                            fileName: "<[project]/app/dashboard/page.tsx>",
                                            lineNumber: 205,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/app/dashboard/page.tsx>",
                                    lineNumber: 180,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "absolute inset-0 flex items-center justify-center",
                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                        className: "text-2xl font-bold text-black dark:text-white",
                                        children: [
                                            hovered ? secondaryProgress > 75 ? secondaryProgress : mainProgress : mainProgress,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/app/dashboard/page.tsx>",
                                        lineNumber: 221,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/app/dashboard/page.tsx>",
                                    lineNumber: 220,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/app/dashboard/page.tsx>",
                            lineNumber: 179,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/app/dashboard/page.tsx>",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "ease-[cubic-bezier(0.6, 0.6, 0, 1)] absolute inset-0 z-[6] flex w-[380px] translate-y-0 items-start justify-center bg-transparent p-6 transition-transform duration-700 group-hover/animated-card:translate-y-full",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "ease-[cubic-bezier(0.6, 0.6, 0, 1)] rounded-lg border border-zinc-200/40 bg-white/40 px-4 py-3 opacity-100 backdrop-blur-md transition-opacity duration-500 group-hover/animated-card:opacity-0 dark:border-zinc-800/40 dark:bg-black/40",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "h-3 w-3 shrink-0 rounded-full",
                                            style: {
                                                backgroundColor: mainColor
                                            }
                                        }, void 0, false, {
                                            fileName: "<[project]/app/dashboard/page.tsx>",
                                            lineNumber: 232,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                            className: "text-sm font-medium text-black dark:text-white",
                                            children: "Performance Analytics"
                                        }, void 0, false, {
                                            fileName: "<[project]/app/dashboard/page.tsx>",
                                            lineNumber: 233,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/app/dashboard/page.tsx>",
                                    lineNumber: 231,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                    className: "mt-1 text-xs text-neutral-600 dark:text-neutral-300",
                                    children: "Real-time metrics and insights"
                                }, void 0, false, {
                                    fileName: "<[project]/app/dashboard/page.tsx>",
                                    lineNumber: 237,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/app/dashboard/page.tsx>",
                            lineNumber: 230,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/app/dashboard/page.tsx>",
                        lineNumber: 229,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "ease-[cubic-bezier(0.6, 0.6, 0, 1)] absolute inset-0 z-[7] flex items-center justify-center opacity-0 transition-opacity duration-700 group-hover/animated-card:opacity-100",
                        children: techItems.map((item, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "ease-[cubic-bezier(0.6, 0.6, 0, 1)] absolute flex items-center justify-center gap-2 rounded-full border border-zinc-200/60 bg-white/80 px-3 py-1.5 backdrop-blur-md transition-all duration-700 dark:border-zinc-800/60 dark:bg-black/80",
                                style: {
                                    transform: hovered ? `translate(${item.translateX}px, ${item.translateY}px)` : "translate(0px, 0px)",
                                    transitionDelay: `${index * 100}ms`
                                },
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                        className: "text-sm",
                                        children: item.icon
                                    }, void 0, false, {
                                        fileName: "<[project]/app/dashboard/page.tsx>",
                                        lineNumber: 256,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                        className: "text-xs font-medium text-black dark:text-white",
                                        children: item.text
                                    }, void 0, false, {
                                        fileName: "<[project]/app/dashboard/page.tsx>",
                                        lineNumber: 257,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, item.id, true, {
                                fileName: "<[project]/app/dashboard/page.tsx>",
                                lineNumber: 246,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "<[project]/app/dashboard/page.tsx>",
                        lineNumber: 244,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](EllipseGradient, {
                        color: mainColor
                    }, void 0, false, {
                        fileName: "<[project]/app/dashboard/page.tsx>",
                        lineNumber: 264,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](GridLayer, {
                        color: gridColor
                    }, void 0, false, {
                        fileName: "<[project]/app/dashboard/page.tsx>",
                        lineNumber: 265,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/app/dashboard/page.tsx>",
                lineNumber: 176,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
_s(AnalyticsVisual, "bPZ1xK4dbZtiOk81onIrHrvYYrI=");
_c7 = AnalyticsVisual;
// Visual 2: Wave Animation Card
const WaveVisual = (param)=>{
    let { mainColor = "#06b6d4", secondaryColor = "#8b5cf6", gridColor = "#80808020" } = param;
    _s1();
    const [hovered, setHovered] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](false);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "absolute inset-0 z-20",
                onMouseEnter: ()=>setHovered(true),
                onMouseLeave: ()=>setHovered(false)
            }, void 0, false, {
                fileName: "<[project]/app/dashboard/page.tsx>",
                lineNumber: 281,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "relative h-[200px] w-[380px] overflow-hidden rounded-t-2xl",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "absolute inset-0 z-[6]",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
                            className: "absolute bottom-0 left-0 w-full",
                            viewBox: "0 0 320 160",
                            fill: "none",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                                    d: "M0,160 Q95,120 190,140 T380,130 L380,200 L0,200 Z",
                                    fill: `${mainColor}40`,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"]("transition-all duration-1000 ease-in-out", hovered ? "translate-y-0" : "translate-y-8")
                                }, void 0, false, {
                                    fileName: "<[project]/app/dashboard/page.tsx>",
                                    lineNumber: 294,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                                    d: "M0,170 Q95,130 190,150 T380,140 L380,200 L0,200 Z",
                                    fill: `${secondaryColor}30`,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"]("transition-all duration-1000 ease-in-out", hovered ? "translate-y-0" : "translate-y-6"),
                                    style: {
                                        transitionDelay: "200ms"
                                    }
                                }, void 0, false, {
                                    fileName: "<[project]/app/dashboard/page.tsx>",
                                    lineNumber: 302,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/app/dashboard/page.tsx>",
                            lineNumber: 289,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/app/dashboard/page.tsx>",
                        lineNumber: 288,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "absolute inset-0 z-[7]",
                        children: [
                            ...Array(6)
                        ].map((_, i)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"]("absolute h-2 w-2 rounded-full opacity-60 transition-all duration-1000 ease-in-out", hovered ? "animate-bounce" : ""),
                                style: {
                                    backgroundColor: i % 2 === 0 ? mainColor : secondaryColor,
                                    left: `${15 + i * 50}px`,
                                    top: `${65 + i % 3 * 25}px`,
                                    animationDelay: `${i * 200}ms`,
                                    transform: hovered ? `translateY(-${(i + 1) * 15}px)` : "translateY(0)"
                                }
                            }, i, false, {
                                fileName: "<[project]/app/dashboard/page.tsx>",
                                lineNumber: 317,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "<[project]/app/dashboard/page.tsx>",
                        lineNumber: 315,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "ease-[cubic-bezier(0.6, 0.6, 0, 1)] absolute inset-0 z-[8] flex items-center justify-center transition-transform duration-700 group-hover/animated-card:scale-110 group-hover/animated-card:rotate-12",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "flex h-16 w-16 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm dark:bg-black/80",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                className: "text-2xl",
                                children: "🌊"
                            }, void 0, false, {
                                fileName: "<[project]/app/dashboard/page.tsx>",
                                lineNumber: 337,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/app/dashboard/page.tsx>",
                            lineNumber: 336,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/app/dashboard/page.tsx>",
                        lineNumber: 335,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](GridLayer, {
                        color: gridColor
                    }, void 0, false, {
                        fileName: "<[project]/app/dashboard/page.tsx>",
                        lineNumber: 341,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/app/dashboard/page.tsx>",
                lineNumber: 286,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
_s1(WaveVisual, "V8YbV+gTZxGliGj1g0fftBlvsq4=");
_c8 = WaveVisual;
// Visual 3: Geometric Morphing Card
const GeometricVisual = (param)=>{
    let { mainColor = "#f59e0b", secondaryColor = "#ef4444", gridColor = "#80808020" } = param;
    _s2();
    const [hovered, setHovered] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](false);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "absolute inset-0 z-20",
                onMouseEnter: ()=>setHovered(true),
                onMouseLeave: ()=>setHovered(false)
            }, void 0, false, {
                fileName: "<[project]/app/dashboard/page.tsx>",
                lineNumber: 357,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "relative h-[200px] w-[380px] overflow-hidden rounded-t-2xl",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "absolute inset-0 z-[6] flex items-center justify-center",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"]("transition-all duration-1000 ease-in-out", hovered ? "rotate-180 scale-150" : "rotate-0 scale-100"),
                                    style: {
                                        backgroundColor: mainColor
                                    },
                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "h-20 w-20 rounded-lg opacity-80"
                                    }, void 0, false, {
                                        fileName: "<[project]/app/dashboard/page.tsx>",
                                        lineNumber: 374,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/app/dashboard/page.tsx>",
                                    lineNumber: 367,
                                    columnNumber: 13
                                }, this),
                                [
                                    ...Array(4)
                                ].map((_, i)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"]("absolute h-4 w-4 rounded-full transition-all duration-1000 ease-in-out", hovered ? "opacity-100" : "opacity-60"),
                                        style: {
                                            backgroundColor: i % 2 === 0 ? secondaryColor : mainColor,
                                            top: "50%",
                                            left: "50%",
                                            transform: hovered ? `translate(-50%, -50%) rotate(${i * 90 + 180}deg) translateX(60px) rotate(-${i * 90 + 180}deg)` : `translate(-50%, -50%) rotate(${i * 90}deg) translateX(40px) rotate(-${i * 90}deg)`,
                                            transitionDelay: `${i * 100}ms`
                                        }
                                    }, i, false, {
                                        fileName: "<[project]/app/dashboard/page.tsx>",
                                        lineNumber: 379,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/app/dashboard/page.tsx>",
                            lineNumber: 365,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/app/dashboard/page.tsx>",
                        lineNumber: 364,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "absolute inset-0 z-[5]",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
                            width: "320",
                            height: "160",
                            className: "opacity-20",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("defs", {
                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("pattern", {
                                        id: "hexagon",
                                        x: "0",
                                        y: "0",
                                        width: "32",
                                        height: "32",
                                        patternUnits: "userSpaceOnUse",
                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("polygon", {
                                            points: "20,2 32,12 32,28 20,38 8,28 8,12",
                                            fill: "none",
                                            stroke: mainColor,
                                            strokeWidth: "1"
                                        }, void 0, false, {
                                            fileName: "<[project]/app/dashboard/page.tsx>",
                                            lineNumber: 404,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/app/dashboard/page.tsx>",
                                        lineNumber: 403,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/app/dashboard/page.tsx>",
                                    lineNumber: 402,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("rect", {
                                    width: "100%",
                                    height: "100%",
                                    fill: "url(#hexagon)"
                                }, void 0, false, {
                                    fileName: "<[project]/app/dashboard/page.tsx>",
                                    lineNumber: 407,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/app/dashboard/page.tsx>",
                            lineNumber: 401,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/app/dashboard/page.tsx>",
                        lineNumber: 400,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](GridLayer, {
                        color: gridColor
                    }, void 0, false, {
                        fileName: "<[project]/app/dashboard/page.tsx>",
                        lineNumber: 411,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/app/dashboard/page.tsx>",
                lineNumber: 362,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
_s2(GeometricVisual, "V8YbV+gTZxGliGj1g0fftBlvsq4=");
_c9 = GeometricVisual;
// Visual 4: Network Graph Card
const NetworkVisual = (param)=>{
    let { mainColor = "#10b981", secondaryColor = "#3b82f6", gridColor = "#80808020" } = param;
    _s3();
    const [hovered, setHovered] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](false);
    const nodes = [
        {
            id: 1,
            x: 160,
            y: 80,
            size: 6
        },
        {
            id: 2,
            x: 100,
            y: 50,
            size: 5
        },
        {
            id: 3,
            x: 220,
            y: 65,
            size: 5
        },
        {
            id: 4,
            x: 80,
            y: 110,
            size: 4
        },
        {
            id: 5,
            x: 240,
            y: 110,
            size: 4
        },
        {
            id: 6,
            x: 160,
            y: 30,
            size: 3
        },
        {
            id: 7,
            x: 160,
            y: 130,
            size: 3
        }
    ];
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "absolute inset-0 z-20",
                onMouseEnter: ()=>setHovered(true),
                onMouseLeave: ()=>setHovered(false)
            }, void 0, false, {
                fileName: "<[project]/app/dashboard/page.tsx>",
                lineNumber: 437,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "relative h-[200px] w-[380px] overflow-hidden rounded-t-2xl",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
                        className: "absolute inset-0 z-[6] h-full w-full",
                        viewBox: "0 0 320 160",
                        children: nodes.map((node, i)=>nodes.slice(i + 1).map((targetNode, j)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("line", {
                                    x1: node.x,
                                    y1: node.y,
                                    x2: targetNode.x,
                                    y2: targetNode.y,
                                    stroke: hovered ? mainColor : secondaryColor,
                                    strokeWidth: hovered ? 2 : 1,
                                    opacity: hovered ? 0.8 : 0.4,
                                    className: "transition-all duration-500 ease-in-out",
                                    style: {
                                        transitionDelay: `${(i + j) * 50}ms`
                                    }
                                }, `${i}-${j}`, false, {
                                    fileName: "<[project]/app/dashboard/page.tsx>",
                                    lineNumber: 447,
                                    columnNumber: 15
                                }, this)))
                    }, void 0, false, {
                        fileName: "<[project]/app/dashboard/page.tsx>",
                        lineNumber: 444,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "absolute inset-0 z-[7]",
                        children: nodes.map((node, i)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"]("absolute rounded-full transition-all duration-500 ease-in-out", hovered ? "animate-pulse" : ""),
                                style: {
                                    left: node.x - node.size / 2,
                                    top: node.y - node.size / 2,
                                    width: hovered ? node.size * 1.5 : node.size,
                                    height: hovered ? node.size * 1.5 : node.size,
                                    backgroundColor: i === 0 ? mainColor : secondaryColor,
                                    transitionDelay: `${i * 100}ms`
                                }
                            }, node.id, false, {
                                fileName: "<[project]/app/dashboard/page.tsx>",
                                lineNumber: 466,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "<[project]/app/dashboard/page.tsx>",
                        lineNumber: 464,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](EllipseGradient, {
                        color: mainColor
                    }, void 0, false, {
                        fileName: "<[project]/app/dashboard/page.tsx>",
                        lineNumber: 484,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](GridLayer, {
                        color: gridColor
                    }, void 0, false, {
                        fileName: "<[project]/app/dashboard/page.tsx>",
                        lineNumber: 485,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/app/dashboard/page.tsx>",
                lineNumber: 442,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
_s3(NetworkVisual, "V8YbV+gTZxGliGj1g0fftBlvsq4=");
_c10 = NetworkVisual;
// Visual 5: Data Flow Card
const DataFlowVisual = (param)=>{
    let { mainColor = "#ec4899", secondaryColor = "#8b5cf6", gridColor = "#80808020" } = param;
    _s4();
    const [hovered, setHovered] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](false);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "absolute inset-0 z-20",
                onMouseEnter: ()=>setHovered(true),
                onMouseLeave: ()=>setHovered(false)
            }, void 0, false, {
                fileName: "<[project]/app/dashboard/page.tsx>",
                lineNumber: 501,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "relative h-[160px] w-[320px] overflow-hidden rounded-t-2xl",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "absolute inset-0 z-[6]",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
                            width: "320",
                            height: "160",
                            className: "opacity-80",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("defs", {
                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("linearGradient", {
                                        id: "flowGradient",
                                        x1: "0%",
                                        y1: "0%",
                                        x2: "100%",
                                        y2: "0%",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("stop", {
                                                offset: "0%",
                                                stopColor: mainColor
                                            }, void 0, false, {
                                                fileName: "<[project]/app/dashboard/page.tsx>",
                                                lineNumber: 512,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("stop", {
                                                offset: "50%",
                                                stopColor: secondaryColor
                                            }, void 0, false, {
                                                fileName: "<[project]/app/dashboard/page.tsx>",
                                                lineNumber: 513,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("stop", {
                                                offset: "100%",
                                                stopColor: mainColor
                                            }, void 0, false, {
                                                fileName: "<[project]/app/dashboard/page.tsx>",
                                                lineNumber: 514,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/app/dashboard/page.tsx>",
                                        lineNumber: 511,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/app/dashboard/page.tsx>",
                                    lineNumber: 510,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                                    d: "M0,80 Q80,40 160,80 T320,80",
                                    stroke: "url(#flowGradient)",
                                    strokeWidth: hovered ? 4 : 2,
                                    fill: "none",
                                    className: "transition-all duration-1000 ease-in-out",
                                    style: {
                                        strokeDasharray: hovered ? "20,10" : "5,5",
                                        animation: hovered ? "flow 2s linear infinite" : "none"
                                    }
                                }, void 0, false, {
                                    fileName: "<[project]/app/dashboard/page.tsx>",
                                    lineNumber: 517,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                                    d: "M0,100 Q80,60 160,100 T320,100",
                                    stroke: secondaryColor,
                                    strokeWidth: hovered ? 3 : 1.5,
                                    fill: "none",
                                    opacity: 0.6,
                                    className: "transition-all duration-1000 ease-in-out",
                                    style: {
                                        strokeDasharray: hovered ? "15,8" : "3,3",
                                        animation: hovered ? "flow 2.5s linear infinite" : "none"
                                    }
                                }, void 0, false, {
                                    fileName: "<[project]/app/dashboard/page.tsx>",
                                    lineNumber: 528,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/app/dashboard/page.tsx>",
                            lineNumber: 509,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/app/dashboard/page.tsx>",
                        lineNumber: 508,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "absolute inset-0 z-[7]",
                        children: [
                            ...Array(8)
                        ].map((_, i)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"]("absolute h-2 w-2 rounded-full transition-all duration-500 ease-in-out", hovered ? "animate-ping" : ""),
                                style: {
                                    backgroundColor: i % 2 === 0 ? mainColor : secondaryColor,
                                    left: `${i * 40}px`,
                                    top: `${70 + Math.sin(i * 0.5) * 20}px`,
                                    animationDelay: `${i * 100}ms`,
                                    transform: hovered ? `scale(1.5) translateY(-${Math.sin(i * 0.5) * 10}px)` : "scale(1)"
                                }
                            }, i, false, {
                                fileName: "<[project]/app/dashboard/page.tsx>",
                                lineNumber: 546,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "<[project]/app/dashboard/page.tsx>",
                        lineNumber: 544,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "ease-[cubic-bezier(0.6, 0.6, 0, 1)] absolute inset-0 z-[8] flex items-center justify-center transition-transform duration-700 group-hover/animated-card:scale-110 group-hover/animated-card:rotate-6",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "flex h-12 w-12 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm dark:bg-black/80",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                className: "text-xl",
                                children: "📊"
                            }, void 0, false, {
                                fileName: "<[project]/app/dashboard/page.tsx>",
                                lineNumber: 566,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/app/dashboard/page.tsx>",
                            lineNumber: 565,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/app/dashboard/page.tsx>",
                        lineNumber: 564,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](GridLayer, {
                        color: gridColor
                    }, void 0, false, {
                        fileName: "<[project]/app/dashboard/page.tsx>",
                        lineNumber: 570,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/app/dashboard/page.tsx>",
                lineNumber: 506,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
_s4(DataFlowVisual, "V8YbV+gTZxGliGj1g0fftBlvsq4=");
_c11 = DataFlowVisual;
// Visual 6: Timeline Card
const TimelineVisual = (param)=>{
    let { mainColor = "#f59e0b", secondaryColor = "#ef4444", gridColor = "#80808020" } = param;
    _s5();
    const [hovered, setHovered] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](false);
    const timelinePoints = [
        {
            x: 40,
            y: 80,
            label: "2020",
            size: 4
        },
        {
            x: 80,
            y: 60,
            label: "2021",
            size: 5
        },
        {
            x: 120,
            y: 40,
            label: "2022",
            size: 6
        },
        {
            x: 160,
            y: 30,
            label: "2023",
            size: 7
        },
        {
            x: 200,
            y: 50,
            label: "2024",
            size: 6
        },
        {
            x: 240,
            y: 70,
            label: "2025",
            size: 5
        },
        {
            x: 280,
            y: 90,
            label: "2026",
            size: 4
        }
    ];
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "absolute inset-0 z-20",
                onMouseEnter: ()=>setHovered(true),
                onMouseLeave: ()=>setHovered(false)
            }, void 0, false, {
                fileName: "<[project]/app/dashboard/page.tsx>",
                lineNumber: 596,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "relative h-[160px] w-[320px] overflow-hidden rounded-t-2xl",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
                        className: "absolute inset-0 z-[6] h-full w-full",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                            d: `M${timelinePoints.map((p)=>`${p.x},${p.y}`).join(' L')}`,
                            stroke: hovered ? mainColor : secondaryColor,
                            strokeWidth: hovered ? 3 : 2,
                            fill: "none",
                            className: "transition-all duration-500 ease-in-out",
                            style: {
                                strokeDasharray: hovered ? "10,5" : "5,2",
                                animation: hovered ? "flow 3s linear infinite" : "none"
                            }
                        }, void 0, false, {
                            fileName: "<[project]/app/dashboard/page.tsx>",
                            lineNumber: 604,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/app/dashboard/page.tsx>",
                        lineNumber: 603,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "absolute inset-0 z-[7]",
                        children: timelinePoints.map((point, i)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"]("absolute rounded-full transition-all duration-500 ease-in-out", hovered ? "animate-bounce" : ""),
                                style: {
                                    left: point.x - point.size / 2,
                                    top: point.y - point.size / 2,
                                    width: hovered ? point.size * 1.8 : point.size,
                                    height: hovered ? point.size * 1.8 : point.size,
                                    backgroundColor: i === 3 ? mainColor : secondaryColor,
                                    transitionDelay: `${i * 80}ms`
                                }
                            }, i, false, {
                                fileName: "<[project]/app/dashboard/page.tsx>",
                                lineNumber: 620,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "<[project]/app/dashboard/page.tsx>",
                        lineNumber: 618,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "absolute inset-0 z-[8]",
                        children: timelinePoints.map((point, i)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"]("absolute text-xs font-medium transition-all duration-500 ease-in-out", hovered ? "opacity-100" : "opacity-60"),
                                style: {
                                    left: point.x - 15,
                                    top: point.y + 15,
                                    color: i === 3 ? mainColor : secondaryColor,
                                    transitionDelay: `${i * 80}ms`
                                },
                                children: point.label
                            }, i, false, {
                                fileName: "<[project]/app/dashboard/page.tsx>",
                                lineNumber: 641,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "<[project]/app/dashboard/page.tsx>",
                        lineNumber: 639,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](EllipseGradient, {
                        color: mainColor
                    }, void 0, false, {
                        fileName: "<[project]/app/dashboard/page.tsx>",
                        lineNumber: 659,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](GridLayer, {
                        color: gridColor
                    }, void 0, false, {
                        fileName: "<[project]/app/dashboard/page.tsx>",
                        lineNumber: 660,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/app/dashboard/page.tsx>",
                lineNumber: 601,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
_s5(TimelineVisual, "V8YbV+gTZxGliGj1g0fftBlvsq4=");
_c12 = TimelineVisual;
function DashboardPage() {
    const cards = [
        {
            visual: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](AnalyticsVisual, {}, void 0, false, {
                fileName: "<[project]/app/dashboard/page.tsx>",
                lineNumber: 670,
                columnNumber: 15
            }, this),
            title: "Analytics Dashboard",
            description: "Interactive data visualization with real-time progress tracking and technology stack overview."
        },
        {
            visual: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](WaveVisual, {}, void 0, false, {
                fileName: "<[project]/app/dashboard/page.tsx>",
                lineNumber: 675,
                columnNumber: 15
            }, this),
            title: "Wave Dynamics",
            description: "Fluid wave animations with floating particles that respond to user interaction."
        },
        {
            visual: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](GeometricVisual, {}, void 0, false, {
                fileName: "<[project]/app/dashboard/page.tsx>",
                lineNumber: 680,
                columnNumber: 15
            }, this),
            title: "Geometric Morphing",
            description: "Shape transformation animations with rotating elements and geometric patterns."
        },
        {
            visual: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](NetworkVisual, {}, void 0, false, {
                fileName: "<[project]/app/dashboard/page.tsx>",
                lineNumber: 685,
                columnNumber: 15
            }, this),
            title: "Network Graph",
            description: "Dynamic network visualization showing connected nodes with interactive animations."
        },
        {
            visual: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](DataFlowVisual, {}, void 0, false, {
                fileName: "<[project]/app/dashboard/page.tsx>",
                lineNumber: 690,
                columnNumber: 15
            }, this),
            title: "Data Flow",
            description: "Real-time data streams with flowing analytics and interactive data points visualization."
        },
        {
            visual: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](TimelineVisual, {}, void 0, false, {
                fileName: "<[project]/app/dashboard/page.tsx>",
                lineNumber: 695,
                columnNumber: 15
            }, this),
            title: "Timeline Analysis",
            description: "Historical trend analysis with interactive timeline points and predictive insights."
        }
    ];
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "min-h-screen bg-gradient-to-br from-gray-900 via-black to-black text-white",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "max-w-5xl mx-auto px-8 py-16",
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "text-center mb-16",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                            className: "text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent",
                            children: "Dashboard Interactivo"
                        }, void 0, false, {
                            fileName: "<[project]/app/dashboard/page.tsx>",
                            lineNumber: 706,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                            className: "text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed",
                            children: "Explora los diferentes tipos de dashboard disponibles en QSP Analytics. Cada uno est\xe1 dise\xf1ado para proporcionar insights \xfanicos sobre el comercio exterior y la toma de decisiones estrat\xe9gicas."
                        }, void 0, false, {
                            fileName: "<[project]/app/dashboard/page.tsx>",
                            lineNumber: 709,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/app/dashboard/page.tsx>",
                    lineNumber: 705,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "max-w-7xl mx-auto px-16",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h2", {
                            className: "text-3xl font-bold mb-12 text-center text-primary-400",
                            children: "Demostraci\xf3n Interactiva"
                        }, void 0, false, {
                            fileName: "<[project]/app/dashboard/page.tsx>",
                            lineNumber: 719,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                            className: "text-center text-gray-400 mb-20 max-w-3xl mx-auto",
                            children: "Pasa el cursor sobre cada tarjeta para ver las animaciones y entender mejor c\xf3mo funcionan los diferentes tipos de visualizaci\xf3n en nuestros dashboards."
                        }, void 0, false, {
                            fileName: "<[project]/app/dashboard/page.tsx>",
                            lineNumber: 722,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-16 place-items-center justify-items-center mx-auto max-w-7xl",
                            children: cards.map((card, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](AnimatedCard, {
                                    className: "w-[320px] mx-4 my-4",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](CardVisual, {
                                            className: "h-[160px] w-[320px]",
                                            children: card.visual
                                        }, void 0, false, {
                                            fileName: "<[project]/app/dashboard/page.tsx>",
                                            lineNumber: 730,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](CardBody, {
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](CardTitle, {
                                                    children: card.title
                                                }, void 0, false, {
                                                    fileName: "<[project]/app/dashboard/page.tsx>",
                                                    lineNumber: 734,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](CardDescription, {
                                                    children: card.description
                                                }, void 0, false, {
                                                    fileName: "<[project]/app/dashboard/page.tsx>",
                                                    lineNumber: 735,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/app/dashboard/page.tsx>",
                                            lineNumber: 733,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "<[project]/app/dashboard/page.tsx>",
                                    lineNumber: 729,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "<[project]/app/dashboard/page.tsx>",
                            lineNumber: 727,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "h-20"
                        }, void 0, false, {
                            fileName: "<[project]/app/dashboard/page.tsx>",
                            lineNumber: 742,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/app/dashboard/page.tsx>",
                    lineNumber: 718,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "text-center mt-16",
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "bg-gradient-to-r from-primary-600/20 to-primary-800/20 p-8 rounded-2xl border border-primary-500/30",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                className: "text-2xl font-bold mb-4 text-primary-300",
                                children: "\xbfListo para explorar tu dashboard personalizado?"
                            }, void 0, false, {
                                fileName: "<[project]/app/dashboard/page.tsx>",
                                lineNumber: 748,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                className: "text-gray-300 mb-6 max-w-2xl mx-auto",
                                children: "Cada dashboard se adapta a tus necesidades espec\xedficas y te proporciona la informaci\xf3n que necesitas para tomar decisiones informadas en el comercio exterior."
                            }, void 0, false, {
                                fileName: "<[project]/app/dashboard/page.tsx>",
                                lineNumber: 751,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("a", {
                                href: "/precios",
                                className: "inline-block px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-500/25",
                                children: "Ver planes"
                            }, void 0, false, {
                                fileName: "<[project]/app/dashboard/page.tsx>",
                                lineNumber: 755,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/app/dashboard/page.tsx>",
                        lineNumber: 747,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/app/dashboard/page.tsx>",
                    lineNumber: 746,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "max-w-5xl mx-auto mt-16 p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h2", {
                            className: "text-3xl font-bold mb-6 text-primary-400",
                            children: "Tipos de Dashboard Disponibles"
                        }, void 0, false, {
                            fileName: "<[project]/app/dashboard/page.tsx>",
                            lineNumber: 766,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "grid md:grid-cols-2 gap-8",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                            className: "text-xl font-semibold mb-4 text-primary-300",
                                            children: "📊 Dashboard Anal\xedtico"
                                        }, void 0, false, {
                                            fileName: "<[project]/app/dashboard/page.tsx>",
                                            lineNumber: 770,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                            className: "text-gray-300 mb-4",
                                            children: "Monitoreo en tiempo real de m\xe9tricas clave de comercio exterior, incluyendo:"
                                        }, void 0, false, {
                                            fileName: "<[project]/app/dashboard/page.tsx>",
                                            lineNumber: 771,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("ul", {
                                            className: "text-gray-400 space-y-2 ml-4",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                    children: "• Vol\xfamenes de exportaci\xf3n por regi\xf3n"
                                                }, void 0, false, {
                                                    fileName: "<[project]/app/dashboard/page.tsx>",
                                                    lineNumber: 775,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                    children: "• Tendencias de precios y demanda"
                                                }, void 0, false, {
                                                    fileName: "<[project]/app/dashboard/page.tsx>",
                                                    lineNumber: 776,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                    children: "• An\xe1lisis de competencia"
                                                }, void 0, false, {
                                                    fileName: "<[project]/app/dashboard/page.tsx>",
                                                    lineNumber: 777,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                    children: "• Indicadores de rendimiento"
                                                }, void 0, false, {
                                                    fileName: "<[project]/app/dashboard/page.tsx>",
                                                    lineNumber: 778,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/app/dashboard/page.tsx>",
                                            lineNumber: 774,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/app/dashboard/page.tsx>",
                                    lineNumber: 769,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                            className: "text-xl font-semibold mb-4 text-primary-300",
                                            children: "🌊 Dashboard de Tendencias"
                                        }, void 0, false, {
                                            fileName: "<[project]/app/dashboard/page.tsx>",
                                            lineNumber: 783,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                            className: "text-gray-300 mb-4",
                                            children: "Visualizaci\xf3n din\xe1mica de patrones y flujos del mercado:"
                                        }, void 0, false, {
                                            fileName: "<[project]/app/dashboard/page.tsx>",
                                            lineNumber: 784,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("ul", {
                                            className: "text-gray-400 space-y-2 ml-4",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                    children: "• An\xe1lisis de ondas de demanda"
                                                }, void 0, false, {
                                                    fileName: "<[project]/app/dashboard/page.tsx>",
                                                    lineNumber: 788,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                    children: "• Predicciones estacionales"
                                                }, void 0, false, {
                                                    fileName: "<[project]/app/dashboard/page.tsx>",
                                                    lineNumber: 789,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                    children: "• Cambios en preferencias del mercado"
                                                }, void 0, false, {
                                                    fileName: "<[project]/app/dashboard/page.tsx>",
                                                    lineNumber: 790,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                    children: "• Alertas de oportunidades"
                                                }, void 0, false, {
                                                    fileName: "<[project]/app/dashboard/page.tsx>",
                                                    lineNumber: 791,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/app/dashboard/page.tsx>",
                                            lineNumber: 787,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/app/dashboard/page.tsx>",
                                    lineNumber: 782,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                            className: "text-xl font-semibold mb-4 text-primary-300",
                                            children: "🔷 Dashboard Geom\xe9trico"
                                        }, void 0, false, {
                                            fileName: "<[project]/app/dashboard/page.tsx>",
                                            lineNumber: 796,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                            className: "text-gray-300 mb-4",
                                            children: "Representaci\xf3n estructural de datos complejos:"
                                        }, void 0, false, {
                                            fileName: "<[project]/app/dashboard/page.tsx>",
                                            lineNumber: 797,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("ul", {
                                            className: "text-gray-400 space-y-2 ml-4",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                    children: "• Mapeo de relaciones comerciales"
                                                }, void 0, false, {
                                                    fileName: "<[project]/app/dashboard/page.tsx>",
                                                    lineNumber: 801,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                    children: "• An\xe1lisis de clusters de mercado"
                                                }, void 0, false, {
                                                    fileName: "<[project]/app/dashboard/page.tsx>",
                                                    lineNumber: 802,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                    children: "• Patrones de distribuci\xf3n geogr\xe1fica"
                                                }, void 0, false, {
                                                    fileName: "<[project]/app/dashboard/page.tsx>",
                                                    lineNumber: 803,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                    children: "• Segmentaci\xf3n de clientes"
                                                }, void 0, false, {
                                                    fileName: "<[project]/app/dashboard/page.tsx>",
                                                    lineNumber: 804,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/app/dashboard/page.tsx>",
                                            lineNumber: 800,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/app/dashboard/page.tsx>",
                                    lineNumber: 795,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                            className: "text-xl font-semibold mb-4 text-primary-300",
                                            children: "🌐 Dashboard de Redes"
                                        }, void 0, false, {
                                            fileName: "<[project]/app/dashboard/page.tsx>",
                                            lineNumber: 809,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                            className: "text-gray-300 mb-4",
                                            children: "An\xe1lisis de conexiones y flujos comerciales:"
                                        }, void 0, false, {
                                            fileName: "<[project]/app/dashboard/page.tsx>",
                                            lineNumber: 810,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("ul", {
                                            className: "text-gray-400 space-y-2 ml-4",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                    children: "• Mapeo de cadenas de suministro"
                                                }, void 0, false, {
                                                    fileName: "<[project]/app/dashboard/page.tsx>",
                                                    lineNumber: 814,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                    children: "• An\xe1lisis de socios comerciales"
                                                }, void 0, false, {
                                                    fileName: "<[project]/app/dashboard/page.tsx>",
                                                    lineNumber: 815,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                    children: "• Flujos de capital y mercanc\xedas"
                                                }, void 0, false, {
                                                    fileName: "<[project]/app/dashboard/page.tsx>",
                                                    lineNumber: 816,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                    children: "• Identificaci\xf3n de cuellos de botella"
                                                }, void 0, false, {
                                                    fileName: "<[project]/app/dashboard/page.tsx>",
                                                    lineNumber: 817,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/app/dashboard/page.tsx>",
                                            lineNumber: 813,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/app/dashboard/page.tsx>",
                                    lineNumber: 808,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/app/dashboard/page.tsx>",
                            lineNumber: 768,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/app/dashboard/page.tsx>",
                    lineNumber: 765,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/app/dashboard/page.tsx>",
            lineNumber: 704,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/app/dashboard/page.tsx>",
        lineNumber: 702,
        columnNumber: 5
    }, this);
}
_c13 = DashboardPage;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13;
__turbopack_refresh__.register(_c, "AnimatedCard");
__turbopack_refresh__.register(_c1, "CardBody");
__turbopack_refresh__.register(_c2, "CardTitle");
__turbopack_refresh__.register(_c3, "CardDescription");
__turbopack_refresh__.register(_c4, "CardVisual");
__turbopack_refresh__.register(_c5, "EllipseGradient");
__turbopack_refresh__.register(_c6, "GridLayer");
__turbopack_refresh__.register(_c7, "AnalyticsVisual");
__turbopack_refresh__.register(_c8, "WaveVisual");
__turbopack_refresh__.register(_c9, "GeometricVisual");
__turbopack_refresh__.register(_c10, "NetworkVisual");
__turbopack_refresh__.register(_c11, "DataFlowVisual");
__turbopack_refresh__.register(_c12, "TimelineVisual");
__turbopack_refresh__.register(_c13, "DashboardPage");

})()),
}]);

//# sourceMappingURL=_8f7e09._.js.map