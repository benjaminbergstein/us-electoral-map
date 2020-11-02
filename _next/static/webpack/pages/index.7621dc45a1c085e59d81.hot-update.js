webpackHotUpdate_N_E("pages/index",{

/***/ "./lib/Layout.js":
/*!***********************!*\
  !*** ./lib/Layout.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Box */ \"./lib/Box.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ \"./lib/constants.js\");\n\n\n\n\n\nvar _jsxFileName = \"/app/lib/Layout.js\",\n    _s = $RefreshSig$(),\n    _this = undefined,\n    _s2 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar DynamicComponentWithNoSSR = dynamic(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./Map */ \"./lib/Map.js\"));\n}, {\n  ssr: false\n});\n_c2 = DynamicComponentWithNoSSR;\n\nvar useData = function useData() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(undefined),\n      data = _useState[0],\n      setData = _useState[1];\n\n  isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('results/president/2017.json').then(function (res) {\n    return res.json();\n  }).then(function (res) {\n    setData(res);\n  });\n  return {\n    data: data,\n    loading: data === undefined\n  };\n};\n\n_s(useData, \"a5a5NTOfwgqVemCc+HO+lJNrlY4=\");\n\nvar PartyTotal = function PartyTotal(_ref) {\n  var party = _ref.party;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    display: \"flex\",\n    flex: \"0 0 33%\",\n    justifyContent: \"center\",\n    alignItems: \"center\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n      id: \"\".concat(party, \"Total\"),\n      style: {\n        color: _constants__WEBPACK_IMPORTED_MODULE_6__[\"partyColors\"][party],\n        padding: '0 2px',\n        textShadow: '0px 1px 1px #444',\n        textAlign: 'center',\n        fontSize: '1.15rem',\n        margin: 0\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 3\n  }, _this);\n};\n\n_c3 = PartyTotal;\n\nvar Totals = function Totals() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    display: \"flex\",\n    width: \"100%\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(PartyTotal, {\n      party: \"dems\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(PartyTotal, {\n      party: \"neutral\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(PartyTotal, {\n      party: \"GOP\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 3\n  }, _this);\n};\n\n_c4 = Totals;\n\nvar Title = function Title() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n    style: {\n      lineHeight: '1.25',\n      padding: '0 10px',\n      fontSize: '1.25rem',\n      margin: '0.75rem'\n    },\n    children: \"2016 U.S Electoral College Map\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 54,\n    columnNumber: 3\n  }, _this);\n};\n\n_c5 = Title;\n\nvar StatesList = function StatesList() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      id: \"statesList\",\n      style: {\n        display: \"flex\",\n        flexWrap: \"nowrap\"\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n        children: \"Loading.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 65,\n    columnNumber: 3\n  }, _this);\n};\n\n_c6 = StatesList;\n\nvar FooterItem = function FooterItem(_ref2) {\n  var children = _ref2.children;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    flex: \"0 1 0\",\n    style: {\n      padding: '5px 0',\n      marginLeft: '15px',\n      whiteSpace: 'nowrap'\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 73,\n    columnNumber: 3\n  }, _this);\n};\n\n_c7 = FooterItem;\n\nvar Copyright = function Copyright() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      display: \"flex\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(FooterItem, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"a\", {\n          href: \"https://github.com/benjaminbergstein/us-electoral-map\",\n          target: \"_BLANK\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"img\", {\n            src: \"docs/github.png\",\n            height: \"14px\",\n            width: \"14px\",\n            alt: \"Source on Github\",\n            title: \"Source on Github\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 83,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(FooterItem, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"a\", {\n          href: \"https://goo.gl/forms/THky9dqIPI9AezJb2\",\n          target: \"_BLANK\",\n          style: {\n            textDecoration: 'none'\n          },\n          children: \"Feedback\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(FooterItem, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"copyright\", {\n          children: \"\\xA9 2017-2019 Ben Bergstein\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false);\n};\n\n_c8 = Copyright;\n\nvar Section = function Section(_ref3) {\n  var height = _ref3.height,\n      flex = _ref3.flex,\n      children = _ref3.children,\n      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref3, [\"height\", \"flex\", \"children\"]);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _objectSpread(_objectSpread({\n    height: height,\n    flex: flex,\n    display: \"flex\",\n    flexDirection: \"column\",\n    justifyContent: \"center\"\n  }, props), {}, {\n    children: children\n  }), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 101,\n    columnNumber: 3\n  }, _this);\n};\n\n_c9 = Section;\n\nvar Wrapper = function Wrapper(_ref4) {\n  var children = _ref4.children;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    display: \"flex\",\n    flexDirection: \"column\",\n    height: \"100%\",\n    style: {\n      minHeight: '65vw'\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 114,\n    columnNumber: 3\n  }, _this);\n};\n\n_c10 = Wrapper;\n\nvar InfoBar = function InfoBar() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    display: \"flex\",\n    width: \"100%\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      display: \"flex\",\n      flex: \"0 0 50%\",\n      alignItems: \"center\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Title, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 122,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      display: \"flex\",\n      flex: \"0 1 50%\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Totals, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 120,\n    columnNumber: 5\n  }, _this);\n};\n\n_c11 = InfoBar;\n\nvar Content = function Content() {\n  _s2();\n\n  var _useData = useData(),\n      data = _useData.data,\n      loading = _useData.loading;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Wrapper, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Section, {\n      style: {\n        overflowX: 'scroll'\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(StatesList, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 135,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Section, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        display: \"flex\",\n        height: \"0\",\n        alignItems: \"baseline\",\n        width: \"100%\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(InfoBar, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 140,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 139,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Section, {\n      flex: \"1\",\n      style: {\n        position: 'relative'\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Map, {\n        data: data\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 145,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Section, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Copyright, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 150,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 149,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 133,\n    columnNumber: 10\n  }, _this);\n};\n\n_s2(Content, \"V5gz3EZkFMOQuCkxQHdrgYPUNBU=\", false, function () {\n  return [useData];\n});\n\n_c12 = Content;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Content);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;\n\n$RefreshReg$(_c, \"DynamicComponentWithNoSSR$dynamic\");\n$RefreshReg$(_c2, \"DynamicComponentWithNoSSR\");\n$RefreshReg$(_c3, \"PartyTotal\");\n$RefreshReg$(_c4, \"Totals\");\n$RefreshReg$(_c5, \"Title\");\n$RefreshReg$(_c6, \"StatesList\");\n$RefreshReg$(_c7, \"FooterItem\");\n$RefreshReg$(_c8, \"Copyright\");\n$RefreshReg$(_c9, \"Section\");\n$RefreshReg$(_c10, \"Wrapper\");\n$RefreshReg$(_c11, \"InfoBar\");\n$RefreshReg$(_c12, \"Content\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL0xheW91dC5qcz8yOWQzIl0sIm5hbWVzIjpbIkR5bmFtaWNDb21wb25lbnRXaXRoTm9TU1IiLCJkeW5hbWljIiwic3NyIiwidXNlRGF0YSIsInVzZVN0YXRlIiwidW5kZWZpbmVkIiwiZGF0YSIsInNldERhdGEiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwibG9hZGluZyIsIlBhcnR5VG90YWwiLCJwYXJ0eSIsImNvbG9yIiwicGFydHlDb2xvcnMiLCJwYWRkaW5nIiwidGV4dFNoYWRvdyIsInRleHRBbGlnbiIsImZvbnRTaXplIiwibWFyZ2luIiwiVG90YWxzIiwiVGl0bGUiLCJsaW5lSGVpZ2h0IiwiU3RhdGVzTGlzdCIsImRpc3BsYXkiLCJmbGV4V3JhcCIsIkZvb3Rlckl0ZW0iLCJjaGlsZHJlbiIsIm1hcmdpbkxlZnQiLCJ3aGl0ZVNwYWNlIiwiQ29weXJpZ2h0IiwidGV4dERlY29yYXRpb24iLCJTZWN0aW9uIiwiaGVpZ2h0IiwiZmxleCIsInByb3BzIiwiV3JhcHBlciIsIm1pbkhlaWdodCIsIkluZm9CYXIiLCJDb250ZW50Iiwib3ZlcmZsb3dYIiwicG9zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLHlCQUF5QixHQUFHQyxPQUFPLE1BQ3ZDO0FBQUEsU0FBTSwwR0FBTjtBQUFBLENBRHVDLEVBRXZDO0FBQUVDLEtBQUcsRUFBRTtBQUFQLENBRnVDLENBQXpDO01BQU1GLHlCOztBQUtOLElBQU1HLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFBQSxrQkFDSUMsc0RBQVEsQ0FBQ0MsU0FBRCxDQURaO0FBQUEsTUFDYkMsSUFEYTtBQUFBLE1BQ1BDLE9BRE87O0FBR3BCQywyREFBSyxDQUFDLDZCQUFELENBQUwsQ0FDR0MsSUFESCxDQUNRLFVBQUNDLEdBQUQ7QUFBQSxXQUFTQSxHQUFHLENBQUND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LE9BQWhCO0FBQUEsNkJBQ0UscUVBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURLLGVBS0wscUVBQUMsT0FBRDtBQUFBLDZCQUNFLHFFQUFDLDRDQUFEO0FBQUssZUFBTyxFQUFDLE1BQWI7QUFBb0IsY0FBTSxFQUFDLEdBQTNCO0FBQStCLGtCQUFVLEVBQUMsVUFBMUM7QUFBcUQsYUFBSyxFQUFDLE1BQTNEO0FBQUEsK0JBQ0UscUVBQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMSyxlQVdMLHFFQUFDLE9BQUQ7QUFBUyxVQUFJLEVBQUMsR0FBZDtBQUFrQixXQUFLLEVBQUU7QUFBRUMsZ0JBQVEsRUFBRTtBQUFaLE9BQXpCO0FBQUEsNkJBQ0UscUVBQUMsR0FBRDtBQUFLLFlBQUksRUFBRXJDO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFYSyxlQWVMLHFFQUFDLE9BQUQ7QUFBQSw2QkFDRSxxRUFBQyw0Q0FBRDtBQUFBLCtCQUNFLHFFQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZks7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFxQkQsQ0F4QkQ7O0lBQU1tQyxPO1VBQ3NCdEMsTzs7O09BRHRCc0MsTztBQTBCU0Esc0VBQWYiLCJmaWxlIjoiLi9saWIvTGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gIGZyb20gJ3JlYWN0JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5pbXBvcnQgQm94IGZyb20gJy4vQm94JztcbmltcG9ydCB7IHBhcnR5Q29sb3JzIH0gZnJvbSAnLi9jb25zdGFudHMnXG5cbmNvbnN0IER5bmFtaWNDb21wb25lbnRXaXRoTm9TU1IgPSBkeW5hbWljKFxuICAoKSA9PiBpbXBvcnQoJy4vTWFwJyksXG4gIHsgc3NyOiBmYWxzZSB9XG4pXG5cbmNvbnN0IHVzZURhdGEgPSAoKSA9PiB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHVuZGVmaW5lZClcblxuICBmZXRjaCgncmVzdWx0cy9wcmVzaWRlbnQvMjAxNy5qc29uJylcbiAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKChyZXMpID0+IHsgc2V0RGF0YShyZXMpIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBkYXRhOiBkYXRhLFxuICAgIGxvYWRpbmc6IGRhdGEgPT09IHVuZGVmaW5lZCxcbiAgfVxufVxuXG5jb25zdCBQYXJ0eVRvdGFsID0gKHsgcGFydHkgfSkgPT4gKFxuICA8Qm94XG4gICAgZGlzcGxheT0nZmxleCdcbiAgICBmbGV4PVwiMCAwIDMzJVwiXG4gICAganVzdGlmeUNvbnRlbnQ9J2NlbnRlcidcbiAgICBhbGlnbkl0ZW1zPSdjZW50ZXInXG4gID5cbiAgICA8aDFcbiAgICAgIGlkPXtgJHtwYXJ0eX1Ub3RhbGB9XG4gICAgICBzdHlsZT17e1xuICAgICAgICBjb2xvcjogcGFydHlDb2xvcnNbcGFydHldLFxuICAgICAgICBwYWRkaW5nOiAnMCAycHgnLFxuICAgICAgICB0ZXh0U2hhZG93OiAnMHB4IDFweCAxcHggIzQ0NCcsXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIGZvbnRTaXplOiAnMS4xNXJlbScsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgIH19PjwvaDE+XG4gIDwvQm94PlxuKTtcblxuY29uc3QgVG90YWxzID0gKCkgPT4gKFxuICA8Qm94IGRpc3BsYXk9J2ZsZXgnIHdpZHRoPVwiMTAwJVwiPlxuICAgIDxQYXJ0eVRvdGFsIHBhcnR5PSdkZW1zJyAvPlxuICAgIDxQYXJ0eVRvdGFsIHBhcnR5PSduZXV0cmFsJyAvPlxuICAgIDxQYXJ0eVRvdGFsIHBhcnR5PSdHT1AnIC8+XG4gIDwvQm94PlxuKTtcblxuXG5jb25zdCBUaXRsZSA9ICgpID0+IChcbiAgPGgxIHN0eWxlPXt7XG4gICAgbGluZUhlaWdodDogJzEuMjUnLFxuICAgIHBhZGRpbmc6ICcwIDEwcHgnLFxuICAgIGZvbnRTaXplOiAnMS4yNXJlbScsXG4gICAgbWFyZ2luOiAnMC43NXJlbScsXG4gIH19PlxuICAgIDIwMTYgVS5TIEVsZWN0b3JhbCBDb2xsZWdlIE1hcFxuICA8L2gxPlxuKTtcblxuY29uc3QgU3RhdGVzTGlzdCA9ICgpID0+IChcbiAgPGRpdj5cbiAgICA8ZGl2IGlkPVwic3RhdGVzTGlzdFwiIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4V3JhcDogXCJub3dyYXBcIiB9fT5cbiAgICAgIDxzcGFuPkxvYWRpbmcuPC9zcGFuPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IEZvb3Rlckl0ZW0gPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxCb3ggZmxleD1cIjAgMSAwXCIgc3R5bGU9e3sgcGFkZGluZzogJzVweCAwJywgbWFyZ2luTGVmdDogJzE1cHgnLCB3aGl0ZVNwYWNlOiAnbm93cmFwJyB9fT5cbiAgICB7Y2hpbGRyZW59XG4gIDwvQm94PlxuKTtcblxuY29uc3QgQ29weXJpZ2h0ID0gKCkgPT4gKFxuICA8PlxuICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIj5cbiAgICAgIDxGb290ZXJJdGVtPlxuICAgICAgICA8YSBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vYmVuamFtaW5iZXJnc3RlaW4vdXMtZWxlY3RvcmFsLW1hcCcgdGFyZ2V0PVwiX0JMQU5LXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJkb2NzL2dpdGh1Yi5wbmdcIiBoZWlnaHQ9XCIxNHB4XCIgd2lkdGg9XCIxNHB4XCIgYWx0PVwiU291cmNlIG9uIEdpdGh1YlwiIHRpdGxlPVwiU291cmNlIG9uIEdpdGh1YlwiIC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvRm9vdGVySXRlbT5cbiAgICAgIDxGb290ZXJJdGVtPlxuICAgICAgICA8YSBocmVmPSdodHRwczovL2dvby5nbC9mb3Jtcy9USGt5OWRxSVBJOUFlekpiMicgdGFyZ2V0PVwiX0JMQU5LXCIgc3R5bGU9e3sgdGV4dERlY29yYXRpb246ICdub25lJyB9fT5cbiAgICAgICAgICBGZWVkYmFja1xuICAgICAgICA8L2E+XG4gICAgICA8L0Zvb3Rlckl0ZW0+XG4gICAgICA8Rm9vdGVySXRlbT5cbiAgICAgICAgPGNvcHlyaWdodD5cbiAgICAgICAgICAmY29weTsgMjAxNy0yMDE5IEJlbiBCZXJnc3RlaW5cbiAgICAgICAgPC9jb3B5cmlnaHQ+XG4gICAgICA8L0Zvb3Rlckl0ZW0+XG4gICAgPC9Cb3g+XG4gIDwvPlxuKTtcblxuY29uc3QgU2VjdGlvbiA9ICh7IGhlaWdodCwgZmxleCwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IChcbiAgPEJveFxuICAgIGhlaWdodD17aGVpZ2h0fVxuICAgIGZsZXg9e2ZsZXh9XG4gICAgZGlzcGxheT0nZmxleCdcbiAgICBmbGV4RGlyZWN0aW9uPSdjb2x1bW4nXG4gICAganVzdGlmeUNvbnRlbnQ9J2NlbnRlcidcbiAgICB7Li4ucHJvcHN9XG4gID5cbiAgICB7Y2hpbGRyZW59XG4gIDwvQm94PlxuKVxuXG5jb25zdCBXcmFwcGVyID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgZmxleERpcmVjdGlvbj0nY29sdW1uJyBoZWlnaHQ9JzEwMCUnIHN0eWxlPXt7IG1pbkhlaWdodDogJzY1dncnIH19PlxuICAgIHtjaGlsZHJlbn1cbiAgPC9Cb3g+XG4pO1xuXG5jb25zdCBJbmZvQmFyID0gKCkgPT4gKFxuICAgIDxCb3ggZGlzcGxheT0nZmxleCcgd2lkdGg9XCIxMDAlXCI+XG4gICAgICA8Qm94IGRpc3BsYXk9J2ZsZXgnIGZsZXg9XCIwIDAgNTAlXCIgYWxpZ25JdGVtcz0nY2VudGVyJz5cbiAgICAgICAgPFRpdGxlIC8+XG4gICAgICA8L0JveD5cbiAgICAgIDxCb3ggZGlzcGxheT0nZmxleCcgZmxleD1cIjAgMSA1MCVcIj5cbiAgICAgICAgPFRvdGFscyAvPlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4pO1xuXG5jb25zdCBDb250ZW50ID0gKCkgPT4ge1xuICBjb25zdCB7IGRhdGEsIGxvYWRpbmcgfSA9IHVzZURhdGEoKVxuXG4gIHJldHVybiA8V3JhcHBlcj5cbiAgICA8U2VjdGlvbiBzdHlsZT17eyBvdmVyZmxvd1g6ICdzY3JvbGwnIH19PlxuICAgICAgPFN0YXRlc0xpc3QgLz5cbiAgICA8L1NlY3Rpb24+XG5cbiAgICA8U2VjdGlvbj5cbiAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBoZWlnaHQ9XCIwXCIgYWxpZ25JdGVtcz1cImJhc2VsaW5lXCIgd2lkdGg9XCIxMDAlXCI+XG4gICAgICAgIDxJbmZvQmFyIC8+XG4gICAgICA8L0JveD5cbiAgICA8L1NlY3Rpb24+XG5cbiAgICA8U2VjdGlvbiBmbGV4PScxJyBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgIDxNYXAgZGF0YT17ZGF0YX0gLz5cbiAgICA8L1NlY3Rpb24+XG5cbiAgICA8U2VjdGlvbj5cbiAgICAgIDxCb3g+XG4gICAgICAgIDxDb3B5cmlnaHQgLz5cbiAgICAgIDwvQm94PlxuICAgIDwvU2VjdGlvbj5cbiAgPC9XcmFwcGVyPlxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/Layout.js\n");

/***/ }),

/***/ "./lib/Map.js":
false,

/***/ "./node_modules/datamaps/dist/datamaps.all.js":
false,

/***/ "./node_modules/datamaps/node_modules/d3/d3.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/dynamic.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/loadable-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/loadable.js":
false,

/***/ "./node_modules/topojson/build/topojson.js":
false,

/***/ "./node_modules/use-subscription/cjs/use-subscription.development.js":
false,

/***/ "./node_modules/use-subscription/index.js":
false

})