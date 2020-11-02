webpackHotUpdate_N_E("pages/index",{

/***/ "./lib/Layout.js":
/*!***********************!*\
  !*** ./lib/Layout.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Box */ \"./lib/Box.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _States__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./States */ \"./lib/States.js\");\n/* harmony import */ var _Totals__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Totals */ \"./lib/Totals.js\");\n/* harmony import */ var _DataContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DataContext */ \"./lib/DataContext.js\");\n\n\n\n\n\nvar _jsxFileName = \"/app/lib/Layout.js\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\nvar Map = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./Map */ \"./lib/Map.js\"));\n}, {\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! ./Map */ \"./lib/Map.js\")];\n    },\n    modules: ['./Map']\n  }\n});\n_c2 = Map;\nvar Options = [\"2008 Presidential Election\", \"2016 Presidential Election\", \"2020 Presidential Election\"];\n\nvar Button = function Button(_ref) {\n  var _onClick = _ref.onClick,\n      _ref$style = _ref.style,\n      style = _ref$style === void 0 ? {} : _ref$style,\n      children = _ref.children;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n    onClick: function onClick() {\n      return _onClick();\n    },\n    style: _objectSpread({\n      marginLeft: '10px',\n      border: '0px solid transparent',\n      background: 'transparent',\n      cursor: 'pointer'\n    }, style),\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 55\n  }, _this);\n};\n\n_c3 = Button;\n\nvar Title = function Title() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_DataContext__WEBPACK_IMPORTED_MODULE_10__[\"default\"]),\n      title = _useContext.title,\n      resetUserSelections = _useContext.resetUserSelections;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    style: {\n      textAlign: 'center'\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n      style: {\n        lineHeight: '1.25',\n        padding: '0 10px',\n        fontSize: '1rem',\n        margin: '0.75rem',\n        color: 'lightslategray'\n      },\n      children: \"U.S Electoral College Map\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h2\", {\n      style: {\n        fontSize: '0.75rem',\n        color: 'darkslategray'\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        style: {\n          display: 'flex',\n          justifyContent: 'center'\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          style: {\n            position: 'relative',\n            border: '1px solid slategray',\n            padding: '10px',\n            borderRadius: '5px'\n          },\n          children: [title, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"select\", {\n            style: {\n              opacity: 0,\n              position: 'absolute',\n              top: 0,\n              left: 0,\n              width: '100%',\n              height: '100%'\n            },\n            children: Options.map(function (option) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"option\", {\n                selected: title === option,\n                children: option\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 47,\n                columnNumber: 15\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 11\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Button, {\n          onClick: function onClick() {\n            return resetUserSelections();\n          },\n          style: {\n            marginLeft: '10px'\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__[\"FaUndoAlt\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 9\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 10\n  }, _this);\n};\n\n_s(Title, \"G/CPIg3WQIar05X/zpfrrfif/Uk=\");\n\n_c4 = Title;\n\nvar StatesList = function StatesList() {\n  _s2();\n\n  var data = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_DataContext__WEBPACK_IMPORTED_MODULE_10__[\"default\"]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    style: {\n      display: 'flex',\n      flexDirection: 'row',\n      overflowX: 'scroll',\n      width: '100vw'\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_States__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      data: data\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 65,\n    columnNumber: 10\n  }, _this);\n};\n\n_s2(StatesList, \"QDbvtl2XjZhCafbmMBOV/hNJip4=\");\n\n_c5 = StatesList;\n\nvar FooterItem = function FooterItem(_ref2) {\n  var children = _ref2.children;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    flex: \"0 1 0\",\n    style: {\n      padding: '5px 0',\n      marginLeft: '15px',\n      whiteSpace: 'nowrap'\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 71,\n    columnNumber: 3\n  }, _this);\n};\n\n_c6 = FooterItem;\n\nvar Copyright = function Copyright() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      display: \"flex\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(FooterItem, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"a\", {\n          href: \"https://github.com/benjaminbergstein/us-electoral-map\",\n          target: \"_BLANK\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"img\", {\n            src: \"docs/github.png\",\n            height: \"14px\",\n            width: \"14px\",\n            alt: \"Source on Github\",\n            title: \"Source on Github\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 81,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(FooterItem, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"a\", {\n          href: \"https://goo.gl/forms/THky9dqIPI9AezJb2\",\n          target: \"_BLANK\",\n          style: {\n            textDecoration: 'none'\n          },\n          children: \"Feedback\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(FooterItem, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"copyright\", {\n          children: \"\\xA9 2017-2019 Ben Bergstein\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false);\n};\n\n_c7 = Copyright;\n\nvar Section = function Section(_ref3) {\n  var height = _ref3.height,\n      flex = _ref3.flex,\n      children = _ref3.children,\n      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref3, [\"height\", \"flex\", \"children\"]);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 99,\n    columnNumber: 3\n  }, _this);\n};\n\n_c8 = Section;\n\nvar Wrapper = function Wrapper(_ref4) {\n  var children = _ref4.children;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    display: \"flex\",\n    flexDirection: \"column\",\n    height: \"100%\",\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 105,\n    columnNumber: 3\n  }, _this);\n};\n\n_c9 = Wrapper;\n\nvar InfoBar = function InfoBar() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Title, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Totals__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 111,\n    columnNumber: 3\n  }, _this);\n};\n\n_c10 = InfoBar;\n\nvar Content = function Content() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_DataContext__WEBPACK_IMPORTED_MODULE_10__[\"DataProvider\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Wrapper, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(StatesList, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Section, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(InfoBar, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 125,\n            columnNumber: 9\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 124,\n          columnNumber: 7\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        flex: \"1\",\n        style: {\n          overflowY: 'hidden'\n        },\n        children:  true && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Map, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 130,\n          columnNumber: 41\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 129,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Section, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          children:  false && /*#__PURE__*/false\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 134,\n          columnNumber: 7\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 133,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 3\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 119,\n    columnNumber: 23\n  }, _this);\n};\n\n_c11 = Content;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Content);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;\n\n$RefreshReg$(_c, \"Map$dynamic\");\n$RefreshReg$(_c2, \"Map\");\n$RefreshReg$(_c3, \"Button\");\n$RefreshReg$(_c4, \"Title\");\n$RefreshReg$(_c5, \"StatesList\");\n$RefreshReg$(_c6, \"FooterItem\");\n$RefreshReg$(_c7, \"Copyright\");\n$RefreshReg$(_c8, \"Section\");\n$RefreshReg$(_c9, \"Wrapper\");\n$RefreshReg$(_c10, \"InfoBar\");\n$RefreshReg$(_c11, \"Content\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL0xheW91dC5qcz8yOWQzIl0sIm5hbWVzIjpbIk1hcCIsImR5bmFtaWMiLCJzc3IiLCJPcHRpb25zIiwiQnV0dG9uIiwib25DbGljayIsInN0eWxlIiwiY2hpbGRyZW4iLCJtYXJnaW5MZWZ0IiwiYm9yZGVyIiwiYmFja2dyb3VuZCIsImN1cnNvciIsIlRpdGxlIiwidXNlQ29udGV4dCIsIkRhdGFDb250ZXh0IiwidGl0bGUiLCJyZXNldFVzZXJTZWxlY3Rpb25zIiwidGV4dEFsaWduIiwibGluZUhlaWdodCIsInBhZGRpbmciLCJmb250U2l6ZSIsIm1hcmdpbiIsImNvbG9yIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwicG9zaXRpb24iLCJib3JkZXJSYWRpdXMiLCJvcGFjaXR5IiwidG9wIiwibGVmdCIsIndpZHRoIiwiaGVpZ2h0IiwibWFwIiwib3B0aW9uIiwiU3RhdGVzTGlzdCIsImRhdGEiLCJmbGV4RGlyZWN0aW9uIiwib3ZlcmZsb3dYIiwiRm9vdGVySXRlbSIsIndoaXRlU3BhY2UiLCJDb3B5cmlnaHQiLCJ0ZXh0RGVjb3JhdGlvbiIsIlNlY3Rpb24iLCJmbGV4IiwicHJvcHMiLCJXcmFwcGVyIiwiSW5mb0JhciIsIkNvbnRlbnQiLCJvdmVyZmxvd1kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxHQUFHLEdBQUdDLG1EQUFPLE1BQ2pCO0FBQUEsU0FBTSwwR0FBTjtBQUFBLENBRGlCLEVBRWpCO0FBQUVDLEtBQUcsRUFBRSxLQUFQO0FBQUE7QUFBQTtBQUFBLGtDQURhLDJCQUNiO0FBQUE7QUFBQSxjQURhLE9BQ2I7QUFBQTtBQUFBLENBRmlCLENBQW5CO01BQU1GLEc7QUFLTixJQUFNRyxPQUFPLEdBQUcsQ0FDZCw0QkFEYyxFQUVkLDRCQUZjLEVBR2QsNEJBSGMsQ0FBaEI7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QUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURjO0FBQUEsQ0FBaEI7O09BQU1BLE87O0FBU04sSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxzQkFBTSxxRUFBQywwREFBRDtBQUFBLDJCQUNwQixxRUFBQyxPQUFEO0FBQUEsOEJBQ0UscUVBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFHRSxxRUFBQyxPQUFEO0FBQUEsK0JBQ0UscUVBQUMsNENBQUQ7QUFBQSxpQ0FDRSxxRUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLGVBU0UscUVBQUMsNENBQUQ7QUFBSyxZQUFJLEVBQUMsR0FBVjtBQUFjLGFBQUssRUFBRTtBQUFFQyxtQkFBUyxFQUFFO0FBQWIsU0FBckI7QUFBQSxrQkFDRyxzQkFBaUMscUVBQUMsR0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRHBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURixlQWFFLHFFQUFDLE9BQUQ7QUFBQSwrQkFDRSxxRUFBQyw0Q0FBRDtBQUFBLG9CQUNJLE1BQUssaUJBQUk7QUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQU47QUFBQSxDQUFoQjs7T0FBTUQsTztBQXNCU0Esc0VBQWYiLCJmaWxlIjoiLi9saWIvTGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSAgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCBCb3ggZnJvbSAnLi9Cb3gnO1xuaW1wb3J0IHsgRmFVbmRvQWx0IH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnXG5cbmltcG9ydCBTdGF0ZXMgZnJvbSAnLi9TdGF0ZXMnXG5pbXBvcnQgVG90YWxzIGZyb20gJy4vVG90YWxzJ1xuaW1wb3J0IERhdGFDb250ZXh0LCB7IERhdGFQcm92aWRlciB9IGZyb20gJy4vRGF0YUNvbnRleHQnXG5cbmNvbnN0IE1hcCA9IGR5bmFtaWMoXG4gICgpID0+IGltcG9ydCgnLi9NYXAnKSxcbiAgeyBzc3I6IGZhbHNlIH1cbilcblxuY29uc3QgT3B0aW9ucyA9IFtcbiAgXCIyMDA4IFByZXNpZGVudGlhbCBFbGVjdGlvblwiLFxuICBcIjIwMTYgUHJlc2lkZW50aWFsIEVsZWN0aW9uXCIsXG4gIFwiMjAyMCBQcmVzaWRlbnRpYWwgRWxlY3Rpb25cIixcbl1cblxuY29uc3QgQnV0dG9uID0gKHsgb25DbGljaywgc3R5bGUgPSB7fSwgY2hpbGRyZW4gfSkgPT4gPGJ1dHRvblxuICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKCl9XG4gIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxMHB4JywgYm9yZGVyOiAnMHB4IHNvbGlkIHRyYW5zcGFyZW50JywgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JywgY3Vyc29yOiAncG9pbnRlcicsIC4uLnN0eWxlIH19PlxuICB7Y2hpbGRyZW59XG48L2J1dHRvbj5cblxuY29uc3QgVGl0bGUgPSAoKSA9PiB7XG4gIGNvbnN0IHsgdGl0bGUsIHJlc2V0VXNlclNlbGVjdGlvbnMgfSA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpXG5cbiAgcmV0dXJuIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cbiAgICA8aDEgc3R5bGU9e3tcbiAgICAgIGxpbmVIZWlnaHQ6ICcxLjI1JyxcbiAgICAgIHBhZGRpbmc6ICcwIDEwcHgnLFxuICAgICAgZm9udFNpemU6ICcxcmVtJyxcbiAgICAgIG1hcmdpbjogJzAuNzVyZW0nLFxuICAgICAgY29sb3I6ICdsaWdodHNsYXRlZ3JheScsXG4gICAgfX0+XG4gICAgICBVLlMgRWxlY3RvcmFsIENvbGxlZ2UgTWFwXG4gICAgPC9oMT5cbiAgICA8aDIgc3R5bGU9e3sgZm9udFNpemU6ICcwLjc1cmVtJywgY29sb3I6ICdkYXJrc2xhdGVncmF5JyB9fT5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGJvcmRlcjogJzFweCBzb2xpZCBzbGF0ZWdyYXknLCBwYWRkaW5nOiAnMTBweCcsIGJvcmRlclJhZGl1czogJzVweCcgfX0+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICAgIDxzZWxlY3Qgc3R5bGU9e3sgb3BhY2l0eTogMCwgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogMCwgbGVmdDogMCwgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScgfX0+XG4gICAgICAgICAgICB7T3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxuICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPXt0aXRsZSA9PT0gb3B0aW9ufT57b3B0aW9ufTwvb3B0aW9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcmVzZXRVc2VyU2VsZWN0aW9ucygpfVxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxMHB4JyB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEZhVW5kb0FsdCAvPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvaDI+XG4gIDwvZGl2PlxufTtcblxuY29uc3QgU3RhdGVzTGlzdCA9ICgpID0+IHtcbiAgY29uc3QgZGF0YSA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpXG5cbiAgcmV0dXJuIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93Jywgb3ZlcmZsb3dYOiAnc2Nyb2xsJywgd2lkdGg6ICcxMDB2dycgfX0+XG4gICAgPFN0YXRlcyBkYXRhPXtkYXRhfS8+XG4gIDwvZGl2PlxufTtcblxuY29uc3QgRm9vdGVySXRlbSA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPEJveCBmbGV4PVwiMCAxIDBcIiBzdHlsZT17eyBwYWRkaW5nOiAnNXB4IDAnLCBtYXJnaW5MZWZ0OiAnMTVweCcsIHdoaXRlU3BhY2U6ICdub3dyYXAnIH19PlxuICAgIHtjaGlsZHJlbn1cbiAgPC9Cb3g+XG4pO1xuXG5jb25zdCBDb3B5cmlnaHQgPSAoKSA9PiAoXG4gIDw+XG4gICAgPEJveCBkaXNwbGF5PVwiZmxleFwiPlxuICAgICAgPEZvb3Rlckl0ZW0+XG4gICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9iZW5qYW1pbmJlcmdzdGVpbi91cy1lbGVjdG9yYWwtbWFwJyB0YXJnZXQ9XCJfQkxBTktcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cImRvY3MvZ2l0aHViLnBuZ1wiIGhlaWdodD1cIjE0cHhcIiB3aWR0aD1cIjE0cHhcIiBhbHQ9XCJTb3VyY2Ugb24gR2l0aHViXCIgdGl0bGU9XCJTb3VyY2Ugb24gR2l0aHViXCIgLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9Gb290ZXJJdGVtPlxuICAgICAgPEZvb3Rlckl0ZW0+XG4gICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vZ29vLmdsL2Zvcm1zL1RIa3k5ZHFJUEk5QWV6SmIyJyB0YXJnZXQ9XCJfQkxBTktcIiBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnIH19PlxuICAgICAgICAgIEZlZWRiYWNrXG4gICAgICAgIDwvYT5cbiAgICAgIDwvRm9vdGVySXRlbT5cbiAgICAgIDxGb290ZXJJdGVtPlxuICAgICAgICA8Y29weXJpZ2h0PlxuICAgICAgICAgICZjb3B5OyAyMDE3LTIwMTkgQmVuIEJlcmdzdGVpblxuICAgICAgICA8L2NvcHlyaWdodD5cbiAgICAgIDwvRm9vdGVySXRlbT5cbiAgICA8L0JveD5cbiAgPC8+XG4pO1xuXG5jb25zdCBTZWN0aW9uID0gKHsgaGVpZ2h0LCBmbGV4LCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4gKFxuICA8Qm94PlxuICAgIHtjaGlsZHJlbn1cbiAgPC9Cb3g+XG4pXG5cbmNvbnN0IFdyYXBwZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxCb3ggZGlzcGxheT1cImZsZXhcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgaGVpZ2h0PVwiMTAwJVwiPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9Cb3g+XG4pO1xuXG5jb25zdCBJbmZvQmFyID0gKCkgPT4gKFxuICA8Qm94PlxuICAgIDxCb3g+XG4gICAgICA8VGl0bGUgLz5cbiAgICA8L0JveD5cbiAgICA8VG90YWxzIC8+XG4gIDwvQm94PlxuKTtcblxuY29uc3QgQ29udGVudCA9ICgpID0+IDxEYXRhUHJvdmlkZXI+XG4gIDxXcmFwcGVyPlxuICAgIDxTdGF0ZXNMaXN0IC8+XG5cbiAgICA8U2VjdGlvbj5cbiAgICAgIDxCb3g+XG4gICAgICAgIDxJbmZvQmFyIC8+XG4gICAgICA8L0JveD5cbiAgICA8L1NlY3Rpb24+XG5cbiAgICA8Qm94IGZsZXg9XCIxXCIgc3R5bGU9e3sgb3ZlcmZsb3dZOiAnaGlkZGVuJyB9fT5cbiAgICAgIHt0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiA8TWFwIC8+fVxuICAgIDwvQm94PlxuXG4gICAgPFNlY3Rpb24+XG4gICAgICA8Qm94PlxuICAgICAgICB7IGZhbHNlICYmIDxDb3B5cmlnaHQgLz59XG4gICAgICA8L0JveD5cbiAgICA8L1NlY3Rpb24+XG4gIDwvV3JhcHBlcj5cbjwvRGF0YVByb3ZpZGVyPlxuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/Layout.js\n");

/***/ })

})