webpackHotUpdate_N_E("pages/index",{

/***/ "./lib/Layout.js":
/*!***********************!*\
  !*** ./lib/Layout.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Box */ \"./lib/Box.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ \"./lib/constants.js\");\n/* harmony import */ var _States__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./States */ \"./lib/States.js\");\n/* harmony import */ var _DataContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DataContext */ \"./lib/DataContext.js\");\n\n\n\n\nvar _jsxFileName = \"/app/lib/Layout.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Map = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./Map */ \"./lib/Map.js\"));\n}, {\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! ./Map */ \"./lib/Map.js\")];\n    },\n    modules: ['./Map']\n  }\n});\n_c2 = Map;\n\nvar PartyTotal = function PartyTotal(_ref) {\n  var party = _ref.party;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n      id: \"\".concat(party, \"Total\"),\n      style: {\n        color: _constants__WEBPACK_IMPORTED_MODULE_6__[\"partyColors\"][party],\n        padding: '0 2px',\n        textShadow: '0px 1px 1px #444',\n        textAlign: 'center',\n        fontSize: '1.15rem',\n        margin: 0\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 3\n  }, _this);\n};\n\n_c3 = PartyTotal;\n\nvar Totals = function Totals() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    display: \"flex\",\n    width: \"100%\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(PartyTotal, {\n      party: \"dems\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(PartyTotal, {\n      party: \"neutral\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(PartyTotal, {\n      party: \"GOP\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 3\n  }, _this);\n};\n\n_c4 = Totals;\n\nvar Title = function Title() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n    style: {\n      lineHeight: '1.25',\n      padding: '0 10px',\n      fontSize: '1.25rem',\n      margin: '0.75rem'\n    },\n    children: \"2016 U.S Electoral College Map\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 3\n  }, _this);\n};\n\n_c5 = Title;\n\nvar StatesList = function StatesList() {\n  _s();\n\n  var data = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useContext\"])(_DataContext__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    style: {\n      display: 'flex',\n      flexDirection: 'row',\n      height: '30px'\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_States__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      data: data\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 53,\n    columnNumber: 10\n  }, _this);\n};\n\n_s(StatesList, \"QDbvtl2XjZhCafbmMBOV/hNJip4=\");\n\n_c6 = StatesList;\n\nvar FooterItem = function FooterItem(_ref2) {\n  var children = _ref2.children;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    flex: \"0 1 0\",\n    style: {\n      padding: '5px 0',\n      marginLeft: '15px',\n      whiteSpace: 'nowrap'\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 59,\n    columnNumber: 3\n  }, _this);\n};\n\n_c7 = FooterItem;\n\nvar Copyright = function Copyright() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      display: \"flex\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(FooterItem, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n          href: \"https://github.com/benjaminbergstein/us-electoral-map\",\n          target: \"_BLANK\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"img\", {\n            src: \"docs/github.png\",\n            height: \"14px\",\n            width: \"14px\",\n            alt: \"Source on Github\",\n            title: \"Source on Github\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(FooterItem, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n          href: \"https://goo.gl/forms/THky9dqIPI9AezJb2\",\n          target: \"_BLANK\",\n          style: {\n            textDecoration: 'none'\n          },\n          children: \"Feedback\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(FooterItem, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"copyright\", {\n          children: \"\\xA9 2017-2019 Ben Bergstein\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false);\n};\n\n_c8 = Copyright;\n\nvar Section = function Section(_ref3) {\n  var height = _ref3.height,\n      flex = _ref3.flex,\n      children = _ref3.children,\n      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref3, [\"height\", \"flex\", \"children\"]);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 87,\n    columnNumber: 3\n  }, _this);\n};\n\n_c9 = Section;\n\nvar Wrapper = function Wrapper(_ref4) {\n  var children = _ref4.children;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    display: \"flex\",\n    flexDirection: \"column\",\n    height: \"100%\",\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 93,\n    columnNumber: 3\n  }, _this);\n};\n\n_c10 = Wrapper;\n\nvar InfoBar = function InfoBar() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Title, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 99,\n    columnNumber: 5\n  }, _this);\n};\n\n_c11 = InfoBar;\n\nvar Content = function Content() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_DataContext__WEBPACK_IMPORTED_MODULE_8__[\"DataProvider\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Wrapper, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Section, {\n        style: {\n          overflowX: 'scroll',\n          width: '100vw'\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(StatesList, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 7\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Section, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(InfoBar, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 114,\n            columnNumber: 9\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 7\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        flex: \"1\",\n        style: {\n          overflowY: 'hidden'\n        },\n        children:  true && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Map, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 119,\n          columnNumber: 41\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Section, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Copyright, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 124,\n            columnNumber: 9\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 123,\n          columnNumber: 7\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 122,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 3\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 106,\n    columnNumber: 23\n  }, _this);\n};\n\n_c12 = Content;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Content);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;\n\n$RefreshReg$(_c, \"Map$dynamic\");\n$RefreshReg$(_c2, \"Map\");\n$RefreshReg$(_c3, \"PartyTotal\");\n$RefreshReg$(_c4, \"Totals\");\n$RefreshReg$(_c5, \"Title\");\n$RefreshReg$(_c6, \"StatesList\");\n$RefreshReg$(_c7, \"FooterItem\");\n$RefreshReg$(_c8, \"Copyright\");\n$RefreshReg$(_c9, \"Section\");\n$RefreshReg$(_c10, \"Wrapper\");\n$RefreshReg$(_c11, \"InfoBar\");\n$RefreshReg$(_c12, \"Content\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL0xheW91dC5qcz8yOWQzIl0sIm5hbWVzIjpbIk1hcCIsImR5bmFtaWMiLCJzc3IiLCJQYXJ0eVRvdGFsIiwicGFydHkiLCJjb2xvciIsInBhcnR5Q29sb3JzIiwicGFkZGluZyIsInRleHRTaGFkb3ciLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsIm1hcmdpbiIsIlRvdGFscyIsIlRpdGxlIiwibGluZUhlaWdodCIsIlN0YXRlc0xpc3QiLCJkYXRhIiwidXNlQ29udGV4dCIsIkRhdGFDb250ZXh0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJoZWlnaHQiLCJGb290ZXJJdGVtIiwiY2hpbGRyZW4iLCJtYXJnaW5MZWZ0Iiwid2hpdGVTcGFjZSIsIkNvcHlyaWdodCIsInRleHREZWNvcmF0aW9uIiwiU2VjdGlvbiIsImZsZXgiLCJwcm9wcyIsIldyYXBwZXIiLCJJbmZvQmFyIiwiQ29udGVudCIsIm92ZXJmbG93WCIsIndpZHRoIiwib3ZlcmZsb3dZIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxHQUFHLEdBQUdDLG1EQUFPLE1BQ2pCO0FBQUEsU0FBTSwwR0FBTjtBQUFBLENBRGlCLEVBRWpCO0FBQUVDLEtBQUcsRUFBRSxLQUFQO0FBQUE7QUFBQTtBQUFBLGtDQURhLDJCQUNiO0FBQUE7QUFBQSxjQURhLE9BQ2I7QUFBQTtBQUFBLENBRmlCLENBQW5CO01BQU1GLEc7O0FBS04sSUFBTUcsVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxzQkFDakIscUVBQUMsNENBQUQ7QUFBQSwyQkFDRTtBQUNFLFFBQUUsWUFBS0EsS0FBTCxVQURKO0FBRUUsV0FBSyxFQUFFO0FBQ0xDLGFBQUssRUFBRUMsc0RBQVcsQ0FBQ0YsS0FBRCxDQURiO0FBRUxHLGVBQU8sRUFBRSxPQUZKO0FBR0xDLGtCQUFVLEVBQUUsa0JBSFA7QUFJTEMsaUJBQVMsRUFBRSxRQUpOO0FBS0xDLGdCQUFRLEVBQUUsU0FMTDtBQU1MQyxjQUFNLEVBQUU7QUFOSDtBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGlCO0FBQUEsQ0FBbkI7O01BQU1SLFU7O0FBZU4sSUFBTVMsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxzQkFDYixxRUFBQyw0Q0FBRDtBQUFLLFdBQU8sRUFBQyxNQUFiO0FBQW9CLFNBQUssRUFBQyxNQUExQjtBQUFBLDRCQUNFLHFFQUFDLFVBQUQ7QUFBWSxXQUFLLEVBQUM7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUscUVBQUMsVUFBRDtBQUFZLFdBQUssRUFBQztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRSxxRUFBQyxVQUFEO0FBQVksV0FBSyxFQUFDO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEYTtBQUFBLENBQWY7O01BQU1BLE07O0FBU04sSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVE7QUFBQSxzQkFDWjtBQUFJLFNBQUssRUFBRTtBQUNUQyxnQkFBVSxFQUFFLE1BREg7QUFFVFAsYUFBTyxFQUFFLFFBRkE7QUFHVEcsY0FBUSxFQUFFLFNBSEQ7QUFJVEMsWUFBTSxFQUFFO0FBSkMsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURZO0FBQUEsQ0FBZDs7TUFBTUUsSzs7QUFXTixJQUFNRSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQ3ZCLE1BQU1DLElBQUksR0FBR0Msd0RBQVUsQ0FBQ0Msb0RBQUQsQ0FBdkI7QUFFQSxzQkFBTztBQUFLLFNBQUssRUFBRTtBQUFFQyxhQUFPLEVBQUUsTUFBWDtBQUFtQkMsbUJBQWEsRUFBRSxLQUFsQztBQUF5Q0MsWUFBTSxFQUFFO0FBQWpELEtBQVo7QUFBQSwyQkFDTCxxRUFBQywrQ0FBRDtBQUFRLFVBQUksRUFBRUw7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREs7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBR0QsQ0FORDs7R0FBTUQsVTs7TUFBQUEsVTs7QUFRTixJQUFNTyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLE1BQUdDLFFBQUgsU0FBR0EsUUFBSDtBQUFBLHNCQUNqQixxRUFBQyw0Q0FBRDtBQUFLLFFBQUksRUFBQyxPQUFWO0FBQWtCLFNBQUssRUFBRTtBQUFFaEIsYUFBTyxFQUFFLE9BQVg7QUFBb0JpQixnQkFBVSxFQUFFLE1BQWhDO0FBQXdDQyxnQkFBVSxFQUFFO0FBQXBELEtBQXpCO0FBQUEsY0FDR0Y7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGlCO0FBQUEsQ0FBbkI7O01BQU1ELFU7O0FBTU4sSUFBTUksU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxzQkFDaEI7QUFBQSwyQkFDRSxxRUFBQyw0Q0FBRDtBQUFLLGFBQU8sRUFBQyxNQUFiO0FBQUEsOEJBQ0UscUVBQUMsVUFBRDtBQUFBLCtCQUNFO0FBQUcsY0FBSSxFQUFDLHVEQUFSO0FBQWdFLGdCQUFNLEVBQUMsUUFBdkU7QUFBQSxpQ0FDRTtBQUFLLGVBQUcsRUFBQyxpQkFBVDtBQUEyQixrQkFBTSxFQUFDLE1BQWxDO0FBQXlDLGlCQUFLLEVBQUMsTUFBL0M7QUFBc0QsZUFBRyxFQUFDLGtCQUExRDtBQUE2RSxpQkFBSyxFQUFDO0FBQW5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBTUUscUVBQUMsVUFBRDtBQUFBLCtCQUNFO0FBQUcsY0FBSSxFQUFDLHdDQUFSO0FBQWlELGdCQUFNLEVBQUMsUUFBeEQ7QUFBaUUsZUFBSyxFQUFFO0FBQUVDLDBCQUFjLEVBQUU7QUFBbEIsV0FBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkYsZUFXRSxxRUFBQyxVQUFEO0FBQUEsK0JBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBRGdCO0FBQUEsQ0FBbEI7O01BQU1ELFM7O0FBc0JOLElBQU1FLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsTUFBR1AsTUFBSCxTQUFHQSxNQUFIO0FBQUEsTUFBV1EsSUFBWCxTQUFXQSxJQUFYO0FBQUEsTUFBaUJOLFFBQWpCLFNBQWlCQSxRQUFqQjtBQUFBLE1BQThCTyxLQUE5Qjs7QUFBQSxzQkFDZCxxRUFBQyw0Q0FBRDtBQUFBLGNBQ0dQO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURjO0FBQUEsQ0FBaEI7O01BQU1LLE87O0FBTU4sSUFBTUcsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxNQUFHUixRQUFILFNBQUdBLFFBQUg7QUFBQSxzQkFDZCxxRUFBQyw0Q0FBRDtBQUFLLFdBQU8sRUFBQyxNQUFiO0FBQW9CLGlCQUFhLEVBQUMsUUFBbEM7QUFBMkMsVUFBTSxFQUFDLE1BQWxEO0FBQUEsY0FDR0E7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGM7QUFBQSxDQUFoQjs7T0FBTVEsTzs7QUFNTixJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLHNCQUNaLHFFQUFDLDRDQUFEO0FBQUEsMkJBQ0UscUVBQUMsNENBQUQ7QUFBQSw2QkFDRSxxRUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURZO0FBQUEsQ0FBaEI7O09BQU1BLE87O0FBUU4sSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxzQkFBTSxxRUFBQyx5REFBRDtBQUFBLDJCQUNwQixxRUFBQyxPQUFEO0FBQUEsOEJBQ0UscUVBQUMsT0FBRDtBQUFTLGFBQUssRUFBRTtBQUFFQyxtQkFBUyxFQUFFLFFBQWI7QUFBdUJDLGVBQUssRUFBRTtBQUE5QixTQUFoQjtBQUFBLCtCQUNFLHFFQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUtFLHFFQUFDLE9BQUQ7QUFBQSwrQkFDRSxxRUFBQyw0Q0FBRDtBQUFBLGlDQUNFLHFFQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEYsZUFXRSxxRUFBQyw0Q0FBRDtBQUFLLFlBQUksRUFBQyxHQUFWO0FBQWMsYUFBSyxFQUFFO0FBQUVDLG1CQUFTLEVBQUU7QUFBYixTQUFyQjtBQUFBLGtCQUNHLHNCQUFpQyxxRUFBQyxHQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhGLGVBZUUscUVBQUMsT0FBRDtBQUFBLCtCQUNFLHFFQUFDLDRDQUFEO0FBQUEsaUNBQ0UscUVBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEb0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFOO0FBQUEsQ0FBaEI7O09BQU1ILE87QUF3QlNBLHNFQUFmIiwiZmlsZSI6Ii4vbGliL0xheW91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gIGZyb20gJ3JlYWN0JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5pbXBvcnQgQm94IGZyb20gJy4vQm94JztcbmltcG9ydCB7IHBhcnR5Q29sb3JzIH0gZnJvbSAnLi9jb25zdGFudHMnXG5cbmltcG9ydCBTdGF0ZXMgZnJvbSAnLi9TdGF0ZXMnXG5pbXBvcnQgRGF0YUNvbnRleHQsIHsgRGF0YVByb3ZpZGVyIH0gZnJvbSAnLi9EYXRhQ29udGV4dCdcblxuY29uc3QgTWFwID0gZHluYW1pYyhcbiAgKCkgPT4gaW1wb3J0KCcuL01hcCcpLFxuICB7IHNzcjogZmFsc2UgfVxuKVxuXG5jb25zdCBQYXJ0eVRvdGFsID0gKHsgcGFydHkgfSkgPT4gKFxuICA8Qm94PlxuICAgIDxoMVxuICAgICAgaWQ9e2Ake3BhcnR5fVRvdGFsYH1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGNvbG9yOiBwYXJ0eUNvbG9yc1twYXJ0eV0sXG4gICAgICAgIHBhZGRpbmc6ICcwIDJweCcsXG4gICAgICAgIHRleHRTaGFkb3c6ICcwcHggMXB4IDFweCAjNDQ0JyxcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgZm9udFNpemU6ICcxLjE1cmVtJyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgfX0+PC9oMT5cbiAgPC9Cb3g+XG4pO1xuXG5jb25zdCBUb3RhbHMgPSAoKSA9PiAoXG4gIDxCb3ggZGlzcGxheT0nZmxleCcgd2lkdGg9XCIxMDAlXCI+XG4gICAgPFBhcnR5VG90YWwgcGFydHk9J2RlbXMnIC8+XG4gICAgPFBhcnR5VG90YWwgcGFydHk9J25ldXRyYWwnIC8+XG4gICAgPFBhcnR5VG90YWwgcGFydHk9J0dPUCcgLz5cbiAgPC9Cb3g+XG4pO1xuXG5cbmNvbnN0IFRpdGxlID0gKCkgPT4gKFxuICA8aDEgc3R5bGU9e3tcbiAgICBsaW5lSGVpZ2h0OiAnMS4yNScsXG4gICAgcGFkZGluZzogJzAgMTBweCcsXG4gICAgZm9udFNpemU6ICcxLjI1cmVtJyxcbiAgICBtYXJnaW46ICcwLjc1cmVtJyxcbiAgfX0+XG4gICAgMjAxNiBVLlMgRWxlY3RvcmFsIENvbGxlZ2UgTWFwXG4gIDwvaDE+XG4pO1xuXG5jb25zdCBTdGF0ZXNMaXN0ID0gKCkgPT4ge1xuICBjb25zdCBkYXRhID0gdXNlQ29udGV4dChEYXRhQ29udGV4dClcblxuICByZXR1cm4gPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBoZWlnaHQ6ICczMHB4JyB9fT5cbiAgICA8U3RhdGVzIGRhdGE9e2RhdGF9Lz5cbiAgPC9kaXY+XG59O1xuXG5jb25zdCBGb290ZXJJdGVtID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8Qm94IGZsZXg9XCIwIDEgMFwiIHN0eWxlPXt7IHBhZGRpbmc6ICc1cHggMCcsIG1hcmdpbkxlZnQ6ICcxNXB4Jywgd2hpdGVTcGFjZTogJ25vd3JhcCcgfX0+XG4gICAge2NoaWxkcmVufVxuICA8L0JveD5cbik7XG5cbmNvbnN0IENvcHlyaWdodCA9ICgpID0+IChcbiAgPD5cbiAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCI+XG4gICAgICA8Rm9vdGVySXRlbT5cbiAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL2JlbmphbWluYmVyZ3N0ZWluL3VzLWVsZWN0b3JhbC1tYXAnIHRhcmdldD1cIl9CTEFOS1wiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiZG9jcy9naXRodWIucG5nXCIgaGVpZ2h0PVwiMTRweFwiIHdpZHRoPVwiMTRweFwiIGFsdD1cIlNvdXJjZSBvbiBHaXRodWJcIiB0aXRsZT1cIlNvdXJjZSBvbiBHaXRodWJcIiAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L0Zvb3Rlckl0ZW0+XG4gICAgICA8Rm9vdGVySXRlbT5cbiAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly9nb28uZ2wvZm9ybXMvVEhreTlkcUlQSTlBZXpKYjInIHRhcmdldD1cIl9CTEFOS1wiIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiAnbm9uZScgfX0+XG4gICAgICAgICAgRmVlZGJhY2tcbiAgICAgICAgPC9hPlxuICAgICAgPC9Gb290ZXJJdGVtPlxuICAgICAgPEZvb3Rlckl0ZW0+XG4gICAgICAgIDxjb3B5cmlnaHQ+XG4gICAgICAgICAgJmNvcHk7IDIwMTctMjAxOSBCZW4gQmVyZ3N0ZWluXG4gICAgICAgIDwvY29weXJpZ2h0PlxuICAgICAgPC9Gb290ZXJJdGVtPlxuICAgIDwvQm94PlxuICA8Lz5cbik7XG5cbmNvbnN0IFNlY3Rpb24gPSAoeyBoZWlnaHQsIGZsZXgsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxCb3g+XG4gICAge2NoaWxkcmVufVxuICA8L0JveD5cbilcblxuY29uc3QgV3JhcHBlciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBoZWlnaHQ9XCIxMDAlXCI+XG4gICAge2NoaWxkcmVufVxuICA8L0JveD5cbik7XG5cbmNvbnN0IEluZm9CYXIgPSAoKSA9PiAoXG4gICAgPEJveD5cbiAgICAgIDxCb3g+XG4gICAgICAgIDxUaXRsZSAvPlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4pO1xuXG5jb25zdCBDb250ZW50ID0gKCkgPT4gPERhdGFQcm92aWRlcj5cbiAgPFdyYXBwZXI+XG4gICAgPFNlY3Rpb24gc3R5bGU9e3sgb3ZlcmZsb3dYOiAnc2Nyb2xsJywgd2lkdGg6ICcxMDB2dycgfX0+XG4gICAgICA8U3RhdGVzTGlzdCAvPlxuICAgIDwvU2VjdGlvbj5cblxuICAgIDxTZWN0aW9uPlxuICAgICAgPEJveD5cbiAgICAgICAgPEluZm9CYXIgLz5cbiAgICAgIDwvQm94PlxuICAgIDwvU2VjdGlvbj5cblxuICAgIDxCb3ggZmxleD1cIjFcIiBzdHlsZT17eyBvdmVyZmxvd1k6ICdoaWRkZW4nIH19PlxuICAgICAge3R5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIDxNYXAgLz59XG4gICAgPC9Cb3g+XG5cbiAgICA8U2VjdGlvbj5cbiAgICAgIDxCb3g+XG4gICAgICAgIDxDb3B5cmlnaHQgLz5cbiAgICAgIDwvQm94PlxuICAgIDwvU2VjdGlvbj5cbiAgPC9XcmFwcGVyPlxuPC9EYXRhUHJvdmlkZXI+XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/Layout.js\n");

/***/ })

})