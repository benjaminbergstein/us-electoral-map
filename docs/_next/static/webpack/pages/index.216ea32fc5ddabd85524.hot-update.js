webpackHotUpdate_N_E("pages/index",{

/***/ "./lib/States.js":
/*!***********************!*\
  !*** ./lib/States.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _DataContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DataContext */ \"./lib/DataContext.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ \"./lib/constants.js\");\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Box */ \"./lib/Box.js\");\n\n\n\n\nvar _jsxFileName = \"/app/lib/States.js\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\nvar State = function State(_ref) {\n  _s();\n\n  var stateName = _ref.stateName,\n      fillKey = _ref.fillKey,\n      data = _ref.data;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_DataContext__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n      updateUserSelection = _useContext.updateUserSelection;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n      isHovered = _React$useState2[0],\n      setIsHovered = _React$useState2[1];\n\n  var fillColor = _constants__WEBPACK_IMPORTED_MODULE_6__[\"PossibleFills\"][fillKey];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    flexBasis: \"\".concat(data['Electoral Votes'] * 7, \"px\"),\n    flexShrink: 0,\n    flexGrow: 1,\n    onClick: function onClick() {\n      updateUserSelection(stateName, fillKey);\n    },\n    onMouseEnter: function onMouseEnter() {\n      setIsHovered(true);\n    },\n    onMouseLeave: function onMouseLeave() {\n      setIsHovered(false);\n    },\n    id: stateName,\n    className: \"State\",\n    style: {\n      textAlign: 'center',\n      cursor: 'pointer',\n      borderRight: '1px solid white',\n      borderBottom: \"8px solid \".concat(isHovered ? fillColor : 'white'),\n      background: fillColor,\n      color: 'white',\n      boxShadow: isHovered ? 'inset 0px 0px 3px 3px black' : 'none',\n      padding: isHovered ? '25px' : '10px'\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      children: stateName\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      style: {\n        fontSize: '0.5rem'\n      },\n      children: data['Electoral Votes']\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 5\n    }, _this)]\n  }, stateName, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 10\n  }, _this);\n};\n\n_s(State, \"PeKcQOEXzXfVupvDJ6Jd5J1QOZU=\");\n\n_c = State;\n\nvar Container = function Container() {\n  _s2();\n\n  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_DataContext__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n      data = _useContext2.data;\n\n  if (data === undefined) return null;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    display: \"flex\",\n    flexDirection: \"row\",\n    style: {\n      overflowX: 'scroll'\n    },\n    width: \"100vw\",\n    children: Object.entries(data).map(function (_ref3) {\n      var _ref4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref3, 2),\n          stateName = _ref4[0],\n          _ref2 = _ref4[1];\n\n      var fillKey = _ref2.fillKey,\n          data = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref2, [\"fillKey\"]);\n\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(State, {\n        stateName: stateName,\n        fillKey: fillKey,\n        data: data\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 7\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 10\n  }, _this);\n};\n\n_s2(Container, \"0hAPxt73XWcCCQAWfZjlyZ/wuPM=\");\n\n_c2 = Container;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Container);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"State\");\n$RefreshReg$(_c2, \"Container\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL1N0YXRlcy5qcz85OTg0Il0sIm5hbWVzIjpbIlN0YXRlIiwic3RhdGVOYW1lIiwiZmlsbEtleSIsImRhdGEiLCJ1c2VDb250ZXh0IiwiRGF0YUNvbnRleHQiLCJ1cGRhdGVVc2VyU2VsZWN0aW9uIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImlzSG92ZXJlZCIsInNldElzSG92ZXJlZCIsImZpbGxDb2xvciIsIlBvc3NpYmxlRmlsbHMiLCJ0ZXh0QWxpZ24iLCJjdXJzb3IiLCJib3JkZXJSaWdodCIsImJvcmRlckJvdHRvbSIsImJhY2tncm91bmQiLCJjb2xvciIsImJveFNoYWRvdyIsInBhZGRpbmciLCJmb250U2l6ZSIsIkNvbnRhaW5lciIsInVuZGVmaW5lZCIsIm92ZXJmbG93WCIsIk9iamVjdCIsImVudHJpZXMiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBa0M7QUFBQTs7QUFBQSxNQUEvQkMsU0FBK0IsUUFBL0JBLFNBQStCO0FBQUEsTUFBcEJDLE9BQW9CLFFBQXBCQSxPQUFvQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSxvQkFDZEMsd0RBQVUsQ0FBQ0Msb0RBQUQsQ0FESTtBQUFBLE1BQ3RDQyxtQkFEc0MsZUFDdENBLG1CQURzQzs7QUFBQSx3QkFFWkMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FGWTtBQUFBO0FBQUEsTUFFdkNDLFNBRnVDO0FBQUEsTUFFNUJDLFlBRjRCOztBQUc5QyxNQUFNQyxTQUFTLEdBQUdDLHdEQUFhLENBQUNWLE9BQUQsQ0FBL0I7QUFFQSxzQkFBTyxxRUFBQyw0Q0FBRDtBQUNMLGFBQVMsWUFBS0MsSUFBSSxDQUFDLGlCQUFELENBQUosR0FBd0IsQ0FBN0IsT0FESjtBQUVMLGNBQVUsRUFBRSxDQUZQO0FBR0wsWUFBUSxFQUFFLENBSEw7QUFLTCxXQUFPLEVBQUUsbUJBQU07QUFBRUcseUJBQW1CLENBQUNMLFNBQUQsRUFBWUMsT0FBWixDQUFuQjtBQUF5QyxLQUxyRDtBQU1MLGdCQUFZLEVBQUUsd0JBQU07QUFBRVEsa0JBQVksQ0FBQyxJQUFELENBQVo7QUFBb0IsS0FOckM7QUFPTCxnQkFBWSxFQUFFLHdCQUFNO0FBQUVBLGtCQUFZLENBQUMsS0FBRCxDQUFaO0FBQXFCLEtBUHRDO0FBUUwsTUFBRSxFQUFFVCxTQVJDO0FBU0wsYUFBUyxFQUFDLE9BVEw7QUFVTCxTQUFLLEVBQUU7QUFDTFksZUFBUyxFQUFFLFFBRE47QUFFTEMsWUFBTSxFQUFFLFNBRkg7QUFHTEMsaUJBQVcsRUFBRSxpQkFIUjtBQUlMQyxrQkFBWSxzQkFBZVAsU0FBUyxHQUFHRSxTQUFILEdBQWUsT0FBdkMsQ0FKUDtBQUtMTSxnQkFBVSxFQUFFTixTQUxQO0FBTUxPLFdBQUssRUFBRSxPQU5GO0FBT0xDLGVBQVMsRUFBRVYsU0FBUyxHQUFHLDZCQUFILEdBQW1DLE1BUGxEO0FBUUxXLGFBQU8sRUFBRVgsU0FBUyxHQUFHLE1BQUgsR0FBWTtBQVJ6QixLQVZGO0FBQUEsNEJBcUJMLHFFQUFDLDRDQUFEO0FBQUEsZ0JBQU1SO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXJCSyxlQXNCTCxxRUFBQyw0Q0FBRDtBQUFLLFdBQUssRUFBRTtBQUFFb0IsZ0JBQVEsRUFBRTtBQUFaLE9BQVo7QUFBQSxnQkFBcUNsQixJQUFJLENBQUMsaUJBQUQ7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXRCSztBQUFBLEtBSUFGLFNBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBd0JELENBN0JEOztHQUFNRCxLOztLQUFBQSxLOztBQThCTixJQUFNc0IsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLHFCQUNMbEIsd0RBQVUsQ0FBQ0Msb0RBQUQsQ0FETDtBQUFBLE1BQ2RGLElBRGMsZ0JBQ2RBLElBRGM7O0FBR3RCLE1BQUlBLElBQUksS0FBS29CLFNBQWIsRUFBd0IsT0FBTyxJQUFQO0FBRXhCLHNCQUFPLHFFQUFDLDRDQUFEO0FBQ0wsV0FBTyxFQUFDLE1BREg7QUFFTCxpQkFBYSxFQUFDLEtBRlQ7QUFHTCxTQUFLLEVBQUU7QUFBRUMsZUFBUyxFQUFFO0FBQWIsS0FIRjtBQUlMLFNBQUssRUFBQyxPQUpEO0FBQUEsY0FNSkMsTUFBTSxDQUFDQyxPQUFQLENBQWV2QixJQUFmLEVBQXFCd0IsR0FBckIsQ0FBeUI7QUFBQTtBQUFBLFVBQUUxQixTQUFGO0FBQUE7O0FBQUEsVUFBZUMsT0FBZixTQUFlQSxPQUFmO0FBQUEsVUFBMkJDLElBQTNCOztBQUFBLDBCQUN4QixxRUFBQyxLQUFEO0FBQU8saUJBQVMsRUFBRUYsU0FBbEI7QUFBNkIsZUFBTyxFQUFFQyxPQUF0QztBQUErQyxZQUFJLEVBQUVDO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEd0I7QUFBQSxLQUF6QjtBQU5JO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQVVELENBZkQ7O0lBQU1tQixTOztNQUFBQSxTO0FBaUJTQSx3RUFBZiIsImZpbGUiOiIuL2xpYi9TdGF0ZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRGF0YUNvbnRleHQgZnJvbSAnLi9EYXRhQ29udGV4dCdcbmltcG9ydCB7IFBvc3NpYmxlRmlsbHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmltcG9ydCBCb3ggZnJvbSAnLi9Cb3gnO1xuXG5jb25zdCBTdGF0ZSA9ICh7IHN0YXRlTmFtZSwgZmlsbEtleSwgZGF0YSB9KSA9PiB7XG4gIGNvbnN0IHsgdXBkYXRlVXNlclNlbGVjdGlvbiB9ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dClcbiAgY29uc3QgW2lzSG92ZXJlZCwgc2V0SXNIb3ZlcmVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBmaWxsQ29sb3IgPSBQb3NzaWJsZUZpbGxzW2ZpbGxLZXldXG5cbiAgcmV0dXJuIDxCb3hcbiAgICBmbGV4QmFzaXM9e2Ake2RhdGFbJ0VsZWN0b3JhbCBWb3RlcyddKjd9cHhgfVxuICAgIGZsZXhTaHJpbms9ezB9XG4gICAgZmxleEdyb3c9ezF9XG4gICAga2V5PXtzdGF0ZU5hbWV9XG4gICAgb25DbGljaz17KCkgPT4geyB1cGRhdGVVc2VyU2VsZWN0aW9uKHN0YXRlTmFtZSwgZmlsbEtleSkgfX1cbiAgICBvbk1vdXNlRW50ZXI9eygpID0+IHsgc2V0SXNIb3ZlcmVkKHRydWUpIH19XG4gICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB7IHNldElzSG92ZXJlZChmYWxzZSkgfX1cbiAgICBpZD17c3RhdGVOYW1lfVxuICAgIGNsYXNzTmFtZT1cIlN0YXRlXCJcbiAgICBzdHlsZT17e1xuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgYm9yZGVyUmlnaHQ6ICcxcHggc29saWQgd2hpdGUnLFxuICAgICAgYm9yZGVyQm90dG9tOiBgOHB4IHNvbGlkICR7aXNIb3ZlcmVkID8gZmlsbENvbG9yIDogJ3doaXRlJ31gLFxuICAgICAgYmFja2dyb3VuZDogZmlsbENvbG9yLFxuICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICBib3hTaGFkb3c6IGlzSG92ZXJlZCA/ICdpbnNldCAwcHggMHB4IDNweCAzcHggYmxhY2snIDogJ25vbmUnLFxuICAgICAgcGFkZGluZzogaXNIb3ZlcmVkID8gJzI1cHgnIDogJzEwcHgnXG4gICAgfX1cbiAgPlxuICAgIDxCb3g+e3N0YXRlTmFtZX08L0JveD5cbiAgICA8Qm94IHN0eWxlPXt7IGZvbnRTaXplOiAnMC41cmVtJyB9fT57ZGF0YVsnRWxlY3RvcmFsIFZvdGVzJ119PC9Cb3g+XG4gIDwvQm94PlxufVxuY29uc3QgQ29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCB7IGRhdGEgfSA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpXG5cbiAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGxcblxuICByZXR1cm4gPEJveFxuICAgIGRpc3BsYXk9J2ZsZXgnXG4gICAgZmxleERpcmVjdGlvbj0ncm93J1xuICAgIHN0eWxlPXt7IG92ZXJmbG93WDogJ3Njcm9sbCcgfX1cbiAgICB3aWR0aD0nMTAwdncnXG4gID5cbiAgICB7T2JqZWN0LmVudHJpZXMoZGF0YSkubWFwKChbc3RhdGVOYW1lLCB7IGZpbGxLZXksIC4uLmRhdGEgfV0pID0+IChcbiAgICAgIDxTdGF0ZSBzdGF0ZU5hbWU9e3N0YXRlTmFtZX0gZmlsbEtleT17ZmlsbEtleX0gZGF0YT17ZGF0YX0gLz5cbiAgICApKX1cbiAgPC9Cb3g+XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/States.js\n");

/***/ })

})