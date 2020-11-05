webpackHotUpdate_N_E(1,{

/***/ "./lib/Map.js":
/*!********************!*\
  !*** ./lib/Map.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_zoom_pan_pinch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-zoom-pan-pinch */ \"./node_modules/react-zoom-pan-pinch/dist/index.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _DataContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DataContext */ \"./lib/DataContext.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ \"./lib/constants.js\");\n/* harmony import */ var datamaps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! datamaps */ \"./node_modules/datamaps/dist/datamaps.all.js\");\n/* harmony import */ var datamaps__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(datamaps__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\nvar _jsxFileName = \"/app/lib/Map.js\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar POPUP_TEMPLATE = function POPUP_TEMPLATE(state, data) {\n  return \"<span style=\\\"position: relative; left: 30px; top: 200px; color: white; font-weight: 900; text-shadow: 0 0 1px #000, 1px 1px 1px #000;\\\">\".concat(state.properties.name, \" (\").concat(data['Electoral Votes'], \")</span>\");\n};\n\n_c = POPUP_TEMPLATE;\n\nvar initalizeMap = function initalizeMap(node, data) {\n  if (window !== undefined) {\n    var map = new datamaps__WEBPACK_IMPORTED_MODULE_7___default.a({\n      element: node,\n      scope: 'usa',\n      data: data,\n      fills: _constants__WEBPACK_IMPORTED_MODULE_6__[\"PossibleFills\"],\n      geographyConfig: {\n        highlightOnHover: true,\n        highlightFillColor: false,\n        highlightBorderColor: \"white\",\n        highlightBorderOpacity: '0.65',\n        highlightBorderWidth: \"4px\",\n        highlightFillOpacity: '0.85',\n        popupTemplate: POPUP_TEMPLATE\n      }\n    });\n    return map;\n  }\n};\n\nvar Panel = function Panel() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    style: {\n      position: 'absolute',\n      top: '0px',\n      left: '0px'\n    },\n    children: [!isOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      onClick: function onClick() {\n        return setIsOpen(true);\n      },\n      style: {\n        borderRadius: '30px',\n        background: 'white',\n        color: 'black'\n      },\n      children: \"+\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 19\n    }, _this), isOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        onClick: function onClick() {\n          return setIsOpen(false);\n        },\n        style: {\n          borderRadius: '30px',\n          background: 'white',\n          color: 'black'\n        },\n        children: \"\\xD7\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Panel, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n\n_c2 = Panel;\n\nvar Container = function Container() {\n  _s2();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_DataContext__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n      data = _useContext.data,\n      windowSize = _useContext.windowSize,\n      updateUserSelection = _useContext.updateUserSelection;\n\n  var ref = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(null);\n  var mapRef = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    if (data === undefined) return;\n    if (ref.current === null) return;\n    ref.current.innerHTML = '';\n    mapRef.current = initalizeMap(ref.current, data);\n    mapRef.current.svg.selectAll('.datamaps-subunit').on('click', function (data) {\n      updateUserSelection(data.id);\n    });\n  }, [data].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(windowSize)));\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    style: {\n      position: 'relative'\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Panel, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      style: {\n        height: '100%'\n      },\n      ref: ref\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 76,\n    columnNumber: 10\n  }, _this);\n};\n\n_s2(Container, \"vRhCfOy3Bw9U4AeNRsmjqyzFNOc=\");\n\n_c3 = Container;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Container);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"POPUP_TEMPLATE\");\n$RefreshReg$(_c2, \"Panel\");\n$RefreshReg$(_c3, \"Container\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL01hcC5qcz9jNTkzIl0sIm5hbWVzIjpbIlBPUFVQX1RFTVBMQVRFIiwic3RhdGUiLCJkYXRhIiwicHJvcGVydGllcyIsIm5hbWUiLCJpbml0YWxpemVNYXAiLCJub2RlIiwid2luZG93IiwidW5kZWZpbmVkIiwibWFwIiwiRGF0YW1hcCIsImVsZW1lbnQiLCJzY29wZSIsImZpbGxzIiwiUG9zc2libGVGaWxscyIsImdlb2dyYXBoeUNvbmZpZyIsImhpZ2hsaWdodE9uSG92ZXIiLCJoaWdobGlnaHRGaWxsQ29sb3IiLCJoaWdobGlnaHRCb3JkZXJDb2xvciIsImhpZ2hsaWdodEJvcmRlck9wYWNpdHkiLCJoaWdobGlnaHRCb3JkZXJXaWR0aCIsImhpZ2hsaWdodEZpbGxPcGFjaXR5IiwicG9wdXBUZW1wbGF0ZSIsIlBhbmVsIiwidXNlU3RhdGUiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJDb250YWluZXIiLCJ1c2VDb250ZXh0IiwiRGF0YUNvbnRleHQiLCJ3aW5kb3dTaXplIiwidXBkYXRlVXNlclNlbGVjdGlvbiIsInJlZiIsInVzZVJlZiIsIm1hcFJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJpbm5lckhUTUwiLCJzdmciLCJzZWxlY3RBbGwiLCJvbiIsImlkIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsS0FBRCxFQUFRQyxJQUFSO0FBQUEsNEpBQTJKRCxLQUFLLENBQUNFLFVBQU4sQ0FBaUJDLElBQTVLLGVBQXFMRixJQUFJLENBQUMsaUJBQUQsQ0FBekw7QUFBQSxDQUF2Qjs7S0FBTUYsYzs7QUFFTixJQUFNSyxZQUFZLEdBQUcsU0FBZkEs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VDtBQVlBLHNCQUFPO0FBQUssU0FBSyxFQUFFO0FBQUVULGNBQVEsRUFBRTtBQUFaLEtBQVo7QUFBQSw0QkFDTCxxRUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESyxlQUVMO0FBQUssV0FBSyxFQUFFO0FBQUVxQixjQUFNLEVBQUU7QUFBVixPQUFaO0FBQWdDLFNBQUcsRUFBRVY7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBSUQsQ0FyQkQ7O0lBQU1MLFM7O01BQUFBLFM7QUF1QlNBLHdFQUFmIiwiZmlsZSI6Ii4vbGliL01hcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcbmltcG9ydCB7IFRyYW5zZm9ybVdyYXBwZXIsIFRyYW5zZm9ybUNvbXBvbmVudCB9IGZyb20gXCJyZWFjdC16b29tLXBhbi1waW5jaFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEYXRhQ29udGV4dCBmcm9tICcuL0RhdGFDb250ZXh0J1xuaW1wb3J0IHsgUG9zc2libGVGaWxscyB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuaW1wb3J0IERhdGFtYXAgZnJvbSAnZGF0YW1hcHMnXG5cbmNvbnN0IFBPUFVQX1RFTVBMQVRFID0gKHN0YXRlLCBkYXRhKSA9PiBgPHNwYW4gc3R5bGU9XCJwb3NpdGlvbjogcmVsYXRpdmU7IGxlZnQ6IDMwcHg7IHRvcDogMjAwcHg7IGNvbG9yOiB3aGl0ZTsgZm9udC13ZWlnaHQ6IDkwMDsgdGV4dC1zaGFkb3c6IDAgMCAxcHggIzAwMCwgMXB4IDFweCAxcHggIzAwMDtcIj4ke3N0YXRlLnByb3BlcnRpZXMubmFtZX0gKCR7ZGF0YVsnRWxlY3RvcmFsIFZvdGVzJ119KTwvc3Bhbj5gO1xuXG5jb25zdCBpbml0YWxpemVNYXAgPSAobm9kZSwgZGF0YSkgPT4ge1xuICBpZiAod2luZG93ICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBtYXAgPSBuZXcgRGF0YW1hcCh7XG4gICAgICBlbGVtZW50OiBub2RlLFxuICAgICAgc2NvcGU6ICd1c2EnLFxuICAgICAgZGF0YSxcbiAgICAgIGZpbGxzOiBQb3NzaWJsZUZpbGxzLFxuICAgICAgZ2VvZ3JhcGh5Q29uZmlnOiB7XG4gICAgICAgIGhpZ2hsaWdodE9uSG92ZXI6IHRydWUsXG4gICAgICAgIGhpZ2hsaWdodEZpbGxDb2xvcjogZmFsc2UsXG4gICAgICAgIGhpZ2hsaWdodEJvcmRlckNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgIGhpZ2hsaWdodEJvcmRlck9wYWNpdHk6ICcwLjY1JyxcbiAgICAgICAgaGlnaGxpZ2h0Qm9yZGVyV2lkdGg6IFwiNHB4XCIsXG4gICAgICAgIGhpZ2hsaWdodEZpbGxPcGFjaXR5OiAnMC44NScsXG4gICAgICAgIHBvcHVwVGVtcGxhdGU6IFBPUFVQX1RFTVBMQVRFLFxuICAgICAgfSxcbiAgICB9KVxuXG4gICAgcmV0dXJuIG1hcFxuICB9XG59XG5cbmNvbnN0IFBhbmVsID0gKCkgPT4ge1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6ICcwcHgnLCBsZWZ0OiAnMHB4JyB9fT5cbiAgICAgIHshaXNPcGVuICYmIDxkaXZcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKHRydWUpfVxuICAgICAgICBzdHlsZT17eyBib3JkZXJSYWRpdXM6ICczMHB4JywgYmFja2dyb3VuZDogJ3doaXRlJywgY29sb3I6ICdibGFjaycgfX1cbiAgICAgID5cbiAgICAgICAgK1xuICAgICAgPC9kaXY+fVxuICAgICAge2lzT3BlbiAmJiA8PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKGZhbHNlKX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMzBweCcsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxuICAgICAgICAgICAgY29sb3I6ICdibGFjaydcbiAgICAgICAgICB9fT5cbiAgICAgICAgICAmdGltZXM7XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC8+fVxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IENvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgeyBkYXRhLCB3aW5kb3dTaXplLCB1cGRhdGVVc2VyU2VsZWN0aW9uIH0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KVxuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbClcbiAgY29uc3QgbWFwUmVmID0gdXNlUmVmKG51bGwpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGF0YSA9PT0gdW5kZWZpbmVkKSByZXR1cm5cbiAgICBpZiAocmVmLmN1cnJlbnQgPT09IG51bGwpIHJldHVyblxuXG4gICAgcmVmLmN1cnJlbnQuaW5uZXJIVE1MID0gJydcbiAgICBtYXBSZWYuY3VycmVudCA9IGluaXRhbGl6ZU1hcChyZWYuY3VycmVudCwgZGF0YSlcblxuICAgIG1hcFJlZi5jdXJyZW50LnN2Zy5zZWxlY3RBbGwoJy5kYXRhbWFwcy1zdWJ1bml0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZGF0YSkge1xuICAgICAgdXBkYXRlVXNlclNlbGVjdGlvbihkYXRhLmlkKVxuICAgIH0pO1xuICB9LCBbZGF0YSwgLi4ud2luZG93U2l6ZV0pXG5cbiAgcmV0dXJuIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgPFBhbmVsIC8+XG4gICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJyB9fSByZWY9e3JlZn0+PC9kaXY+XG4gIDwvZGl2PlxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/Map.js\n");

/***/ })

})