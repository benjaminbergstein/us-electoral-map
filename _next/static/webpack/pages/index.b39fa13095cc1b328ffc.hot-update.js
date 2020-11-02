webpackHotUpdate_N_E("pages/index",{

/***/ "./lib/DataContext.js":
/*!****************************!*\
  !*** ./lib/DataContext.js ***!
  \****************************/
/*! exports provided: DataProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DataProvider\", function() { return DataProvider; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\nvar _jsxFileName = \"/app/lib/DataContext.js\",\n    _s = $RefreshSig$(),\n    _this = undefined,\n    _s2 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar DataContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createContext({});\nvar initialUserSelections = false ? undefined : JSON.parse(window.localStorage.getItem('uselectoralmap')) || {};\n\nvar useData = function useData() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])('2020 Presidential Election'),\n      whichData = _useState[0],\n      setWhichData = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(undefined),\n      data = _useState2[0],\n      setData = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(initialUserSelections),\n      userSelections = _useState3[0],\n      setUserSelections = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      windowSize = _useState4[0],\n      setWindowSize = _useState4[1];\n\n  if (false) {}\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(\"results/president/\".concat(whichData, \".json\")).then(function (res) {\n      return res.json();\n    }).then(function (res) {\n      setData(res);\n    });\n  }, [whichData]);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var listener = function listener() {\n      setWindowSize([window.innerWidth, window.innerHeight]);\n    };\n\n    window.addEventListener('resize', listener);\n    return function () {\n      window.removeEventListener('resize', listener);\n    };\n  }, []);\n  if (typeof data === \"undefined\") return {\n    loading: true\n  };\n\n  var dataWithUserSelections = _objectSpread(_objectSpread({}, data), userSelections);\n\n  console.debug(JSON.stringify(dataWithUserSelections));\n  var totals = Object.entries(dataWithUserSelections).reduce(function (acc, _ref) {\n    var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, 2),\n        stateName = _ref2[0],\n        data = _ref2[1];\n\n    var fillKey = data.fillKey;\n    var electoralVotes = data['Electoral Votes'];\n    var group = fillKey === 1 ? 'neutral' : fillKey === 2 ? 'dems' : 'GOP';\n    return _objectSpread(_objectSpread({}, acc), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, group, acc[group] + electoralVotes));\n  }, {\n    GOP: 0,\n    dems: 0,\n    neutral: 0\n  });\n\n  var updateUserSelection = function updateUserSelection(stateName) {\n    var state = dataWithUserSelections[stateName];\n\n    var updatedUserSelections = _objectSpread(_objectSpread({}, userSelections), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, stateName, _objectSpread(_objectSpread({}, state), {}, {\n      fillKey: (state.fillKey + 1) % 3 + 1\n    })));\n\n    window.localStorage.setItem('uselectoralmap', JSON.stringify({\n      whichData: whichData,\n      selections: updatedUserSelections\n    }));\n    setUserSelections(updatedUserSelections);\n  };\n\n  var resetUserSelections = function resetUserSelections() {\n    window.localStorage.setItem('uselectoralmap', JSON.stringify({}));\n    setUserSelections({});\n  };\n\n  var changeData = function changeData(newData) {\n    setUserSelections({});\n    resetUserSelections();\n  };\n\n  return {\n    title: whichData,\n    totals: totals,\n    windowSize: windowSize,\n    data: dataWithUserSelections,\n    updateUserSelection: updateUserSelection,\n    loading: false,\n    resetUserSelections: resetUserSelections,\n    changeData: setWhichData\n  };\n};\n\n_s(useData, \"tHcF1opHHEUSBMut+Z+QMYDOfuU=\");\n\nvar DataProvider = function DataProvider(_ref3) {\n  _s2();\n\n  var children = _ref3.children;\n  var data = useData();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(DataContext.Provider, {\n    value: data,\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 99,\n    columnNumber: 10\n  }, _this);\n};\n\n_s2(DataProvider, \"YnzXR8fPhsYQOtPUC4zYRXREqzc=\", false, function () {\n  return [useData];\n});\n\n_c = DataProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataContext);\n\nvar _c;\n\n$RefreshReg$(_c, \"DataProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL0RhdGFDb250ZXh0LmpzP2JiMGUiXSwibmFtZXMiOlsiRGF0YUNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJpbml0aWFsVXNlclNlbGVjdGlvbnMiLCJKU09OIiwicGFyc2UiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidXNlRGF0YSIsInVzZVN0YXRlIiwid2hpY2hEYXRhIiwic2V0V2hpY2hEYXRhIiwidW5kZWZpbmVkIiwiZGF0YSIsInNldERhdGEiLCJ1c2VyU2VsZWN0aW9ucyIsInNldFVzZXJTZWxlY3Rpb25zIiwid2luZG93U2l6ZSIsInNldFdpbmRvd1NpemUiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwibGlzdGVuZXIiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImxvYWRpbmciLCJkYXRhV2l0aFVzZXJTZWxlY3Rpb25zIiwiY29uc29sZSIsImRlYnVnIiwic3RyaW5naWZ5IiwidG90YWxzIiwiT2JqZWN0IiwiZW50cmllcyIsInJlZHVjZSIsImFjYyIsInN0YXRlTmFtZSIsImZpbGxLZXkiLCJlbGVjdG9yYWxWb3RlcyIsImdyb3VwIiwiR09QIiwiZGVtcyIsIm5ldXRyYWwiLCJ1cGRhdGVVc2VyU2VsZWN0aW9uIiwic3RhdGUiLCJ1cGRhdGVkVXNlclNlbGVjdGlvbnMiLCJzZXRJdGVtIiwic2VsZWN0aW9ucyIsInJlc2V0VXNlclNlbGVjdGlvbnMiLCJjaGFuZ2VEYXRhIiwibmV3RGF0YSIsInRpdGxlIiwiRGF0YVByb3ZpZGVyIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLFdBQVcsZ0JBQUdDLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsRUFBcEIsQ0FBcEI7QUFFQSxJQUFNQyxx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QWI7QUFBc0IsU0FBSyxFQUFFSyxJQUE3QjtBQUFBLGNBQ0oyQztBQURJO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUdELENBTk07O0lBQU1ELFk7VUFDRS9DLE87OztLQURGK0MsWTtBQVNFeEQsMEVBQWYiLCJmaWxlIjoiLi9saWIvRGF0YUNvbnRleHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUxheW91dEVmZmVjdCwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gIGZyb20gJ3JlYWN0JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5cbmNvbnN0IERhdGFDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7fSlcblxuY29uc3QgaW5pdGlhbFVzZXJTZWxlY3Rpb25zID0gdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIiA/IHt9IDogSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZWxlY3RvcmFsbWFwJykpIHx8IHt9XG5cbmNvbnN0IHVzZURhdGEgPSAoKSA9PiB7XG4gIGNvbnN0IFt3aGljaERhdGEsIHNldFdoaWNoRGF0YV0gPSB1c2VTdGF0ZSgnMjAyMCBQcmVzaWRlbnRpYWwgRWxlY3Rpb24nKVxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpXG4gIGNvbnN0IFt1c2VyU2VsZWN0aW9ucywgc2V0VXNlclNlbGVjdGlvbnNdID0gdXNlU3RhdGUoaW5pdGlhbFVzZXJTZWxlY3Rpb25zKVxuICBjb25zdCBbd2luZG93U2l6ZSwgc2V0V2luZG93U2l6ZV0gPSB1c2VTdGF0ZShbXSlcblxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIHt9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaChgcmVzdWx0cy9wcmVzaWRlbnQvJHt3aGljaERhdGF9Lmpzb25gKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChyZXMpID0+IHsgc2V0RGF0YShyZXMpIH0pXG4gIH0sIFt3aGljaERhdGFdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICBzZXRXaW5kb3dTaXplKFt3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0XSlcbiAgICB9XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGxpc3RlbmVyKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBsaXN0ZW5lcilcbiAgICB9XG4gIH0sIFtdKVxuXG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIHsgbG9hZGluZzogdHJ1ZSB9XG5cbiAgY29uc3QgZGF0YVdpdGhVc2VyU2VsZWN0aW9ucyA9IHtcbiAgICAuLi5kYXRhLFxuICAgIC4uLnVzZXJTZWxlY3Rpb25zLFxuICB9XG5cbiAgY29uc29sZS5kZWJ1ZyhKU09OLnN0cmluZ2lmeShkYXRhV2l0aFVzZXJTZWxlY3Rpb25zKSlcblxuICBjb25zdCB0b3RhbHMgPSBPYmplY3QuZW50cmllcyhkYXRhV2l0aFVzZXJTZWxlY3Rpb25zKS5yZWR1Y2UoKFxuICAgIGFjYyxcbiAgICBbc3RhdGVOYW1lLCBkYXRhXVxuICApID0+IHtcbiAgICBjb25zdCBmaWxsS2V5ID0gZGF0YS5maWxsS2V5XG4gICAgY29uc3QgZWxlY3RvcmFsVm90ZXMgPSBkYXRhWydFbGVjdG9yYWwgVm90ZXMnXVxuICAgIGNvbnN0IGdyb3VwID0gZmlsbEtleSA9PT0gMSA/ICduZXV0cmFsJyA6IChmaWxsS2V5ID09PSAyID8gJ2RlbXMnIDogJ0dPUCcpXG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uYWNjLFxuICAgICAgW2dyb3VwXTogYWNjW2dyb3VwXSArIGVsZWN0b3JhbFZvdGVzLFxuICAgIH1cbiAgfSwge1xuICAgIEdPUDogMCxcbiAgICBkZW1zOiAwLFxuICAgIG5ldXRyYWw6IDAsXG4gIH0pXG5cbiAgY29uc3QgdXBkYXRlVXNlclNlbGVjdGlvbiA9IChzdGF0ZU5hbWUpID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGRhdGFXaXRoVXNlclNlbGVjdGlvbnNbc3RhdGVOYW1lXVxuXG4gICAgY29uc3QgdXBkYXRlZFVzZXJTZWxlY3Rpb25zID0ge1xuICAgICAgLi4udXNlclNlbGVjdGlvbnMsXG4gICAgICBbc3RhdGVOYW1lXToge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmlsbEtleTogKChzdGF0ZS5maWxsS2V5ICsgMSkgJSAzKSArIDEsXG4gICAgICB9XG4gICAgfVxuXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VsZWN0b3JhbG1hcCcsIEpTT04uc3RyaW5naWZ5KHsgd2hpY2hEYXRhOiB3aGljaERhdGEsIHNlbGVjdGlvbnM6IHVwZGF0ZWRVc2VyU2VsZWN0aW9ucyB9KSlcbiAgICBzZXRVc2VyU2VsZWN0aW9ucyh1cGRhdGVkVXNlclNlbGVjdGlvbnMpXG4gIH1cblxuICBjb25zdCByZXNldFVzZXJTZWxlY3Rpb25zID0gKCkgPT4ge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlbGVjdG9yYWxtYXAnLCBKU09OLnN0cmluZ2lmeSh7fSkpXG4gICAgc2V0VXNlclNlbGVjdGlvbnMoe30pXG4gIH1cblxuICBjb25zdCBjaGFuZ2VEYXRhID0gKG5ld0RhdGEpID0+IHtcbiAgICBzZXRVc2VyU2VsZWN0aW9ucyh7fSlcbiAgICByZXNldFVzZXJTZWxlY3Rpb25zKClcbiAgfVxuICByZXR1cm4ge1xuICAgIHRpdGxlOiB3aGljaERhdGEsXG4gICAgdG90YWxzLFxuICAgIHdpbmRvd1NpemUsXG4gICAgZGF0YTogZGF0YVdpdGhVc2VyU2VsZWN0aW9ucyxcbiAgICB1cGRhdGVVc2VyU2VsZWN0aW9uLFxuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIHJlc2V0VXNlclNlbGVjdGlvbnMsXG4gICAgY2hhbmdlRGF0YTogc2V0V2hpY2hEYXRhLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBEYXRhUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IGRhdGEgPSB1c2VEYXRhKClcblxuICByZXR1cm4gPERhdGFDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtkYXRhfT5cbiAgICB7Y2hpbGRyZW59XG4gIDwvRGF0YUNvbnRleHQuUHJvdmlkZXI+XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgRGF0YUNvbnRleHRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/DataContext.js\n");

/***/ })

})