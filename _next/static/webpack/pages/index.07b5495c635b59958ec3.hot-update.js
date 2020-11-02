webpackHotUpdate_N_E("pages/index",{

/***/ "./lib/Layout.js":
/*!***********************!*\
  !*** ./lib/Layout.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Box */ \"./lib/Box.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ \"./lib/constants.js\");\n/* harmony import */ var _States__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./States */ \"./lib/States.js\");\n/* harmony import */ var _DataContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DataContext */ \"./lib/DataContext.js\");\n\n\n\n\n\nvar _jsxFileName = \"/app/lib/Layout.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nvar Map = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./Map */ \"./lib/Map.js\"));\n}, {\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! ./Map */ \"./lib/Map.js\")];\n    },\n    modules: ['./Map']\n  }\n});\n_c2 = Map;\n\nvar PartyTotal = function PartyTotal(_ref) {\n  var party = _ref.party;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    display: \"flex\",\n    flex: \"0 0 33%\",\n    justifyContent: \"center\",\n    alignItems: \"center\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n      id: \"\".concat(party, \"Total\"),\n      style: {\n        color: _constants__WEBPACK_IMPORTED_MODULE_7__[\"partyColors\"][party],\n        padding: '0 2px',\n        textShadow: '0px 1px 1px #444',\n        textAlign: 'center',\n        fontSize: '1.15rem',\n        margin: 0\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 3\n  }, _this);\n};\n\n_c3 = PartyTotal;\n\nvar Totals = function Totals() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    display: \"flex\",\n    width: \"100%\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(PartyTotal, {\n      party: \"dems\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(PartyTotal, {\n      party: \"neutral\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(PartyTotal, {\n      party: \"GOP\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 3\n  }, _this);\n};\n\n_c4 = Totals;\n\nvar Title = function Title() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n    style: {\n      lineHeight: '1.25',\n      padding: '0 10px',\n      fontSize: '1.25rem',\n      margin: '0.75rem'\n    },\n    children: \"2016 U.S Electoral College Map\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 3\n  }, _this);\n};\n\n_c5 = Title;\n\nvar StatesList = function StatesList() {\n  _s();\n\n  var data = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_DataContext__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_States__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      data: data\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 58,\n    columnNumber: 10\n  }, _this);\n};\n\n_s(StatesList, \"QDbvtl2XjZhCafbmMBOV/hNJip4=\");\n\n_c6 = StatesList;\n\nvar FooterItem = function FooterItem(_ref2) {\n  var children = _ref2.children;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    flex: \"0 1 0\",\n    style: {\n      padding: '5px 0',\n      marginLeft: '15px',\n      whiteSpace: 'nowrap'\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 64,\n    columnNumber: 3\n  }, _this);\n};\n\n_c7 = FooterItem;\n\nvar Copyright = function Copyright() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      display: \"flex\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(FooterItem, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"a\", {\n          href: \"https://github.com/benjaminbergstein/us-electoral-map\",\n          target: \"_BLANK\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"img\", {\n            src: \"docs/github.png\",\n            height: \"14px\",\n            width: \"14px\",\n            alt: \"Source on Github\",\n            title: \"Source on Github\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(FooterItem, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"a\", {\n          href: \"https://goo.gl/forms/THky9dqIPI9AezJb2\",\n          target: \"_BLANK\",\n          style: {\n            textDecoration: 'none'\n          },\n          children: \"Feedback\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(FooterItem, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"copyright\", {\n          children: \"\\xA9 2017-2019 Ben Bergstein\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false);\n};\n\n_c8 = Copyright;\n\nvar Section = function Section(_ref3) {\n  var height = _ref3.height,\n      flex = _ref3.flex,\n      children = _ref3.children,\n      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref3, [\"height\", \"flex\", \"children\"]);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _objectSpread(_objectSpread({\n    height: height,\n    flex: flex,\n    display: \"flex\",\n    flexDirection: \"column\",\n    justifyContent: \"center\"\n  }, props), {}, {\n    children: children\n  }), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 92,\n    columnNumber: 3\n  }, _this);\n};\n\n_c9 = Section;\n\nvar Wrapper = function Wrapper(_ref4) {\n  var children = _ref4.children;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    display: \"flex\",\n    flexDirection: \"column\",\n    height: \"100%\",\n    style: {\n      minHeight: '65vw'\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 105,\n    columnNumber: 3\n  }, _this);\n};\n\n_c10 = Wrapper;\n\nvar InfoBar = function InfoBar() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    display: \"flex\",\n    width: \"100%\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      display: \"flex\",\n      flex: \"0 0 50%\",\n      alignItems: \"center\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Title, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      display: \"flex\",\n      flex: \"0 1 50%\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Totals, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 111,\n    columnNumber: 5\n  }, _this);\n};\n\n_c11 = InfoBar;\n\nvar Content = function Content() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_DataContext__WEBPACK_IMPORTED_MODULE_9__[\"DataProvider\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Wrapper, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Section, {\n        style: {\n          overflowX: 'scroll'\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(StatesList, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 124,\n          columnNumber: 7\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Section, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          display: \"flex\",\n          height: \"0\",\n          alignItems: \"baseline\",\n          width: \"100%\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(InfoBar, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 129,\n            columnNumber: 9\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 128,\n          columnNumber: 7\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 127,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Section, {\n        flex: \"1\",\n        style: {\n          position: 'relative'\n        },\n        children:  true && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Map, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 134,\n          columnNumber: 41\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 133,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Section, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Copyright, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 139,\n            columnNumber: 9\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 138,\n          columnNumber: 7\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 137,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 3\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 121,\n    columnNumber: 23\n  }, _this);\n};\n\n_c12 = Content;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Content);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;\n\n$RefreshReg$(_c, \"Map$dynamic\");\n$RefreshReg$(_c2, \"Map\");\n$RefreshReg$(_c3, \"PartyTotal\");\n$RefreshReg$(_c4, \"Totals\");\n$RefreshReg$(_c5, \"Title\");\n$RefreshReg$(_c6, \"StatesList\");\n$RefreshReg$(_c7, \"FooterItem\");\n$RefreshReg$(_c8, \"Copyright\");\n$RefreshReg$(_c9, \"Section\");\n$RefreshReg$(_c10, \"Wrapper\");\n$RefreshReg$(_c11, \"InfoBar\");\n$RefreshReg$(_c12, \"Content\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL0xheW91dC5qcz8yOWQzIl0sIm5hbWVzIjpbIk1hcCIsImR5bmFtaWMiLCJzc3IiLCJQYXJ0eVRvdGFsIiwicGFydHkiLCJjb2xvciIsInBhcnR5Q29sb3JzIiwicGFkZGluZyIsInRleHRTaGFkb3ciLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsIm1hcmdpbiIsIlRvdGFscyIsIlRpdGxlIiwibGluZUhlaWdodCIsIlN0YXRlc0xpc3QiLCJkYXRhIiwidXNlQ29udGV4dCIsIkRhdGFDb250ZXh0IiwiRm9vdGVySXRlbSIsImNoaWxkcmVuIiwibWFyZ2luTGVmdCIsIndoaXRlU3BhY2UiLCJDb3B5cmlnaHQiLCJ0ZXh0RGVjb3JhdGlvbiIsIlNlY3Rpb24iLCJoZWlnaHQiLCJmbGV4IiwicHJvcHMiLCJXcmFwcGVyIiwibWluSGVpZ2h0IiwiSW5mb0JhciIsIkNvbnRlbnQiLCJvdmVyZmxvd1giLCJwb3NpdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsR0FBRyxHQUFHQyxtREFBTyxNQUNqQjtBQUFBLFNBQU0sMEdBQU47QUFBQSxDQURpQixFQUVqQjtBQUFFQyxLQUFHLEVBQUUsS0FBUDtBQUFBO0FBQUE7QUFBQSxrQ0FEYSwyQkFDYjtBQUFBO0FBQUEsY0FEYSxPQUNiO0FBQUE7QUFBQSxDQUZpQixDQUFuQjtNQUFNRixHOztBQUtOLElBQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsc0JBQ2pCLHFFQUFDLDRDQUFEO0FBQ0UsV0FBTyxFQUFDLE1BRFY7QUFFRSxRQUFJLEVBQUMsU0FGUDtBQUdFLGtCQUFjLEVBQUMsUUFIakI7QUFJRSxjQUFVLEVBQUMsUUFKYjtBQUFBLDJCQU1FO0FBQ0UsUUFBRSxZQUFLQSxLQUFMLFVBREo7QUFFRSxXQUFL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Qyw0Q0FBRDtBQUFBLGlDQUNFLHFFQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRG9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBTjtBQUFBLENBQWhCOztPQUFNRixPO0FBd0JTQSxzRUFBZiIsImZpbGUiOiIuL2xpYi9MYXlvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9ICBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuaW1wb3J0IEJveCBmcm9tICcuL0JveCc7XG5pbXBvcnQgeyBwYXJ0eUNvbG9ycyB9IGZyb20gJy4vY29uc3RhbnRzJ1xuXG5pbXBvcnQgU3RhdGVzIGZyb20gJy4vU3RhdGVzJ1xuaW1wb3J0IERhdGFDb250ZXh0LCB7IERhdGFQcm92aWRlciB9IGZyb20gJy4vRGF0YUNvbnRleHQnXG5cbmNvbnN0IE1hcCA9IGR5bmFtaWMoXG4gICgpID0+IGltcG9ydCgnLi9NYXAnKSxcbiAgeyBzc3I6IGZhbHNlIH1cbilcblxuY29uc3QgUGFydHlUb3RhbCA9ICh7IHBhcnR5IH0pID0+IChcbiAgPEJveFxuICAgIGRpc3BsYXk9J2ZsZXgnXG4gICAgZmxleD1cIjAgMCAzMyVcIlxuICAgIGp1c3RpZnlDb250ZW50PSdjZW50ZXInXG4gICAgYWxpZ25JdGVtcz0nY2VudGVyJ1xuICA+XG4gICAgPGgxXG4gICAgICBpZD17YCR7cGFydHl9VG90YWxgfVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgY29sb3I6IHBhcnR5Q29sb3JzW3BhcnR5XSxcbiAgICAgICAgcGFkZGluZzogJzAgMnB4JyxcbiAgICAgICAgdGV4dFNoYWRvdzogJzBweCAxcHggMXB4ICM0NDQnLFxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICBmb250U2l6ZTogJzEuMTVyZW0nLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICB9fT48L2gxPlxuICA8L0JveD5cbik7XG5cbmNvbnN0IFRvdGFscyA9ICgpID0+IChcbiAgPEJveCBkaXNwbGF5PSdmbGV4JyB3aWR0aD1cIjEwMCVcIj5cbiAgICA8UGFydHlUb3RhbCBwYXJ0eT0nZGVtcycgLz5cbiAgICA8UGFydHlUb3RhbCBwYXJ0eT0nbmV1dHJhbCcgLz5cbiAgICA8UGFydHlUb3RhbCBwYXJ0eT0nR09QJyAvPlxuICA8L0JveD5cbik7XG5cblxuY29uc3QgVGl0bGUgPSAoKSA9PiAoXG4gIDxoMSBzdHlsZT17e1xuICAgIGxpbmVIZWlnaHQ6ICcxLjI1JyxcbiAgICBwYWRkaW5nOiAnMCAxMHB4JyxcbiAgICBmb250U2l6ZTogJzEuMjVyZW0nLFxuICAgIG1hcmdpbjogJzAuNzVyZW0nLFxuICB9fT5cbiAgMjAxNiBVLlMgRWxlY3RvcmFsIENvbGxlZ2UgTWFwXG48L2gxPlxuKTtcblxuY29uc3QgU3RhdGVzTGlzdCA9ICgpID0+IHtcbiAgY29uc3QgZGF0YSA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpXG5cbiAgcmV0dXJuIDxkaXY+XG4gICAgPFN0YXRlcyBkYXRhPXtkYXRhfSAvPlxuICA8L2Rpdj5cbn07XG5cbmNvbnN0IEZvb3Rlckl0ZW0gPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxCb3ggZmxleD1cIjAgMSAwXCIgc3R5bGU9e3sgcGFkZGluZzogJzVweCAwJywgbWFyZ2luTGVmdDogJzE1cHgnLCB3aGl0ZVNwYWNlOiAnbm93cmFwJyB9fT5cbiAgICB7Y2hpbGRyZW59XG4gIDwvQm94PlxuKTtcblxuY29uc3QgQ29weXJpZ2h0ID0gKCkgPT4gKFxuICA8PlxuICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIj5cbiAgICAgIDxGb290ZXJJdGVtPlxuICAgICAgICA8YSBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vYmVuamFtaW5iZXJnc3RlaW4vdXMtZWxlY3RvcmFsLW1hcCcgdGFyZ2V0PVwiX0JMQU5LXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJkb2NzL2dpdGh1Yi5wbmdcIiBoZWlnaHQ9XCIxNHB4XCIgd2lkdGg9XCIxNHB4XCIgYWx0PVwiU291cmNlIG9uIEdpdGh1YlwiIHRpdGxlPVwiU291cmNlIG9uIEdpdGh1YlwiIC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvRm9vdGVySXRlbT5cbiAgICAgIDxGb290ZXJJdGVtPlxuICAgICAgICA8YSBocmVmPSdodHRwczovL2dvby5nbC9mb3Jtcy9USGt5OWRxSVBJOUFlekpiMicgdGFyZ2V0PVwiX0JMQU5LXCIgc3R5bGU9e3sgdGV4dERlY29yYXRpb246ICdub25lJyB9fT5cbiAgICAgICAgICBGZWVkYmFja1xuICAgICAgICA8L2E+XG4gICAgICA8L0Zvb3Rlckl0ZW0+XG4gICAgICA8Rm9vdGVySXRlbT5cbiAgICAgICAgPGNvcHlyaWdodD5cbiAgICAgICAgICAmY29weTsgMjAxNy0yMDE5IEJlbiBCZXJnc3RlaW5cbiAgICAgICAgPC9jb3B5cmlnaHQ+XG4gICAgICA8L0Zvb3Rlckl0ZW0+XG4gICAgPC9Cb3g+XG4gIDwvPlxuKTtcblxuY29uc3QgU2VjdGlvbiA9ICh7IGhlaWdodCwgZmxleCwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IChcbiAgPEJveFxuICAgIGhlaWdodD17aGVpZ2h0fVxuICAgIGZsZXg9e2ZsZXh9XG4gICAgZGlzcGxheT0nZmxleCdcbiAgICBmbGV4RGlyZWN0aW9uPSdjb2x1bW4nXG4gICAganVzdGlmeUNvbnRlbnQ9J2NlbnRlcidcbiAgICB7Li4ucHJvcHN9XG4gID5cbiAgICB7Y2hpbGRyZW59XG4gIDwvQm94PlxuKVxuXG5jb25zdCBXcmFwcGVyID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgZmxleERpcmVjdGlvbj0nY29sdW1uJyBoZWlnaHQ9JzEwMCUnIHN0eWxlPXt7IG1pbkhlaWdodDogJzY1dncnIH19PlxuICAgIHtjaGlsZHJlbn1cbiAgPC9Cb3g+XG4pO1xuXG5jb25zdCBJbmZvQmFyID0gKCkgPT4gKFxuICAgIDxCb3ggZGlzcGxheT0nZmxleCcgd2lkdGg9XCIxMDAlXCI+XG4gICAgICA8Qm94IGRpc3BsYXk9J2ZsZXgnIGZsZXg9XCIwIDAgNTAlXCIgYWxpZ25JdGVtcz0nY2VudGVyJz5cbiAgICAgICAgPFRpdGxlIC8+XG4gICAgICA8L0JveD5cbiAgICAgIDxCb3ggZGlzcGxheT0nZmxleCcgZmxleD1cIjAgMSA1MCVcIj5cbiAgICAgICAgPFRvdGFscyAvPlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4pO1xuXG5jb25zdCBDb250ZW50ID0gKCkgPT4gPERhdGFQcm92aWRlcj5cbiAgPFdyYXBwZXI+XG4gICAgPFNlY3Rpb24gc3R5bGU9e3sgb3ZlcmZsb3dYOiAnc2Nyb2xsJyB9fT5cbiAgICAgIDxTdGF0ZXNMaXN0IC8+XG4gICAgPC9TZWN0aW9uPlxuXG4gICAgPFNlY3Rpb24+XG4gICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgaGVpZ2h0PVwiMFwiIGFsaWduSXRlbXM9XCJiYXNlbGluZVwiIHdpZHRoPVwiMTAwJVwiPlxuICAgICAgICA8SW5mb0JhciAvPlxuICAgICAgPC9Cb3g+XG4gICAgPC9TZWN0aW9uPlxuXG4gICAgPFNlY3Rpb24gZmxleD0nMScgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICB7dHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgPE1hcCAvPn1cbiAgICA8L1NlY3Rpb24+XG5cbiAgICA8U2VjdGlvbj5cbiAgICAgIDxCb3g+XG4gICAgICAgIDxDb3B5cmlnaHQgLz5cbiAgICAgIDwvQm94PlxuICAgIDwvU2VjdGlvbj5cbiAgPC9XcmFwcGVyPlxuPC9EYXRhUHJvdmlkZXI+XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/Layout.js\n");

/***/ })

})