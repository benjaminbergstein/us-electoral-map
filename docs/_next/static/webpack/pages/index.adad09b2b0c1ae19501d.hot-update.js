webpackHotUpdate_N_E("pages/index",{

/***/ "./lib/DataContext.js":
/*!****************************!*\
  !*** ./lib/DataContext.js ***!
  \****************************/
/*! exports provided: DataProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DataProvider\", function() { return DataProvider; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ \"./lib/constants.js\");\n\n\n\n\nvar _jsxFileName = \"/app/lib/DataContext.js\",\n    _JSON$parse,\n    _s = $RefreshSig$(),\n    _this = undefined,\n    _s2 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar DataContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createContext({});\nvar initialData = false ? undefined : (_JSON$parse = JSON.parse(window.localStorage.getItem('uselectoralmap'))) !== null && _JSON$parse !== void 0 ? _JSON$parse : {};\nvar initialWhichData = initialData.whichData || _constants__WEBPACK_IMPORTED_MODULE_5__[\"DefaultMap\"];\nvar initialUserSelections = initialData.selections || {};\nvar FillMap = {\n  1: neutral,\n  2: dems,\n  3: GOP\n};\n\nvar calculateTotals = function calculateTotals(data) {\n  return Object.entries(data).reduce(function (acc, _ref) {\n    var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, 2),\n        stateName = _ref2[0],\n        data = _ref2[1];\n\n    var fillKey = data.fillKey;\n    var electoralVotes = data['Electoral Votes'];\n    console.log(stateName, FillMap[fillKey]);\n    var group = FillMap[fillKey];\n    return _objectSpread(_objectSpread({}, acc), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, group, acc[group] + electoralVotes));\n  }, {\n    GOP: 0,\n    dems: 0,\n    neutral: 0\n  });\n};\n\nvar useData = function useData(initialData) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(initialWhichData),\n      whichData = _useState[0],\n      setWhichData = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(initialData),\n      data = _useState2[0],\n      setData = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({}),\n      userSelections = _useState3[0],\n      setUserSelections = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      windowSize = _useState4[0],\n      setWindowSize = _useState4[1];\n\n  var stateOrder = Object.keys(data);\n  if (false) {}\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(\"results/president/\".concat(whichData, \".json\")).then(function (res) {\n      return res.json();\n    }).then(function (res) {\n      setData(res);\n    });\n  }, [whichData]);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    setUserSelections(initialUserSelections);\n    setWindowSize([window.innerWidth, window.innerHeight]);\n\n    var listener = function listener() {\n      setWindowSize([window.innerWidth, window.innerHeight]);\n    };\n\n    window.addEventListener('resize', listener);\n    return function () {\n      window.removeEventListener('resize', listener);\n    };\n  }, []);\n  if (typeof data === \"undefined\") return {\n    loading: true,\n    windowSize: windowSize,\n    stateOrder: stateOrder\n  };\n\n  var dataWithUserSelections = _objectSpread(_objectSpread({}, data), userSelections);\n\n  console.debug(JSON.stringify(dataWithUserSelections));\n  var totals = calculateTotals(dataWithUserSelections);\n\n  var updateUserSelection = function updateUserSelection(stateName) {\n    var state = dataWithUserSelections[stateName];\n\n    var updatedUserSelections = _objectSpread(_objectSpread({}, userSelections), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, stateName, _objectSpread(_objectSpread({}, state), {}, {\n      fillKey: (state.fillKey + 1) % 3 + 1\n    })));\n\n    window.localStorage.setItem('uselectoralmap', JSON.stringify({\n      whichData: whichData,\n      selections: updatedUserSelections\n    }));\n    setUserSelections(updatedUserSelections);\n  };\n\n  var resetUserSelections = function resetUserSelections() {\n    window.localStorage.setItem('uselectoralmap', JSON.stringify({\n      whichData: whichData\n    }));\n    setUserSelections({});\n  };\n\n  var changeData = function changeData(newData) {\n    window.localStorage.setItem('uselectoralmap', JSON.stringify({}));\n    setUserSelections({});\n    setWhichData(newData);\n  };\n\n  return {\n    stateOrder: stateOrder,\n    title: whichData,\n    totals: totals,\n    windowSize: windowSize,\n    data: dataWithUserSelections,\n    updateUserSelection: updateUserSelection,\n    loading: false,\n    resetUserSelections: resetUserSelections,\n    changeData: changeData\n  };\n};\n\n_s(useData, \"fzmJDnOdoV21CAXSHycpjt09V2A=\");\n\nvar DataProvider = function DataProvider(_ref3) {\n  _s2();\n\n  var initialData = _ref3.initialData,\n      children = _ref3.children;\n  var data = useData(initialData);\n  var loading = data.loading;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(DataContext.Provider, {\n    value: data,\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 126,\n    columnNumber: 10\n  }, _this);\n};\n\n_s2(DataProvider, \"YnzXR8fPhsYQOtPUC4zYRXREqzc=\", false, function () {\n  return [useData];\n});\n\n_c = DataProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataContext);\n\nvar _c;\n\n$RefreshReg$(_c, \"DataProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL0RhdGFDb250ZXh0LmpzP2JiMGUiXSwibmFtZXMiOlsiRGF0YUNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJpbml0aWFsRGF0YSIsIkpTT04iLCJwYXJzZSIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpbml0aWFsV2hpY2hEYXRhIiwid2hpY2hEYXRhIiwiRGVmYXVsdE1hcCIsImluaXRpYWxVc2VyU2VsZWN0aW9ucyIsInNlbGVjdGlvbnMiLCJGaWxsTWFwIiwibmV1dHJhbCIsImRlbXMiLCJHT1AiLCJjYWxjdWxhdGVUb3RhbHMiLCJkYXRhIiwiT2JqZWN0IiwiZW50cmllcyIsInJlZHVjZSIsImFjYyIsInN0YXRlTmFtZSIsImZpbGxLZXkiLCJlbGVjdG9yYWxWb3RlcyIsImNvbnNvbGUiLCJsb2ciLCJncm91cCIsInVzZURhdGEiLCJ1c2VTdGF0ZSIsInNldFdoaWNoRGF0YSIsInNldERhdGEiLCJ1c2VyU2VsZWN0aW9ucyIsInNldFVzZXJTZWxlY3Rpb25zIiwid2luZG93U2l6ZSIsInNldFdpbmRvd1NpemUiLCJzdGF0ZU9yZGVyIiwia2V5cyIsInVzZUVmZmVjdCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJsaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibG9hZGluZyIsImRhdGFXaXRoVXNlclNlbGVjdGlvbnMiLCJkZWJ1ZyIsInN0cmluZ2lmeSIsInRvdGFscyIsInVwZGF0ZVVzZXJTZWxlY3Rpb24iLCJzdGF0ZSIsInVwZGF0ZWRVc2VyU2VsZWN0aW9ucyIsInNldEl0ZW0iLCJyZXNldFVzZXJTZWxlY3Rpb25zIiwiY2hhbmdlRGF0YSIsIm5ld0RhdGEiLCJ0aXRsZSIsIkRhdGFQcm92aWRlciIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7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SUFBN0I7QUFBQSxjQUNKNkM7QUFESTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFHRCxDQVBNOztJQUFNRCxZO1VBQ0VqQyxPOzs7S0FERmlDLFk7QUFVRS9ELDBFQUFmIiwiZmlsZSI6Ii4vbGliL0RhdGFDb250ZXh0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VMYXlvdXRFZmZlY3QsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9ICBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuaW1wb3J0IHsgRGVmYXVsdE1hcCB9IGZyb20gJy4vY29uc3RhbnRzJ1xuXG5jb25zdCBEYXRhQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe30pXG5cbmNvbnN0IGluaXRpYWxEYXRhID0gdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIiA/IHt9IDogSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZWxlY3RvcmFsbWFwJykpID8/IHt9XG5jb25zdCBpbml0aWFsV2hpY2hEYXRhID0gaW5pdGlhbERhdGEud2hpY2hEYXRhIHx8IERlZmF1bHRNYXBcbmNvbnN0IGluaXRpYWxVc2VyU2VsZWN0aW9ucyA9IGluaXRpYWxEYXRhLnNlbGVjdGlvbnMgfHwge31cblxuY29uc3QgRmlsbE1hcCA9IHtcbiAgMTogbmV1dHJhbCxcbiAgMjogZGVtcyxcbiAgMzogR09QLFxufVxuXG5jb25zdCBjYWxjdWxhdGVUb3RhbHMgPSAoZGF0YSkgPT4gT2JqZWN0LmVudHJpZXMoZGF0YSkucmVkdWNlKChcbiAgYWNjLFxuICBbc3RhdGVOYW1lLCBkYXRhXVxuKSA9PiB7XG4gIGNvbnN0IGZpbGxLZXkgPSBkYXRhLmZpbGxLZXlcbiAgY29uc3QgZWxlY3RvcmFsVm90ZXMgPSBkYXRhWydFbGVjdG9yYWwgVm90ZXMnXVxuICBjb25zb2xlLmxvZyhzdGF0ZU5hbWUsIEZpbGxNYXBbZmlsbEtleV0pXG4gIGNvbnN0IGdyb3VwID0gRmlsbE1hcFtmaWxsS2V5XVxuXG4gIHJldHVybiB7XG4gICAgLi4uYWNjLFxuICAgIFtncm91cF06IGFjY1tncm91cF0gKyBlbGVjdG9yYWxWb3RlcyxcbiAgfVxufSwge1xuICBHT1A6IDAsXG4gIGRlbXM6IDAsXG4gIG5ldXRyYWw6IDAsXG59KVxuXG5jb25zdCB1c2VEYXRhID0gKGluaXRpYWxEYXRhKSA9PiB7XG4gIGNvbnN0IFt3aGljaERhdGEsIHNldFdoaWNoRGF0YV0gPSB1c2VTdGF0ZShpbml0aWFsV2hpY2hEYXRhKVxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShpbml0aWFsRGF0YSlcbiAgY29uc3QgW3VzZXJTZWxlY3Rpb25zLCBzZXRVc2VyU2VsZWN0aW9uc10gPSB1c2VTdGF0ZSh7fSlcbiAgY29uc3QgW3dpbmRvd1NpemUsIHNldFdpbmRvd1NpemVdID0gdXNlU3RhdGUoW10pXG5cbiAgY29uc3Qgc3RhdGVPcmRlciA9IE9iamVjdC5rZXlzKGRhdGEpXG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybiB7XG4gICAgc3RhdGVPcmRlcixcbiAgICBkYXRhLFxuICAgIHRpdGxlOiB3aGljaERhdGEsXG4gICAgd2luZG93U2l6ZSxcbiAgICB0b3RhbHM6IGNhbGN1bGF0ZVRvdGFscyhkYXRhKSxcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2goYHJlc3VsdHMvcHJlc2lkZW50LyR7d2hpY2hEYXRhfS5qc29uYClcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigocmVzKSA9PiB7IHNldERhdGEocmVzKSB9KVxuICB9LCBbd2hpY2hEYXRhXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFVzZXJTZWxlY3Rpb25zKGluaXRpYWxVc2VyU2VsZWN0aW9ucylcbiAgICBzZXRXaW5kb3dTaXplKFt3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0XSlcblxuICAgIGNvbnN0IGxpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgc2V0V2luZG93U2l6ZShbd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodF0pXG4gICAgfVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBsaXN0ZW5lcilcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgbGlzdGVuZXIpXG4gICAgfVxuICB9LCBbXSlcblxuICBpZiAodHlwZW9mIGRhdGEgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybiB7IGxvYWRpbmc6IHRydWUsIHdpbmRvd1NpemUsIHN0YXRlT3JkZXIgfVxuXG4gIGNvbnN0IGRhdGFXaXRoVXNlclNlbGVjdGlvbnMgPSB7XG4gICAgLi4uZGF0YSxcbiAgICAuLi51c2VyU2VsZWN0aW9ucyxcbiAgfVxuXG4gIGNvbnNvbGUuZGVidWcoSlNPTi5zdHJpbmdpZnkoZGF0YVdpdGhVc2VyU2VsZWN0aW9ucykpXG5cbiAgY29uc3QgdG90YWxzID0gY2FsY3VsYXRlVG90YWxzKGRhdGFXaXRoVXNlclNlbGVjdGlvbnMpXG5cbiAgY29uc3QgdXBkYXRlVXNlclNlbGVjdGlvbiA9IChzdGF0ZU5hbWUpID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGRhdGFXaXRoVXNlclNlbGVjdGlvbnNbc3RhdGVOYW1lXVxuXG4gICAgY29uc3QgdXBkYXRlZFVzZXJTZWxlY3Rpb25zID0ge1xuICAgICAgLi4udXNlclNlbGVjdGlvbnMsXG4gICAgICBbc3RhdGVOYW1lXToge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmlsbEtleTogKChzdGF0ZS5maWxsS2V5ICsgMSkgJSAzKSArIDEsXG4gICAgICB9XG4gICAgfVxuXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VsZWN0b3JhbG1hcCcsIEpTT04uc3RyaW5naWZ5KHsgd2hpY2hEYXRhOiB3aGljaERhdGEsIHNlbGVjdGlvbnM6IHVwZGF0ZWRVc2VyU2VsZWN0aW9ucyB9KSlcbiAgICBzZXRVc2VyU2VsZWN0aW9ucyh1cGRhdGVkVXNlclNlbGVjdGlvbnMpXG4gIH1cblxuICBjb25zdCByZXNldFVzZXJTZWxlY3Rpb25zID0gKCkgPT4ge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlbGVjdG9yYWxtYXAnLCBKU09OLnN0cmluZ2lmeSh7IHdoaWNoRGF0YSB9KSlcbiAgICBzZXRVc2VyU2VsZWN0aW9ucyh7fSlcbiAgfVxuXG4gIGNvbnN0IGNoYW5nZURhdGEgPSAobmV3RGF0YSkgPT4ge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlbGVjdG9yYWxtYXAnLCBKU09OLnN0cmluZ2lmeSh7fSkpXG4gICAgc2V0VXNlclNlbGVjdGlvbnMoe30pXG4gICAgc2V0V2hpY2hEYXRhKG5ld0RhdGEpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHN0YXRlT3JkZXIsXG4gICAgdGl0bGU6IHdoaWNoRGF0YSxcbiAgICB0b3RhbHMsXG4gICAgd2luZG93U2l6ZSxcbiAgICBkYXRhOiBkYXRhV2l0aFVzZXJTZWxlY3Rpb25zLFxuICAgIHVwZGF0ZVVzZXJTZWxlY3Rpb24sXG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgcmVzZXRVc2VyU2VsZWN0aW9ucyxcbiAgICBjaGFuZ2VEYXRhLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBEYXRhUHJvdmlkZXIgPSAoeyBpbml0aWFsRGF0YSwgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBkYXRhID0gdXNlRGF0YShpbml0aWFsRGF0YSlcbiAgY29uc3QgeyBsb2FkaW5nIH0gPSBkYXRhXG5cbiAgcmV0dXJuIDxEYXRhQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17ZGF0YX0+XG4gICAge2NoaWxkcmVufVxuICA8L0RhdGFDb250ZXh0LlByb3ZpZGVyPlxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IERhdGFDb250ZXh0XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/DataContext.js\n");

/***/ })

})