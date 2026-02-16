(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/ComparisonTable.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actionCell": "ComparisonTable-module__FrMDeq__actionCell",
  "amazonBtn": "ComparisonTable-module__FrMDeq__amazonBtn",
  "checkIcon": "ComparisonTable-module__FrMDeq__checkIcon",
  "featureList": "ComparisonTable-module__FrMDeq__featureList",
  "imageWrapper": "ComparisonTable-module__FrMDeq__imageWrapper",
  "priceCell": "ComparisonTable-module__FrMDeq__priceCell",
  "productHeader": "ComparisonTable-module__FrMDeq__productHeader",
  "ratingCell": "ComparisonTable-module__FrMDeq__ratingCell",
  "ratingValue": "ComparisonTable-module__FrMDeq__ratingValue",
  "stars": "ComparisonTable-module__FrMDeq__stars",
  "table": "ComparisonTable-module__FrMDeq__table",
  "tableWrapper": "ComparisonTable-module__FrMDeq__tableWrapper",
  "title": "ComparisonTable-module__FrMDeq__title",
  "winnerBadge": "ComparisonTable-module__FrMDeq__winnerBadge",
});
}),
"[project]/src/components/ui/ComparisonTable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ComparisonTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ComparisonTable$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ui/ComparisonTable.module.css [app-client] (css module)");
"use client";
;
;
function ComparisonTable({ products, title = "Quick Comparison" }) {
    if (!products || products.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ComparisonTable$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-gradient",
                style: {
                    marginBottom: '2rem'
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/ui/ComparisonTable.tsx",
                lineNumber: 27,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ComparisonTable$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableWrapper,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ComparisonTable$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].table,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Product Details"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/ComparisonTable.tsx",
                                        lineNumber: 32,
                                        columnNumber: 29
                                    }, this),
                                    products.map((p, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ComparisonTable$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productHeader,
                                                children: [
                                                    index === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ComparisonTable$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].winnerBadge,
                                                        children: "★ Top Choice"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ui/ComparisonTable.tsx",
                                                        lineNumber: 36,
                                                        columnNumber: 57
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ComparisonTable$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageWrapper,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: p.image,
                                                            alt: p.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/ComparisonTable.tsx",
                                                            lineNumber: 38,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ui/ComparisonTable.tsx",
                                                        lineNumber: 37,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ComparisonTable$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                                        children: p.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ui/ComparisonTable.tsx",
                                                        lineNumber: 40,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ui/ComparisonTable.tsx",
                                                lineNumber: 35,
                                                columnNumber: 37
                                            }, this)
                                        }, p.id, false, {
                                            fileName: "[project]/src/components/ui/ComparisonTable.tsx",
                                            lineNumber: 34,
                                            columnNumber: 33
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/ComparisonTable.tsx",
                                lineNumber: 31,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/ComparisonTable.tsx",
                            lineNumber: 30,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: "Price"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/ComparisonTable.tsx",
                                            lineNumber: 48,
                                            columnNumber: 29
                                        }, this),
                                        products.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ComparisonTable$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].priceCell,
                                                    children: [
                                                        "$",
                                                        p.price
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ui/ComparisonTable.tsx",
                                                    lineNumber: 51,
                                                    columnNumber: 37
                                                }, this)
                                            }, p.id, false, {
                                                fileName: "[project]/src/components/ui/ComparisonTable.tsx",
                                                lineNumber: 50,
                                                columnNumber: 33
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/ComparisonTable.tsx",
                                    lineNumber: 47,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: "User Rating"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/ComparisonTable.tsx",
                                            lineNumber: 56,
                                            columnNumber: 29
                                        }, this),
                                        products.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ComparisonTable$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ratingCell,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ComparisonTable$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stars,
                                                            children: [
                                                                "★".repeat(Math.floor(p.rating)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        opacity: 0.3
                                                                    },
                                                                    children: "★".repeat(5 - Math.floor(p.rating))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ui/ComparisonTable.tsx",
                                                                    lineNumber: 62,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ui/ComparisonTable.tsx",
                                                            lineNumber: 60,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ComparisonTable$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ratingValue,
                                                            children: [
                                                                p.rating,
                                                                " / 5"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ui/ComparisonTable.tsx",
                                                            lineNumber: 64,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ui/ComparisonTable.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 37
                                                }, this)
                                            }, p.id, false, {
                                                fileName: "[project]/src/components/ui/ComparisonTable.tsx",
                                                lineNumber: 58,
                                                columnNumber: 33
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/ComparisonTable.tsx",
                                    lineNumber: 55,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: "Key Features"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/ComparisonTable.tsx",
                                            lineNumber: 70,
                                            columnNumber: 29
                                        }, this),
                                        products.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ComparisonTable$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featureList,
                                                    children: p.features.slice(0, 4).map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ComparisonTable$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checkIcon,
                                                                    children: "✓"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ui/ComparisonTable.tsx",
                                                                    lineNumber: 76,
                                                                    columnNumber: 49
                                                                }, this),
                                                                " ",
                                                                f
                                                            ]
                                                        }, i, true, {
                                                            fileName: "[project]/src/components/ui/ComparisonTable.tsx",
                                                            lineNumber: 75,
                                                            columnNumber: 45
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/ComparisonTable.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 37
                                                }, this)
                                            }, p.id, false, {
                                                fileName: "[project]/src/components/ui/ComparisonTable.tsx",
                                                lineNumber: 72,
                                                columnNumber: 33
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/ComparisonTable.tsx",
                                    lineNumber: 69,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: "Action"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/ComparisonTable.tsx",
                                            lineNumber: 84,
                                            columnNumber: 29
                                        }, this),
                                        products.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ComparisonTable$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionCell,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: p.link,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ComparisonTable$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].amazonBtn,
                                                        children: "View on Amazon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ui/ComparisonTable.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/ComparisonTable.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 37
                                                }, this)
                                            }, p.id, false, {
                                                fileName: "[project]/src/components/ui/ComparisonTable.tsx",
                                                lineNumber: 86,
                                                columnNumber: 33
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/ComparisonTable.tsx",
                                    lineNumber: 83,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/ComparisonTable.tsx",
                            lineNumber: 46,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/ComparisonTable.tsx",
                    lineNumber: 29,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/ComparisonTable.tsx",
                lineNumber: 28,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/ComparisonTable.tsx",
        lineNumber: 26,
        columnNumber: 9
    }, this);
}
_c = ComparisonTable;
var _c;
__turbopack_context__.k.register(_c, "ComparisonTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_ui_d7d6314c._.js.map