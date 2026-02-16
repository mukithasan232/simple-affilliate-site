(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/data/products.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":"p1","title":"KAIGERR Laptop 15.6\" Intel N150 (16GB RAM)","slug":"kaigerr-laptop-15-6-intel-n150","category":"Laptops","price":379,"oldPrice":700,"discount":46,"rating":4.5,"image":"/images/laptop.jpg","link":"https://amzn.to/4pOSlDC","featured":true,"badge":"Limited Time","pros":["Excellent Value for Money","16GB RAM is generous","Portable & Sleek Design"],"cons":["Limited Storage","Basic Build Quality"],"features":["15.6 inch Display","Intel N150 Processor","16GB RAM","Windows 11 Home"],"reviewSummary":"A budget-friendly laptop that doesn't compromise on speed. Perfect for students and light business work.","faqs":[{"q":"Does it have a backlit keyboard?","a":"Yes, it comes with a basic backlit keyboard."},{"q":"Can I upgrade the RAM?","a":"No, the RAM is soldered."}]},{"id":"p2","title":"HP Chromebook 15.6\" HD Flagship Laptop","slug":"hp-chromebook-15-6-hd-flagship","category":"Laptops","price":349,"oldPrice":440,"discount":20,"rating":4.2,"image":"/images/02_lap.jpg","link":"https://amzn.to/3M5blzQ","featured":true,"badge":"Deal of the Day","pros":["Long Battery Life","Fast ChromeOS","Lightweight"],"cons":["Limited Offline Apps","Basic Screen Resolution"],"features":["15.6 inch HD Display","Intel Processor","ChromeOS","Quick Charging"],"reviewSummary":"The ultimate student companion. Simple, fast, and lasts all day.","faqs":[{"q":"Is this good for gaming?","a":"Basic web-based games and Android games only."}]},{"id":"p3","title":"Logitech MX Keys S Combo - Performance Wireless","slug":"logitech-mx-keys-s-combo","category":"Peripherals","price":198.74,"oldPrice":null,"discount":null,"rating":4.8,"image":"/images/logitech.jpg","link":"https://amzn.to/4rcm8Y3","featured":true,"badge":"Hot Pick","pros":["Extremely Quiet Typing","Multi-device connectivity","Smart Hand Proximity Backlighting"],"cons":["Pricey for a combo","Proprietary charging cable"],"features":["MX Keys S Keyboard","MX Master 3S Mouse","Palm Rest Included","Logi Bolt Receiver"],"reviewSummary":"The gold standard for productivity. If you work from home, this is the best investment you can make.","faqs":[{"q":"Can I use it with Mac and Windows simultaneously?","a":"Yes, it supports Flow which allows you to switch between devices easily."}]}]);}),
"[project]/src/app/admin/admin.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "admin-module__4WpgRW__actions",
  "adminDashboard": "admin-module__4WpgRW__adminDashboard",
  "adminHeader": "admin-module__4WpgRW__adminHeader",
  "deleteBtn": "admin-module__4WpgRW__deleteBtn",
  "editBtn": "admin-module__4WpgRW__editBtn",
  "loginForm": "admin-module__4WpgRW__loginForm",
  "loginPage": "admin-module__4WpgRW__loginPage",
  "statCard": "admin-module__4WpgRW__statCard",
  "statValue": "admin-module__4WpgRW__statValue",
  "stats": "admin-module__4WpgRW__stats",
  "table": "admin-module__4WpgRW__table",
  "tableWrapper": "admin-module__4WpgRW__tableWrapper",
});
}),
"[project]/src/app/admin/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/products.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/admin/admin.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function AdminPage() {
    _s();
    const [isLoggedIn, setIsLoggedIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [productList, setProductList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$json__$28$json$29$__["default"]);
    const handleLogin = (e)=>{
        e.preventDefault();
        if (password === "admin123") {
            setIsLoggedIn(true);
        } else {
            alert("Invalid password");
        }
    };
    if (!isLoggedIn) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loginPage,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleLogin,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loginForm,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "Admin Access"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/page.tsx",
                        lineNumber: 25,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "password",
                        placeholder: "Enter password",
                        value: password,
                        onChange: (e)=>setPassword(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/page.tsx",
                        lineNumber: 26,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "btn btn-primary",
                        children: "Login"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/page.tsx",
                        lineNumber: 32,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/page.tsx",
                lineNumber: 24,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/page.tsx",
            lineNumber: 23,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].adminDashboard,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].adminHeader,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: "Admin Dashboard"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/page.tsx",
                            lineNumber: 42,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn btn-primary",
                            children: "+ Add Product"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/page.tsx",
                            lineNumber: 43,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/page.tsx",
                    lineNumber: 41,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stats,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statCard,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: "Total Products"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/page.tsx",
                                    lineNumber: 48,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statValue,
                                    children: productList.length
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/page.tsx",
                                    lineNumber: 49,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/page.tsx",
                            lineNumber: 47,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statCard,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: "Featured"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/page.tsx",
                                    lineNumber: 52,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statValue,
                                    children: productList.filter((p)=>p.featured).length
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/page.tsx",
                                    lineNumber: 53,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/page.tsx",
                            lineNumber: 51,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statCard,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: "Total Categories"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/page.tsx",
                                    lineNumber: 56,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statValue,
                                    children: "4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/page.tsx",
                                    lineNumber: 57,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/page.tsx",
                            lineNumber: 55,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/page.tsx",
                    lineNumber: 46,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableWrapper,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].table,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "ID"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/page.tsx",
                                            lineNumber: 65,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "Title"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/page.tsx",
                                            lineNumber: 66,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "Category"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/page.tsx",
                                            lineNumber: 67,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "Price"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/page.tsx",
                                            lineNumber: 68,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "Actions"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/page.tsx",
                                            lineNumber: 69,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/page.tsx",
                                    lineNumber: 64,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/page.tsx",
                                lineNumber: 63,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: productList.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: p.id
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/page.tsx",
                                                lineNumber: 75,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: p.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/page.tsx",
                                                lineNumber: 76,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: p.category
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/page.tsx",
                                                lineNumber: 77,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: [
                                                    "$",
                                                    p.price
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/page.tsx",
                                                lineNumber: 78,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actions,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editBtn,
                                                        children: "Edit"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/page.tsx",
                                                        lineNumber: 80,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].deleteBtn,
                                                        children: "Delete"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/page.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/page.tsx",
                                                lineNumber: 79,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, p.id, true, {
                                        fileName: "[project]/src/app/admin/page.tsx",
                                        lineNumber: 74,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/page.tsx",
                                lineNumber: 72,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/page.tsx",
                        lineNumber: 62,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/page.tsx",
                    lineNumber: 61,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/page.tsx",
            lineNumber: 40,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/admin/page.tsx",
        lineNumber: 39,
        columnNumber: 9
    }, this);
}
_s(AdminPage, "fRgFTr1EsHoz/o0G2Ft0PJkZGzw=");
_c = AdminPage;
var _c;
__turbopack_context__.k.register(_c, "AdminPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_38fb08e7._.js.map