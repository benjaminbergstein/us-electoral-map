webpackHotUpdate_N_E("pages/index",{

/***/ "./lib/DataContext.js":
/*!****************************!*\
  !*** ./lib/DataContext.js ***!
  \****************************/
/*! exports provided: DataProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DataProvider\", function() { return DataProvider; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ \"./lib/constants.js\");\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/throttle */ \"./node_modules/lodash/throttle.js\");\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\nvar _jsxFileName = \"/app/lib/DataContext.js\",\n    _JSON$parse,\n    _s = $RefreshSig$(),\n    _this = undefined,\n    _s2 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar DataContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createContext({});\nvar initialData = false ? undefined : (_JSON$parse = JSON.parse(window.localStorage.getItem('uselectoralmap'))) !== null && _JSON$parse !== void 0 ? _JSON$parse : {};\nvar initialWhichData = initialData.whichData || _constants__WEBPACK_IMPORTED_MODULE_5__[\"DefaultMap\"];\nvar initialUserSelections = initialData.selections || {};\nvar FillMap = {\n  1: 'neutral',\n  2: 'dems',\n  3: 'GOP',\n  4: 'GOP',\n  5: 'dems'\n};\n\nvar calculateTotals = function calculateTotals(data) {\n  return Object.entries(data).reduce(function (acc, _ref) {\n    var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, 2),\n        stateName = _ref2[0],\n        data = _ref2[1];\n\n    var fillKey = data.fillKey;\n    var electoralVotes = data['Electoral Votes'];\n    var group = FillMap[fillKey];\n    return _objectSpread(_objectSpread({}, acc), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, group, acc[group] + electoralVotes));\n  }, {\n    GOP: 0,\n    dems: 0,\n    neutral: 0\n  });\n};\n\nvar useData = function useData(initialData) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(initialWhichData),\n      whichData = _useState[0],\n      setWhichData = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(initialData),\n      data = _useState2[0],\n      setData = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({}),\n      userSelections = _useState3[0],\n      setUserSelections = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      focusedState = _useState4[0],\n      setFocusedState = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      windowSize = _useState5[0],\n      setWindowSize = _useState5[1];\n\n  var stateOrder = Object.keys(data);\n  if (false) {}\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(\"results/president/\".concat(whichData, \".json\")).then(function (res) {\n      return res.json();\n    }).then(function (res) {\n      setData(res);\n    });\n  }, [whichData]);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    setUserSelections(initialUserSelections);\n    setWindowSize([window.innerWidth, window.innerHeight]);\n\n    var listener = function listener() {\n      setWindowSize([window.innerWidth, window.innerHeight]);\n    };\n\n    window.addEventListener('resize', listener);\n    return function () {\n      window.removeEventListener('resize', listener);\n    };\n  }, []);\n  if (typeof data === \"undefined\") return {\n    loading: true,\n    windowSize: windowSize,\n    stateOrder: stateOrder\n  };\n\n  var dataWithUserSelections = _objectSpread(_objectSpread({}, data), userSelections);\n\n  console.debug(JSON.stringify(dataWithUserSelections));\n  var totals = calculateTotals(dataWithUserSelections);\n\n  var updateUserSelection = function updateUserSelection(stateName) {\n    var state = dataWithUserSelections[stateName];\n\n    var updatedUserSelections = _objectSpread(_objectSpread({}, userSelections), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, stateName, _objectSpread(_objectSpread({}, state), {}, {\n      fillKey: (state.fillKey + 1) % 3 + 1\n    })));\n\n    window.localStorage.setItem('uselectoralmap', JSON.stringify({\n      whichData: whichData,\n      selections: updatedUserSelections\n    }));\n    setUserSelections(updatedUserSelections);\n  };\n\n  var resetUserSelections = function resetUserSelections() {\n    window.localStorage.setItem('uselectoralmap', JSON.stringify({\n      whichData: whichData\n    }));\n    setUserSelections({});\n  };\n\n  var changeData = function changeData(newData) {\n    window.localStorage.setItem('uselectoralmap', JSON.stringify({}));\n    setUserSelections({});\n    setWhichData(newData);\n  };\n\n  var throttledSetFocusedState = lodash_throttle__WEBPACK_IMPORTED_MODULE_6___default()(setFocusedState, 400);\n  return {\n    stateOrder: stateOrder,\n    title: whichData,\n    totals: totals,\n    windowSize: windowSize,\n    data: dataWithUserSelections,\n    updateUserSelection: updateUserSelection,\n    loading: false,\n    resetUserSelections: resetUserSelections,\n    changeData: changeData,\n    focusedState: focusedState,\n    setFocusedState: throttledSetFocusedState\n  };\n};\n\n_s(useData, \"6qN/V8HGShvuLeXrn+1Wir14oSU=\");\n\nvar DataProvider = function DataProvider(_ref3) {\n  _s2();\n\n  var initialData = _ref3.initialData,\n      children = _ref3.children;\n  var data = useData(initialData);\n  var loading = data.loading;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(DataContext.Provider, {\n    value: data,\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 132,\n    columnNumber: 10\n  }, _this);\n};\n\n_s2(DataProvider, \"YnzXR8fPhsYQOtPUC4zYRXREqzc=\", false, function () {\n  return [useData];\n});\n\n_c = DataProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataContext);\n\nvar _c;\n\n$RefreshReg$(_c, \"DataProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL0RhdGFDb250ZXh0LmpzP2JiMGUiXSwibmFtZXMiOlsiRGF0YUNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJpbml0aWFsRGF0YSIsIkpTT04iLCJwYXJzZSIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpbml0aWFsV2hpY2hEYXRhIiwid2hpY2hEYXRhIiwiRGVmYXVsdE1hcCIsImluaXRpYWxVc2VyU2VsZWN0aW9ucyIsInNlbGVjdGlvbnMiLCJGaWxsTWFwIiwiY2FsY3VsYXRlVG90YWxzIiwiZGF0YSIsIk9iamVjdCIsImVudHJpZXMiLCJyZWR1Y2UiLCJhY2MiLCJzdGF0ZU5hbWUiLCJmaWxsS2V5IiwiZWxlY3RvcmFsVm90ZXMiLCJncm91cCIsIkdPUCIsImRlbXMiLCJuZXV0cmFsIiwidXNlRGF0YSIsInVzZVN0YXRlIiwic2V0V2hpY2hEYXRhIiwic2V0RGF0YSIsInVzZXJTZWxlY3Rpb25zIiwic2V0VXNlclNlbGVjdGlvbnMiLCJmb2N1c2VkU3RhdGUiLCJzZXRGb2N1c2VkU3RhdGUiLCJ3aW5kb3dTaXplIiwic2V0V2luZG93U2l6ZSIsInN0YXRlT3JkZXIiLCJrZXlzIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImxpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJsb2FkaW5nIiwiZGF0YVdpdGhVc2VyU2VsZWN0aW9ucyIsImNvbnNvbGUiLCJkZWJ1ZyIsInN0cmluZ2lmeSIsInRvdGFscyIsInVwZGF0ZVVzZXJTZWxlY3Rpb24iLCJzdGF0ZSIsInVwZGF0ZWRVc2VyU2VsZWN0aW9ucyIsInNldEl0ZW0iLCJyZXNldFVzZXJTZWxlY3Rpb25zIiwiY2hhbmdlRGF0YSIsIm5ld0RhdGEiLCJ0aHJvdHRsZWRTZXRGb2N1c2VkU3RhdGUiLCJ0aHJvdHRs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O0FBQUE7O0FBQUEsTUFBNUIvRCxXQUE0QixTQUE1QkEsV0FBNEI7QUFBQSxNQUFmZ0UsUUFBZSxTQUFmQSxRQUFlO0FBQ3pELE1BQU1uRCxJQUFJLEdBQUdZLE9BQU8sQ0FBQ3pCLFdBQUQsQ0FBcEI7QUFEeUQsTUFFakQrQyxPQUZpRCxHQUVyQ2xDLElBRnFDLENBRWpEa0MsT0FGaUQ7QUFJekQsc0JBQU8scUVBQUMsV0FBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFFbEMsSUFBN0I7QUFBQSxjQUNKbUQ7QUFESTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFHRCxDQVBNOztJQUFNRCxZO1VBQ0V0QyxPOzs7S0FERnNDLFk7QUFVRWxFLDBFQUFmIiwiZmlsZSI6Ii4vbGliL0RhdGFDb250ZXh0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VMYXlvdXRFZmZlY3QsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9ICBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuaW1wb3J0IHsgRGVmYXVsdE1hcCB9IGZyb20gJy4vY29uc3RhbnRzJ1xuaW1wb3J0IHRocm90dGxlIGZyb20gJ2xvZGFzaC90aHJvdHRsZSdcblxuY29uc3QgRGF0YUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KVxuXG5jb25zdCBpbml0aWFsRGF0YSA9IHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIgPyB7fSA6IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VsZWN0b3JhbG1hcCcpKSA/PyB7fVxuY29uc3QgaW5pdGlhbFdoaWNoRGF0YSA9IGluaXRpYWxEYXRhLndoaWNoRGF0YSB8fCBEZWZhdWx0TWFwXG5jb25zdCBpbml0aWFsVXNlclNlbGVjdGlvbnMgPSBpbml0aWFsRGF0YS5zZWxlY3Rpb25zIHx8IHt9XG5cbmNvbnN0IEZpbGxNYXAgPSB7XG4gIDE6ICduZXV0cmFsJyxcbiAgMjogJ2RlbXMnLFxuICAzOiAnR09QJyxcbiAgNDogJ0dPUCcsXG4gIDU6ICdkZW1zJyxcbn1cblxuY29uc3QgY2FsY3VsYXRlVG90YWxzID0gKGRhdGEpID0+IE9iamVjdC5lbnRyaWVzKGRhdGEpLnJlZHVjZSgoXG4gIGFjYyxcbiAgW3N0YXRlTmFtZSwgZGF0YV1cbikgPT4ge1xuICBjb25zdCBmaWxsS2V5ID0gZGF0YS5maWxsS2V5XG4gIGNvbnN0IGVsZWN0b3JhbFZvdGVzID0gZGF0YVsnRWxlY3RvcmFsIFZvdGVzJ11cbiAgY29uc3QgZ3JvdXAgPSBGaWxsTWFwW2ZpbGxLZXldXG5cbiAgcmV0dXJuIHtcbiAgICAuLi5hY2MsXG4gICAgW2dyb3VwXTogYWNjW2dyb3VwXSArIGVsZWN0b3JhbFZvdGVzLFxuICB9XG59LCB7XG4gIEdPUDogMCxcbiAgZGVtczogMCxcbiAgbmV1dHJhbDogMCxcbn0pXG5cbmNvbnN0IHVzZURhdGEgPSAoaW5pdGlhbERhdGEpID0+IHtcbiAgY29uc3QgW3doaWNoRGF0YSwgc2V0V2hpY2hEYXRhXSA9IHVzZVN0YXRlKGluaXRpYWxXaGljaERhdGEpXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKGluaXRpYWxEYXRhKVxuICBjb25zdCBbdXNlclNlbGVjdGlvbnMsIHNldFVzZXJTZWxlY3Rpb25zXSA9IHVzZVN0YXRlKHt9KVxuICBjb25zdCBbZm9jdXNlZFN0YXRlLCBzZXRGb2N1c2VkU3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFt3aW5kb3dTaXplLCBzZXRXaW5kb3dTaXplXSA9IHVzZVN0YXRlKFtdKVxuXG4gIGNvbnN0IHN0YXRlT3JkZXIgPSBPYmplY3Qua2V5cyhkYXRhKVxuXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4ge1xuICAgIHN0YXRlT3JkZXIsXG4gICAgZGF0YSxcbiAgICB0aXRsZTogd2hpY2hEYXRhLFxuICAgIHdpbmRvd1NpemUsXG4gICAgdG90YWxzOiBjYWxjdWxhdGVUb3RhbHMoZGF0YSksXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKGByZXN1bHRzL3ByZXNpZGVudC8ke3doaWNoRGF0YX0uanNvbmApXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKHJlcykgPT4geyBzZXREYXRhKHJlcykgfSlcbiAgfSwgW3doaWNoRGF0YV0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRVc2VyU2VsZWN0aW9ucyhpbml0aWFsVXNlclNlbGVjdGlvbnMpXG4gICAgc2V0V2luZG93U2l6ZShbd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodF0pXG5cbiAgICBjb25zdCBsaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgIHNldFdpbmRvd1NpemUoW3dpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHRdKVxuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgbGlzdGVuZXIpXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGxpc3RlbmVyKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgaWYgKHR5cGVvZiBkYXRhID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4geyBsb2FkaW5nOiB0cnVlLCB3aW5kb3dTaXplLCBzdGF0ZU9yZGVyIH1cblxuICBjb25zdCBkYXRhV2l0aFVzZXJTZWxlY3Rpb25zID0ge1xuICAgIC4uLmRhdGEsXG4gICAgLi4udXNlclNlbGVjdGlvbnMsXG4gIH1cblxuICBjb25zb2xlLmRlYnVnKEpTT04uc3RyaW5naWZ5KGRhdGFXaXRoVXNlclNlbGVjdGlvbnMpKVxuXG4gIGNvbnN0IHRvdGFscyA9IGNhbGN1bGF0ZVRvdGFscyhkYXRhV2l0aFVzZXJTZWxlY3Rpb25zKVxuXG4gIGNvbnN0IHVwZGF0ZVVzZXJTZWxlY3Rpb24gPSAoc3RhdGVOYW1lKSA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBkYXRhV2l0aFVzZXJTZWxlY3Rpb25zW3N0YXRlTmFtZV1cblxuICAgIGNvbnN0IHVwZGF0ZWRVc2VyU2VsZWN0aW9ucyA9IHtcbiAgICAgIC4uLnVzZXJTZWxlY3Rpb25zLFxuICAgICAgW3N0YXRlTmFtZV06IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGZpbGxLZXk6ICgoc3RhdGUuZmlsbEtleSArIDEpICUgMykgKyAxLFxuICAgICAgfVxuICAgIH1cblxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlbGVjdG9yYWxtYXAnLCBKU09OLnN0cmluZ2lmeSh7IHdoaWNoRGF0YTogd2hpY2hEYXRhLCBzZWxlY3Rpb25zOiB1cGRhdGVkVXNlclNlbGVjdGlvbnMgfSkpXG4gICAgc2V0VXNlclNlbGVjdGlvbnModXBkYXRlZFVzZXJTZWxlY3Rpb25zKVxuICB9XG5cbiAgY29uc3QgcmVzZXRVc2VyU2VsZWN0aW9ucyA9ICgpID0+IHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZWxlY3RvcmFsbWFwJywgSlNPTi5zdHJpbmdpZnkoeyB3aGljaERhdGEgfSkpXG4gICAgc2V0VXNlclNlbGVjdGlvbnMoe30pXG4gIH1cblxuICBjb25zdCBjaGFuZ2VEYXRhID0gKG5ld0RhdGEpID0+IHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZWxlY3RvcmFsbWFwJywgSlNPTi5zdHJpbmdpZnkoe30pKVxuICAgIHNldFVzZXJTZWxlY3Rpb25zKHt9KVxuICAgIHNldFdoaWNoRGF0YShuZXdEYXRhKVxuICB9XG5cbiAgY29uc3QgdGhyb3R0bGVkU2V0Rm9jdXNlZFN0YXRlID0gdGhyb3R0bGUoc2V0Rm9jdXNlZFN0YXRlLCA0MDApXG4gIHJldHVybiB7XG4gICAgc3RhdGVPcmRlcixcbiAgICB0aXRsZTogd2hpY2hEYXRhLFxuICAgIHRvdGFscyxcbiAgICB3aW5kb3dTaXplLFxuICAgIGRhdGE6IGRhdGFXaXRoVXNlclNlbGVjdGlvbnMsXG4gICAgdXBkYXRlVXNlclNlbGVjdGlvbixcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICByZXNldFVzZXJTZWxlY3Rpb25zLFxuICAgIGNoYW5nZURhdGEsXG4gICAgZm9jdXNlZFN0YXRlLFxuICAgIHNldEZvY3VzZWRTdGF0ZTogdGhyb3R0bGVkU2V0Rm9jdXNlZFN0YXRlLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBEYXRhUHJvdmlkZXIgPSAoeyBpbml0aWFsRGF0YSwgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBkYXRhID0gdXNlRGF0YShpbml0aWFsRGF0YSlcbiAgY29uc3QgeyBsb2FkaW5nIH0gPSBkYXRhXG5cbiAgcmV0dXJuIDxEYXRhQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17ZGF0YX0+XG4gICAge2NoaWxkcmVufVxuICA8L0RhdGFDb250ZXh0LlByb3ZpZGVyPlxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IERhdGFDb250ZXh0XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/DataContext.js\n");

/***/ })

})