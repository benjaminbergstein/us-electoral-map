webpackHotUpdate_N_E(1,{

/***/ "./lib/Map.js":
/*!********************!*\
  !*** ./lib/Map.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_zoom_pan_pinch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-zoom-pan-pinch */ \"./node_modules/react-zoom-pan-pinch/dist/index.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _DataContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DataContext */ \"./lib/DataContext.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ \"./lib/constants.js\");\n/* harmony import */ var datamaps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! datamaps */ \"./node_modules/datamaps/dist/datamaps.all.js\");\n/* harmony import */ var datamaps__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(datamaps__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\nvar _jsxFileName = \"/app/lib/Map.js\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar POPUP_TEMPLATE = function POPUP_TEMPLATE(state, data) {\n  return \"<span style=\\\"position: relative; left: 30px; top: 200px; color: white; font-weight: 900; text-shadow: 0 0 1px #000, 1px 1px 1px #000;\\\">\".concat(state.properties.name, \" (\").concat(data['Electoral Votes'], \")</span>\");\n};\n\n_c = POPUP_TEMPLATE;\n\nvar initalizeMap = function initalizeMap(node, data) {\n  if (window !== undefined) {\n    var map = new datamaps__WEBPACK_IMPORTED_MODULE_7___default.a({\n      element: node,\n      scope: 'usa',\n      data: data,\n      fills: _constants__WEBPACK_IMPORTED_MODULE_6__[\"PossibleFills\"],\n      geographyConfig: {\n        highlightOnHover: true,\n        highlightFillColor: false,\n        highlightBorderColor: \"white\",\n        highlightBorderOpacity: '0.65',\n        highlightBorderWidth: \"4px\",\n        highlightFillOpacity: '0.85',\n        popupTemplate: POPUP_TEMPLATE\n      }\n    });\n    return map;\n  }\n};\n\nvar Toggle = function Toggle(_ref) {\n  var onClick = _ref.onClick,\n      children = _ref.children;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    onClick: onClick,\n    style: {\n      display: 'flex',\n      justifyContent: 'center',\n      alignContent: 'center',\n      boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.2)',\n      cursor: 'pointer',\n      borderRadius: '30px',\n      background: 'white',\n      color: 'black',\n      height: '30px',\n      width: '30px'\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 3\n  }, _this);\n};\n\n_c2 = Toggle;\n\nvar StateToggle = function StateToggle(_ref2) {\n  var stateName = _ref2.stateName;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    style: {\n      display: 'flex',\n      justifyContent: 'center',\n      alignContent: 'center',\n      boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.2)',\n      cursor: 'pointer',\n      borderRadius: '30px',\n      background: 'white',\n      color: 'black',\n      height: '30px',\n      width: '30px'\n    },\n    children: stateName\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 54,\n    columnNumber: 3\n  }, _this);\n};\n\n_c3 = StateToggle;\n\nvar Panel = function Panel() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    style: {\n      position: 'absolute',\n      top: '15px',\n      left: '15px'\n    },\n    children: [!isOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Toggle, {\n      onClick: function onClick() {\n        return setIsOpen(true);\n      },\n      children: \"+\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 19\n    }, _this), isOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Toggle, {\n        onClick: function onClick() {\n          return setIsOpen(false);\n        },\n        children: \"\\xD7\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      style: {\n        boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.2)',\n        marginTop: '15px'\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(StateToggle, {\n        stateName: \"ME1\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 76,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Panel, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n\n_c4 = Panel;\n\nvar Container = function Container() {\n  _s2();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_DataContext__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n      data = _useContext.data,\n      windowSize = _useContext.windowSize,\n      updateUserSelection = _useContext.updateUserSelection;\n\n  var ref = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(null);\n  var mapRef = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    if (data === undefined) return;\n    if (ref.current === null) return;\n    ref.current.innerHTML = '';\n    mapRef.current = initalizeMap(ref.current, data);\n    mapRef.current.svg.selectAll('.datamaps-subunit').on('click', function (data) {\n      updateUserSelection(data.id);\n    });\n  }, [data].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(windowSize)));\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    style: {\n      position: 'relative',\n      height: \"100%\"\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Panel, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      style: {\n        height: '100%'\n      },\n      ref: ref\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 108,\n    columnNumber: 10\n  }, _this);\n};\n\n_s2(Container, \"vRhCfOy3Bw9U4AeNRsmjqyzFNOc=\");\n\n_c5 = Container;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Container);\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"POPUP_TEMPLATE\");\n$RefreshReg$(_c2, \"Toggle\");\n$RefreshReg$(_c3, \"StateToggle\");\n$RefreshReg$(_c4, \"Panel\");\n$RefreshReg$(_c5, \"Container\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL01hcC5qcz9jNTkzIl0sIm5hbWVzIjpbIlBPUFVQX1RFTVBMQVRFIiwic3RhdGUiLCJkYXRhIiwicHJvcGVydGllcyIsIm5hbWUiLCJpbml0YWxpemVNYXAiLCJub2RlIiwid2luZG93IiwidW5kZWZpbmVkIiwibWFwIiwiRGF0YW1hcCIsImVsZW1lbnQiLCJzY29wZSIsImZpbGxzIiwiUG9zc2libGVGaWxscyIsImdlb2dyYXBoeUNvbmZpZyIsImhpZ2hsaWdodE9uSG92ZXIiLCJoaWdobGlnaHRGaWxsQ29sb3IiLCJoaWdobGlnaHRCb3JkZXJDb2xvciIsImhpZ2hsaWdodEJvcmRlck9wYWNpdHkiLCJoaWdobGlnaHRCb3JkZXJXaWR0aCIsImhpZ2hsaWdodEZpbGxPcGFjaXR5IiwicG9wdXBUZW1wbGF0ZSIsIlRvZ2dsZSIsIm9uQ2xpY2siLCJjaGlsZHJlbiIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduQ29udGVudCIsImJveFNoYWRvdyIsImN1cnNvciIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmQiLCJjb2xvciIsImhlaWdodCIsIndpZHRoIiwiU3RhdGVUb2dnbGUiLCJzdGF0ZU5hbWUiLCJQYW5lbCIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwibWFyZ2luVG9wIiwiQ29udGFpbmVyIiwidXNlQ29udGV4dCIsIkRhdGFDb250ZXh0Iiwid2luZG93U2l6ZSIsInVwZGF0ZVVzZXJTZWxlY3Rpb24iLCJyZWYiLCJ1c2VSZWYiLCJtYXBSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwiaW5uZXJIVE1MIiwic3ZnIiwic2VsZWN0QWxsIiwib24iLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENB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QUdELEdBVlEsR0FVTDFELElBVkssc0dBVUkrQyxVQVZKLEdBQVQ7QUFZQSxzQkFBTztBQUFLLFNBQUssRUFBRTtBQUFFUCxjQUFRLEVBQUUsVUFBWjtBQUF3QlIsWUFBTSxFQUFFO0FBQWhDLEtBQVo7QUFBQSw0QkFDTCxxRUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESyxlQUVMO0FBQUssV0FBSyxFQUFFO0FBQUVBLGNBQU0sRUFBRTtBQUFWLE9BQVo7QUFBZ0MsU0FBRyxFQUFFaUI7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBSUQsQ0FyQkQ7O0lBQU1MLFM7O01BQUFBLFM7QUF1QlNBLHdFQUFmIiwiZmlsZSI6Ii4vbGliL01hcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcbmltcG9ydCB7IFRyYW5zZm9ybVdyYXBwZXIsIFRyYW5zZm9ybUNvbXBvbmVudCB9IGZyb20gXCJyZWFjdC16b29tLXBhbi1waW5jaFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEYXRhQ29udGV4dCBmcm9tICcuL0RhdGFDb250ZXh0J1xuaW1wb3J0IHsgUG9zc2libGVGaWxscyB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuaW1wb3J0IERhdGFtYXAgZnJvbSAnZGF0YW1hcHMnXG5cbmNvbnN0IFBPUFVQX1RFTVBMQVRFID0gKHN0YXRlLCBkYXRhKSA9PiBgPHNwYW4gc3R5bGU9XCJwb3NpdGlvbjogcmVsYXRpdmU7IGxlZnQ6IDMwcHg7IHRvcDogMjAwcHg7IGNvbG9yOiB3aGl0ZTsgZm9udC13ZWlnaHQ6IDkwMDsgdGV4dC1zaGFkb3c6IDAgMCAxcHggIzAwMCwgMXB4IDFweCAxcHggIzAwMDtcIj4ke3N0YXRlLnByb3BlcnRpZXMubmFtZX0gKCR7ZGF0YVsnRWxlY3RvcmFsIFZvdGVzJ119KTwvc3Bhbj5gO1xuXG5jb25zdCBpbml0YWxpemVNYXAgPSAobm9kZSwgZGF0YSkgPT4ge1xuICBpZiAod2luZG93ICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBtYXAgPSBuZXcgRGF0YW1hcCh7XG4gICAgICBlbGVtZW50OiBub2RlLFxuICAgICAgc2NvcGU6ICd1c2EnLFxuICAgICAgZGF0YSxcbiAgICAgIGZpbGxzOiBQb3NzaWJsZUZpbGxzLFxuICAgICAgZ2VvZ3JhcGh5Q29uZmlnOiB7XG4gICAgICAgIGhpZ2hsaWdodE9uSG92ZXI6IHRydWUsXG4gICAgICAgIGhpZ2hsaWdodEZpbGxDb2xvcjogZmFsc2UsXG4gICAgICAgIGhpZ2hsaWdodEJvcmRlckNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgIGhpZ2hsaWdodEJvcmRlck9wYWNpdHk6ICcwLjY1JyxcbiAgICAgICAgaGlnaGxpZ2h0Qm9yZGVyV2lkdGg6IFwiNHB4XCIsXG4gICAgICAgIGhpZ2hsaWdodEZpbGxPcGFjaXR5OiAnMC44NScsXG4gICAgICAgIHBvcHVwVGVtcGxhdGU6IFBPUFVQX1RFTVBMQVRFLFxuICAgICAgfSxcbiAgICB9KVxuXG4gICAgcmV0dXJuIG1hcFxuICB9XG59XG5cbmNvbnN0IFRvZ2dsZSA9ICh7IG9uQ2xpY2ssIGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdlxuICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgc3R5bGU9e3tcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGFsaWduQ29udGVudDogJ2NlbnRlcicsXG4gICAgICBib3hTaGFkb3c6ICcxcHggMXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpJyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMzBweCcsXG4gICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxuICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICBoZWlnaHQ6ICczMHB4JyxcbiAgICAgIHdpZHRoOiAnMzBweCdcbiAgICB9fVxuICA+XG4gICAge2NoaWxkcmVufVxuICA8L2Rpdj5cbilcblxuY29uc3QgU3RhdGVUb2dnbGUgPSAoeyBzdGF0ZU5hbWUgfSkgPT4gKFxuICA8ZGl2XG4gICAgc3R5bGU9e3tcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGFsaWduQ29udGVudDogJ2NlbnRlcicsXG4gICAgICBib3hTaGFkb3c6ICcxcHggMXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpJyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMzBweCcsXG4gICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxuICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICBoZWlnaHQ6ICczMHB4JyxcbiAgICAgIHdpZHRoOiAnMzBweCdcbiAgICB9fVxuICA+XG4gICAge3N0YXRlTmFtZX1cbiAgPC9kaXY+XG4pXG5cbmNvbnN0IFBhbmVsID0gKCkgPT4ge1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6ICcxNXB4JywgbGVmdDogJzE1cHgnIH19PlxuICAgICAgeyFpc09wZW4gJiYgPFRvZ2dsZSBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4odHJ1ZSl9Pis8L1RvZ2dsZT59XG4gICAgICB7aXNPcGVuICYmIDw+XG4gICAgICAgIDxUb2dnbGUgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKGZhbHNlKX0+JnRpbWVzOzwvVG9nZ2xlPlxuICAgICAgPC8+fVxuICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICBib3hTaGFkb3c6ICcxcHggMXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpJyxcbiAgICAgICAgbWFyZ2luVG9wOiAnMTVweCcsXG4gICAgICB9fT5cbiAgICAgICAgPFN0YXRlVG9nZ2xlIHN0YXRlTmFtZT1cIk1FMVwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBDb250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgZGF0YSwgd2luZG93U2l6ZSwgdXBkYXRlVXNlclNlbGVjdGlvbiB9ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dClcbiAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpXG4gIGNvbnN0IG1hcFJlZiA9IHVzZVJlZihudWxsKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuXG4gICAgaWYgKHJlZi5jdXJyZW50ID09PSBudWxsKSByZXR1cm5cblxuICAgIHJlZi5jdXJyZW50LmlubmVySFRNTCA9ICcnXG4gICAgbWFwUmVmLmN1cnJlbnQgPSBpbml0YWxpemVNYXAocmVmLmN1cnJlbnQsIGRhdGEpXG5cbiAgICBtYXBSZWYuY3VycmVudC5zdmcuc2VsZWN0QWxsKCcuZGF0YW1hcHMtc3VidW5pdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIHVwZGF0ZVVzZXJTZWxlY3Rpb24oZGF0YS5pZClcbiAgICB9KTtcbiAgfSwgW2RhdGEsIC4uLndpbmRvd1NpemVdKVxuXG4gIHJldHVybiA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBoZWlnaHQ6IFwiMTAwJVwiIH19PlxuICAgIDxQYW5lbCAvPlxuICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScgfX0gcmVmPXtyZWZ9PjwvZGl2PlxuICA8L2Rpdj5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/Map.js\n");

/***/ })

})