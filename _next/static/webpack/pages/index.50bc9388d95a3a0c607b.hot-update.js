webpackHotUpdate_N_E("pages/index",{

/***/ "./lib/Layout.js":
/*!***********************!*\
  !*** ./lib/Layout.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Box */ \"./lib/Box.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _States__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./States */ \"./lib/States.js\");\n/* harmony import */ var _Totals__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Totals */ \"./lib/Totals.js\");\n/* harmony import */ var _DataContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DataContext */ \"./lib/DataContext.js\");\n\n\n\n\n\nvar _jsxFileName = \"/app/lib/Layout.js\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\nvar Map = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./Map */ \"./lib/Map.js\"));\n}, {\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! ./Map */ \"./lib/Map.js\")];\n    },\n    modules: ['./Map']\n  }\n});\n_c2 = Map;\nvar Options = [\"2008 Presidential Election\", \"2016 Presidential Election\", \"2020 Presidential Election\"];\n\nvar Button = function Button(_ref) {\n  var _onClick = _ref.onClick,\n      _ref$style = _ref.style,\n      style = _ref$style === void 0 ? {} : _ref$style,\n      children = _ref.children;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n    onClick: function onClick() {\n      return _onClick();\n    },\n    style: _objectSpread({\n      marginLeft: '10px',\n      border: '0px solid transparent',\n      background: 'transparent',\n      cursor: 'pointer'\n    }, style),\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 55\n  }, _this);\n};\n\n_c3 = Button;\n\nvar Title = function Title() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_DataContext__WEBPACK_IMPORTED_MODULE_10__[\"default\"]),\n      title = _useContext.title,\n      resetUserSelections = _useContext.resetUserSelections;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    style: {\n      textAlign: 'center'\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n      style: {\n        lineHeight: '1.25',\n        padding: '0 10px',\n        fontSize: '1rem',\n        margin: '0.75rem',\n        color: 'lightslategray'\n      },\n      children: \"U.S Electoral College Map\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h2\", {\n      style: {\n        fontSize: '0.75rem',\n        color: 'darkslategray'\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        style: {\n          display: 'flex',\n          justifyContent: 'center'\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          style: {\n            position: 'relative',\n            border: '1px solid lightgray',\n            padding: '10px',\n            borderRadius: '5px',\n            display: 'flex',\n            alignItems: 'center'\n          },\n          children: [title, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__[\"FaChevronDown\"], {\n            style: {\n              marginLeft: '10px'\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 11\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"select\", {\n            style: {\n              opacity: 0,\n              position: 'absolute',\n              top: 0,\n              left: '10px',\n              width: '100%',\n              height: '100%'\n            },\n            children: Options.map(function (option) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"option\", {\n                selected: title === option,\n                children: option\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 48,\n                columnNumber: 15\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 11\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Button, {\n          onClick: function onClick() {\n            return resetUserSelections();\n          },\n          style: {\n            marginLeft: '10px'\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__[\"FaUndoAlt\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 9\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 10\n  }, _this);\n};\n\n_s(Title, \"G/CPIg3WQIar05X/zpfrrfif/Uk=\");\n\n_c4 = Title;\n\nvar StatesList = function StatesList() {\n  _s2();\n\n  var data = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_DataContext__WEBPACK_IMPORTED_MODULE_10__[\"default\"]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    style: {\n      display: 'flex',\n      flexDirection: 'row',\n      overflowX: 'scroll',\n      width: '100vw'\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_States__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      data: data\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 66,\n    columnNumber: 10\n  }, _this);\n};\n\n_s2(StatesList, \"QDbvtl2XjZhCafbmMBOV/hNJip4=\");\n\n_c5 = StatesList;\n\nvar FooterItem = function FooterItem(_ref2) {\n  var children = _ref2.children;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    flex: \"0 1 0\",\n    style: {\n      padding: '5px 0',\n      marginLeft: '15px',\n      whiteSpace: 'nowrap'\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 72,\n    columnNumber: 3\n  }, _this);\n};\n\n_c6 = FooterItem;\n\nvar Copyright = function Copyright() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      display: \"flex\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(FooterItem, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"a\", {\n          href: \"https://github.com/benjaminbergstein/us-electoral-map\",\n          target: \"_BLANK\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"img\", {\n            src: \"docs/github.png\",\n            height: \"14px\",\n            width: \"14px\",\n            alt: \"Source on Github\",\n            title: \"Source on Github\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 82,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(FooterItem, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"a\", {\n          href: \"https://goo.gl/forms/THky9dqIPI9AezJb2\",\n          target: \"_BLANK\",\n          style: {\n            textDecoration: 'none'\n          },\n          children: \"Feedback\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(FooterItem, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"copyright\", {\n          children: \"\\xA9 2017-2019 Ben Bergstein\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false);\n};\n\n_c7 = Copyright;\n\nvar Section = function Section(_ref3) {\n  var height = _ref3.height,\n      flex = _ref3.flex,\n      children = _ref3.children,\n      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref3, [\"height\", \"flex\", \"children\"]);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 100,\n    columnNumber: 3\n  }, _this);\n};\n\n_c8 = Section;\n\nvar Wrapper = function Wrapper(_ref4) {\n  var children = _ref4.children;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    display: \"flex\",\n    flexDirection: \"column\",\n    height: \"100%\",\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 106,\n    columnNumber: 3\n  }, _this);\n};\n\n_c9 = Wrapper;\n\nvar InfoBar = function InfoBar() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Title, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Totals__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 112,\n    columnNumber: 3\n  }, _this);\n};\n\n_c10 = InfoBar;\n\nvar Content = function Content() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_DataContext__WEBPACK_IMPORTED_MODULE_10__[\"DataProvider\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Wrapper, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(StatesList, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 122,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Section, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(InfoBar, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 126,\n            columnNumber: 9\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 125,\n          columnNumber: 7\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        flex: \"1\",\n        style: {\n          overflowY: 'hidden'\n        },\n        children:  true && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Map, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 131,\n          columnNumber: 41\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 130,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Section, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          children:  false && /*#__PURE__*/false\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 135,\n          columnNumber: 7\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 134,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 3\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 120,\n    columnNumber: 23\n  }, _this);\n};\n\n_c11 = Content;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Content);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;\n\n$RefreshReg$(_c, \"Map$dynamic\");\n$RefreshReg$(_c2, \"Map\");\n$RefreshReg$(_c3, \"Button\");\n$RefreshReg$(_c4, \"Title\");\n$RefreshReg$(_c5, \"StatesList\");\n$RefreshReg$(_c6, \"FooterItem\");\n$RefreshReg$(_c7, \"Copyright\");\n$RefreshReg$(_c8, \"Section\");\n$RefreshReg$(_c9, \"Wrapper\");\n$RefreshReg$(_c10, \"InfoBar\");\n$RefreshReg$(_c11, \"Content\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL0xheW91dC5qcz8yOWQzIl0sIm5hbWVzIjpbIk1hcCIsImR5bmFtaWMiLCJzc3IiLCJPcHRpb25zIiwiQnV0dG9uIiwib25DbGljayIsInN0eWxlIiwiY2hpbGRyZW4iLCJtYXJnaW5MZWZ0IiwiYm9yZGVyIiwiYmFja2dyb3VuZCIsImN1cnNvciIsIlRpdGxlIiwidXNlQ29udGV4dCIsIkRhdGFDb250ZXh0IiwidGl0bGUiLCJyZXNldFVzZXJTZWxlY3Rpb25zIiwidGV4dEFsaWduIiwibGluZUhlaWdodCIsInBhZGRpbmciLCJmb250U2l6ZSIsIm1hcmdpbiIsImNvbG9yIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwicG9zaXRpb24iLCJib3JkZXJSYWRpdXMiLCJhbGlnbkl0ZW1zIiwib3BhY2l0eSIsInRvcCIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsIm1hcCIsIm9wdGlvbiIsIlN0YXRlc0xpc3QiLCJkYXRhIiwiZmxleERpcmVjdGlvbiIsIm92ZXJmbG93WCIsIkZvb3Rlckl0ZW0iLCJ3aGl0ZVNwYWNlIiwiQ29weXJpZ2h0IiwidGV4dERlY29yYXRpb24iLCJTZWN0aW9uIiwiZmxleCIsInByb3BzIiwiV3JhcHBlciIsIkluZm9CYXIiLCJDb250ZW50Iiwib3ZlcmZsb3dZIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsR0FBRyxHQUFHQyxtREFBTyxNQUNqQjtBQUFBLFNBQU0sMEdBQU47QUFBQSxDQURpQixFQUVqQjtBQUFFQyxLQUFHLEVBQUUsS0FBUDtBQUFBO0FBQUE7QUFBQSxrQ0FEYSwyQkFDYjtBQUFBO0FBQUEsY0FEYSxPQUNiO0FBQUE7QUFBQSxDQUZpQixDQUFuQjtNQUFNRixHO0FBS04sSUFBTUcsT0FBTyxHQUFHLENBQ2QsNEJBRGMsRUFFZCw0QkFGYyxFQUdkLDRCQUhjLENBQWhCOztBQU1BLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxPQUFIO0FBQUEsd0JBQVlDLEtBQVo7QUFBQSxNQUFZQSxLQUFaLDJCQUFvQixFQUFwQjtBQUFBLE1BQXdCQyxRQUF4QixRQUF3QkEsUUFBeEI7QUFBQSxzQkFBdUM7QUFDcEQsV0FBTyxFQUFFO0FBQUEsYUFBTUYsUUFBTyxFQUFiO0FBQUEsS0FEMkM7QUFFcEQsU0FBSztBQUFJRyxnQkFBVSxFQUFFLE1BQWhCO0FBQXdCQyxZQUFNLEVBQUUsdUJBQWhDO0FBQXlEQyxnQkFBVSxFQUFFLGFBQXJFO0FBQW9GQyxZQUFNLEVBQUU7QUFBNUYsT0FBMEdMLEtBQTFHLENBRitDO0FBQUEsY0FHbkRDO0FBSG1EO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBdkM7QUFBQSxDQUFmOztNQUFNSCxNOztBQU1OLElBQU1RLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxvQkFDcUJDLHdEQUFVLENBQUNDLHFEQUFELENBRC9CO0FBQUEsTUFDVkMsS0FEVSxlQUNWQSxLQURVO0FBQUEsTUFDSEMsbUJBREcsZUFDSEEsbUJBREc7O0FBR2xCLHNCQUFPO0FBQUssU0FBSyxFQUFFO0FBQUVDLGVBQVMsRUFBRTtBQUFiLEtBQVo7QUFBQSw0QkFDTDtBQUFJLFdBQUssRUFBRTtBQUNUQyxrQkFBVSxFQUFFLE1BREg7QUFFVEMsZUFBTyxFQUFFLFFBRkE7QUFHVEMsZ0JBQVEsRUFBRSxNQUhEO0FBSVRDLGNBQU0sRUFBRSxTQUpDO0FBS1RDLGFBQUssRUFBRTtBQUxFLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESyxlQVVMO0FBQUksV0FBSyxFQUFFO0FBQUVGLGdCQUFRLEVBQUUsU0FBWjtBQUF1QkUsYUFBSyxFQUFFO0FBQTlCLE9BQVg7QUFBQSw2QkFDRTtBQUFLLGFBQUssRUFBRTtBQUFFQyxpQkFBTyxFQUFFLE1BQVg7QUFBbUJDLHdCQUFjLEVBQUU7QUFBbkMsU0FBWjtBQUFBLGdDQUNFO0FBQUssZUFBSyxFQUFFO0FBQUVDLG9CQUFRLEVBQUUsVUFBWjtBQUF3QmhCLGtCQUFNLEVBQUUscUJBQWhDO0FBQXVEVSxtQkFBTyxFQUFFLE1BQWhFO0FBQXdFTyx3QkFBWSxFQUFFLEtBQXRGO0FBQTZGSCxtQkFBTyxFQUFFLE1BQXRHO0FBQThHSSxzQkFBVSxFQUFFO0FBQTFILFdBQVo7QUFBQSxxQkFDR1osS0FESCxlQUVFLHFFQUFDLDREQUFEO0FBQWUsaUJBQUssRUFBRTtBQUFFUCx3QkFBVSxFQUFFO0FBQWQ7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFO0FBQVEsaUJBQUssRUFBRTtBQUFFb0IscUJBQU8sRUFBRSxDQUFYO0FBQWNILHNCQUFRLEVBQUUsVUFBeEI7QUFBb0NJLGlCQUFHLEVBQUUsQ0FBekM7QUFBNENDLGtCQUFJLEVBQUUsTUFBbEQ7QUFBMERDLG1CQUFLLEVBQUUsTUFBakU7QUFBeUVDLG9CQUFNLEVBQUU7QUFBakYsYUFBZjtBQUFBLHNCQUNHN0IsT0FBTyxDQUFDOEIsR0FBUixDQUFZLFVBQUNDLE1BQUQ7QUFBQSxrQ0FDWDtBQUFRLHdCQUFRLEVBQUVuQixLQUFLLEtBQUttQixNQUE1QjtBQUFBLDBCQUFxQ0E7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEVztBQUFBLGFBQVo7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVVFLHFFQUFDLE1BQUQ7QUFDRSxpQkFBTyxFQUFFO0FBQUEsbUJBQU1sQixtQkFBbUIsRUFBekI7QUFBQSxXQURYO0FBRUUsZUFBSyxFQUFFO0FBQUVSLHNCQUFVLEVBQUU7QUFBZCxXQUZUO0FBQUEsaUNBSUUscUVBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBOEJELENBakNEOztHQUFNSSxLOztNQUFBQSxLOztBQW1DTixJQUFNdUIsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUN2QixNQUFNQyxJQUFJLEdBQUd2Qix3REFBVSxDQUFDQyxxREFBRCxDQUF2QjtBQUVBLHNCQUFPO0FBQUssU0FBSyxFQUFFO0FBQUVTLGFBQU8sRUFBRSxNQUFYO0FBQW1CYyxtQkFBYSxFQUFFLEtBQWxDO0FBQXlDQyxlQUFTLEVBQUUsUUFBcEQ7QUFBOERQLFdBQUssRUFBRTtBQUFyRSxLQUFaO0FBQUEsMkJBQ0wscUVBQUMsK0NBQUQ7QUFBUSxVQUFJLEVBQUVLO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURLO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUdELENBTkQ7O0lBQU1ELFU7O01BQUFBLFU7O0FBUU4sSUFBTUksVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxNQUFHaEMsUUFBSCxTQUFHQSxRQUFIO0FBQUEsc0JBQ2pCLHFFQUFDLDRDQUFEO0FBQUssUUFBSSxFQUFDLE9BQVY7QUFBa0IsU0FBSyxFQUFFO0FBQUVZLGFBQU8sRUFBRSxPQUFYO0FBQW9CWCxnQkFBVSxFQUFFLE1BQWhDO0FBQXdDZ0MsZ0JBQVUsRUFBRTtBQUFwRCxLQUF6QjtBQUFBLGNBQ0dqQztBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEaUI7QUFBQSxDQUFuQjs7TUFBTWdDLFU7O0FBTU4sSUFBTUUsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxzQkFDaEI7QUFBQSwyQkFDRSxxRUFBQyw0Q0FBRDtBQUFLLGFBQU8sRUFBQyxNQUFiO0FBQUEsOEJBQ0UscUVBQUMsVUFBRDtBQUFBLCtCQUNFO0FBQUcsY0FBSSxFQUFDLHVEQUFSO0FBQWdFLGdCQUFNLEVBQUMsUUFBdkU7QUFBQSxpQ0FDRTtBQUFLLGVBQUcsRUFBQyxpQkFBVDtBQUEyQixrQkFBTSxFQUFDLE1BQWxDO0FBQXlDLGlCQUFLLEVBQUMsTUFBL0M7QUFBc0QsZUFBRyxFQUFDLGtCQUExRDtBQUE2RSxpQkFBSyxFQUFDO0FBQW5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBTUUscUVBQUMsVUFBRDtBQUFBLCtCQUNFO0FBQUcsY0FBSSxFQUFDLHdDQUFSO0FBQWlELGdCQUFNLEVBQUMsUUFBeEQ7QUFBaUUsZUFBSyxFQUFFO0FBQUVDLDBCQUFjLEVBQUU7QUFBbEIsV0FBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkYsZUFXRSxxRUFBQyxVQUFEO0FBQUEsK0JBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBRGdCO0FBQUEsQ0FBbEI7O01BQU1ELFM7O0FBc0JOLElBQU1FLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsTUFBR1gsTUFBSCxTQUFHQSxNQUFIO0FBQUEsTUFBV1ksSUFBWCxTQUFXQSxJQUFYO0FBQUEsTUFBaUJyQyxRQUFqQixTQUFpQkEsUUFBakI7QUFBQSxNQUE4QnNDLEtBQTlCOztBQUFBLHNCQUNkLHFFQUFDLDRDQUFEO0FBQUEsY0FDR3RDO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURjO0FBQUEsQ0FBaEI7O01BQU1vQyxPOztBQU1OLElBQU1HLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsTUFBR3ZDLFFBQUgsU0FBR0EsUUFBSDtBQUFBLHNCQUNkLHFFQUFDLDRDQUFEO0FBQUssV0FBTyxFQUFDLE1BQWI7QUFBb0IsaUJBQWEsRUFBQyxRQUFsQztBQUEyQyxVQUFNLEVBQUMsTUFBbEQ7QUFBQSxjQUNHQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEYztBQUFBLENBQWhCOztNQUFNdUMsTzs7QUFNTixJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLHNCQUNkLHFFQUFDLDRDQUFEO0FBQUEsNEJBQ0UscUVBQUMsNENBQUQ7QUFBQSw2QkFDRSxxRUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFJRSxxRUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGM7QUFBQSxDQUFoQjs7T0FBTUEsTzs7QUFTTixJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLHNCQUFNLHFFQUFDLDBEQUFEO0FBQUEsMkJBQ3BCLHFFQUFDLE9BQUQ7QUFBQSw4QkFDRSxxRUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUdFLHFFQUFDLE9BQUQ7QUFBQSwrQkFDRSxxRUFBQyw0Q0FBRDtBQUFBLGlDQUNFLHFFQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsZUFTRSxxRUFBQyw0Q0FBRDtBQUFLLFlBQUksRUFBQyxHQUFWO0FBQWMsYUFBSyxFQUFFO0FBQUVDLG1CQUFTLEVBQUU7QUFBYixTQUFyQjtBQUFBLGtCQUNHLHNCQUFpQyxxRUFBQyxHQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRGLGVBYUUscUVBQUMsT0FBRDtBQUFBLCtCQUNFLHFFQUFDLDRDQUFEO0FBQUEsb0JBQ0ksTUFBSyxpQkFBSTtBQURiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRG9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBTjtBQUFBLENBQWhCOztPQUFNRCxPO0FBc0JTQSxzRUFBZiIsImZpbGUiOiIuL2xpYi9MYXlvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9ICBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuaW1wb3J0IEJveCBmcm9tICcuL0JveCc7XG5pbXBvcnQgeyBGYVVuZG9BbHQsIEZhQ2hldnJvbkRvd24gfSBmcm9tICdyZWFjdC1pY29ucy9mYSdcblxuaW1wb3J0IFN0YXRlcyBmcm9tICcuL1N0YXRlcydcbmltcG9ydCBUb3RhbHMgZnJvbSAnLi9Ub3RhbHMnXG5pbXBvcnQgRGF0YUNvbnRleHQsIHsgRGF0YVByb3ZpZGVyIH0gZnJvbSAnLi9EYXRhQ29udGV4dCdcblxuY29uc3QgTWFwID0gZHluYW1pYyhcbiAgKCkgPT4gaW1wb3J0KCcuL01hcCcpLFxuICB7IHNzcjogZmFsc2UgfVxuKVxuXG5jb25zdCBPcHRpb25zID0gW1xuICBcIjIwMDggUHJlc2lkZW50aWFsIEVsZWN0aW9uXCIsXG4gIFwiMjAxNiBQcmVzaWRlbnRpYWwgRWxlY3Rpb25cIixcbiAgXCIyMDIwIFByZXNpZGVudGlhbCBFbGVjdGlvblwiLFxuXVxuXG5jb25zdCBCdXR0b24gPSAoeyBvbkNsaWNrLCBzdHlsZSA9IHt9LCBjaGlsZHJlbiB9KSA9PiA8YnV0dG9uXG4gIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soKX1cbiAgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzEwcHgnLCBib3JkZXI6ICcwcHggc29saWQgdHJhbnNwYXJlbnQnLCBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLCBjdXJzb3I6ICdwb2ludGVyJywgLi4uc3R5bGUgfX0+XG4gIHtjaGlsZHJlbn1cbjwvYnV0dG9uPlxuXG5jb25zdCBUaXRsZSA9ICgpID0+IHtcbiAgY29uc3QgeyB0aXRsZSwgcmVzZXRVc2VyU2VsZWN0aW9ucyB9ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dClcblxuICByZXR1cm4gPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgIDxoMSBzdHlsZT17e1xuICAgICAgbGluZUhlaWdodDogJzEuMjUnLFxuICAgICAgcGFkZGluZzogJzAgMTBweCcsXG4gICAgICBmb250U2l6ZTogJzFyZW0nLFxuICAgICAgbWFyZ2luOiAnMC43NXJlbScsXG4gICAgICBjb2xvcjogJ2xpZ2h0c2xhdGVncmF5JyxcbiAgICB9fT5cbiAgICAgIFUuUyBFbGVjdG9yYWwgQ29sbGVnZSBNYXBcbiAgICA8L2gxPlxuICAgIDxoMiBzdHlsZT17eyBmb250U2l6ZTogJzAuNzVyZW0nLCBjb2xvcjogJ2RhcmtzbGF0ZWdyYXknIH19PlxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgYm9yZGVyOiAnMXB4IHNvbGlkIGxpZ2h0Z3JheScsIHBhZGRpbmc6ICcxMHB4JywgYm9yZGVyUmFkaXVzOiAnNXB4JywgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgPEZhQ2hldnJvbkRvd24gc3R5bGU9e3sgbWFyZ2luTGVmdDogJzEwcHgnIH19IC8+XG4gICAgICAgICAgPHNlbGVjdCBzdHlsZT17eyBvcGFjaXR5OiAwLCBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAwLCBsZWZ0OiAnMTBweCcsIHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnIH19PlxuICAgICAgICAgICAge09wdGlvbnMubWFwKChvcHRpb24pID0+IChcbiAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD17dGl0bGUgPT09IG9wdGlvbn0+e29wdGlvbn08L29wdGlvbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlc2V0VXNlclNlbGVjdGlvbnMoKX1cbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMTBweCcgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxGYVVuZG9BbHQgLz5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2gyPlxuICA8L2Rpdj5cbn07XG5cbmNvbnN0IFN0YXRlc0xpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KVxuXG4gIHJldHVybiA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycsIG92ZXJmbG93WDogJ3Njcm9sbCcsIHdpZHRoOiAnMTAwdncnIH19PlxuICAgIDxTdGF0ZXMgZGF0YT17ZGF0YX0vPlxuICA8L2Rpdj5cbn07XG5cbmNvbnN0IEZvb3Rlckl0ZW0gPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxCb3ggZmxleD1cIjAgMSAwXCIgc3R5bGU9e3sgcGFkZGluZzogJzVweCAwJywgbWFyZ2luTGVmdDogJzE1cHgnLCB3aGl0ZVNwYWNlOiAnbm93cmFwJyB9fT5cbiAgICB7Y2hpbGRyZW59XG4gIDwvQm94PlxuKTtcblxuY29uc3QgQ29weXJpZ2h0ID0gKCkgPT4gKFxuICA8PlxuICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIj5cbiAgICAgIDxGb290ZXJJdGVtPlxuICAgICAgICA8YSBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vYmVuamFtaW5iZXJnc3RlaW4vdXMtZWxlY3RvcmFsLW1hcCcgdGFyZ2V0PVwiX0JMQU5LXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJkb2NzL2dpdGh1Yi5wbmdcIiBoZWlnaHQ9XCIxNHB4XCIgd2lkdGg9XCIxNHB4XCIgYWx0PVwiU291cmNlIG9uIEdpdGh1YlwiIHRpdGxlPVwiU291cmNlIG9uIEdpdGh1YlwiIC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvRm9vdGVySXRlbT5cbiAgICAgIDxGb290ZXJJdGVtPlxuICAgICAgICA8YSBocmVmPSdodHRwczovL2dvby5nbC9mb3Jtcy9USGt5OWRxSVBJOUFlekpiMicgdGFyZ2V0PVwiX0JMQU5LXCIgc3R5bGU9e3sgdGV4dERlY29yYXRpb246ICdub25lJyB9fT5cbiAgICAgICAgICBGZWVkYmFja1xuICAgICAgICA8L2E+XG4gICAgICA8L0Zvb3Rlckl0ZW0+XG4gICAgICA8Rm9vdGVySXRlbT5cbiAgICAgICAgPGNvcHlyaWdodD5cbiAgICAgICAgICAmY29weTsgMjAxNy0yMDE5IEJlbiBCZXJnc3RlaW5cbiAgICAgICAgPC9jb3B5cmlnaHQ+XG4gICAgICA8L0Zvb3Rlckl0ZW0+XG4gICAgPC9Cb3g+XG4gIDwvPlxuKTtcblxuY29uc3QgU2VjdGlvbiA9ICh7IGhlaWdodCwgZmxleCwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IChcbiAgPEJveD5cbiAgICB7Y2hpbGRyZW59XG4gIDwvQm94PlxuKVxuXG5jb25zdCBXcmFwcGVyID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGhlaWdodD1cIjEwMCVcIj5cbiAgICB7Y2hpbGRyZW59XG4gIDwvQm94PlxuKTtcblxuY29uc3QgSW5mb0JhciA9ICgpID0+IChcbiAgPEJveD5cbiAgICA8Qm94PlxuICAgICAgPFRpdGxlIC8+XG4gICAgPC9Cb3g+XG4gICAgPFRvdGFscyAvPlxuICA8L0JveD5cbik7XG5cbmNvbnN0IENvbnRlbnQgPSAoKSA9PiA8RGF0YVByb3ZpZGVyPlxuICA8V3JhcHBlcj5cbiAgICA8U3RhdGVzTGlzdCAvPlxuXG4gICAgPFNlY3Rpb24+XG4gICAgICA8Qm94PlxuICAgICAgICA8SW5mb0JhciAvPlxuICAgICAgPC9Cb3g+XG4gICAgPC9TZWN0aW9uPlxuXG4gICAgPEJveCBmbGV4PVwiMVwiIHN0eWxlPXt7IG92ZXJmbG93WTogJ2hpZGRlbicgfX0+XG4gICAgICB7dHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgPE1hcCAvPn1cbiAgICA8L0JveD5cblxuICAgIDxTZWN0aW9uPlxuICAgICAgPEJveD5cbiAgICAgICAgeyBmYWxzZSAmJiA8Q29weXJpZ2h0IC8+fVxuICAgICAgPC9Cb3g+XG4gICAgPC9TZWN0aW9uPlxuICA8L1dyYXBwZXI+XG48L0RhdGFQcm92aWRlcj5cblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/Layout.js\n");

/***/ })

})