(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_531248._.js", {

"[project]/lib/blog-data.ts [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "blogArticles": ()=>blogArticles,
    "blogCategories": ()=>blogCategories,
    "getArticlesByCategory": ()=>getArticlesByCategory,
    "getCategoryBySlug": ()=>getCategoryBySlug,
    "getFeaturedArticle": ()=>getFeaturedArticle
});
const blogCategories = [
    {
        id: 'tendencias',
        name: 'Tendencias',
        slug: 'tendencias',
        description: 'Últimas tendencias y novedades del comercio exterior',
        icon: 'TrendingUp',
        articleCount: 12
    },
    {
        id: 'analisis',
        name: 'Análisis',
        slug: 'analisis',
        description: 'Análisis profundos de mercados y estrategias',
        icon: 'BarChart3',
        articleCount: 8
    },
    {
        id: 'mercados',
        name: 'Mercados',
        slug: 'mercados',
        description: 'Exploración de mercados internacionales',
        icon: 'Globe',
        articleCount: 15
    },
    {
        id: 'casos-exito',
        name: 'Casos de Éxito',
        slug: 'casos-exito',
        description: 'Historias reales de empresas exitosas',
        icon: 'Users',
        articleCount: 6
    },
    {
        id: 'estrategias',
        name: 'Estrategias',
        slug: 'estrategias',
        description: 'Estrategias comerciales y tácticas de mercado',
        icon: 'Target',
        articleCount: 9
    },
    {
        id: 'tecnologia',
        name: 'Tecnología',
        slug: 'tecnologia',
        description: 'Innovación tecnológica en comercio exterior',
        icon: 'Zap',
        articleCount: 7
    }
];
const blogArticles = [
    {
        id: '1',
        slug: 'tendencias-2024',
        title: 'El Futuro del Comercio Exterior: Tendencias 2024',
        excerpt: 'Analizamos las principales tendencias que están transformando el comercio exterior global, desde la digitalización hasta los nuevos acuerdos comerciales y la sostenibilidad como factor clave.',
        content: 'Contenido completo del artículo...',
        category: 'Tendencias',
        categorySlug: 'tendencias',
        date: '15 de Enero, 2024',
        readTime: '8 min',
        author: 'QSP Analytics',
        featured: true,
        tags: [
            'tendencias',
            '2024',
            'global',
            'digitalización'
        ]
    },
    {
        id: '2',
        slug: 'mercados-emergentes-asia',
        title: 'Análisis de Mercados Emergentes en Asia',
        excerpt: 'Exploramos las oportunidades en mercados asiáticos y estrategias de entrada para empresas latinoamericanas.',
        content: 'Contenido completo del artículo...',
        category: 'Análisis',
        categorySlug: 'analisis',
        date: '12 de Enero, 2024',
        readTime: '6 min',
        author: 'María González',
        tags: [
            'asia',
            'mercados emergentes',
            'latinoamérica'
        ]
    },
    {
        id: '3',
        slug: 'digitalizacion-comercio-exterior',
        title: 'Digitalización del Comercio Exterior',
        excerpt: 'Cómo la tecnología está transformando los procesos de importación y exportación en América Latina.',
        content: 'Contenido completo del artículo...',
        category: 'Tendencias',
        categorySlug: 'tendencias',
        date: '10 de Enero, 2024',
        readTime: '7 min',
        author: 'Carlos Rodríguez',
        tags: [
            'digitalización',
            'tecnología',
            'américa latina'
        ]
    },
    {
        id: '4',
        slug: 'empresa-mexicana-europa',
        title: 'Empresa Mexicana Expande a Europa',
        excerpt: 'Historia de cómo una empresa mexicana logró expandirse exitosamente al mercado europeo.',
        content: 'Contenido completo del artículo...',
        category: 'Casos de Éxito',
        categorySlug: 'casos-exito',
        date: '8 de Enero, 2024',
        readTime: '5 min',
        author: 'Ana Martínez',
        tags: [
            'méxico',
            'europa',
            'expansión',
            'caso éxito'
        ]
    },
    {
        id: '5',
        slug: 'acuerdos-comerciales',
        title: 'Impacto de los Acuerdos Comerciales',
        excerpt: 'Análisis del impacto de los nuevos acuerdos comerciales en la región latinoamericana.',
        content: 'Contenido completo del artículo...',
        category: 'Análisis',
        categorySlug: 'analisis',
        date: '5 de Enero, 2024',
        readTime: '9 min',
        author: 'Luis Fernández',
        tags: [
            'acuerdos comerciales',
            'latinoamérica',
            'política comercial'
        ]
    },
    {
        id: '6',
        slug: 'mercado-africano',
        title: 'Oportunidades en el Mercado Africano',
        excerpt: 'Descubre las oportunidades emergentes en mercados africanos para exportadores latinoamericanos.',
        content: 'Contenido completo del artículo...',
        category: 'Mercados',
        categorySlug: 'mercados',
        date: '3 de Enero, 2024',
        readTime: '8 min',
        author: 'Sofia Herrera',
        tags: [
            'áfrica',
            'mercados emergentes',
            'exportación'
        ]
    },
    {
        id: '7',
        slug: 'sostenibilidad-comercio',
        title: 'Sostenibilidad en el Comercio Global',
        excerpt: 'Cómo la sostenibilidad se está convirtiendo en un factor clave para el éxito comercial internacional.',
        content: 'Contenido completo del artículo...',
        category: 'Tendencias',
        categorySlug: 'tendencias',
        date: '1 de Enero, 2024',
        readTime: '6 min',
        author: 'Roberto Silva',
        tags: [
            'sostenibilidad',
            'comercio global',
            'medio ambiente'
        ]
    },
    {
        id: '8',
        slug: 'estrategias-exportacion',
        title: 'Estrategias de Exportación para Pymes',
        excerpt: 'Guía completa de estrategias de exportación adaptadas a las necesidades de las pequeñas y medianas empresas.',
        content: 'Contenido completo del artículo...',
        category: 'Estrategias',
        categorySlug: 'estrategias',
        date: '28 de Diciembre, 2023',
        readTime: '10 min',
        author: 'Carmen López',
        tags: [
            'pymes',
            'exportación',
            'estrategias',
            'guía'
        ]
    },
    {
        id: '9',
        slug: 'blockchain-comercio',
        title: 'Blockchain en el Comercio Internacional',
        excerpt: 'Cómo la tecnología blockchain está revolucionando la trazabilidad y seguridad en el comercio exterior.',
        content: 'Contenido completo del artículo...',
        category: 'Tecnología',
        categorySlug: 'tecnologia',
        date: '25 de Diciembre, 2023',
        readTime: '7 min',
        author: 'Diego Morales',
        tags: [
            'blockchain',
            'tecnología',
            'trazabilidad',
            'seguridad'
        ]
    },
    {
        id: '10',
        slug: 'mercado-chino',
        title: 'Navegando el Mercado Chino',
        excerpt: 'Estrategias y consideraciones para empresas latinoamericanas que buscan entrar al mercado chino.',
        content: 'Contenido completo del artículo...',
        category: 'Mercados',
        categorySlug: 'mercados',
        date: '22 de Diciembre, 2023',
        readTime: '9 min',
        author: 'Patricia Wong',
        tags: [
            'china',
            'mercado chino',
            'estrategias',
            'latinoamérica'
        ]
    }
];
const getArticlesByCategory = (categorySlug)=>{
    if (categorySlug === 'todos') {
        return blogArticles;
    }
    return blogArticles.filter((article)=>article.categorySlug === categorySlug);
};
const getFeaturedArticle = ()=>{
    return blogArticles.find((article)=>article.featured);
};
const getCategoryBySlug = (slug)=>{
    return blogCategories.find((category)=>category.slug === slug);
};

})()),
"[project]/components/ui/articles-grid.tsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ArticlesGrid": ()=>ArticlesGrid
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/lucide-react.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
function ArticlesGrid(param) {
    let { articles, selectedCategory } = param;
    if (articles.length === 0) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: 20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            className: "text-center py-16",
            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "w-24 h-24 bg-primary-600/20 rounded-full flex items-center justify-center mx-auto mb-6",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Calendar"], {
                            className: "w-12 h-12 text-primary-400"
                        }, void 0, false, {
                            fileName: "<[project]/components/ui/articles-grid.tsx>",
                            lineNumber: 24,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/components/ui/articles-grid.tsx>",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                        className: "text-2xl font-bold text-white mb-4",
                        children: "No hay art\xedculos en esta categor\xeda"
                    }, void 0, false, {
                        fileName: "<[project]/components/ui/articles-grid.tsx>",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                        className: "text-gray-300 mb-6 max-w-md mx-auto",
                        children: "Pronto publicaremos contenido en esta categor\xeda. Mientras tanto, explora otras categor\xedas o suscr\xedbete a nuestro newsletter."
                    }, void 0, false, {
                        fileName: "<[project]/components/ui/articles-grid.tsx>",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/newsletter",
                        className: "inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300",
                        children: [
                            "Suscribirse al Newsletter",
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ArrowRight"], {
                                className: "w-4 h-4 ml-2"
                            }, void 0, false, {
                                fileName: "<[project]/components/ui/articles-grid.tsx>",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/components/ui/articles-grid.tsx>",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/components/ui/articles-grid.tsx>",
                lineNumber: 22,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "<[project]/components/ui/articles-grid.tsx>",
            lineNumber: 17,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            mode: "wait",
            children: articles.map((article, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -20
                    },
                    transition: {
                        duration: 0.5,
                        delay: index * 0.1
                    },
                    layout: true,
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/blog/${article.slug}`,
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("article", {
                            className: "bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group cursor-pointer h-full flex flex-col",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "inline-flex items-center space-x-2 bg-primary-600/20 text-primary-400 px-3 py-1 rounded-full text-xs mb-4 self-start",
                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                        children: article.category
                                    }, void 0, false, {
                                        fileName: "<[project]/components/ui/articles-grid.tsx>",
                                        lineNumber: 60,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/components/ui/articles-grid.tsx>",
                                    lineNumber: 59,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                    className: "text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors flex-1",
                                    children: article.title
                                }, void 0, false, {
                                    fileName: "<[project]/components/ui/articles-grid.tsx>",
                                    lineNumber: 64,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                    className: "text-gray-300 mb-4 text-sm leading-relaxed flex-1",
                                    children: article.excerpt
                                }, void 0, false, {
                                    fileName: "<[project]/components/ui/articles-grid.tsx>",
                                    lineNumber: 69,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "flex items-center justify-between text-sm text-gray-400 mb-4",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "flex items-center space-x-2",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Calendar"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/ui/articles-grid.tsx>",
                                                    lineNumber: 76,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                    children: article.date
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/ui/articles-grid.tsx>",
                                                    lineNumber: 77,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/components/ui/articles-grid.tsx>",
                                            lineNumber: 75,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "flex items-center space-x-2",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Clock"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/ui/articles-grid.tsx>",
                                                    lineNumber: 80,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                    children: article.readTime
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/ui/articles-grid.tsx>",
                                                    lineNumber: 81,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/components/ui/articles-grid.tsx>",
                                            lineNumber: 79,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/components/ui/articles-grid.tsx>",
                                    lineNumber: 74,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "flex items-center justify-between mt-auto",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                            className: "text-sm text-gray-400",
                                            children: [
                                                "Por ",
                                                article.author
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/components/ui/articles-grid.tsx>",
                                            lineNumber: 87,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "text-primary-400 group-hover:text-primary-300 transition-colors group-hover:translate-x-1 transform duration-200",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ArrowRight"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "<[project]/components/ui/articles-grid.tsx>",
                                                lineNumber: 89,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/components/ui/articles-grid.tsx>",
                                            lineNumber: 88,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/components/ui/articles-grid.tsx>",
                                    lineNumber: 86,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/ui/articles-grid.tsx>",
                            lineNumber: 57,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/components/ui/articles-grid.tsx>",
                        lineNumber: 56,
                        columnNumber: 13
                    }, this)
                }, article.id, false, {
                    fileName: "<[project]/components/ui/articles-grid.tsx>",
                    lineNumber: 48,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "<[project]/components/ui/articles-grid.tsx>",
            lineNumber: 46,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/components/ui/articles-grid.tsx>",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_c = ArticlesGrid;
var _c;
__turbopack_refresh__.register(_c, "ArticlesGrid");

})()),
"[project]/components/ui/category-filter.tsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "CategoryFilter": ()=>CategoryFilter
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/lucide-react.js [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
const iconMap = {
    TrendingUp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__["TrendingUp"],
    BarChart3: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__["BarChart3"],
    Globe: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Globe"],
    Users: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Users"],
    Target: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Target"],
    Zap: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Zap"]
};
function CategoryFilter(param) {
    let { categories, selectedCategory, onCategoryChange } = param;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "flex flex-wrap justify-center gap-3 mb-8",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: 0.95
                        },
                        onClick: ()=>onCategoryChange('todos'),
                        className: `px-6 py-3 rounded-full font-medium transition-all duration-300 ${selectedCategory === 'todos' ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25' : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'}`,
                        children: "Todos los Art\xedculos"
                    }, void 0, false, {
                        fileName: "<[project]/components/ui/category-filter.tsx>",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    categories.map((category)=>{
                        const IconComponent = iconMap[category.icon];
                        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            whileHover: {
                                scale: 1.05
                            },
                            whileTap: {
                                scale: 0.95
                            },
                            onClick: ()=>onCategoryChange(category.slug),
                            className: `px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${selectedCategory === category.slug ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25' : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'}`,
                            children: [
                                IconComponent && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](IconComponent, {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "<[project]/components/ui/category-filter.tsx>",
                                    lineNumber: 61,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                    children: category.name
                                }, void 0, false, {
                                    fileName: "<[project]/components/ui/category-filter.tsx>",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                    className: "text-xs opacity-75",
                                    children: [
                                        "(",
                                        category.articleCount,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/components/ui/category-filter.tsx>",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, category.id, true, {
                            fileName: "<[project]/components/ui/category-filter.tsx>",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "<[project]/components/ui/category-filter.tsx>",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            selectedCategory !== 'todos' && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: -10
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                className: "text-center mb-8",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "inline-flex items-center space-x-2 bg-primary-600/20 text-primary-400 px-4 py-2 rounded-full",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                            className: "text-sm font-medium",
                            children: [
                                "Mostrando art\xedculos de: ",
                                categories.find((c)=>c.slug === selectedCategory)?.name
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/ui/category-filter.tsx>",
                            lineNumber: 77,
                            columnNumber: 16
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                            onClick: ()=>onCategoryChange('todos'),
                            className: "ml-2 hover:bg-primary-500/20 rounded-full p-1 transition-colors",
                            title: "Limpiar filtro",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                className: "text-xs",
                                children: "\xd7"
                            }, void 0, false, {
                                fileName: "<[project]/components/ui/category-filter.tsx>",
                                lineNumber: 85,
                                columnNumber: 18
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/components/ui/category-filter.tsx>",
                            lineNumber: 80,
                            columnNumber: 16
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/ui/category-filter.tsx>",
                    lineNumber: 76,
                    columnNumber: 14
                }, this)
            }, void 0, false, {
                fileName: "<[project]/components/ui/category-filter.tsx>",
                lineNumber: 71,
                columnNumber: 12
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/components/ui/category-filter.tsx>",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c = CategoryFilter;
var _c;
__turbopack_refresh__.register(_c, "CategoryFilter");

})()),
"[project]/components/layout/footer-minimal.tsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "FooterMinimal": ()=>FooterMinimal
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/lucide-react.js [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function FooterMinimal() {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("footer", {
        className: "bg-primary-900/30 border-t border-border/50 mt-auto",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "container mx-auto px-4 py-8",
            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex items-center space-x-3",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "w-8 h-8 bg-accent rounded-lg flex items-center justify-center",
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                    className: "text-white font-bold text-sm",
                                    children: "Q"
                                }, void 0, false, {
                                    fileName: "<[project]/components/layout/footer-minimal.tsx>",
                                    lineNumber: 11,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/components/layout/footer-minimal.tsx>",
                                lineNumber: 10,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                className: "text-white font-semibold",
                                children: "QSP Analytics"
                            }, void 0, false, {
                                fileName: "<[project]/components/layout/footer-minimal.tsx>",
                                lineNumber: 13,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/components/layout/footer-minimal.tsx>",
                        lineNumber: 9,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex items-center space-x-6 text-sm text-muted",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("a", {
                                href: "mailto:contacto@qspanalytics.com",
                                className: "flex items-center space-x-2 hover:text-accent transition-colors",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Mail"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "<[project]/components/layout/footer-minimal.tsx>",
                                        lineNumber: 22,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                        className: "hidden sm:inline",
                                        children: "contacto@qspanalytics.com"
                                    }, void 0, false, {
                                        fileName: "<[project]/components/layout/footer-minimal.tsx>",
                                        lineNumber: 23,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/components/layout/footer-minimal.tsx>",
                                lineNumber: 18,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("a", {
                                href: "tel:+15551234567",
                                className: "flex items-center space-x-2 hover:text-accent transition-colors",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Phone"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "<[project]/components/layout/footer-minimal.tsx>",
                                        lineNumber: 29,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                        className: "hidden sm:inline",
                                        children: "+1 (555) 123-4567"
                                    }, void 0, false, {
                                        fileName: "<[project]/components/layout/footer-minimal.tsx>",
                                        lineNumber: 30,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/components/layout/footer-minimal.tsx>",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "flex items-center space-x-2 text-muted",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MapPin"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "<[project]/components/layout/footer-minimal.tsx>",
                                        lineNumber: 33,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                        className: "hidden sm:inline",
                                        children: "San Francisco, CA"
                                    }, void 0, false, {
                                        fileName: "<[project]/components/layout/footer-minimal.tsx>",
                                        lineNumber: 34,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/components/layout/footer-minimal.tsx>",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/components/layout/footer-minimal.tsx>",
                        lineNumber: 17,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "text-sm text-muted",
                        children: "\xa9 2024 QSP Analytics. Todos los derechos reservados."
                    }, void 0, false, {
                        fileName: "<[project]/components/layout/footer-minimal.tsx>",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/components/layout/footer-minimal.tsx>",
                lineNumber: 7,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "<[project]/components/layout/footer-minimal.tsx>",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/components/layout/footer-minimal.tsx>",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = FooterMinimal;
var _c;
__turbopack_refresh__.register(_c, "FooterMinimal");

})()),
"[project]/app/blog/page.tsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>Blog
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$footer$2d$minimal$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/layout/footer-minimal.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/lucide-react.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$category$2d$filter$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/category-filter.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$articles$2d$grid$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/articles-grid.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$blog$2d$data$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/blog-data.ts [client] (ecmascript)");
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
function Blog() {
    _s();
    const [selectedCategory, setSelectedCategory] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"]('todos');
    const [filteredArticles, setFilteredArticles] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$blog$2d$data$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["blogArticles"]);
    const [featuredArticle] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$blog$2d$data$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getFeaturedArticle"]());
    const [isFiltering, setIsFiltering] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](false);
    // Filtrar artículos cuando cambie la categoría
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        setIsFiltering(true);
        // Simular un pequeño delay para mostrar el efecto de filtrado
        setTimeout(()=>{
            const articles = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$blog$2d$data$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getArticlesByCategory"](selectedCategory);
            setFilteredArticles(articles);
            setIsFiltering(false);
        }, 300);
    }, [
        selectedCategory
    ]);
    const handleCategoryChange = (categorySlug)=>{
        setSelectedCategory(categorySlug);
        // Scroll suave a la sección de artículos
        setTimeout(()=>{
            const articlesSection = document.getElementById('articles-section');
            if (articlesSection) {
                articlesSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }, 100);
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "min-h-screen bg-black",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("section", {
                className: "relative py-20 overflow-hidden",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "absolute inset-0",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "absolute inset-0 bg-gradient-to-br from-primary-900/20 via-primary-800/10 to-primary-900/20"
                            }, void 0, false, {
                                fileName: "<[project]/app/blog/page.tsx>",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
                            }, void 0, false, {
                                fileName: "<[project]/app/blog/page.tsx>",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"
                            }, void 0, false, {
                                fileName: "<[project]/app/blog/page.tsx>",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/app/blog/page.tsx>",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "relative z-10 container mx-auto px-4 max-w-6xl",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "inline-flex items-center space-x-2 bg-primary-600/20 text-primary-400 px-4 py-2 rounded-full mb-6",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__["BookOpen"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "<[project]/app/blog/page.tsx>",
                                            lineNumber: 64,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                            className: "text-sm font-medium",
                                            children: "Blog QSP Analytics"
                                        }, void 0, false, {
                                            fileName: "<[project]/app/blog/page.tsx>",
                                            lineNumber: 65,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/app/blog/page.tsx>",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                                    className: "text-5xl md:text-6xl font-bold text-white mb-6 leading-tight",
                                    children: [
                                        "Insights y an\xe1lisis del",
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                            className: "text-primary-400 block",
                                            children: "comercio exterior"
                                        }, void 0, false, {
                                            fileName: "<[project]/app/blog/page.tsx>",
                                            lineNumber: 70,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/app/blog/page.tsx>",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                    className: "text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed",
                                    children: "Descubre las \xfaltimas tendencias, an\xe1lisis de mercado y estrategias comerciales que est\xe1n transformando el comercio exterior global."
                                }, void 0, false, {
                                    fileName: "<[project]/app/blog/page.tsx>",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/app/blog/page.tsx>",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/app/blog/page.tsx>",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/app/blog/page.tsx>",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("section", {
                className: "py-16 border-t border-gray-800",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "container mx-auto px-4 max-w-6xl",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h2", {
                            className: "text-3xl font-bold text-white mb-8 text-center",
                            children: "Art\xedculo Destacado"
                        }, void 0, false, {
                            fileName: "<[project]/app/blog/page.tsx>",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this),
                        featuredArticle && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                            href: `/blog/${featuredArticle.slug}`,
                            className: "block",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 cursor-pointer group",
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "grid lg:grid-cols-2 gap-8 items-center",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "inline-flex items-center space-x-2 bg-primary-600/20 text-primary-400 px-3 py-1 rounded-full text-sm mb-4",
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__["TrendingUp"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/app/blog/page.tsx>",
                                                            lineNumber: 92,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                            children: featuredArticle.category
                                                        }, void 0, false, {
                                                            fileName: "<[project]/app/blog/page.tsx>",
                                                            lineNumber: 93,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/app/blog/page.tsx>",
                                                    lineNumber: 91,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                                    className: "text-2xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors",
                                                    children: featuredArticle.title
                                                }, void 0, false, {
                                                    fileName: "<[project]/app/blog/page.tsx>",
                                                    lineNumber: 95,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "text-gray-300 mb-6 leading-relaxed",
                                                    children: featuredArticle.excerpt
                                                }, void 0, false, {
                                                    fileName: "<[project]/app/blog/page.tsx>",
                                                    lineNumber: 98,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "flex items-center space-x-6 text-sm text-gray-400 mb-6",
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                            className: "flex items-center space-x-2",
                                                            children: [
                                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Calendar"], {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/app/blog/page.tsx>",
                                                                    lineNumber: 103,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                    children: featuredArticle.date
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/app/blog/page.tsx>",
                                                                    lineNumber: 104,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "<[project]/app/blog/page.tsx>",
                                                            lineNumber: 102,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                            className: "flex items-center space-x-2",
                                                            children: [
                                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Clock"], {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/app/blog/page.tsx>",
                                                                    lineNumber: 107,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                    children: featuredArticle.readTime
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/app/blog/page.tsx>",
                                                                    lineNumber: 108,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "<[project]/app/blog/page.tsx>",
                                                            lineNumber: 106,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                            className: "flex items-center space-x-2",
                                                            children: [
                                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__["User"], {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/app/blog/page.tsx>",
                                                                    lineNumber: 111,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                    children: [
                                                                        "Por ",
                                                                        featuredArticle.author
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "<[project]/app/blog/page.tsx>",
                                                                    lineNumber: 112,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "<[project]/app/blog/page.tsx>",
                                                            lineNumber: 110,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/app/blog/page.tsx>",
                                                    lineNumber: 101,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "inline-flex items-center space-x-2 text-primary-400 group-hover:text-primary-300 transition-colors font-medium",
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                            children: "Leer art\xedculo completo"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/app/blog/page.tsx>",
                                                            lineNumber: 116,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ArrowRight"], {
                                                            className: "w-4 h-4 group-hover:translate-x-1 transition-transform"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/app/blog/page.tsx>",
                                                            lineNumber: 117,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/app/blog/page.tsx>",
                                                    lineNumber: 115,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/app/blog/page.tsx>",
                                            lineNumber: 90,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "bg-gradient-to-br from-primary-600/20 to-primary-800/20 rounded-xl p-8 text-center",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "w-24 h-24 bg-primary-600/30 rounded-2xl flex items-center justify-center mx-auto mb-4",
                                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Globe"], {
                                                        className: "w-12 h-12 text-primary-400"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/app/blog/page.tsx>",
                                                        lineNumber: 122,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "<[project]/app/blog/page.tsx>",
                                                    lineNumber: 121,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h4", {
                                                    className: "text-lg font-semibold text-white mb-2",
                                                    children: "Art\xedculo Destacado"
                                                }, void 0, false, {
                                                    fileName: "<[project]/app/blog/page.tsx>",
                                                    lineNumber: 124,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "text-gray-300 text-sm",
                                                    children: "Contenido seleccionado por nuestro equipo editorial"
                                                }, void 0, false, {
                                                    fileName: "<[project]/app/blog/page.tsx>",
                                                    lineNumber: 125,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/app/blog/page.tsx>",
                                            lineNumber: 120,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/app/blog/page.tsx>",
                                    lineNumber: 89,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/app/blog/page.tsx>",
                                lineNumber: 88,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/app/blog/page.tsx>",
                            lineNumber: 87,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/app/blog/page.tsx>",
                    lineNumber: 83,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/app/blog/page.tsx>",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("section", {
                className: "py-16 border-t border-gray-800",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "container mx-auto px-4 max-w-6xl",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h2", {
                            className: "text-3xl font-bold text-white mb-8 text-center",
                            children: "Filtrar por Categor\xeda"
                        }, void 0, false, {
                            fileName: "<[project]/app/blog/page.tsx>",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$category$2d$filter$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["CategoryFilter"], {
                            categories: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$blog$2d$data$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["blogCategories"],
                            selectedCategory: selectedCategory,
                            onCategoryChange: handleCategoryChange
                        }, void 0, false, {
                            fileName: "<[project]/app/blog/page.tsx>",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/app/blog/page.tsx>",
                    lineNumber: 138,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/app/blog/page.tsx>",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("section", {
                id: "articles-section",
                className: "py-16 border-t border-gray-800",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "container mx-auto px-4 max-w-6xl",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "text-center mb-8",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h2", {
                                    className: "text-3xl font-bold text-white mb-4",
                                    children: selectedCategory === 'todos' ? 'Todos los Artículos' : `Artículos de ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$blog$2d$data$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["blogCategories"].find((c)=>c.slug === selectedCategory)?.name}`
                                }, void 0, false, {
                                    fileName: "<[project]/app/blog/page.tsx>",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                    className: "text-gray-400",
                                    children: [
                                        filteredArticles.length,
                                        " art\xedculo",
                                        filteredArticles.length !== 1 ? 's' : '',
                                        " encontrado",
                                        filteredArticles.length !== 1 ? 's' : ''
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/app/blog/page.tsx>",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/app/blog/page.tsx>",
                            lineNumber: 152,
                            columnNumber: 11
                        }, this),
                        isFiltering ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "text-center py-16",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "inline-flex items-center space-x-2 bg-primary-600/20 text-primary-400 px-6 py-3 rounded-full",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "w-4 h-4 border-2 border-primary-400 border-t-transparent rounded-full animate-spin"
                                    }, void 0, false, {
                                        fileName: "<[project]/app/blog/page.tsx>",
                                        lineNumber: 164,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                        children: "Filtrando art\xedculos..."
                                    }, void 0, false, {
                                        fileName: "<[project]/app/blog/page.tsx>",
                                        lineNumber: 165,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/app/blog/page.tsx>",
                                lineNumber: 163,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/app/blog/page.tsx>",
                            lineNumber: 162,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$articles$2d$grid$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["ArticlesGrid"], {
                            articles: filteredArticles,
                            selectedCategory: selectedCategory
                        }, void 0, false, {
                            fileName: "<[project]/app/blog/page.tsx>",
                            lineNumber: 169,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/app/blog/page.tsx>",
                    lineNumber: 151,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/app/blog/page.tsx>",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("section", {
                className: "py-16 border-t border-gray-800",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "container mx-auto px-4 max-w-4xl",
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h2", {
                                className: "text-3xl font-bold text-white mb-6",
                                children: "\xbfQuieres recibir nuestros art\xedculos por email?"
                            }, void 0, false, {
                                fileName: "<[project]/app/blog/page.tsx>",
                                lineNumber: 181,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                className: "text-xl text-gray-300 mb-8",
                                children: "Suscr\xedbete a nuestro newsletter y recibe los mejores insights del comercio exterior directamente en tu correo."
                            }, void 0, false, {
                                fileName: "<[project]/app/blog/page.tsx>",
                                lineNumber: 184,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "flex flex-col sm:flex-row gap-4 justify-center items-center",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("a", {
                                        href: "/newsletter",
                                        className: "px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-500/25 flex items-center space-x-2",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                children: "Suscribirse al Newsletter"
                                            }, void 0, false, {
                                                fileName: "<[project]/app/blog/page.tsx>",
                                                lineNumber: 194,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ArrowRight"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "<[project]/app/blog/page.tsx>",
                                                lineNumber: 195,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/app/blog/page.tsx>",
                                        lineNumber: 190,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("a", {
                                        href: "/precios",
                                        className: "px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-300 border border-white/20",
                                        children: "Ver planes"
                                    }, void 0, false, {
                                        fileName: "<[project]/app/blog/page.tsx>",
                                        lineNumber: 197,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/app/blog/page.tsx>",
                                lineNumber: 189,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/app/blog/page.tsx>",
                        lineNumber: 180,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/app/blog/page.tsx>",
                    lineNumber: 179,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/app/blog/page.tsx>",
                lineNumber: 178,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$footer$2d$minimal$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["FooterMinimal"], {}, void 0, false, {
                fileName: "<[project]/app/blog/page.tsx>",
                lineNumber: 209,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/app/blog/page.tsx>",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s(Blog, "XnUhr7mLa+43iKWcHMYemUZXRrs=");
_c = Blog;
var _c;
__turbopack_refresh__.register(_c, "Blog");

})()),
}]);

//# sourceMappingURL=_531248._.js.map