webpackHotUpdate_N_E("pages/index",{

/***/ "./lib/Layout.js":
/*!***********************!*\
  !*** ./lib/Layout.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Box */ \"./lib/Box.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ \"./lib/constants.js\");\n/* harmony import */ var _States__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./States */ \"./lib/States.js\");\n/* harmony import */ var _DataContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DataContext */ \"./lib/DataContext.js\");\n\n\n\n\nvar _jsxFileName = \"/app/lib/Layout.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Map = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./Map */ \"./lib/Map.js\"));\n}, {\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! ./Map */ \"./lib/Map.js\")];\n    },\n    modules: ['./Map']\n  }\n});\n_c2 = Map;\n\nvar PartyTotal = function PartyTotal(_ref) {\n  var party = _ref.party;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n      id: \"\".concat(party, \"Total\"),\n      style: {\n        color: _constants__WEBPACK_IMPORTED_MODULE_6__[\"partyColors\"][party],\n        padding: '0 2px',\n        textShadow: '0px 1px 1px #444',\n        textAlign: 'center',\n        fontSize: '1.15rem',\n        margin: 0\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 3\n  }, _this);\n};\n\n_c3 = PartyTotal;\n\nvar Totals = function Totals() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    display: \"flex\",\n    width: \"100%\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(PartyTotal, {\n      party: \"dems\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(PartyTotal, {\n      party: \"neutral\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(PartyTotal, {\n      party: \"GOP\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 3\n  }, _this);\n};\n\n_c4 = Totals;\n\nvar Title = function Title() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n    style: {\n      lineHeight: '1.25',\n      padding: '0 10px',\n      fontSize: '1.25rem',\n      margin: '0.75rem'\n    },\n    children: \"2016 U.S Electoral College Map\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 3\n  }, _this);\n};\n\n_c5 = Title;\n\nvar StatesList = function StatesList() {\n  _s();\n\n  var data = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useContext\"])(_DataContext__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    style: {\n      display: 'flex',\n      flexDirection: 'row',\n      height: '30px',\n      overflowX: 'scroll',\n      width: '100vw'\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_States__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      data: data\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 53,\n    columnNumber: 10\n  }, _this);\n};\n\n_s(StatesList, \"QDbvtl2XjZhCafbmMBOV/hNJip4=\");\n\n_c6 = StatesList;\n\nvar FooterItem = function FooterItem(_ref2) {\n  var children = _ref2.children;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    flex: \"0 1 0\",\n    style: {\n      padding: '5px 0',\n      marginLeft: '15px',\n      whiteSpace: 'nowrap'\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 59,\n    columnNumber: 3\n  }, _this);\n};\n\n_c7 = FooterItem;\n\nvar Copyright = function Copyright() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      display: \"flex\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(FooterItem, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n          href: \"https://github.com/benjaminbergstein/us-electoral-map\",\n          target: \"_BLANK\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"img\", {\n            src: \"docs/github.png\",\n            height: \"14px\",\n            width: \"14px\",\n            alt: \"Source on Github\",\n            title: \"Source on Github\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(FooterItem, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n          href: \"https://goo.gl/forms/THky9dqIPI9AezJb2\",\n          target: \"_BLANK\",\n          style: {\n            textDecoration: 'none'\n          },\n          children: \"Feedback\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(FooterItem, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"copyright\", {\n          children: \"\\xA9 2017-2019 Ben Bergstein\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false);\n};\n\n_c8 = Copyright;\n\nvar Section = function Section(_ref3) {\n  var height = _ref3.height,\n      flex = _ref3.flex,\n      children = _ref3.children,\n      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref3, [\"height\", \"flex\", \"children\"]);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 87,\n    columnNumber: 3\n  }, _this);\n};\n\n_c9 = Section;\n\nvar Wrapper = function Wrapper(_ref4) {\n  var children = _ref4.children;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    display: \"flex\",\n    flexDirection: \"column\",\n    height: \"100%\",\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 93,\n    columnNumber: 3\n  }, _this);\n};\n\n_c10 = Wrapper;\n\nvar InfoBar = function InfoBar() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Title, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 99,\n    columnNumber: 5\n  }, _this);\n};\n\n_c11 = InfoBar;\n\nvar Content = function Content() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_DataContext__WEBPACK_IMPORTED_MODULE_8__[\"DataProvider\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Wrapper, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(StatesList, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Section, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(InfoBar, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 112,\n            columnNumber: 9\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 7\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        flex: \"1\",\n        style: {\n          overflowY: 'hidden'\n        },\n        children:  true && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Map, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 117,\n          columnNumber: 41\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Section, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          children:  false && /*#__PURE__*/false\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 121,\n          columnNumber: 7\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 3\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 106,\n    columnNumber: 23\n  }, _this);\n};\n\n_c12 = Content;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Content);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;\n\n$RefreshReg$(_c, \"Map$dynamic\");\n$RefreshReg$(_c2, \"Map\");\n$RefreshReg$(_c3, \"PartyTotal\");\n$RefreshReg$(_c4, \"Totals\");\n$RefreshReg$(_c5, \"Title\");\n$RefreshReg$(_c6, \"StatesList\");\n$RefreshReg$(_c7, \"FooterItem\");\n$RefreshReg$(_c8, \"Copyright\");\n$RefreshReg$(_c9, \"Section\");\n$RefreshReg$(_c10, \"Wrapper\");\n$RefreshReg$(_c11, \"InfoBar\");\n$RefreshReg$(_c12, \"Content\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL0xheW91dC5qcz8yOWQzIl0sIm5hbWVzIjpbIk1hcCIsImR5bmFtaWMiLCJzc3IiLCJQYXJ0eVRvdGFsIiwicGFydHkiLCJjb2xvciIsInBhcnR5Q29sb3JzIiwicGFkZGluZyIsInRleHRTaGFkb3ciLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsIm1hcmdpbiIsIlRvdGFscyIsIlRpdGxlIiwibGluZUhlaWdodCIsIlN0YXRlc0xpc3QiLCJkYXRhIiwidXNlQ29udGV4dCIsIkRhdGFDb250ZXh0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJoZWlnaHQiLCJvdmVyZmxvd1giLCJ3aWR0aCIsIkZvb3Rlckl0ZW0iLCJjaGlsZHJlbiIsIm1hcmdpbkxlZnQiLCJ3aGl0ZVNwYWNlIiwiQ29weXJpZ2h0IiwidGV4dERlY29yYXRpb24iLCJTZWN0aW9uIiwiZmxleCIsInByb3BzIiwiV3JhcHBlciIsIkluZm9CYXIiLCJDb250ZW50Iiwib3ZlcmZsb3dZIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxHQUFHLEdBQUdDLG1EQUFPLE1BQ2pCO0FBQUEsU0FBTSwwR0FBTjtBQUFBLENBRGlCLEVBRWpCO0FBQUVDLEtBQUcsRUFBRSxLQUFQO0FBQUE7QUFBQTtBQUFBLGtDQURhLDJCQUNiO0FBQUE7QUFBQSxjQURhLE9BQ2I7QUFBQTtBQUFBLENBRmlCLENBQW5CO01BQU1GLEc7O0FBS04sSUFBTUcsVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxzQkFDakIscUVBQUMsNENBQUQ7QUFBQSwyQkFDRTtBQUNFLFFBQUUsWUFBS0EsS0FBTCxVQURKO0FBRUUsV0FBSyxFQUFFO0FBQ0xDLGFBQUssRUFBRUMsc0RBQVcsQ0FBQ0YsS0FBRCxDQURiO0FBRUxHLGVBQU8sRUFBRSxPQUZK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cEIscUVBQUMsT0FBRDtBQUFBLDhCQUNFLHFFQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBR0UscUVBQUMsT0FBRDtBQUFBLCtCQUNFLHFFQUFDLDRDQUFEO0FBQUEsaUNBQ0UscUVBQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRixlQVNFLHFFQUFDLDRDQUFEO0FBQUssWUFBSSxFQUFDLEdBQVY7QUFBYyxhQUFLLEVBQUU7QUFBRUMsbUJBQVMsRUFBRTtBQUFiLFNBQXJCO0FBQUEsa0JBQ0csc0JBQWlDLHFFQUFDLEdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEYsZUFhRSxxRUFBQyxPQUFEO0FBQUEsK0JBQ0UscUVBQUMsNENBQUQ7QUFBQSxvQkFDSSxNQUFLLGlCQUFJO0FBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEb0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFOO0FBQUEsQ0FBaEI7O09BQU1ELE87QUFzQlNBLHNFQUFmIiwiZmlsZSI6Ii4vbGliL0xheW91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gIGZyb20gJ3JlYWN0JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5pbXBvcnQgQm94IGZyb20gJy4vQm94JztcbmltcG9ydCB7IHBhcnR5Q29sb3JzIH0gZnJvbSAnLi9jb25zdGFudHMnXG5cbmltcG9ydCBTdGF0ZXMgZnJvbSAnLi9TdGF0ZXMnXG5pbXBvcnQgRGF0YUNvbnRleHQsIHsgRGF0YVByb3ZpZGVyIH0gZnJvbSAnLi9EYXRhQ29udGV4dCdcblxuY29uc3QgTWFwID0gZHluYW1pYyhcbiAgKCkgPT4gaW1wb3J0KCcuL01hcCcpLFxuICB7IHNzcjogZmFsc2UgfVxuKVxuXG5jb25zdCBQYXJ0eVRvdGFsID0gKHsgcGFydHkgfSkgPT4gKFxuICA8Qm94PlxuICAgIDxoMVxuICAgICAgaWQ9e2Ake3BhcnR5fVRvdGFsYH1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGNvbG9yOiBwYXJ0eUNvbG9yc1twYXJ0eV0sXG4gICAgICAgIHBhZGRpbmc6ICcwIDJweCcsXG4gICAgICAgIHRleHRTaGFkb3c6ICcwcHggMXB4IDFweCAjNDQ0JyxcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgZm9udFNpemU6ICcxLjE1cmVtJyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgfX0+PC9oMT5cbiAgPC9Cb3g+XG4pO1xuXG5jb25zdCBUb3RhbHMgPSAoKSA9PiAoXG4gIDxCb3ggZGlzcGxheT0nZmxleCcgd2lkdGg9XCIxMDAlXCI+XG4gICAgPFBhcnR5VG90YWwgcGFydHk9J2RlbXMnIC8+XG4gICAgPFBhcnR5VG90YWwgcGFydHk9J25ldXRyYWwnIC8+XG4gICAgPFBhcnR5VG90YWwgcGFydHk9J0dPUCcgLz5cbiAgPC9Cb3g+XG4pO1xuXG5cbmNvbnN0IFRpdGxlID0gKCkgPT4gKFxuICA8aDEgc3R5bGU9e3tcbiAgICBsaW5lSGVpZ2h0OiAnMS4yNScsXG4gICAgcGFkZGluZzogJzAgMTBweCcsXG4gICAgZm9udFNpemU6ICcxLjI1cmVtJyxcbiAgICBtYXJnaW46ICcwLjc1cmVtJyxcbiAgfX0+XG4gICAgMjAxNiBVLlMgRWxlY3RvcmFsIENvbGxlZ2UgTWFwXG4gIDwvaDE+XG4pO1xuXG5jb25zdCBTdGF0ZXNMaXN0ID0gKCkgPT4ge1xuICBjb25zdCBkYXRhID0gdXNlQ29udGV4dChEYXRhQ29udGV4dClcblxuICByZXR1cm4gPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBoZWlnaHQ6ICczMHB4Jywgb3ZlcmZsb3dYOiAnc2Nyb2xsJywgd2lkdGg6ICcxMDB2dycgfX0+XG4gICAgPFN0YXRlcyBkYXRhPXtkYXRhfS8+XG4gIDwvZGl2PlxufTtcblxuY29uc3QgRm9vdGVySXRlbSA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPEJveCBmbGV4PVwiMCAxIDBcIiBzdHlsZT17eyBwYWRkaW5nOiAnNXB4IDAnLCBtYXJnaW5MZWZ0OiAnMTVweCcsIHdoaXRlU3BhY2U6ICdub3dyYXAnIH19PlxuICAgIHtjaGlsZHJlbn1cbiAgPC9Cb3g+XG4pO1xuXG5jb25zdCBDb3B5cmlnaHQgPSAoKSA9PiAoXG4gIDw+XG4gICAgPEJveCBkaXNwbGF5PVwiZmxleFwiPlxuICAgICAgPEZvb3Rlckl0ZW0+XG4gICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9iZW5qYW1pbmJlcmdzdGVpbi91cy1lbGVjdG9yYWwtbWFwJyB0YXJnZXQ9XCJfQkxBTktcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cImRvY3MvZ2l0aHViLnBuZ1wiIGhlaWdodD1cIjE0cHhcIiB3aWR0aD1cIjE0cHhcIiBhbHQ9XCJTb3VyY2Ugb24gR2l0aHViXCIgdGl0bGU9XCJTb3VyY2Ugb24gR2l0aHViXCIgLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9Gb290ZXJJdGVtPlxuICAgICAgPEZvb3Rlckl0ZW0+XG4gICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vZ29vLmdsL2Zvcm1zL1RIa3k5ZHFJUEk5QWV6SmIyJyB0YXJnZXQ9XCJfQkxBTktcIiBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnIH19PlxuICAgICAgICAgIEZlZWRiYWNrXG4gICAgICAgIDwvYT5cbiAgICAgIDwvRm9vdGVySXRlbT5cbiAgICAgIDxGb290ZXJJdGVtPlxuICAgICAgICA8Y29weXJpZ2h0PlxuICAgICAgICAgICZjb3B5OyAyMDE3LTIwMTkgQmVuIEJlcmdzdGVpblxuICAgICAgICA8L2NvcHlyaWdodD5cbiAgICAgIDwvRm9vdGVySXRlbT5cbiAgICA8L0JveD5cbiAgPC8+XG4pO1xuXG5jb25zdCBTZWN0aW9uID0gKHsgaGVpZ2h0LCBmbGV4LCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4gKFxuICA8Qm94PlxuICAgIHtjaGlsZHJlbn1cbiAgPC9Cb3g+XG4pXG5cbmNvbnN0IFdyYXBwZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxCb3ggZGlzcGxheT1cImZsZXhcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgaGVpZ2h0PVwiMTAwJVwiPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9Cb3g+XG4pO1xuXG5jb25zdCBJbmZvQmFyID0gKCkgPT4gKFxuICAgIDxCb3g+XG4gICAgICA8Qm94PlxuICAgICAgICA8VGl0bGUgLz5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuKTtcblxuY29uc3QgQ29udGVudCA9ICgpID0+IDxEYXRhUHJvdmlkZXI+XG4gIDxXcmFwcGVyPlxuICAgIDxTdGF0ZXNMaXN0IC8+XG5cbiAgICA8U2VjdGlvbj5cbiAgICAgIDxCb3g+XG4gICAgICAgIDxJbmZvQmFyIC8+XG4gICAgICA8L0JveD5cbiAgICA8L1NlY3Rpb24+XG5cbiAgICA8Qm94IGZsZXg9XCIxXCIgc3R5bGU9e3sgb3ZlcmZsb3dZOiAnaGlkZGVuJyB9fT5cbiAgICAgIHt0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiA8TWFwIC8+fVxuICAgIDwvQm94PlxuXG4gICAgPFNlY3Rpb24+XG4gICAgICA8Qm94PlxuICAgICAgICB7IGZhbHNlICYmIDxDb3B5cmlnaHQgLz59XG4gICAgICA8L0JveD5cbiAgICA8L1NlY3Rpb24+XG4gIDwvV3JhcHBlcj5cbjwvRGF0YVByb3ZpZGVyPlxuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/Layout.js\n");

/***/ })

})