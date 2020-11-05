webpackHotUpdate_N_E(1,{

/***/ "./lib/Map.js":
/*!********************!*\
  !*** ./lib/Map.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_zoom_pan_pinch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-zoom-pan-pinch */ \"./node_modules/react-zoom-pan-pinch/dist/index.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _DataContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DataContext */ \"./lib/DataContext.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ \"./lib/constants.js\");\n/* harmony import */ var datamaps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! datamaps */ \"./node_modules/datamaps/dist/datamaps.all.js\");\n/* harmony import */ var datamaps__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(datamaps__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _jsxFileName = \"/app/lib/Map.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar POPUP_TEMPLATE = function POPUP_TEMPLATE(state, data) {\n  return \"<span style=\\\"position: relative; top: 150px; color: white; font-weight: 900; text-shadow: 0 0 1px #000, 1px 1px 1px #000;\\\">\".concat(state.properties.name, \": \").concat(data['Electoral Votes'], \"</span>\");\n};\n\n_c = POPUP_TEMPLATE;\n\nvar initalizeMap = function initalizeMap(node, data) {\n  if (window !== undefined) {\n    var map = new datamaps__WEBPACK_IMPORTED_MODULE_7___default.a({\n      element: node,\n      scope: 'usa',\n      data: data,\n      fills: _constants__WEBPACK_IMPORTED_MODULE_6__[\"PossibleFills\"],\n      geographyConfig: {\n        highlightOnHover: false,\n        popupTemplate: POPUP_TEMPLATE\n      }\n    });\n    return map;\n  }\n};\n\nvar Container = function Container() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_DataContext__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n      data = _useContext.data,\n      windowSize = _useContext.windowSize,\n      updateUserSelection = _useContext.updateUserSelection;\n\n  var ref = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(null);\n  var mapRef = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    if (data === undefined) return;\n    if (ref.current === null) return;\n    ref.current.innerHTML = '';\n    mapRef.current = initalizeMap(ref.current, data);\n    mapRef.current.svg.selectAll('.datamaps-subunit').on('click', function (data) {\n      updateUserSelection(data.id);\n    });\n  }, [data].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(windowSize)));\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    style: {\n      height: '100%'\n    },\n    ref: ref\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 10\n  }, _this);\n};\n\n_s(Container, \"vRhCfOy3Bw9U4AeNRsmjqyzFNOc=\");\n\n_c2 = Container;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Container);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"POPUP_TEMPLATE\");\n$RefreshReg$(_c2, \"Container\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL01hcC5qcz9jNTkzIl0sIm5hbWVzIjpbIlBPUFVQX1RFTVBMQVRFIiwic3RhdGUiLCJkYXRhIiwicHJvcGVydGllcyIsIm5hbWUiLCJpbml0YWxpemVNYXAiLCJub2RlIiwid2luZG93IiwidW5kZWZpbmVkIiwibWFwIiwiRGF0YW1hcCIsImVsZW1lbnQiLCJzY29wZSIsImZpbGxzIiwiUG9zc2libGVGaWxscyIsImdlb2dyYXBoeUNvbmZpZyIsImhpZ2hsaWdodE9uSG92ZXIiLCJwb3B1cFRlbXBsYXRlIiwiQ29udGFpbmVyIiwidXNlQ29udGV4dCIsIkRhdGFDb250ZXh0Iiwid2luZG93U2l6ZSIsInVwZGF0ZVVzZXJTZWxlY3Rpb24iLCJyZWYiLCJ1c2VSZWYiLCJtYXBSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwiaW5uZXJIVE1MIiwic3ZnIiwic2VsZWN0QWxsIiwib24iLCJpZCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQVFDLElBQVI7QUFBQSxnSkFBK0lELEtBQUssQ0FBQ0UsVUFBTixDQUFpQkMsSUFBaEssZUFBeUtGLElBQUksQ0FBQyxpQkFBRCxDQUE3SztBQUFBLENBQXZCOztLQUFNRixjOztBQUVOLElBQU1LLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLElBQUQsRUFBT0osSUFBUCxFQUFnQjtBQUNuQyxNQUFJSyxNQUFNLEtBQUtDLFNBQWYsRUFBMEI7QUFDeEIsUUFBTUMsR0FBRyxHQUFHLElBQUlDLCtDQUFKLENBQVk7QUFDdEJDLGFBQU8sRUFBRUwsSUFEYTtBQUV0Qk0sV0FBSyxFQUFFLEtBRmU7QUFHdEJWLFVBQUksRUFBSkEsSUFIc0I7QUFJdEJXLFdBQUssRUFBRUMsd0RBSmU7QUFLdEJDLHFCQUFlLEVBQUU7QUFDZkMsd0JBQWdCLEVBQUUsS0FESDtBQUVmQyxxQkFBYSxFQUFFakI7QUFGQTtBQUxLLEtBQVosQ0FBWjtBQVdBLFdBQU9TLEdBQVA7QUFDRDtBQUNGLENBZkQ7O0FBaUJBLElBQU1TLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSxvQkFDNEJDLHdEQUFVLENBQUNDLG9EQUFELENBRHRDO0FBQUEsTUFDZGxCLElBRGMsZUFDZEEsSUFEYztBQUFBLE1BQ1JtQixVQURRLGVBQ1JBLFVBRFE7QUFBQSxNQUNJQyxtQkFESixlQUNJQSxtQkFESjs7QUFFdEIsTUFBTUMsR0FBRyxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBbEI7QUFDQSxNQUFNQyxNQUFNLEdBQUdELG9EQUFNLENBQUMsSUFBRCxDQUFyQjtBQUVBRSx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJeEIsSUFBSSxLQUFLTSxTQUFiLEVBQXdCO0FBQ3hCLFFBQUllLEdBQUcsQ0FBQ0ksT0FBSixLQUFnQixJQUFwQixFQUEwQjtBQUUxQkosT0FBRyxDQUFDSSxPQUFKLENBQVlDLFNBQVosR0FBd0IsRUFBeEI7QUFDQUgsVUFBTSxDQUFDRSxPQUFQLEdBQWlCdEIsWUFBWSxDQUFDa0IsR0FBRyxDQUFDSSxPQUFMLEVBQWN6QixJQUFkLENBQTdCO0FBRUF1QixVQUFNLENBQUNFLE9BQVAsQ0FBZUUsR0FBZixDQUFtQkMsU0FBbkIsQ0FBNkIsbUJBQTdCLEVBQWtEQyxFQUFsRCxDQUFxRCxPQUFyRCxFQUE4RCxVQUFTN0IsSUFBVCxFQUFlO0FBQzNFb0IseUJBQW1CLENBQUNwQixJQUFJLENBQUM4QixFQUFOLENBQW5CO0FBQ0QsS0FGRDtBQUdELEdBVlEsR0FVTDlCLElBVkssc0dBVUltQixVQVZKLEdBQVQ7QUFZQSxzQkFBTztBQUFLLFNBQUssRUFBRTtBQUFFWSxZQUFNLEVBQUU7QUFBVixLQUFaO0FBQWdDLE9BQUcsRUFBRVY7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0QsQ0FsQkQ7O0dBQU1MLFM7O01BQUFBLFM7QUFvQlNBLHdFQUFmIiwiZmlsZSI6Ii4vbGliL01hcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcbmltcG9ydCB7IFRyYW5zZm9ybVdyYXBwZXIsIFRyYW5zZm9ybUNvbXBvbmVudCB9IGZyb20gXCJyZWFjdC16b29tLXBhbi1waW5jaFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IERhdGFDb250ZXh0IGZyb20gJy4vRGF0YUNvbnRleHQnXG5pbXBvcnQgeyBQb3NzaWJsZUZpbGxzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5pbXBvcnQgRGF0YW1hcCBmcm9tICdkYXRhbWFwcydcblxuY29uc3QgUE9QVVBfVEVNUExBVEUgPSAoc3RhdGUsIGRhdGEpID0+IGA8c3BhbiBzdHlsZT1cInBvc2l0aW9uOiByZWxhdGl2ZTsgdG9wOiAxNTBweDsgY29sb3I6IHdoaXRlOyBmb250LXdlaWdodDogOTAwOyB0ZXh0LXNoYWRvdzogMCAwIDFweCAjMDAwLCAxcHggMXB4IDFweCAjMDAwO1wiPiR7c3RhdGUucHJvcGVydGllcy5uYW1lfTogJHtkYXRhWydFbGVjdG9yYWwgVm90ZXMnXX08L3NwYW4+YDtcblxuY29uc3QgaW5pdGFsaXplTWFwID0gKG5vZGUsIGRhdGEpID0+IHtcbiAgaWYgKHdpbmRvdyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgbWFwID0gbmV3IERhdGFtYXAoe1xuICAgICAgZWxlbWVudDogbm9kZSxcbiAgICAgIHNjb3BlOiAndXNhJyxcbiAgICAgIGRhdGEsXG4gICAgICBmaWxsczogUG9zc2libGVGaWxscyxcbiAgICAgIGdlb2dyYXBoeUNvbmZpZzoge1xuICAgICAgICBoaWdobGlnaHRPbkhvdmVyOiBmYWxzZSxcbiAgICAgICAgcG9wdXBUZW1wbGF0ZTogUE9QVVBfVEVNUExBVEUsXG4gICAgICB9LFxuICAgIH0pXG5cbiAgICByZXR1cm4gbWFwXG4gIH1cbn1cblxuY29uc3QgQ29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCB7IGRhdGEsIHdpbmRvd1NpemUsIHVwZGF0ZVVzZXJTZWxlY3Rpb24gfSA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpXG4gIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKVxuICBjb25zdCBtYXBSZWYgPSB1c2VSZWYobnVsbClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhID09PSB1bmRlZmluZWQpIHJldHVyblxuICAgIGlmIChyZWYuY3VycmVudCA9PT0gbnVsbCkgcmV0dXJuXG5cbiAgICByZWYuY3VycmVudC5pbm5lckhUTUwgPSAnJ1xuICAgIG1hcFJlZi5jdXJyZW50ID0gaW5pdGFsaXplTWFwKHJlZi5jdXJyZW50LCBkYXRhKVxuXG4gICAgbWFwUmVmLmN1cnJlbnQuc3ZnLnNlbGVjdEFsbCgnLmRhdGFtYXBzLXN1YnVuaXQnKS5vbignY2xpY2snLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICB1cGRhdGVVc2VyU2VsZWN0aW9uKGRhdGEuaWQpXG4gICAgfSk7XG4gIH0sIFtkYXRhLCAuLi53aW5kb3dTaXplXSlcblxuICByZXR1cm4gPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJyB9fSByZWY9e3JlZn0+PC9kaXY+XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/Map.js\n");

/***/ })

})