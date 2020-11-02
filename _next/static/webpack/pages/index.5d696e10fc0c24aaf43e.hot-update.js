webpackHotUpdate_N_E("pages/index",{

/***/ "./lib/Map.js":
/*!********************!*\
  !*** ./lib/Map.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ \"./lib/constants.js\");\n/* harmony import */ var datamaps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! datamaps */ \"./node_modules/datamaps/dist/datamaps.all.js\");\n/* harmony import */ var datamaps__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(datamaps__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/app/lib/Map.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar POPUP_TEMPLATE = function POPUP_TEMPLATE(state, data) {\n  return \"<span style=\\\"color: white; font-weight: 900; text-shadow: 0 0 1px #000, 1px 1px 1px #000;\\\">\".concat(state.properties.name, \": \").concat(data['Electoral Votes'], \"</span>\");\n};\n\n_c = POPUP_TEMPLATE;\n\nvar initalizeMap = function initalizeMap(node, data) {\n  if (window !== undefined) {\n    var map = new datamaps__WEBPACK_IMPORTED_MODULE_4___default.a({\n      element: node,\n      scope: 'usa',\n      data: data,\n      fills: _constants__WEBPACK_IMPORTED_MODULE_3__[\"PossibleFills\"],\n      geographyConfig: {\n        highlightOnHover: false,\n        popupTemplate: POPUP_TEMPLATE\n      } // done: (datamap) => {\n      //   const svg = datamap.svg;\n      // svg.selectAll('.datamaps-subunit').on('click', function(data) {\n      //   var stateView;\n      //   stateView = new StateView(application, data.id);\n      //   stateView.toggle();\n      // });\n      // }\n\n    });\n    return map;\n  }\n};\n\nvar Container = function Container(_ref) {\n  _s();\n\n  var data = _ref.data;\n  var ref = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useLayoutEffect\"])(function () {\n    console.log(data);\n    if (data === undefined) return;\n    if (ref.current === null) return;\n    initalizeMap(ref.current, data);\n  }, [data]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    ref: ref,\n    id: \"container\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 10\n  }, _this);\n};\n\n_s(Container, \"JkctLsMDw5W2MbVlMaFRM76c/8g=\");\n\n_c2 = Container;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Container);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"POPUP_TEMPLATE\");\n$RefreshReg$(_c2, \"Container\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL01hcC5qcz9jNTkzIl0sIm5hbWVzIjpbIlBPUFVQX1RFTVBMQVRFIiwic3RhdGUiLCJkYXRhIiwicHJvcGVydGllcyIsIm5hbWUiLCJpbml0YWxpemVNYXAiLCJub2RlIiwid2luZG93IiwidW5kZWZpbmVkIiwibWFwIiwiRGF0YW1hcCIsImVsZW1lbnQiLCJzY29wZSIsImZpbGxzIiwiUG9zc2libGVGaWxscyIsImdlb2dyYXBoeUNvbmZpZyIsImhpZ2hsaWdodE9uSG92ZXIiLCJwb3B1cFRlbXBsYXRlIiwiQ29udGFpbmVyIiwicmVmIiwidXNlUmVmIiwidXNlTGF5b3V0RWZmZWN0IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLEtBQUQsRUFBUUMsSUFBUjtBQUFBLGdIQUErR0QsS0FBSyxDQUFDRSxVQUFOLENBQWlCQyxJQUFoSSxlQUF5SUYsSUFBSSxDQUFDLGlCQUFELENBQTdJO0FBQUEsQ0FBdkI7O0tBQU1GLGM7O0FBRU4sSUFBTUssWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsSUFBRCxFQUFPSixJQUFQLEVBQWdCO0FBQ25DLE1BQUlLLE1BQU0sS0FBS0MsU0FBZixFQUEwQjtBQUN4QixRQUFNQyxHQUFHLEdBQUcsSUFBSUMsK0NBQUosQ0FBWTtBQUN0QkMsYUFBTyxFQUFFTCxJQURhO0FBRXRCTSxXQUFLLEVBQUUsS0FGZTtBQUd0QlYsVUFBSSxFQUFKQSxJQUhzQjtBQUl0QlcsV0FBSyxFQUFFQyx3REFKZTtBQUt0QkMscUJBQWUsRUFBRTtBQUNmQyx3QkFBZ0IsRUFBRSxLQURIO0FBRWZDLHFCQUFhLEVBQUVqQjtBQUZBLE9BTEssQ0FTdEI7QUFDQTtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRjs7QUFoQnNCLEtBQVosQ0FBWjtBQW1CQSxXQUFPUyxHQUFQO0FBQ0Q7QUFDRixDQXZCRDs7QUF3QkEsSUFBTVMsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBYztBQUFBOztBQUFBLE1BQVhoQixJQUFXLFFBQVhBLElBQVc7QUFDOUIsTUFBTWlCLEdBQUcsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQWxCO0FBRUFDLCtEQUFlLENBQUMsWUFBTTtBQUNwQkMsV0FBTyxDQUFDQyxHQUFSLENBQVlyQixJQUFaO0FBQ0EsUUFBSUEsSUFBSSxLQUFLTSxTQUFiLEVBQXdCO0FBQ3hCLFFBQUlXLEdBQUcsQ0FBQ0ssT0FBSixLQUFnQixJQUFwQixFQUEwQjtBQUUxQm5CLGdCQUFZLENBQUNjLEdBQUcsQ0FBQ0ssT0FBTCxFQUFjdEIsSUFBZCxDQUFaO0FBQ0QsR0FOYyxFQU1aLENBQUNBLElBQUQsQ0FOWSxDQUFmO0FBUUEsc0JBQU87QUFBSyxPQUFHLEVBQUVpQixHQUFWO0FBQWUsTUFBRSxFQUFDO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNELENBWkQ7O0dBQU1ELFM7O01BQUFBLFM7QUFjU0Esd0VBQWYiLCJmaWxlIjoiLi9saWIvTWFwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUxheW91dEVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUG9zc2libGVGaWxscyB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuaW1wb3J0IERhdGFtYXAgZnJvbSAnZGF0YW1hcHMnXG5cbmNvbnN0IFBPUFVQX1RFTVBMQVRFID0gKHN0YXRlLCBkYXRhKSA9PiBgPHNwYW4gc3R5bGU9XCJjb2xvcjogd2hpdGU7IGZvbnQtd2VpZ2h0OiA5MDA7IHRleHQtc2hhZG93OiAwIDAgMXB4ICMwMDAsIDFweCAxcHggMXB4ICMwMDA7XCI+JHtzdGF0ZS5wcm9wZXJ0aWVzLm5hbWV9OiAke2RhdGFbJ0VsZWN0b3JhbCBWb3RlcyddfTwvc3Bhbj5gO1xuXG5jb25zdCBpbml0YWxpemVNYXAgPSAobm9kZSwgZGF0YSkgPT4ge1xuICBpZiAod2luZG93ICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBtYXAgPSBuZXcgRGF0YW1hcCh7XG4gICAgICBlbGVtZW50OiBub2RlLFxuICAgICAgc2NvcGU6ICd1c2EnLFxuICAgICAgZGF0YSxcbiAgICAgIGZpbGxzOiBQb3NzaWJsZUZpbGxzLFxuICAgICAgZ2VvZ3JhcGh5Q29uZmlnOiB7XG4gICAgICAgIGhpZ2hsaWdodE9uSG92ZXI6IGZhbHNlLFxuICAgICAgICBwb3B1cFRlbXBsYXRlOiBQT1BVUF9URU1QTEFURSxcbiAgICAgIH0sXG4gICAgICAvLyBkb25lOiAoZGF0YW1hcCkgPT4ge1xuICAgICAgLy8gICBjb25zdCBzdmcgPSBkYXRhbWFwLnN2ZztcbiAgICAgICAgLy8gc3ZnLnNlbGVjdEFsbCgnLmRhdGFtYXBzLXN1YnVuaXQnKS5vbignY2xpY2snLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIC8vICAgdmFyIHN0YXRlVmlldztcbiAgICAgICAgLy8gICBzdGF0ZVZpZXcgPSBuZXcgU3RhdGVWaWV3KGFwcGxpY2F0aW9uLCBkYXRhLmlkKTtcbiAgICAgICAgLy8gICBzdGF0ZVZpZXcudG9nZ2xlKCk7XG4gICAgICAgIC8vIH0pO1xuICAgICAgLy8gfVxuICAgIH0pXG5cbiAgICByZXR1cm4gbWFwXG4gIH1cbn1cbmNvbnN0IENvbnRhaW5lciA9ICh7IGRhdGEgfSkgPT4ge1xuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbClcblxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuXG4gICAgaWYgKHJlZi5jdXJyZW50ID09PSBudWxsKSByZXR1cm5cblxuICAgIGluaXRhbGl6ZU1hcChyZWYuY3VycmVudCwgZGF0YSlcbiAgfSwgW2RhdGFdKVxuXG4gIHJldHVybiA8ZGl2IHJlZj17cmVmfSBpZD1cImNvbnRhaW5lclwiPjwvZGl2PlxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/Map.js\n");

/***/ })

})