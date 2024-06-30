"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Selector.js":
/*!********************************!*\
  !*** ./components/Selector.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextui-org/react */ \"./node_modules/@nextui-org/react/esm/index.js\");\n/* harmony import */ var _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/saleToken */ \"./utils/saleToken.js\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Selector = function(param) {\n    var id = param.id, setToken = param.setToken, defaultValue = param.defaultValue, ignoreValue = param.ignoreValue;\n    var getFilterItems = function getFilterItems(ignore) {\n        return menu.filter(function(i) {\n            return i[\"key\"] !== ignore;\n        });\n    };\n    _s();\n    var menu = [\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.ETH,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.ETH\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_1,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_1\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_2,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_2\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_3,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_3\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_4,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_4\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_5,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_5\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_6,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_6\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_7,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_7\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_8,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_8\n        }, \n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), selectedItem = ref[0], setSelectedItem = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(getFilterItems(ignoreValue)), menuItems = ref1[0], setMenuItems = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setSelectedItem(defaultValue);\n    }, [\n        defaultValue\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setMenuItems(getFilterItems(ignoreValue));\n    }, [\n        ignoreValue\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Dropdown, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Dropdown.Button, {\n                css: {\n                    backgroundColor: selectedItem === _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_VALUE ? \"#94a3b8\" : \"#2c2f36\"\n                },\n                children: selectedItem\n            }, void 0, false, {\n                fileName: \"D:\\\\Programing\\\\Blockchain\\\\swap-token-marketplace\\\\components\\\\Selector.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Dropdown.Menu, {\n                \"aria-label\": \"Dynamic Actions\",\n                items: menuItems,\n                onAction: function(key) {\n                    setSelectedItem(key);\n                    setToken(key);\n                },\n                children: function(item) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Dropdown.Item, {\n                        \"aria-label\": id,\n                        color: item.key === \"delete\" ? \"error\" : \"default\",\n                        children: item.name\n                    }, item.key, false, {\n                        fileName: \"D:\\\\Programing\\\\Blockchain\\\\swap-token-marketplace\\\\components\\\\Selector.js\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, _this);\n                }\n            }, void 0, false, {\n                fileName: \"D:\\\\Programing\\\\Blockchain\\\\swap-token-marketplace\\\\components\\\\Selector.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Programing\\\\Blockchain\\\\swap-token-marketplace\\\\components\\\\Selector.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, _this);\n};\n_s(Selector, \"1PoSg3+dU6nqlOrO9++HrLIf5f8=\");\n_c = Selector;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Selector);\nvar _c;\n$RefreshReg$(_c, \"Selector\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlbGVjdG9yLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBbUQ7QUFDVDtBQUdmOztBQUUzQixJQUFNYyxRQUFRLEdBQUcsZ0JBSUU7UUFIakJDLEVBQUUsU0FBRkEsRUFBRSxFQUNGQyxRQUFRLFNBQVJBLFFBQVEsRUFDUkMsWUFBWSxTQUFaQSxZQUFZLEVBQ1pDLFdBQVcsU0FBWEEsV0FBVztRQWdCRkMsY0FBYyxHQUF2QixTQUFTQSxjQUFjLENBQUNDLE1BQU0sRUFBQztRQUM3QixPQUFPQyxJQUFJLENBQUNDLE1BQU0sQ0FBQyxTQUFDQyxDQUFDO21CQUFJQSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQU1ILE1BQU07U0FBQSxDQUFDLENBQUM7S0FDaEQ7O0lBakJELElBQU1DLElBQUksR0FBRztRQUNYO1lBQUNHLEdBQUcsRUFBQ2xCLGlEQUFHO1lBQUVtQixJQUFJLEVBQUNuQixpREFBRztTQUFDO1FBQ25CO1lBQUNrQixHQUFHLEVBQUVwQixvREFBTTtZQUFFcUIsSUFBSSxFQUFDckIsb0RBQU07U0FBQztRQUMxQjtZQUFDb0IsR0FBRyxFQUFFbkIsb0RBQU07WUFBRW9CLElBQUksRUFBQ3BCLG9EQUFNO1NBQUM7UUFDMUI7WUFBQ21CLEdBQUcsRUFBRWpCLG9EQUFNO1lBQUVrQixJQUFJLEVBQUNsQixvREFBTTtTQUFDO1FBQzFCO1lBQUNpQixHQUFHLEVBQUVoQixvREFBTTtZQUFFaUIsSUFBSSxFQUFDakIsb0RBQU07U0FBQztRQUMxQjtZQUFDZ0IsR0FBRyxFQUFFZixvREFBTTtZQUFFZ0IsSUFBSSxFQUFDaEIsb0RBQU07U0FBQztRQUMxQjtZQUFDZSxHQUFHLEVBQUVkLG9EQUFNO1lBQUVlLElBQUksRUFBQ2Ysb0RBQU07U0FBQztRQUMxQjtZQUFDYyxHQUFHLEVBQUViLG9EQUFNO1lBQUVjLElBQUksRUFBQ2Qsb0RBQU07U0FBQztRQUMxQjtZQUFDYSxHQUFHLEVBQUVaLG9EQUFNO1lBQUVhLElBQUksRUFBQ2Isb0RBQU07U0FBQztLQUMzQjtJQUVELElBQXdDVixHQUFVLEdBQVZBLCtDQUFRLEVBQUUsRUFBM0N3QixZQUFZLEdBQXFCeEIsR0FBVSxHQUEvQixFQUFFeUIsZUFBZSxHQUFJekIsR0FBVSxHQUFkO0lBQ3BDLElBQWtDQSxJQUFxQyxHQUFyQ0EsK0NBQVEsQ0FBQ2lCLGNBQWMsQ0FBQ0QsV0FBVyxDQUFDLENBQUMsRUFBaEVVLFNBQVMsR0FBa0IxQixJQUFxQyxHQUF2RCxFQUFFMkIsWUFBWSxHQUFJM0IsSUFBcUMsR0FBekM7SUFNOUJELGdEQUFTLENBQUMsV0FBSztRQUNiMEIsZUFBZSxDQUFDVixZQUFZLENBQUMsQ0FBQztLQUMvQixFQUFFO1FBQUNBLFlBQVk7S0FBQyxDQUFDLENBQUM7SUFFbkJoQixnREFBUyxDQUFDLFdBQUs7UUFDYjRCLFlBQVksQ0FBQ1YsY0FBYyxDQUFDRCxXQUFXLENBQUMsQ0FBQyxDQUFDO0tBQzNDLEVBQUM7UUFBQ0EsV0FBVztLQUFDLENBQUM7SUFHaEIscUJBQ0UsOERBQUNmLHVEQUFROzswQkFDUCw4REFBQ0EsOERBQWU7Z0JBQUM0QixHQUFHLEVBQUU7b0JBQ3BCQyxlQUFlLEVBQUVOLFlBQVksS0FBS2IsMkRBQWEsR0FBRSxTQUFTLEdBQUUsU0FBUztpQkFDdEU7MEJBQ0VhLFlBQVk7Ozs7O3FCQUNHOzBCQUNsQiw4REFBQ3ZCLDREQUFhO2dCQUFDK0IsWUFBVSxFQUFDLGlCQUFpQjtnQkFBQ0MsS0FBSyxFQUFFUCxTQUFTO2dCQUMxRFEsUUFBUSxFQUFFLFNBQUNaLEdBQUcsRUFBSTtvQkFDaEJHLGVBQWUsQ0FBQ0gsR0FBRyxDQUFDLENBQUM7b0JBQ3JCUixRQUFRLENBQUNRLEdBQUcsQ0FBQyxDQUFDO2lCQUNmOzBCQUVBLFNBQUNhLElBQUk7eUNBQ0osOERBQUNsQyw0REFBYTt3QkFBQytCLFlBQVUsRUFBRW5CLEVBQUU7d0JBQWlCd0IsS0FBSyxFQUFFRixJQUFJLENBQUNiLEdBQUcsS0FBSyxRQUFRLEdBQUcsT0FBTyxHQUFHLFNBQVM7a0NBQzdGYSxJQUFJLENBQUNaLElBQUk7dUJBRHdCWSxJQUFJLENBQUNiLEdBQUc7Ozs7NkJBRTVCO2lCQUNqQjs7Ozs7cUJBRWE7Ozs7OzthQUNQLENBQ1o7Q0FDRjtHQXZES1YsUUFBUTtBQUFSQSxLQUFBQSxRQUFRO0FBeURkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWxlY3Rvci5qcz83NzVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7RHJvcGRvd259IGZyb20gXCJAbmV4dHVpLW9yZy9yZWFjdFwiXHJcbmltcG9ydCB7XHJcbkNPSU5fMSxDT0lOXzIsIEVUSCxDT0lOXzMsQ09JTl80LENPSU5fNSxDT0lOXzYsQ09JTl83LENPSU5fOCxERUZBVUxUX1ZBTFVFXHJcbn0gZnJvbSBcIi4uL3V0aWxzL3NhbGVUb2tlblwiXHJcblxyXG5jb25zdCBTZWxlY3RvciA9ICh7XHJcbiAgaWQsXHJcbiAgc2V0VG9rZW4sXHJcbiAgZGVmYXVsdFZhbHVlLFxyXG4gIGlnbm9yZVZhbHVlfSkgPT4ge1xyXG4gIGNvbnN0IG1lbnUgPSBbXHJcbiAgICB7a2V5OkVUSCwgbmFtZTpFVEh9LFxyXG4gICAge2tleTogQ09JTl8xLCBuYW1lOkNPSU5fMX0sXHJcbiAgICB7a2V5OiBDT0lOXzIsIG5hbWU6Q09JTl8yfSxcclxuICAgIHtrZXk6IENPSU5fMywgbmFtZTpDT0lOXzN9LFxyXG4gICAge2tleTogQ09JTl80LCBuYW1lOkNPSU5fNH0sXHJcbiAgICB7a2V5OiBDT0lOXzUsIG5hbWU6Q09JTl81fSxcclxuICAgIHtrZXk6IENPSU5fNiwgbmFtZTpDT0lOXzZ9LFxyXG4gICAge2tleTogQ09JTl83LCBuYW1lOkNPSU5fN30sXHJcbiAgICB7a2V5OiBDT0lOXzgsIG5hbWU6Q09JTl84fSxcclxuICBdXHJcbiAgXHJcbiAgY29uc3QgW3NlbGVjdGVkSXRlbSwgc2V0U2VsZWN0ZWRJdGVtXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW21lbnVJdGVtcywgc2V0TWVudUl0ZW1zXSA9IHVzZVN0YXRlKGdldEZpbHRlckl0ZW1zKGlnbm9yZVZhbHVlKSk7XHJcblxyXG4gIGZ1bmN0aW9uIGdldEZpbHRlckl0ZW1zKGlnbm9yZSl7XHJcbiAgICByZXR1cm4gbWVudS5maWx0ZXIoKGkpPT4gaVtcImtleVwiXSAgIT09IGlnbm9yZSk7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCk9PiB7XHJcbiAgICBzZXRTZWxlY3RlZEl0ZW0oZGVmYXVsdFZhbHVlKTtcclxuICB9LCBbZGVmYXVsdFZhbHVlXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+IHtcclxuICAgIHNldE1lbnVJdGVtcyhnZXRGaWx0ZXJJdGVtcyhpZ25vcmVWYWx1ZSkpO1xyXG4gIH0sW2lnbm9yZVZhbHVlXSlcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RHJvcGRvd24+XHJcbiAgICAgIDxEcm9wZG93bi5CdXR0b24gY3NzPXt7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBzZWxlY3RlZEl0ZW0gPT09IERFRkFVTFRfVkFMVUU/IFwiIzk0YTNiOFwiOiBcIiMyYzJmMzZcIlxyXG4gICAgICB9fT5cclxuICAgICAgICB7c2VsZWN0ZWRJdGVtfVxyXG4gICAgICA8L0Ryb3Bkb3duLkJ1dHRvbj5cclxuICAgICAgPERyb3Bkb3duLk1lbnUgYXJpYS1sYWJlbD1cIkR5bmFtaWMgQWN0aW9uc1wiIGl0ZW1zPXttZW51SXRlbXN9XHJcbiAgICAgICAgb25BY3Rpb249eyhrZXkpPT4ge1xyXG4gICAgICAgICAgc2V0U2VsZWN0ZWRJdGVtKGtleSk7XHJcbiAgICAgICAgICBzZXRUb2tlbihrZXkpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7KGl0ZW0pPT4gKFxyXG4gICAgICAgICAgPERyb3Bkb3duLkl0ZW0gYXJpYS1sYWJlbD17aWR9IGtleT17aXRlbS5rZXl9IGNvbG9yPXtpdGVtLmtleSA9PT0gXCJkZWxldGVcIiA/IFwiZXJyb3JcIiA6IFwiZGVmYXVsdFwifT5cclxuICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgIDwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgPC9Ecm9wZG93bi5NZW51PlxyXG4gICAgPC9Ecm9wZG93bj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RvcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJEcm9wZG93biIsIkNPSU5fMSIsIkNPSU5fMiIsIkVUSCIsIkNPSU5fMyIsIkNPSU5fNCIsIkNPSU5fNSIsIkNPSU5fNiIsIkNPSU5fNyIsIkNPSU5fOCIsIkRFRkFVTFRfVkFMVUUiLCJTZWxlY3RvciIsImlkIiwic2V0VG9rZW4iLCJkZWZhdWx0VmFsdWUiLCJpZ25vcmVWYWx1ZSIsImdldEZpbHRlckl0ZW1zIiwiaWdub3JlIiwibWVudSIsImZpbHRlciIsImkiLCJrZXkiLCJuYW1lIiwic2VsZWN0ZWRJdGVtIiwic2V0U2VsZWN0ZWRJdGVtIiwibWVudUl0ZW1zIiwic2V0TWVudUl0ZW1zIiwiQnV0dG9uIiwiY3NzIiwiYmFja2dyb3VuZENvbG9yIiwiTWVudSIsImFyaWEtbGFiZWwiLCJpdGVtcyIsIm9uQWN0aW9uIiwiaXRlbSIsIkl0ZW0iLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Selector.js\n"));

/***/ })

});