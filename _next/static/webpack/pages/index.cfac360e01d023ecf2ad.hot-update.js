webpackHotUpdate_N_E("pages/index",{

/***/ "./lib/Layout.js":
/*!***********************!*\
  !*** ./lib/Layout.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Box */ \"./lib/Box.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ \"./lib/constants.js\");\n/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Map */ \"./lib/Map.js\");\n\n\n\n\n\nvar _jsxFileName = \"/app/lib/Layout.js\",\n    _s = $RefreshSig$(),\n    _this = undefined,\n    _s2 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nvar useData = function useData() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(undefined),\n      data = _useState[0],\n      setData = _useState[1];\n\n  isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('results/president/2017.json').then(function (res) {\n    res.json();\n  }).then(function (res) {\n    setData(res);\n  });\n  return {\n    data: data,\n    loading: data === undefined\n  };\n};\n\n_s(useData, \"a5a5NTOfwgqVemCc+HO+lJNrlY4=\");\n\nvar PartyTotal = function PartyTotal(_ref) {\n  var party = _ref.party;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    display: \"flex\",\n    flex: \"0 0 33%\",\n    justifyContent: \"center\",\n    alignItems: \"center\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n      id: \"\".concat(party, \"Total\"),\n      style: {\n        color: _constants__WEBPACK_IMPORTED_MODULE_6__[\"partyColors\"][party],\n        padding: '0 2px',\n        textShadow: '0px 1px 1px #444',\n        textAlign: 'center',\n        fontSize: '1.15rem',\n        margin: 0\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = PartyTotal;\n\nvar Totals = function Totals() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    display: \"flex\",\n    width: \"100%\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(PartyTotal, {\n      party: \"dems\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(PartyTotal, {\n      party: \"neutral\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(PartyTotal, {\n      party: \"GOP\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 3\n  }, _this);\n};\n\n_c2 = Totals;\n\nvar Title = function Title() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n    style: {\n      lineHeight: '1.25',\n      padding: '0 10px',\n      fontSize: '1.25rem',\n      margin: '0.75rem'\n    },\n    children: \"2016 U.S Electoral College Map\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 3\n  }, _this);\n};\n\n_c3 = Title;\n\nvar StatesList = function StatesList() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      id: \"statesList\",\n      style: {\n        display: \"flex\",\n        flexWrap: \"nowrap\"\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n        children: \"Loading.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 61,\n    columnNumber: 3\n  }, _this);\n};\n\n_c4 = StatesList;\n\nvar FooterItem = function FooterItem(_ref2) {\n  var children = _ref2.children;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    flex: \"0 1 0\",\n    style: {\n      padding: '5px 0',\n      marginLeft: '15px',\n      whiteSpace: 'nowrap'\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 69,\n    columnNumber: 3\n  }, _this);\n};\n\n_c5 = FooterItem;\n\nvar Copyright = function Copyright() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      display: \"flex\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(FooterItem, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"a\", {\n          href: \"https://github.com/benjaminbergstein/us-electoral-map\",\n          target: \"_BLANK\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"img\", {\n            src: \"docs/github.png\",\n            height: \"14px\",\n            width: \"14px\",\n            alt: \"Source on Github\",\n            title: \"Source on Github\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(FooterItem, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"a\", {\n          href: \"https://goo.gl/forms/THky9dqIPI9AezJb2\",\n          target: \"_BLANK\",\n          style: {\n            textDecoration: 'none'\n          },\n          children: \"Feedback\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(FooterItem, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"copyright\", {\n          children: \"\\xA9 2017-2019 Ben Bergstein\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false);\n};\n\n_c6 = Copyright;\n\nvar Section = function Section(_ref3) {\n  var height = _ref3.height,\n      flex = _ref3.flex,\n      children = _ref3.children,\n      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref3, [\"height\", \"flex\", \"children\"]);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _objectSpread(_objectSpread({\n    height: height,\n    flex: flex,\n    display: \"flex\",\n    flexDirection: \"column\",\n    justifyContent: \"center\"\n  }, props), {}, {\n    children: children\n  }), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 97,\n    columnNumber: 3\n  }, _this);\n};\n\n_c7 = Section;\n\nvar Wrapper = function Wrapper(_ref4) {\n  var children = _ref4.children;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    display: \"flex\",\n    flexDirection: \"column\",\n    height: \"100%\",\n    style: {\n      minHeight: '65vw'\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 110,\n    columnNumber: 3\n  }, _this);\n};\n\n_c8 = Wrapper;\n\nvar InfoBar = function InfoBar() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    display: \"flex\",\n    width: \"100%\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      display: \"flex\",\n      flex: \"0 0 50%\",\n      alignItems: \"center\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Title, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      display: \"flex\",\n      flex: \"0 1 50%\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Totals, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 116,\n    columnNumber: 5\n  }, _this);\n};\n\n_c9 = InfoBar;\n\nvar Content = function Content() {\n  _s2();\n\n  var _useData = useData(),\n      data = _useData.data,\n      loading = _useData.loading;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Wrapper, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Section, {\n      style: {\n        overflowX: 'scroll'\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(StatesList, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 131,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Section, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        display: \"flex\",\n        height: \"0\",\n        alignItems: \"baseline\",\n        width: \"100%\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(InfoBar, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 136,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 135,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Section, {\n      flex: \"1\",\n      style: {\n        position: 'relative'\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Map__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        data: data\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 141,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Section, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Copyright, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 146,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 145,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 129,\n    columnNumber: 10\n  }, _this);\n};\n\n_s2(Content, \"V5gz3EZkFMOQuCkxQHdrgYPUNBU=\", false, function () {\n  return [useData];\n});\n\n_c10 = Content;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Content);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;\n\n$RefreshReg$(_c, \"PartyTotal\");\n$RefreshReg$(_c2, \"Totals\");\n$RefreshReg$(_c3, \"Title\");\n$RefreshReg$(_c4, \"StatesList\");\n$RefreshReg$(_c5, \"FooterItem\");\n$RefreshReg$(_c6, \"Copyright\");\n$RefreshReg$(_c7, \"Section\");\n$RefreshReg$(_c8, \"Wrapper\");\n$RefreshReg$(_c9, \"InfoBar\");\n$RefreshReg$(_c10, \"Content\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL0xheW91dC5qcz8yOWQzIl0sIm5hbWVzIjpbInVzZURhdGEiLCJ1c2VTdGF0ZSIsInVuZGVmaW5lZCIsImRhdGEiLCJzZXREYXRhIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImxvYWRpbmciLCJQYXJ0eVRvdGFsIiwicGFydHkiLCJjb2xvciIsInBhcnR5Q29sb3JzIiwicGFkZGluZyIsInRleHRTaGFkb3ciLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsIm1hcmdpbiIsIlRvdGFscyIsIlRpdGxlIiwibGluZUhlaWdodCIsIlN0YXRlc0xpc3QiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJGb290ZXJJdGVtIiwiY2hpbGRyZW4iLCJtYXJnaW5MZWZ0Iiwid2hpdGVTcGFjZSIsIkNvcHlyaWdodCIsInRleHREZWNvcmF0aW9uIiwiU2VjdGlvbiIsImhlaWdodCIsImZsZXgiLCJwcm9wcyIsIldyYXBwZXIiLCJtaW5IZWlnaHQiLCJJbmZvQmFyIiwiQ29udGVudCIsIm92ZXJmbG93WCIsInBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUFBLGtCQUNJQyxzREFBUSxDQUFDQyxTQUFELENBRFo7QUFBQSxNQUNiQyxJQURhO0FBQUEsTUFDUEMsT0FETzs7QUFHcEJDLDJEQUFLLENBQUMsNkJBQUQsQ0FBTCxDQUNHQyxJQURILENBQ1EsVUFBQ0MsR0FBRCxFQUFTO0FBQUVBLE9BQUcsQ0FBQ0MsSUFBSjtBQUFZLEdBRC9CLEVBRUdGLElBRkgsQ0FFUSxVQUFDQyxHQUFELEVBQVM7QUFBRUgsV0FBTyxDQUFDRyxHQUFELENBQVA7QUFBYyxHQUZqQztBQUlBLFNBQU87QUFDTEosUUFBSSxFQUFFQSxJQUREO0FBRUxNLFdBQU8sRUFBRU4sSUFBSSxLQUFLRDtB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QyxHQUEzQjtBQUErQixrQkFBVSxFQUFDLFVBQTFDO0FBQXFELGFBQUssRUFBQyxNQUEzRDtBQUFBLCtCQUNFLHFFQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEssZUFXTCxxRUFBQyxPQUFEO0FBQVMsVUFBSSxFQUFDLEdBQWQ7QUFBa0IsV0FBSyxFQUFFO0FBQUVDLGdCQUFRLEVBQUU7QUFBWixPQUF6QjtBQUFBLDZCQUNFLHFFQUFDLDRDQUFEO0FBQUssWUFBSSxFQUFFckM7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhLLGVBZUwscUVBQUMsT0FBRDtBQUFBLDZCQUNFLHFFQUFDLDRDQUFEO0FBQUEsK0JBQ0UscUVBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFmSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQXFCRCxDQXhCRDs7SUFBTW1DLE87VUFDc0J0QyxPOzs7T0FEdEJzQyxPO0FBMEJTQSxzRUFBZiIsImZpbGUiOiIuL2xpYi9MYXlvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSAgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCBCb3ggZnJvbSAnLi9Cb3gnO1xuaW1wb3J0IHsgcGFydHlDb2xvcnMgfSBmcm9tICcuL2NvbnN0YW50cydcbmltcG9ydCBNYXAgZnJvbSAnLi9NYXAnXG5cbmNvbnN0IHVzZURhdGEgPSAoKSA9PiB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHVuZGVmaW5lZClcblxuICBmZXRjaCgncmVzdWx0cy9wcmVzaWRlbnQvMjAxNy5qc29uJylcbiAgICAudGhlbigocmVzKSA9PiB7IHJlcy5qc29uKCkgfSlcbiAgICAudGhlbigocmVzKSA9PiB7IHNldERhdGEocmVzKSB9KVxuXG4gIHJldHVybiB7XG4gICAgZGF0YTogZGF0YSxcbiAgICBsb2FkaW5nOiBkYXRhID09PSB1bmRlZmluZWQsXG4gIH1cbn1cblxuY29uc3QgUGFydHlUb3RhbCA9ICh7IHBhcnR5IH0pID0+IChcbiAgPEJveFxuICAgIGRpc3BsYXk9J2ZsZXgnXG4gICAgZmxleD1cIjAgMCAzMyVcIlxuICAgIGp1c3RpZnlDb250ZW50PSdjZW50ZXInXG4gICAgYWxpZ25JdGVtcz0nY2VudGVyJ1xuICA+XG4gICAgPGgxXG4gICAgICBpZD17YCR7cGFydHl9VG90YWxgfVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgY29sb3I6IHBhcnR5Q29sb3JzW3BhcnR5XSxcbiAgICAgICAgcGFkZGluZzogJzAgMnB4JyxcbiAgICAgICAgdGV4dFNoYWRvdzogJzBweCAxcHggMXB4ICM0NDQnLFxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICBmb250U2l6ZTogJzEuMTVyZW0nLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICB9fT48L2gxPlxuICA8L0JveD5cbik7XG5cbmNvbnN0IFRvdGFscyA9ICgpID0+IChcbiAgPEJveCBkaXNwbGF5PSdmbGV4JyB3aWR0aD1cIjEwMCVcIj5cbiAgICA8UGFydHlUb3RhbCBwYXJ0eT0nZGVtcycgLz5cbiAgICA8UGFydHlUb3RhbCBwYXJ0eT0nbmV1dHJhbCcgLz5cbiAgICA8UGFydHlUb3RhbCBwYXJ0eT0nR09QJyAvPlxuICA8L0JveD5cbik7XG5cblxuY29uc3QgVGl0bGUgPSAoKSA9PiAoXG4gIDxoMSBzdHlsZT17e1xuICAgIGxpbmVIZWlnaHQ6ICcxLjI1JyxcbiAgICBwYWRkaW5nOiAnMCAxMHB4JyxcbiAgICBmb250U2l6ZTogJzEuMjVyZW0nLFxuICAgIG1hcmdpbjogJzAuNzVyZW0nLFxuICB9fT5cbiAgICAyMDE2IFUuUyBFbGVjdG9yYWwgQ29sbGVnZSBNYXBcbiAgPC9oMT5cbik7XG5cbmNvbnN0IFN0YXRlc0xpc3QgPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPGRpdiBpZD1cInN0YXRlc0xpc3RcIiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleFdyYXA6IFwibm93cmFwXCIgfX0+XG4gICAgICA8c3Bhbj5Mb2FkaW5nLjwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBGb290ZXJJdGVtID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8Qm94IGZsZXg9XCIwIDEgMFwiIHN0eWxlPXt7IHBhZGRpbmc6ICc1cHggMCcsIG1hcmdpbkxlZnQ6ICcxNXB4Jywgd2hpdGVTcGFjZTogJ25vd3JhcCcgfX0+XG4gICAge2NoaWxkcmVufVxuICA8L0JveD5cbik7XG5cbmNvbnN0IENvcHlyaWdodCA9ICgpID0+IChcbiAgPD5cbiAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCI+XG4gICAgICA8Rm9vdGVySXRlbT5cbiAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL2JlbmphbWluYmVyZ3N0ZWluL3VzLWVsZWN0b3JhbC1tYXAnIHRhcmdldD1cIl9CTEFOS1wiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiZG9jcy9naXRodWIucG5nXCIgaGVpZ2h0PVwiMTRweFwiIHdpZHRoPVwiMTRweFwiIGFsdD1cIlNvdXJjZSBvbiBHaXRodWJcIiB0aXRsZT1cIlNvdXJjZSBvbiBHaXRodWJcIiAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L0Zvb3Rlckl0ZW0+XG4gICAgICA8Rm9vdGVySXRlbT5cbiAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly9nb28uZ2wvZm9ybXMvVEhreTlkcUlQSTlBZXpKYjInIHRhcmdldD1cIl9CTEFOS1wiIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiAnbm9uZScgfX0+XG4gICAgICAgICAgRmVlZGJhY2tcbiAgICAgICAgPC9hPlxuICAgICAgPC9Gb290ZXJJdGVtPlxuICAgICAgPEZvb3Rlckl0ZW0+XG4gICAgICAgIDxjb3B5cmlnaHQ+XG4gICAgICAgICAgJmNvcHk7IDIwMTctMjAxOSBCZW4gQmVyZ3N0ZWluXG4gICAgICAgIDwvY29weXJpZ2h0PlxuICAgICAgPC9Gb290ZXJJdGVtPlxuICAgIDwvQm94PlxuICA8Lz5cbik7XG5cbmNvbnN0IFNlY3Rpb24gPSAoeyBoZWlnaHQsIGZsZXgsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxCb3hcbiAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICBmbGV4PXtmbGV4fVxuICAgIGRpc3BsYXk9J2ZsZXgnXG4gICAgZmxleERpcmVjdGlvbj0nY29sdW1uJ1xuICAgIGp1c3RpZnlDb250ZW50PSdjZW50ZXInXG4gICAgey4uLnByb3BzfVxuICA+XG4gICAge2NoaWxkcmVufVxuICA8L0JveD5cbilcblxuY29uc3QgV3JhcHBlciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGZsZXhEaXJlY3Rpb249J2NvbHVtbicgaGVpZ2h0PScxMDAlJyBzdHlsZT17eyBtaW5IZWlnaHQ6ICc2NXZ3JyB9fT5cbiAgICB7Y2hpbGRyZW59XG4gIDwvQm94PlxuKTtcblxuY29uc3QgSW5mb0JhciA9ICgpID0+IChcbiAgICA8Qm94IGRpc3BsYXk9J2ZsZXgnIHdpZHRoPVwiMTAwJVwiPlxuICAgICAgPEJveCBkaXNwbGF5PSdmbGV4JyBmbGV4PVwiMCAwIDUwJVwiIGFsaWduSXRlbXM9J2NlbnRlcic+XG4gICAgICAgIDxUaXRsZSAvPlxuICAgICAgPC9Cb3g+XG4gICAgICA8Qm94IGRpc3BsYXk9J2ZsZXgnIGZsZXg9XCIwIDEgNTAlXCI+XG4gICAgICAgIDxUb3RhbHMgLz5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuKTtcblxuY29uc3QgQ29udGVudCA9ICgpID0+IHtcbiAgY29uc3QgeyBkYXRhLCBsb2FkaW5nIH0gPSB1c2VEYXRhKClcblxuICByZXR1cm4gPFdyYXBwZXI+XG4gICAgPFNlY3Rpb24gc3R5bGU9e3sgb3ZlcmZsb3dYOiAnc2Nyb2xsJyB9fT5cbiAgICAgIDxTdGF0ZXNMaXN0IC8+XG4gICAgPC9TZWN0aW9uPlxuXG4gICAgPFNlY3Rpb24+XG4gICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgaGVpZ2h0PVwiMFwiIGFsaWduSXRlbXM9XCJiYXNlbGluZVwiIHdpZHRoPVwiMTAwJVwiPlxuICAgICAgICA8SW5mb0JhciAvPlxuICAgICAgPC9Cb3g+XG4gICAgPC9TZWN0aW9uPlxuXG4gICAgPFNlY3Rpb24gZmxleD0nMScgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICA8TWFwIGRhdGE9e2RhdGF9IC8+XG4gICAgPC9TZWN0aW9uPlxuXG4gICAgPFNlY3Rpb24+XG4gICAgICA8Qm94PlxuICAgICAgICA8Q29weXJpZ2h0IC8+XG4gICAgICA8L0JveD5cbiAgICA8L1NlY3Rpb24+XG4gIDwvV3JhcHBlcj5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/Layout.js\n");

/***/ })

})