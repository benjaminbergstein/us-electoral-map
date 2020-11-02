webpackHotUpdate_N_E("pages/index",{

/***/ "./lib/DataContext.js":
/*!****************************!*\
  !*** ./lib/DataContext.js ***!
  \****************************/
/*! exports provided: DataProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DataProvider\", function() { return DataProvider; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\nvar _jsxFileName = \"/app/lib/DataContext.js\",\n    _JSON$parse,\n    _s = $RefreshSig$(),\n    _this = undefined,\n    _s2 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar DataContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createContext({});\nvar initialData = false ? undefined : (_JSON$parse = JSON.parse(window.localStorage.getItem('uselectoralmap'))) !== null && _JSON$parse !== void 0 ? _JSON$parse : {};\nvar initialWhichData = initialData.whichData || '2020 Presidential Election';\nvar initialUserSelections = initialData.selections || {};\n\nvar useData = function useData(initialData) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(initialWhichData),\n      whichData = _useState[0],\n      setWhichData = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(initialData),\n      data = _useState2[0],\n      setData = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(initialUserSelections),\n      userSelections = _useState3[0],\n      setUserSelections = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      windowSize = _useState4[0],\n      setWindowSize = _useState4[1];\n\n  if (false) {}\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(\"results/president/\".concat(whichData, \".json\")).then(function (res) {\n      return res.json();\n    }).then(function (res) {\n      setData(res);\n    });\n  }, [whichData]);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    setWindowSize([window.innerWidth, window.innerHeight]);\n\n    var listener = function listener() {\n      setWindowSize([window.innerWidth, window.innerHeight]);\n    };\n\n    window.addEventListener('resize', listener);\n    return function () {\n      window.removeEventListener('resize', listener);\n    };\n  }, []);\n  if (typeof data === \"undefined\") return {\n    loading: true,\n    windowSize: windowSize\n  };\n\n  var dataWithUserSelections = _objectSpread(_objectSpread({}, data), userSelections);\n\n  console.debug(JSON.stringify(dataWithUserSelections));\n  var totals = Object.entries(dataWithUserSelections).reduce(function (acc, _ref) {\n    var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, 2),\n        stateName = _ref2[0],\n        data = _ref2[1];\n\n    var fillKey = data.fillKey;\n    var electoralVotes = data['Electoral Votes'];\n    var group = fillKey === 1 ? 'neutral' : fillKey === 2 ? 'dems' : 'GOP';\n    return _objectSpread(_objectSpread({}, acc), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, group, acc[group] + electoralVotes));\n  }, {\n    GOP: 0,\n    dems: 0,\n    neutral: 0\n  });\n\n  var updateUserSelection = function updateUserSelection(stateName) {\n    var state = dataWithUserSelections[stateName];\n\n    var updatedUserSelections = _objectSpread(_objectSpread({}, userSelections), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, stateName, _objectSpread(_objectSpread({}, state), {}, {\n      fillKey: (state.fillKey + 1) % 3 + 1\n    })));\n\n    window.localStorage.setItem('uselectoralmap', JSON.stringify({\n      whichData: whichData,\n      selections: updatedUserSelections\n    }));\n    setUserSelections(updatedUserSelections);\n  };\n\n  var resetUserSelections = function resetUserSelections() {\n    window.localStorage.setItem('uselectoralmap', JSON.stringify({\n      whichData: whichData\n    }));\n    setUserSelections({});\n  };\n\n  var changeData = function changeData(newData) {\n    window.localStorage.setItem('uselectoralmap', JSON.stringify({}));\n    setUserSelections({});\n    setWhichData(newData);\n  };\n\n  return {\n    title: whichData,\n    totals: totals,\n    windowSize: windowSize,\n    data: dataWithUserSelections,\n    updateUserSelection: updateUserSelection,\n    loading: false,\n    resetUserSelections: resetUserSelections,\n    changeData: changeData\n  };\n};\n\n_s(useData, \"0X3kX9qFDpAvWDUK/AU/i3rmlxo=\");\n\nvar DataProvider = function DataProvider(_ref3) {\n  _s2();\n\n  var initialData = _ref3.initialData,\n      children = _ref3.children;\n  var data = useData(initialData);\n  var loading = data.loading;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(DataContext.Provider, {\n    value: data,\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 106,\n    columnNumber: 10\n  }, _this);\n};\n\n_s2(DataProvider, \"YnzXR8fPhsYQOtPUC4zYRXREqzc=\", false, function () {\n  return [useData];\n});\n\n_c = DataProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataContext);\n\nvar _c;\n\n$RefreshReg$(_c, \"DataProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL0RhdGFDb250ZXh0LmpzP2JiMGUiXSwibmFtZXMiOlsiRGF0YUNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJpbml0aWFsRGF0YSIsIkpTT04iLCJwYXJzZSIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpbml0aWFsV2hpY2hEYXRhIiwid2hpY2hEYXRhIiwiaW5pdGlhbFVzZXJTZWxlY3Rpb25zIiwic2VsZWN0aW9ucyIsInVzZURhdGEiLCJ1c2VTdGF0ZSIsInNldFdoaWNoRGF0YSIsImRhdGEiLCJzZXREYXRhIiwidXNlclNlbGVjdGlvbnMiLCJzZXRVc2VyU2VsZWN0aW9ucyIsIndpbmRvd1NpemUiLCJzZXRXaW5kb3dTaXplIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImxpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJsb2FkaW5nIiwiZGF0YVdpdGhVc2VyU2VsZWN0aW9ucyIsImNvbnNvbGUiLCJkZWJ1ZyIsInN0cmluZ2lmeSIsInRvdGFscyIsIk9iamVjdCIsImVudHJpZXMiLCJyZWR1Y2UiLCJhY2MiLCJzdGF0ZU5hbWUiLCJmaWxsS2V5IiwiZWxlY3RvcmFsVm90ZXMiLCJncm91cCIsIkdPUCIsImRlbXMiLCJuZXV0cmFsIiwidXBkYXRlVXNlclNlbGVjdGlvbiIsInN0YXRlIiwidXBkYXRlZFVzZXJTZWxlY3Rpb25zIiwic2V0SXRlbSIsInJlc2V0VXNlclNlbGVjdGlvbnMiLCJjaGFuZ2VEYXRhIiwibmV3RGF0YSIsInRpdGxlIiwiRGF0YVByb3ZpZGVyIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLGdCQUFHQyw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLEVB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QUFaO0FBQ0QsR0FKRDs7QUFNQSxTQUFPO0FBQ0xDLFNBQUssRUFBRTlDLFNBREY7QUFFTDJCLFVBQU0sRUFBTkEsTUFGSztBQUdMakIsY0FBVSxFQUFWQSxVQUhLO0FBSUxKLFFBQUksRUFBRWlCLHNCQUpEO0FBS0xnQix1QkFBbUIsRUFBbkJBLG1CQUxLO0FBTUxqQixXQUFPLEVBQUUsS0FOSjtBQU9McUIsdUJBQW1CLEVBQW5CQSxtQkFQSztBQVFMQyxjQUFVLEVBQVZBO0FBUkssR0FBUDtBQVVELENBMUZEOztHQUFNekMsTzs7QUE0RkMsSUFBTTRDLFlBQVksR0FBRyxTQUFmQSxZQUFlLFFBQStCO0FBQUE7O0FBQUEsTUFBNUJ0RCxXQUE0QixTQUE1QkEsV0FBNEI7QUFBQSxNQUFmdUQsUUFBZSxTQUFmQSxRQUFlO0FBQ3pELE1BQU0xQyxJQUFJLEdBQUdILE9BQU8sQ0FBQ1YsV0FBRCxDQUFwQjtBQUR5RCxNQUVqRDZCLE9BRmlELEdBRXJDaEIsSUFGcUMsQ0FFakRnQixPQUZpRDtBQUl6RCxzQkFBTyxxRUFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUVoQixJQUE3QjtBQUFBLGNBQ0owQztBQURJO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUdELENBUE07O0lBQU1ELFk7VUFDRTVDLE87OztLQURGNEMsWTtBQVVFekQsMEVBQWYiLCJmaWxlIjoiLi9saWIvRGF0YUNvbnRleHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUxheW91dEVmZmVjdCwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gIGZyb20gJ3JlYWN0JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5cbmNvbnN0IERhdGFDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7fSlcblxuY29uc3QgaW5pdGlhbERhdGEgPSB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiID8ge30gOiBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlbGVjdG9yYWxtYXAnKSkgPz8ge31cbmNvbnN0IGluaXRpYWxXaGljaERhdGEgPSBpbml0aWFsRGF0YS53aGljaERhdGEgfHwgJzIwMjAgUHJlc2lkZW50aWFsIEVsZWN0aW9uJ1xuY29uc3QgaW5pdGlhbFVzZXJTZWxlY3Rpb25zID0gaW5pdGlhbERhdGEuc2VsZWN0aW9ucyB8fCB7fVxuXG5jb25zdCB1c2VEYXRhID0gKGluaXRpYWxEYXRhKSA9PiB7XG4gIGNvbnN0IFt3aGljaERhdGEsIHNldFdoaWNoRGF0YV0gPSB1c2VTdGF0ZShpbml0aWFsV2hpY2hEYXRhKVxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShpbml0aWFsRGF0YSlcbiAgY29uc3QgW3VzZXJTZWxlY3Rpb25zLCBzZXRVc2VyU2VsZWN0aW9uc10gPSB1c2VTdGF0ZShpbml0aWFsVXNlclNlbGVjdGlvbnMpXG4gIGNvbnN0IFt3aW5kb3dTaXplLCBzZXRXaW5kb3dTaXplXSA9IHVzZVN0YXRlKFtdKVxuXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4geyB3aW5kb3dTaXplIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKGByZXN1bHRzL3ByZXNpZGVudC8ke3doaWNoRGF0YX0uanNvbmApXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKHJlcykgPT4geyBzZXREYXRhKHJlcykgfSlcbiAgfSwgW3doaWNoRGF0YV0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRXaW5kb3dTaXplKFt3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0XSlcblxuICAgIGNvbnN0IGxpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgc2V0V2luZG93U2l6ZShbd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodF0pXG4gICAgfVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBsaXN0ZW5lcilcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgbGlzdGVuZXIpXG4gICAgfVxuICB9LCBbXSlcblxuICBpZiAodHlwZW9mIGRhdGEgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybiB7IGxvYWRpbmc6IHRydWUsIHdpbmRvd1NpemUgfVxuXG4gIGNvbnN0IGRhdGFXaXRoVXNlclNlbGVjdGlvbnMgPSB7XG4gICAgLi4uZGF0YSxcbiAgICAuLi51c2VyU2VsZWN0aW9ucyxcbiAgfVxuXG4gIGNvbnNvbGUuZGVidWcoSlNPTi5zdHJpbmdpZnkoZGF0YVdpdGhVc2VyU2VsZWN0aW9ucykpXG5cbiAgY29uc3QgdG90YWxzID0gT2JqZWN0LmVudHJpZXMoZGF0YVdpdGhVc2VyU2VsZWN0aW9ucykucmVkdWNlKChcbiAgICBhY2MsXG4gICAgW3N0YXRlTmFtZSwgZGF0YV1cbiAgKSA9PiB7XG4gICAgY29uc3QgZmlsbEtleSA9IGRhdGEuZmlsbEtleVxuICAgIGNvbnN0IGVsZWN0b3JhbFZvdGVzID0gZGF0YVsnRWxlY3RvcmFsIFZvdGVzJ11cbiAgICBjb25zdCBncm91cCA9IGZpbGxLZXkgPT09IDEgPyAnbmV1dHJhbCcgOiAoZmlsbEtleSA9PT0gMiA/ICdkZW1zJyA6ICdHT1AnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmFjYyxcbiAgICAgIFtncm91cF06IGFjY1tncm91cF0gKyBlbGVjdG9yYWxWb3RlcyxcbiAgICB9XG4gIH0sIHtcbiAgICBHT1A6IDAsXG4gICAgZGVtczogMCxcbiAgICBuZXV0cmFsOiAwLFxuICB9KVxuXG4gIGNvbnN0IHVwZGF0ZVVzZXJTZWxlY3Rpb24gPSAoc3RhdGVOYW1lKSA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBkYXRhV2l0aFVzZXJTZWxlY3Rpb25zW3N0YXRlTmFtZV1cblxuICAgIGNvbnN0IHVwZGF0ZWRVc2VyU2VsZWN0aW9ucyA9IHtcbiAgICAgIC4uLnVzZXJTZWxlY3Rpb25zLFxuICAgICAgW3N0YXRlTmFtZV06IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGZpbGxLZXk6ICgoc3RhdGUuZmlsbEtleSArIDEpICUgMykgKyAxLFxuICAgICAgfVxuICAgIH1cblxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlbGVjdG9yYWxtYXAnLCBKU09OLnN0cmluZ2lmeSh7IHdoaWNoRGF0YTogd2hpY2hEYXRhLCBzZWxlY3Rpb25zOiB1cGRhdGVkVXNlclNlbGVjdGlvbnMgfSkpXG4gICAgc2V0VXNlclNlbGVjdGlvbnModXBkYXRlZFVzZXJTZWxlY3Rpb25zKVxuICB9XG5cbiAgY29uc3QgcmVzZXRVc2VyU2VsZWN0aW9ucyA9ICgpID0+IHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZWxlY3RvcmFsbWFwJywgSlNPTi5zdHJpbmdpZnkoeyB3aGljaERhdGEgfSkpXG4gICAgc2V0VXNlclNlbGVjdGlvbnMoe30pXG4gIH1cblxuICBjb25zdCBjaGFuZ2VEYXRhID0gKG5ld0RhdGEpID0+IHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZWxlY3RvcmFsbWFwJywgSlNPTi5zdHJpbmdpZnkoe30pKVxuICAgIHNldFVzZXJTZWxlY3Rpb25zKHt9KVxuICAgIHNldFdoaWNoRGF0YShuZXdEYXRhKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogd2hpY2hEYXRhLFxuICAgIHRvdGFscyxcbiAgICB3aW5kb3dTaXplLFxuICAgIGRhdGE6IGRhdGFXaXRoVXNlclNlbGVjdGlvbnMsXG4gICAgdXBkYXRlVXNlclNlbGVjdGlvbixcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICByZXNldFVzZXJTZWxlY3Rpb25zLFxuICAgIGNoYW5nZURhdGEsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IERhdGFQcm92aWRlciA9ICh7IGluaXRpYWxEYXRhLCBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IGRhdGEgPSB1c2VEYXRhKGluaXRpYWxEYXRhKVxuICBjb25zdCB7IGxvYWRpbmcgfSA9IGRhdGFcblxuICByZXR1cm4gPERhdGFDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtkYXRhfT5cbiAgICB7Y2hpbGRyZW59XG4gIDwvRGF0YUNvbnRleHQuUHJvdmlkZXI+XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgRGF0YUNvbnRleHRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/DataContext.js\n");

/***/ })

})