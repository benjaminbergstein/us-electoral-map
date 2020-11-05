webpackHotUpdate_N_E("pages/index",{

/***/ "./lib/States.js":
/*!***********************!*\
  !*** ./lib/States.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _DataContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DataContext */ \"./lib/DataContext.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ \"./lib/constants.js\");\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Box */ \"./lib/Box.js\");\n\n\n\nvar _jsxFileName = \"/app/lib/States.js\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\nvar State = function State(_ref) {\n  _s();\n\n  var stateName = _ref.stateName;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useContext\"])(_DataContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n      focusedState = _useContext.focusedState,\n      stateOrder = _useContext.stateOrder,\n      data = _useContext.data,\n      updateUserSelection = _useContext.updateUserSelection;\n\n  var stateData = data[stateName];\n  var stateRef = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])(null);\n  var fillKey = stateData.fillKey;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      isHovered = _React$useState2[0],\n      setIsHovered = _React$useState2[1];\n\n  var fillColor = _constants__WEBPACK_IMPORTED_MODULE_5__[\"PossibleFills\"][fillKey];\n  var electoralVotes = stateData['Electoral Votes'];\n\n  if (true) {\n    Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useLayoutEffect\"])(function () {\n      console.log(focusedState);\n      console.log(stateRef);\n      if (stateRef.current === null) return;\n\n      if (focusedState === stateName) {\n        stateRef.current.scrollIntoView({\n          behavior: \"smooth\",\n          block: \"center\",\n          inline: \"center\"\n        });\n        setIsHovered(true);\n      } else {\n        setIsHovered(false);\n      }\n    }, [focusedState]);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    ref: stateRef,\n    flexBasis: \"\".concat(electoralVotes * 7, \"px\"),\n    flexShrink: 0,\n    flexGrow: 1,\n    order: stateOrder.indexOf(stateName),\n    onClick: function onClick() {\n      updateUserSelection(stateName, fillKey);\n    },\n    onMouseEnter: function onMouseEnter() {\n      setIsHovered(true);\n    },\n    onFocus: function onFocus() {\n      setIsHovered(true);\n    },\n    onBlur: function onBlur() {\n      setIsHovered(true);\n    },\n    onMouseLeave: function onMouseLeave() {\n      setIsHovered(false);\n    },\n    id: stateName,\n    className: \"State\",\n    style: {\n      textAlign: 'center',\n      cursor: 'pointer',\n      marginRight: '1px',\n      borderBottom: \"8px solid \".concat(isHovered ? fillColor : 'white'),\n      boxShadow: isHovered ? 'inset 1px 12px 13px -5px rgba(255, 255, 255, 0.4)' : undefined,\n      background: fillColor,\n      color: 'white',\n      padding: '10px'\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      children: stateName\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      style: {\n        fontSize: '0.5rem'\n      },\n      children: electoralVotes\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 5\n    }, _this)]\n  }, stateName, true, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 10\n  }, _this);\n};\n\n_s(State, \"5fw0avZKZMp5pWONTbBbytQ5wpM=\");\n\n_c = State;\n\nvar Container = function Container() {\n  _s2();\n\n  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useContext\"])(_DataContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n      data = _useContext2.data;\n\n  if (data === undefined) return null;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    display: \"flex\",\n    flexDirection: \"row\",\n    style: {\n      overflowX: 'scroll'\n    },\n    width: \"100vw\",\n    children: Object.entries(data).map(function (_ref2) {\n      var _ref3 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref2, 1),\n          stateName = _ref3[0];\n\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(State, {\n        stateName: stateName\n      }, stateName, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 7\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 72,\n    columnNumber: 10\n  }, _this);\n};\n\n_s2(Container, \"0hAPxt73XWcCCQAWfZjlyZ/wuPM=\");\n\n_c2 = Container;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Container);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"State\");\n$RefreshReg$(_c2, \"Container\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL1N0YXRlcy5qcz85OTg0Il0sIm5hbWVzIjpbIlN0YXRlIiwic3RhdGVOYW1lIiwidXNlQ29udGV4dCIsIkRhdGFDb250ZXh0IiwiZm9jdXNlZFN0YXRlIiwic3RhdGVPcmRlciIsImRhdGEiLCJ1cGRhdGVVc2VyU2VsZWN0aW9uIiwic3RhdGVEYXRhIiwic3RhdGVSZWYiLCJ1c2VSZWYiLCJmaWxsS2V5IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImlzSG92ZXJlZCIsInNldElzSG92ZXJlZCIsImZpbGxDb2xvciIsIlBvc3NpYmxlRmlsbHMiLCJlbGVjdG9yYWxWb3RlcyIsInVzZUxheW91dEVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwiaW5saW5lIiwiaW5kZXhPZiIsInRleHRBbGlnbiIsImN1cnNvciIsIm1hcmdpblJpZ2h0IiwiYm9yZGVyQm90dG9tIiwiYm94U2hhZG93IiwidW5kZWZpbmVkIiwiYmFja2dyb3VuZCIsImNvbG9yIiwicGFkZGluZyIsImZvbnRTaXplIiwiQ29udGFpbmVyIiwib3ZlcmZsb3dYIiwiT2JqZWN0IiwiZW50cmllcyIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBbUI7QUFBQTs7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCOztBQUFBLG9CQUNpQ0Msd0RBQVUsQ0FBQ0Msb0RBQUQsQ0FEM0M7QUFBQSxNQUN2QkMsWUFEdUIsZUFDdkJBLFlBRHVCO0FBQUEsTUFDVEMsVUFEUyxlQUNUQSxVQURTO0FBQUEsTUFDR0MsSUFESCxlQUNHQSxJQURIO0FBQUEsTUFDU0MsbUJBRFQsZUFDU0EsbUJBRFQ7O0FBRS9CLE1BQU1DLFNBQVMsR0FBR0YsSUFBSSxDQUFDTCxTQUFELENB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O0FBQUEsTUFDZEcsSUFEYyxnQkFDZEEsSUFEYzs7QUFHdEIsTUFBSUEsSUFBSSxLQUFLMkIsU0FBYixFQUF3QixPQUFPLElBQVA7QUFFeEIsc0JBQU8scUVBQUMsNENBQUQ7QUFDTCxXQUFPLEVBQUMsTUFESDtBQUVMLGlCQUFhLEVBQUMsS0FGVDtBQUdMLFNBQUssRUFBRTtBQUFFTSxlQUFTLEVBQUU7QUFBYixLQUhGO0FBSUwsU0FBSyxFQUFDLE9BSkQ7QUFBQSxjQU1KQyxNQUFNLENBQUNDLE9BQVAsQ0FBZW5DLElBQWYsRUFBcUJvQyxHQUFyQixDQUF5QjtBQUFBO0FBQUEsVUFBRXpDLFNBQUY7O0FBQUEsMEJBQ3hCLHFFQUFDLEtBQUQ7QUFBdUIsaUJBQVMsRUFBRUE7QUFBbEMsU0FBWUEsU0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRHdCO0FBQUEsS0FBekI7QUFOSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFVRCxDQWZEOztJQUFNcUMsUzs7TUFBQUEsUztBQWlCU0Esd0VBQWYiLCJmaWxlIjoiLi9saWIvU3RhdGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUxheW91dEVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IERhdGFDb250ZXh0IGZyb20gJy4vRGF0YUNvbnRleHQnXG5pbXBvcnQgeyBQb3NzaWJsZUZpbGxzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5pbXBvcnQgQm94IGZyb20gJy4vQm94JztcblxuY29uc3QgU3RhdGUgPSAoeyBzdGF0ZU5hbWUgfSkgPT4ge1xuICBjb25zdCB7IGZvY3VzZWRTdGF0ZSwgc3RhdGVPcmRlciwgZGF0YSwgdXBkYXRlVXNlclNlbGVjdGlvbiB9ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dClcbiAgY29uc3Qgc3RhdGVEYXRhID0gZGF0YVtzdGF0ZU5hbWVdXG4gIGNvbnN0IHN0YXRlUmVmID0gdXNlUmVmKG51bGwpXG5cbiAgY29uc3QgeyBmaWxsS2V5IH0gPSBzdGF0ZURhdGFcbiAgY29uc3QgW2lzSG92ZXJlZCwgc2V0SXNIb3ZlcmVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBmaWxsQ29sb3IgPSBQb3NzaWJsZUZpbGxzW2ZpbGxLZXldXG4gIGNvbnN0IGVsZWN0b3JhbFZvdGVzID0gc3RhdGVEYXRhWydFbGVjdG9yYWwgVm90ZXMnXVxuXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGZvY3VzZWRTdGF0ZSlcbiAgICAgIGNvbnNvbGUubG9nKHN0YXRlUmVmKVxuICAgICAgaWYgKHN0YXRlUmVmLmN1cnJlbnQgPT09IG51bGwpIHJldHVyblxuXG4gICAgICBpZiAoZm9jdXNlZFN0YXRlID09PSBzdGF0ZU5hbWUpIHtcbiAgICAgICAgc3RhdGVSZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7XG4gICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgICAgICAgYmxvY2s6IFwiY2VudGVyXCIsXG4gICAgICAgICAgaW5saW5lOiBcImNlbnRlclwiLFxuICAgICAgICB9KVxuICAgICAgICBzZXRJc0hvdmVyZWQodHJ1ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldElzSG92ZXJlZChmYWxzZSlcbiAgICAgIH1cbiAgICB9LCBbZm9jdXNlZFN0YXRlXSlcbiAgfVxuXG4gIHJldHVybiA8Qm94XG4gICAgcmVmPXtzdGF0ZVJlZn1cbiAgICBmbGV4QmFzaXM9e2Ake2VsZWN0b3JhbFZvdGVzKjd9cHhgfVxuICAgIGZsZXhTaHJpbms9ezB9XG4gICAgZmxleEdyb3c9ezF9XG4gICAga2V5PXtzdGF0ZU5hbWV9XG4gICAgb3JkZXI9e3N0YXRlT3JkZXIuaW5kZXhPZihzdGF0ZU5hbWUpfVxuICAgIG9uQ2xpY2s9eygpID0+IHsgdXBkYXRlVXNlclNlbGVjdGlvbihzdGF0ZU5hbWUsIGZpbGxLZXkpIH19XG4gICAgb25Nb3VzZUVudGVyPXsoKSA9PiB7IHNldElzSG92ZXJlZCh0cnVlKSB9fVxuICAgIG9uRm9jdXM9eygpID0+IHsgc2V0SXNIb3ZlcmVkKHRydWUpIH19XG4gICAgb25CbHVyPXsoKSA9PiB7IHNldElzSG92ZXJlZCh0cnVlKSB9fVxuICAgIG9uTW91c2VMZWF2ZT17KCkgPT4geyBzZXRJc0hvdmVyZWQoZmFsc2UpIH19XG4gICAgaWQ9e3N0YXRlTmFtZX1cbiAgICBjbGFzc05hbWU9XCJTdGF0ZVwiXG4gICAgc3R5bGU9e3tcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIG1hcmdpblJpZ2h0OiAnMXB4JyxcbiAgICAgIGJvcmRlckJvdHRvbTogYDhweCBzb2xpZCAke2lzSG92ZXJlZCA/IGZpbGxDb2xvciA6ICd3aGl0ZSd9YCxcbiAgICAgIGJveFNoYWRvdzogaXNIb3ZlcmVkID8gJ2luc2V0IDFweCAxMnB4IDEzcHggLTVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCknIDogdW5kZWZpbmVkLFxuICAgICAgYmFja2dyb3VuZDogZmlsbENvbG9yLFxuICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICBwYWRkaW5nOiAnMTBweCcsXG4gICAgfX1cbiAgPlxuICAgIDxCb3g+e3N0YXRlTmFtZX08L0JveD5cbiAgICA8Qm94IHN0eWxlPXt7IGZvbnRTaXplOiAnMC41cmVtJyB9fT57ZWxlY3RvcmFsVm90ZXN9PC9Cb3g+XG4gIDwvQm94PlxufVxuXG5jb25zdCBDb250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dClcblxuICBpZiAoZGF0YSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbFxuXG4gIHJldHVybiA8Qm94XG4gICAgZGlzcGxheT0nZmxleCdcbiAgICBmbGV4RGlyZWN0aW9uPSdyb3cnXG4gICAgc3R5bGU9e3sgb3ZlcmZsb3dYOiAnc2Nyb2xsJyB9fVxuICAgIHdpZHRoPScxMDB2dydcbiAgPlxuICAgIHtPYmplY3QuZW50cmllcyhkYXRhKS5tYXAoKFtzdGF0ZU5hbWVdKSA9PiAoXG4gICAgICA8U3RhdGUga2V5PXtzdGF0ZU5hbWV9IHN0YXRlTmFtZT17c3RhdGVOYW1lfSAvPlxuICAgICkpfVxuICA8L0JveD5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/States.js\n");

/***/ })

})