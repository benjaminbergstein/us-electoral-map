webpackHotUpdate_N_E(1,{

/***/ "./lib/Map.js":
/*!********************!*\
  !*** ./lib/Map.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _DataContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DataContext */ \"./lib/DataContext.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ \"./lib/constants.js\");\n/* harmony import */ var datamaps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! datamaps */ \"./node_modules/datamaps/dist/datamaps.all.js\");\n/* harmony import */ var datamaps__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(datamaps__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _jsxFileName = \"/app/lib/Map.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar POPUP_TEMPLATE = function POPUP_TEMPLATE(state, data) {\n  return \"<span style=\\\"color: white; font-weight: 900; text-shadow: 0 0 1px #000, 1px 1px 1px #000;\\\">\".concat(state.properties.name, \": \").concat(data['Electoral Votes'], \"</span>\");\n};\n\n_c = POPUP_TEMPLATE;\n\nvar initalizeMap = function initalizeMap(node, data) {\n  if (window !== undefined) {\n    var map = new datamaps__WEBPACK_IMPORTED_MODULE_6___default.a({\n      element: node,\n      scope: 'usa',\n      data: data,\n      fills: _constants__WEBPACK_IMPORTED_MODULE_5__[\"PossibleFills\"],\n      geographyConfig: {\n        highlightOnHover: false,\n        popupTemplate: POPUP_TEMPLATE\n      } // done: (datamap) => {\n      //   const svg = datamap.svg;\n      // svg.selectAll('.datamaps-subunit').on('click', function(data) {\n      //   var stateView;\n      //   stateView = new StateView(application, data.id);\n      //   stateView.toggle();\n      // });\n      // }\n\n    });\n    return map;\n  }\n};\n\nvar Container = function Container() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useContext\"])(_DataContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n      data = _useContext.data,\n      windowSize = _useContext.windowSize;\n\n  var ref = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])(null);\n  console.log(windowSize);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useLayoutEffect\"])(function () {\n    if (data === undefined) return;\n    if (ref.current === null) return;\n    initalizeMap(ref.current, data);\n  }, [data].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(windowSize)));\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    style: {\n      height: '100%'\n    },\n    ref: ref\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 10\n  }, _this);\n};\n\n_s(Container, \"t5MUP9T0dsNqks/OW78zMenl08E=\");\n\n_c2 = Container;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Container);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"POPUP_TEMPLATE\");\n$RefreshReg$(_c2, \"Container\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL01hcC5qcz9jNTkzIl0sIm5hbWVzIjpbIlBPUFVQX1RFTVBMQVRFIiwic3RhdGUiLCJkYXRhIiwicHJvcGVydGllcyIsIm5hbWUiLCJpbml0YWxpemVNYXAiLCJub2RlIiwid2luZG93IiwidW5kZWZpbmVkIiwibWFwIiwiRGF0YW1hcCIsImVsZW1lbnQiLCJzY29wZSIsImZpbGxzIiwiUG9zc2libGVGaWxscyIsImdlb2dyYXBoeUNvbmZpZyIsImhpZ2hsaWdodE9uSG92ZXIiLCJwb3B1cFRlbXBsYXRlIiwiQ29udGFpbmVyIiwidXNlQ29udGV4dCIsIkRhdGFDb250ZXh0Iiwid2luZG93U2l6ZSIsInJlZiIsInVzZVJlZiIsImNvbnNvbGUiLCJsb2ciLCJ1c2VMYXlvdXRFZmZlY3QiLCJjdXJyZW50IiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLEtBQUQsRUFBUUMsSUFBUjtBQUFBLGdIQUErR0QsS0FBSyxDQUFDRSxVQUFOLENBQWlCQyxJQUFoSSxlQUF5SUYsSUFBSSxDQUFDLGlCQUFELENBQTdJO0FBQUEsQ0FBdkI7O0tBQU1GLGM7O0FBRU4sSUFBTUssWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsSUFBRCxFQUFPSixJQUFQLEVBQWdCO0FBQ25DLE1BQUlLLE1BQU0sS0FBS0MsU0FBZixFQUEwQjtBQUN4QixRQUFNQyxHQUFHLEdBQUcsSUFBSUMsK0NBQUosQ0FBWTtBQUN0QkMsYUFBTyxFQUFFTCxJQURhO0FBRXRCTSxXQUFLLEVBQUUsS0FGZTtBQUd0QlYsVUFBSSxFQUFKQSxJQUhzQjtBQUl0QlcsV0FBSyxFQUFFQyx3REFKZTtBQUt0QkMscUJBQWUsRUFBRTtBQUNmQyx3QkFBZ0IsRUFBRSxLQURIO0FBRWZDLHFCQUFhLEVBQUVqQjtBQUZBLE9BTEssQ0FTdEI7QUFDQTtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRjs7QUFoQnNCLEtBQVosQ0FBWjtBQW1CQSxXQUFPUyxHQUFQO0FBQ0Q7QUFDRixDQXZCRDs7QUF3QkEsSUFBTVMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLG9CQUNPQyx3REFBVSxDQUFDQyxvREFBRCxDQURqQjtBQUFBLE1BQ2RsQixJQURjLGVBQ2RBLElBRGM7QUFBQSxNQUNSbUIsVUFEUSxlQUNSQSxVQURROztBQUV0QixNQUFNQyxHQUFHLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUFsQjtBQUVBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUosVUFBWjtBQUNBSywrREFBZSxDQUFDLFlBQU07QUFDcEIsUUFBSXhCLElBQUksS0FBS00sU0FBYixFQUF3QjtBQUN4QixRQUFJYyxHQUFHLENBQUNLLE9BQUosS0FBZ0IsSUFBcEIsRUFBMEI7QUFFMUJ0QixnQkFBWSxDQUFDaUIsR0FBRyxDQUFDSyxPQUFMLEVBQWN6QixJQUFkLENBQVo7QUFDRCxHQUxjLEdBS1hBLElBTFcsc0dBS0ZtQixVQUxFLEdBQWY7QUFPQSxzQkFBTztBQUFLLFNBQUssRUFBRTtBQUFFTyxZQUFNLEVBQUU7QUFBVixLQUFaO0FBQWdDLE9BQUcsRUFBRU47QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0QsQ0FiRDs7R0FBTUosUzs7TUFBQUEsUztBQWVTQSx3RUFBZiIsImZpbGUiOiIuL2xpYi9NYXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRGF0YUNvbnRleHQgZnJvbSAnLi9EYXRhQ29udGV4dCdcbmltcG9ydCB7IFBvc3NpYmxlRmlsbHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmltcG9ydCBEYXRhbWFwIGZyb20gJ2RhdGFtYXBzJ1xuXG5jb25zdCBQT1BVUF9URU1QTEFURSA9IChzdGF0ZSwgZGF0YSkgPT4gYDxzcGFuIHN0eWxlPVwiY29sb3I6IHdoaXRlOyBmb250LXdlaWdodDogOTAwOyB0ZXh0LXNoYWRvdzogMCAwIDFweCAjMDAwLCAxcHggMXB4IDFweCAjMDAwO1wiPiR7c3RhdGUucHJvcGVydGllcy5uYW1lfTogJHtkYXRhWydFbGVjdG9yYWwgVm90ZXMnXX08L3NwYW4+YDtcblxuY29uc3QgaW5pdGFsaXplTWFwID0gKG5vZGUsIGRhdGEpID0+IHtcbiAgaWYgKHdpbmRvdyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgbWFwID0gbmV3IERhdGFtYXAoe1xuICAgICAgZWxlbWVudDogbm9kZSxcbiAgICAgIHNjb3BlOiAndXNhJyxcbiAgICAgIGRhdGEsXG4gICAgICBmaWxsczogUG9zc2libGVGaWxscyxcbiAgICAgIGdlb2dyYXBoeUNvbmZpZzoge1xuICAgICAgICBoaWdobGlnaHRPbkhvdmVyOiBmYWxzZSxcbiAgICAgICAgcG9wdXBUZW1wbGF0ZTogUE9QVVBfVEVNUExBVEUsXG4gICAgICB9LFxuICAgICAgLy8gZG9uZTogKGRhdGFtYXApID0+IHtcbiAgICAgIC8vICAgY29uc3Qgc3ZnID0gZGF0YW1hcC5zdmc7XG4gICAgICAgIC8vIHN2Zy5zZWxlY3RBbGwoJy5kYXRhbWFwcy1zdWJ1bml0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAvLyAgIHZhciBzdGF0ZVZpZXc7XG4gICAgICAgIC8vICAgc3RhdGVWaWV3ID0gbmV3IFN0YXRlVmlldyhhcHBsaWNhdGlvbiwgZGF0YS5pZCk7XG4gICAgICAgIC8vICAgc3RhdGVWaWV3LnRvZ2dsZSgpO1xuICAgICAgICAvLyB9KTtcbiAgICAgIC8vIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIG1hcFxuICB9XG59XG5jb25zdCBDb250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgZGF0YSwgd2luZG93U2l6ZSB9ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dClcbiAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpXG5cbiAgY29uc29sZS5sb2cod2luZG93U2l6ZSlcbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGF0YSA9PT0gdW5kZWZpbmVkKSByZXR1cm5cbiAgICBpZiAocmVmLmN1cnJlbnQgPT09IG51bGwpIHJldHVyblxuXG4gICAgaW5pdGFsaXplTWFwKHJlZi5jdXJyZW50LCBkYXRhKVxuICB9LCBbZGF0YSwgLi4ud2luZG93U2l6ZV0pXG5cbiAgcmV0dXJuIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScgfX0gcmVmPXtyZWZ9PjwvZGl2PlxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/Map.js\n");

/***/ })

})