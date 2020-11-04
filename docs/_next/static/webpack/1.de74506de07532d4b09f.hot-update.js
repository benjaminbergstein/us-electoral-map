webpackHotUpdate_N_E(1,{

/***/ "./lib/Map.js":
/*!********************!*\
  !*** ./lib/Map.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_zoom_pan_pinch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-zoom-pan-pinch */ \"./node_modules/react-zoom-pan-pinch/dist/index.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _DataContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DataContext */ \"./lib/DataContext.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ \"./lib/constants.js\");\n/* harmony import */ var datamaps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! datamaps */ \"./node_modules/datamaps/dist/datamaps.all.js\");\n/* harmony import */ var datamaps__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(datamaps__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\nvar _jsxFileName = \"/app/lib/Map.js\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar POPUP_TEMPLATE = function POPUP_TEMPLATE(state, data) {\n  return \"<span style=\\\"position: relative; left: 30px; top: 200px; color: white; font-weight: 900; text-shadow: 0 0 1px #000, 1px 1px 1px #000;\\\">\".concat(state.properties.name, \" (\").concat(data['Electoral Votes'], \")</span>\");\n};\n\n_c = POPUP_TEMPLATE;\n\nvar initalizeMap = function initalizeMap(node, data) {\n  if (window !== undefined) {\n    var map = new datamaps__WEBPACK_IMPORTED_MODULE_7___default.a({\n      element: node,\n      scope: 'usa',\n      data: data,\n      fills: _constants__WEBPACK_IMPORTED_MODULE_6__[\"PossibleFills\"],\n      geographyConfig: {\n        highlightOnHover: true,\n        highlightFillColor: false,\n        highlightBorderColor: \"white\",\n        highlightBorderOpacity: '0.65',\n        highlightBorderWidth: \"4px\",\n        highlightFillOpacity: '0.85',\n        popupTemplate: POPUP_TEMPLATE\n      }\n    });\n    return map;\n  }\n};\n\nvar Panel = function Panel() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    style: {\n      position: 'absolute',\n      top: '0px',\n      left: '0px'\n    },\n    children: [!isOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      onClick: function onClick() {\n        return setIsOpen(true);\n      },\n      style: {\n        borderRadius: '30px',\n        background: 'white',\n        color: 'black'\n      },\n      children: \"+\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 19\n    }, _this), isOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        onClick: function onClick() {\n          return setIsOpen(false);\n        },\n        style: {\n          borderRadius: '30px',\n          background: 'white',\n          color: 'black',\n          height: '30px',\n          width: '30px'\n        },\n        children: \"\\xD7\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Panel, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n\n_c2 = Panel;\n\nvar Container = function Container() {\n  _s2();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_DataContext__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n      data = _useContext.data,\n      windowSize = _useContext.windowSize,\n      updateUserSelection = _useContext.updateUserSelection;\n\n  var ref = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(null);\n  var mapRef = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    if (data === undefined) return;\n    if (ref.current === null) return;\n    ref.current.innerHTML = '';\n    mapRef.current = initalizeMap(ref.current, data);\n    mapRef.current.svg.selectAll('.datamaps-subunit').on('click', function (data) {\n      updateUserSelection(data.id);\n    });\n  }, [data].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(windowSize)));\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    style: {\n      position: 'relative'\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Panel, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      style: {\n        height: '100%'\n      },\n      ref: ref\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 78,\n    columnNumber: 10\n  }, _this);\n};\n\n_s2(Container, \"vRhCfOy3Bw9U4AeNRsmjqyzFNOc=\");\n\n_c3 = Container;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Container);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"POPUP_TEMPLATE\");\n$RefreshReg$(_c2, \"Panel\");\n$RefreshReg$(_c3, \"Container\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL01hcC5qcz9jNTkzIl0sIm5hbWVzIjpbIlBPUFVQX1RFTVBMQVRFIiwic3RhdGUiLCJkYXRhIiwicHJvcGVydGllcyIsIm5hbWUiLCJpbml0YWxpemVNYXAiLCJub2RlIiwid2luZG93IiwidW5kZWZpbmVkIiwibWFwIiwiRGF0YW1hcCIsImVsZW1lbnQiLCJzY29wZSIsImZpbGxzIiwiUG9zc2libGVGaWxscyIsImdlb2dyYXBoeUNvbmZpZyIsImhpZ2hsaWdodE9uSG92ZXIiLCJoaWdobGlnaHRGaWxsQ29sb3IiLCJoaWdobGlnaHRCb3JkZXJDb2xvciIsImhpZ2hsaWdodEJvcmRlck9wYWNpdHkiLCJoaWdobGlnaHRCb3JkZXJXaWR0aCIsImhpZ2hsaWdodEZpbGxPcGFjaXR5IiwicG9wdXBUZW1wbGF0ZSIsIlBhbmVsIiwidXNlU3RhdGUiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJoZWlnaHQiLCJ3aWR0aCIsIkNvbnRhaW5lciIsInVzZUNvbnRleHQiLCJEYXRhQ29udGV4dCIsIndpbmRvd1NpemUiLCJ1cGRhdGVVc2VyU2VsZWN0aW9uIiwicmVmIiwidXNlUmVmIiwibWFwUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsImlubmVySFRNTCIsInN2ZyIsInNlbGVjdEFsbCIsIm9uIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQVFDLElBQVI7QUFBQSw0SkFBMkpELEtBQUssQ0FBQ0UsVUFBTixDQUFpQkMsSUFBNUssZUFBcUxGLElBQUksQ0FBQyxpQkFBRCxDQUF6TDtBQUFBLENBQXZCOztLQUFNRixjOztBQUVOLElBQU1LLFlBQVksR0FB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bkI7QUFDRCxLQUZEO0FBR0QsR0FWUSxHQVVML0MsSUFWSyxzR0FVSW9DLFVBVkosR0FBVDtBQVlBLHNCQUFPO0FBQUssU0FBSyxFQUFFO0FBQUVYLGNBQVEsRUFBRTtBQUFaLEtBQVo7QUFBQSw0QkFDTCxxRUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESyxlQUVMO0FBQUssV0FBSyxFQUFFO0FBQUVNLGNBQU0sRUFBRTtBQUFWLE9BQVo7QUFBZ0MsU0FBRyxFQUFFTztBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRks7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFJRCxDQXJCRDs7SUFBTUwsUzs7TUFBQUEsUztBQXVCU0Esd0VBQWYiLCJmaWxlIjoiLi9saWIvTWFwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuaW1wb3J0IHsgVHJhbnNmb3JtV3JhcHBlciwgVHJhbnNmb3JtQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0LXpvb20tcGFuLXBpbmNoXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IERhdGFDb250ZXh0IGZyb20gJy4vRGF0YUNvbnRleHQnXG5pbXBvcnQgeyBQb3NzaWJsZUZpbGxzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5pbXBvcnQgRGF0YW1hcCBmcm9tICdkYXRhbWFwcydcblxuY29uc3QgUE9QVVBfVEVNUExBVEUgPSAoc3RhdGUsIGRhdGEpID0+IGA8c3BhbiBzdHlsZT1cInBvc2l0aW9uOiByZWxhdGl2ZTsgbGVmdDogMzBweDsgdG9wOiAyMDBweDsgY29sb3I6IHdoaXRlOyBmb250LXdlaWdodDogOTAwOyB0ZXh0LXNoYWRvdzogMCAwIDFweCAjMDAwLCAxcHggMXB4IDFweCAjMDAwO1wiPiR7c3RhdGUucHJvcGVydGllcy5uYW1lfSAoJHtkYXRhWydFbGVjdG9yYWwgVm90ZXMnXX0pPC9zcGFuPmA7XG5cbmNvbnN0IGluaXRhbGl6ZU1hcCA9IChub2RlLCBkYXRhKSA9PiB7XG4gIGlmICh3aW5kb3cgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IG1hcCA9IG5ldyBEYXRhbWFwKHtcbiAgICAgIGVsZW1lbnQ6IG5vZGUsXG4gICAgICBzY29wZTogJ3VzYScsXG4gICAgICBkYXRhLFxuICAgICAgZmlsbHM6IFBvc3NpYmxlRmlsbHMsXG4gICAgICBnZW9ncmFwaHlDb25maWc6IHtcbiAgICAgICAgaGlnaGxpZ2h0T25Ib3ZlcjogdHJ1ZSxcbiAgICAgICAgaGlnaGxpZ2h0RmlsbENvbG9yOiBmYWxzZSxcbiAgICAgICAgaGlnaGxpZ2h0Qm9yZGVyQ29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgaGlnaGxpZ2h0Qm9yZGVyT3BhY2l0eTogJzAuNjUnLFxuICAgICAgICBoaWdobGlnaHRCb3JkZXJXaWR0aDogXCI0cHhcIixcbiAgICAgICAgaGlnaGxpZ2h0RmlsbE9wYWNpdHk6ICcwLjg1JyxcbiAgICAgICAgcG9wdXBUZW1wbGF0ZTogUE9QVVBfVEVNUExBVEUsXG4gICAgICB9LFxuICAgIH0pXG5cbiAgICByZXR1cm4gbWFwXG4gIH1cbn1cblxuY29uc3QgUGFuZWwgPSAoKSA9PiB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogJzBweCcsIGxlZnQ6ICcwcHgnIH19PlxuICAgICAgeyFpc09wZW4gJiYgPGRpdlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4odHJ1ZSl9XG4gICAgICAgIHN0eWxlPXt7IGJvcmRlclJhZGl1czogJzMwcHgnLCBiYWNrZ3JvdW5kOiAnd2hpdGUnLCBjb2xvcjogJ2JsYWNrJyB9fVxuICAgICAgPlxuICAgICAgICArXG4gICAgICA8L2Rpdj59XG4gICAgICB7aXNPcGVuICYmIDw+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oZmFsc2UpfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6ICczMHB4JyxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXG4gICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICAgIGhlaWdodDogJzMwcHgnLFxuICAgICAgICAgICAgd2lkdGg6ICczMHB4J1xuICAgICAgICAgIH19PlxuICAgICAgICAgICZ0aW1lcztcbiAgICAgICAgPC9kaXY+XG4gICAgICA8Lz59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgQ29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCB7IGRhdGEsIHdpbmRvd1NpemUsIHVwZGF0ZVVzZXJTZWxlY3Rpb24gfSA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpXG4gIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKVxuICBjb25zdCBtYXBSZWYgPSB1c2VSZWYobnVsbClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhID09PSB1bmRlZmluZWQpIHJldHVyblxuICAgIGlmIChyZWYuY3VycmVudCA9PT0gbnVsbCkgcmV0dXJuXG5cbiAgICByZWYuY3VycmVudC5pbm5lckhUTUwgPSAnJ1xuICAgIG1hcFJlZi5jdXJyZW50ID0gaW5pdGFsaXplTWFwKHJlZi5jdXJyZW50LCBkYXRhKVxuXG4gICAgbWFwUmVmLmN1cnJlbnQuc3ZnLnNlbGVjdEFsbCgnLmRhdGFtYXBzLXN1YnVuaXQnKS5vbignY2xpY2snLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICB1cGRhdGVVc2VyU2VsZWN0aW9uKGRhdGEuaWQpXG4gICAgfSk7XG4gIH0sIFtkYXRhLCAuLi53aW5kb3dTaXplXSlcblxuICByZXR1cm4gPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICA8UGFuZWwgLz5cbiAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzEwMCUnIH19IHJlZj17cmVmfT48L2Rpdj5cbiAgPC9kaXY+XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/Map.js\n");

/***/ })

})