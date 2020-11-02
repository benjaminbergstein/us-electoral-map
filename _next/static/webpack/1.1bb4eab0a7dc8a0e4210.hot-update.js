webpackHotUpdate_N_E(1,{

/***/ "./lib/Map.js":
/*!********************!*\
  !*** ./lib/Map.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _DataContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DataContext */ \"./lib/DataContext.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ \"./lib/constants.js\");\n/* harmony import */ var datamaps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! datamaps */ \"./node_modules/datamaps/dist/datamaps.all.js\");\n/* harmony import */ var datamaps__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(datamaps__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/app/lib/Map.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar POPUP_TEMPLATE = function POPUP_TEMPLATE(state, data) {\n  return \"<span style=\\\"color: white; font-weight: 900; text-shadow: 0 0 1px #000, 1px 1px 1px #000;\\\">\".concat(state.properties.name, \": \").concat(data['Electoral Votes'], \"</span>\");\n};\n\n_c = POPUP_TEMPLATE;\n\nvar initalizeMap = function initalizeMap(node, data) {\n  if (window !== undefined) {\n    var map = new datamaps__WEBPACK_IMPORTED_MODULE_5___default.a({\n      element: node,\n      scope: 'usa',\n      data: data,\n      fills: _constants__WEBPACK_IMPORTED_MODULE_4__[\"PossibleFills\"],\n      geographyConfig: {\n        highlightOnHover: false,\n        popupTemplate: POPUP_TEMPLATE\n      } // done: (datamap) => {\n      //   const svg = datamap.svg;\n      // svg.selectAll('.datamaps-subunit').on('click', function(data) {\n      //   var stateView;\n      //   stateView = new StateView(application, data.id);\n      //   stateView.toggle();\n      // });\n      // }\n\n    });\n    return map;\n  }\n};\n\nvar Container = function Container() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_DataContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n      data = _useContext.data;\n\n  var ref = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useLayoutEffect\"])(function () {\n    if (data === undefined) return;\n    if (ref.current === null) return;\n    initalizeMap(ref.current, data);\n  }, [data]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    style: {\n      height: '100%'\n    },\n    ref: ref\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 10\n  }, _this);\n};\n\n_s(Container, \"uBpYC+I5Cy65lU2I3ZMudnJ5pR8=\");\n\n_c2 = Container;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Container);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"POPUP_TEMPLATE\");\n$RefreshReg$(_c2, \"Container\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL01hcC5qcz9jNTkzIl0sIm5hbWVzIjpbIlBPUFVQX1RFTVBMQVRFIiwic3RhdGUiLCJkYXRhIiwicHJvcGVydGllcyIsIm5hbWUiLCJpbml0YWxpemVNYXAiLCJub2RlIiwid2luZG93IiwidW5kZWZpbmVkIiwibWFwIiwiRGF0YW1hcCIsImVsZW1lbnQiLCJzY29wZSIsImZpbGxzIiwiUG9zc2libGVGaWxscyIsImdlb2dyYXBoeUNvbmZpZyIsImhpZ2hsaWdodE9uSG92ZXIiLCJwb3B1cFRlbXBsYXRlIiwiQ29udGFpbmVyIiwidXNlQ29udGV4dCIsIkRhdGFDb250ZXh0IiwicmVmIiwidXNlUmVmIiwidXNlTGF5b3V0RWZmZWN0IiwiY3VycmVudCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsS0FBRCxFQUFRQyxJQUFSO0FBQUEsZ0hBQStHRCxLQUFLLENBQUNFLFVBQU4sQ0FBaUJDLElBQWhJLGVBQXlJRixJQUFJLENBQUMsaUJBQUQsQ0FBN0k7QUFBQSxDQUF2Qjs7S0FBTUYsYzs7QUFFTixJQUFNSyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxJQUFELEVBQU9KLElBQVAsRUFBZ0I7QUFDbkMsTUFBSUssTUFBTSxLQUFLQyxTQUFmLEVBQTBCO0FBQ3hCLFFBQU1DLEdBQUcsR0FBRyxJQUFJQywrQ0FBSixDQUFZO0FBQ3RCQyxhQUFPLEVBQUVMLElBRGE7QUFFdEJNLFdBQUssRUFBRSxLQUZlO0FBR3RCVixVQUFJLEVBQUpBLElBSHNCO0FBSXRCVyxXQUFLLEVBQUVDLHdEQUplO0FBS3RCQyxxQkFBZSxFQUFFO0FBQ2ZDLHdCQUFnQixFQUFFLEtBREg7QUFFZkMscUJBQWEsRUFBRWpCO0FBRkEsT0FMSyxDQVN0QjtBQUNBO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNGOztBQWhCc0IsS0FBWixDQUFaO0FBbUJBLFdBQU9TLEdBQVA7QUFDRDtBQUNGLENBdkJEOztBQXdCQSxJQUFNUyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQUEsb0JBQ0xDLHdEQUFVLENBQUNDLG9EQUFELENBREw7QUFBQSxNQUNkbEIsSUFEYyxlQUNkQSxJQURjOztBQUV0QixNQUFNbUIsR0FBRyxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBbEI7QUFFQUMsK0RBQWUsQ0FBQyxZQUFNO0FBQ3BCLFFBQUlyQixJQUFJLEtBQUtNLFNBQWIsRUFBd0I7QUFDeEIsUUFBSWEsR0FBRyxDQUFDRyxPQUFKLEtBQWdCLElBQXBCLEVBQTBCO0FBRTFCbkIsZ0JBQVksQ0FBQ2dCLEdBQUcsQ0FBQ0csT0FBTCxFQUFjdEIsSUFBZCxDQUFaO0FBQ0QsR0FMYyxFQUtaLENBQUNBLElBQUQsQ0FMWSxDQUFmO0FBT0Esc0JBQU87QUFBSyxTQUFLLEVBQUU7QUFBRXVCLFlBQU0sRUFBRTtBQUFWLEtBQVo7QUFBZ0MsT0FBRyxFQUFFSjtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQVpEOztHQUFNSCxTOztNQUFBQSxTO0FBY1NBLHdFQUFmIiwiZmlsZSI6Ii4vbGliL01hcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VMYXlvdXRFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEYXRhQ29udGV4dCBmcm9tICcuL0RhdGFDb250ZXh0J1xuaW1wb3J0IHsgUG9zc2libGVGaWxscyB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuaW1wb3J0IERhdGFtYXAgZnJvbSAnZGF0YW1hcHMnXG5cbmNvbnN0IFBPUFVQX1RFTVBMQVRFID0gKHN0YXRlLCBkYXRhKSA9PiBgPHNwYW4gc3R5bGU9XCJjb2xvcjogd2hpdGU7IGZvbnQtd2VpZ2h0OiA5MDA7IHRleHQtc2hhZG93OiAwIDAgMXB4ICMwMDAsIDFweCAxcHggMXB4ICMwMDA7XCI+JHtzdGF0ZS5wcm9wZXJ0aWVzLm5hbWV9OiAke2RhdGFbJ0VsZWN0b3JhbCBWb3RlcyddfTwvc3Bhbj5gO1xuXG5jb25zdCBpbml0YWxpemVNYXAgPSAobm9kZSwgZGF0YSkgPT4ge1xuICBpZiAod2luZG93ICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBtYXAgPSBuZXcgRGF0YW1hcCh7XG4gICAgICBlbGVtZW50OiBub2RlLFxuICAgICAgc2NvcGU6ICd1c2EnLFxuICAgICAgZGF0YSxcbiAgICAgIGZpbGxzOiBQb3NzaWJsZUZpbGxzLFxuICAgICAgZ2VvZ3JhcGh5Q29uZmlnOiB7XG4gICAgICAgIGhpZ2hsaWdodE9uSG92ZXI6IGZhbHNlLFxuICAgICAgICBwb3B1cFRlbXBsYXRlOiBQT1BVUF9URU1QTEFURSxcbiAgICAgIH0sXG4gICAgICAvLyBkb25lOiAoZGF0YW1hcCkgPT4ge1xuICAgICAgLy8gICBjb25zdCBzdmcgPSBkYXRhbWFwLnN2ZztcbiAgICAgICAgLy8gc3ZnLnNlbGVjdEFsbCgnLmRhdGFtYXBzLXN1YnVuaXQnKS5vbignY2xpY2snLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIC8vICAgdmFyIHN0YXRlVmlldztcbiAgICAgICAgLy8gICBzdGF0ZVZpZXcgPSBuZXcgU3RhdGVWaWV3KGFwcGxpY2F0aW9uLCBkYXRhLmlkKTtcbiAgICAgICAgLy8gICBzdGF0ZVZpZXcudG9nZ2xlKCk7XG4gICAgICAgIC8vIH0pO1xuICAgICAgLy8gfVxuICAgIH0pXG5cbiAgICByZXR1cm4gbWFwXG4gIH1cbn1cbmNvbnN0IENvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KVxuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbClcblxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhID09PSB1bmRlZmluZWQpIHJldHVyblxuICAgIGlmIChyZWYuY3VycmVudCA9PT0gbnVsbCkgcmV0dXJuXG5cbiAgICBpbml0YWxpemVNYXAocmVmLmN1cnJlbnQsIGRhdGEpXG4gIH0sIFtkYXRhXSlcblxuICByZXR1cm4gPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJyB9fSByZWY9e3JlZn0+PC9kaXY+XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/Map.js\n");

/***/ })

})