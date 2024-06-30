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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/merge */ \"lodash/merge\");\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi/providers/infura */ \"wagmi/providers/infura\");\n/* harmony import */ var wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wagmi/chains */ \"wagmi/chains\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(wagmi_chains__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! wagmi/providers/public */ \"wagmi/providers/public\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_public__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! wagmi/providers/jsonRpc */ \"wagmi/providers/jsonRpc\");\n/* harmony import */ var wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_9__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__]);\n_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n\n\n\n;\nconst ganacheChain = {\n    id: 1337,\n    name: \"Ganache\",\n    network: \"ganache\",\n    nativeCurrency: {\n        name: \"Ether\",\n        symbol: \"ETH\",\n        decimals: 18\n    },\n    rpcUrls: {\n        default: \"http://127.0.0.1:7545\"\n    },\n    blockExplorers: {\n        default: {\n            name: \"Etherscan\",\n            url: \"http://127.0.0.1:7545\"\n        }\n    },\n    testnet: true\n};\nconst { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.configureChains)([\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_7__.polygonMumbai,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_7__.mainnet,\n    ganacheChain\n], [\n    (0,wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_9__.jsonRpcProvider)({\n        rpc: (chain)=>{\n            if (chain.id === ganacheChain.id) {\n                return {\n                    http: ganacheChain.rpcUrls.default\n                };\n            }\n            return null;\n        }\n    }),\n    (0,wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_6__.infuraProvider)({\n        apiKey: \"f0267a8d7d5642caa8735db53507eefd\",\n        priority: 1\n    })\n]);\nconst { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__.getDefaultWallets)({\n    chains,\n    appName: \"Custom Dex\"\n});\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.createClient)({\n    autoConnect: true,\n    connectors,\n    provider\n});\nconst myTheme = lodash_merge__WEBPACK_IMPORTED_MODULE_3___default()((0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__.midnightTheme)(), {\n    colors: {\n        accentColor: \"#18181b\",\n        accentColorForeground: \"#fff\"\n    }\n});\nconst _app = ({ Component , pageProps  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_5__.WagmiConfig, {\n        client: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__.RainbowKitProvider, {\n            chains: chains,\n            theme: myTheme,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"D:\\\\Programing\\\\Blockchain\\\\swap-token-marketplace\\\\pages\\\\_app.js\",\n                lineNumber: 77,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\Programing\\\\Blockchain\\\\swap-token-marketplace\\\\pages\\\\_app.js\",\n            lineNumber: 76,\n            columnNumber: 6\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Programing\\\\Blockchain\\\\swap-token-marketplace\\\\pages\\\\_app.js\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_app);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBOEI7QUFDSjtBQUNPO0FBQ1U7QUFNWjtBQUNtQztBQUNWO0FBQ0g7QUFDRztBQUNFOztBQUcxRCxNQUFNYyxZQUFZLEdBQUc7SUFDbkJDLEVBQUUsRUFBQyxJQUFJO0lBQ1BDLElBQUksRUFBRSxTQUFTO0lBQ2ZDLE9BQU8sRUFBRSxTQUFTO0lBQ2xCQyxjQUFjLEVBQUU7UUFDZEYsSUFBSSxFQUFFLE9BQU87UUFDYkcsTUFBTSxFQUFFLEtBQUs7UUFDYkMsUUFBUSxFQUFFLEVBQUU7S0FDYjtJQUNEQyxPQUFPLEVBQUU7UUFDUEMsT0FBTyxFQUFFLHVCQUF1QjtLQUNqQztJQUNEQyxjQUFjLEVBQUU7UUFDZEQsT0FBTyxFQUFFO1lBQUNOLElBQUksRUFBRSxXQUFXO1lBQUVRLEdBQUcsRUFBRSx1QkFBdUI7U0FBQztLQUMzRDtJQUNEQyxPQUFPLEVBQUUsSUFBSTtDQUNkO0FBRUQsTUFBTSxFQUFDQyxNQUFNLEdBQUVDLFFBQVEsR0FBQyxHQUFHckIsc0RBQWUsQ0FDeEM7SUFBQ0ssdURBQWE7SUFBRUQsaURBQU87SUFBRUksWUFBWTtDQUFDLEVBQ3RDO0lBQ0VELHdFQUFlLENBQUM7UUFDZGUsR0FBRyxFQUFFLENBQUNDLEtBQUssR0FBSTtZQUNiLElBQUdBLEtBQUssQ0FBQ2QsRUFBRSxLQUFLRCxZQUFZLENBQUNDLEVBQUUsRUFBQztnQkFDOUIsT0FBTztvQkFBQ2UsSUFBSSxFQUFFaEIsWUFBWSxDQUFDTyxPQUFPLENBQUNDLE9BQU87aUJBQUMsQ0FBQzthQUM3QztZQUNELE9BQU8sSUFBSTtTQUNaO0tBQ0YsQ0FBQztJQUNGYixzRUFBYyxDQUFDO1FBQ2JzQixNQUFNLEVBQUUsa0NBQWtDO1FBQzFDQyxRQUFRLEVBQUUsQ0FBQztLQUNaLENBQ0Y7Q0FDQSxDQUNGO0FBRUQsTUFBTSxFQUFDQyxVQUFVLEdBQUMsR0FBRy9CLHlFQUFpQixDQUFDO0lBQ3JDd0IsTUFBTTtJQUNOUSxPQUFPLEVBQUUsWUFBWTtDQUN0QixDQUFDO0FBRUYsTUFBTUMsV0FBVyxHQUFHNUIsbURBQVksQ0FBQztJQUMvQjZCLFdBQVcsRUFBRSxJQUFJO0lBQ2pCSCxVQUFVO0lBQ1ZOLFFBQVE7Q0FDVCxDQUFDO0FBRUYsTUFBTVUsT0FBTyxHQUFHcEMsbURBQUssQ0FBQ0kscUVBQWEsRUFBRSxFQUFFO0lBQ3JDaUMsTUFBTSxFQUFFO1FBQ05DLFdBQVcsRUFBRSxTQUFTO1FBQ3RCQyxxQkFBcUIsRUFBRSxNQUFNO0tBQzlCO0NBQ0YsQ0FBQztBQUVGLE1BQU1DLElBQUksR0FBRyxDQUFDLEVBQUNDLFNBQVMsR0FBRUMsU0FBUyxHQUFDLEdBQUs7SUFDdkMscUJBQ0UsOERBQUNuQyw4Q0FBVztRQUFDb0MsTUFBTSxFQUFFVCxXQUFXO2tCQUMvQiw0RUFBQ2hDLHNFQUFrQjtZQUFDdUIsTUFBTSxFQUFFQSxNQUFNO1lBQUVtQixLQUFLLEVBQUVSLE9BQU87c0JBQy9DLDRFQUFDSyxTQUFTO2dCQUFFLEdBQUdDLFNBQVM7Ozs7O3lCQUFHOzs7OztxQkFDUjs7Ozs7aUJBQ1QsQ0FDZjtDQUNGO0FBRUQsaUVBQWVGLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VuaXN3YXAtdG9rZW4tbWFya2V0cGxhY2UtbWFpbi8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBtZXJnZSBmcm9tIFwibG9kYXNoL21lcmdlXCI7XHJcbmltcG9ydCBcIkByYWluYm93LW1lL3JhaW5ib3draXQvc3R5bGVzLmNzc1wiO1xyXG5pbXBvcnQge1xyXG4gIGdldERlZmF1bHRXYWxsZXRzLFxyXG4gIFJhaW5ib3dLaXRQcm92aWRlcixcclxuICBkYXJrVGhlbWUsXHJcbiAgbWlkbmlnaHRUaGVtZSxcclxufSBmcm9tIFwiQHJhaW5ib3ctbWUvcmFpbmJvd2tpdFwiXHJcbmltcG9ydCB7IGNvbmZpZ3VyZUNoYWlucywgY3JlYXRlQ2xpZW50LCBXYWdtaUNvbmZpZ30gZnJvbSBcIndhZ21pXCI7XHJcbmltcG9ydCB7IGluZnVyYVByb3ZpZGVyIH0gZnJvbSBcIndhZ21pL3Byb3ZpZGVycy9pbmZ1cmFcIjtcclxuaW1wb3J0IHsgbWFpbm5ldCwgcG9seWdvbk11bWJhaX0gZnJvbSBcIndhZ21pL2NoYWluc1wiO1xyXG5pbXBvcnQgeyBwdWJsaWNQcm92aWRlciB9IGZyb20gXCJ3YWdtaS9wcm92aWRlcnMvcHVibGljXCI7XHJcbmltcG9ydCB7IGpzb25ScGNQcm92aWRlciB9IGZyb20gXCJ3YWdtaS9wcm92aWRlcnMvanNvblJwY1wiO1xyXG47XHJcblxyXG5jb25zdCBnYW5hY2hlQ2hhaW4gPSB7XHJcbiAgaWQ6MTMzNyxcclxuICBuYW1lOiBcIkdhbmFjaGVcIixcclxuICBuZXR3b3JrOiBcImdhbmFjaGVcIixcclxuICBuYXRpdmVDdXJyZW5jeToge1xyXG4gICAgbmFtZTogXCJFdGhlclwiLFxyXG4gICAgc3ltYm9sOiBcIkVUSFwiLFxyXG4gICAgZGVjaW1hbHM6IDE4XHJcbiAgfSxcclxuICBycGNVcmxzOiB7XHJcbiAgICBkZWZhdWx0OiBcImh0dHA6Ly8xMjcuMC4wLjE6NzU0NVwiLFxyXG4gIH0sXHJcbiAgYmxvY2tFeHBsb3JlcnM6IHtcclxuICAgIGRlZmF1bHQ6IHtuYW1lOiBcIkV0aGVyc2NhblwiLCB1cmw6IFwiaHR0cDovLzEyNy4wLjAuMTo3NTQ1XCJ9LFxyXG4gIH0sXHJcbiAgdGVzdG5ldDogdHJ1ZVxyXG59XHJcblxyXG5jb25zdCB7Y2hhaW5zLCBwcm92aWRlcn0gPSBjb25maWd1cmVDaGFpbnMoXHJcbiAgW3BvbHlnb25NdW1iYWksIG1haW5uZXQsIGdhbmFjaGVDaGFpbl0sXHJcbiAgW1xyXG4gICAganNvblJwY1Byb3ZpZGVyKHtcclxuICAgICAgcnBjOiAoY2hhaW4pPT4ge1xyXG4gICAgICAgIGlmKGNoYWluLmlkID09PSBnYW5hY2hlQ2hhaW4uaWQpe1xyXG4gICAgICAgICAgcmV0dXJuIHtodHRwOiBnYW5hY2hlQ2hhaW4ucnBjVXJscy5kZWZhdWx0fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgfVxyXG4gICAgfSksXHJcbiAgICBpbmZ1cmFQcm92aWRlcih7XHJcbiAgICAgIGFwaUtleTogXCJmMDI2N2E4ZDdkNTY0MmNhYTg3MzVkYjUzNTA3ZWVmZFwiLFxyXG4gICAgICBwcmlvcml0eTogMSxcclxuICAgIH0sXHJcbiAgKVxyXG4gIF1cclxuKVxyXG5cclxuY29uc3Qge2Nvbm5lY3RvcnN9ID0gZ2V0RGVmYXVsdFdhbGxldHMoe1xyXG4gIGNoYWlucyxcclxuICBhcHBOYW1lOiBcIkN1c3RvbSBEZXhcIixcclxufSlcclxuXHJcbmNvbnN0IHdhZ21pQ2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcclxuICBhdXRvQ29ubmVjdDogdHJ1ZSxcclxuICBjb25uZWN0b3JzLFxyXG4gIHByb3ZpZGVyXHJcbn0pXHJcblxyXG5jb25zdCBteVRoZW1lID0gbWVyZ2UobWlkbmlnaHRUaGVtZSgpLCB7XHJcbiAgY29sb3JzOiB7XHJcbiAgICBhY2NlbnRDb2xvcjogXCIjMTgxODFiXCIsXHJcbiAgICBhY2NlbnRDb2xvckZvcmVncm91bmQ6IFwiI2ZmZlwiXHJcbiAgfVxyXG59KVxyXG5cclxuY29uc3QgX2FwcCA9ICh7Q29tcG9uZW50LCBwYWdlUHJvcHN9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxXYWdtaUNvbmZpZyBjbGllbnQ9e3dhZ21pQ2xpZW50fT5cclxuICAgICA8UmFpbmJvd0tpdFByb3ZpZGVyIGNoYWlucz17Y2hhaW5zfSB0aGVtZT17bXlUaGVtZX0+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfS8+XHJcbiAgICAgIDwvUmFpbmJvd0tpdFByb3ZpZGVyPlxyXG4gICAgPC9XYWdtaUNvbmZpZz5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBfYXBwO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJtZXJnZSIsImdldERlZmF1bHRXYWxsZXRzIiwiUmFpbmJvd0tpdFByb3ZpZGVyIiwiZGFya1RoZW1lIiwibWlkbmlnaHRUaGVtZSIsImNvbmZpZ3VyZUNoYWlucyIsImNyZWF0ZUNsaWVudCIsIldhZ21pQ29uZmlnIiwiaW5mdXJhUHJvdmlkZXIiLCJtYWlubmV0IiwicG9seWdvbk11bWJhaSIsInB1YmxpY1Byb3ZpZGVyIiwianNvblJwY1Byb3ZpZGVyIiwiZ2FuYWNoZUNoYWluIiwiaWQiLCJuYW1lIiwibmV0d29yayIsIm5hdGl2ZUN1cnJlbmN5Iiwic3ltYm9sIiwiZGVjaW1hbHMiLCJycGNVcmxzIiwiZGVmYXVsdCIsImJsb2NrRXhwbG9yZXJzIiwidXJsIiwidGVzdG5ldCIsImNoYWlucyIsInByb3ZpZGVyIiwicnBjIiwiY2hhaW4iLCJodHRwIiwiYXBpS2V5IiwicHJpb3JpdHkiLCJjb25uZWN0b3JzIiwiYXBwTmFtZSIsIndhZ21pQ2xpZW50IiwiYXV0b0Nvbm5lY3QiLCJteVRoZW1lIiwiY29sb3JzIiwiYWNjZW50Q29sb3IiLCJhY2NlbnRDb2xvckZvcmVncm91bmQiLCJfYXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2xpZW50IiwidGhlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "lodash/merge":
/*!*******************************!*\
  !*** external "lodash/merge" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/merge");

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

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi");

/***/ }),

/***/ "wagmi/chains":
/*!*******************************!*\
  !*** external "wagmi/chains" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/chains");

/***/ }),

/***/ "wagmi/providers/infura":
/*!*****************************************!*\
  !*** external "wagmi/providers/infura" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/infura");

/***/ }),

/***/ "wagmi/providers/jsonRpc":
/*!******************************************!*\
  !*** external "wagmi/providers/jsonRpc" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/jsonRpc");

/***/ }),

/***/ "wagmi/providers/public":
/*!*****************************************!*\
  !*** external "wagmi/providers/public" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/public");

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();