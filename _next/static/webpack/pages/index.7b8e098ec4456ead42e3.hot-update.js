webpackHotUpdate_N_E("pages/index",{

/***/ "./lib/Layout.js":
/*!***********************!*\
  !*** ./lib/Layout.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Box */ \"./lib/Box.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ \"./lib/constants.js\");\n/* harmony import */ var _States__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./States */ \"./lib/States.js\");\n\n\n\n\n\nvar _jsxFileName = \"/app/lib/Layout.js\",\n    _s = $RefreshSig$(),\n    _this = undefined,\n    _s2 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nvar Map = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./Map */ \"./lib/Map.js\"));\n}, {\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! ./Map */ \"./lib/Map.js\")];\n    },\n    modules: ['./Map']\n  }\n});\n_c2 = Map;\n\nvar useData = function useData() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(undefined),\n      data = _useState[0],\n      setData = _useState[1];\n\n  if (false) {}\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()('results/president/2017.json').then(function (res) {\n      return res.json();\n    }).then(function (res) {\n      setData(res);\n    });\n  }, []);\n  return {\n    data: data,\n    loading: data === undefined\n  };\n};\n\n_s(useData, \"dls/q1mq0V739rI5WVST1+vSgLo=\");\n\nvar PartyTotal = function PartyTotal(_ref) {\n  var party = _ref.party;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    display: \"flex\",\n    flex: \"0 0 33%\",\n    justifyContent: \"center\",\n    alignItems: \"center\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n      id: \"\".concat(party, \"Total\"),\n      style: {\n        color: _constants__WEBPACK_IMPORTED_MODULE_7__[\"partyColors\"][party],\n        padding: '0 2px',\n        textShadow: '0px 1px 1px #444',\n        textAlign: 'center',\n        fontSize: '1.15rem',\n        margin: 0\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 3\n  }, _this);\n};\n\n_c3 = PartyTotal;\n\nvar Totals = function Totals() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    display: \"flex\",\n    width: \"100%\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(PartyTotal, {\n      party: \"dems\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(PartyTotal, {\n      party: \"neutral\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(PartyTotal, {\n      party: \"GOP\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 52,\n    columnNumber: 3\n  }, _this);\n};\n\n_c4 = Totals;\n\nvar Title = function Title() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n    style: {\n      lineHeight: '1.25',\n      padding: '0 10px',\n      fontSize: '1.25rem',\n      margin: '0.75rem'\n    },\n    children: \"2016 U.S Electoral College Map\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 61,\n    columnNumber: 3\n  }, _this);\n};\n\n_c5 = Title;\n\nvar StatesList = function StatesList() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      id: \"statesList\",\n      style: {\n        display: \"flex\",\n        flexWrap: \"nowrap\"\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_States__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        data: data\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 72,\n    columnNumber: 3\n  }, _this);\n};\n\n_c6 = StatesList;\n\nvar FooterItem = function FooterItem(_ref2) {\n  var children = _ref2.children;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    flex: \"0 1 0\",\n    style: {\n      padding: '5px 0',\n      marginLeft: '15px',\n      whiteSpace: 'nowrap'\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 80,\n    columnNumber: 3\n  }, _this);\n};\n\n_c7 = FooterItem;\n\nvar Copyright = function Copyright() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      display: \"flex\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(FooterItem, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"a\", {\n          href: \"https://github.com/benjaminbergstein/us-electoral-map\",\n          target: \"_BLANK\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"img\", {\n            src: \"docs/github.png\",\n            height: \"14px\",\n            width: \"14px\",\n            alt: \"Source on Github\",\n            title: \"Source on Github\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(FooterItem, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"a\", {\n          href: \"https://goo.gl/forms/THky9dqIPI9AezJb2\",\n          target: \"_BLANK\",\n          style: {\n            textDecoration: 'none'\n          },\n          children: \"Feedback\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(FooterItem, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"copyright\", {\n          children: \"\\xA9 2017-2019 Ben Bergstein\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false);\n};\n\n_c8 = Copyright;\n\nvar Section = function Section(_ref3) {\n  var height = _ref3.height,\n      flex = _ref3.flex,\n      children = _ref3.children,\n      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref3, [\"height\", \"flex\", \"children\"]);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _objectSpread(_objectSpread({\n    height: height,\n    flex: flex,\n    display: \"flex\",\n    flexDirection: \"column\",\n    justifyContent: \"center\"\n  }, props), {}, {\n    children: children\n  }), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 108,\n    columnNumber: 3\n  }, _this);\n};\n\n_c9 = Section;\n\nvar Wrapper = function Wrapper(_ref4) {\n  var children = _ref4.children;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    display: \"flex\",\n    flexDirection: \"column\",\n    height: \"100%\",\n    style: {\n      minHeight: '65vw'\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 121,\n    columnNumber: 3\n  }, _this);\n};\n\n_c10 = Wrapper;\n\nvar InfoBar = function InfoBar() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    display: \"flex\",\n    width: \"100%\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      display: \"flex\",\n      flex: \"0 0 50%\",\n      alignItems: \"center\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Title, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 129,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      display: \"flex\",\n      flex: \"0 1 50%\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Totals, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 132,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 127,\n    columnNumber: 5\n  }, _this);\n};\n\n_c11 = InfoBar;\n\nvar Content = function Content() {\n  _s2();\n\n  var _useData = useData(),\n      data = _useData.data,\n      loading = _useData.loading;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Wrapper, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Section, {\n      style: {\n        overflowX: 'scroll'\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(StatesList, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 142,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Section, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        display: \"flex\",\n        height: \"0\",\n        alignItems: \"baseline\",\n        width: \"100%\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(InfoBar, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 147,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 146,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Section, {\n      flex: \"1\",\n      style: {\n        position: 'relative'\n      },\n      children: !loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Map, {\n        data: data\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 152,\n        columnNumber: 20\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Section, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Copyright, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 157,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 156,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 155,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 140,\n    columnNumber: 10\n  }, _this);\n};\n\n_s2(Content, \"V5gz3EZkFMOQuCkxQHdrgYPUNBU=\", false, function () {\n  return [useData];\n});\n\n_c12 = Content;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Content);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;\n\n$RefreshReg$(_c, \"Map$dynamic\");\n$RefreshReg$(_c2, \"Map\");\n$RefreshReg$(_c3, \"PartyTotal\");\n$RefreshReg$(_c4, \"Totals\");\n$RefreshReg$(_c5, \"Title\");\n$RefreshReg$(_c6, \"StatesList\");\n$RefreshReg$(_c7, \"FooterItem\");\n$RefreshReg$(_c8, \"Copyright\");\n$RefreshReg$(_c9, \"Section\");\n$RefreshReg$(_c10, \"Wrapper\");\n$RefreshReg$(_c11, \"InfoBar\");\n$RefreshReg$(_c12, \"Content\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL0xheW91dC5qcz8yOWQzIl0sIm5hbWVzIjpbIk1hcCIsImR5bmFtaWMiLCJzc3IiLCJ1c2VEYXRhIiwidXNlU3RhdGUiLCJ1bmRlZmluZWQiLCJkYXRhIiwic2V0RGF0YSIsInVzZUVmZmVjdCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJsb2FkaW5nIiwiUGFydHlUb3RhbCIsInBhcnR5IiwiY29sb3IiLCJwYXJ0eUNvbG9ycyIsInBhZGRpbmciLCJ0ZXh0U2hhZG93IiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJtYXJnaW4iLCJUb3RhbHMiLCJUaXRsZSIsImxpbmVIZWlnaHQiLCJTdGF0ZXNMaXN0IiwiZGlzcGxheSIsImZsZXhXcmFwIiwiRm9vdGVySXRlbSIsImNoaWxkcmVuIiwibWFyZ2luTGVmdCIsIndoaXRlU3BhY2UiLCJDb3B5cmlnaHQiLCJ0ZXh0RGVjb3JhdGlvbiIsIlNlY3Rpb24iLCJoZWlnaHQiLCJmbGV4IiwicHJvcHMiLCJXcmFwcGVyIiwibWluSGVpZ2h0IiwiSW5mb0JhciIsIkNvbnRlbnQiLCJvdmVyZmxvd1giLCJwb3NpdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLEdBQUcsR0FBR0MsbURBQU8sTUFDakI7QUFBQSxTQUFNLDBHQUFOO0FBQUEsQ0FEaUIsRUFFakI7QUFBRUMsS0FBRyxFQUFFLEtBQVA7QUFBQTtBQUFBO0FBQUEsa0NBRGEsMkJBQ2I7QUFBQTtBQUFBLGNBRGEsT0FDYjtBQUFBO0FBQUEsQ0FGaUIsQ0FBbkI7TUFBTUYsRzs7QUFLTixJQUFNRyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQUEsa0JBQ0lDLHNEQUFRLENBQUNDLFNBQUQsQ0FEWjtBQUFBLE1BQ2JDLElBRGE7QUFBQSxNQUNQQyxPQURPOztBQUdwQixhQUFtQztBQUVuQ0Ms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ZW50IjpbImltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gIGZyb20gJ3JlYWN0JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5pbXBvcnQgQm94IGZyb20gJy4vQm94JztcbmltcG9ydCB7IHBhcnR5Q29sb3JzIH0gZnJvbSAnLi9jb25zdGFudHMnXG5cbmltcG9ydCBTdGF0ZXMgZnJvbSAnLi9TdGF0ZXMnXG5cbmNvbnN0IE1hcCA9IGR5bmFtaWMoXG4gICgpID0+IGltcG9ydCgnLi9NYXAnKSxcbiAgeyBzc3I6IGZhbHNlIH1cbilcblxuY29uc3QgdXNlRGF0YSA9ICgpID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUodW5kZWZpbmVkKVxuXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4ge31cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKCdyZXN1bHRzL3ByZXNpZGVudC8yMDE3Lmpzb24nKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChyZXMpID0+IHsgc2V0RGF0YShyZXMpIH0pXG4gIH0sIFtdKVxuXG4gIHJldHVybiB7XG4gICAgZGF0YTogZGF0YSxcbiAgICBsb2FkaW5nOiBkYXRhID09PSB1bmRlZmluZWQsXG4gIH1cbn1cblxuY29uc3QgUGFydHlUb3RhbCA9ICh7IHBhcnR5IH0pID0+IChcbiAgPEJveFxuICAgIGRpc3BsYXk9J2ZsZXgnXG4gICAgZmxleD1cIjAgMCAzMyVcIlxuICAgIGp1c3RpZnlDb250ZW50PSdjZW50ZXInXG4gICAgYWxpZ25JdGVtcz0nY2VudGVyJ1xuICA+XG4gICAgPGgxXG4gICAgICBpZD17YCR7cGFydHl9VG90YWxgfVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgY29sb3I6IHBhcnR5Q29sb3JzW3BhcnR5XSxcbiAgICAgICAgcGFkZGluZzogJzAgMnB4JyxcbiAgICAgICAgdGV4dFNoYWRvdzogJzBweCAxcHggMXB4ICM0NDQnLFxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICBmb250U2l6ZTogJzEuMTVyZW0nLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICB9fT48L2gxPlxuICA8L0JveD5cbik7XG5cbmNvbnN0IFRvdGFscyA9ICgpID0+IChcbiAgPEJveCBkaXNwbGF5PSdmbGV4JyB3aWR0aD1cIjEwMCVcIj5cbiAgICA8UGFydHlUb3RhbCBwYXJ0eT0nZGVtcycgLz5cbiAgICA8UGFydHlUb3RhbCBwYXJ0eT0nbmV1dHJhbCcgLz5cbiAgICA8UGFydHlUb3RhbCBwYXJ0eT0nR09QJyAvPlxuICA8L0JveD5cbik7XG5cblxuY29uc3QgVGl0bGUgPSAoKSA9PiAoXG4gIDxoMSBzdHlsZT17e1xuICAgIGxpbmVIZWlnaHQ6ICcxLjI1JyxcbiAgICBwYWRkaW5nOiAnMCAxMHB4JyxcbiAgICBmb250U2l6ZTogJzEuMjVyZW0nLFxuICAgIG1hcmdpbjogJzAuNzVyZW0nLFxuICB9fT5cbiAgMjAxNiBVLlMgRWxlY3RvcmFsIENvbGxlZ2UgTWFwXG48L2gxPlxuKTtcblxuY29uc3QgU3RhdGVzTGlzdCA9ICgpID0+IChcbiAgPGRpdj5cbiAgICA8ZGl2IGlkPVwic3RhdGVzTGlzdFwiIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4V3JhcDogXCJub3dyYXBcIiB9fT5cbiAgICAgIDxTdGF0ZXMgZGF0YT17ZGF0YX0gLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBGb290ZXJJdGVtID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8Qm94IGZsZXg9XCIwIDEgMFwiIHN0eWxlPXt7IHBhZGRpbmc6ICc1cHggMCcsIG1hcmdpbkxlZnQ6ICcxNXB4Jywgd2hpdGVTcGFjZTogJ25vd3JhcCcgfX0+XG4gICAge2NoaWxkcmVufVxuICA8L0JveD5cbik7XG5cbmNvbnN0IENvcHlyaWdodCA9ICgpID0+IChcbiAgPD5cbiAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCI+XG4gICAgICA8Rm9vdGVySXRlbT5cbiAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL2JlbmphbWluYmVyZ3N0ZWluL3VzLWVsZWN0b3JhbC1tYXAnIHRhcmdldD1cIl9CTEFOS1wiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiZG9jcy9naXRodWIucG5nXCIgaGVpZ2h0PVwiMTRweFwiIHdpZHRoPVwiMTRweFwiIGFsdD1cIlNvdXJjZSBvbiBHaXRodWJcIiB0aXRsZT1cIlNvdXJjZSBvbiBHaXRodWJcIiAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L0Zvb3Rlckl0ZW0+XG4gICAgICA8Rm9vdGVySXRlbT5cbiAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly9nb28uZ2wvZm9ybXMvVEhreTlkcUlQSTlBZXpKYjInIHRhcmdldD1cIl9CTEFOS1wiIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiAnbm9uZScgfX0+XG4gICAgICAgICAgRmVlZGJhY2tcbiAgICAgICAgPC9hPlxuICAgICAgPC9Gb290ZXJJdGVtPlxuICAgICAgPEZvb3Rlckl0ZW0+XG4gICAgICAgIDxjb3B5cmlnaHQ+XG4gICAgICAgICAgJmNvcHk7IDIwMTctMjAxOSBCZW4gQmVyZ3N0ZWluXG4gICAgICAgIDwvY29weXJpZ2h0PlxuICAgICAgPC9Gb290ZXJJdGVtPlxuICAgIDwvQm94PlxuICA8Lz5cbik7XG5cbmNvbnN0IFNlY3Rpb24gPSAoeyBoZWlnaHQsIGZsZXgsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxCb3hcbiAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICBmbGV4PXtmbGV4fVxuICAgIGRpc3BsYXk9J2ZsZXgnXG4gICAgZmxleERpcmVjdGlvbj0nY29sdW1uJ1xuICAgIGp1c3RpZnlDb250ZW50PSdjZW50ZXInXG4gICAgey4uLnByb3BzfVxuICA+XG4gICAge2NoaWxkcmVufVxuICA8L0JveD5cbilcblxuY29uc3QgV3JhcHBlciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGZsZXhEaXJlY3Rpb249J2NvbHVtbicgaGVpZ2h0PScxMDAlJyBzdHlsZT17eyBtaW5IZWlnaHQ6ICc2NXZ3JyB9fT5cbiAgICB7Y2hpbGRyZW59XG4gIDwvQm94PlxuKTtcblxuY29uc3QgSW5mb0JhciA9ICgpID0+IChcbiAgICA8Qm94IGRpc3BsYXk9J2ZsZXgnIHdpZHRoPVwiMTAwJVwiPlxuICAgICAgPEJveCBkaXNwbGF5PSdmbGV4JyBmbGV4PVwiMCAwIDUwJVwiIGFsaWduSXRlbXM9J2NlbnRlcic+XG4gICAgICAgIDxUaXRsZSAvPlxuICAgICAgPC9Cb3g+XG4gICAgICA8Qm94IGRpc3BsYXk9J2ZsZXgnIGZsZXg9XCIwIDEgNTAlXCI+XG4gICAgICAgIDxUb3RhbHMgLz5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuKTtcblxuY29uc3QgQ29udGVudCA9ICgpID0+IHtcbiAgY29uc3QgeyBkYXRhLCBsb2FkaW5nIH0gPSB1c2VEYXRhKClcblxuICByZXR1cm4gPFdyYXBwZXI+XG4gICAgPFNlY3Rpb24gc3R5bGU9e3sgb3ZlcmZsb3dYOiAnc2Nyb2xsJyB9fT5cbiAgICAgIDxTdGF0ZXNMaXN0IC8+XG4gICAgPC9TZWN0aW9uPlxuXG4gICAgPFNlY3Rpb24+XG4gICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgaGVpZ2h0PVwiMFwiIGFsaWduSXRlbXM9XCJiYXNlbGluZVwiIHdpZHRoPVwiMTAwJVwiPlxuICAgICAgICA8SW5mb0JhciAvPlxuICAgICAgPC9Cb3g+XG4gICAgPC9TZWN0aW9uPlxuXG4gICAgPFNlY3Rpb24gZmxleD0nMScgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICB7IWxvYWRpbmcgJiYgPE1hcCBkYXRhPXtkYXRhfSAvPn1cbiAgICA8L1NlY3Rpb24+XG5cbiAgICA8U2VjdGlvbj5cbiAgICAgIDxCb3g+XG4gICAgICAgIDxDb3B5cmlnaHQgLz5cbiAgICAgIDwvQm94PlxuICAgIDwvU2VjdGlvbj5cbiAgPC9XcmFwcGVyPlxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/Layout.js\n");

/***/ })

})