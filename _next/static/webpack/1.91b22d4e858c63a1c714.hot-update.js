webpackHotUpdate_N_E(1,{

/***/ "./lib/Map.js":
/*!********************!*\
  !*** ./lib/Map.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _DataContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DataContext */ \"./lib/DataContext.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ \"./lib/constants.js\");\n/* harmony import */ var datamaps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! datamaps */ \"./node_modules/datamaps/dist/datamaps.all.js\");\n/* harmony import */ var datamaps__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(datamaps__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _jsxFileName = \"/app/lib/Map.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar POPUP_TEMPLATE = function POPUP_TEMPLATE(state, data) {\n  return \"<span style=\\\"color: white; font-weight: 900; text-shadow: 0 0 1px #000, 1px 1px 1px #000;\\\">\".concat(state.properties.name, \": \").concat(data['Electoral Votes'], \"</span>\");\n};\n\n_c = POPUP_TEMPLATE;\n\nvar initalizeMap = function initalizeMap(node, data) {\n  if (window !== undefined) {\n    var map = new datamaps__WEBPACK_IMPORTED_MODULE_6___default.a({\n      element: node,\n      scope: 'usa',\n      data: data,\n      fills: _constants__WEBPACK_IMPORTED_MODULE_5__[\"PossibleFills\"],\n      geographyConfig: {\n        highlightOnHover: false,\n        popupTemplate: POPUP_TEMPLATE\n      } // done: (datamap) => {\n      //   const svg = datamap.svg;\n      // svg.selectAll('.datamaps-subunit').on('click', function(data) {\n      //   var stateView;\n      //   stateView = new StateView(application, data.id);\n      //   stateView.toggle();\n      // });\n      // }\n\n    });\n    return map;\n  }\n};\n\nvar Container = function Container() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useContext\"])(_DataContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n      data = _useContext.data,\n      windowSize = _useContext.windowSize;\n\n  var ref = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    if (data === undefined) return;\n    if (ref.current === null) return;\n    ref.innerHTML = '';\n    console.log(windowSize);\n    initalizeMap(ref.current, data);\n  }, [data].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(windowSize)));\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    style: {\n      height: '100%'\n    },\n    ref: ref\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 10\n  }, _this);\n};\n\n_s(Container, \"rV/AXYmgjcVo74YJ4nT+b6zuCbE=\");\n\n_c2 = Container;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Container);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"POPUP_TEMPLATE\");\n$RefreshReg$(_c2, \"Container\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL01hcC5qcz9jNTkzIl0sIm5hbWVzIjpbIlBPUFVQX1RFTVBMQVRFIiwic3RhdGUiLCJkYXRhIiwicHJvcGVydGllcyIsIm5hbWUiLCJpbml0YWxpemVNYXAiLCJub2RlIiwid2luZG93IiwidW5kZWZpbmVkIiwibWFwIiwiRGF0YW1hcCIsImVsZW1lbnQiLCJzY29wZSIsImZpbGxzIiwiUG9zc2libGVGaWxscyIsImdlb2dyYXBoeUNvbmZpZyIsImhpZ2hsaWdodE9uSG92ZXIiLCJwb3B1cFRlbXBsYXRlIiwiQ29udGFpbmVyIiwidXNlQ29udGV4dCIsIkRhdGFDb250ZXh0Iiwid2luZG93U2l6ZSIsInJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJpbm5lckhUTUwiLCJjb25zb2xlIiwibG9nIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLEtBQUQsRUFBUUMsSUFBUjtBQUFBLGdIQUErR0QsS0FBSyxDQUFDRSxVQUFOLENBQWlCQyxJQUFoSSxlQUF5SUYsSUFBSSxDQUFDLGlCQUFELENBQTdJO0FBQUEsQ0FBdkI7O0tBQU1GLGM7O0FBRU4sSUFBTUssWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsSUFBRCxFQUFPSixJQUFQLEVBQWdCO0FBQ25DLE1BQUlLLE1BQU0sS0FBS0MsU0FBZixFQUEwQjtBQUN4QixRQUFNQyxHQUFHLEdBQUcsSUFBSUMsK0NBQUosQ0FBWTtBQUN0QkMsYUFBTyxFQUFFTCxJQURhO0FBRXRCTSxXQUFLLEVBQUUsS0FGZTtBQUd0QlYsVUFBSSxFQUFKQSxJQUhzQjtBQUl0QlcsV0FBSyxFQUFFQyx3REFKZTtBQUt0QkMscUJBQWUsRUFBRTtBQUNmQyx3QkFBZ0IsRUFBRSxLQURIO0FBRWZDLHFCQUFhLEVBQUVqQjtBQUZBLE9BTEssQ0FTdEI7QUFDQTtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRjs7QUFoQnNCLEtBQVosQ0FBWjtBQW1CQSxXQUFPUyxHQUFQO0FBQ0Q7QUFDRixDQXZCRDs7QUF3QkEsSUFBTVMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLG9CQUNPQyx3REFBVSxDQUFDQyxvREFBRCxDQURqQjtBQUFBLE1BQ2RsQixJQURjLGVBQ2RBLElBRGM7QUFBQSxNQUNSbUIsVUFEUSxlQUNSQSxVQURROztBQUV0QixNQUFNQyxHQUFHLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUFsQjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJdEIsSUFBSSxLQUFLTSxTQUFiLEVBQXdCO0FBQ3hCLFFBQUljLEdBQUcsQ0FBQ0csT0FBSixLQUFnQixJQUFwQixFQUEwQjtBQUUxQkgsT0FBRyxDQUFDSSxTQUFKLEdBQWdCLEVBQWhCO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUCxVQUFaO0FBQ0FoQixnQkFBWSxDQUFDaUIsR0FBRyxDQUFDRyxPQUFMLEVBQWN2QixJQUFkLENBQVo7QUFDRCxHQVBRLEdBT0xBLElBUEssc0dBT0ltQixVQVBKLEdBQVQ7QUFTQSxzQkFBTztBQUFLLFNBQUssRUFBRTtBQUFFUSxZQUFNLEVBQUU7QUFBVixLQUFaO0FBQWdDLE9BQUcsRUFBRVA7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0QsQ0FkRDs7R0FBTUosUzs7TUFBQUEsUztBQWdCU0Esd0VBQWYiLCJmaWxlIjoiLi9saWIvTWFwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IERhdGFDb250ZXh0IGZyb20gJy4vRGF0YUNvbnRleHQnXG5pbXBvcnQgeyBQb3NzaWJsZUZpbGxzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5pbXBvcnQgRGF0YW1hcCBmcm9tICdkYXRhbWFwcydcblxuY29uc3QgUE9QVVBfVEVNUExBVEUgPSAoc3RhdGUsIGRhdGEpID0+IGA8c3BhbiBzdHlsZT1cImNvbG9yOiB3aGl0ZTsgZm9udC13ZWlnaHQ6IDkwMDsgdGV4dC1zaGFkb3c6IDAgMCAxcHggIzAwMCwgMXB4IDFweCAxcHggIzAwMDtcIj4ke3N0YXRlLnByb3BlcnRpZXMubmFtZX06ICR7ZGF0YVsnRWxlY3RvcmFsIFZvdGVzJ119PC9zcGFuPmA7XG5cbmNvbnN0IGluaXRhbGl6ZU1hcCA9IChub2RlLCBkYXRhKSA9PiB7XG4gIGlmICh3aW5kb3cgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IG1hcCA9IG5ldyBEYXRhbWFwKHtcbiAgICAgIGVsZW1lbnQ6IG5vZGUsXG4gICAgICBzY29wZTogJ3VzYScsXG4gICAgICBkYXRhLFxuICAgICAgZmlsbHM6IFBvc3NpYmxlRmlsbHMsXG4gICAgICBnZW9ncmFwaHlDb25maWc6IHtcbiAgICAgICAgaGlnaGxpZ2h0T25Ib3ZlcjogZmFsc2UsXG4gICAgICAgIHBvcHVwVGVtcGxhdGU6IFBPUFVQX1RFTVBMQVRFLFxuICAgICAgfSxcbiAgICAgIC8vIGRvbmU6IChkYXRhbWFwKSA9PiB7XG4gICAgICAvLyAgIGNvbnN0IHN2ZyA9IGRhdGFtYXAuc3ZnO1xuICAgICAgICAvLyBzdmcuc2VsZWN0QWxsKCcuZGF0YW1hcHMtc3VidW5pdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgLy8gICB2YXIgc3RhdGVWaWV3O1xuICAgICAgICAvLyAgIHN0YXRlVmlldyA9IG5ldyBTdGF0ZVZpZXcoYXBwbGljYXRpb24sIGRhdGEuaWQpO1xuICAgICAgICAvLyAgIHN0YXRlVmlldy50b2dnbGUoKTtcbiAgICAgICAgLy8gfSk7XG4gICAgICAvLyB9XG4gICAgfSlcblxuICAgIHJldHVybiBtYXBcbiAgfVxufVxuY29uc3QgQ29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCB7IGRhdGEsIHdpbmRvd1NpemUgfSA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpXG4gIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuXG4gICAgaWYgKHJlZi5jdXJyZW50ID09PSBudWxsKSByZXR1cm5cblxuICAgIHJlZi5pbm5lckhUTUwgPSAnJ1xuICAgIGNvbnNvbGUubG9nKHdpbmRvd1NpemUpXG4gICAgaW5pdGFsaXplTWFwKHJlZi5jdXJyZW50LCBkYXRhKVxuICB9LCBbZGF0YSwgLi4ud2luZG93U2l6ZV0pXG5cbiAgcmV0dXJuIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScgfX0gcmVmPXtyZWZ9PjwvZGl2PlxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/Map.js\n");

/***/ })

})