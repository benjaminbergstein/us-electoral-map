webpackHotUpdate_N_E("pages/index",{

/***/ "./lib/States.js":
/*!***********************!*\
  !*** ./lib/States.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _DataContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DataContext */ \"./lib/DataContext.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ \"./lib/constants.js\");\n\n\n\n\nvar _jsxFileName = \"/app/lib/States.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Container = function Container() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useContext\"])(_DataContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n      data = _useContext.data,\n      updateUserSelection = _useContext.updateUserSelection;\n\n  if (data === undefined) return null;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: Object.entries(data).map(function (_ref) {\n      var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, 2),\n          stateName = _ref2[0],\n          fillKey = _ref2[1].fillKey;\n\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        onClick: function onClick() {\n          updateUserSelection(stateName, fillKey);\n        },\n        id: stateName,\n        className: \"State\",\n        style: {\n          background: _constants__WEBPACK_IMPORTED_MODULE_5__[\"PossibleFills\"][fillKey]\n        },\n        children: stateName\n      }, stateName, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 7\n      }, _this);\n    })\n  }, void 0, false);\n};\n\n_s(Container, \"cnIokx41hXa0qW61oaPYTPdtx9E=\");\n\n_c = Container;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Container);\n\nvar _c;\n\n$RefreshReg$(_c, \"Container\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL1N0YXRlcy5qcz85OTg0Il0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInVzZUNvbnRleHQiLCJEYXRhQ29udGV4dCIsImRhdGEiLCJ1cGRhdGVVc2VyU2VsZWN0aW9uIiwidW5kZWZpbmVkIiwiT2JqZWN0IiwiZW50cmllcyIsIm1hcCIsInN0YXRlTmFtZSIsImZpbGxLZXkiLCJiYWNrZ3JvdW5kIiwiUG9zc2libGVGaWxscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLG9CQUNnQkMsd0RBQVUsQ0FBQ0Msb0RBQUQsQ0FEMUI7QUFBQSxNQUNkQyxJQURjLGVBQ2RBLElBRGM7QUFBQSxNQUNSQyxtQkFEUSxlQUNSQSxtQkFEUTs7QUFHdEIsTUFBSUQsSUFBSSxLQUFLRSxTQUFiLEVBQXdCLE9BQU8sSUFBUDtBQUV4QixzQkFBTztBQUFBLGNBQ0pDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlSixJQUFmLEVBQXFCSyxHQUFyQixDQUF5QjtBQUFBO0FBQUEsVUFBRUMsU0FBRjtBQUFBLFVBQWVDLE9BQWYsWUFBZUEsT0FBZjs7QUFBQSwwQkFDeEI7QUFFRSxlQUFPLEVBQUUsbUJBQU07QUFBRU4sNkJBQW1CLENBQUNLLFNBQUQsRUFBWUMsT0FBWixDQUFuQjtBQUF5QyxTQUY1RDtBQUdFLFVBQUUsRUFBRUQsU0FITjtBQUlFLGlCQUFTLEVBQUMsT0FKWjtBQUtFLGFBQUssRUFBRTtBQUFFRSxvQkFBVSxFQUFFQyx3REFBYSxDQUFDRixPQUFEO0FBQTNCLFNBTFQ7QUFBQSxrQkFPR0Q7QUFQSCxTQUNPQSxTQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEd0I7QUFBQSxLQUF6QjtBQURJLG1CQUFQO0FBYUQsQ0FsQkQ7O0dBQU1ULFM7O0tBQUFBLFM7QUFvQlNBLHdFQUFmIiwiZmlsZSI6Ii4vbGliL1N0YXRlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VMYXlvdXRFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEYXRhQ29udGV4dCBmcm9tICcuL0RhdGFDb250ZXh0J1xuaW1wb3J0IHsgUG9zc2libGVGaWxscyB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuY29uc3QgQ29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCB7IGRhdGEsIHVwZGF0ZVVzZXJTZWxlY3Rpb24gfSA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpXG5cbiAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGxcblxuICByZXR1cm4gPD5cbiAgICB7T2JqZWN0LmVudHJpZXMoZGF0YSkubWFwKChbc3RhdGVOYW1lLCB7IGZpbGxLZXkgfV0pID0+IChcbiAgICAgIDxkaXZcbiAgICAgICAga2V5PXtzdGF0ZU5hbWV9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHsgdXBkYXRlVXNlclNlbGVjdGlvbihzdGF0ZU5hbWUsIGZpbGxLZXkpIH19XG4gICAgICAgIGlkPXtzdGF0ZU5hbWV9XG4gICAgICAgIGNsYXNzTmFtZT1cIlN0YXRlXCJcbiAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogUG9zc2libGVGaWxsc1tmaWxsS2V5XSB9fVxuICAgICAgPlxuICAgICAgICB7c3RhdGVOYW1lfVxuICAgICAgPC9kaXY+XG4gICAgKSl9XG4gIDwvPlxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/States.js\n");

/***/ })

})