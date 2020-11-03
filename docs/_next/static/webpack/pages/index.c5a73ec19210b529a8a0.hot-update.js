webpackHotUpdate_N_E("pages/index",{

/***/ "./lib/States.js":
/*!***********************!*\
  !*** ./lib/States.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _DataContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DataContext */ \"./lib/DataContext.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ \"./lib/constants.js\");\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Box */ \"./lib/Box.js\");\n\n\n\n\nvar _jsxFileName = \"/app/lib/States.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Container = function Container() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_DataContext__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n      data = _useContext.data,\n      updateUserSelection = _useContext.updateUserSelection;\n\n  if (data === undefined) return null;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    display: \"flex\",\n    flexDirection: \"row\",\n    style: {\n      overflowX: 'scroll'\n    },\n    width: \"100vw\",\n    children: Object.entries(data).map(function (_ref2) {\n      var _ref3 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref2, 2),\n          stateName = _ref3[0],\n          _ref = _ref3[1];\n\n      var fillKey = _ref.fillKey,\n          data = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, [\"fillKey\"]);\n\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        flexBasis: \"\".concat(data['Electoral Votes'] * 7, \"px\"),\n        flexShrink: 0,\n        flexGrow: 1,\n        onClick: function onClick() {\n          updateUserSelection(stateName, fillKey);\n        },\n        id: stateName,\n        className: \"State\",\n        style: {\n          textAlign: 'center',\n          cursor: 'pointer',\n          borderRight: '1px solid slategray',\n          background: _constants__WEBPACK_IMPORTED_MODULE_6__[\"PossibleFills\"][fillKey],\n          color: 'white',\n          padding: '10px'\n        },\n        children: stateName\n      }, stateName, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 7\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 10\n  }, _this);\n};\n\n_s(Container, \"cnIokx41hXa0qW61oaPYTPdtx9E=\");\n\n_c = Container;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Container);\n\nvar _c;\n\n$RefreshReg$(_c, \"Container\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL1N0YXRlcy5qcz85OTg0Il0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInVzZUNvbnRleHQiLCJEYXRhQ29udGV4dCIsImRhdGEiLCJ1cGRhdGVVc2VyU2VsZWN0aW9uIiwidW5kZWZpbmVkIiwib3ZlcmZsb3dYIiwiT2JqZWN0IiwiZW50cmllcyIsIm1hcCIsInN0YXRlTmFtZSIsImZpbGxLZXkiLCJ0ZXh0QWxpZ24iLCJjdXJzb3IiLCJib3JkZXJSaWdodCIsImJhY2tncm91bmQiLCJQb3NzaWJsZUZpbGxzIiwiY29sb3IiLCJwYWRkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLG9CQUNnQkMsd0RBQVUsQ0FBQ0Msb0RBQUQsQ0FEMUI7QUFBQSxNQUNkQyxJQURjLGVBQ2RBLElBRGM7QUFBQSxNQUNSQyxtQkFEUSxlQUNSQSxtQkFEUTs7QUFHdEIsTUFBSUQsSUFBSSxLQUFLRSxTQUFiLEVBQXdCLE9BQU8sSUFBUDtBQUV4QixzQkFBTyxxRUFBQyw0Q0FBRDtBQUNMLFdBQU8sRUFBQyxNQURIO0FBRUwsaUJBQWEsRUFBQyxLQUZUO0FBR0wsU0FBSyxFQUFFO0FBQUVDLGVBQVMsRUFBRTtBQUFiLEtBSEY7QUFJTCxTQUFLLEVBQUMsT0FKRDtBQUFBLGNBTUpDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlTCxJQUFmLEVBQXFCTSxHQUFyQixDQUF5QjtBQUFBO0FBQUEsVUFBRUMsU0FBRjtBQUFBOztBQUFBLFVBQWVDLE9BQWYsUUFBZUEsT0FBZjtBQUFBLFVBQTJCUixJQUEzQjs7QUFBQSwwQkFDeEIscUVBQUMsNENBQUQ7QUFDRSxpQkFBUyxZQUFLQSxJQUFJLENBQUMsaUJBQUQsQ0FBSixHQUF3QixDQUE3QixPQURYO0FBRUUsa0JBQVUsRUFBRSxDQUZkO0FBR0UsZ0JBQVEsRUFBRSxDQUhaO0FBS0UsZUFBTyxFQUFFLG1CQUFNO0FBQUVDLDZCQUFtQixDQUFDTSxTQUFELEVBQVlDLE9BQVosQ0FBbkI7QUFBeUMsU0FMNUQ7QUFNRSxVQUFFLEVBQUVELFNBTk47QUFPRSxpQkFBUyxFQUFDLE9BUFo7QUFRRSxhQUFLLEVBQUU7QUFDTEUsbUJBQVMsRUFBRSxRQUROO0FBRUxDLGdCQUFNLEVBQUUsU0FGSDtBQUdMQyxxQkFBVyxFQUFFLHFCQUhSO0FBSUxDLG9CQUFVLEVBQUVDLHdEQUFhLENBQUNMLE9BQUQsQ0FKcEI7QUFLTE0sZUFBSyxFQUFFLE9BTEY7QUFNTEMsaUJBQU8sRUFBRTtBQU5KLFNBUlQ7QUFBQSxrQkFpQkdSO0FBakJILFNBSU9BLFNBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUR3QjtBQUFBLEtBQXpCO0FBTkk7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBNEJELENBakNEOztHQUFNVixTOztLQUFBQSxTO0FBbUNTQSx3RUFBZiIsImZpbGUiOiIuL2xpYi9TdGF0ZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRGF0YUNvbnRleHQgZnJvbSAnLi9EYXRhQ29udGV4dCdcbmltcG9ydCB7IFBvc3NpYmxlRmlsbHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmltcG9ydCBCb3ggZnJvbSAnLi9Cb3gnO1xuXG5jb25zdCBDb250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgZGF0YSwgdXBkYXRlVXNlclNlbGVjdGlvbiB9ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dClcblxuICBpZiAoZGF0YSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbFxuXG4gIHJldHVybiA8Qm94XG4gICAgZGlzcGxheT0nZmxleCdcbiAgICBmbGV4RGlyZWN0aW9uPSdyb3cnXG4gICAgc3R5bGU9e3sgb3ZlcmZsb3dYOiAnc2Nyb2xsJyB9fVxuICAgIHdpZHRoPScxMDB2dydcbiAgPlxuICAgIHtPYmplY3QuZW50cmllcyhkYXRhKS5tYXAoKFtzdGF0ZU5hbWUsIHsgZmlsbEtleSwgLi4uZGF0YSB9XSkgPT4gKFxuICAgICAgPEJveFxuICAgICAgICBmbGV4QmFzaXM9e2Ake2RhdGFbJ0VsZWN0b3JhbCBWb3RlcyddKjd9cHhgfVxuICAgICAgICBmbGV4U2hyaW5rPXswfVxuICAgICAgICBmbGV4R3Jvdz17MX1cbiAgICAgICAga2V5PXtzdGF0ZU5hbWV9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHsgdXBkYXRlVXNlclNlbGVjdGlvbihzdGF0ZU5hbWUsIGZpbGxLZXkpIH19XG4gICAgICAgIGlkPXtzdGF0ZU5hbWV9XG4gICAgICAgIGNsYXNzTmFtZT1cIlN0YXRlXCJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgIGJvcmRlclJpZ2h0OiAnMXB4IHNvbGlkIHNsYXRlZ3JheScsXG4gICAgICAgICAgYmFja2dyb3VuZDogUG9zc2libGVGaWxsc1tmaWxsS2V5XSxcbiAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICBwYWRkaW5nOiAnMTBweCcsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtzdGF0ZU5hbWV9XG4gICAgICA8L0JveD5cbiAgICApKX1cbiAgPC9Cb3g+XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/States.js\n");

/***/ })

})