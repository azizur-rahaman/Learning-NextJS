"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/blog/layout",{

/***/ "(app-pages-browser)/./src/app/ui/components/nav-links.tsx":
/*!*********************************************!*\
  !*** ./src/app/ui/components/nav-links.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NavLinks; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_DocumentDuplicateIcon_EnvelopeIcon_HomeIcon_UserGroupIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=DocumentDuplicateIcon,EnvelopeIcon,HomeIcon,UserGroupIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/HomeIcon.js\");\n/* harmony import */ var _barrel_optimize_names_DocumentDuplicateIcon_EnvelopeIcon_HomeIcon_UserGroupIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=DocumentDuplicateIcon,EnvelopeIcon,HomeIcon,UserGroupIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/DocumentDuplicateIcon.js\");\n/* harmony import */ var _barrel_optimize_names_DocumentDuplicateIcon_EnvelopeIcon_HomeIcon_UserGroupIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=DocumentDuplicateIcon,EnvelopeIcon,HomeIcon,UserGroupIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/UserGroupIcon.js\");\n/* harmony import */ var _barrel_optimize_names_DocumentDuplicateIcon_EnvelopeIcon_HomeIcon_UserGroupIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=DocumentDuplicateIcon,EnvelopeIcon,HomeIcon,UserGroupIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/EnvelopeIcon.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ \"(app-pages-browser)/./node_modules/clsx/dist/clsx.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n// Map of links to display in the side navigation.\n// Depending on the size of the application, this would be stored in a database.\n\n\n\nconst links = [\n    {\n        name: \"Home\",\n        href: \"/\",\n        icon: _barrel_optimize_names_DocumentDuplicateIcon_EnvelopeIcon_HomeIcon_UserGroupIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    },\n    {\n        name: \"Posts\",\n        href: \"/blog/posts\",\n        icon: _barrel_optimize_names_DocumentDuplicateIcon_EnvelopeIcon_HomeIcon_UserGroupIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    },\n    {\n        name: \"About\",\n        href: \"/blog/about\",\n        icon: _barrel_optimize_names_DocumentDuplicateIcon_EnvelopeIcon_HomeIcon_UserGroupIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    },\n    {\n        name: \"Contact\",\n        href: \"/blog/contact\",\n        icon: _barrel_optimize_names_DocumentDuplicateIcon_EnvelopeIcon_HomeIcon_UserGroupIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    }\n];\nasync function NavLinks() {\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: links.map((link)=>{\n            const LinkIcon = link.icon;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                href: link.href,\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-purple-100 md:flex-none md:justify-start md:p-2 md:px-3\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkIcon, {\n                        className: \"w-6\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hasnat/Documents/GitHub/Learning NextJs/src/app/ui/components/nav-links.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"hidden md:block\",\n                        children: link.name\n                    }, void 0, false, {\n                        fileName: \"/Users/hasnat/Documents/GitHub/Learning NextJs/src/app/ui/components/nav-links.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, link.name, true, {\n                fileName: \"/Users/hasnat/Documents/GitHub/Learning NextJs/src/app/ui/components/nav-links.tsx\",\n                lineNumber: 34,\n                columnNumber: 11\n            }, this);\n        })\n    }, void 0, false);\n}\n_s(NavLinks, \"xbyQPtUVMO7MNj7WjJlpdWqRcTo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname\n    ];\n});\n_c = NavLinks;\nvar _c;\n$RefreshReg$(_c, \"NavLinks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvY29tcG9uZW50cy9uYXYtbGlua3MudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBTXFDO0FBRXJDLGtEQUFrRDtBQUNsRCxnRkFBZ0Y7QUFDbEM7QUFDakI7QUFDTDtBQUd4QixNQUFNTyxRQUFRO0lBQ1o7UUFBRUMsTUFBTTtRQUFRQyxNQUFNO1FBQUtDLE1BQU1ULG1KQUFRQTtJQUFFO0lBQzNDO1FBQ0VPLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxNQUFNUixtSkFBcUJBO0lBQzdCO0lBQ0E7UUFBRU0sTUFBTTtRQUFTQyxNQUFNO1FBQWVDLE1BQU1WLG1KQUFhQTtJQUFBO0lBQ3pEO1FBQUVRLE1BQU07UUFBV0MsTUFBTTtRQUFpQkMsTUFBTVAsbUpBQVlBO0lBQUM7Q0FDOUQ7QUFFYyxlQUFlUTs7SUFDNUIsTUFBTUMsV0FBV1IsNERBQVdBO0lBQzVCLHFCQUNFO2tCQUNHRyxNQUFNTSxHQUFHLENBQUMsQ0FBQ0M7WUFDVixNQUFNQyxXQUFXRCxLQUFLSixJQUFJO1lBQzFCLHFCQUNFLDhEQUFDTCxpREFBSUE7Z0JBRUhJLE1BQU1LLEtBQUtMLElBQUk7Z0JBQ2ZPLFdBQVdWLGdEQUFJQSxDQUFDOztrQ0FFaEIsOERBQUNTO3dCQUFTQyxXQUFVOzs7Ozs7a0NBQ3BCLDhEQUFDQzt3QkFBRUQsV0FBVTtrQ0FBbUJGLEtBQUtOLElBQUk7Ozs7Ozs7ZUFMcENNLEtBQUtOLElBQUk7Ozs7O1FBUXBCOztBQUlOO0dBcEI4Qkc7O1FBQ1hQLHdEQUFXQTs7O0tBREFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvdWkvY29tcG9uZW50cy9uYXYtbGlua3MudHN4PzEyZWIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IHtcbiAgVXNlckdyb3VwSWNvbixcbiAgSG9tZUljb24sXG4gIERvY3VtZW50RHVwbGljYXRlSWNvbixcbiAgRW52ZWxvcGVJY29uXG59IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3QvMjQvb3V0bGluZSc7XG5cbi8vIE1hcCBvZiBsaW5rcyB0byBkaXNwbGF5IGluIHRoZSBzaWRlIG5hdmlnYXRpb24uXG4vLyBEZXBlbmRpbmcgb24gdGhlIHNpemUgb2YgdGhlIGFwcGxpY2F0aW9uLCB0aGlzIHdvdWxkIGJlIHN0b3JlZCBpbiBhIGRhdGFiYXNlLlxuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuXG5cbmNvbnN0IGxpbmtzID0gW1xuICB7IG5hbWU6ICdIb21lJywgaHJlZjogJy8nLCBpY29uOiBIb21lSWNvbiAgfSxcbiAge1xuICAgIG5hbWU6ICdQb3N0cycsXG4gICAgaHJlZjogJy9ibG9nL3Bvc3RzJyxcbiAgICBpY29uOiBEb2N1bWVudER1cGxpY2F0ZUljb24sXG4gIH0sXG4gIHsgbmFtZTogJ0Fib3V0JywgaHJlZjogJy9ibG9nL2Fib3V0JywgaWNvbjogVXNlckdyb3VwSWNvbn0sXG4gIHsgbmFtZTogJ0NvbnRhY3QnLCBocmVmOiAnL2Jsb2cvY29udGFjdCcsIGljb246IEVudmVsb3BlSWNvbiB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gTmF2TGlua3MoKSB7XG4gIGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2xpbmtzLm1hcCgobGluaykgPT4ge1xuICAgICAgICBjb25zdCBMaW5rSWNvbiA9IGxpbmsuaWNvbjtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAga2V5PXtsaW5rLm5hbWV9XG4gICAgICAgICAgICBocmVmPXtsaW5rLmhyZWZ9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goJ2ZsZXggaC1bNDhweF0gZ3JvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTIgcm91bmRlZC1tZCBiZy1ncmF5LTUwIHAtMyB0ZXh0LXNtIGZvbnQtbWVkaXVtIGhvdmVyOmJnLXB1cnBsZS0xMDAgbWQ6ZmxleC1ub25lIG1kOmp1c3RpZnktc3RhcnQgbWQ6cC0yIG1kOnB4LTMnKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TGlua0ljb24gY2xhc3NOYW1lPVwidy02XCIgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImhpZGRlbiBtZDpibG9ja1wiPntsaW5rLm5hbWV9PC9wPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuXG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiVXNlckdyb3VwSWNvbiIsIkhvbWVJY29uIiwiRG9jdW1lbnREdXBsaWNhdGVJY29uIiwiRW52ZWxvcGVJY29uIiwidXNlUGF0aG5hbWUiLCJMaW5rIiwiY2xzeCIsImxpbmtzIiwibmFtZSIsImhyZWYiLCJpY29uIiwiTmF2TGlua3MiLCJwYXRobmFtZSIsIm1hcCIsImxpbmsiLCJMaW5rSWNvbiIsImNsYXNzTmFtZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/components/nav-links.tsx\n"));

/***/ })

});