webpackHotUpdate_N_E("pages/index",{

/***/ "./lib/States.js":
/*!***********************!*\
  !*** ./lib/States.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _DataContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DataContext */ \"./lib/DataContext.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ \"./lib/constants.js\");\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Box */ \"./lib/Box.js\");\n\n\n\n\nvar _jsxFileName = \"/app/lib/States.js\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\nvar State = function State(_ref) {\n  _s();\n\n  var stateName = _ref.stateName,\n      fillKey = _ref.fillKey,\n      data = _ref.data;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_DataContext__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n      updateUserSelection = _useContext.updateUserSelection;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n      isHovered = _React$useState2[0],\n      setIsHovered = _React$useState2[1];\n\n  var fillColor = _constants__WEBPACK_IMPORTED_MODULE_6__[\"PossibleFills\"][fillKey];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    flexBasis: \"\".concat(data['Electoral Votes'] * 7, \"px\"),\n    flexShrink: 0,\n    flexGrow: 1,\n    onClick: function onClick() {\n      updateUserSelection(stateName, fillKey);\n    },\n    onMouseEnter: function onMouseEnter() {\n      setIsHovered(true);\n    },\n    onMouseLeave: function onMouseLeave() {\n      setIsHovered(false);\n    },\n    id: stateName,\n    className: \"State\",\n    style: {\n      textAlign: 'center',\n      cursor: 'pointer',\n      marginRight: '1px',\n      borderBottom: \"8px solid \".concat(isHovered ? fillColor : 'white'),\n      background: fillColor,\n      color: 'white',\n      padding: '10px'\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      children: stateName\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      style: {\n        fontSize: '0.5rem'\n      },\n      children: data['Electoral Votes']\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 5\n    }, _this)]\n  }, stateName, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 10\n  }, _this);\n};\n\n_s(State, \"PeKcQOEXzXfVupvDJ6Jd5J1QOZU=\");\n\n_c = State;\n\nvar Container = function Container() {\n  _s2();\n\n  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_DataContext__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n      data = _useContext2.data;\n\n  if (data === undefined) return null;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    display: \"flex\",\n    flexDirection: \"row\",\n    style: {\n      overflowX: 'scroll'\n    },\n    width: \"100vw\",\n    children: Object.entries(data).map(function (_ref3) {\n      var _ref4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref3, 2),\n          stateName = _ref4[0],\n          _ref2 = _ref4[1];\n\n      var fillKey = _ref2.fillKey,\n          data = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref2, [\"fillKey\"]);\n\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(State, {\n        stateName: stateName,\n        fillKey: fillKey,\n        data: data\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 7\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 10\n  }, _this);\n};\n\n_s2(Container, \"0hAPxt73XWcCCQAWfZjlyZ/wuPM=\");\n\n_c2 = Container;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Container);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"State\");\n$RefreshReg$(_c2, \"Container\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL1N0YXRlcy5qcz85OTg0Il0sIm5hbWVzIjpbIlN0YXRlIiwic3RhdGVOYW1lIiwiZmlsbEtleSIsImRhdGEiLCJ1c2VDb250ZXh0IiwiRGF0YUNvbnRleHQiLCJ1cGRhdGVVc2VyU2VsZWN0aW9uIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImlzSG92ZXJlZCIsInNldElzSG92ZXJlZCIsImZpbGxDb2xvciIsIlBvc3NpYmxlRmlsbHMiLCJ0ZXh0QWxpZ24iLCJjdXJzb3IiLCJtYXJnaW5SaWdodCIsImJvcmRlckJvdHRvbSIsImJhY2tncm91bmQiLCJjb2xvciIsInBhZGRpbmciLCJmb250U2l6ZSIsIkNvbnRhaW5lciIsInVuZGVmaW5lZCIsIm92ZXJmbG93WCIsIk9iamVjdCIsImVudHJpZXMiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBa0M7QUFBQTs7QUFBQSxNQUEvQkMsU0FBK0IsUUFBL0JBLFNBQStCO0FBQUEsTUFBcEJDLE9BQW9CLFFBQXBCQSxPQUFvQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSxvQkFDZEMsd0RBQVUsQ0FBQ0Msb0RBQUQsQ0FESTtBQUFBLE1BQ3RDQyxtQkFEc0MsZUFDdENBLG1CQURzQzs7QUFBQSx3QkFFWkMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FGWTtBQUFBO0FBQUEsTUFFdkNDLFNBRnVDO0FBQUEsTUFFNUJDLFlBRjRCOztBQUc5QyxNQUFNQyxTQUFTLEdBQUdDLHdEQUFhLENBQUNWLE9BQUQsQ0FBL0I7QUFFQSxzQkFBTyxxRUFBQyw0Q0FBRDtBQUNMLGFBQVMsWUFBS0MsSUFBSSxDQUFDLGlCQUFELENBQUosR0FBd0IsQ0FBN0IsT0FESjtBQUVMLGNBQVUsRUFBRSxDQUZQO0FBR0wsWUFBUSxFQUFFLENBSEw7QUFLTCxXQUFPLEVBQUUsbUJBQU07QUFBRUcseUJBQW1CLENBQUNMLFNBQUQsRUFBWUMsT0FBWixDQUFuQjtBQUF5QyxLQUxyRDtBQU1MLGdCQUFZLEVBQUUsd0JBQU07QUFBRVEsa0JBQVksQ0FBQyxJQUFELENBQVo7QUFBb0IsS0FOckM7QUFPTCxnQkFBWSxFQUFFLHdCQUFNO0FBQUVBLGtCQUFZLENBQUMsS0FBRCxDQUFaO0FBQXFCLEtBUHRDO0FBUUwsTUFBRSxFQUFFVCxTQVJDO0FBU0wsYUFBUyxFQUFDLE9BVEw7QUFVTCxTQUFLLEVBQUU7QUFDTFksZUFBUyxFQUFFLFFBRE47QUFFTEMsWUFBTSxFQUFFLFNBRkg7QUFHTEMsaUJBQVcsRUFBRSxLQUhSO0FBSUxDLGtCQUFZLHNCQUFlUCxTQUFTLEdBQUdFLFNBQUgsR0FBZSxPQUF2QyxDQUpQO0FBS0xNLGdCQUFVLEVBQUVOLFNBTFA7QUFNTE8sV0FBSyxFQUFFLE9BTkY7QUFPTEMsYUFBTyxFQUFFO0FBUEosS0FWRjtBQUFBLDRCQW9CTCxxRUFBQyw0Q0FBRDtBQUFBLGdCQUFNbEI7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBcEJLLGVBcUJMLHFFQUFDLDRDQUFEO0FBQUssV0FBSyxFQUFFO0FBQUVtQixnQkFBUSxFQUFFO0FBQVosT0FBWjtBQUFBLGdCQUFxQ2pCLElBQUksQ0FBQyxpQkFBRDtBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBckJLO0FBQUEsS0FJQUYsU0FKQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUF1QkQsQ0E1QkQ7O0dBQU1ELEs7O0tBQUFBLEs7O0FBNkJOLElBQU1xQixTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQUEscUJBQ0xqQix3REFBVSxDQUFDQyxvREFBRCxDQURMO0FBQUEsTUFDZEYsSUFEYyxnQkFDZEEsSUFEYzs7QUFHdEIsTUFBSUEsSUFBSSxLQUFLbUIsU0FBYixFQUF3QixPQUFPLElBQVA7QUFFeEIsc0JBQU8scUVBQUMsNENBQUQ7QUFDTCxXQUFPLEVBQUMsTUFESDtBQUVMLGlCQUFhLEVBQUMsS0FGVDtBQUdMLFNBQUssRUFBRTtBQUFFQyxlQUFTLEVBQUU7QUFBYixLQUhGO0FBSUwsU0FBSyxFQUFDLE9BSkQ7QUFBQSxjQU1KQyxNQUFNLENBQUNDLE9BQVAsQ0FBZXRCLElBQWYsRUFBcUJ1QixHQUFyQixDQUF5QjtBQUFBO0FBQUEsVUFBRXpCLFNBQUY7QUFBQTs7QUFBQSxVQUFlQyxPQUFmLFNBQWVBLE9BQWY7QUFBQSxVQUEyQkMsSUFBM0I7O0FBQUEsMEJBQ3hCLHFFQUFDLEtBQUQ7QUFBTyxpQkFBUyxFQUFFRixTQUFsQjtBQUE2QixlQUFPLEVBQUVDLE9BQXRDO0FBQStDLFlBQUksRUFBRUM7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUR3QjtBQUFBLEtBQXpCO0FBTkk7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBVUQsQ0FmRDs7SUFBTWtCLFM7O01BQUFBLFM7QUFpQlNBLHdFQUFmIiwiZmlsZSI6Ii4vbGliL1N0YXRlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VMYXlvdXRFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEYXRhQ29udGV4dCBmcm9tICcuL0RhdGFDb250ZXh0J1xuaW1wb3J0IHsgUG9zc2libGVGaWxscyB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuaW1wb3J0IEJveCBmcm9tICcuL0JveCc7XG5cbmNvbnN0IFN0YXRlID0gKHsgc3RhdGVOYW1lLCBmaWxsS2V5LCBkYXRhIH0pID0+IHtcbiAgY29uc3QgeyB1cGRhdGVVc2VyU2VsZWN0aW9uIH0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KVxuICBjb25zdCBbaXNIb3ZlcmVkLCBzZXRJc0hvdmVyZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IGZpbGxDb2xvciA9IFBvc3NpYmxlRmlsbHNbZmlsbEtleV1cblxuICByZXR1cm4gPEJveFxuICAgIGZsZXhCYXNpcz17YCR7ZGF0YVsnRWxlY3RvcmFsIFZvdGVzJ10qN31weGB9XG4gICAgZmxleFNocmluaz17MH1cbiAgICBmbGV4R3Jvdz17MX1cbiAgICBrZXk9e3N0YXRlTmFtZX1cbiAgICBvbkNsaWNrPXsoKSA9PiB7IHVwZGF0ZVVzZXJTZWxlY3Rpb24oc3RhdGVOYW1lLCBmaWxsS2V5KSB9fVxuICAgIG9uTW91c2VFbnRlcj17KCkgPT4geyBzZXRJc0hvdmVyZWQodHJ1ZSkgfX1cbiAgICBvbk1vdXNlTGVhdmU9eygpID0+IHsgc2V0SXNIb3ZlcmVkKGZhbHNlKSB9fVxuICAgIGlkPXtzdGF0ZU5hbWV9XG4gICAgY2xhc3NOYW1lPVwiU3RhdGVcIlxuICAgIHN0eWxlPXt7XG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBtYXJnaW5SaWdodDogJzFweCcsXG4gICAgICBib3JkZXJCb3R0b206IGA4cHggc29saWQgJHtpc0hvdmVyZWQgPyBmaWxsQ29sb3IgOiAnd2hpdGUnfWAsXG4gICAgICBiYWNrZ3JvdW5kOiBmaWxsQ29sb3IsXG4gICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgIHBhZGRpbmc6ICcxMHB4JyxcbiAgICB9fVxuICA+XG4gICAgPEJveD57c3RhdGVOYW1lfTwvQm94PlxuICAgIDxCb3ggc3R5bGU9e3sgZm9udFNpemU6ICcwLjVyZW0nIH19PntkYXRhWydFbGVjdG9yYWwgVm90ZXMnXX08L0JveD5cbiAgPC9Cb3g+XG59XG5jb25zdCBDb250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dClcblxuICBpZiAoZGF0YSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbFxuXG4gIHJldHVybiA8Qm94XG4gICAgZGlzcGxheT0nZmxleCdcbiAgICBmbGV4RGlyZWN0aW9uPSdyb3cnXG4gICAgc3R5bGU9e3sgb3ZlcmZsb3dYOiAnc2Nyb2xsJyB9fVxuICAgIHdpZHRoPScxMDB2dydcbiAgPlxuICAgIHtPYmplY3QuZW50cmllcyhkYXRhKS5tYXAoKFtzdGF0ZU5hbWUsIHsgZmlsbEtleSwgLi4uZGF0YSB9XSkgPT4gKFxuICAgICAgPFN0YXRlIHN0YXRlTmFtZT17c3RhdGVOYW1lfSBmaWxsS2V5PXtmaWxsS2V5fSBkYXRhPXtkYXRhfSAvPlxuICAgICkpfVxuICA8L0JveD5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/States.js\n");

/***/ })

})