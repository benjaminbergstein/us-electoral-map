webpackHotUpdate_N_E("pages/index",{

/***/ "./lib/DataContext.js":
/*!****************************!*\
  !*** ./lib/DataContext.js ***!
  \****************************/
/*! exports provided: DataProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DataProvider\", function() { return DataProvider; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\nvar _jsxFileName = \"/app/lib/DataContext.js\",\n    _s = $RefreshSig$(),\n    _this = undefined,\n    _s2 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar DataContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createContext({});\nvar initialUserSelections = false ? undefined : JSON.parse(window.localStorage.getItem('uselectoralmap')) || {};\n\nvar useData = function useData() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(undefined),\n      data = _useState[0],\n      setData = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(initialUserSelections),\n      userSelections = _useState2[0],\n      setUserSelections = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      windowSize = _useState3[0],\n      setWindowSize = _useState3[1];\n\n  if (false) {}\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('results/president/2017.json').then(function (res) {\n      return res.json();\n    }).then(function (res) {\n      setData(res);\n    });\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var listener = function listener() {\n      setWindowSize([window.innerWidth, window.innerHeight]);\n    };\n\n    window.addEventListener('resize', listener);\n    return function () {\n      window.removeEventListener('resize', listener);\n    };\n  }, []);\n  if (typeof data === \"undefined\") return {\n    loading: true\n  };\n\n  var dataWithUserSelections = _objectSpread(_objectSpread({}, data), userSelections);\n\n  var totals = Object.entries(dataWithUserSelections).reduce(function (acc, _ref) {\n    var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, 2),\n        stateName = _ref2[0],\n        data = _ref2[1];\n\n    var fillKey = data.fillKey;\n    var electoralVotes = data['Electoral Votes'];\n    var group = fillKey === 1 ? 'neutral' : fillKey === 2 ? 'dems' : 'GOP';\n    return _objectSpread(_objectSpread({}, acc), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, group, acc[group] + electoralVotes));\n  }, {\n    GOP: 0,\n    dems: 0,\n    neutral: 0\n  });\n\n  var updateUserSelection = function updateUserSelection(stateName) {\n    var state = dataWithUserSelections[stateName];\n\n    var updatedUserSelections = _objectSpread(_objectSpread({}, userSelections), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, stateName, _objectSpread(_objectSpread({}, state), {}, {\n      fillKey: (state.fillKey + 1) % 3 + 1\n    })));\n\n    window.localStorage.setItem('uselectoralmap', JSON.stringify(updatedUserSelections));\n    setUserSelections(updatedUserSelections);\n  };\n\n  var resetUserSelections = function resetUserSelections() {\n    window.localStorage.setItem('uselectoralmap', JSON.stringify({}));\n    setUserSelections({});\n  };\n\n  return {\n    totals: totals,\n    windowSize: windowSize,\n    data: dataWithUserSelections,\n    updateUserSelection: updateUserSelection,\n    loading: false,\n    resetUserSelections: resetUserSelections\n  };\n};\n\n_s(useData, \"KEB4Iv+9XBrfftDkZKzo5lOvfnE=\");\n\nvar DataProvider = function DataProvider(_ref3) {\n  _s2();\n\n  var children = _ref3.children;\n  var data = useData();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(DataContext.Provider, {\n    value: data,\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 90,\n    columnNumber: 10\n  }, _this);\n};\n\n_s2(DataProvider, \"YnzXR8fPhsYQOtPUC4zYRXREqzc=\", false, function () {\n  return [useData];\n});\n\n_c = DataProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataContext);\n\nvar _c;\n\n$RefreshReg$(_c, \"DataProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL0RhdGFDb250ZXh0LmpzP2JiMGUiXSwibmFtZXMiOlsiRGF0YUNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJpbml0aWFsVXNlclNlbGVjdGlvbnMiLCJKU09OIiwicGFyc2UiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidXNlRGF0YSIsInVzZVN0YXRlIiwidW5kZWZpbmVkIiwiZGF0YSIsInNldERhdGEiLCJ1c2VyU2VsZWN0aW9ucyIsInNldFVzZXJTZWxlY3Rpb25zIiwid2luZG93U2l6ZSIsInNldFdpbmRvd1NpemUiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwibGlzdGVuZXIiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImxvYWRpbmciLCJkYXRhV2l0aFVzZXJTZWxlY3Rpb25zIiwidG90YWxzIiwiT2JqZWN0IiwiZW50cmllcyIsInJlZHVjZSIsImFjYyIsInN0YXRlTmFtZSIsImZpbGxLZXkiLCJlbGVjdG9yYWxWb3RlcyIsImdyb3VwIiwiR09QIiwiZGVtcyIsIm5ldXRyYWwiLCJ1cGRhdGVVc2VyU2VsZWN0aW9uIiwic3RhdGUiLCJ1cGRhdGVkVXNlclNlbGVjdGlvbnMiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwicmVzZXRVc2VyU2VsZWN0aW9ucyIsIkRhdGFQcm92aWRlciIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLGdCQUFHQyw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLEVBQXBCLENBQXBCO0FBRUEsSUFBTUMscUJBQXFCLEdBQUcsUUFBZ0MsU0FBaEMsR0FBcUNDLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxNQUFNLENBQUNDLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLGdC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QSxtQkFBc0IsR0FBTTtBQUNoQ3pDLFVBQU0sQ0FBQ0MsWUFBUCxDQUFvQnNDLE9BQXBCLENBQTRCLGdCQUE1QixFQUE4Q3pDLElBQUksQ0FBQzBDLFNBQUwsQ0FBZSxFQUFmLENBQTlDO0FBQ0EvQixxQkFBaUIsQ0FBQyxFQUFELENBQWpCO0FBQ0QsR0FIRDs7QUFLQSxTQUFPO0FBQ0xlLFVBQU0sRUFBTkEsTUFESztBQUVMZCxjQUFVLEVBQVZBLFVBRks7QUFHTEosUUFBSSxFQUFFaUIsc0JBSEQ7QUFJTGEsdUJBQW1CLEVBQW5CQSxtQkFKSztBQUtMZCxXQUFPLEVBQUUsS0FMSjtBQU1MbUIsdUJBQW1CLEVBQW5CQTtBQU5LLEdBQVA7QUFRRCxDQTdFRDs7R0FBTXRDLE87O0FBK0VDLElBQU11QyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxRQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsU0FBZkEsUUFBZTtBQUM1QyxNQUFNckMsSUFBSSxHQUFHSCxPQUFPLEVBQXBCO0FBRUEsc0JBQU8scUVBQUMsV0FBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFFRyxJQUE3QjtBQUFBLGNBQ0pxQztBQURJO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUdELENBTk07O0lBQU1ELFk7VUFDRXZDLE87OztLQURGdUMsWTtBQVNFaEQsMEVBQWYiLCJmaWxlIjoiLi9saWIvRGF0YUNvbnRleHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUxheW91dEVmZmVjdCwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gIGZyb20gJ3JlYWN0JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5cbmNvbnN0IERhdGFDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7fSlcblxuY29uc3QgaW5pdGlhbFVzZXJTZWxlY3Rpb25zID0gdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIiA/IHt9IDogSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZWxlY3RvcmFsbWFwJykpIHx8IHt9XG5cbmNvbnN0IHVzZURhdGEgPSAoKSA9PiB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHVuZGVmaW5lZClcbiAgY29uc3QgW3VzZXJTZWxlY3Rpb25zLCBzZXRVc2VyU2VsZWN0aW9uc10gPSB1c2VTdGF0ZShpbml0aWFsVXNlclNlbGVjdGlvbnMpXG4gIGNvbnN0IFt3aW5kb3dTaXplLCBzZXRXaW5kb3dTaXplXSA9IHVzZVN0YXRlKFtdKVxuXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4ge31cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKCdyZXN1bHRzL3ByZXNpZGVudC8yMDE3Lmpzb24nKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChyZXMpID0+IHsgc2V0RGF0YShyZXMpIH0pXG4gIH0sIFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICBzZXRXaW5kb3dTaXplKFt3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0XSlcbiAgICB9XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGxpc3RlbmVyKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBsaXN0ZW5lcilcbiAgICB9XG4gIH0sIFtdKVxuXG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIHsgbG9hZGluZzogdHJ1ZSB9XG5cbiAgY29uc3QgZGF0YVdpdGhVc2VyU2VsZWN0aW9ucyA9IHtcbiAgICAuLi5kYXRhLFxuICAgIC4uLnVzZXJTZWxlY3Rpb25zLFxuICB9XG5cbiAgY29uc3QgdG90YWxzID0gT2JqZWN0LmVudHJpZXMoZGF0YVdpdGhVc2VyU2VsZWN0aW9ucykucmVkdWNlKChcbiAgICBhY2MsXG4gICAgW3N0YXRlTmFtZSwgZGF0YV1cbiAgKSA9PiB7XG4gICAgY29uc3QgZmlsbEtleSA9IGRhdGEuZmlsbEtleVxuICAgIGNvbnN0IGVsZWN0b3JhbFZvdGVzID0gZGF0YVsnRWxlY3RvcmFsIFZvdGVzJ11cbiAgICBjb25zdCBncm91cCA9IGZpbGxLZXkgPT09IDEgPyAnbmV1dHJhbCcgOiAoZmlsbEtleSA9PT0gMiA/ICdkZW1zJyA6ICdHT1AnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmFjYyxcbiAgICAgIFtncm91cF06IGFjY1tncm91cF0gKyBlbGVjdG9yYWxWb3RlcyxcbiAgICB9XG4gIH0sIHtcbiAgICBHT1A6IDAsXG4gICAgZGVtczogMCxcbiAgICBuZXV0cmFsOiAwLFxuICB9KVxuXG4gIGNvbnN0IHVwZGF0ZVVzZXJTZWxlY3Rpb24gPSAoc3RhdGVOYW1lKSA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBkYXRhV2l0aFVzZXJTZWxlY3Rpb25zW3N0YXRlTmFtZV1cblxuICAgIGNvbnN0IHVwZGF0ZWRVc2VyU2VsZWN0aW9ucyA9IHtcbiAgICAgIC4uLnVzZXJTZWxlY3Rpb25zLFxuICAgICAgW3N0YXRlTmFtZV06IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGZpbGxLZXk6ICgoc3RhdGUuZmlsbEtleSArIDEpICUgMykgKyAxLFxuICAgICAgfVxuICAgIH1cblxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlbGVjdG9yYWxtYXAnLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVkVXNlclNlbGVjdGlvbnMpKVxuICAgIHNldFVzZXJTZWxlY3Rpb25zKHVwZGF0ZWRVc2VyU2VsZWN0aW9ucylcbiAgfVxuXG4gIGNvbnN0IHJlc2V0VXNlclNlbGVjdGlvbnMgPSAoKSA9PiB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VsZWN0b3JhbG1hcCcsIEpTT04uc3RyaW5naWZ5KHt9KSlcbiAgICBzZXRVc2VyU2VsZWN0aW9ucyh7fSlcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdG90YWxzLFxuICAgIHdpbmRvd1NpemUsXG4gICAgZGF0YTogZGF0YVdpdGhVc2VyU2VsZWN0aW9ucyxcbiAgICB1cGRhdGVVc2VyU2VsZWN0aW9uLFxuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIHJlc2V0VXNlclNlbGVjdGlvbnMsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IERhdGFQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgZGF0YSA9IHVzZURhdGEoKVxuXG4gIHJldHVybiA8RGF0YUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2RhdGF9PlxuICAgIHtjaGlsZHJlbn1cbiAgPC9EYXRhQ29udGV4dC5Qcm92aWRlcj5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBEYXRhQ29udGV4dFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/DataContext.js\n");

/***/ })

})