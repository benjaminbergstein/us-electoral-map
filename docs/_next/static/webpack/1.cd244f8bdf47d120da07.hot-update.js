webpackHotUpdate_N_E(1,{

/***/ "./lib/Map.js":
/*!********************!*\
  !*** ./lib/Map.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_zoom_pan_pinch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-zoom-pan-pinch */ \"./node_modules/react-zoom-pan-pinch/dist/index.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _DataContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DataContext */ \"./lib/DataContext.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ \"./lib/constants.js\");\n/* harmony import */ var datamaps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! datamaps */ \"./node_modules/datamaps/dist/datamaps.all.js\");\n/* harmony import */ var datamaps__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(datamaps__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _jsxFileName = \"/app/lib/Map.js\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar POPUP_TEMPLATE = function POPUP_TEMPLATE(state, data) {\n  return \"<span style=\\\"position: relative; left: 30px; top: 200px; color: white; font-weight: 900; text-shadow: 0 0 1px #000, 1px 1px 1px #000;\\\">\".concat(state.properties.name, \" (\").concat(data['Electoral Votes'], \")</span>\");\n};\n\n_c = POPUP_TEMPLATE;\n\nvar initalizeMap = function initalizeMap(node, data) {\n  if (window !== undefined) {\n    var map = new datamaps__WEBPACK_IMPORTED_MODULE_7___default.a({\n      element: node,\n      scope: 'usa',\n      data: data,\n      fills: _constants__WEBPACK_IMPORTED_MODULE_6__[\"PossibleFills\"],\n      geographyConfig: {\n        highlightOnHover: true,\n        highlightFillColor: false,\n        highlightBorderColor: \"white\",\n        highlightBorderOpacity: '0.65',\n        highlightBorderWidth: \"4px\",\n        highlightFillOpacity: '0.85',\n        popupTemplate: POPUP_TEMPLATE\n      }\n    });\n    return map;\n  }\n};\n\nvar Panel = function Panel() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    style: {\n      position: 'absolute',\n      top: '0px'\n    }\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Panel, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n\n_c2 = Panel;\n\nvar Container = function Container() {\n  _s2();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_DataContext__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n      data = _useContext.data,\n      windowSize = _useContext.windowSize,\n      updateUserSelection = _useContext.updateUserSelection;\n\n  var ref = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(null);\n  var mapRef = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    if (data === undefined) return;\n    if (ref.current === null) return;\n    ref.current.innerHTML = '';\n    mapRef.current = initalizeMap(ref.current, data);\n    mapRef.current.svg.selectAll('.datamaps-subunit').on('click', function (data) {\n      updateUserSelection(data.id);\n    });\n  }, [data].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(windowSize)));\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    style: {\n      position: 'relative'\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Panel, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      style: {\n        height: '100%'\n      },\n      ref: ref\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 59,\n    columnNumber: 10\n  }, _this);\n};\n\n_s2(Container, \"vRhCfOy3Bw9U4AeNRsmjqyzFNOc=\");\n\n_c3 = Container;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Container);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"POPUP_TEMPLATE\");\n$RefreshReg$(_c2, \"Panel\");\n$RefreshReg$(_c3, \"Container\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL01hcC5qcz9jNTkzIl0sIm5hbWVzIjpbIlBPUFVQX1RFTVBMQVRFIiwic3RhdGUiLCJkYXRhIiwicHJvcGVydGllcyIsIm5hbWUiLCJpbml0YWxpemVNYXAiLCJub2RlIiwid2luZG93IiwidW5kZWZpbmVkIiwibWFwIiwiRGF0YW1hcCIsImVsZW1lbnQiLCJzY29wZSIsImZpbGxzIiwiUG9zc2libGVGaWxscyIsImdlb2dyYXBoeUNvbmZpZyIsImhpZ2hsaWdodE9uSG92ZXIiLCJoaWdobGlnaHRGaWxsQ29sb3IiLCJoaWdobGlnaHRCb3JkZXJDb2xvciIsImhpZ2hsaWdodEJvcmRlck9wYWNpdHkiLCJoaWdobGlnaHRCb3JkZXJXaWR0aCIsImhpZ2hsaWdodEZpbGxPcGFjaXR5IiwicG9wdXBUZW1wbGF0ZSIsIlBhbmVsIiwidXNlU3RhdGUiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJwb3NpdGlvbiIsInRvcCIsIkNvbnRhaW5lciIsInVzZUNvbnRleHQiLCJEYXRhQ29udGV4dCIsIndpbmRvd1NpemUiLCJ1cGRhdGVVc2VyU2VsZWN0aW9uIiwicmVmIiwidXNlUmVmIiwibWFwUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsImlubmVySFRNTCIsInN2ZyIsInNlbGVjdEFsbCIsIm9uIiwiaWQiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLEtBQUQsRUFBUUMsSUFBUjtBQUFBLDRKQUEySkQsS0FBSyxDQUFDRSxVQUFOLENBQWlCQyxJQUE1SyxlQUFxTEYsSUFBSSxDQUFDLGlCQUFELENBQXpMO0FBQUEsQ0FBdkI7O0tBQU1GLGM7O0FBRU4sSUFBTUssWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsSUFBRCxFQUFPSixJQUFQLEVBQWdCO0FBQ25DLE1BQUlLLE1BQU0sS0FBS0MsU0FBZixFQUEwQjtBQUN4QixRQUFNQyxHQUFHLEdBQUcsSUFBSUMsK0NBQUosQ0FBWTtBQUN0QkMsYUFBTyxFQUFFTCxJQURhO0FBRXRCTSxXQUFLLEVBQUUsS0FGZTtBQUd0QlYsVUFBSSxFQUFKQSxJQUhzQjtBQUl0QlcsV0FBSyxFQUFFQyx3REFKZTtBQUt0QkMscUJBQWUsRUFBRTtBQUNmQyx3QkFBZ0IsRUFBRSxJQURIO0FBRWZDLDBCQUFrQixFQUFFLEtBRkw7QUFHZkMsNEJBQW9CLEVBQUUsT0FIUDtBQUlmQyw4QkFBc0IsRUFBRSxNQUpUO0FBS2ZDLDRCQUFvQixFQUFFLEtBTFA7QUFNZkMsNEJBQW9CLEVBQUUsTUFOUDtBQU9mQyxxQkFBYSxFQUFFdEI7QUFQQTtBQUxLLEtBQVosQ0FBWjtBQWdCQSxXQUFPUyxHQUFQO0FBQ0Q7QUFDRixDQXBCRDs7QUFzQkEsSUFBTWMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUNVQyxzREFBUSxDQUFDLEtBQUQsQ0FEbEI7QUFBQSxNQUNYQyxNQURXO0FBQUEsTUFDSEMsU0FERzs7QUFHbEIsc0JBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRUMsY0FBUSxFQUFFLFVBQVo7QUFBd0JDLFNBQUcsRUFBRTtBQUE3QjtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUlELENBUEQ7O0dBQU1MLEs7O01BQUFBLEs7O0FBU04sSUFBTU0sU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLG9CQUM0QkMsd0RBQVUsQ0FBQ0Msb0RBQUQsQ0FEdEM7QUFBQSxNQUNkN0IsSUFEYyxlQUNkQSxJQURjO0FBQUEsTUFDUjhCLFVBRFEsZUFDUkEsVUFEUTtBQUFBLE1BQ0lDLG1CQURKLGVBQ0lBLG1CQURKOztBQUV0QixNQUFNQyxHQUFHLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUFsQjtBQUNBLE1BQU1DLE1BQU0sR0FBR0Qsb0RBQU0sQ0FBQyxJQUFELENBQXJCO0FBRUFFLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUluQyxJQUFJLEtBQUtNLFNBQWIsRUFBd0I7QUFDeEIsUUFBSTBCLEdBQUcsQ0FBQ0ksT0FBSixLQUFnQixJQUFwQixFQUEwQjtBQUUxQkosT0FBRyxDQUFDSSxPQUFKLENBQVlDLFNBQVosR0FBd0IsRUFBeEI7QUFDQUgsVUFBTSxDQUFDRSxPQUFQLEdBQWlCakMsWUFBWSxDQUFDNkIsR0FBRyxDQUFDSSxPQUFMLEVBQWNwQyxJQUFkLENBQTdCO0FBRUFrQyxVQUFNLENBQUNFLE9BQVAsQ0FBZUUsR0FBZixDQUFtQkMsU0FBbkIsQ0FBNkIsbUJBQTdCLEVBQWtEQyxFQUFsRCxDQUFxRCxPQUFyRCxFQUE4RCxVQUFTeEMsSUFBVCxFQUFlO0FBQzNFK0IseUJBQW1CLENBQUMvQixJQUFJLENBQUN5QyxFQUFOLENBQW5CO0FBQ0QsS0FGRDtBQUdELEdBVlEsR0FVTHpDLElBVkssc0dBVUk4QixVQVZKLEdBQVQ7QUFZQSxzQkFBTztBQUFLLFNBQUssRUFBRTtBQUFFTCxjQUFRLEVBQUU7QUFBWixLQUFaO0FBQUEsNEJBQ0wscUVBQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREssZUFFTDtBQUFLLFdBQUssRUFBRTtBQUFFaUIsY0FBTSxFQUFFO0FBQVYsT0FBWjtBQUFnQyxTQUFHLEVBQUVWO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUlELENBckJEOztJQUFNTCxTOztNQUFBQSxTO0FBdUJTQSx3RUFBZiIsImZpbGUiOiIuL2xpYi9NYXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5pbXBvcnQgeyBUcmFuc2Zvcm1XcmFwcGVyLCBUcmFuc2Zvcm1Db21wb25lbnQgfSBmcm9tIFwicmVhY3Qtem9vbS1wYW4tcGluY2hcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRGF0YUNvbnRleHQgZnJvbSAnLi9EYXRhQ29udGV4dCdcbmltcG9ydCB7IFBvc3NpYmxlRmlsbHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmltcG9ydCBEYXRhbWFwIGZyb20gJ2RhdGFtYXBzJ1xuXG5jb25zdCBQT1BVUF9URU1QTEFURSA9IChzdGF0ZSwgZGF0YSkgPT4gYDxzcGFuIHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlOyBsZWZ0OiAzMHB4OyB0b3A6IDIwMHB4OyBjb2xvcjogd2hpdGU7IGZvbnQtd2VpZ2h0OiA5MDA7IHRleHQtc2hhZG93OiAwIDAgMXB4ICMwMDAsIDFweCAxcHggMXB4ICMwMDA7XCI+JHtzdGF0ZS5wcm9wZXJ0aWVzLm5hbWV9ICgke2RhdGFbJ0VsZWN0b3JhbCBWb3RlcyddfSk8L3NwYW4+YDtcblxuY29uc3QgaW5pdGFsaXplTWFwID0gKG5vZGUsIGRhdGEpID0+IHtcbiAgaWYgKHdpbmRvdyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgbWFwID0gbmV3IERhdGFtYXAoe1xuICAgICAgZWxlbWVudDogbm9kZSxcbiAgICAgIHNjb3BlOiAndXNhJyxcbiAgICAgIGRhdGEsXG4gICAgICBmaWxsczogUG9zc2libGVGaWxscyxcbiAgICAgIGdlb2dyYXBoeUNvbmZpZzoge1xuICAgICAgICBoaWdobGlnaHRPbkhvdmVyOiB0cnVlLFxuICAgICAgICBoaWdobGlnaHRGaWxsQ29sb3I6IGZhbHNlLFxuICAgICAgICBoaWdobGlnaHRCb3JkZXJDb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICBoaWdobGlnaHRCb3JkZXJPcGFjaXR5OiAnMC42NScsXG4gICAgICAgIGhpZ2hsaWdodEJvcmRlcldpZHRoOiBcIjRweFwiLFxuICAgICAgICBoaWdobGlnaHRGaWxsT3BhY2l0eTogJzAuODUnLFxuICAgICAgICBwb3B1cFRlbXBsYXRlOiBQT1BVUF9URU1QTEFURSxcbiAgICAgIH0sXG4gICAgfSlcblxuICAgIHJldHVybiBtYXBcbiAgfVxufVxuXG5jb25zdCBQYW5lbCA9ICgpID0+IHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAnMHB4JyB9fT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBDb250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgZGF0YSwgd2luZG93U2l6ZSwgdXBkYXRlVXNlclNlbGVjdGlvbiB9ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dClcbiAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpXG4gIGNvbnN0IG1hcFJlZiA9IHVzZVJlZihudWxsKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuXG4gICAgaWYgKHJlZi5jdXJyZW50ID09PSBudWxsKSByZXR1cm5cblxuICAgIHJlZi5jdXJyZW50LmlubmVySFRNTCA9ICcnXG4gICAgbWFwUmVmLmN1cnJlbnQgPSBpbml0YWxpemVNYXAocmVmLmN1cnJlbnQsIGRhdGEpXG5cbiAgICBtYXBSZWYuY3VycmVudC5zdmcuc2VsZWN0QWxsKCcuZGF0YW1hcHMtc3VidW5pdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIHVwZGF0ZVVzZXJTZWxlY3Rpb24oZGF0YS5pZClcbiAgICB9KTtcbiAgfSwgW2RhdGEsIC4uLndpbmRvd1NpemVdKVxuXG4gIHJldHVybiA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgIDxQYW5lbCAvPlxuICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScgfX0gcmVmPXtyZWZ9PjwvZGl2PlxuICA8L2Rpdj5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/Map.js\n");

/***/ })

})