webpackHotUpdate_N_E("pages/index",{

/***/ "./lib/DataContext.js":
/*!****************************!*\
  !*** ./lib/DataContext.js ***!
  \****************************/
/*! exports provided: DataProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DataProvider\", function() { return DataProvider; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _jsxFileName = \"/app/lib/DataContext.js\",\n    _s = $RefreshSig$(),\n    _this = undefined,\n    _s2 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar DataContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext({});\n\nvar useData = function useData() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(undefined),\n      data = _useState[0],\n      setData = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({}),\n      userSelections = _useState2[0],\n      setUserSelections = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      windowSize = _useState3[0],\n      setWindowSize = _useState3[1];\n\n  if (false) {}\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()('results/president/2017.json').then(function (res) {\n      return res.json();\n    }).then(function (res) {\n      setData(res);\n    });\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var listener = function listener() {\n      setWindowSize([window.innerWidth, window.innerHeight]);\n    };\n\n    window.addEventListener('resize', listener);\n    return function () {\n      window.removeEventListener('resize', listener);\n    };\n  }, []);\n  if (typeof data === \"undefined\") return {\n    loading: true\n  };\n\n  var calculatedData = _objectSpread(_objectSpread({}, data), userSelections);\n\n  var updateUserSelection = function updateUserSelection(stateName) {\n    var state = calculatedData[stateName];\n    console.log((state.fillKey + 1) % 3) + 1;\n    setUserSelections(_objectSpread(_objectSpread({}, userSelections), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, stateName, _objectSpread(_objectSpread({}, state), {}, {\n      fillKey: (state.fillKey + 2) % 3\n    }))));\n  };\n\n  return {\n    windowSize: windowSize,\n    data: calculatedData,\n    updateUserSelection: updateUserSelection,\n    loading: false\n  };\n};\n\n_s(useData, \"iM7SUi3Km6O1psXqRzra83yMBRQ=\");\n\nvar DataProvider = function DataProvider(_ref) {\n  _s2();\n\n  var children = _ref.children;\n  var data = useData();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(DataContext.Provider, {\n    value: data,\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 60,\n    columnNumber: 10\n  }, _this);\n};\n\n_s2(DataProvider, \"YnzXR8fPhsYQOtPUC4zYRXREqzc=\", false, function () {\n  return [useData];\n});\n\n_c = DataProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataContext);\n\nvar _c;\n\n$RefreshReg$(_c, \"DataProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL0RhdGFDb250ZXh0LmpzP2JiMGUiXSwibmFtZXMiOlsiRGF0YUNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VEYXRhIiwidXNlU3RhdGUiLCJ1bmRlZmluZWQiLCJkYXRhIiwic2V0RGF0YSIsInVzZXJTZWxlY3Rpb25zIiwic2V0VXNlclNlbGVjdGlvbnMiLCJ3aW5kb3dTaXplIiwic2V0V2luZG93U2l6ZSIsInVzZUVmZmVjdCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJsaXN0ZW5lciIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibG9hZGluZyIsImNhbGN1bGF0ZWREYXRhIiwidXBkYXRlVXNlclNlbGVjdGlvbiIsInN0YXRlTmFtZSIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsImZpbGxLZXkiLCJEYXRhUHJvdmlkZXIiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLFdBQVcsZ0JBQUdDLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsRUFBcEIsQ0FBcEI7O0FBRUEsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUFBLGtCQUNJQyxzREFBUSxDQUFDQyxTQUFELENBRFo7QUFBQSxNQUNiQyxJQURhO0FBQUEsTUFDUEMsT0FETzs7QUFBQSxtQkFFd0JILHNEQUFRLENBQUMsRUFBRCxDQUZoQztBQUFBLE1BRWJJLGNBRmE7QUFBQSxNQUVHQyxpQkFGSDs7QUFBQSxtQkFHZ0JMLHNEQUFRLENBQUMsRUFBRCxDQUh4QjtBQUFBLE1BR2JNLFVBSGE7QUFBQSxNQUdEQyxhQUhDOztBQUtwQixhQUFtQztBQUVuQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLDZEQUFLLENBQUMsNkJBQUQsQ0FBTCxDQUNHQyxJQURILENBQ1EsVUFBQ0MsR0FBRDtBQUFBLGFBQVNBLEdBQUcsQ0FBQ0MsSUFBSixFQUFUO0FBQUEsS0FEUixFQUVHRixJQUZILENBRVEsVUFBQ0MsR0FBRCxFQUFTO0FBQUVSLGFBQU8sQ0FBQ1EsR0FBRCxDQUFQO0FBQWMsS0FGakM7QUFHRCxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUFILHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1LLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckJOLG1CQUFhLENBQUMsQ0FBQ08sTUFBTSxDQUFDQyxVQUFSLEVBQW9CRCxNQUFNLENBQUNFLFdBQTNCLENBQUQsQ0FBYjtBQUNELEtBRkQ7O0FBR0FGLFVBQU0sQ0FBQ0csZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NKLFFBQWxDO0FBQ0EsV0FBTyxZQUFNO0FBQ1hDLFlBQU0sQ0FBQ0ksbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNMLFFBQXJDO0FBQ0QsS0FGRDtBQUdELEdBUlEsRUFRTixFQVJNLENBQVQ7QUFVQSxNQUFJLE9BQU9YLElBQVAsS0FBZ0IsV0FBcEIsRUFBaUMsT0FBTztBQUFFaUIsV0FBTyxFQUFFO0FBQVgsR0FBUDs7QUFFakMsTUFBTUMsY0FBYyxtQ0FDZmxCLElBRGUsR0FFZkUsY0FGZSxDQUFwQjs7QUFLQSxNQUFNaUIsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDQyxTQUFELEVBQWU7QUFDekMsUUFBTUMsS0FBSyxHQUFHSCxjQUFjLENBQUNFLFNBQUQsQ0FBNUI7QUFFQUUsV0FBTyxDQUFDQyxHQUFSLENBQVksQ0FBQ0YsS0FBSyxDQUFDRyxPQUFOLEdBQWdCLENBQWpCLElBQXNCLENBQWxDLElBQXVDLENBQXZDO0FBQ0FyQixxQkFBaUIsaUNBQ1pELGNBRFkscUdBRWRrQixTQUZjLGtDQUdWQyxLQUhVO0FBSWJHLGFBQU8sRUFBRSxDQUFDSCxLQUFLLENBQUNHLE9BQU4sR0FBZ0IsQ0FBakIsSUFBc0I7QUFKbEIsU0FBakI7QUFPRCxHQVhEOztBQWFBLFNBQU87QUFDTHBCLGNBQVUsRUFBVkEsVUFESztBQUVMSixRQUFJLEVBQUVrQixjQUZEO0FBR0xDLHVCQUFtQixFQUFuQkEsbUJBSEs7QUFJTEYsV0FBTyxFQUFFO0FBSkosR0FBUDtBQU1ELENBakREOztHQUFNcEIsTzs7QUFtREMsSUFBTTRCLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQzVDLE1BQU0xQixJQUFJLEdBQUdILE9BQU8sRUFBcEI7QUFFQSxzQkFBTyxxRUFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUVHLElBQTdCO0FBQUEsY0FDSjBCO0FBREk7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBR0QsQ0FOTTs7SUFBTUQsWTtVQUNFNUIsTzs7O0tBREY0QixZO0FBU0UvQiwwRUFBZiIsImZpbGUiOiIuL2xpYi9EYXRhQ29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlTGF5b3V0RWZmZWN0LCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSAgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcblxuY29uc3QgRGF0YUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KVxuXG5jb25zdCB1c2VEYXRhID0gKCkgPT4ge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpXG4gIGNvbnN0IFt1c2VyU2VsZWN0aW9ucywgc2V0VXNlclNlbGVjdGlvbnNdID0gdXNlU3RhdGUoe30pXG4gIGNvbnN0IFt3aW5kb3dTaXplLCBzZXRXaW5kb3dTaXplXSA9IHVzZVN0YXRlKFtdKVxuXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4ge31cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKCdyZXN1bHRzL3ByZXNpZGVudC8yMDE3Lmpzb24nKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChyZXMpID0+IHsgc2V0RGF0YShyZXMpIH0pXG4gIH0sIFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICBzZXRXaW5kb3dTaXplKFt3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0XSlcbiAgICB9XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGxpc3RlbmVyKVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgbGlzdGVuZXIpXG4gICAgfVxuICB9LCBbXSlcblxuICBpZiAodHlwZW9mIGRhdGEgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybiB7IGxvYWRpbmc6IHRydWUgfVxuXG4gIGNvbnN0IGNhbGN1bGF0ZWREYXRhID0ge1xuICAgIC4uLmRhdGEsXG4gICAgLi4udXNlclNlbGVjdGlvbnMsXG4gIH1cblxuICBjb25zdCB1cGRhdGVVc2VyU2VsZWN0aW9uID0gKHN0YXRlTmFtZSkgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gY2FsY3VsYXRlZERhdGFbc3RhdGVOYW1lXVxuXG4gICAgY29uc29sZS5sb2coKHN0YXRlLmZpbGxLZXkgKyAxKSAlIDMpICsgMVxuICAgIHNldFVzZXJTZWxlY3Rpb25zKHtcbiAgICAgIC4uLnVzZXJTZWxlY3Rpb25zLFxuICAgICAgW3N0YXRlTmFtZV06IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGZpbGxLZXk6IChzdGF0ZS5maWxsS2V5ICsgMikgJSAzLFxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdpbmRvd1NpemUsXG4gICAgZGF0YTogY2FsY3VsYXRlZERhdGEsXG4gICAgdXBkYXRlVXNlclNlbGVjdGlvbixcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgRGF0YVByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBkYXRhID0gdXNlRGF0YSgpXG5cbiAgcmV0dXJuIDxEYXRhQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17ZGF0YX0+XG4gICAge2NoaWxkcmVufVxuICA8L0RhdGFDb250ZXh0LlByb3ZpZGVyPlxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IERhdGFDb250ZXh0XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/DataContext.js\n");

/***/ })

})