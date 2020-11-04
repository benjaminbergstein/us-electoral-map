webpackHotUpdate_N_E(1,{

/***/ "./lib/Map.js":
/*!********************!*\
  !*** ./lib/Map.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_zoom_pan_pinch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-zoom-pan-pinch */ \"./node_modules/react-zoom-pan-pinch/dist/index.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _DataContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DataContext */ \"./lib/DataContext.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ \"./lib/constants.js\");\n/* harmony import */ var datamaps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! datamaps */ \"./node_modules/datamaps/dist/datamaps.all.js\");\n/* harmony import */ var datamaps__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(datamaps__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\nvar _jsxFileName = \"/app/lib/Map.js\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar POPUP_TEMPLATE = function POPUP_TEMPLATE(state, data) {\n  return \"<span style=\\\"position: relative; left: 30px; top: 200px; color: white; font-weight: 900; text-shadow: 0 0 1px #000, 1px 1px 1px #000;\\\">\".concat(state.properties.name, \" (\").concat(data['Electoral Votes'], \")</span>\");\n};\n\n_c = POPUP_TEMPLATE;\n\nvar initalizeMap = function initalizeMap(node, data) {\n  if (window !== undefined) {\n    var map = new datamaps__WEBPACK_IMPORTED_MODULE_7___default.a({\n      element: node,\n      scope: 'usa',\n      data: data,\n      fills: _constants__WEBPACK_IMPORTED_MODULE_6__[\"PossibleFills\"],\n      geographyConfig: {\n        highlightOnHover: true,\n        highlightFillColor: false,\n        highlightBorderColor: \"white\",\n        highlightBorderOpacity: '0.65',\n        highlightBorderWidth: \"4px\",\n        highlightFillOpacity: '0.85',\n        popupTemplate: POPUP_TEMPLATE\n      }\n    });\n    return map;\n  }\n};\n\nvar Toggle = function Toggle(_ref) {\n  var _ref$background = _ref.background,\n      background = _ref$background === void 0 ? 'white' : _ref$background,\n      onClick = _ref.onClick,\n      children = _ref.children;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    onClick: onClick,\n    style: {\n      display: 'flex',\n      justifyContent: 'center',\n      alignContent: 'center',\n      boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.2)',\n      cursor: 'pointer',\n      borderRadius: '30px',\n      background: background,\n      color: 'black',\n      height: '30px',\n      width: '30px'\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 3\n  }, _this);\n};\n\n_c2 = Toggle;\n\nvar StateToggle = function StateToggle(_ref2) {\n  _s();\n\n  var stateName = _ref2.stateName;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_DataContext__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n      data = _useContext.data,\n      updateUserSelection = _useContext.updateUserSelection;\n\n  var color = _constants__WEBPACK_IMPORTED_MODULE_6__[\"PossibleFills\"][data[stateName].fillKey];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    style: {\n      display: 'flex',\n      justifyContent: 'space-between',\n      alignContent: 'center',\n      padding: '15px',\n      width: '200px'\n    },\n    children: [stateName, \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Toggle, {\n      onClick: function onClick() {\n        return updateUserSelection(stateName);\n      },\n      background: color\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 17\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 58,\n    columnNumber: 10\n  }, _this);\n};\n\n_s(StateToggle, \"cnIokx41hXa0qW61oaPYTPdtx9E=\");\n\n_c3 = StateToggle;\n\nvar Panel = function Panel() {\n  _s2();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    style: {\n      position: 'absolute',\n      top: '15px',\n      left: '15px',\n      background: 'white'\n    },\n    children: [!isOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Toggle, {\n      onClick: function onClick() {\n        return setIsOpen(true);\n      },\n      children: \"+\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 19\n    }, _this), isOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Toggle, {\n        onClick: function onClick() {\n          return setIsOpen(false);\n        },\n        children: \"\\xD7\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      style: {\n        boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.2)',\n        marginTop: '15px'\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(StateToggle, {\n        stateName: \"ME1\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(StateToggle, {\n        stateName: \"ME2\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(StateToggle, {\n        stateName: \"NE2\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(StateToggle, {\n        stateName: \"DC\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(StateToggle, {\n        stateName: \"RI\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 75,\n    columnNumber: 5\n  }, _this);\n};\n\n_s2(Panel, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n\n_c4 = Panel;\n\nvar Container = function Container() {\n  _s3();\n\n  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_DataContext__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n      data = _useContext2.data,\n      windowSize = _useContext2.windowSize,\n      updateUserSelection = _useContext2.updateUserSelection;\n\n  var ref = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(null);\n  var mapRef = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    if (data === undefined) return;\n    if (ref.current === null) return;\n    ref.current.innerHTML = '';\n    mapRef.current = initalizeMap(ref.current, data);\n    mapRef.current.svg.selectAll('.datamaps-subunit').on('click', function (data) {\n      updateUserSelection(data.id);\n    });\n  }, [data].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(windowSize)));\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    style: {\n      position: 'relative',\n      height: \"100%\"\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Panel, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      style: {\n        height: '100%'\n      },\n      ref: ref\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 111,\n    columnNumber: 10\n  }, _this);\n};\n\n_s3(Container, \"vRhCfOy3Bw9U4AeNRsmjqyzFNOc=\");\n\n_c5 = Container;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Container);\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"POPUP_TEMPLATE\");\n$RefreshReg$(_c2, \"Toggle\");\n$RefreshReg$(_c3, \"StateToggle\");\n$RefreshReg$(_c4, \"Panel\");\n$RefreshReg$(_c5, \"Container\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL01hcC5qcz9jNTkzIl0sIm5hbWVzIjpbIlBPUFVQX1RFTVBMQVRFIiwic3RhdGUiLCJkYXRhIiwicHJvcGVydGllcyIsIm5hbWUiLCJpbml0YWxpemVNYXAiLCJub2RlIiwid2luZG93IiwidW5kZWZpbmVkIiwibWFwIiwiRGF0YW1hcCIsImVsZW1lbnQiLCJzY29wZSIsImZpbGxzIiwiUG9zc2libGVGaWxscyIsImdlb2dyYXBoeUNvbmZpZyIsImhpZ2hsaWdodE9uSG92ZXIiLCJoaWdobGlnaHRGaWxsQ29sb3IiLCJoaWdobGlnaHRCb3JkZXJDb2xvciIsImhpZ2hsaWdodEJvcmRlck9wYWNpdHkiLCJoaWdobGlnaHRCb3JkZXJXaWR0aCIsImhpZ2hsaWdodEZpbGxPcGFjaXR5IiwicG9wdXBUZW1wbGF0ZSIsIlRvZ2dsZSIsImJhY2tncm91bmQiLCJvbkNsaWNrIiwiY2hpbGRyZW4iLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkNvbnRlbnQiLCJib3hTaGFkb3ciLCJjdXJzb3IiLCJib3JkZXJSYWRpdXMiLCJjb2xvciIsImhlaWdodCIsIndpZHRoIiwiU3RhdGVUb2dnbGUiLCJzdGF0ZU5hbWUiLCJ1c2VDb250ZXh0IiwiRGF0YUNvbnRleHQiLCJ1cGRhdGVVc2VyU2VsZWN0aW9uIiwiZmlsbEtleSIsInBhZGRpbmciLCJQYW5lbCIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwibWFyZ2luVG9wIiwiQ29udGFpbmVyIiwid2luZG93U2l6ZSIsInJlZiIsInVzZVJlZiIsIm1hcFJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJpbm5lckhUTUwiLCJzdmciLCJzZWxlY3RBbGwiLCJvbiIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLEtBQUQsRUFBUUMsSUFBUjtBQUFBLDRKQUEySkQsS0FBSyxDQUFDRSxVQUFOLENBQWlCQyxJQUE1SyxlQUFxTEYsSUFBSSxDQUFDLGlCQUFELENBQXpMO0FBQUEsQ0FBdkI7O0tBQU1GLGM7O0FBRU4sSUFBTUssWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsSUFBRCxFQUFPSixJQUFQLEVBQWdCO0FBQ25DLE1BQUlLLE1BQU0sS0FBS0MsU0FBZixFQUEwQjtBQUN4QixRQUFNQyxHQUFHLEdBQUcsSUFBSUMsK0NBQUosQ0FBWTtBQUN0QkMsYUFBTyxFQUFFTCxJQURhO0FBRXRCTSxXQUFLLEVBQUUsS0FGZTtBQUd0QlYsVUFBSSxFQUFKQSxJQUhzQjtBQUl0QlcsV0FBSyxFQUFFQyx3REFKZTtBQUt0QkMscUJBQWUsRUFBRTtBQUNmQyx3QkFBZ0IsRUFBRSxJQURIO0FBRWZDLDBCQUFrQixFQUFFLEtBRkw7QUFHZkMsNEJBQW9CLEVBQUUsT0FIUDtBQUlmQyw4QkFBc0IsRUFBRSxNQUpUO0FBS2ZDLDRCQUFvQixFQUFFLEtBTFA7QUFNZkMsNEJBQW9CLEVBQUUsTUFOUDtBQU9mQyxxQkFBYSxFQUFFdEI7QUFQQTtBQUxLLEtBQVosQ0FBWjtBQWdCQSxXQUFPUyxHQUFQO0FBQ0Q7QUFDRixDQXBCRDs7QUFzQkEsSUFBTWMsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSw2QkFBR0MsVUFBSDtBQUFBLE1BQUdBLFVBQUgsZ0NBQWdCLE9BQWhCO0FBQUEsTUFBeUJDLE9BQXpCLFFBQXlCQSxPQUF6QjtBQUFBLE1BQWtDQyxRQUFsQyxRQUFrQ0EsUUFBbEM7QUFBQSxzQkFDYjtBQUNFLFdBQU8sRUFBRUQsT0FEWDtBQUVFLFNBQUssRUFBRTtBQUNMRSxhQUFPLEVBQUUsTUFESjtBQUVMQyxvQkFBYyxFQUFFLFFBRlg7QUFHTEMsa0JBQVksRUFBRSxRQUhUO0FBSUxDLGVBQVMsRUFBRSxvQ0FKTjtBQUtMQyxZQUFNLEVBQUUsU0FMSDtBQU1MQyxrQkFBWSxFQUFFLE1BTlQ7QUFPTFIsZ0JBQVUsRUFBRUEsVUFQUDtBQVFMUyxXQUFLLEVBQUUsT0FSRjtBQVNMQyxZQUFNLEVBQUUsTUFUSDtBQVVMQyxXQUFLLEVBQUU7QUFWRixLQUZUO0FBQUEsY0FlR1Q7QUFmSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGE7QUFBQSxDQUFmOztNQUFNSCxNOztBQW9CTixJQUFNYSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxRQUFtQjtBQUFBOztBQUFBLE1BQWhCQyxTQUFnQixTQUFoQkEsU0FBZ0I7O0FBQUEsb0JBQ0NDLHdEQUFVLENBQUNDLG9EQUFELENBRFg7QUFBQSxNQUM3QnJDLElBRDZCLGVBQzdCQSxJQUQ2QjtBQUFBLE1BQ3ZCc0MsbUJBRHVCLGVBQ3ZCQSxtQkFEdUI7O0FBR3JDLE1BQU1QLEtBQUssR0FBR25CLHdEQUFhLENBQUNaLElBQUksQ0FBQ21DLFNBQUQsQ0FBSixDQUFnQkksT0FBakIsQ0FBM0I7QUFFQSxzQkFBTztBQUNMLFNBQUssRUFBRTtBQUNMZCxhQUFPLEVBQUUsTUFESjtBQUVMQyxvQkFBYyxFQUFFLGVBRlg7QUFHTEMsa0JBQVksRUFBRSxRQUhUO0FBSUxhLGFBQU8sRUFBRSxNQUpKO0FBS0xQLFdBQUssRUFBRTtBQUxGLEtBREY7QUFBQSxlQVNKRSxTQVRJLG9CQVNPLHFFQUFDLE1BQUQ7QUFBUSxhQUFPLEVBQUU7QUFBQSxlQUFNRyxtQkFBbUIsQ0FBQ0gsU0FBRCxDQUF6QjtBQUFBLE9BQWpCO0FBQXVELGdCQUFVLEVBQUVKO0FBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFUUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQVdELENBaEJEOztHQUFNRyxXOztNQUFBQSxXOztBQWtCTixJQUFNTyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBQ1VDLHNEQUFRLENBQUMsS0FBRCxDQURsQjtBQUFBLE1BQ1hDLE1BRFc7QUFBQSxNQUNIQyxTQURHOztBQUdsQixzQkFDRTtBQUFLLFNBQUssRUFBRTtBQUFFQyxjQUFRLEVBQUUsVUFBWjtBQUF3QkMsU0FBRyxFQUFFLE1BQTdCO0FBQXFDQyxVQUFJLEVBQUUsTUFBM0M7QUFBbUR6QixnQkFBVSxFQUFFO0FBQS9ELEtBQVo7QUFBQSxlQUNHLENBQUNxQixNQUFELGlCQUFXLHFFQUFDLE1BQUQ7QUFBUSxhQUFPLEVBQUU7QUFBQSxlQUFNQyxTQUFTLENBQUMsSUFBRCxDQUFmO0FBQUEsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEZCxFQUVHRCxNQUFNLGlCQUFJO0FBQUEsNkJBQ1QscUVBQUMsTUFBRDtBQUFRLGVBQU8sRUFBRTtBQUFBLGlCQUFNQyxTQUFTLENBQUMsS0FBRCxDQUFmO0FBQUEsU0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUyxxQkFGYixlQUtFO0FBQUssV0FBSyxFQUFFO0FBQ1ZoQixpQkFBUyxFQUFFLG9DQUREO0FBRVZvQixpQkFBUyxFQUFFO0FBRkQsT0FBWjtBQUFBLDhCQUlFLHFFQUFDLFdBQUQ7QUFBYSxpQkFBUyxFQUFDO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRixlQUtFLHFFQUFDLFdBQUQ7QUFBYSxpQkFBUyxFQUFDO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRixlQU1FLHFFQUFDLFdBQUQ7QUFBYSxpQkFBUyxFQUFDO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORixlQU9FLHFFQUFDLFdBQUQ7QUFBYSxpQkFBUyxFQUFDO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQRixlQVFFLHFFQUFDLFdBQUQ7QUFBYSxpQkFBUyxFQUFDO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWtCRCxDQXJCRDs7SUFBTVAsSzs7TUFBQUEsSzs7QUF1Qk4sSUFBTVEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLHFCQUM0QmIsd0RBQVUsQ0FBQ0Msb0RBQUQsQ0FEdEM7QUFBQSxNQUNkckMsSUFEYyxnQkFDZEEsSUFEYztBQUFBLE1BQ1JrRCxVQURRLGdCQUNSQSxVQURRO0FBQUEsTUFDSVosbUJBREosZ0JBQ0lBLG1CQURKOztBQUV0QixNQUFNYSxHQUFHLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUFsQjtBQUNBLE1BQU1DLE1BQU0sR0FBR0Qsb0RBQU0sQ0FBQyxJQUFELENBQXJCO0FBRUFFLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUl0RCxJQUFJLEtBQUtNLFNBQWIsRUFBd0I7QUFDeEIsUUFBSTZDLEdBQUcsQ0FBQ0ksT0FBSixLQUFnQixJQUFwQixFQUEwQjtBQUUxQkosT0FBRyxDQUFDSSxPQUFKLENBQVlDLFNBQVosR0FBd0IsRUFBeEI7QUFDQUgsVUFBTSxDQUFDRSxPQUFQLEdBQWlCcEQsWUFBWSxDQUFDZ0QsR0FBRyxDQUFDSSxPQUFMLEVBQWN2RCxJQUFkLENBQTdCO0FBRUFxRCxVQUFNLENBQUNFLE9BQVAsQ0FBZUUsR0FBZixDQUFtQkMsU0FBbkIsQ0FBNkIsbUJBQTdCLEVBQWtEQyxFQUFsRCxDQUFxRCxPQUFyRCxFQUE4RCxVQUFTM0QsSUFBVCxFQUFlO0FBQzNFc0MseUJBQW1CLENBQUN0QyxJQUFJLENBQUM0RCxFQUFOLENBQW5CO0FBQ0QsS0FGRDtBQUdELEdBVlEsR0FVTDVELElBVkssc0dBVUlrRCxVQVZKLEdBQVQ7QUFZQSxzQkFBTztBQUFLLFNBQUssRUFBRTtBQUFFTCxjQUFRLEVBQUUsVUFBWjtBQUF3QmIsWUFBTSxFQUFFO0FBQWhDLEtBQVo7QUFBQSw0QkFDTCxxRUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESyxlQUVMO0FBQUssV0FBSyxFQUFFO0FBQUVBLGNBQU0sRUFBRTtBQUFWLE9BQVo7QUFBZ0MsU0FBRyxFQUFFbUI7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBSUQsQ0FyQkQ7O0lBQU1GLFM7O01BQUFBLFM7QUF1QlNBLHdFQUFmIiwiZmlsZSI6Ii4vbGliL01hcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcbmltcG9ydCB7IFRyYW5zZm9ybVdyYXBwZXIsIFRyYW5zZm9ybUNvbXBvbmVudCB9IGZyb20gXCJyZWFjdC16b29tLXBhbi1waW5jaFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEYXRhQ29udGV4dCBmcm9tICcuL0RhdGFDb250ZXh0J1xuaW1wb3J0IHsgUG9zc2libGVGaWxscyB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuaW1wb3J0IERhdGFtYXAgZnJvbSAnZGF0YW1hcHMnXG5cbmNvbnN0IFBPUFVQX1RFTVBMQVRFID0gKHN0YXRlLCBkYXRhKSA9PiBgPHNwYW4gc3R5bGU9XCJwb3NpdGlvbjogcmVsYXRpdmU7IGxlZnQ6IDMwcHg7IHRvcDogMjAwcHg7IGNvbG9yOiB3aGl0ZTsgZm9udC13ZWlnaHQ6IDkwMDsgdGV4dC1zaGFkb3c6IDAgMCAxcHggIzAwMCwgMXB4IDFweCAxcHggIzAwMDtcIj4ke3N0YXRlLnByb3BlcnRpZXMubmFtZX0gKCR7ZGF0YVsnRWxlY3RvcmFsIFZvdGVzJ119KTwvc3Bhbj5gO1xuXG5jb25zdCBpbml0YWxpemVNYXAgPSAobm9kZSwgZGF0YSkgPT4ge1xuICBpZiAod2luZG93ICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBtYXAgPSBuZXcgRGF0YW1hcCh7XG4gICAgICBlbGVtZW50OiBub2RlLFxuICAgICAgc2NvcGU6ICd1c2EnLFxuICAgICAgZGF0YSxcbiAgICAgIGZpbGxzOiBQb3NzaWJsZUZpbGxzLFxuICAgICAgZ2VvZ3JhcGh5Q29uZmlnOiB7XG4gICAgICAgIGhpZ2hsaWdodE9uSG92ZXI6IHRydWUsXG4gICAgICAgIGhpZ2hsaWdodEZpbGxDb2xvcjogZmFsc2UsXG4gICAgICAgIGhpZ2hsaWdodEJvcmRlckNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgIGhpZ2hsaWdodEJvcmRlck9wYWNpdHk6ICcwLjY1JyxcbiAgICAgICAgaGlnaGxpZ2h0Qm9yZGVyV2lkdGg6IFwiNHB4XCIsXG4gICAgICAgIGhpZ2hsaWdodEZpbGxPcGFjaXR5OiAnMC44NScsXG4gICAgICAgIHBvcHVwVGVtcGxhdGU6IFBPUFVQX1RFTVBMQVRFLFxuICAgICAgfSxcbiAgICB9KVxuXG4gICAgcmV0dXJuIG1hcFxuICB9XG59XG5cbmNvbnN0IFRvZ2dsZSA9ICh7IGJhY2tncm91bmQgPSAnd2hpdGUnLCBvbkNsaWNrLCBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXZcbiAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgIHN0eWxlPXt7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgYm94U2hhZG93OiAnMXB4IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKScsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzMwcHgnLFxuICAgICAgYmFja2dyb3VuZDogYmFja2dyb3VuZCxcbiAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgaGVpZ2h0OiAnMzBweCcsXG4gICAgICB3aWR0aDogJzMwcHgnXG4gICAgfX1cbiAgPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9kaXY+XG4pXG5cbmNvbnN0IFN0YXRlVG9nZ2xlID0gKHsgc3RhdGVOYW1lIH0pID0+IHtcbiAgY29uc3QgeyBkYXRhLCB1cGRhdGVVc2VyU2VsZWN0aW9uIH0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KVxuXG4gIGNvbnN0IGNvbG9yID0gUG9zc2libGVGaWxsc1tkYXRhW3N0YXRlTmFtZV0uZmlsbEtleV1cblxuICByZXR1cm4gPGRpdlxuICAgIHN0eWxlPXt7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgYWxpZ25Db250ZW50OiAnY2VudGVyJyxcbiAgICAgIHBhZGRpbmc6ICcxNXB4JyxcbiAgICAgIHdpZHRoOiAnMjAwcHgnLFxuICAgIH19XG4gID5cbiAgICB7c3RhdGVOYW1lfSA8VG9nZ2xlIG9uQ2xpY2s9eygpID0+IHVwZGF0ZVVzZXJTZWxlY3Rpb24oc3RhdGVOYW1lKX0gYmFja2dyb3VuZD17Y29sb3J9IC8+XG4gIDwvZGl2PlxufVxuXG5jb25zdCBQYW5lbCA9ICgpID0+IHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAnMTVweCcsIGxlZnQ6ICcxNXB4JywgYmFja2dyb3VuZDogJ3doaXRlJyB9fT5cbiAgICAgIHshaXNPcGVuICYmIDxUb2dnbGUgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKHRydWUpfT4rPC9Ub2dnbGU+fVxuICAgICAge2lzT3BlbiAmJiA8PlxuICAgICAgICA8VG9nZ2xlIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbihmYWxzZSl9PiZ0aW1lczs8L1RvZ2dsZT5cbiAgICAgIDwvPn1cbiAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgYm94U2hhZG93OiAnMXB4IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKScsXG4gICAgICAgIG1hcmdpblRvcDogJzE1cHgnLFxuICAgICAgfX0+XG4gICAgICAgIDxTdGF0ZVRvZ2dsZSBzdGF0ZU5hbWU9XCJNRTFcIiAvPlxuICAgICAgICA8U3RhdGVUb2dnbGUgc3RhdGVOYW1lPVwiTUUyXCIgLz5cbiAgICAgICAgPFN0YXRlVG9nZ2xlIHN0YXRlTmFtZT1cIk5FMlwiIC8+XG4gICAgICAgIDxTdGF0ZVRvZ2dsZSBzdGF0ZU5hbWU9XCJEQ1wiIC8+XG4gICAgICAgIDxTdGF0ZVRvZ2dsZSBzdGF0ZU5hbWU9XCJSSVwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBDb250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgZGF0YSwgd2luZG93U2l6ZSwgdXBkYXRlVXNlclNlbGVjdGlvbiB9ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dClcbiAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpXG4gIGNvbnN0IG1hcFJlZiA9IHVzZVJlZihudWxsKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuXG4gICAgaWYgKHJlZi5jdXJyZW50ID09PSBudWxsKSByZXR1cm5cblxuICAgIHJlZi5jdXJyZW50LmlubmVySFRNTCA9ICcnXG4gICAgbWFwUmVmLmN1cnJlbnQgPSBpbml0YWxpemVNYXAocmVmLmN1cnJlbnQsIGRhdGEpXG5cbiAgICBtYXBSZWYuY3VycmVudC5zdmcuc2VsZWN0QWxsKCcuZGF0YW1hcHMtc3VidW5pdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIHVwZGF0ZVVzZXJTZWxlY3Rpb24oZGF0YS5pZClcbiAgICB9KTtcbiAgfSwgW2RhdGEsIC4uLndpbmRvd1NpemVdKVxuXG4gIHJldHVybiA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBoZWlnaHQ6IFwiMTAwJVwiIH19PlxuICAgIDxQYW5lbCAvPlxuICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScgfX0gcmVmPXtyZWZ9PjwvZGl2PlxuICA8L2Rpdj5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/Map.js\n");

/***/ })

})