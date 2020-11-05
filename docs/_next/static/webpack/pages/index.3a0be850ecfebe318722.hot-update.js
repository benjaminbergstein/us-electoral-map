webpackHotUpdate_N_E("pages/index",{

/***/ "./lib/States.js":
/*!***********************!*\
  !*** ./lib/States.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _DataContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DataContext */ \"./lib/DataContext.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ \"./lib/constants.js\");\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Box */ \"./lib/Box.js\");\n\n\n\nvar _jsxFileName = \"/app/lib/States.js\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\nvar State = function State(_ref) {\n  _s();\n\n  var stateName = _ref.stateName;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useContext\"])(_DataContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n      focusedState = _useContext.focusedState,\n      stateOrder = _useContext.stateOrder,\n      data = _useContext.data,\n      updateUserSelection = _useContext.updateUserSelection;\n\n  var stateData = data[stateName];\n  var stateRef = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])(null);\n  var fillKey = stateData.fillKey;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      isHovered = _React$useState2[0],\n      setIsHovered = _React$useState2[1];\n\n  var fillColor = _constants__WEBPACK_IMPORTED_MODULE_5__[\"PossibleFills\"][fillKey];\n  var electoralVotes = stateData['Electoral Votes'];\n  console.log(stateRef);\n\n  if (true) {\n    Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useLayoutEffect\"])(function () {\n      console.log(focusedState);\n      console.log(stateRef);\n      setTimeout(function () {\n        if (stateRef.current === null) return;\n\n        if (focusedState === stateName) {\n          stateRef.current.scrollIntoView();\n        }\n      });\n    }, [focusedState]);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    ref: stateRef,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      flexBasis: \"\".concat(electoralVotes * 7, \"px\"),\n      flexShrink: 0,\n      flexGrow: 1,\n      order: stateOrder.indexOf(stateName),\n      onClick: function onClick() {\n        updateUserSelection(stateName, fillKey);\n      },\n      onMouseEnter: function onMouseEnter() {\n        setIsHovered(true);\n      },\n      onFocus: function onFocus() {\n        setIsHovered(true);\n      },\n      onBlur: function onBlur() {\n        setIsHovered(true);\n      },\n      onMouseLeave: function onMouseLeave() {\n        setIsHovered(false);\n      },\n      id: stateName,\n      className: \"State\",\n      style: {\n        textAlign: 'center',\n        cursor: 'pointer',\n        marginRight: '1px',\n        borderBottom: \"8px solid \".concat(isHovered ? fillColor : 'white'),\n        background: fillColor,\n        color: 'white',\n        padding: '10px'\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        children: stateName\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        style: {\n          fontSize: '0.5rem'\n        },\n        children: electoralVotes\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 7\n      }, _this)]\n    }, stateName, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 10\n  }, _this);\n};\n\n_s(State, \"5fw0avZKZMp5pWONTbBbytQ5wpM=\");\n\n_c = State;\n\nvar Container = function Container() {\n  _s2();\n\n  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useContext\"])(_DataContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n      data = _useContext2.data;\n\n  if (data === undefined) return null;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    display: \"flex\",\n    flexDirection: \"row\",\n    style: {\n      overflowX: 'scroll'\n    },\n    width: \"100vw\",\n    children: Object.entries(data).map(function (_ref2) {\n      var _ref3 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref2, 1),\n          stateName = _ref3[0];\n\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(State, {\n        stateName: stateName\n      }, stateName, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 7\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 68,\n    columnNumber: 10\n  }, _this);\n};\n\n_s2(Container, \"0hAPxt73XWcCCQAWfZjlyZ/wuPM=\");\n\n_c2 = Container;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Container);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"State\");\n$RefreshReg$(_c2, \"Container\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL1N0YXRlcy5qcz85OTg0Il0sIm5hbWVzIjpbIlN0YXRlIiwic3RhdGVOYW1lIiwidXNlQ29udGV4dCIsIkRhdGFDb250ZXh0IiwiZm9jdXNlZFN0YXRlIiwic3RhdGVPcmRlciIsImRhdGEiLCJ1cGRhdGVVc2VyU2VsZWN0aW9uIiwic3RhdGVEYXRhIiwic3RhdGVSZWYiLCJ1c2VSZWYiLCJmaWxsS2V5IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImlzSG92ZXJlZCIsInNldElzSG92ZXJlZCIsImZpbGxDb2xvciIsIlBvc3NpYmxlRmlsbHMiLCJlbGVjdG9yYWxWb3RlcyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VMYXlvdXRFZmZlY3QiLCJzZXRUaW1lb3V0IiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiaW5kZXhPZiIsInRleHRBbGlnbiIsImN1cnNvciIsIm1hcmdpblJpZ2h0IiwiYm9yZGVyQm90dG9tIiwiYmFja2dyb3VuZCIsImNvbG9yIiwicGFkZGluZyIsImZvbnRTaXplIiwiQ29udGFpbmVyIiwidW5kZWZpbmVkIiwib3ZlcmZsb3dYIiwiT2JqZWN0IiwiZW50cmllcyIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBbUI7QUFBQTs7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCOztBQUFBLG9CQUNpQ0Msd0RBQVUsQ0FBQ0Msb0RBQUQsQ0FEM0M7QUFBQSxNQUN2QkMsWUFEdUIsZUFDdkJBLFlBRHVCO0FBQUEsTUFDVEMsVUFEUyxlQUNUQSxVQURTO0FBQUEsTUFDR0MsSUFESCxlQUNHQSxJQURIO0FBQUEsTUFDU0MsbUJBRFQsZUFDU0EsbUJBRFQ7O0FBRS9CLE1BQU1DLFNBQVMsR0FBR0YsSUFBSSxDQUFDTCxTQUFELENBQXRCO0FBQ0EsTUFBTVEsUUFBUSxHQUFHQyxv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QkFBYSxFQUFDLEtBRlQ7QUFHTCxTQUFLLEVBQUU7QUFBRUMsZUFBUyxFQUFFO0FBQWIsS0FIRjtBQUlMLFNBQUssRUFBQyxPQUpEO0FBQUEsY0FNSkMsTUFBTSxDQUFDQyxPQUFQLENBQWVoQyxJQUFmLEVBQXFCaUMsR0FBckIsQ0FBeUI7QUFBQTtBQUFBLFVBQUV0QyxTQUFGOztBQUFBLDBCQUN4QixxRUFBQyxLQUFEO0FBQXVCLGlCQUFTLEVBQUVBO0FBQWxDLFNBQVlBLFNBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUR3QjtBQUFBLEtBQXpCO0FBTkk7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBVUQsQ0FmRDs7SUFBTWlDLFM7O01BQUFBLFM7QUFpQlNBLHdFQUFmIiwiZmlsZSI6Ii4vbGliL1N0YXRlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VMYXlvdXRFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEYXRhQ29udGV4dCBmcm9tICcuL0RhdGFDb250ZXh0J1xuaW1wb3J0IHsgUG9zc2libGVGaWxscyB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuaW1wb3J0IEJveCBmcm9tICcuL0JveCc7XG5cbmNvbnN0IFN0YXRlID0gKHsgc3RhdGVOYW1lIH0pID0+IHtcbiAgY29uc3QgeyBmb2N1c2VkU3RhdGUsIHN0YXRlT3JkZXIsIGRhdGEsIHVwZGF0ZVVzZXJTZWxlY3Rpb24gfSA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpXG4gIGNvbnN0IHN0YXRlRGF0YSA9IGRhdGFbc3RhdGVOYW1lXVxuICBjb25zdCBzdGF0ZVJlZiA9IHVzZVJlZihudWxsKVxuXG4gIGNvbnN0IHsgZmlsbEtleSB9ID0gc3RhdGVEYXRhXG4gIGNvbnN0IFtpc0hvdmVyZWQsIHNldElzSG92ZXJlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgZmlsbENvbG9yID0gUG9zc2libGVGaWxsc1tmaWxsS2V5XVxuICBjb25zdCBlbGVjdG9yYWxWb3RlcyA9IHN0YXRlRGF0YVsnRWxlY3RvcmFsIFZvdGVzJ11cblxuICBjb25zb2xlLmxvZyhzdGF0ZVJlZilcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coZm9jdXNlZFN0YXRlKVxuICAgICAgY29uc29sZS5sb2coc3RhdGVSZWYpXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKHN0YXRlUmVmLmN1cnJlbnQgPT09IG51bGwpIHJldHVyblxuXG4gICAgICAgIGlmIChmb2N1c2VkU3RhdGUgPT09IHN0YXRlTmFtZSkge1xuICAgICAgICAgIHN0YXRlUmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sIFtmb2N1c2VkU3RhdGVdKVxuICB9XG5cbiAgcmV0dXJuIDxkaXYgcmVmPXtzdGF0ZVJlZn0+XG4gICAgPEJveFxuICAgICAgZmxleEJhc2lzPXtgJHtlbGVjdG9yYWxWb3Rlcyo3fXB4YH1cbiAgICAgIGZsZXhTaHJpbms9ezB9XG4gICAgICBmbGV4R3Jvdz17MX1cbiAgICAgIGtleT17c3RhdGVOYW1lfVxuICAgICAgb3JkZXI9e3N0YXRlT3JkZXIuaW5kZXhPZihzdGF0ZU5hbWUpfVxuICAgICAgb25DbGljaz17KCkgPT4geyB1cGRhdGVVc2VyU2VsZWN0aW9uKHN0YXRlTmFtZSwgZmlsbEtleSkgfX1cbiAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4geyBzZXRJc0hvdmVyZWQodHJ1ZSkgfX1cbiAgICAgIG9uRm9jdXM9eygpID0+IHsgc2V0SXNIb3ZlcmVkKHRydWUpIH19XG4gICAgICBvbkJsdXI9eygpID0+IHsgc2V0SXNIb3ZlcmVkKHRydWUpIH19XG4gICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHsgc2V0SXNIb3ZlcmVkKGZhbHNlKSB9fVxuICAgICAgaWQ9e3N0YXRlTmFtZX1cbiAgICAgIGNsYXNzTmFtZT1cIlN0YXRlXCJcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICBtYXJnaW5SaWdodDogJzFweCcsXG4gICAgICAgIGJvcmRlckJvdHRvbTogYDhweCBzb2xpZCAke2lzSG92ZXJlZCA/IGZpbGxDb2xvciA6ICd3aGl0ZSd9YCxcbiAgICAgICAgYmFja2dyb3VuZDogZmlsbENvbG9yLFxuICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgcGFkZGluZzogJzEwcHgnLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8Qm94PntzdGF0ZU5hbWV9PC9Cb3g+XG4gICAgICA8Qm94IHN0eWxlPXt7IGZvbnRTaXplOiAnMC41cmVtJyB9fT57ZWxlY3RvcmFsVm90ZXN9PC9Cb3g+XG4gICAgPC9Cb3g+XG4gIDwvZGl2PlxufVxuXG5jb25zdCBDb250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dClcblxuICBpZiAoZGF0YSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbFxuXG4gIHJldHVybiA8Qm94XG4gICAgZGlzcGxheT0nZmxleCdcbiAgICBmbGV4RGlyZWN0aW9uPSdyb3cnXG4gICAgc3R5bGU9e3sgb3ZlcmZsb3dYOiAnc2Nyb2xsJyB9fVxuICAgIHdpZHRoPScxMDB2dydcbiAgPlxuICAgIHtPYmplY3QuZW50cmllcyhkYXRhKS5tYXAoKFtzdGF0ZU5hbWVdKSA9PiAoXG4gICAgICA8U3RhdGUga2V5PXtzdGF0ZU5hbWV9IHN0YXRlTmFtZT17c3RhdGVOYW1lfSAvPlxuICAgICkpfVxuICA8L0JveD5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/States.js\n");

/***/ })

})