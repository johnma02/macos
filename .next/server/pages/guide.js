/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/guide";
exports.ids = ["pages/guide"];
exports.modules = {

/***/ "./components/Sidebar.tsx":
/*!********************************!*\
  !*** ./components/Sidebar.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Sidebar)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/johnma/macos-rice-guide/components/Sidebar.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nfunction Sidebar({\n  navItems\n}) {\n  {\n    /* we maintain a set of indices which are to be highlighted upon rendering*/\n  }\n  const {\n    0: highlighted,\n    1: setHighlighted\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Set());\n  let i = 0;\n  const {\n    0: hashedNavItems\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(navItems.reduce((accum, curr) => {\n    return accum = _objectSpread(_objectSpread({}, accum), {}, {\n      [i++]: curr\n    });\n  }, {}));\n  {\n    /*todo: want to use a scrollspy to modify the state of this component AND/OR using the user's cursor to\n    highlight a list item*/\n  }\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: \"sidebar\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n      className: \"sidebar-list\",\n      children: Object.keys(hashedNavItems).map(key => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n        children: highlighted.has(Number(key)) ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"strong\", {\n          children: hashedNavItems[key]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 29\n        }, this) : hashedNavItems[key]\n      }, key, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 21\n      }, this))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 9\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGViYXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFRZSxTQUFTRSxPQUFULENBQWlCO0VBQUVDO0FBQUYsQ0FBakIsRUFBMEQ7RUFDckU7SUFDSTtFQUNIO0VBQ0QsTUFBTTtJQUFBLEdBQUNDLFdBQUQ7SUFBQSxHQUFjQztFQUFkLElBQWdDSiwrQ0FBUSxDQUMxQyxJQUFJSyxHQUFKLEVBRDBDLENBQTlDO0VBR0EsSUFBSUMsQ0FBQyxHQUFHLENBQVI7RUFDQSxNQUFNO0lBQUEsR0FBQ0M7RUFBRCxJQUFtQlAsK0NBQVEsQ0FDN0JFLFFBQVEsQ0FBQ00sTUFBVCxDQUFnQixDQUFDQyxLQUFELEVBQWtCQyxJQUFsQixLQUFtQztJQUMvQyxPQUFRRCxLQUFLLG1DQUFRQSxLQUFSO01BQWUsQ0FBQ0gsQ0FBQyxFQUFGLEdBQU9JO0lBQXRCLEVBQWI7RUFDSCxDQUZELEVBRUcsRUFGSCxDQUQ2QixDQUFqQztFQUtBO0lBQ0k7QUFDUjtFQUNLO0VBQ0Qsb0JBQ0k7SUFBSyxTQUFTLEVBQUMsU0FBZjtJQUFBLHVCQUNJO01BQUksU0FBUyxFQUFDLGNBQWQ7TUFBQSxVQUNLQyxNQUFNLENBQUNDLElBQVAsQ0FBWUwsY0FBWixFQUE0Qk0sR0FBNUIsQ0FBaUNDLEdBQUQsaUJBQzdCO1FBQUEsVUFDS1gsV0FBVyxDQUFDWSxHQUFaLENBQWdCQyxNQUFNLENBQUNGLEdBQUQsQ0FBdEIsaUJBQ0c7VUFBQSxVQUFTUCxjQUFjLENBQUNPLEdBQUQ7UUFBdkI7VUFBQTtVQUFBO1VBQUE7UUFBQSxRQURILEdBR0dQLGNBQWMsQ0FBQ08sR0FBRDtNQUp0QixHQUFTQSxHQUFUO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFESDtJQURMO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFESjtJQUFBO0lBQUE7SUFBQTtFQUFBLFFBREo7QUFlSCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2lkZWJhci50c3g/NmJhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIEl0ZW1IYXNoIHtcbiAgICBba2V5OiBudW1iZXJdOiBzdHJpbmc7XG59XG5pbnRlcmZhY2UgU2lkZWJhclByb3BzIHtcbiAgICBuYXZJdGVtczogc3RyaW5nW107XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlYmFyKHsgbmF2SXRlbXMgfTogU2lkZWJhclByb3BzKTogSlNYLkVsZW1lbnQge1xuICAgIHtcbiAgICAgICAgLyogd2UgbWFpbnRhaW4gYSBzZXQgb2YgaW5kaWNlcyB3aGljaCBhcmUgdG8gYmUgaGlnaGxpZ2h0ZWQgdXBvbiByZW5kZXJpbmcqL1xuICAgIH1cbiAgICBjb25zdCBbaGlnaGxpZ2h0ZWQsIHNldEhpZ2hsaWdodGVkXSA9IHVzZVN0YXRlPFNldDxudW1iZXI+PihcbiAgICAgICAgbmV3IFNldDxudW1iZXI+KClcbiAgICApO1xuICAgIGxldCBpID0gMDtcbiAgICBjb25zdCBbaGFzaGVkTmF2SXRlbXNdID0gdXNlU3RhdGU8SXRlbUhhc2g+KFxuICAgICAgICBuYXZJdGVtcy5yZWR1Y2UoKGFjY3VtOiBJdGVtSGFzaCwgY3Vycjogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKGFjY3VtID0geyAuLi5hY2N1bSwgW2krK106IGN1cnIgfSk7XG4gICAgICAgIH0sIHt9KVxuICAgICk7XG4gICAge1xuICAgICAgICAvKnRvZG86IHdhbnQgdG8gdXNlIGEgc2Nyb2xsc3B5IHRvIG1vZGlmeSB0aGUgc3RhdGUgb2YgdGhpcyBjb21wb25lbnQgQU5EL09SIHVzaW5nIHRoZSB1c2VyJ3MgY3Vyc29yIHRvXG5oaWdobGlnaHQgYSBsaXN0IGl0ZW0qL1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzaWRlYmFyLWxpc3RcIj5cbiAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMoaGFzaGVkTmF2SXRlbXMpLm1hcCgoa2V5OiBzdHJpbmcpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtoaWdobGlnaHRlZC5oYXMoTnVtYmVyKGtleSkpID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e2hhc2hlZE5hdkl0ZW1zW2tleV19PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc2hlZE5hdkl0ZW1zW2tleV1cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJTaWRlYmFyIiwibmF2SXRlbXMiLCJoaWdobGlnaHRlZCIsInNldEhpZ2hsaWdodGVkIiwiU2V0IiwiaSIsImhhc2hlZE5hdkl0ZW1zIiwicmVkdWNlIiwiYWNjdW0iLCJjdXJyIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsImhhcyIsIk51bWJlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Sidebar.tsx\n");

/***/ }),

/***/ "./pages/guide.tsx":
/*!*************************!*\
  !*** ./pages/guide.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Sidebar */ \"./components/Sidebar.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/johnma/macos-rice-guide/pages/guide.tsx\";\n\n\n //import Link from \"next/link\"\n\n\n\n\nfunction Guide() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"title\", {\n        children: \"MacOS Power User Guide\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"main\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n        children: \"How to Become a MacOS Power User\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        navItems: [\"hello\", \"world\"]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Guide);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ndWlkZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBQ0E7OztBQUVBLFNBQVNJLEtBQVQsR0FBOEI7RUFDMUIsb0JBQ0k7SUFBSyxTQUFTLEVBQUVILDBFQUFoQjtJQUFBLHdCQUNJLDhEQUFDLGtEQUFEO01BQUEsd0JBQ0k7UUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFESixlQUVJO1FBQU0sR0FBRyxFQUFDLE1BQVY7UUFBaUIsSUFBSSxFQUFDO01BQXRCO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFGSjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFESixlQUtJO01BQUEsd0JBQ0k7UUFBSSxTQUFTLEVBQUVBLHNFQUFmO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBREosZUFLSSw4REFBQywyREFBRDtRQUFTLFFBQVEsRUFBRSxDQUFDLE9BQUQsRUFBVSxPQUFWO01BQW5CO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFMSjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFMSjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFESjtBQWVIOztBQUNELGlFQUFlRyxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvZ3VpZGUudHN4P2QwYzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuLy9pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuLi9jb21wb25lbnRzL1NpZGViYXJcIjtcblxuZnVuY3Rpb24gR3VpZGUoKTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5NYWNPUyBQb3dlciBVc2VyIEd1aWRlPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgICAgICAgICAgICBIb3cgdG8gQmVjb21lIGEgTWFjT1MgUG93ZXIgVXNlclxuICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgey8qIFRPRE86IGdyYWIgaXRlbXMgdXNpbmcgaGVhZGVyIHRhZ3MsIHRoZW4gcGFzcyB0aGVtIGludG8gdGhlIHNpZGViYXIgY29tcG9uZW50Ki99XG4gICAgICAgICAgICAgICAgPFNpZGViYXIgbmF2SXRlbXM9e1tcImhlbGxvXCIsIFwid29ybGRcIl19PjwvU2lkZWJhcj5cbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IEd1aWRlO1xuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiSGVhZCIsIlNpZGViYXIiLCJHdWlkZSIsImNvbnRhaW5lciIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/guide.tsx\n");

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__bCOhY\",\n\t\"title\": \"Home_title__T09hD\",\n\t\"description\": \"Home_description__41Owk\",\n\t\"grid\": \"Home_grid__GxQ85\",\n\t\"card\": \"Home_card___LpL1\",\n\t\"logo\": \"Home_logo__27_tb\",\n\t\"sidebar\": \"Home_sidebar___cAMT\",\n\t\"sidebar-list\": \"Home_sidebar-list__QagUO\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzPzAxZDciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfX2JDT2hZXCIsXG5cdFwidGl0bGVcIjogXCJIb21lX3RpdGxlX19UMDloRFwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiSG9tZV9kZXNjcmlwdGlvbl9fNDFPd2tcIixcblx0XCJncmlkXCI6IFwiSG9tZV9ncmlkX19HeFE4NVwiLFxuXHRcImNhcmRcIjogXCJIb21lX2NhcmRfX19McEwxXCIsXG5cdFwibG9nb1wiOiBcIkhvbWVfbG9nb19fMjdfdGJcIixcblx0XCJzaWRlYmFyXCI6IFwiSG9tZV9zaWRlYmFyX19fY0FNVFwiLFxuXHRcInNpZGViYXItbGlzdFwiOiBcIkhvbWVfc2lkZWJhci1saXN0X19RYWdVT1wiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/guide.tsx"));
module.exports = __webpack_exports__;

})();