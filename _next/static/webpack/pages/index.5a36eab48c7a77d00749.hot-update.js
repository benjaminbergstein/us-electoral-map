webpackHotUpdate_N_E("pages/index",{

/***/ "./lib/Layout.js":
/*!***********************!*\
  !*** ./lib/Layout.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Box */ \"./lib/Box.js\");\n/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Select */ \"./lib/Select.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _States__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./States */ \"./lib/States.js\");\n/* harmony import */ var _Totals__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Totals */ \"./lib/Totals.js\");\n/* harmony import */ var _DataContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./DataContext */ \"./lib/DataContext.js\");\n\n\n\n\n\nvar _jsxFileName = \"/app/lib/Layout.js\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\nvar Map = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./Map */ \"./lib/Map.js\"));\n}, {\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! ./Map */ \"./lib/Map.js\")];\n    },\n    modules: ['./Map']\n  }\n});\n_c2 = Map;\nvar Options = [\"2008 Presidential Election\", \"2016 Presidential Election\", \"2020 Presidential Election\", \"2020 Presidential Election (Predictions)\"];\n\nvar Button = function Button(_ref) {\n  var _onClick = _ref.onClick,\n      _ref$style = _ref.style,\n      style = _ref$style === void 0 ? {} : _ref$style,\n      children = _ref.children;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n    onClick: function onClick() {\n      return _onClick();\n    },\n    style: _objectSpread({\n      marginLeft: '10px',\n      border: '0px solid transparent',\n      background: 'transparent',\n      cursor: 'pointer'\n    }, style),\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 55\n  }, _this);\n};\n\n_c3 = Button;\n\nvar Title = function Title() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_DataContext__WEBPACK_IMPORTED_MODULE_11__[\"default\"]),\n      title = _useContext.title,\n      resetUserSelections = _useContext.resetUserSelections,\n      changeData = _useContext.changeData;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    style: {\n      textAlign: 'center'\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n      style: {\n        lineHeight: '1.25',\n        padding: '0 10px',\n        fontSize: '1rem',\n        margin: '0.75rem',\n        color: 'lightslategray'\n      },\n      children: \"U.S Electoral College Map\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h2\", {\n      style: {\n        fontSize: '0.75rem',\n        color: 'darkslategray'\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        style: {\n          display: 'flex',\n          justifyContent: 'center'\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Select__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          value: title,\n          options: Options,\n          onChange: changeData\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Button, {\n          onClick: function onClick() {\n            return resetUserSelections();\n          },\n          style: {\n            marginLeft: '10px'\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__[\"FaUndoAlt\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 9\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 10\n  }, _this);\n};\n\n_s(Title, \"NyZv83RivMHY+iGVJKt8q7KRHHQ=\");\n\n_c4 = Title;\n\nvar StatesList = function StatesList() {\n  _s2();\n\n  var data = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_DataContext__WEBPACK_IMPORTED_MODULE_11__[\"default\"]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    style: {\n      display: 'flex',\n      flexDirection: 'row',\n      overflowX: 'scroll',\n      width: '100vw'\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_States__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n      data: data\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 60,\n    columnNumber: 10\n  }, _this);\n};\n\n_s2(StatesList, \"QDbvtl2XjZhCafbmMBOV/hNJip4=\");\n\n_c5 = StatesList;\n\nvar FooterItem = function FooterItem(_ref2) {\n  var children = _ref2.children;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    flex: \"0 1 0\",\n    style: {\n      padding: '5px 0',\n      marginLeft: '15px',\n      whiteSpace: 'nowrap'\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 66,\n    columnNumber: 3\n  }, _this);\n};\n\n_c6 = FooterItem;\n\nvar Copyright = function Copyright() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      display: \"flex\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(FooterItem, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"a\", {\n          href: \"https://github.com/benjaminbergstein/us-electoral-map\",\n          target: \"_BLANK\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"img\", {\n            src: \"docs/github.png\",\n            height: \"14px\",\n            width: \"14px\",\n            alt: \"Source on Github\",\n            title: \"Source on Github\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(FooterItem, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"a\", {\n          href: \"https://goo.gl/forms/THky9dqIPI9AezJb2\",\n          target: \"_BLANK\",\n          style: {\n            textDecoration: 'none'\n          },\n          children: \"Feedback\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(FooterItem, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"copyright\", {\n          children: \"\\xA9 2017-2019 Ben Bergstein\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false);\n};\n\n_c7 = Copyright;\n\nvar Section = function Section(_ref3) {\n  var height = _ref3.height,\n      flex = _ref3.flex,\n      children = _ref3.children,\n      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref3, [\"height\", \"flex\", \"children\"]);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 94,\n    columnNumber: 3\n  }, _this);\n};\n\n_c8 = Section;\n\nvar Wrapper = function Wrapper(_ref4) {\n  var children = _ref4.children;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    display: \"flex\",\n    flexDirection: \"column\",\n    height: \"100%\",\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 100,\n    columnNumber: 3\n  }, _this);\n};\n\n_c9 = Wrapper;\n\nvar InfoBar = function InfoBar() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Title, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Totals__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 106,\n    columnNumber: 3\n  }, _this);\n};\n\n_c10 = InfoBar;\n\nvar Content = function Content() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_DataContext__WEBPACK_IMPORTED_MODULE_11__[\"DataProvider\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Wrapper, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(StatesList, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Section, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(InfoBar, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 120,\n            columnNumber: 9\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 119,\n          columnNumber: 7\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        flex: \"1\",\n        style: {\n          overflowY: 'hidden'\n        },\n        children:  true && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Map, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 125,\n          columnNumber: 41\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Section, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          children:  false && /*#__PURE__*/false\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 129,\n          columnNumber: 7\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 128,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 3\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 114,\n    columnNumber: 23\n  }, _this);\n};\n\n_c11 = Content;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Content);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;\n\n$RefreshReg$(_c, \"Map$dynamic\");\n$RefreshReg$(_c2, \"Map\");\n$RefreshReg$(_c3, \"Button\");\n$RefreshReg$(_c4, \"Title\");\n$RefreshReg$(_c5, \"StatesList\");\n$RefreshReg$(_c6, \"FooterItem\");\n$RefreshReg$(_c7, \"Copyright\");\n$RefreshReg$(_c8, \"Section\");\n$RefreshReg$(_c9, \"Wrapper\");\n$RefreshReg$(_c10, \"InfoBar\");\n$RefreshReg$(_c11, \"Content\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL0xheW91dC5qcz8yOWQzIl0sIm5hbWVzIjpbIk1hcCIsImR5bmFtaWMiLCJzc3IiLCJPcHRpb25zIiwiQnV0dG9uIiwib25DbGljayIsInN0eWxlIiwiY2hpbGRyZW4iLCJtYXJnaW5MZWZ0IiwiYm9yZGVyIiwiYmFja2dyb3VuZCIsImN1cnNvciIsIlRpdGxlIiwidXNlQ29udGV4dCIsIkRhdGFDb250ZXh0IiwidGl0bGUiLCJyZXNldFVzZXJTZWxlY3Rpb25zIiwiY2hhbmdlRGF0YSIsInRleHRBbGlnbiIsImxpbmVIZWlnaHQiLCJwYWRkaW5nIiwiZm9udFNpemUiLCJtYXJnaW4iLCJjb2xvciIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIlN0YXRlc0xpc3QiLCJkYXRhIiwiZmxleERpcmVjdGlvbiIsIm92ZXJmbG93WCIsIndpZHRoIiwiRm9vdGVySXRlbSIsIndoaXRlU3BhY2UiLCJDb3B5cmlnaHQiLCJ0ZXh0RGVjb3JhdGlvbiIsIlNlY3Rpb24iLCJoZWlnaHQiLCJmbGV4IiwicHJvcHMiLCJXcmFwcGVyIiwiSW5mb0JhciIsIkNvbnRlbnQiLCJvdmVyZmxvd1kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxHQUFHLEdBQUdDLG1EQUFPLE1BQ2pCO0FBQUEsU0FBTSwwR0FBTjtBQUFBLENBRGlCLEVBRWpCO0FBQUVDLEtBQUcsRUFBRSxLQUFQO0FBQUE7QUFBQTtBQUFBLGtDQURhLDJCQUNiO0FBQUE7QUFBQSxjQURhLE9BQ2I7QUFBQTtBQUFBLENBRmlCLENBQW5CO01BQU1GLEc7QUFLTixJQUFNRyxPQUFPLEdBQUcsQ0FDZCw0QkFEYyxFQUVkLDRCQUZjLEVBR2QsNEJBSGMsRUFJZCwwQ0FKYyxDQUFoQjs7QUFPQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUztB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QUFBYixTQUFyQjtBQUFBLGtCQUNHLHNCQUFpQyxxRUFBQyxHQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRGLGVBYUUscUVBQUMsT0FBRDtBQUFBLCtCQUNFLHFFQUFDLDRDQUFEO0FBQUEsb0JBQ0ksTUFBSyxpQkFBSTtBQURiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRG9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBTjtBQUFBLENBQWhCOztPQUFNRCxPO0FBc0JTQSxzRUFBZiIsImZpbGUiOiIuL2xpYi9MYXlvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9ICBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuaW1wb3J0IEJveCBmcm9tICcuL0JveCc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJy4vU2VsZWN0JztcbmltcG9ydCB7IEZhVW5kb0FsdCB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xuXG5pbXBvcnQgU3RhdGVzIGZyb20gJy4vU3RhdGVzJ1xuaW1wb3J0IFRvdGFscyBmcm9tICcuL1RvdGFscydcbmltcG9ydCBEYXRhQ29udGV4dCwgeyBEYXRhUHJvdmlkZXIgfSBmcm9tICcuL0RhdGFDb250ZXh0J1xuXG5jb25zdCBNYXAgPSBkeW5hbWljKFxuICAoKSA9PiBpbXBvcnQoJy4vTWFwJyksXG4gIHsgc3NyOiBmYWxzZSB9XG4pXG5cbmNvbnN0IE9wdGlvbnMgPSBbXG4gIFwiMjAwOCBQcmVzaWRlbnRpYWwgRWxlY3Rpb25cIixcbiAgXCIyMDE2IFByZXNpZGVudGlhbCBFbGVjdGlvblwiLFxuICBcIjIwMjAgUHJlc2lkZW50aWFsIEVsZWN0aW9uXCIsXG4gIFwiMjAyMCBQcmVzaWRlbnRpYWwgRWxlY3Rpb24gKFByZWRpY3Rpb25zKVwiLFxuXVxuXG5jb25zdCBCdXR0b24gPSAoeyBvbkNsaWNrLCBzdHlsZSA9IHt9LCBjaGlsZHJlbiB9KSA9PiA8YnV0dG9uXG4gIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soKX1cbiAgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzEwcHgnLCBib3JkZXI6ICcwcHggc29saWQgdHJhbnNwYXJlbnQnLCBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLCBjdXJzb3I6ICdwb2ludGVyJywgLi4uc3R5bGUgfX0+XG4gIHtjaGlsZHJlbn1cbjwvYnV0dG9uPlxuXG5jb25zdCBUaXRsZSA9ICgpID0+IHtcbiAgY29uc3QgeyB0aXRsZSwgcmVzZXRVc2VyU2VsZWN0aW9ucywgY2hhbmdlRGF0YSB9ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dClcblxuICByZXR1cm4gPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgIDxoMSBzdHlsZT17e1xuICAgICAgbGluZUhlaWdodDogJzEuMjUnLFxuICAgICAgcGFkZGluZzogJzAgMTBweCcsXG4gICAgICBmb250U2l6ZTogJzFyZW0nLFxuICAgICAgbWFyZ2luOiAnMC43NXJlbScsXG4gICAgICBjb2xvcjogJ2xpZ2h0c2xhdGVncmF5JyxcbiAgICB9fT5cbiAgICAgIFUuUyBFbGVjdG9yYWwgQ29sbGVnZSBNYXBcbiAgICA8L2gxPlxuICAgIDxoMiBzdHlsZT17eyBmb250U2l6ZTogJzAuNzVyZW0nLCBjb2xvcjogJ2RhcmtzbGF0ZWdyYXknIH19PlxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cbiAgICAgICAgPFNlbGVjdCB2YWx1ZT17dGl0bGV9IG9wdGlvbnM9e09wdGlvbnN9IG9uQ2hhbmdlPXtjaGFuZ2VEYXRhfSAvPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcmVzZXRVc2VyU2VsZWN0aW9ucygpfVxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxMHB4JyB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEZhVW5kb0FsdCAvPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvaDI+XG4gIDwvZGl2PlxufTtcblxuY29uc3QgU3RhdGVzTGlzdCA9ICgpID0+IHtcbiAgY29uc3QgZGF0YSA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpXG5cbiAgcmV0dXJuIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93Jywgb3ZlcmZsb3dYOiAnc2Nyb2xsJywgd2lkdGg6ICcxMDB2dycgfX0+XG4gICAgPFN0YXRlcyBkYXRhPXtkYXRhfS8+XG4gIDwvZGl2PlxufTtcblxuY29uc3QgRm9vdGVySXRlbSA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPEJveCBmbGV4PVwiMCAxIDBcIiBzdHlsZT17eyBwYWRkaW5nOiAnNXB4IDAnLCBtYXJnaW5MZWZ0OiAnMTVweCcsIHdoaXRlU3BhY2U6ICdub3dyYXAnIH19PlxuICAgIHtjaGlsZHJlbn1cbiAgPC9Cb3g+XG4pO1xuXG5jb25zdCBDb3B5cmlnaHQgPSAoKSA9PiAoXG4gIDw+XG4gICAgPEJveCBkaXNwbGF5PVwiZmxleFwiPlxuICAgICAgPEZvb3Rlckl0ZW0+XG4gICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9iZW5qYW1pbmJlcmdzdGVpbi91cy1lbGVjdG9yYWwtbWFwJyB0YXJnZXQ9XCJfQkxBTktcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cImRvY3MvZ2l0aHViLnBuZ1wiIGhlaWdodD1cIjE0cHhcIiB3aWR0aD1cIjE0cHhcIiBhbHQ9XCJTb3VyY2Ugb24gR2l0aHViXCIgdGl0bGU9XCJTb3VyY2Ugb24gR2l0aHViXCIgLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9Gb290ZXJJdGVtPlxuICAgICAgPEZvb3Rlckl0ZW0+XG4gICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vZ29vLmdsL2Zvcm1zL1RIa3k5ZHFJUEk5QWV6SmIyJyB0YXJnZXQ9XCJfQkxBTktcIiBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnIH19PlxuICAgICAgICAgIEZlZWRiYWNrXG4gICAgICAgIDwvYT5cbiAgICAgIDwvRm9vdGVySXRlbT5cbiAgICAgIDxGb290ZXJJdGVtPlxuICAgICAgICA8Y29weXJpZ2h0PlxuICAgICAgICAgICZjb3B5OyAyMDE3LTIwMTkgQmVuIEJlcmdzdGVpblxuICAgICAgICA8L2NvcHlyaWdodD5cbiAgICAgIDwvRm9vdGVySXRlbT5cbiAgICA8L0JveD5cbiAgPC8+XG4pO1xuXG5jb25zdCBTZWN0aW9uID0gKHsgaGVpZ2h0LCBmbGV4LCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4gKFxuICA8Qm94PlxuICAgIHtjaGlsZHJlbn1cbiAgPC9Cb3g+XG4pXG5cbmNvbnN0IFdyYXBwZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxCb3ggZGlzcGxheT1cImZsZXhcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgaGVpZ2h0PVwiMTAwJVwiPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9Cb3g+XG4pO1xuXG5jb25zdCBJbmZvQmFyID0gKCkgPT4gKFxuICA8Qm94PlxuICAgIDxCb3g+XG4gICAgICA8VGl0bGUgLz5cbiAgICA8L0JveD5cbiAgICA8VG90YWxzIC8+XG4gIDwvQm94PlxuKTtcblxuY29uc3QgQ29udGVudCA9ICgpID0+IDxEYXRhUHJvdmlkZXI+XG4gIDxXcmFwcGVyPlxuICAgIDxTdGF0ZXNMaXN0IC8+XG5cbiAgICA8U2VjdGlvbj5cbiAgICAgIDxCb3g+XG4gICAgICAgIDxJbmZvQmFyIC8+XG4gICAgICA8L0JveD5cbiAgICA8L1NlY3Rpb24+XG5cbiAgICA8Qm94IGZsZXg9XCIxXCIgc3R5bGU9e3sgb3ZlcmZsb3dZOiAnaGlkZGVuJyB9fT5cbiAgICAgIHt0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiA8TWFwIC8+fVxuICAgIDwvQm94PlxuXG4gICAgPFNlY3Rpb24+XG4gICAgICA8Qm94PlxuICAgICAgICB7IGZhbHNlICYmIDxDb3B5cmlnaHQgLz59XG4gICAgICA8L0JveD5cbiAgICA8L1NlY3Rpb24+XG4gIDwvV3JhcHBlcj5cbjwvRGF0YVByb3ZpZGVyPlxuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/Layout.js\n");

/***/ })

})