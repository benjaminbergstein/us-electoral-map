webpackHotUpdate_N_E(1,{

/***/ "./lib/Map.js":
/*!********************!*\
  !*** ./lib/Map.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_zoom_pan_pinch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-zoom-pan-pinch */ \"./node_modules/react-zoom-pan-pinch/dist/index.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _DataContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DataContext */ \"./lib/DataContext.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ \"./lib/constants.js\");\n/* harmony import */ var datamaps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! datamaps */ \"./node_modules/datamaps/dist/datamaps.all.js\");\n/* harmony import */ var datamaps__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(datamaps__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\nvar _jsxFileName = \"/app/lib/Map.js\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar POPUP_TEMPLATE = function POPUP_TEMPLATE(state, data) {\n  return \"<span style=\\\"position: relative; left: 30px; top: 200px; color: white; font-weight: 900; text-shadow: 0 0 1px #000, 1px 1px 1px #000;\\\">\".concat(state.properties.name, \" (\").concat(data['Electoral Votes'], \")</span>\");\n};\n\n_c = POPUP_TEMPLATE;\n\nvar initalizeMap = function initalizeMap(node, data) {\n  if (window !== undefined) {\n    var map = new datamaps__WEBPACK_IMPORTED_MODULE_7___default.a({\n      element: node,\n      scope: 'usa',\n      data: data,\n      fills: _constants__WEBPACK_IMPORTED_MODULE_6__[\"PossibleFills\"],\n      geographyConfig: {\n        highlightOnHover: true,\n        highlightFillColor: false,\n        highlightBorderColor: \"white\",\n        highlightBorderOpacity: '0.65',\n        highlightBorderWidth: \"4px\",\n        highlightFillOpacity: '0.85',\n        popupTemplate: POPUP_TEMPLATE\n      }\n    });\n    return map;\n  }\n};\n\nvar Toggle = function Toggle(_ref) {\n  var _ref$background = _ref.background,\n      background = _ref$background === void 0 ? 'white' : _ref$background,\n      onClick = _ref.onClick,\n      children = _ref.children;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    onClick: onClick,\n    style: {\n      display: 'flex',\n      justifyContent: 'center',\n      alignContent: 'center',\n      boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.2)',\n      cursor: 'pointer',\n      borderRadius: '30px',\n      background: background,\n      color: 'black',\n      height: '30px',\n      width: '30px'\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 3\n  }, _this);\n};\n\n_c2 = Toggle;\n\nvar StateToggle = function StateToggle(_ref2) {\n  _s();\n\n  var stateName = _ref2.stateName;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_DataContext__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n      data = _useContext.data,\n      updateUserSelection = _useContext.updateUserSelection;\n\n  var color = _constants__WEBPACK_IMPORTED_MODULE_6__[\"PossibleFills\"][data[stateName].fillKey];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    style: {\n      display: 'flex',\n      justifyContent: 'space-between',\n      alignContent: 'center',\n      padding: '5px 15px',\n      width: '200px'\n    },\n    children: [stateName, \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Toggle, {\n      onClick: function onClick() {\n        return updateUserSelection(stateName);\n      },\n      background: color\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 17\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 58,\n    columnNumber: 10\n  }, _this);\n};\n\n_s(StateToggle, \"cnIokx41hXa0qW61oaPYTPdtx9E=\");\n\n_c3 = StateToggle;\n\nvar Panel = function Panel() {\n  _s2();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    style: {\n      position: 'absolute',\n      top: '15px',\n      left: '15px',\n      background: 'white'\n    },\n    children: [!isOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Toggle, {\n      onClick: function onClick() {\n        return setIsOpen(true);\n      },\n      children: \"+\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 19\n    }, _this), isOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Toggle, {\n        onClick: function onClick() {\n          return setIsOpen(false);\n        },\n        children: \"\\xD7\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        style: {\n          boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.2)',\n          marginTop: '15px'\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(StateToggle, {\n          stateName: \"ME1\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(StateToggle, {\n          stateName: \"ME2\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(StateToggle, {\n          stateName: \"NE2\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(StateToggle, {\n          stateName: \"DC\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(StateToggle, {\n          stateName: \"RI\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 75,\n    columnNumber: 5\n  }, _this);\n};\n\n_s2(Panel, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n\n_c4 = Panel;\n\nvar Container = function Container() {\n  _s3();\n\n  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_DataContext__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n      data = _useContext2.data,\n      windowSize = _useContext2.windowSize,\n      updateUserSelection = _useContext2.updateUserSelection;\n\n  var ref = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(null);\n  var mapRef = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    if (data === undefined) return;\n    if (ref.current === null) return;\n    ref.current.innerHTML = '';\n    mapRef.current = initalizeMap(ref.current, data);\n    mapRef.current.svg.selectAll('.datamaps-subunit').on('click', function (data) {\n      updateUserSelection(data.id);\n    });\n  }, [data].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(windowSize)));\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    style: {\n      position: 'relative',\n      height: \"100%\"\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Panel, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      style: {\n        height: '100%'\n      },\n      ref: ref\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 111,\n    columnNumber: 10\n  }, _this);\n};\n\n_s3(Container, \"vRhCfOy3Bw9U4AeNRsmjqyzFNOc=\");\n\n_c5 = Container;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Container);\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"POPUP_TEMPLATE\");\n$RefreshReg$(_c2, \"Toggle\");\n$RefreshReg$(_c3, \"StateToggle\");\n$RefreshReg$(_c4, \"Panel\");\n$RefreshReg$(_c5, \"Container\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL01hcC5qcz9jNTkzIl0sIm5hbWVzIjpbIlBPUFVQX1RFTVBMQVRFIiwic3RhdGUiLCJkYXRhIiwicHJvcGVydGllcyIsIm5hbWUiLCJpbml0YWxpemVNYXAiLCJub2RlIiwid2luZG93IiwidW5kZWZpbmVkIiwibWFwIiwiRGF0YW1hcCIsImVsZW1lbnQiLCJzY29wZSIsImZpbGxzIiwiUG9zc2libGVGaWxscyIsImdlb2dyYXBoeUNvbmZpZyIsImhpZ2hsaWdodE9uSG92ZXIiLCJoaWdobGlnaHRGaWxsQ29sb3IiLCJoaWdobGlnaHRCb3JkZXJDb2xvciIsImhpZ2hsaWdodEJvcmRlck9wYWNpdHkiLCJoaWdobGlnaHRCb3JkZXJXaWR0aCIsImhpZ2hsaWdodEZpbGxPcGFjaXR5IiwicG9wdXBUZW1wbGF0ZSIsIlRvZ2dsZSIsImJhY2tncm91bmQiLCJvbkNsaWNrIiwiY2hpbGRyZW4iLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkNvbnRlbnQiLCJib3hTaGFkb3ciLCJjdXJzb3IiLCJib3JkZXJSYWRpdXMiLCJjb2xvciIsImhlaWdodCIsIndpZHRoIiwiU3RhdGVUb2dnbGUiLCJzdGF0ZU5hbWUiLCJ1c2VDb250ZXh0IiwiRGF0YUNvbnRleHQiLCJ1cGRhdGVVc2VyU2VsZWN0aW9uIiwiZmlsbEtleSIsInBhZGRpbmciLCJQYW5lbCIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwibWFyZ2luVG9wIiwiQ29udGFpbmVyIiwid2luZG93U2l6ZSIsInJlZiIsInVzZVJlZiIsIm1hcFJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJpbm5lckhUTUwiLCJzdmciLCJzZWxlY3RBbGwiLCJvbiIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxjQUFj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QUFNRixTOztNQUFBQSxTO0FBdUJTQSx3RUFBZiIsImZpbGUiOiIuL2xpYi9NYXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5pbXBvcnQgeyBUcmFuc2Zvcm1XcmFwcGVyLCBUcmFuc2Zvcm1Db21wb25lbnQgfSBmcm9tIFwicmVhY3Qtem9vbS1wYW4tcGluY2hcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRGF0YUNvbnRleHQgZnJvbSAnLi9EYXRhQ29udGV4dCdcbmltcG9ydCB7IFBvc3NpYmxlRmlsbHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmltcG9ydCBEYXRhbWFwIGZyb20gJ2RhdGFtYXBzJ1xuXG5jb25zdCBQT1BVUF9URU1QTEFURSA9IChzdGF0ZSwgZGF0YSkgPT4gYDxzcGFuIHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlOyBsZWZ0OiAzMHB4OyB0b3A6IDIwMHB4OyBjb2xvcjogd2hpdGU7IGZvbnQtd2VpZ2h0OiA5MDA7IHRleHQtc2hhZG93OiAwIDAgMXB4ICMwMDAsIDFweCAxcHggMXB4ICMwMDA7XCI+JHtzdGF0ZS5wcm9wZXJ0aWVzLm5hbWV9ICgke2RhdGFbJ0VsZWN0b3JhbCBWb3RlcyddfSk8L3NwYW4+YDtcblxuY29uc3QgaW5pdGFsaXplTWFwID0gKG5vZGUsIGRhdGEpID0+IHtcbiAgaWYgKHdpbmRvdyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgbWFwID0gbmV3IERhdGFtYXAoe1xuICAgICAgZWxlbWVudDogbm9kZSxcbiAgICAgIHNjb3BlOiAndXNhJyxcbiAgICAgIGRhdGEsXG4gICAgICBmaWxsczogUG9zc2libGVGaWxscyxcbiAgICAgIGdlb2dyYXBoeUNvbmZpZzoge1xuICAgICAgICBoaWdobGlnaHRPbkhvdmVyOiB0cnVlLFxuICAgICAgICBoaWdobGlnaHRGaWxsQ29sb3I6IGZhbHNlLFxuICAgICAgICBoaWdobGlnaHRCb3JkZXJDb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICBoaWdobGlnaHRCb3JkZXJPcGFjaXR5OiAnMC42NScsXG4gICAgICAgIGhpZ2hsaWdodEJvcmRlcldpZHRoOiBcIjRweFwiLFxuICAgICAgICBoaWdobGlnaHRGaWxsT3BhY2l0eTogJzAuODUnLFxuICAgICAgICBwb3B1cFRlbXBsYXRlOiBQT1BVUF9URU1QTEFURSxcbiAgICAgIH0sXG4gICAgfSlcblxuICAgIHJldHVybiBtYXBcbiAgfVxufVxuXG5jb25zdCBUb2dnbGUgPSAoeyBiYWNrZ3JvdW5kID0gJ3doaXRlJywgb25DbGljaywgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2XG4gICAgb25DbGljaz17b25DbGlja31cbiAgICBzdHlsZT17e1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgYWxpZ25Db250ZW50OiAnY2VudGVyJyxcbiAgICAgIGJveFNoYWRvdzogJzFweCAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMiknLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBib3JkZXJSYWRpdXM6ICczMHB4JyxcbiAgICAgIGJhY2tncm91bmQ6IGJhY2tncm91bmQsXG4gICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgIGhlaWdodDogJzMwcHgnLFxuICAgICAgd2lkdGg6ICczMHB4J1xuICAgIH19XG4gID5cbiAgICB7Y2hpbGRyZW59XG4gIDwvZGl2PlxuKVxuXG5jb25zdCBTdGF0ZVRvZ2dsZSA9ICh7IHN0YXRlTmFtZSB9KSA9PiB7XG4gIGNvbnN0IHsgZGF0YSwgdXBkYXRlVXNlclNlbGVjdGlvbiB9ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dClcblxuICBjb25zdCBjb2xvciA9IFBvc3NpYmxlRmlsbHNbZGF0YVtzdGF0ZU5hbWVdLmZpbGxLZXldXG5cbiAgcmV0dXJuIDxkaXZcbiAgICBzdHlsZT17e1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgIGFsaWduQ29udGVudDogJ2NlbnRlcicsXG4gICAgICBwYWRkaW5nOiAnNXB4IDE1cHgnLFxuICAgICAgd2lkdGg6ICcyMDBweCcsXG4gICAgfX1cbiAgPlxuICAgIHtzdGF0ZU5hbWV9IDxUb2dnbGUgb25DbGljaz17KCkgPT4gdXBkYXRlVXNlclNlbGVjdGlvbihzdGF0ZU5hbWUpfSBiYWNrZ3JvdW5kPXtjb2xvcn0gLz5cbiAgPC9kaXY+XG59XG5cbmNvbnN0IFBhbmVsID0gKCkgPT4ge1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6ICcxNXB4JywgbGVmdDogJzE1cHgnLCBiYWNrZ3JvdW5kOiAnd2hpdGUnIH19PlxuICAgICAgeyFpc09wZW4gJiYgPFRvZ2dsZSBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4odHJ1ZSl9Pis8L1RvZ2dsZT59XG4gICAgICB7aXNPcGVuICYmIDw+XG4gICAgICAgIDxUb2dnbGUgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKGZhbHNlKX0+JnRpbWVzOzwvVG9nZ2xlPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgYm94U2hhZG93OiAnMXB4IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKScsXG4gICAgICAgICAgbWFyZ2luVG9wOiAnMTVweCcsXG4gICAgICAgIH19PlxuICAgICAgICAgIDxTdGF0ZVRvZ2dsZSBzdGF0ZU5hbWU9XCJNRTFcIiAvPlxuICAgICAgICAgIDxTdGF0ZVRvZ2dsZSBzdGF0ZU5hbWU9XCJNRTJcIiAvPlxuICAgICAgICAgIDxTdGF0ZVRvZ2dsZSBzdGF0ZU5hbWU9XCJORTJcIiAvPlxuICAgICAgICAgIDxTdGF0ZVRvZ2dsZSBzdGF0ZU5hbWU9XCJEQ1wiIC8+XG4gICAgICAgICAgPFN0YXRlVG9nZ2xlIHN0YXRlTmFtZT1cIlJJXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8Lz59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgQ29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCB7IGRhdGEsIHdpbmRvd1NpemUsIHVwZGF0ZVVzZXJTZWxlY3Rpb24gfSA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpXG4gIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKVxuICBjb25zdCBtYXBSZWYgPSB1c2VSZWYobnVsbClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhID09PSB1bmRlZmluZWQpIHJldHVyblxuICAgIGlmIChyZWYuY3VycmVudCA9PT0gbnVsbCkgcmV0dXJuXG5cbiAgICByZWYuY3VycmVudC5pbm5lckhUTUwgPSAnJ1xuICAgIG1hcFJlZi5jdXJyZW50ID0gaW5pdGFsaXplTWFwKHJlZi5jdXJyZW50LCBkYXRhKVxuXG4gICAgbWFwUmVmLmN1cnJlbnQuc3ZnLnNlbGVjdEFsbCgnLmRhdGFtYXBzLXN1YnVuaXQnKS5vbignY2xpY2snLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICB1cGRhdGVVc2VyU2VsZWN0aW9uKGRhdGEuaWQpXG4gICAgfSk7XG4gIH0sIFtkYXRhLCAuLi53aW5kb3dTaXplXSlcblxuICByZXR1cm4gPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgaGVpZ2h0OiBcIjEwMCVcIiB9fT5cbiAgICA8UGFuZWwgLz5cbiAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzEwMCUnIH19IHJlZj17cmVmfT48L2Rpdj5cbiAgPC9kaXY+XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/Map.js\n");

/***/ })

})