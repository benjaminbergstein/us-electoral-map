webpackHotUpdate_N_E("pages/index",{

/***/ "./lib/Select.js":
/*!***********************!*\
  !*** ./lib/Select.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n\n\nvar _jsxFileName = \"/app/lib/Select.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar Select = function Select(_ref) {\n  _s();\n\n  var value = _ref.value,\n      _onChange = _ref.onChange,\n      options = _ref.options;\n  var selectRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    style: {\n      position: 'relative',\n      border: '1px solid lightgray',\n      padding: '10px',\n      borderRadius: '5px',\n      display: 'flex',\n      alignItems: 'center'\n    },\n    children: [value, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__[\"FaChevronDown\"], {\n      style: {\n        marginLeft: '10px'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"select\", {\n      defaultValue: value,\n      ref: selectRef,\n      onChange: function onChange() {\n        _onChange(selectRef.current.value);\n      },\n      style: {\n        opacity: 0,\n        position: 'absolute',\n        top: 0,\n        left: '10px',\n        width: '100%',\n        height: '100%'\n      },\n      children: options.map(function (option) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          defaultValue: value,\n          children: option\n        }, option, false, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 9\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 10\n  }, _this);\n};\n\n_s(Select, \"ZWT7gh/OJFBnpMPAzZjffIz5LQw=\");\n\n_c = Select;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Select);\n\nvar _c;\n\n$RefreshReg$(_c, \"Select\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL1NlbGVjdC5qcz8wNGViIl0sIm5hbWVzIjpbIlNlbGVjdCIsInZhbHVlIiwib25DaGFuZ2UiLCJvcHRpb25zIiwic2VsZWN0UmVmIiwidXNlUmVmIiwicG9zaXRpb24iLCJib3JkZXIiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJtYXJnaW5MZWZ0IiwiY3VycmVudCIsIm9wYWNpdHkiLCJ0b3AiLCJsZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJtYXAiLCJvcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBa0M7QUFBQTs7QUFBQSxNQUEvQkMsS0FBK0IsUUFBL0JBLEtBQStCO0FBQUEsTUFBeEJDLFNBQXdCLFFBQXhCQSxRQUF3QjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUMvQyxNQUFNQyxTQUFTLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUF4QjtBQUVBLHNCQUFPO0FBQUssU0FBSyxFQUFFO0FBQUVDLGNBQVEsRUFBRSxVQUFaO0FBQXdCQyxZQUFNLEVBQUUscUJBQWhDO0FBQXVEQyxhQUFPLEVBQUUsTUFBaEU7QUFBd0VDLGtCQUFZLEVBQUUsS0FBdEY7QUFBNkZDLGFBQU8sRUFBRSxNQUF0RztBQUE4R0MsZ0JBQVUsRUFBRTtBQUExSCxLQUFaO0FBQUEsZUFDSlYsS0FESSxlQUVMLHFFQUFDLDREQUFEO0FBQWUsV0FBSyxFQUFFO0FBQUVXLGtCQUFVLEVBQUU7QUFBZDtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkssZUFHTDtBQUNFLGtCQUFZLEVBQUVYLEtBRGhCO0FBRUUsU0FBRyxFQUFFRyxTQUZQO0FBR0UsY0FBUSxFQUFFLG9CQUFNO0FBQUVGLGlCQUFRLENBQUNFLFNBQVMsQ0FBQ1MsT0FBVixDQUFrQlosS0FBbkIsQ0FBUjtBQUFtQyxPQUh2RDtBQUlFLFdBQUssRUFBRTtBQUFFYSxlQUFPLEVBQUUsQ0FBWDtBQUFjUixnQkFBUSxFQUFFLFVBQXhCO0FBQW9DUyxXQUFHLEVBQUUsQ0FBekM7QUFBNENDLFlBQUksRUFBRSxNQUFsRDtBQUEwREMsYUFBSyxFQUFFLE1BQWpFO0FBQXlFQyxjQUFNLEVBQUU7QUFBakYsT0FKVDtBQUFBLGdCQU1HZixPQUFPLENBQUNnQixHQUFSLENBQVksVUFBQ0MsTUFBRDtBQUFBLDRCQUNYO0FBQXFCLHNCQUFZLEVBQUVuQixLQUFuQztBQUFBLG9CQUEyQ21CO0FBQTNDLFdBQWFBLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEVztBQUFBLE9BQVo7QUFOSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFjRCxDQWpCRDs7R0FBTXBCLE07O0tBQUFBLE07QUFtQlNBLHFFQUFmIiwiZmlsZSI6Ii4vbGliL1NlbGVjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEZhQ2hldnJvbkRvd24gfSBmcm9tICdyZWFjdC1pY29ucy9mYSdcblxuY29uc3QgU2VsZWN0ID0gKHsgdmFsdWUsIG9uQ2hhbmdlLCBvcHRpb25zIH0pID0+IHtcbiAgY29uc3Qgc2VsZWN0UmVmID0gdXNlUmVmKG51bGwpXG5cbiAgcmV0dXJuIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGJvcmRlcjogJzFweCBzb2xpZCBsaWdodGdyYXknLCBwYWRkaW5nOiAnMTBweCcsIGJvcmRlclJhZGl1czogJzVweCcsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XG4gICAge3ZhbHVlfVxuICAgIDxGYUNoZXZyb25Eb3duIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxMHB4JyB9fSAvPlxuICAgIDxzZWxlY3RcbiAgICAgIGRlZmF1bHRWYWx1ZT17dmFsdWV9XG4gICAgICByZWY9e3NlbGVjdFJlZn1cbiAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7IG9uQ2hhbmdlKHNlbGVjdFJlZi5jdXJyZW50LnZhbHVlKSB9fVxuICAgICAgc3R5bGU9e3sgb3BhY2l0eTogMCwgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogMCwgbGVmdDogJzEwcHgnLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJyB9fVxuICAgID5cbiAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXG4gICAgICAgIDxvcHRpb24ga2V5PXtvcHRpb259IGRlZmF1bHRWYWx1ZT17dmFsdWV9PntvcHRpb259PC9vcHRpb24+XG4gICAgICApKX1cbiAgICA8L3NlbGVjdD5cbiAgPC9kaXY+XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/Select.js\n");

/***/ })

})