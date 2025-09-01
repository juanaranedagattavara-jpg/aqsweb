(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/components_marketing_testimonials_tsx_154bd5._.js", {

"[project]/components/marketing/testimonials.tsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Testimonials": ()=>Testimonials
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/lucide-react.js [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
const testimonials = [
    {
        id: 1,
        name: 'María González',
        role: 'Directora de Operaciones',
        company: 'ImportExport Pro',
        content: 'QSP nos ha permitido transformar completamente nuestro análisis de datos de importaciones. Ahora podemos anticipar tendencias del mercado y tomar decisiones estratégicas con confianza.',
        rating: 5,
        avatar: '/avatars/maria.jpg'
    },
    {
        id: 2,
        name: 'Carlos Rodríguez',
        role: 'CEO',
        company: 'Global Trade Solutions',
        content: 'La plataforma de QSP es increíblemente intuitiva. En solo unas semanas, pudimos identificar oportunidades de mercado que antes nos pasaban desapercibidas.',
        rating: 5,
        avatar: '/avatars/carlos.jpg'
    },
    {
        id: 3,
        name: 'Ana Martínez',
        role: 'Directora de Estrategia',
        company: 'Trade Dynamics',
        content: 'Los insights que obtenemos de QSP nos han ayudado a optimizar nuestras rutas de importación y reducir costos en un 25%. Es una herramienta indispensable.',
        rating: 5,
        avatar: '/avatars/ana.jpg'
    },
    {
        id: 4,
        name: 'Luis Fernández',
        role: 'Director Comercial',
        company: 'Export Masters',
        content: 'QSP nos da una ventaja competitiva real. Podemos ver exactamente cómo se comporta la competencia y ajustar nuestra estrategia en tiempo real.',
        rating: 5,
        avatar: '/avatars/luis.jpg'
    }
];
function Testimonials() {
    _s();
    const [currentIndex, setCurrentIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](0);
    const nextTestimonial = ()=>{
        setCurrentIndex((prevIndex)=>prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1);
    };
    const prevTestimonial = ()=>{
        setCurrentIndex((prevIndex)=>prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1);
    };
    const currentTestimonial = testimonials[currentIndex];
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("section", {
        className: "py-24 bg-[#F6F8FB]",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "container mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "text-center mb-20",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h2", {
                            className: "text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A2540] mb-8",
                            children: [
                                "Lo que dicen nuestros",
                                ' ',
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                    className: "bg-gradient-to-r from-[#2F81F7] to-[#E65C3D] bg-clip-text text-transparent",
                                    children: "clientes"
                                }, void 0, false, {
                                    fileName: "<[project]/components/marketing/testimonials.tsx>",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/marketing/testimonials.tsx>",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                            className: "text-xl text-[#374151] max-w-3xl mx-auto leading-relaxed",
                            children: "Descubre c\xf3mo QSP est\xe1 transformando el an\xe1lisis de datos para empresas l\xedderes en importaciones y exportaciones."
                        }, void 0, false, {
                            fileName: "<[project]/components/marketing/testimonials.tsx>",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/marketing/testimonials.tsx>",
                    lineNumber: 65,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "relative max-w-4xl mx-auto",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-[#2F81F7]/10",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "absolute top-6 left-8 text-[#2F81F7]/20",
                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Quote"], {
                                        className: "h-12 w-12"
                                    }, void 0, false, {
                                        fileName: "<[project]/components/marketing/testimonials.tsx>",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/components/marketing/testimonials.tsx>",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "relative z-10 text-center",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "flex justify-center mb-6",
                                            children: [
                                                ...Array(currentTestimonial.rating)
                                            ].map((_, i)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Star"], {
                                                    className: "h-6 w-6 text-[#F59E0B] fill-current"
                                                }, i, false, {
                                                    fileName: "<[project]/components/marketing/testimonials.tsx>",
                                                    lineNumber: 91,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "<[project]/components/marketing/testimonials.tsx>",
                                            lineNumber: 89,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("blockquote", {
                                            className: "text-xl md:text-2xl text-[#0A2540] leading-relaxed mb-8 italic",
                                            children: [
                                                '"',
                                                currentTestimonial.content,
                                                '"'
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/components/marketing/testimonials.tsx>",
                                            lineNumber: 96,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "flex flex-col items-center",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "w-16 h-16 bg-gradient-to-br from-[#2F81F7] to-[#E65C3D] rounded-full flex items-center justify-center text-white font-bold text-lg mb-4",
                                                    children: currentTestimonial.name.charAt(0)
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/marketing/testimonials.tsx>",
                                                    lineNumber: 102,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                            className: "font-semibold text-[#0A2540] text-lg",
                                                            children: currentTestimonial.name
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/marketing/testimonials.tsx>",
                                                            lineNumber: 106,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                            className: "text-[#2F81F7] font-medium",
                                                            children: currentTestimonial.role
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/marketing/testimonials.tsx>",
                                                            lineNumber: 109,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                            className: "text-[#374151] text-sm",
                                                            children: currentTestimonial.company
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/marketing/testimonials.tsx>",
                                                            lineNumber: 112,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/components/marketing/testimonials.tsx>",
                                                    lineNumber: 105,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/components/marketing/testimonials.tsx>",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/components/marketing/testimonials.tsx>",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/marketing/testimonials.tsx>",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                            onClick: prevTestimonial,
                            className: "absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white border border-[#2F81F7]/20 text-[#2F81F7] p-3 rounded-full shadow-lg hover:bg-[#2F81F7] hover:text-white transition-all duration-300 hover:scale-110",
                            "aria-label": "Testimonio anterior",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ChevronLeft"], {
                                className: "h-6 w-6"
                            }, void 0, false, {
                                fileName: "<[project]/components/marketing/testimonials.tsx>",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/components/marketing/testimonials.tsx>",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                            onClick: nextTestimonial,
                            className: "absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white border border-[#2F81F7]/20 text-[#2F81F7] p-3 rounded-full shadow-lg hover:bg-[#2F81F7] hover:text-white transition-all duration-300 hover:scale-110",
                            "aria-label": "Testimonio siguiente",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ChevronRight"], {
                                className: "h-6 w-6"
                            }, void 0, false, {
                                fileName: "<[project]/components/marketing/testimonials.tsx>",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/components/marketing/testimonials.tsx>",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "flex justify-center mt-8 space-x-2",
                            children: testimonials.map((_, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                    onClick: ()=>setCurrentIndex(index),
                                    className: `w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-[#2F81F7] scale-125' : 'bg-[#2F81F7]/30 hover:bg-[#2F81F7]/50'}`,
                                    "aria-label": `Ir al testimonio ${index + 1}`
                                }, index, false, {
                                    fileName: "<[project]/components/marketing/testimonials.tsx>",
                                    lineNumber: 140,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "<[project]/components/marketing/testimonials.tsx>",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/marketing/testimonials.tsx>",
                    lineNumber: 78,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "text-center mt-16",
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "inline-flex items-center px-8 py-4 bg-[#0A2540] hover:bg-[#113A63] text-white font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Quote"], {
                                className: "w-5 h-5 mr-2"
                            }, void 0, false, {
                                fileName: "<[project]/components/marketing/testimonials.tsx>",
                                lineNumber: 157,
                                columnNumber: 13
                            }, this),
                            "\xdanete a nuestros clientes satisfechos"
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/components/marketing/testimonials.tsx>",
                        lineNumber: 156,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/components/marketing/testimonials.tsx>",
                    lineNumber: 155,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/components/marketing/testimonials.tsx>",
            lineNumber: 64,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/components/marketing/testimonials.tsx>",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
_s(Testimonials, "tusBbsahUVevXfyh6oH5R6YDC9Q=");
_c = Testimonials;
var _c;
__turbopack_refresh__.register(_c, "Testimonials");

})()),
}]);

//# sourceMappingURL=components_marketing_testimonials_tsx_154bd5._.js.map