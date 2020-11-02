webpackHotUpdate_N_E("pages/index",{

/***/ "./lib/DataContext.js":
/*!****************************!*\
  !*** ./lib/DataContext.js ***!
  \****************************/
/*! exports provided: DataProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DataProvider\", function() { return DataProvider; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\nvar _jsxFileName = \"/app/lib/DataContext.js\",\n    _JSON$parse,\n    _s = $RefreshSig$(),\n    _this = undefined,\n    _s2 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar DataContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createContext({});\nvar initialData = false ? undefined : (_JSON$parse = JSON.parse(window.localStorage.getItem('uselectoralmap'))) !== null && _JSON$parse !== void 0 ? _JSON$parse : {};\nvar initialWhichData = initialData.whichData || '2020 Presidential Election';\nvar initialUserSelections = initialData.selections || {};\n\nvar calculateTotals = function calculateTotals(data) {\n  return Object.entries(data).reduce(function (acc, _ref) {\n    var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, 2),\n        stateName = _ref2[0],\n        data = _ref2[1];\n\n    var fillKey = data.fillKey;\n    var electoralVotes = data['Electoral Votes'];\n    var group = fillKey === 1 ? 'neutral' : fillKey === 2 ? 'dems' : 'GOP';\n    return _objectSpread(_objectSpread({}, acc), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, group, acc[group] + electoralVotes));\n  }, {\n    GOP: 0,\n    dems: 0,\n    neutral: 0\n  });\n};\n\nvar useData = function useData(initialData) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(initialWhichData),\n      whichData = _useState[0],\n      setWhichData = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(initialData),\n      data = _useState2[0],\n      setData = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(initialUserSelections),\n      userSelections = _useState3[0],\n      setUserSelections = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      windowSize = _useState4[0],\n      setWindowSize = _useState4[1];\n\n  if (false) {}\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(\"results/president/\".concat(whichData, \".json\")).then(function (res) {\n      return res.json();\n    }).then(function (res) {\n      setData(res);\n    });\n  }, [whichData]);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    setWindowSize([window.innerWidth, window.innerHeight]);\n\n    var listener = function listener() {\n      setWindowSize([window.innerWidth, window.innerHeight]);\n    };\n\n    window.addEventListener('resize', listener);\n    return function () {\n      window.removeEventListener('resize', listener);\n    };\n  }, []);\n  if (typeof data === \"undefined\") return {\n    loading: true,\n    windowSize: windowSize\n  };\n\n  var dataWithUserSelections = _objectSpread(_objectSpread({}, data), userSelections);\n\n  console.debug(JSON.stringify(dataWithUserSelections));\n  var totals = calculateTotals(dataWithUserSelections);\n\n  var updateUserSelection = function updateUserSelection(stateName) {\n    var state = dataWithUserSelections[stateName];\n\n    var updatedUserSelections = _objectSpread(_objectSpread({}, userSelections), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, stateName, _objectSpread(_objectSpread({}, state), {}, {\n      fillKey: (state.fillKey + 1) % 3 + 1\n    })));\n\n    window.localStorage.setItem('uselectoralmap', JSON.stringify({\n      whichData: whichData,\n      selections: updatedUserSelections\n    }));\n    setUserSelections(updatedUserSelections);\n  };\n\n  var resetUserSelections = function resetUserSelections() {\n    window.localStorage.setItem('uselectoralmap', JSON.stringify({\n      whichData: whichData\n    }));\n    setUserSelections({});\n  };\n\n  var changeData = function changeData(newData) {\n    window.localStorage.setItem('uselectoralmap', JSON.stringify({}));\n    setUserSelections({});\n    setWhichData(newData);\n  };\n\n  return {\n    title: whichData,\n    totals: totals,\n    windowSize: windowSize,\n    data: dataWithUserSelections,\n    updateUserSelection: updateUserSelection,\n    loading: false,\n    resetUserSelections: resetUserSelections,\n    changeData: changeData\n  };\n};\n\n_s(useData, \"0X3kX9qFDpAvWDUK/AU/i3rmlxo=\");\n\nvar DataProvider = function DataProvider(_ref3) {\n  _s2();\n\n  var initialData = _ref3.initialData,\n      children = _ref3.children;\n  var data = useData(initialData);\n  var loading = data.loading;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(DataContext.Provider, {\n    value: data,\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 113,\n    columnNumber: 10\n  }, _this);\n};\n\n_s2(DataProvider, \"YnzXR8fPhsYQOtPUC4zYRXREqzc=\", false, function () {\n  return [useData];\n});\n\n_c = DataProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataContext);\n\nvar _c;\n\n$RefreshReg$(_c, \"DataProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL0RhdGFDb250ZXh0LmpzP2JiMGUiXSwibmFtZXMiOlsiRGF0YUNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJpbml0aWFsRGF0YSIsIkpTT04iLCJwYXJzZSIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpbml0aWFsV2hpY2hEYXRhIiwid2hpY2hEYXRhIiwiaW5pdGlhbFVzZXJTZWxlY3Rpb25zIiwic2VsZWN0aW9ucyIsImNhbGN1bGF0ZVRvdGFscyIsImRhdGEiLCJPYmplY3QiLCJlbnRyaWVzIiwicmVkdWNlIiwiYWNjIiwic3RhdGVOYW1lIiwiZmlsbEtleSIsImVsZWN0b3JhbFZvdGVzIiwiZ3JvdXAiLCJHT1AiLCJkZW1zIiwibmV1dHJhbCIsInVzZURhdGEiLCJ1c2VTdGF0ZSIsInNldFdoaWNoRGF0YSIsInNldERhdGEiLCJ1c2VyU2VsZWN0aW9ucyIsInNldFVzZXJTZWxlY3Rpb25zIiwid2luZG93U2l6ZSIsInNldFdpbmRvd1NpemUiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwibGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImxvYWRpbmciLCJkYXRhV2l0aFVzZXJTZWxlY3Rpb25zIiwiY29uc29sZSIsImRlYnVnIiwic3RyaW5naWZ5IiwidG90YWxzIiwidXBkYXRlVXNlclNlbGVjdGlvbiIsInN0YXRlIiwidXBkYXRlZFVzZXJTZWxlY3Rpb25zIiwic2V0SXRlbSIsInJlc2V0VXNlclNlbGVjdGlvbnMiLCJjaGFuZ2VEYXRhIiwibmV3RGF0YSIsInRpdGxlIiwiRGF0YVByb3ZpZGVyIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLGdCQUFHQyw0Q0FBSyxD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WUFBUCxDQUFvQjhDLE9BQXBCLENBQTRCLGdCQUE1QixFQUE4Q2pELElBQUksQ0FBQzRDLFNBQUwsQ0FBZSxFQUFmLENBQTlDO0FBQ0FqQixxQkFBaUIsQ0FBQyxFQUFELENBQWpCO0FBQ0FILGdCQUFZLENBQUM0QixPQUFELENBQVo7QUFDRCxHQUpEOztBQU1BLFNBQU87QUFDTEMsU0FBSyxFQUFFL0MsU0FERjtBQUVMdUMsVUFBTSxFQUFOQSxNQUZLO0FBR0xqQixjQUFVLEVBQVZBLFVBSEs7QUFJTGxCLFFBQUksRUFBRStCLHNCQUpEO0FBS0xLLHVCQUFtQixFQUFuQkEsbUJBTEs7QUFNTE4sV0FBTyxFQUFFLEtBTko7QUFPTFUsdUJBQW1CLEVBQW5CQSxtQkFQSztBQVFMQyxjQUFVLEVBQVZBO0FBUkssR0FBUDtBQVVELENBL0VEOztHQUFNN0IsTzs7QUFpRkMsSUFBTWdDLFlBQVksR0FBRyxTQUFmQSxZQUFlLFFBQStCO0FBQUE7O0FBQUEsTUFBNUJ2RCxXQUE0QixTQUE1QkEsV0FBNEI7QUFBQSxNQUFmd0QsUUFBZSxTQUFmQSxRQUFlO0FBQ3pELE1BQU03QyxJQUFJLEdBQUdZLE9BQU8sQ0FBQ3ZCLFdBQUQsQ0FBcEI7QUFEeUQsTUFFakR5QyxPQUZpRCxHQUVyQzlCLElBRnFDLENBRWpEOEIsT0FGaUQ7QUFJekQsc0JBQU8scUVBQUMsV0FBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFFOUIsSUFBN0I7QUFBQSxjQUNKNkM7QUFESTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFHRCxDQVBNOztJQUFNRCxZO1VBQ0VoQyxPOzs7S0FERmdDLFk7QUFVRTFELDBFQUFmIiwiZmlsZSI6Ii4vbGliL0RhdGFDb250ZXh0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VMYXlvdXRFZmZlY3QsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9ICBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuXG5jb25zdCBEYXRhQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe30pXG5cbmNvbnN0IGluaXRpYWxEYXRhID0gdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIiA/IHt9IDogSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZWxlY3RvcmFsbWFwJykpID8/IHt9XG5jb25zdCBpbml0aWFsV2hpY2hEYXRhID0gaW5pdGlhbERhdGEud2hpY2hEYXRhIHx8ICcyMDIwIFByZXNpZGVudGlhbCBFbGVjdGlvbidcbmNvbnN0IGluaXRpYWxVc2VyU2VsZWN0aW9ucyA9IGluaXRpYWxEYXRhLnNlbGVjdGlvbnMgfHwge31cblxuY29uc3QgY2FsY3VsYXRlVG90YWxzID0gKGRhdGEpID0+IE9iamVjdC5lbnRyaWVzKGRhdGEpLnJlZHVjZSgoXG4gIGFjYyxcbiAgW3N0YXRlTmFtZSwgZGF0YV1cbikgPT4ge1xuICBjb25zdCBmaWxsS2V5ID0gZGF0YS5maWxsS2V5XG4gIGNvbnN0IGVsZWN0b3JhbFZvdGVzID0gZGF0YVsnRWxlY3RvcmFsIFZvdGVzJ11cbiAgY29uc3QgZ3JvdXAgPSBmaWxsS2V5ID09PSAxID8gJ25ldXRyYWwnIDogKGZpbGxLZXkgPT09IDIgPyAnZGVtcycgOiAnR09QJylcblxuICByZXR1cm4ge1xuICAgIC4uLmFjYyxcbiAgICBbZ3JvdXBdOiBhY2NbZ3JvdXBdICsgZWxlY3RvcmFsVm90ZXMsXG4gIH1cbn0sIHtcbiAgR09QOiAwLFxuICBkZW1zOiAwLFxuICBuZXV0cmFsOiAwLFxufSlcblxuY29uc3QgdXNlRGF0YSA9IChpbml0aWFsRGF0YSkgPT4ge1xuICBjb25zdCBbd2hpY2hEYXRhLCBzZXRXaGljaERhdGFdID0gdXNlU3RhdGUoaW5pdGlhbFdoaWNoRGF0YSlcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoaW5pdGlhbERhdGEpXG4gIGNvbnN0IFt1c2VyU2VsZWN0aW9ucywgc2V0VXNlclNlbGVjdGlvbnNdID0gdXNlU3RhdGUoaW5pdGlhbFVzZXJTZWxlY3Rpb25zKVxuICBjb25zdCBbd2luZG93U2l6ZSwgc2V0V2luZG93U2l6ZV0gPSB1c2VTdGF0ZShbXSlcblxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIHtcbiAgICBkYXRhLFxuICAgIHRpdGxlOiB3aGljaERhdGEsXG4gICAgd2luZG93U2l6ZSxcbiAgICB0b3RhbHM6IGNhbGN1bGF0ZVRvdGFscyhkYXRhKSxcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2goYHJlc3VsdHMvcHJlc2lkZW50LyR7d2hpY2hEYXRhfS5qc29uYClcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigocmVzKSA9PiB7IHNldERhdGEocmVzKSB9KVxuICB9LCBbd2hpY2hEYXRhXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFdpbmRvd1NpemUoW3dpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHRdKVxuXG4gICAgY29uc3QgbGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICBzZXRXaW5kb3dTaXplKFt3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0XSlcbiAgICB9XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGxpc3RlbmVyKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBsaXN0ZW5lcilcbiAgICB9XG4gIH0sIFtdKVxuXG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIHsgbG9hZGluZzogdHJ1ZSwgd2luZG93U2l6ZSB9XG5cbiAgY29uc3QgZGF0YVdpdGhVc2VyU2VsZWN0aW9ucyA9IHtcbiAgICAuLi5kYXRhLFxuICAgIC4uLnVzZXJTZWxlY3Rpb25zLFxuICB9XG5cbiAgY29uc29sZS5kZWJ1ZyhKU09OLnN0cmluZ2lmeShkYXRhV2l0aFVzZXJTZWxlY3Rpb25zKSlcblxuICBjb25zdCB0b3RhbHMgPSBjYWxjdWxhdGVUb3RhbHMoZGF0YVdpdGhVc2VyU2VsZWN0aW9ucylcblxuICBjb25zdCB1cGRhdGVVc2VyU2VsZWN0aW9uID0gKHN0YXRlTmFtZSkgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZGF0YVdpdGhVc2VyU2VsZWN0aW9uc1tzdGF0ZU5hbWVdXG5cbiAgICBjb25zdCB1cGRhdGVkVXNlclNlbGVjdGlvbnMgPSB7XG4gICAgICAuLi51c2VyU2VsZWN0aW9ucyxcbiAgICAgIFtzdGF0ZU5hbWVdOiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmaWxsS2V5OiAoKHN0YXRlLmZpbGxLZXkgKyAxKSAlIDMpICsgMSxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZWxlY3RvcmFsbWFwJywgSlNPTi5zdHJpbmdpZnkoeyB3aGljaERhdGE6IHdoaWNoRGF0YSwgc2VsZWN0aW9uczogdXBkYXRlZFVzZXJTZWxlY3Rpb25zIH0pKVxuICAgIHNldFVzZXJTZWxlY3Rpb25zKHVwZGF0ZWRVc2VyU2VsZWN0aW9ucylcbiAgfVxuXG4gIGNvbnN0IHJlc2V0VXNlclNlbGVjdGlvbnMgPSAoKSA9PiB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VsZWN0b3JhbG1hcCcsIEpTT04uc3RyaW5naWZ5KHsgd2hpY2hEYXRhIH0pKVxuICAgIHNldFVzZXJTZWxlY3Rpb25zKHt9KVxuICB9XG5cbiAgY29uc3QgY2hhbmdlRGF0YSA9IChuZXdEYXRhKSA9PiB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VsZWN0b3JhbG1hcCcsIEpTT04uc3RyaW5naWZ5KHt9KSlcbiAgICBzZXRVc2VyU2VsZWN0aW9ucyh7fSlcbiAgICBzZXRXaGljaERhdGEobmV3RGF0YSlcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdGl0bGU6IHdoaWNoRGF0YSxcbiAgICB0b3RhbHMsXG4gICAgd2luZG93U2l6ZSxcbiAgICBkYXRhOiBkYXRhV2l0aFVzZXJTZWxlY3Rpb25zLFxuICAgIHVwZGF0ZVVzZXJTZWxlY3Rpb24sXG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgcmVzZXRVc2VyU2VsZWN0aW9ucyxcbiAgICBjaGFuZ2VEYXRhLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBEYXRhUHJvdmlkZXIgPSAoeyBpbml0aWFsRGF0YSwgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBkYXRhID0gdXNlRGF0YShpbml0aWFsRGF0YSlcbiAgY29uc3QgeyBsb2FkaW5nIH0gPSBkYXRhXG5cbiAgcmV0dXJuIDxEYXRhQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17ZGF0YX0+XG4gICAge2NoaWxkcmVufVxuICA8L0RhdGFDb250ZXh0LlByb3ZpZGVyPlxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IERhdGFDb250ZXh0XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/DataContext.js\n");

/***/ })

})