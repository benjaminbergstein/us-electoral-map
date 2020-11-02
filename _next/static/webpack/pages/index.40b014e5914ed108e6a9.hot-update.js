webpackHotUpdate_N_E("pages/index",{

/***/ "./lib/Totals.js":
/*!***********************!*\
  !*** ./lib/Totals.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _DataContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataContext */ \"./lib/DataContext.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ \"./lib/constants.js\");\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Box */ \"./lib/Box.js\");\n\n\nvar _jsxFileName = \"/app/lib/Totals.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar PartyTotal = function PartyTotal(_ref) {\n  _s();\n\n  var party = _ref.party;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_DataContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n      totals = _useContext.totals;\n\n  if (!totals) return null;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      id: \"\".concat(party, \"Total\"),\n      style: {\n        color: _constants__WEBPACK_IMPORTED_MODULE_3__[\"partyColors\"][party],\n        padding: '0 2px',\n        textShadow: '0px 1px 1px #444',\n        textAlign: 'center',\n        fontSize: '1.15rem',\n        margin: 0\n      },\n      children: totals[party]\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 10\n  }, _this);\n};\n\n_s(PartyTotal, \"zISMiVDOLdqkdVmoOy9dB0yyb2Q=\");\n\n_c = PartyTotal;\n\nvar Totals = function Totals() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    display: \"flex\",\n    width: \"100%\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(PartyTotal, {\n      party: \"dems\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(PartyTotal, {\n      party: \"neutral\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(PartyTotal, {\n      party: \"GOP\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 3\n  }, _this);\n};\n\n_c2 = Totals;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Totals);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"PartyTotal\");\n$RefreshReg$(_c2, \"Totals\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL1RvdGFscy5qcz8yNGJhIl0sIm5hbWVzIjpbIlBhcnR5VG90YWwiLCJwYXJ0eSIsInVzZUNvbnRleHQiLCJEYXRhQ29udGV4dCIsInRvdGFscyIsImNvbG9yIiwicGFydHlDb2xvcnMiLCJwYWRkaW5nIiwidGV4dFNoYWRvdyIsInRleHRBbGlnbiIsImZvbnRTaXplIiwibWFyZ2luIiwiVG90YWxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQWU7QUFBQTs7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQUEsb0JBQ2JDLHdEQUFVLENBQUNDLG9EQUFELENBREc7QUFBQSxNQUN4QkMsTUFEd0IsZUFDeEJBLE1BRHdCOztBQUdoQyxNQUFJLENBQUNBLE1BQUwsRUFBYSxPQUFPLElBQVA7QUFDYixzQkFBTyxxRUFBQyw0Q0FBRDtBQUFBLDJCQUNMO0FBQ0UsUUFBRSxZQUFLSCxLQUFMLFVBREo7QUFFRSxXQUFLLEVBQUU7QUFDTEksYUFBSyxFQUFFQyxzREFBVyxDQUFDTCxLQUFELENBRGI7QUFFTE0sZUFBTyxFQUFFLE9BRko7QUFHTEMsa0JBQVUsRUFBRSxrQkFIUDtBQUlMQyxpQkFBUyxFQUFFLFFBSk47QUFLTEMsZ0JBQVEsRUFBRSxTQUxMO0FBTUxDLGNBQU0sRUFBRTtBQU5ILE9BRlQ7QUFBQSxnQkFTTVAsTUFBTSxDQUFDSCxLQUFEO0FBVFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURLO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQVlELENBaEJEOztHQUFNRCxVOztLQUFBQSxVOztBQWtCTixJQUFNWSxNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBLHNCQUNiLHFFQUFDLDRDQUFEO0FBQUssV0FBTyxFQUFDLE1BQWI7QUFBb0IsU0FBSyxFQUFDLE1BQTFCO0FBQUEsNEJBQ0UscUVBQUMsVUFBRDtBQUFZLFdBQUssRUFBQztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSxxRUFBQyxVQUFEO0FBQVksV0FBSyxFQUFDO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFLHFFQUFDLFVBQUQ7QUFBWSxXQUFLLEVBQUM7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURhO0FBQUEsQ0FBZjs7TUFBTUEsTTtBQVNTQSxxRUFBZiIsImZpbGUiOiIuL2xpYi9Ub3RhbHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IERhdGFDb250ZXh0IGZyb20gJy4vRGF0YUNvbnRleHQnXG5pbXBvcnQgeyBwYXJ0eUNvbG9ycyB9IGZyb20gJy4vY29uc3RhbnRzJ1xuaW1wb3J0IEJveCBmcm9tICcuL0JveCc7XG5cbmNvbnN0IFBhcnR5VG90YWwgPSAoeyBwYXJ0eSB9KSA9PiB7XG4gIGNvbnN0IHsgdG90YWxzIH0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KVxuXG4gIGlmICghdG90YWxzKSByZXR1cm4gbnVsbFxuICByZXR1cm4gPEJveD5cbiAgICA8aDFcbiAgICAgIGlkPXtgJHtwYXJ0eX1Ub3RhbGB9XG4gICAgICBzdHlsZT17e1xuICAgICAgICBjb2xvcjogcGFydHlDb2xvcnNbcGFydHldLFxuICAgICAgICBwYWRkaW5nOiAnMCAycHgnLFxuICAgICAgICB0ZXh0U2hhZG93OiAnMHB4IDFweCAxcHggIzQ0NCcsXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIGZvbnRTaXplOiAnMS4xNXJlbScsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgIH19Pnt0b3RhbHNbcGFydHldfTwvaDE+XG4gIDwvQm94PlxufTtcblxuY29uc3QgVG90YWxzID0gKCkgPT4gKFxuICA8Qm94IGRpc3BsYXk9J2ZsZXgnIHdpZHRoPVwiMTAwJVwiPlxuICAgIDxQYXJ0eVRvdGFsIHBhcnR5PSdkZW1zJyAvPlxuICAgIDxQYXJ0eVRvdGFsIHBhcnR5PSduZXV0cmFsJyAvPlxuICAgIDxQYXJ0eVRvdGFsIHBhcnR5PSdHT1AnIC8+XG4gIDwvQm94PlxuKTtcblxuXG5leHBvcnQgZGVmYXVsdCBUb3RhbHNcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/Totals.js\n");

/***/ })

})