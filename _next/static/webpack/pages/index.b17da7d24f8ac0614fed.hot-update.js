webpackHotUpdate_N_E("pages/index",{

/***/ "./lib/Layout.js":
/*!***********************!*\
  !*** ./lib/Layout.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Box */ \"./lib/Box.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ \"./lib/constants.js\");\n\n\n\n\n\nvar _jsxFileName = \"/app/lib/Layout.js\",\n    _s = $RefreshSig$(),\n    _this = undefined,\n    _s2 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar DynamicComponentWithNoSSR = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./Map */ \"./lib/Map.js\"));\n}, {\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! ./Map */ \"./lib/Map.js\")];\n    },\n    modules: ['./Map']\n  }\n});\n_c2 = DynamicComponentWithNoSSR;\n\nvar useData = function useData() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(undefined),\n      data = _useState[0],\n      setData = _useState[1];\n\n  isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()('results/president/2017.json').then(function (res) {\n    return res.json();\n  }).then(function (res) {\n    setData(res);\n  });\n  return {\n    data: data,\n    loading: data === undefined\n  };\n};\n\n_s(useData, \"a5a5NTOfwgqVemCc+HO+lJNrlY4=\");\n\nvar PartyTotal = function PartyTotal(_ref) {\n  var party = _ref.party;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    display: \"flex\",\n    flex: \"0 0 33%\",\n    justifyContent: \"center\",\n    alignItems: \"center\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n      id: \"\".concat(party, \"Total\"),\n      style: {\n        color: _constants__WEBPACK_IMPORTED_MODULE_7__[\"partyColors\"][party],\n        padding: '0 2px',\n        textShadow: '0px 1px 1px #444',\n        textAlign: 'center',\n        fontSize: '1.15rem',\n        margin: 0\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 3\n  }, _this);\n};\n\n_c3 = PartyTotal;\n\nvar Totals = function Totals() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    display: \"flex\",\n    width: \"100%\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(PartyTotal, {\n      party: \"dems\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(PartyTotal, {\n      party: \"neutral\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(PartyTotal, {\n      party: \"GOP\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 3\n  }, _this);\n};\n\n_c4 = Totals;\n\nvar Title = function Title() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n    style: {\n      lineHeight: '1.25',\n      padding: '0 10px',\n      fontSize: '1.25rem',\n      margin: '0.75rem'\n    },\n    children: \"2016 U.S Electoral College Map\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 55,\n    columnNumber: 3\n  }, _this);\n};\n\n_c5 = Title;\n\nvar StatesList = function StatesList() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      id: \"statesList\",\n      style: {\n        display: \"flex\",\n        flexWrap: \"nowrap\"\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n        children: \"Loading.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 66,\n    columnNumber: 3\n  }, _this);\n};\n\n_c6 = StatesList;\n\nvar FooterItem = function FooterItem(_ref2) {\n  var children = _ref2.children;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    flex: \"0 1 0\",\n    style: {\n      padding: '5px 0',\n      marginLeft: '15px',\n      whiteSpace: 'nowrap'\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 74,\n    columnNumber: 3\n  }, _this);\n};\n\n_c7 = FooterItem;\n\nvar Copyright = function Copyright() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      display: \"flex\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(FooterItem, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"a\", {\n          href: \"https://github.com/benjaminbergstein/us-electoral-map\",\n          target: \"_BLANK\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"img\", {\n            src: \"docs/github.png\",\n            height: \"14px\",\n            width: \"14px\",\n            alt: \"Source on Github\",\n            title: \"Source on Github\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 84,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(FooterItem, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"a\", {\n          href: \"https://goo.gl/forms/THky9dqIPI9AezJb2\",\n          target: \"_BLANK\",\n          style: {\n            textDecoration: 'none'\n          },\n          children: \"Feedback\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(FooterItem, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"copyright\", {\n          children: \"\\xA9 2017-2019 Ben Bergstein\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false);\n};\n\n_c8 = Copyright;\n\nvar Section = function Section(_ref3) {\n  var height = _ref3.height,\n      flex = _ref3.flex,\n      children = _ref3.children,\n      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref3, [\"height\", \"flex\", \"children\"]);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _objectSpread(_objectSpread({\n    height: height,\n    flex: flex,\n    display: \"flex\",\n    flexDirection: \"column\",\n    justifyContent: \"center\"\n  }, props), {}, {\n    children: children\n  }), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 102,\n    columnNumber: 3\n  }, _this);\n};\n\n_c9 = Section;\n\nvar Wrapper = function Wrapper(_ref4) {\n  var children = _ref4.children;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    display: \"flex\",\n    flexDirection: \"column\",\n    height: \"100%\",\n    style: {\n      minHeight: '65vw'\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 115,\n    columnNumber: 3\n  }, _this);\n};\n\n_c10 = Wrapper;\n\nvar InfoBar = function InfoBar() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    display: \"flex\",\n    width: \"100%\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      display: \"flex\",\n      flex: \"0 0 50%\",\n      alignItems: \"center\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Title, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      display: \"flex\",\n      flex: \"0 1 50%\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Totals, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 126,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 121,\n    columnNumber: 5\n  }, _this);\n};\n\n_c11 = InfoBar;\n\nvar Content = function Content() {\n  _s2();\n\n  var _useData = useData(),\n      data = _useData.data,\n      loading = _useData.loading;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Wrapper, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Section, {\n      style: {\n        overflowX: 'scroll'\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(StatesList, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 136,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Section, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        display: \"flex\",\n        height: \"0\",\n        alignItems: \"baseline\",\n        width: \"100%\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(InfoBar, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 141,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 140,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Section, {\n      flex: \"1\",\n      style: {\n        position: 'relative'\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Map, {\n        data: data\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 146,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Section, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Copyright, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 151,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 150,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 134,\n    columnNumber: 10\n  }, _this);\n};\n\n_s2(Content, \"V5gz3EZkFMOQuCkxQHdrgYPUNBU=\", false, function () {\n  return [useData];\n});\n\n_c12 = Content;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Content);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;\n\n$RefreshReg$(_c, \"DynamicComponentWithNoSSR$dynamic\");\n$RefreshReg$(_c2, \"DynamicComponentWithNoSSR\");\n$RefreshReg$(_c3, \"PartyTotal\");\n$RefreshReg$(_c4, \"Totals\");\n$RefreshReg$(_c5, \"Title\");\n$RefreshReg$(_c6, \"StatesList\");\n$RefreshReg$(_c7, \"FooterItem\");\n$RefreshReg$(_c8, \"Copyright\");\n$RefreshReg$(_c9, \"Section\");\n$RefreshReg$(_c10, \"Wrapper\");\n$RefreshReg$(_c11, \"InfoBar\");\n$RefreshReg$(_c12, \"Content\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL0xheW91dC5qcz8yOWQzIl0sIm5hbWVzIjpbIkR5bmFtaWNDb21wb25lbnRXaXRoTm9TU1IiLCJkeW5hbWljIiwic3NyIiwidXNlRGF0YSIsInVzZVN0YXRlIiwidW5kZWZpbmVkIiwiZGF0YSIsInNldERhdGEiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwibG9hZGluZyIsIlBhcnR5VG90YWwiLCJwYXJ0eSIsImNvbG9yIiwicGFydHlDb2xvcnMiLCJwYWRkaW5nIiwidGV4dFNoYWRvdyIsInRleHRBbGlnbiIsImZvbnRTaXplIiwibWFyZ2luIiwiVG90YWxzIiwiVGl0bGUiLCJsaW5lSGVpZ2h0IiwiU3RhdGVzTGlzdCIsImRpc3BsYXkiLCJmbGV4V3JhcCIsIkZvb3Rlckl0ZW0iLCJjaGlsZHJlbiIsIm1hcmdpbkxlZnQiLCJ3aGl0ZVNwYWNlIiwiQ29weXJpZ2h0IiwidGV4dERlY29yYXRpb24iLCJTZWN0aW9uIiwiaGVpZ2h0IiwiZmxleCIsInByb3BzIiwiV3JhcHBlciIsIm1pbkhlaWdodCIsIkluZm9CYXIiLCJDb250ZW50Iiwib3ZlcmZsb3dYIiwicG9zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSx5QkFBeUIsR0FBR0MsbURBQU8sTUFDdkM7QUFBQSxTQUFNLDBHQUFOO0FBQUEsQ0FEdUMsRUFFdkM7QUFBRUMsS0FBRyxFQUFFLEtBQVA7QUFBQTtBQUFBO0FBQUEsa0NBRGEsMkJBQ2I7QUFBQTtBQUFBLGNBRGEsT0FDYjtBQUFBO0FBQUEsQ0FGdUMsQ0FBekM7TUFBTUYseUI7O0FBS04sSUFBTUcsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUFBLGtCQUNJQyxzREFBUSxDQUFDQyxTQUFELENBRFo7QUFBQSxNQUNiQyxJQURhO0FBQUEsTUFDUEMsT0FETzs7QUFHcEJDLDJEQUFLLENBQUMsNkJBQUQsQ0FBTCxDQUNHQyxJQURILENBQ1EsVUFBQ0MsR0FBRDtBQUFBLFdBQVNBLEdBQUcsQ0FBQ0MsSUFBSixFQUFUO0FBQUEsR0FEUixFQUVHRixJQUZILENBRVEsVUFBQ0MsR0FBRCxFQUFTO0FBQUVILFdBQU8sQ0FBQ0csR0FBRCxDQUFQO0FBQWMsR0FGakM7QUFJQSxTQUFPO0FBQ0xKLFFBQUksRUFBRUEsSUFERDtBQUVMTSxXQUFPLEVBQUVOLElBQUksS0FBS0Q7QUFGYixHQUFQO0FBSUQsQ0FYRDs7R0FBTUYsTzs7QUFhTixJQUFNVSxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLHNCQUNqQixxRUFBQyw0Q0FBRDtBQUNFLFdBQU8sRUFBQyxNQURWO0FBRUUsUUFBSSxFQUFDLFNBRlA7QUFHRSxrQkFBYyxFQUFDLFFBSGpCO0FBSUUsY0FBVSxFQUFDLFFBSmI7QUFBQSwyQkFNRTtBQUNFLFFBQUUsWUFBS0EsS0FBTCxVQURKO0FBRUUsV0FBSyxFQUFFO0FBQ0xDLGFBQUssRUFBRUMsc0RBQVcsQ0FBQ0YsS0FBRCxDQURiO0FBRUxHLGVBQU8sRUFBRSxPQUZKO0FBR0xDLGtCQUFVLEVBQUUsa0JBSFA7QUFJTEMsaUJBQVMsRUFBRSxRQUpOO0FBS0xDLGdCQUFRLEVBQUUsU0FMTDtBQU1MQyxjQUFNLEVBQUU7QUFOSDtBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGlCO0FBQUEsQ0FBbkI7O01BQU1SLFU7O0FBb0JOLElBQU1TLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUEsc0JBQ2IscUVBQUMsNENBQUQ7QUFBSyxXQUFPLEVBQUMsTUFBYjtBQUFvQixTQUFLLEVBQUMsTUFBMUI7QUFBQSw0QkFDRSxxRUFBQyxVQUFEO0FBQVksV0FBSyxFQUFDO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLHFFQUFDLFVBQUQ7QUFBWSxXQUFLLEVBQUM7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBR0UscUVBQUMsVUFBRDtBQUFZLFdBQUssRUFBQztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGE7QUFBQSxDQUFmOztNQUFNQSxNOztBQVNOLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRO0FBQUEsc0JBQ1o7QUFBSSxTQUFLLEVBQUU7QUFDVEMsZ0JBQVUsRUFBRSxNQURIO0FBRVRQLGFBQU8sRUFBRSxRQUZBO0FBR1RHLGNBQVEsRUFBRSxTQUhEO0FBSVRDLFlBQU0sRUFBRTtBQUpDLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEWTtBQUFBLENBQWQ7O01BQU1FLEs7O0FBV04sSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxzQkFDakI7QUFBQSwyQkFDRTtBQUFLLFFBQUUsRUFBQyxZQUFSO0FBQXFCLFdBQUssRUFBRTtBQUFFQyxlQUFPLEVBQUUsTUFBWDtBQUFtQkMsZ0JBQVEsRUFBRTtBQUE3QixPQUE1QjtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEaUI7QUFBQSxDQUFuQjs7TUFBTUYsVTs7QUFRTixJQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLE1BQUdDLFFBQUgsU0FBR0EsUUFBSDtBQUFBLHNCQUNqQixxRUFBQyw0Q0FBRDtBQUFLLFFBQUksRUFBQyxPQUFWO0FBQWtCLFNBQUssRUFBRTtBQUFFWixhQUFPLEVBQUUsT0FBWDtBQUFvQmEsZ0JBQVUsRUFBRSxNQUFoQztBQUF3Q0MsZ0JBQVUsRUFBRTtBQUFwRCxLQUF6QjtBQUFBLGNBQ0dGO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURpQjtBQUFBLENBQW5COztNQUFNRCxVOztBQU1OLElBQU1JLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsc0JBQ2hCO0FBQUEsMkJBQ0UscUVBQUMsNENBQUQ7QUFBSyxhQUFPLEVBQUMsTUFBYjtBQUFBLDhCQUNFLHFFQUFDLFVBQUQ7QUFBQSwrQkFDRTtBQUFHLGNBQUksRUFBQyx1REFBUjtBQUFnRSxnQkFBTSxFQUFDLFFBQXZFO0FBQUEsaUNBQ0U7QUFBSyxlQUFHLEVBQUMsaUJBQVQ7QUFBMkIsa0JBQU0sRUFBQyxNQUFsQztBQUF5QyxpQkFBSyxFQUFDLE1BQS9DO0FBQXNELGVBQUcsRUFBQyxrQkFBMUQ7QUFBNkUsaUJBQUssRUFBQztBQUFuRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQU1FLHFFQUFDLFVBQUQ7QUFBQSwrQkFDRTtBQUFHLGNBQUksRUFBQyx3Q0FBUjtBQUFpRCxnQkFBTSxFQUFDLFFBQXhEO0FBQWlFLGVBQUssRUFBRTtBQUFFQywwQkFBYyxFQUFFO0FBQWxCLFdBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5GLGVBV0UscUVBQUMsVUFBRDtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURnQjtBQUFBLENBQWxCOztNQUFNRCxTOztBQXNCTixJQUFNRSxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLE1BQUdDLE1BQUgsU0FBR0EsTUFBSDtBQUFBLE1BQVdDLElBQVgsU0FBV0EsSUFBWDtBQUFBLE1BQWlCUCxRQUFqQixTQUFpQkEsUUFBakI7QUFBQSxNQUE4QlEsS0FBOUI7O0FBQUEsc0JBQ2QscUVBQUMsNENBQUQ7QUFDRSxVQUFNLEVBQUVGLE1BRFY7QUFFRSxRQUFJLEVBQUVDLElBRlI7QUFHRSxXQUFPLEVBQUMsTUFIVjtBQUlFLGlCQUFhLEVBQUMsUUFKaEI7QUFLRSxrQkFBYyxFQUFDO0FBTGpCLEtBTU1DLEtBTk47QUFBQSxjQVFHUjtBQVJIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEYztBQUFBLENBQWhCOztNQUFNSyxPOztBQWFOLElBQU1JLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsTUFBR1QsUUFBSCxTQUFHQSxRQUFIO0FBQUEsc0JBQ2QscUVBQUMsNENBQUQ7QUFBSyxXQUFPLEVBQUMsTUFBYjtBQUFvQixpQkFBYSxFQUFDLFFBQWxDO0FBQTJDLFVBQU0sRUFBQyxNQUFsRDtBQUF5RCxTQUFLLEVBQUU7QUFBRVUsZUFBUyxFQUFFO0FBQWIsS0FBaEU7QUFBQSxjQUNHVjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEYztBQUFBLENBQWhCOztPQUFNUyxPOztBQU1OLElBQU1FLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsc0JBQ1oscUVBQUMsNENBQUQ7QUFBSyxXQUFPLEVBQUMsTUFBYjtBQUFvQixTQUFLLEVBQUMsTUFBMUI7QUFBQSw0QkFDRSxxRUFBQyw0Q0FBRDtBQUFLLGFBQU8sRUFBQyxNQUFiO0FBQW9CLFVBQUksRUFBQyxTQUF6QjtBQUFtQyxnQkFBVSxFQUFDLFFBQTlDO0FBQUEsNkJBQ0UscUVBQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBSUUscUVBQUMsNENBQUQ7QUFBSyxhQUFPLEVBQUMsTUFBYjtBQUFvQixVQUFJLEVBQUMsU0FBekI7QUFBQSw2QkFDRSxxRUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRFk7QUFBQSxDQUFoQjs7T0FBTUEsTzs7QUFXTixJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQUEsaUJBQ010QyxPQUFPLEVBRGI7QUFBQSxNQUNaRyxJQURZLFlBQ1pBLElBRFk7QUFBQSxNQUNOTSxPQURNLFlBQ05BLE9BRE07O0FBR3BCLHNCQUFPLHFFQUFDLE9BQUQ7QUFBQSw0QkFDTCxxRUFBQyxPQUFEO0FBQVMsV0FBSyxFQUFFO0FBQUU4QixpQkFBUyxFQUFFO0FBQWIsT0FBaEI7QUFBQSw2QkFDRSxxRUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREssZUFLTCxxRUFBQyxPQUFEO0FBQUEsNkJBQ0UscUVBQUMsNENBQUQ7QUFBSyxlQUFPLEVBQUMsTUFBYjtBQUFvQixjQUFNLEVBQUMsR0FBM0I7QUFBK0Isa0JBQVUsRUFBQyxVQUExQztBQUFxRCxhQUFLLEVBQUMsTUFBM0Q7QUFBQSwrQkFDRSxxRUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxLLGVBV0wscUVBQUMsT0FBRDtBQUFTLFVBQUksRUFBQyxHQUFkO0FBQWtCLFdBQUssRUFBRTtBQUFFQyxnQkFBUSxFQUFFO0FBQVosT0FBekI7QUFBQSw2QkFDRSxxRUFBQyxHQUFEO0FBQUssWUFBSSxFQUFFckM7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhLLGVBZUwscUVBQUMsT0FBRDtBQUFBLDZCQUNFLHFFQUFDLDRDQUFEO0FBQUEsK0JBQ0UscUVBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFmSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQXFCRCxDQXhCRDs7SUFBTW1DLE87VUFDc0J0QyxPOzs7T0FEdEJzQyxPO0FBMEJTQSxzRUFBZiIsImZpbGUiOiIuL2xpYi9MYXlvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSAgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCBCb3ggZnJvbSAnLi9Cb3gnO1xuaW1wb3J0IHsgcGFydHlDb2xvcnMgfSBmcm9tICcuL2NvbnN0YW50cydcblxuY29uc3QgRHluYW1pY0NvbXBvbmVudFdpdGhOb1NTUiA9IGR5bmFtaWMoXG4gICgpID0+IGltcG9ydCgnLi9NYXAnKSxcbiAgeyBzc3I6IGZhbHNlIH1cbilcblxuY29uc3QgdXNlRGF0YSA9ICgpID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUodW5kZWZpbmVkKVxuXG4gIGZldGNoKCdyZXN1bHRzL3ByZXNpZGVudC8yMDE3Lmpzb24nKVxuICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgLnRoZW4oKHJlcykgPT4geyBzZXREYXRhKHJlcykgfSlcblxuICByZXR1cm4ge1xuICAgIGRhdGE6IGRhdGEsXG4gICAgbG9hZGluZzogZGF0YSA9PT0gdW5kZWZpbmVkLFxuICB9XG59XG5cbmNvbnN0IFBhcnR5VG90YWwgPSAoeyBwYXJ0eSB9KSA9PiAoXG4gIDxCb3hcbiAgICBkaXNwbGF5PSdmbGV4J1xuICAgIGZsZXg9XCIwIDAgMzMlXCJcbiAgICBqdXN0aWZ5Q29udGVudD0nY2VudGVyJ1xuICAgIGFsaWduSXRlbXM9J2NlbnRlcidcbiAgPlxuICAgIDxoMVxuICAgICAgaWQ9e2Ake3BhcnR5fVRvdGFsYH1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGNvbG9yOiBwYXJ0eUNvbG9yc1twYXJ0eV0sXG4gICAgICAgIHBhZGRpbmc6ICcwIDJweCcsXG4gICAgICAgIHRleHRTaGFkb3c6ICcwcHggMXB4IDFweCAjNDQ0JyxcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgZm9udFNpemU6ICcxLjE1cmVtJyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgfX0+PC9oMT5cbiAgPC9Cb3g+XG4pO1xuXG5jb25zdCBUb3RhbHMgPSAoKSA9PiAoXG4gIDxCb3ggZGlzcGxheT0nZmxleCcgd2lkdGg9XCIxMDAlXCI+XG4gICAgPFBhcnR5VG90YWwgcGFydHk9J2RlbXMnIC8+XG4gICAgPFBhcnR5VG90YWwgcGFydHk9J25ldXRyYWwnIC8+XG4gICAgPFBhcnR5VG90YWwgcGFydHk9J0dPUCcgLz5cbiAgPC9Cb3g+XG4pO1xuXG5cbmNvbnN0IFRpdGxlID0gKCkgPT4gKFxuICA8aDEgc3R5bGU9e3tcbiAgICBsaW5lSGVpZ2h0OiAnMS4yNScsXG4gICAgcGFkZGluZzogJzAgMTBweCcsXG4gICAgZm9udFNpemU6ICcxLjI1cmVtJyxcbiAgICBtYXJnaW46ICcwLjc1cmVtJyxcbiAgfX0+XG4gICAgMjAxNiBVLlMgRWxlY3RvcmFsIENvbGxlZ2UgTWFwXG4gIDwvaDE+XG4pO1xuXG5jb25zdCBTdGF0ZXNMaXN0ID0gKCkgPT4gKFxuICA8ZGl2PlxuICAgIDxkaXYgaWQ9XCJzdGF0ZXNMaXN0XCIgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhXcmFwOiBcIm5vd3JhcFwiIH19PlxuICAgICAgPHNwYW4+TG9hZGluZy48L3NwYW4+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgRm9vdGVySXRlbSA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPEJveCBmbGV4PVwiMCAxIDBcIiBzdHlsZT17eyBwYWRkaW5nOiAnNXB4IDAnLCBtYXJnaW5MZWZ0OiAnMTVweCcsIHdoaXRlU3BhY2U6ICdub3dyYXAnIH19PlxuICAgIHtjaGlsZHJlbn1cbiAgPC9Cb3g+XG4pO1xuXG5jb25zdCBDb3B5cmlnaHQgPSAoKSA9PiAoXG4gIDw+XG4gICAgPEJveCBkaXNwbGF5PVwiZmxleFwiPlxuICAgICAgPEZvb3Rlckl0ZW0+XG4gICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9iZW5qYW1pbmJlcmdzdGVpbi91cy1lbGVjdG9yYWwtbWFwJyB0YXJnZXQ9XCJfQkxBTktcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cImRvY3MvZ2l0aHViLnBuZ1wiIGhlaWdodD1cIjE0cHhcIiB3aWR0aD1cIjE0cHhcIiBhbHQ9XCJTb3VyY2Ugb24gR2l0aHViXCIgdGl0bGU9XCJTb3VyY2Ugb24gR2l0aHViXCIgLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9Gb290ZXJJdGVtPlxuICAgICAgPEZvb3Rlckl0ZW0+XG4gICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vZ29vLmdsL2Zvcm1zL1RIa3k5ZHFJUEk5QWV6SmIyJyB0YXJnZXQ9XCJfQkxBTktcIiBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnIH19PlxuICAgICAgICAgIEZlZWRiYWNrXG4gICAgICAgIDwvYT5cbiAgICAgIDwvRm9vdGVySXRlbT5cbiAgICAgIDxGb290ZXJJdGVtPlxuICAgICAgICA8Y29weXJpZ2h0PlxuICAgICAgICAgICZjb3B5OyAyMDE3LTIwMTkgQmVuIEJlcmdzdGVpblxuICAgICAgICA8L2NvcHlyaWdodD5cbiAgICAgIDwvRm9vdGVySXRlbT5cbiAgICA8L0JveD5cbiAgPC8+XG4pO1xuXG5jb25zdCBTZWN0aW9uID0gKHsgaGVpZ2h0LCBmbGV4LCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4gKFxuICA8Qm94XG4gICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgZmxleD17ZmxleH1cbiAgICBkaXNwbGF5PSdmbGV4J1xuICAgIGZsZXhEaXJlY3Rpb249J2NvbHVtbidcbiAgICBqdXN0aWZ5Q29udGVudD0nY2VudGVyJ1xuICAgIHsuLi5wcm9wc31cbiAgPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9Cb3g+XG4pXG5cbmNvbnN0IFdyYXBwZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxCb3ggZGlzcGxheT1cImZsZXhcIiBmbGV4RGlyZWN0aW9uPSdjb2x1bW4nIGhlaWdodD0nMTAwJScgc3R5bGU9e3sgbWluSGVpZ2h0OiAnNjV2dycgfX0+XG4gICAge2NoaWxkcmVufVxuICA8L0JveD5cbik7XG5cbmNvbnN0IEluZm9CYXIgPSAoKSA9PiAoXG4gICAgPEJveCBkaXNwbGF5PSdmbGV4JyB3aWR0aD1cIjEwMCVcIj5cbiAgICAgIDxCb3ggZGlzcGxheT0nZmxleCcgZmxleD1cIjAgMCA1MCVcIiBhbGlnbkl0ZW1zPSdjZW50ZXInPlxuICAgICAgICA8VGl0bGUgLz5cbiAgICAgIDwvQm94PlxuICAgICAgPEJveCBkaXNwbGF5PSdmbGV4JyBmbGV4PVwiMCAxIDUwJVwiPlxuICAgICAgICA8VG90YWxzIC8+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbik7XG5cbmNvbnN0IENvbnRlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IHsgZGF0YSwgbG9hZGluZyB9ID0gdXNlRGF0YSgpXG5cbiAgcmV0dXJuIDxXcmFwcGVyPlxuICAgIDxTZWN0aW9uIHN0eWxlPXt7IG92ZXJmbG93WDogJ3Njcm9sbCcgfX0+XG4gICAgICA8U3RhdGVzTGlzdCAvPlxuICAgIDwvU2VjdGlvbj5cblxuICAgIDxTZWN0aW9uPlxuICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGhlaWdodD1cIjBcIiBhbGlnbkl0ZW1zPVwiYmFzZWxpbmVcIiB3aWR0aD1cIjEwMCVcIj5cbiAgICAgICAgPEluZm9CYXIgLz5cbiAgICAgIDwvQm94PlxuICAgIDwvU2VjdGlvbj5cblxuICAgIDxTZWN0aW9uIGZsZXg9JzEnIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgPE1hcCBkYXRhPXtkYXRhfSAvPlxuICAgIDwvU2VjdGlvbj5cblxuICAgIDxTZWN0aW9uPlxuICAgICAgPEJveD5cbiAgICAgICAgPENvcHlyaWdodCAvPlxuICAgICAgPC9Cb3g+XG4gICAgPC9TZWN0aW9uPlxuICA8L1dyYXBwZXI+XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/Layout.js\n");

/***/ })

})