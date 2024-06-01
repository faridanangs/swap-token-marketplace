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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/merge */ \"lodash/merge\");\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi/providers/infura */ \"wagmi/providers/infura\");\n/* harmony import */ var wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wagmi/chains */ \"wagmi/chains\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(wagmi_chains__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! wagmi/providers/public */ \"wagmi/providers/public\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_public__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! wagmi/providers/jsonRpc */ \"wagmi/providers/jsonRpc\");\n/* harmony import */ var wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_9__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__]);\n_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n\n\n\n;\nconst ganacheChain = {\n    id: 1337,\n    name: \"Ganache\",\n    network: \"ganache\",\n    nativeCurrency: {\n        name: \"Ether\",\n        symbol: \"ETH\",\n        decimals: 18\n    },\n    rpcUrls: {\n        default: \"http://127.0.0.1:7545\"\n    },\n    blockExplorers: {\n        default: {\n            name: \"Etherscan\",\n            url: \"http://127.0.0.1:7545\"\n        }\n    },\n    testnet: true\n};\nconst { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.configureChains)([\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_7__.polygonMumbai,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_7__.mainnet,\n    ganacheChain\n], [\n    (0,wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_9__.jsonRpcProvider)({\n        rpc: (chain)=>{\n            if (chain.id === ganacheChain.id) {\n                return {\n                    http: ganacheChain.rpcUrls.default\n                };\n            }\n            return null;\n        }\n    }),\n    (0,wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_6__.infuraProvider)({\n        apiKey: \"f0267a8d7d5642caa8735db53507eefd\",\n        priority: 1\n    })\n]);\nconst { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__.getDefaultWallets)({\n    chains,\n    appName: \"Custom Dex\"\n});\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.createClient)({\n    autoConnect: true,\n    connectors,\n    provider\n});\nconst myTheme = lodash_merge__WEBPACK_IMPORTED_MODULE_3___default()((0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__.midnightTheme)(), {\n    colors: {\n        accentColor: \"#18181b\",\n        accentColorForeground: \"#fff\"\n    }\n});\nconst _app = ({ Component , pageProps  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_5__.WagmiConfig, {\n        client: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__.RainbowKitProvider, {\n            chains: chains,\n            theme: myTheme,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/home/temlep/Programer/Projects/swap-token-marketplace-main/pages/_app.js\",\n                lineNumber: 77,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/temlep/Programer/Projects/swap-token-marketplace-main/pages/_app.js\",\n            lineNumber: 76,\n            columnNumber: 6\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/temlep/Programer/Projects/swap-token-marketplace-main/pages/_app.js\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_app);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBOEI7QUFDSjtBQUNPO0FBQ1U7QUFNWjtBQUNtQztBQUNWO0FBQ0g7QUFDRztBQUNFOztBQUcxRCxNQUFNYyxZQUFZLEdBQUc7SUFDbkJDLEVBQUUsRUFBQyxJQUFJO0lBQ1BDLElBQUksRUFBRSxTQUFTO0lBQ2ZDLE9BQU8sRUFBRSxTQUFTO0lBQ2xCQyxjQUFjLEVBQUU7UUFDZEYsSUFBSSxFQUFFLE9BQU87UUFDYkcsTUFBTSxFQUFFLEtBQUs7UUFDYkMsUUFBUSxFQUFFLEVBQUU7S0FDYjtJQUNEQyxPQUFPLEVBQUU7UUFDUEMsT0FBTyxFQUFFLHVCQUF1QjtLQUNqQztJQUNEQyxjQUFjLEVBQUU7UUFDZEQsT0FBTyxFQUFFO1lBQUNOLElBQUksRUFBRSxXQUFXO1lBQUVRLEdBQUcsRUFBRSx1QkFBdUI7U0FBQztLQUMzRDtJQUNEQyxPQUFPLEVBQUUsSUFBSTtDQUNkO0FBRUQsTUFBTSxFQUFDQyxNQUFNLEdBQUVDLFFBQVEsR0FBQyxHQUFHckIsc0RBQWUsQ0FDeEM7SUFBQ0ssdURBQWE7SUFBRUQsaURBQU87SUFBRUksWUFBWTtDQUFDLEVBQ3RDO0lBQ0VELHdFQUFlLENBQUM7UUFDZGUsR0FBRyxFQUFFLENBQUNDLEtBQUssR0FBSTtZQUNiLElBQUdBLEtBQUssQ0FBQ2QsRUFBRSxLQUFLRCxZQUFZLENBQUNDLEVBQUUsRUFBQztnQkFDOUIsT0FBTztvQkFBQ2UsSUFBSSxFQUFFaEIsWUFBWSxDQUFDTyxPQUFPLENBQUNDLE9BQU87aUJBQUMsQ0FBQzthQUM3QztZQUNELE9BQU8sSUFBSTtTQUNaO0tBQ0YsQ0FBQztJQUNGYixzRUFBYyxDQUFDO1FBQ2JzQixNQUFNLEVBQUUsa0NBQWtDO1FBQzFDQyxRQUFRLEVBQUUsQ0FBQztLQUNaLENBQ0Y7Q0FDQSxDQUNGO0FBRUQsTUFBTSxFQUFDQyxVQUFVLEdBQUMsR0FBRy9CLHlFQUFpQixDQUFDO0lBQ3JDd0IsTUFBTTtJQUNOUSxPQUFPLEVBQUUsWUFBWTtDQUN0QixDQUFDO0FBRUYsTUFBTUMsV0FBVyxHQUFHNUIsbURBQVksQ0FBQztJQUMvQjZCLFdBQVcsRUFBRSxJQUFJO0lBQ2pCSCxVQUFVO0lBQ1ZOLFFBQVE7Q0FDVCxDQUFDO0FBRUYsTUFBTVUsT0FBTyxHQUFHcEMsbURBQUssQ0FBQ0kscUVBQWEsRUFBRSxFQUFFO0lBQ3JDaUMsTUFBTSxFQUFFO1FBQ05DLFdBQVcsRUFBRSxTQUFTO1FBQ3RCQyxxQkFBcUIsRUFBRSxNQUFNO0tBQzlCO0NBQ0YsQ0FBQztBQUVGLE1BQU1DLElBQUksR0FBRyxDQUFDLEVBQUNDLFNBQVMsR0FBRUMsU0FBUyxHQUFDLEdBQUs7SUFDdkMscUJBQ0UsOERBQUNuQyw4Q0FBVztRQUFDb0MsTUFBTSxFQUFFVCxXQUFXO2tCQUMvQiw0RUFBQ2hDLHNFQUFrQjtZQUFDdUIsTUFBTSxFQUFFQSxNQUFNO1lBQUVtQixLQUFLLEVBQUVSLE9BQU87c0JBQy9DLDRFQUFDSyxTQUFTO2dCQUFFLEdBQUdDLFNBQVM7Ozs7O3lCQUFHOzs7OztxQkFDUjs7Ozs7aUJBQ1QsQ0FDZjtDQUNGO0FBRUQsaUVBQWVGLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VuaXN3YXAtdG9rZW4tbWFya2V0cGxhY2UtbWFpbi8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIlxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IG1lcmdlIGZyb20gXCJsb2Rhc2gvbWVyZ2VcIjtcbmltcG9ydCBcIkByYWluYm93LW1lL3JhaW5ib3draXQvc3R5bGVzLmNzc1wiO1xuaW1wb3J0IHtcbiAgZ2V0RGVmYXVsdFdhbGxldHMsXG4gIFJhaW5ib3dLaXRQcm92aWRlcixcbiAgZGFya1RoZW1lLFxuICBtaWRuaWdodFRoZW1lLFxufSBmcm9tIFwiQHJhaW5ib3ctbWUvcmFpbmJvd2tpdFwiXG5pbXBvcnQgeyBjb25maWd1cmVDaGFpbnMsIGNyZWF0ZUNsaWVudCwgV2FnbWlDb25maWd9IGZyb20gXCJ3YWdtaVwiO1xuaW1wb3J0IHsgaW5mdXJhUHJvdmlkZXIgfSBmcm9tIFwid2FnbWkvcHJvdmlkZXJzL2luZnVyYVwiO1xuaW1wb3J0IHsgbWFpbm5ldCwgcG9seWdvbk11bWJhaX0gZnJvbSBcIndhZ21pL2NoYWluc1wiO1xuaW1wb3J0IHsgcHVibGljUHJvdmlkZXIgfSBmcm9tIFwid2FnbWkvcHJvdmlkZXJzL3B1YmxpY1wiO1xuaW1wb3J0IHsganNvblJwY1Byb3ZpZGVyIH0gZnJvbSBcIndhZ21pL3Byb3ZpZGVycy9qc29uUnBjXCI7XG47XG5cbmNvbnN0IGdhbmFjaGVDaGFpbiA9IHtcbiAgaWQ6MTMzNyxcbiAgbmFtZTogXCJHYW5hY2hlXCIsXG4gIG5ldHdvcms6IFwiZ2FuYWNoZVwiLFxuICBuYXRpdmVDdXJyZW5jeToge1xuICAgIG5hbWU6IFwiRXRoZXJcIixcbiAgICBzeW1ib2w6IFwiRVRIXCIsXG4gICAgZGVjaW1hbHM6IDE4XG4gIH0sXG4gIHJwY1VybHM6IHtcbiAgICBkZWZhdWx0OiBcImh0dHA6Ly8xMjcuMC4wLjE6NzU0NVwiLFxuICB9LFxuICBibG9ja0V4cGxvcmVyczoge1xuICAgIGRlZmF1bHQ6IHtuYW1lOiBcIkV0aGVyc2NhblwiLCB1cmw6IFwiaHR0cDovLzEyNy4wLjAuMTo3NTQ1XCJ9LFxuICB9LFxuICB0ZXN0bmV0OiB0cnVlXG59XG5cbmNvbnN0IHtjaGFpbnMsIHByb3ZpZGVyfSA9IGNvbmZpZ3VyZUNoYWlucyhcbiAgW3BvbHlnb25NdW1iYWksIG1haW5uZXQsIGdhbmFjaGVDaGFpbl0sXG4gIFtcbiAgICBqc29uUnBjUHJvdmlkZXIoe1xuICAgICAgcnBjOiAoY2hhaW4pPT4ge1xuICAgICAgICBpZihjaGFpbi5pZCA9PT0gZ2FuYWNoZUNoYWluLmlkKXtcbiAgICAgICAgICByZXR1cm4ge2h0dHA6IGdhbmFjaGVDaGFpbi5ycGNVcmxzLmRlZmF1bHR9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG4gICAgfSksXG4gICAgaW5mdXJhUHJvdmlkZXIoe1xuICAgICAgYXBpS2V5OiBcImYwMjY3YThkN2Q1NjQyY2FhODczNWRiNTM1MDdlZWZkXCIsXG4gICAgICBwcmlvcml0eTogMSxcbiAgICB9LFxuICApXG4gIF1cbilcblxuY29uc3Qge2Nvbm5lY3RvcnN9ID0gZ2V0RGVmYXVsdFdhbGxldHMoe1xuICBjaGFpbnMsXG4gIGFwcE5hbWU6IFwiQ3VzdG9tIERleFwiLFxufSlcblxuY29uc3Qgd2FnbWlDbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuICBhdXRvQ29ubmVjdDogdHJ1ZSxcbiAgY29ubmVjdG9ycyxcbiAgcHJvdmlkZXJcbn0pXG5cbmNvbnN0IG15VGhlbWUgPSBtZXJnZShtaWRuaWdodFRoZW1lKCksIHtcbiAgY29sb3JzOiB7XG4gICAgYWNjZW50Q29sb3I6IFwiIzE4MTgxYlwiLFxuICAgIGFjY2VudENvbG9yRm9yZWdyb3VuZDogXCIjZmZmXCJcbiAgfVxufSlcblxuY29uc3QgX2FwcCA9ICh7Q29tcG9uZW50LCBwYWdlUHJvcHN9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFdhZ21pQ29uZmlnIGNsaWVudD17d2FnbWlDbGllbnR9PlxuICAgICA8UmFpbmJvd0tpdFByb3ZpZGVyIGNoYWlucz17Y2hhaW5zfSB0aGVtZT17bXlUaGVtZX0+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30vPlxuICAgICAgPC9SYWluYm93S2l0UHJvdmlkZXI+XG4gICAgPC9XYWdtaUNvbmZpZz5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgX2FwcDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIm1lcmdlIiwiZ2V0RGVmYXVsdFdhbGxldHMiLCJSYWluYm93S2l0UHJvdmlkZXIiLCJkYXJrVGhlbWUiLCJtaWRuaWdodFRoZW1lIiwiY29uZmlndXJlQ2hhaW5zIiwiY3JlYXRlQ2xpZW50IiwiV2FnbWlDb25maWciLCJpbmZ1cmFQcm92aWRlciIsIm1haW5uZXQiLCJwb2x5Z29uTXVtYmFpIiwicHVibGljUHJvdmlkZXIiLCJqc29uUnBjUHJvdmlkZXIiLCJnYW5hY2hlQ2hhaW4iLCJpZCIsIm5hbWUiLCJuZXR3b3JrIiwibmF0aXZlQ3VycmVuY3kiLCJzeW1ib2wiLCJkZWNpbWFscyIsInJwY1VybHMiLCJkZWZhdWx0IiwiYmxvY2tFeHBsb3JlcnMiLCJ1cmwiLCJ0ZXN0bmV0IiwiY2hhaW5zIiwicHJvdmlkZXIiLCJycGMiLCJjaGFpbiIsImh0dHAiLCJhcGlLZXkiLCJwcmlvcml0eSIsImNvbm5lY3RvcnMiLCJhcHBOYW1lIiwid2FnbWlDbGllbnQiLCJhdXRvQ29ubmVjdCIsIm15VGhlbWUiLCJjb2xvcnMiLCJhY2NlbnRDb2xvciIsImFjY2VudENvbG9yRm9yZWdyb3VuZCIsIl9hcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjbGllbnQiLCJ0aGVtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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