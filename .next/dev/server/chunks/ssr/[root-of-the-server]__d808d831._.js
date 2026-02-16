module.exports = [
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/data/blog.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":"b1","title":"Best Budget Laptops in 2026: Value Meets Performance","slug":"best-budget-laptops-2026","excerpt":"Looking for a laptop that won't break the bank? We've rounded up the top 5 budget-friendly laptops that perform like high-end machines.","date":"2026-02-15","author":"Tech Expert","content":"Full article content would go here..."},{"id":"b2","title":"Top 10 Productivity Peripherals for Remote Work","slug":"productivity-peripherals-remote-work","excerpt":"Boost your home office setup with these essential keyboards, mice, and accessories.","date":"2026-02-10","author":"Workflow Guru","content":"Full article content would go here..."}]);}),
"[project]/src/app/blog/[slug]/post.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "article": "post-module__fFuUMG__article",
  "content": "post-module__fFuUMG__content",
  "excerpt": "post-module__fFuUMG__excerpt",
  "header": "post-module__fFuUMG__header",
  "meta": "post-module__fFuUMG__meta",
  "postPage": "post-module__fFuUMG__postPage",
  "title": "post-module__fFuUMG__title",
});
}),
"[project]/src/app/blog/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogPostPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$blog$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/blog.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f5b$slug$5d2f$post$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/blog/[slug]/post.module.css [app-rsc] (css module)");
;
;
;
;
function BlogPostPage({ params }) {
    const post = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$blog$2e$json__$28$json$29$__["default"].find((p)=>p.slug === params.slug);
    if (!post) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f5b$slug$5d2f$post$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].postPage,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f5b$slug$5d2f$post$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].article,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f5b$slug$5d2f$post$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].header,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f5b$slug$5d2f$post$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].meta,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: post.date
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/blog/[slug]/page.tsx",
                                        lineNumber: 18,
                                        columnNumber: 29
                                    }, this),
                                    " • ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "By ",
                                            post.author
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/blog/[slug]/page.tsx",
                                        lineNumber: 18,
                                        columnNumber: 56
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/blog/[slug]/page.tsx",
                                lineNumber: 17,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f5b$slug$5d2f$post$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].title,
                                children: post.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/blog/[slug]/page.tsx",
                                lineNumber: 20,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/blog/[slug]/page.tsx",
                        lineNumber: 16,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f5b$slug$5d2f$post$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].excerpt,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: post.excerpt
                        }, void 0, false, {
                            fileName: "[project]/src/app/blog/[slug]/page.tsx",
                            lineNumber: 24,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/[slug]/page.tsx",
                        lineNumber: 23,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f5b$slug$5d2f$post$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].content,
                        children: [
                            post.content,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    marginTop: '2rem'
                                },
                                children: "Detailed content for this article is being researched and will be updated soon. In the meantime, check out our recommended products in this category!"
                            }, void 0, false, {
                                fileName: "[project]/src/app/blog/[slug]/page.tsx",
                                lineNumber: 29,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/blog/[slug]/page.tsx",
                        lineNumber: 27,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/blog/[slug]/page.tsx",
                lineNumber: 15,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/blog/[slug]/page.tsx",
            lineNumber: 14,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/blog/[slug]/page.tsx",
        lineNumber: 13,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/blog/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/blog/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d808d831._.js.map