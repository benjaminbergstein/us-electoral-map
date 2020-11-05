webpackHotUpdate_N_E("pages/index",{

/***/ "./lib/States.js":
/*!***********************!*\
  !*** ./lib/States.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _DataContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DataContext */ \"./lib/DataContext.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ \"./lib/constants.js\");\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Box */ \"./lib/Box.js\");\n\n\n\nvar _jsxFileName = \"/app/lib/States.js\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\nvar State = function State(_ref) {\n  _s();\n\n  var stateName = _ref.stateName;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useContext\"])(_DataContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n      focusedState = _useContext.focusedState,\n      stateOrder = _useContext.stateOrder,\n      data = _useContext.data,\n      updateUserSelection = _useContext.updateUserSelection;\n\n  var stateData = data[stateName];\n  var stateRef = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])(null);\n  var fillKey = stateData.fillKey;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      isHovered = _React$useState2[0],\n      setIsHovered = _React$useState2[1];\n\n  var fillColor = _constants__WEBPACK_IMPORTED_MODULE_5__[\"PossibleFills\"][fillKey];\n  var electoralVotes = stateData['Electoral Votes'];\n\n  if (true) {\n    Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useLayoutEffect\"])(function () {\n      console.log(focusedState);\n      console.log(stateRef);\n      if (stateRef.current === null) return;\n\n      if (focusedState === stateName) {\n        stateRef.current.scrollIntoView();\n        setIsHovered(true);\n      } else {\n        setIsHovered(false);\n      }\n    }, [focusedState]);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    ref: stateRef,\n    flexBasis: \"\".concat(electoralVotes * 7, \"px\"),\n    flexShrink: 0,\n    flexGrow: 1,\n    order: stateOrder.indexOf(stateName),\n    onClick: function onClick() {\n      updateUserSelection(stateName, fillKey);\n    },\n    onMouseEnter: function onMouseEnter() {\n      setIsHovered(true);\n    },\n    onFocus: function onFocus() {\n      setIsHovered(true);\n    },\n    onBlur: function onBlur() {\n      setIsHovered(true);\n    },\n    onMouseLeave: function onMouseLeave() {\n      setIsHovered(false);\n    },\n    id: stateName,\n    className: \"State\",\n    style: {\n      textAlign: 'center',\n      cursor: 'pointer',\n      marginRight: '1px',\n      borderBottom: \"8px solid \".concat(isHovered ? fillColor : 'white'),\n      boxShadow: isHovered ? 'rgba(0, 0, 0, 0.8)' : undefined,\n      background: fillColor,\n      color: 'white',\n      padding: '10px'\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      children: stateName\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      style: {\n        fontSize: '0.5rem'\n      },\n      children: electoralVotes\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 5\n    }, _this)]\n  }, stateName, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 10\n  }, _this);\n};\n\n_s(State, \"5fw0avZKZMp5pWONTbBbytQ5wpM=\");\n\n_c = State;\n\nvar Container = function Container() {\n  _s2();\n\n  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useContext\"])(_DataContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n      data = _useContext2.data;\n\n  if (data === undefined) return null;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    display: \"flex\",\n    flexDirection: \"row\",\n    style: {\n      overflowX: 'scroll'\n    },\n    width: \"100vw\",\n    children: Object.entries(data).map(function (_ref2) {\n      var _ref3 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref2, 1),\n          stateName = _ref3[0];\n\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(State, {\n        stateName: stateName\n      }, stateName, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 7\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 68,\n    columnNumber: 10\n  }, _this);\n};\n\n_s2(Container, \"0hAPxt73XWcCCQAWfZjlyZ/wuPM=\");\n\n_c2 = Container;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Container);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"State\");\n$RefreshReg$(_c2, \"Container\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL1N0YXRlcy5qcz85OTg0Il0sIm5hbWVzIjpbIlN0YXRlIiwic3RhdGVOYW1lIiwidXNlQ29udGV4dCIsIkRhdGFDb250ZXh0IiwiZm9jdXNlZFN0YXRlIiwic3RhdGVPcmRlciIsImRhdGEiLCJ1cGRhdGVVc2VyU2VsZWN0aW9uIiwic3RhdGVEYXRhIiwic3RhdGVSZWYiLCJ1c2VSZWYiLCJmaWxsS2V5IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImlzSG92ZXJlZCIsInNldElzSG92ZXJlZCIsImZpbGxDb2xvciIsIlBvc3NpYmxlRmlsbHMiLCJlbGVjdG9yYWxWb3RlcyIsInVzZUxheW91dEVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJpbmRleE9mIiwidGV4dEFsaWduIiwiY3Vyc29yIiwibWFyZ2luUmlnaHQiLCJib3JkZXJCb3R0b20iLCJib3hTaGFkb3ciLCJ1bmRlZmluZWQiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJwYWRkaW5nIiwiZm9udFNpemUiLCJDb250YWluZXIiLCJvdmVyZmxvd1giLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUFtQjtBQUFBOztBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7O0FBQUEsb0JBQ2lDQyx3REFBVSxDQUFDQyxvREFBRCxDQUQzQztBQUFBLE1BQ3ZCQyxZQUR1QixlQUN2QkEsWUFEdUI7QUFBQSxNQUNUQyxVQURTLGVBQ1RBLFVBRFM7QUFBQSxNQUNHQyxJQURILGVBQ0dBLElBREg7QUFBQSxNQUNTQyxtQkFEVCxlQUNTQSxtQkFEVDs7QUFFL0IsTUFBTUMsU0FBUyxHQUFHRixJQUFJLENBQUNMLFNBQUQsQ0FBdEI7QUFDQSxNQUFNUSxRQUFRLEdBQUdDLG9E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REg7QUFFTCxpQkFBYSxFQUFDLEtBRlQ7QUFHTCxTQUFLLEVBQUU7QUFBRU0sZUFBUyxFQUFFO0FBQWIsS0FIRjtBQUlMLFNBQUssRUFBQyxPQUpEO0FBQUEsY0FNSkMsTUFBTSxDQUFDQyxPQUFQLENBQWVoQyxJQUFmLEVBQXFCaUMsR0FBckIsQ0FBeUI7QUFBQTtBQUFBLFVBQUV0QyxTQUFGOztBQUFBLDBCQUN4QixxRUFBQyxLQUFEO0FBQXVCLGlCQUFTLEVBQUVBO0FBQWxDLFNBQVlBLFNBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUR3QjtBQUFBLEtBQXpCO0FBTkk7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBVUQsQ0FmRDs7SUFBTWtDLFM7O01BQUFBLFM7QUFpQlNBLHdFQUFmIiwiZmlsZSI6Ii4vbGliL1N0YXRlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VMYXlvdXRFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEYXRhQ29udGV4dCBmcm9tICcuL0RhdGFDb250ZXh0J1xuaW1wb3J0IHsgUG9zc2libGVGaWxscyB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuaW1wb3J0IEJveCBmcm9tICcuL0JveCc7XG5cbmNvbnN0IFN0YXRlID0gKHsgc3RhdGVOYW1lIH0pID0+IHtcbiAgY29uc3QgeyBmb2N1c2VkU3RhdGUsIHN0YXRlT3JkZXIsIGRhdGEsIHVwZGF0ZVVzZXJTZWxlY3Rpb24gfSA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpXG4gIGNvbnN0IHN0YXRlRGF0YSA9IGRhdGFbc3RhdGVOYW1lXVxuICBjb25zdCBzdGF0ZVJlZiA9IHVzZVJlZihudWxsKVxuXG4gIGNvbnN0IHsgZmlsbEtleSB9ID0gc3RhdGVEYXRhXG4gIGNvbnN0IFtpc0hvdmVyZWQsIHNldElzSG92ZXJlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgZmlsbENvbG9yID0gUG9zc2libGVGaWxsc1tmaWxsS2V5XVxuICBjb25zdCBlbGVjdG9yYWxWb3RlcyA9IHN0YXRlRGF0YVsnRWxlY3RvcmFsIFZvdGVzJ11cblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhmb2N1c2VkU3RhdGUpXG4gICAgICBjb25zb2xlLmxvZyhzdGF0ZVJlZilcbiAgICAgIGlmIChzdGF0ZVJlZi5jdXJyZW50ID09PSBudWxsKSByZXR1cm5cblxuICAgICAgaWYgKGZvY3VzZWRTdGF0ZSA9PT0gc3RhdGVOYW1lKSB7XG4gICAgICAgIHN0YXRlUmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgICBzZXRJc0hvdmVyZWQodHJ1ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldElzSG92ZXJlZChmYWxzZSlcbiAgICAgIH1cbiAgICB9LCBbZm9jdXNlZFN0YXRlXSlcbiAgfVxuXG4gIHJldHVybiA8Qm94XG4gICAgcmVmPXtzdGF0ZVJlZn1cbiAgICBmbGV4QmFzaXM9e2Ake2VsZWN0b3JhbFZvdGVzKjd9cHhgfVxuICAgIGZsZXhTaHJpbms9ezB9XG4gICAgZmxleEdyb3c9ezF9XG4gICAga2V5PXtzdGF0ZU5hbWV9XG4gICAgb3JkZXI9e3N0YXRlT3JkZXIuaW5kZXhPZihzdGF0ZU5hbWUpfVxuICAgIG9uQ2xpY2s9eygpID0+IHsgdXBkYXRlVXNlclNlbGVjdGlvbihzdGF0ZU5hbWUsIGZpbGxLZXkpIH19XG4gICAgb25Nb3VzZUVudGVyPXsoKSA9PiB7IHNldElzSG92ZXJlZCh0cnVlKSB9fVxuICAgIG9uRm9jdXM9eygpID0+IHsgc2V0SXNIb3ZlcmVkKHRydWUpIH19XG4gICAgb25CbHVyPXsoKSA9PiB7IHNldElzSG92ZXJlZCh0cnVlKSB9fVxuICAgIG9uTW91c2VMZWF2ZT17KCkgPT4geyBzZXRJc0hvdmVyZWQoZmFsc2UpIH19XG4gICAgaWQ9e3N0YXRlTmFtZX1cbiAgICBjbGFzc05hbWU9XCJTdGF0ZVwiXG4gICAgc3R5bGU9e3tcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIG1hcmdpblJpZ2h0OiAnMXB4JyxcbiAgICAgIGJvcmRlckJvdHRvbTogYDhweCBzb2xpZCAke2lzSG92ZXJlZCA/IGZpbGxDb2xvciA6ICd3aGl0ZSd9YCxcbiAgICAgIGJveFNoYWRvdzogaXNIb3ZlcmVkID8gJ3JnYmEoMCwgMCwgMCwgMC44KScgOiB1bmRlZmluZWQsXG4gICAgICBiYWNrZ3JvdW5kOiBmaWxsQ29sb3IsXG4gICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgIHBhZGRpbmc6ICcxMHB4JyxcbiAgICB9fVxuICA+XG4gICAgPEJveD57c3RhdGVOYW1lfTwvQm94PlxuICAgIDxCb3ggc3R5bGU9e3sgZm9udFNpemU6ICcwLjVyZW0nIH19PntlbGVjdG9yYWxWb3Rlc308L0JveD5cbiAgPC9Cb3g+XG59XG5cbmNvbnN0IENvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KVxuXG4gIGlmIChkYXRhID09PSB1bmRlZmluZWQpIHJldHVybiBudWxsXG5cbiAgcmV0dXJuIDxCb3hcbiAgICBkaXNwbGF5PSdmbGV4J1xuICAgIGZsZXhEaXJlY3Rpb249J3JvdydcbiAgICBzdHlsZT17eyBvdmVyZmxvd1g6ICdzY3JvbGwnIH19XG4gICAgd2lkdGg9JzEwMHZ3J1xuICA+XG4gICAge09iamVjdC5lbnRyaWVzKGRhdGEpLm1hcCgoW3N0YXRlTmFtZV0pID0+IChcbiAgICAgIDxTdGF0ZSBrZXk9e3N0YXRlTmFtZX0gc3RhdGVOYW1lPXtzdGF0ZU5hbWV9IC8+XG4gICAgKSl9XG4gIDwvQm94PlxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/States.js\n");

/***/ })

})