(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/components_layout_header_tsx_b66300._.js", {

"[project]/components/layout/header.tsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Header": ()=>Header,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/lucide-react.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/index.mjs [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
const menuItems = [
    {
        label: "Dashboard",
        href: "/dashboard",
        items: []
    },
    {
        label: "Planes",
        href: "/precios",
        items: []
    },
    {
        label: "Recursos",
        href: "#",
        items: [
            {
                label: "Casos de Éxito",
                href: "#"
            },
            {
                label: "Estudios de Mercado",
                href: "#"
            },
            {
                label: "Guías y Whitepapers",
                href: "#"
            },
            {
                label: "Blog",
                href: "/blog"
            },
            {
                label: "Webinars & Eventos",
                href: "#"
            }
        ]
    },
    {
        label: "Newsletter",
        href: "/newsletter",
        items: []
    }
];
function NavItem(param) {
    let { item, isOpen, onToggle, onClose } = param;
    // Si no hay items, es un enlace simple
    if (item.items.length === 0) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("a", {
            href: item.href,
            className: "px-4 py-2 text-gray-200 hover:text-white transition-colors",
            children: item.label
        }, void 0, false, {
            fileName: "<[project]/components/layout/header.tsx>",
            lineNumber: 45,
            columnNumber: 7
        }, this);
    }
    // Si hay items, es un menú desplegable
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                onClick: onToggle,
                className: "flex items-center space-x-1 px-4 py-2 text-gray-200 hover:text-white transition-colors",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                        children: item.label
                    }, void 0, false, {
                        fileName: "<[project]/components/layout/header.tsx>",
                        lineNumber: 61,
                        columnNumber: 23
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ChevronDown"], {
                        className: `w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`
                    }, void 0, false, {
                        fileName: "<[project]/components/layout/header.tsx>",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/components/layout/header.tsx>",
                lineNumber: 57,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isOpen && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: -10
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -10
                    },
                    transition: {
                        duration: 0.2
                    },
                    className: "absolute top-full left-0 w-64 bg-white border border-gray-200 rounded-lg shadow-xl z-50",
                    onMouseLeave: onClose,
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "py-2",
                        children: item.items.map((subItem, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("a", {
                                href: subItem.href,
                                className: "block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors",
                                onClick: onClose,
                                children: subItem.label
                            }, index, false, {
                                fileName: "<[project]/components/layout/header.tsx>",
                                lineNumber: 77,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "<[project]/components/layout/header.tsx>",
                        lineNumber: 75,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/components/layout/header.tsx>",
                    lineNumber: 67,
                    columnNumber: 25
                }, this)
            }, void 0, false, {
                fileName: "<[project]/components/layout/header.tsx>",
                lineNumber: 65,
                columnNumber: 21
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/components/layout/header.tsx>",
        lineNumber: 56,
        columnNumber: 19
    }, this);
}
_c = NavItem;
function MobileNavItem(param) {
    let { item, isOpen, onToggle } = param;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                onClick: onToggle,
                className: "flex items-center justify-between w-full px-4 py-3 text-left text-gray-200 hover:text-white transition-colors",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                        children: item.label
                    }, void 0, false, {
                        fileName: "<[project]/components/layout/header.tsx>",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ChevronDown"], {
                        className: `w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`
                    }, void 0, false, {
                        fileName: "<[project]/components/layout/header.tsx>",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/components/layout/header.tsx>",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isOpen && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        height: 0
                    },
                    animate: {
                        opacity: 1,
                        height: "auto"
                    },
                    exit: {
                        opacity: 0,
                        height: 0
                    },
                    transition: {
                        duration: 0.2
                    },
                    className: "bg-gray-800",
                    children: item.items.map((subItem, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("a", {
                            href: subItem.href,
                            className: "block px-8 py-2 text-gray-400 hover:text-white transition-colors",
                            children: subItem.label
                        }, index, false, {
                            fileName: "<[project]/components/layout/header.tsx>",
                            lineNumber: 119,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "<[project]/components/layout/header.tsx>",
                    lineNumber: 111,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "<[project]/components/layout/header.tsx>",
                lineNumber: 109,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/components/layout/header.tsx>",
        lineNumber: 100,
        columnNumber: 5
    }, this);
}
_c1 = MobileNavItem;
function Header() {
    _s();
    const [mobileMenuOpen, setMobileMenuOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [openMenuIndex, setOpenMenuIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](null);
    const handleMenuToggle = (index)=>{
        if (openMenuIndex === index) {
            setOpenMenuIndex(null);
        } else {
            setOpenMenuIndex(index);
        }
    };
    const closeAllMenus = ()=>{
        setOpenMenuIndex(null);
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("header", {
        className: "relative z-50 bg-[#0A2540] border-b border-blue-900 shadow-lg",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("nav", {
                className: "container mx-auto flex items-center justify-between px-4 py-4",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex items-center",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("a", {
                            href: "/",
                            className: "flex items-center space-x-3",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0A2540] font-bold text-xl",
                                    children: "Q"
                                }, void 0, false, {
                                    fileName: "<[project]/components/layout/header.tsx>",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                    className: "text-xl font-bold text-white",
                                    children: "QSP Analytics"
                                }, void 0, false, {
                                    fileName: "<[project]/components/layout/header.tsx>",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/layout/header.tsx>",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/components/layout/header.tsx>",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "hidden lg:flex items-center space-x-8",
                        children: menuItems.map((item, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](NavItem, {
                                item: item,
                                isOpen: openMenuIndex === index,
                                onToggle: ()=>handleMenuToggle(index),
                                onClose: closeAllMenus
                            }, item.label, false, {
                                fileName: "<[project]/components/layout/header.tsx>",
                                lineNumber: 167,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "<[project]/components/layout/header.tsx>",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "hidden lg:flex items-center space-x-4",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("a", {
                                href: "/login",
                                className: "text-gray-200 hover:text-white transition-colors",
                                children: "Login"
                            }, void 0, false, {
                                fileName: "<[project]/components/layout/header.tsx>",
                                lineNumber: 179,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("a", {
                                href: "/solicitar-demo",
                                className: "px-6 py-2 bg-white hover:bg-gray-100 text-[#0A2540] font-semibold rounded-lg transition-colors flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                        children: "Solicita una demo"
                                    }, void 0, false, {
                                        fileName: "<[project]/components/layout/header.tsx>",
                                        lineNumber: 189,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ArrowRight"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "<[project]/components/layout/header.tsx>",
                                        lineNumber: 190,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/components/layout/header.tsx>",
                                lineNumber: 185,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/components/layout/header.tsx>",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                        onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                        className: "lg:hidden p-2 text-gray-200 hover:text-white transition-colors",
                        children: mobileMenuOpen ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__["X"], {
                            className: "w-6 h-6"
                        }, void 0, false, {
                            fileName: "<[project]/components/layout/header.tsx>",
                            lineNumber: 199,
                            columnNumber: 29
                        }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Menu"], {
                            className: "w-6 h-6"
                        }, void 0, false, {
                            fileName: "<[project]/components/layout/header.tsx>",
                            lineNumber: 199,
                            columnNumber: 57
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/components/layout/header.tsx>",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/components/layout/header.tsx>",
                lineNumber: 153,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: mobileMenuOpen && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        height: 0
                    },
                    animate: {
                        opacity: 1,
                        height: "auto"
                    },
                    exit: {
                        opacity: 0,
                        height: 0
                    },
                    transition: {
                        duration: 0.3
                    },
                    className: "lg:hidden bg-[#0A2540] border-t border-blue-900",
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "container mx-auto px-4 py-4",
                        children: [
                            menuItems.map((item, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](MobileNavItem, {
                                    item: item,
                                    isOpen: openMenuIndex === index,
                                    onToggle: ()=>handleMenuToggle(index)
                                }, item.label, false, {
                                    fileName: "<[project]/components/layout/header.tsx>",
                                    lineNumber: 215,
                                    columnNumber: 17
                                }, this)),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "mt-6 pt-6 border-t border-blue-900",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("a", {
                                        href: "/login",
                                        className: "block px-4 py-3 text-gray-200 hover:text-white transition-colors",
                                        children: "Login"
                                    }, void 0, false, {
                                        fileName: "<[project]/components/layout/header.tsx>",
                                        lineNumber: 225,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("a", {
                                        href: "/solicitar-demo",
                                        className: "w-full mt-3 px-6 py-3 bg-white hover:bg-gray-100 text-[#0A2540] font-semibold rounded-lg transition-colors flex items-center justify-center space-x-2",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                children: "Solicita una demo"
                                            }, void 0, false, {
                                                fileName: "<[project]/components/layout/header.tsx>",
                                                lineNumber: 235,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ArrowRight"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "<[project]/components/layout/header.tsx>",
                                                lineNumber: 236,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/components/layout/header.tsx>",
                                        lineNumber: 231,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/components/layout/header.tsx>",
                                lineNumber: 224,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/components/layout/header.tsx>",
                        lineNumber: 213,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/components/layout/header.tsx>",
                    lineNumber: 206,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "<[project]/components/layout/header.tsx>",
                lineNumber: 204,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/components/layout/header.tsx>",
        lineNumber: 151,
        columnNumber: 5
    }, this);
}
_s(Header, "X27YYTVmx9jXEby5bH1XWAYkf2w=");
_c2 = Header;
const __TURBOPACK__default__export__ = Header;
var _c, _c1, _c2;
__turbopack_refresh__.register(_c, "NavItem");
__turbopack_refresh__.register(_c1, "MobileNavItem");
__turbopack_refresh__.register(_c2, "Header");

})()),
}]);

//# sourceMappingURL=components_layout_header_tsx_b66300._.js.map