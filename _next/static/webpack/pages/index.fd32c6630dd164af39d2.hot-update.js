webpackHotUpdate_N_E("pages/index",{

/***/ "./lib/DataContext.js":
/*!****************************!*\
  !*** ./lib/DataContext.js ***!
  \****************************/
/*! exports provided: DataProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DataProvider\", function() { return DataProvider; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _jsxFileName = \"/app/lib/DataContext.js\",\n    _s = $RefreshSig$(),\n    _this = undefined,\n    _s2 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar DataContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext({});\n\nvar useData = function useData() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(undefined),\n      data = _useState[0],\n      setData = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({}),\n      userSelections = _useState2[0],\n      setUserSelections = _useState2[1];\n\n  if (false) {}\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()('results/president/2017.json').then(function (res) {\n      return res.json();\n    }).then(function (res) {\n      setData(res);\n    });\n  }, []);\n  if (typeof data === \"undefined\") return {\n    loading: true\n  };\n\n  var updateUserSelection = function updateUserSelection(stateName, currentFill) {\n    var state = data[stateName];\n    setUserSelections(_objectSpread(_objectSpread({}, userSelections), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, stateName, _objectSpread(_objectSpread({}, state), {}, {\n      fillKey: (currentFill + 1) % 3\n    }))));\n  };\n\n  return {\n    data: _objectSpread(_objectSpread({}, data), userSelections),\n    updateUserSelection: updateUserSelection,\n    loading: false\n  };\n};\n\n_s(useData, \"B80VApirPCokQ2vTc4/wtAn4Fhg=\");\n\nvar DataProvider = function DataProvider(_ref) {\n  _s2();\n\n  var children = _ref.children;\n  var data = useData();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(DataContext.Provider, {\n    value: data,\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 10\n  }, _this);\n};\n\n_s2(DataProvider, \"YnzXR8fPhsYQOtPUC4zYRXREqzc=\", false, function () {\n  return [useData];\n});\n\n_c = DataProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataContext);\n\nvar _c;\n\n$RefreshReg$(_c, \"DataProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL0RhdGFDb250ZXh0LmpzP2JiMGUiXSwibmFtZXMiOlsiRGF0YUNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VEYXRhIiwidXNlU3RhdGUiLCJ1bmRlZmluZWQiLCJkYXRhIiwic2V0RGF0YSIsInVzZXJTZWxlY3Rpb25zIiwic2V0VXNlclNlbGVjdGlvbnMiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwibG9hZGluZyIsInVwZGF0ZVVzZXJTZWxlY3Rpb24iLCJzdGF0ZU5hbWUiLCJjdXJyZW50RmlsbCIsInN0YXRlIiwiZmlsbEtleSIsIkRhdGFQcm92aWRlciIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxnQkFBR0MsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixFQUFwQixDQUFwQjs7QUFFQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQUEsa0JBQ0lDLHNEQUFRLENBQUNDLFNBQUQsQ0FEWjtBQUFBLE1BQ2JDLElBRGE7QUFBQSxNQUNQQyxPQURPOztBQUFBLG1CQUV3Qkgsc0RBQVEsQ0FBQyxFQUFELENBRmhDO0FBQUEsTUFFYkksY0FGYTtBQUFBLE1BRUdDLGlCQUZIOztBQUlwQixhQUFtQztBQUVuQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLDZEQUFLLENBQUMsNkJBQUQsQ0FBTCxDQUNHQyxJQURILENBQ1EsVUFBQ0MsR0FBRDtBQUFBLGFBQVNBLEdBQUcsQ0FBQ0MsSUFBSixFQUFUO0FBQUEsS0FEUixFQUVHRixJQUZILENBRVEsVUFBQ0MsR0FBRCxFQUFTO0FBQUVOLGFBQU8sQ0FBQ00sR0FBRCxDQUFQO0FBQWMsS0FGakM7QUFHRCxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUEsTUFBSSxPQUFPUCxJQUFQLEtBQWdCLFdBQXBCLEVBQWlDLE9BQU87QUFBRVMsV0FBTyxFQUFFO0FBQVgsR0FBUDs7QUFFakMsTUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDQyxTQUFELEVBQVlDLFdBQVosRUFBNEI7QUFDdEQsUUFBTUMsS0FBSyxHQUFHYixJQUFJLENBQUNXLFNBQUQsQ0FBbEI7QUFFQVIscUJBQWlCLGlDQUNaRCxjQURZLHFHQUVkUyxTQUZjLGtDQUdWRSxLQUhVO0FBSWJDLGFBQU8sRUFBRSxDQUFDRixXQUFXLEdBQUcsQ0FBZixJQUFvQjtBQUpoQixTQUFqQjtBQU9ELEdBVkQ7O0FBWUEsU0FBTztBQUNMWixRQUFJLGtDQUNDQSxJQURELEdBRUNFLGNBRkQsQ0FEQztBQUtMUSx1QkFBbUIsRUFBbkJBLG1CQUxLO0FBTUxELFdBQU8sRUFBRTtBQU5KLEdBQVA7QUFRRCxDQWxDRDs7R0FBTVosTzs7QUFvQ0MsSUFBTWtCLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQzVDLE1BQU1oQixJQUFJLEdBQUdILE9BQU8sRUFBcEI7QUFFQSxzQkFBTyxxRUFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUVHLElBQTdCO0FBQUEsY0FDSmdCO0FBREk7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBR0QsQ0FOTTs7SUFBTUQsWTtVQUNFbEIsTzs7O0tBREZrQixZO0FBU0VyQiwwRUFBZiIsImZpbGUiOiIuL2xpYi9EYXRhQ29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gIGZyb20gJ3JlYWN0JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5cbmNvbnN0IERhdGFDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7fSlcblxuY29uc3QgdXNlRGF0YSA9ICgpID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUodW5kZWZpbmVkKVxuICBjb25zdCBbdXNlclNlbGVjdGlvbnMsIHNldFVzZXJTZWxlY3Rpb25zXSA9IHVzZVN0YXRlKHt9KVxuXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4ge31cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKCdyZXN1bHRzL3ByZXNpZGVudC8yMDE3Lmpzb24nKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChyZXMpID0+IHsgc2V0RGF0YShyZXMpIH0pXG4gIH0sIFtdKVxuXG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIHsgbG9hZGluZzogdHJ1ZSB9XG5cbiAgY29uc3QgdXBkYXRlVXNlclNlbGVjdGlvbiA9IChzdGF0ZU5hbWUsIGN1cnJlbnRGaWxsKSA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBkYXRhW3N0YXRlTmFtZV1cblxuICAgIHNldFVzZXJTZWxlY3Rpb25zKHtcbiAgICAgIC4uLnVzZXJTZWxlY3Rpb25zLFxuICAgICAgW3N0YXRlTmFtZV06IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGZpbGxLZXk6IChjdXJyZW50RmlsbCArIDEpICUgM1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGRhdGE6IHtcbiAgICAgIC4uLmRhdGEsXG4gICAgICAuLi51c2VyU2VsZWN0aW9ucyxcbiAgICB9LFxuICAgIHVwZGF0ZVVzZXJTZWxlY3Rpb24sXG4gICAgbG9hZGluZzogZmFsc2UsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IERhdGFQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgZGF0YSA9IHVzZURhdGEoKVxuXG4gIHJldHVybiA8RGF0YUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2RhdGF9PlxuICAgIHtjaGlsZHJlbn1cbiAgPC9EYXRhQ29udGV4dC5Qcm92aWRlcj5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBEYXRhQ29udGV4dFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/DataContext.js\n");

/***/ })

})