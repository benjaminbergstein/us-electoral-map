webpackHotUpdate_N_E("pages/index",{

/***/ "./lib/DataContext.js":
/*!****************************!*\
  !*** ./lib/DataContext.js ***!
  \****************************/
/*! exports provided: DataProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DataProvider\", function() { return DataProvider; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _jsxFileName = \"/app/lib/DataContext.js\",\n    _s = $RefreshSig$(),\n    _this = undefined,\n    _s2 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar DataContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext({});\n\nvar useData = function useData() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(undefined),\n      data = _useState[0],\n      setData = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({}),\n      userSelections = _useState2[0],\n      setUserSelections = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      windowSize = _useState3[0],\n      setWindowSize = _useState3[1];\n\n  if (false) {}\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()('results/president/2017.json').then(function (res) {\n      return res.json();\n    }).then(function (res) {\n      setData(res);\n    });\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var listener = function listener() {\n      setWindowSize([window.innerWidth, window.innerHeight]);\n    };\n\n    window.addEventListener('resize', listener);\n    return function () {\n      window.removeEventListener('resize', listener);\n    };\n  }, []);\n  if (typeof data === \"undefined\") return {\n    loading: true\n  };\n\n  var dataWithUserSelections = _objectSpread(_objectSpread({}, data), userSelections);\n\n  var totals = dataWithUserSelections.reduce(function () {}, {\n    gop: 0,\n    dem: 0,\n    tossup: 0\n  });\n\n  var updateUserSelection = function updateUserSelection(stateName) {\n    var state = dataWithUserSelections[stateName];\n    setUserSelections(_objectSpread(_objectSpread({}, userSelections), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, stateName, _objectSpread(_objectSpread({}, state), {}, {\n      fillKey: (state.fillKey + 1) % 3 + 1\n    }))));\n  };\n\n  return {\n    windowSize: windowSize,\n    data: dataWithUserSelections,\n    updateUserSelection: updateUserSelection,\n    loading: false\n  };\n};\n\n_s(useData, \"iM7SUi3Km6O1psXqRzra83yMBRQ=\");\n\nvar DataProvider = function DataProvider(_ref) {\n  _s2();\n\n  var children = _ref.children;\n  var data = useData();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(DataContext.Provider, {\n    value: data,\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 65,\n    columnNumber: 10\n  }, _this);\n};\n\n_s2(DataProvider, \"YnzXR8fPhsYQOtPUC4zYRXREqzc=\", false, function () {\n  return [useData];\n});\n\n_c = DataProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataContext);\n\nvar _c;\n\n$RefreshReg$(_c, \"DataProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL0RhdGFDb250ZXh0LmpzP2JiMGUiXSwibmFtZXMiOlsiRGF0YUNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VEYXRhIiwidXNlU3RhdGUiLCJ1bmRlZmluZWQiLCJkYXRhIiwic2V0RGF0YSIsInVzZXJTZWxlY3Rpb25zIiwic2V0VXNlclNlbGVjdGlvbnMiLCJ3aW5kb3dTaXplIiwic2V0V2luZG93U2l6ZSIsInVzZUVmZmVjdCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJsaXN0ZW5lciIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibG9hZGluZyIsImRhdGFXaXRoVXNlclNlbGVjdGlvbnMiLCJ0b3RhbHMiLCJyZWR1Y2UiLCJnb3AiLCJkZW0iLCJ0b3NzdXAiLCJ1cGRhdGVVc2VyU2VsZWN0aW9uIiwic3RhdGVOYW1lIiwic3RhdGUiLCJmaWxsS2V5IiwiRGF0YVByb3ZpZGVyIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLGdCQUFHQyw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLEVBQXBCLENBQXBCOztBQUVBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFBQSxrQkFDSUMsc0RBQVEsQ0FBQ0MsU0FBRCxDQURaO0FBQUEsTUFDYkMsSUFEYTtBQUFBLE1BQ1BDLE9BRE87O0FBQUEsbUJBRXdCSCxzREFBUSxDQUFDLEVBQUQsQ0FGaEM7QUFBQSxNQUViSSxjQUZhO0FBQUEsTUFFR0MsaUJBRkg7O0FBQUEsbUJBR2dCTCxzREFBUSxDQUFDLEVBQUQsQ0FIeEI7QUFBQSxNQUdiTSxVQUhhO0FBQUEsTUFHREMsYUFIQzs7QUFLcEIsYUFBbUM7QUFFbkNDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyw2REFBSyxDQUFDLDZCQUFELENBQUwsQ0FDR0MsSUFESCxDQUNRLFVBQUNDLEdBQUQ7QUFBQSxhQUFTQSxHQUFHLENBQUNDLElBQUosRUFBVDtBQUFBLEtBRFIsRUFFR0YsSUFGSCxDQUVRLFVBQUNDLEdBQUQsRUFBUztBQUFFUixhQUFPLENBQUNRLEdBQUQsQ0FBUDtBQUFjLEtBRmpDO0FBR0QsR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQU1BSCx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNSyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCTixtQkFBYSxDQUFDLENBQUNPLE1BQU0sQ0FBQ0MsVUFBUixFQUFvQkQsTUFBTSxDQUFDRSxXQUEzQixDQUFELENBQWI7QUFDRCxLQUZEOztBQUdBRixVQUFNLENBQUNHLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDSixRQUFsQztBQUNBLFdBQU8sWUFBTTtBQUNYQyxZQUFNLENBQUNJLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDTCxRQUFyQztBQUNELEtBRkQ7QUFHRCxHQVJRLEVBUU4sRUFSTSxDQUFUO0FBVUEsTUFBSSxPQUFPWCxJQUFQLEtBQWdCLFdBQXBCLEVBQWlDLE9BQU87QUFBRWlCLFdBQU8sRUFBRTtBQUFYLEdBQVA7O0FBRWpDLE1BQU1DLHNCQUFzQixtQ0FDdkJsQixJQUR1QixHQUV2QkUsY0FGdUIsQ0FBNUI7O0FBS0EsTUFBTWlCLE1BQU0sR0FBR0Qsc0JBQXNCLENBQUNFLE1BQXZCLENBQThCLFlBQU0sQ0FBRSxDQUF0QyxFQUF3QztBQUNyREMsT0FBRyxFQUFFLENBRGdEO0FBRXJEQyxPQUFHLEVBQUUsQ0FGZ0Q7QUFHckRDLFVBQU0sRUFBRTtBQUg2QyxHQUF4QyxDQUFmOztBQU1BLE1BQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsU0FBRCxFQUFlO0FBQ3pDLFFBQU1DLEtBQUssR0FBR1Isc0JBQXNCLENBQUNPLFNBQUQsQ0FBcEM7QUFFQXRCLHFCQUFpQixpQ0FDWkQsY0FEWSxxR0FFZHVCLFNBRmMsa0NBR1ZDLEtBSFU7QUFJYkMsYUFBTyxFQUFHLENBQUNELEtBQUssQ0FBQ0MsT0FBTixHQUFnQixDQUFqQixJQUFzQixDQUF2QixHQUE0QjtBQUp4QixTQUFqQjtBQU9ELEdBVkQ7O0FBWUEsU0FBTztBQUNMdkIsY0FBVSxFQUFWQSxVQURLO0FBRUxKLFFBQUksRUFBRWtCLHNCQUZEO0FBR0xNLHVCQUFtQixFQUFuQkEsbUJBSEs7QUFJTFAsV0FBTyxFQUFFO0FBSkosR0FBUDtBQU1ELENBdEREOztHQUFNcEIsTzs7QUF3REMsSUFBTStCLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQzVDLE1BQU03QixJQUFJLEdBQUdILE9BQU8sRUFBcEI7QUFFQSxzQkFBTyxxRUFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUVHLElBQTdCO0FBQUEsY0FDSjZCO0FBREk7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBR0QsQ0FOTTs7SUFBTUQsWTtVQUNFL0IsTzs7O0tBREYrQixZO0FBU0VsQywwRUFBZiIsImZpbGUiOiIuL2xpYi9EYXRhQ29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlTGF5b3V0RWZmZWN0LCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSAgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcblxuY29uc3QgRGF0YUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KVxuXG5jb25zdCB1c2VEYXRhID0gKCkgPT4ge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpXG4gIGNvbnN0IFt1c2VyU2VsZWN0aW9ucywgc2V0VXNlclNlbGVjdGlvbnNdID0gdXNlU3RhdGUoe30pXG4gIGNvbnN0IFt3aW5kb3dTaXplLCBzZXRXaW5kb3dTaXplXSA9IHVzZVN0YXRlKFtdKVxuXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4ge31cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKCdyZXN1bHRzL3ByZXNpZGVudC8yMDE3Lmpzb24nKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChyZXMpID0+IHsgc2V0RGF0YShyZXMpIH0pXG4gIH0sIFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICBzZXRXaW5kb3dTaXplKFt3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0XSlcbiAgICB9XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGxpc3RlbmVyKVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgbGlzdGVuZXIpXG4gICAgfVxuICB9LCBbXSlcblxuICBpZiAodHlwZW9mIGRhdGEgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybiB7IGxvYWRpbmc6IHRydWUgfVxuXG4gIGNvbnN0IGRhdGFXaXRoVXNlclNlbGVjdGlvbnMgPSB7XG4gICAgLi4uZGF0YSxcbiAgICAuLi51c2VyU2VsZWN0aW9ucyxcbiAgfVxuXG4gIGNvbnN0IHRvdGFscyA9IGRhdGFXaXRoVXNlclNlbGVjdGlvbnMucmVkdWNlKCgpID0+IHt9LCB7XG4gICAgZ29wOiAwLFxuICAgIGRlbTogMCxcbiAgICB0b3NzdXA6IDAsXG4gIH0pXG5cbiAgY29uc3QgdXBkYXRlVXNlclNlbGVjdGlvbiA9IChzdGF0ZU5hbWUpID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGRhdGFXaXRoVXNlclNlbGVjdGlvbnNbc3RhdGVOYW1lXVxuXG4gICAgc2V0VXNlclNlbGVjdGlvbnMoe1xuICAgICAgLi4udXNlclNlbGVjdGlvbnMsXG4gICAgICBbc3RhdGVOYW1lXToge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmlsbEtleTogKChzdGF0ZS5maWxsS2V5ICsgMSkgJSAzKSArIDEsXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2luZG93U2l6ZSxcbiAgICBkYXRhOiBkYXRhV2l0aFVzZXJTZWxlY3Rpb25zLFxuICAgIHVwZGF0ZVVzZXJTZWxlY3Rpb24sXG4gICAgbG9hZGluZzogZmFsc2UsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IERhdGFQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgZGF0YSA9IHVzZURhdGEoKVxuXG4gIHJldHVybiA8RGF0YUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2RhdGF9PlxuICAgIHtjaGlsZHJlbn1cbiAgPC9EYXRhQ29udGV4dC5Qcm92aWRlcj5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBEYXRhQ29udGV4dFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/DataContext.js\n");

/***/ })

})