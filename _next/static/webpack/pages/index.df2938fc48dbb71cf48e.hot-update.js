webpackHotUpdate_N_E("pages/index",{

/***/ "./lib/States.js":
/*!***********************!*\
  !*** ./lib/States.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ \"./lib/constants.js\");\n\n\n\n\nvar _jsxFileName = \"/app/lib/States.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar POPUP_TEMPLATE = function POPUP_TEMPLATE(state, data) {\n  return \"<span style=\\\"color: white; font-weight: 900; text-shadow: 0 0 1px #000, 1px 1px 1px #000;\\\">\".concat(state.properties.name, \": \").concat(data['Electoral Votes'], \"</span>\");\n};\n\n_c = POPUP_TEMPLATE;\n\nvar Container = function Container(_ref) {\n  _s();\n\n  var data = _ref.data;\n  var ref = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])(null);\n  if (data === undefined) return null;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: Object.entries(data).map(function (_ref2) {\n      var _ref3 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref2, 2),\n          stateName = _ref3[0],\n          datum = _ref3[1];\n\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        id: stateName,\n        className: \"State\",\n        style: {\n          background: _constants__WEBPACK_IMPORTED_MODULE_4__[\"PossibleFills\"][datum.fillKey]\n        },\n        children: stateName\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 7\n      }, _this);\n    })\n  }, void 0, false);\n};\n\n_s(Container, \"QMBuJFIdzLIeqBcFwhMf246mjOM=\");\n\n_c2 = Container;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Container);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"POPUP_TEMPLATE\");\n$RefreshReg$(_c2, \"Container\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL1N0YXRlcy5qcz85OTg0Il0sIm5hbWVzIjpbIlBPUFVQX1RFTVBMQVRFIiwic3RhdGUiLCJkYXRhIiwicHJvcGVydGllcyIsIm5hbWUiLCJDb250YWluZXIiLCJyZWYiLCJ1c2VSZWYiLCJ1bmRlZmluZWQiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwic3RhdGVOYW1lIiwiZGF0dW0iLCJiYWNrZ3JvdW5kIiwiUG9zc2libGVGaWxscyIsImZpbGxLZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsS0FBRCxFQUFRQyxJQUFSO0FBQUEsZ0hBQStHRCxLQUFLLENBQUNFLFVBQU4sQ0FBaUJDLElBQWhJLGVBQXlJRixJQUFJLENBQUMsaUJBQUQsQ0FBN0k7QUFBQSxDQUF2Qjs7S0FBTUYsYzs7QUFFTixJQUFNSyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFjO0FBQUE7O0FBQUEsTUFBWEgsSUFBVyxRQUFYQSxJQUFXO0FBQzlCLE1BQU1JLEdBQUcsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQWxCO0FBRUEsTUFBSUwsSUFBSSxLQUFLTSxTQUFiLEVBQXdCLE9BQU8sSUFBUDtBQUN4QixzQkFBTztBQUFBLGNBQ0pDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlUixJQUFmLEVBQXFCUyxHQUFyQixDQUF5QjtBQUFBO0FBQUEsVUFBRUMsU0FBRjtBQUFBLFVBQWFDLEtBQWI7O0FBQUEsMEJBQ3hCO0FBQUssVUFBRSxFQUFFRCxTQUFUO0FBQW9CLGlCQUFTLEVBQUMsT0FBOUI7QUFBc0MsYUFBSyxFQUFFO0FBQUVFLG9CQUFVLEVBQUVDLHdEQUFhLENBQUNGLEtBQUssQ0FBQ0csT0FBUDtBQUEzQixTQUE3QztBQUFBLGtCQUNHSjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEd0I7QUFBQSxLQUF6QjtBQURJLG1CQUFQO0FBT0QsQ0FYRDs7R0FBTVAsUzs7TUFBQUEsUztBQWFTQSx3RUFBZiIsImZpbGUiOiIuL2xpYi9TdGF0ZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5pbXBvcnQgUmVhY3QsIHsgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQb3NzaWJsZUZpbGxzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jb25zdCBQT1BVUF9URU1QTEFURSA9IChzdGF0ZSwgZGF0YSkgPT4gYDxzcGFuIHN0eWxlPVwiY29sb3I6IHdoaXRlOyBmb250LXdlaWdodDogOTAwOyB0ZXh0LXNoYWRvdzogMCAwIDFweCAjMDAwLCAxcHggMXB4IDFweCAjMDAwO1wiPiR7c3RhdGUucHJvcGVydGllcy5uYW1lfTogJHtkYXRhWydFbGVjdG9yYWwgVm90ZXMnXX08L3NwYW4+YDtcblxuY29uc3QgQ29udGFpbmVyID0gKHsgZGF0YSB9KSA9PiB7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKVxuXG4gIGlmIChkYXRhID09PSB1bmRlZmluZWQpIHJldHVybiBudWxsXG4gIHJldHVybiA8PlxuICAgIHtPYmplY3QuZW50cmllcyhkYXRhKS5tYXAoKFtzdGF0ZU5hbWUsIGRhdHVtXSkgPT4gKFxuICAgICAgPGRpdiBpZD17c3RhdGVOYW1lfSBjbGFzc05hbWU9XCJTdGF0ZVwiIHN0eWxlPXt7IGJhY2tncm91bmQ6IFBvc3NpYmxlRmlsbHNbZGF0dW0uZmlsbEtleV0gfX0+XG4gICAgICAgIHtzdGF0ZU5hbWV9XG4gICAgICA8L2Rpdj5cbiAgICApKX1cbiAgPC8+XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/States.js\n");

/***/ }),

/***/ "./node_modules/datamaps/dist/datamaps.all.js":
false,

/***/ "./node_modules/datamaps/node_modules/d3/d3.js":
false,

/***/ "./node_modules/topojson/build/topojson.js":
false

})