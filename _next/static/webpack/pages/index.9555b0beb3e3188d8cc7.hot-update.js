webpackHotUpdate_N_E("pages/index",{

/***/ "./lib/DataContext.js":
/*!****************************!*\
  !*** ./lib/DataContext.js ***!
  \****************************/
/*! exports provided: DataProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DataProvider\", function() { return DataProvider; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\nvar _jsxFileName = \"/app/lib/DataContext.js\",\n    _s = $RefreshSig$(),\n    _this = undefined,\n    _s2 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar DataContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createContext({});\nvar initialUserSelections = false ? undefined : JSON.parse(window.localStorage.getItem('uselectoralmap')) || {};\n\nvar useData = function useData() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])('2020 Presidential Election'),\n      whichData = _useState[0],\n      setWhichData = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(undefined),\n      data = _useState2[0],\n      setData = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(initialUserSelections),\n      userSelections = _useState3[0],\n      setUserSelections = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      windowSize = _useState4[0],\n      setWindowSize = _useState4[1];\n\n  if (false) {}\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(\"results/president/\".concat(whichData, \".json\")).then(function (res) {\n      return res.json();\n    }).then(function (res) {\n      setData(res);\n    });\n  }, [whichData]);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var listener = function listener() {\n      setWindowSize([window.innerWidth, window.innerHeight]);\n    };\n\n    window.addEventListener('resize', listener);\n    return function () {\n      window.removeEventListener('resize', listener);\n    };\n  }, []);\n  if (typeof data === \"undefined\") return {\n    loading: true\n  };\n\n  var dataWithUserSelections = _objectSpread(_objectSpread({}, data), userSelections);\n\n  console.debug(JSON.stringify(dataWithUserSelections));\n  var totals = Object.entries(dataWithUserSelections).reduce(function (acc, _ref) {\n    var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, 2),\n        stateName = _ref2[0],\n        data = _ref2[1];\n\n    var fillKey = data.fillKey;\n    var electoralVotes = data['Electoral Votes'];\n    var group = fillKey === 1 ? 'neutral' : fillKey === 2 ? 'dems' : 'GOP';\n    return _objectSpread(_objectSpread({}, acc), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, group, acc[group] + electoralVotes));\n  }, {\n    GOP: 0,\n    dems: 0,\n    neutral: 0\n  });\n\n  var updateUserSelection = function updateUserSelection(stateName) {\n    var state = dataWithUserSelections[stateName];\n\n    var updatedUserSelections = _objectSpread(_objectSpread({}, userSelections), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, stateName, _objectSpread(_objectSpread({}, state), {}, {\n      fillKey: (state.fillKey + 1) % 3 + 1\n    })));\n\n    window.localStorage.setItem('uselectoralmap', JSON.stringify(updatedUserSelections));\n    setUserSelections(updatedUserSelections);\n  };\n\n  var resetUserSelections = function resetUserSelections() {\n    window.localStorage.setItem('uselectoralmap', JSON.stringify({}));\n    setUserSelections({});\n  };\n\n  return {\n    title: whichData,\n    totals: totals,\n    windowSize: windowSize,\n    data: dataWithUserSelections,\n    updateUserSelection: updateUserSelection,\n    loading: false,\n    resetUserSelections: resetUserSelections,\n    changeData: setWhichData\n  };\n};\n\n_s(useData, \"tHcF1opHHEUSBMut+Z+QMYDOfuU=\");\n\nvar DataProvider = function DataProvider(_ref3) {\n  _s2();\n\n  var children = _ref3.children;\n  var data = useData();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(DataContext.Provider, {\n    value: data,\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 95,\n    columnNumber: 10\n  }, _this);\n};\n\n_s2(DataProvider, \"YnzXR8fPhsYQOtPUC4zYRXREqzc=\", false, function () {\n  return [useData];\n});\n\n_c = DataProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataContext);\n\nvar _c;\n\n$RefreshReg$(_c, \"DataProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL0RhdGFDb250ZXh0LmpzP2JiMGUiXSwibmFtZXMiOlsiRGF0YUNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJpbml0aWFsVXNlclNlbGVjdGlvbnMiLCJKU09OIiwicGFyc2UiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidXNlRGF0YSIsInVzZVN0YXRlIiwid2hpY2hEYXRhIiwic2V0V2hpY2hEYXRhIiwidW5kZWZpbmVkIiwiZGF0YSIsInNldERhdGEiLCJ1c2VyU2VsZWN0aW9ucyIsInNldFVzZXJTZWxlY3Rpb25zIiwid2luZG93U2l6ZSIsInNldFdpbmRvd1NpemUiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwibGlzdGVuZXIiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImxvYWRpbmciLCJkYXRhV2l0aFVzZXJTZWxlY3Rpb25zIiwiY29uc29sZSIsImRlYnVnIiwic3RyaW5naWZ5IiwidG90YWxzIiwiT2JqZWN0IiwiZW50cmllcyIsInJlZHVjZSIsImFjYyIsInN0YXRlTmFtZSIsImZpbGxLZXkiLCJlbGVjdG9yYWxWb3RlcyIsImdyb3VwIiwiR09QIiwiZGVtcyIsIm5ldXRyYWwiLCJ1cGRhdGVVc2VyU2VsZWN0aW9uIiwic3RhdGUiLCJ1cGRhdGVkVXNlclNlbGVjdGlvbnMiLCJzZXRJdGVtIiwicmVzZXRVc2VyU2VsZWN0aW9ucyIsInRpdGxlIiwiY2hhbmdlRGF0YSIsIkRhdGFQcm92aWRlciIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLGdCQUFHQyw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLEVBQXBCLENBQXBCO0FBRUEsSUFBTUMscUJBQXFCLEdBQUcsUUFBZ0MsU0FBaEMsR0FBcUNDLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxNQUFNLENBQUNDLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLGdCQUE1QixDQUFYLEtBQTZELEVBQWhJOztBQUVBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFBQSxrQkFDY0Msc0RBQVEsQ0FBQyw0QkFBRCxDQUR0QjtBQUFBLE1BQ2JDLFNBRGE7QUFBQSxNQUNGQyxZQURFOztBQUFBLG1CQUVJRixzREFBUSxDQUFDRyxTQUFELENBRlo7QUFBQSxNQUViQyxJQUZhO0FBQUEsTUFFUEMsT0FGTzs7QUFBQSxtQkFHd0JMLHNEQUFRLENBQUNQLHFCQUFELENBSGhDO0FBQUEsTUFHYmEsY0FIYTtBQUFBLE1BR0dDLGlCQUhIOztBQUFBLG1CQUlnQlAsc0RBQVEsQ0FBQyxFQUFELENBSnhCO0FBQUEsTUFJYlEsVUFKYTtBQUFBLE1BSURDLGFBSkM7O0FBTXBCLGFBQW1DO0FBRW5DQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsNkRBQUssNkJBQXNCVixTQUF0QixXQUFMLENBQ0dXLElBREgsQ0FDUSxVQUFDQyxHQUFEO0FBQUEsYUFBU0EsR0FBRyxDQUFDQyxJQUFKLEVBQVQ7QUFBQSxLQURSLEVBRUdGLElBRkgsQ0FFUSxVQUFDQyxHQUFELEVBQVM7QUFBRVIsYUFBTyxDQUFDUSxHQUFELENBQVA7QUFBYyxLQUZqQztBQUdELEdBSlEsRUFJTixDQUFDWixTQUFELENBSk0sQ0FBVDtBQU1BUyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNSyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCTixtQkFBYSxDQUFDLENBQUNiLE1BQU0sQ0FBQ29CLFVBQVIsRUFBb0JwQixNQUFNLENBQUNxQixXQUEzQixDQUFELENBQWI7QUFDRCxLQUZEOztBQUdBckIsVUFBTSxDQUFDc0IsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NILFFBQWxDO0FBRUEsV0FBTyxZQUFNO0FBQ1huQixZQUFNLENBQUN1QixtQkFBUCxDQUEyQixRQUEzQixFQUFxQ0osUUFBckM7QUFDRCxLQUZEO0FBR0QsR0FUUSxFQVNOLEVBVE0sQ0FBVDtBQVdBLE1BQUksT0FBT1gsSUFBUCxLQUFnQixXQUFwQixFQUFpQyxPQUFPO0FBQUVnQixXQUFPLEVBQUU7QUFBWCxHQUFQOztBQUVqQyxNQUFNQyxzQkFBc0IsbUNBQ3ZCakIsSUFEdUIsR0FFdkJFLGNBRnVCLENBQTVCOztBQUtBZ0IsU0FBTyxDQUFDQyxLQUFSLENBQWM3QixJQUFJLENBQUM4QixTQUFMLENBQWVILHNCQUFmLENBQWQ7QUFFQSxNQUFNSSxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlTixzQkFBZixFQUF1Q08sTUFBdkMsQ0FBOEMsVUFDM0RDLEdBRDJELFFBR3hEO0FBQUE7QUFBQSxRQURGQyxTQUNFO0FBQUEsUUFEUzFCLElBQ1Q7O0FBQ0gsUUFBTTJCLE9BQU8sR0FBRzNCLElBQUksQ0FBQzJCLE9BQXJCO0FBQ0EsUUFBTUMsY0FBYyxHQUFHNUIsSUFBSSxDQUFDLGlCQUFELENBQTNCO0FBQ0EsUUFBTTZCLEtBQUssR0FBR0YsT0FBTyxLQUFLLENBQVosR0FBZ0IsU0FBaEIsR0FBNkJBLE9BQU8sS0FBSyxDQUFaLEdBQWdCLE1BQWhCLEdBQXlCLEtBQXBFO0FBRUEsMkNBQ0tGLEdBREwscUdBRUdJLEtBRkgsRUFFV0osR0FBRyxDQUFDSSxLQUFELENBQUgsR0FBYUQsY0FGeEI7QUFJRCxHQVpjLEVBWVo7QUFDREUsT0FBRyxFQUFFLENBREo7QUFFREMsUUFBSSxFQUFFLENBRkw7QUFHREMsV0FBTyxFQUFFO0FBSFIsR0FaWSxDQUFmOztBQWtCQSxNQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNQLFNBQUQsRUFBZTtBQUN6QyxRQUFNUSxLQUFLLEdBQUdqQixzQkFBc0IsQ0FBQ1MsU0FBRCxDQUFwQzs7QUFFQSxRQUFNUyxxQkFBcUIsbUNBQ3RCakMsY0FEc0IscUdBRXhCd0IsU0FGd0Isa0NBR3BCUSxLQUhvQjtBQUl2QlAsYUFBTyxFQUFHLENBQUNPLEtBQUssQ0FBQ1AsT0FBTixHQUFnQixDQUFqQixJQUFzQixDQUF2QixHQUE0QjtBQUpkLFFBQTNCOztBQVFBbkMsVUFBTSxDQUFDQyxZQUFQLENBQW9CMkMsT0FBcEIsQ0FBNEIsZ0JBQTVCLEVBQThDOUMsSUFBSSxDQUFDOEIsU0FBTCxDQUFlZSxxQkFBZixDQUE5QztBQUNBaEMscUJBQWlCLENBQUNnQyxxQkFBRCxDQUFqQjtBQUNELEdBYkQ7O0FBZUEsTUFBTUUsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFNO0FBQ2hDN0MsVUFBTSxDQUFDQyxZQUFQLENBQW9CMkMsT0FBcEIsQ0FBNEIsZ0JBQTVCLEVBQThDOUMsSUFBSSxDQUFDOEIsU0FBTCxDQUFlLEVBQWYsQ0FBOUM7QUFDQWpCLHFCQUFpQixDQUFDLEVBQUQsQ0FBakI7QUFDRCxHQUhEOztBQUtBLFNBQU87QUFDTG1DLFNBQUssRUFBRXpDLFNBREY7QUFFTHdCLFVBQU0sRUFBTkEsTUFGSztBQUdMakIsY0FBVSxFQUFWQSxVQUhLO0FBSUxKLFFBQUksRUFBRWlCLHNCQUpEO0FBS0xnQix1QkFBbUIsRUFBbkJBLG1CQUxLO0FBTUxqQixXQUFPLEVBQUUsS0FOSjtBQU9McUIsdUJBQW1CLEVBQW5CQSxtQkFQSztBQVFMRSxjQUFVLEVBQUV6QztBQVJQLEdBQVA7QUFVRCxDQWxGRDs7R0FBTUgsTzs7QUFvRkMsSUFBTTZDLFlBQVksR0FBRyxTQUFmQSxZQUFlLFFBQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxTQUFmQSxRQUFlO0FBQzVDLE1BQU16QyxJQUFJLEdBQUdMLE9BQU8sRUFBcEI7QUFFQSxzQkFBTyxxRUFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUVLLElBQTdCO0FBQUEsY0FDSnlDO0FBREk7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBR0QsQ0FOTTs7SUFBTUQsWTtVQUNFN0MsTzs7O0tBREY2QyxZO0FBU0V0RCwwRUFBZiIsImZpbGUiOiIuL2xpYi9EYXRhQ29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlTGF5b3V0RWZmZWN0LCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSAgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcblxuY29uc3QgRGF0YUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KVxuXG5jb25zdCBpbml0aWFsVXNlclNlbGVjdGlvbnMgPSB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiID8ge30gOiBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlbGVjdG9yYWxtYXAnKSkgfHwge31cblxuY29uc3QgdXNlRGF0YSA9ICgpID0+IHtcbiAgY29uc3QgW3doaWNoRGF0YSwgc2V0V2hpY2hEYXRhXSA9IHVzZVN0YXRlKCcyMDIwIFByZXNpZGVudGlhbCBFbGVjdGlvbicpXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHVuZGVmaW5lZClcbiAgY29uc3QgW3VzZXJTZWxlY3Rpb25zLCBzZXRVc2VyU2VsZWN0aW9uc10gPSB1c2VTdGF0ZShpbml0aWFsVXNlclNlbGVjdGlvbnMpXG4gIGNvbnN0IFt3aW5kb3dTaXplLCBzZXRXaW5kb3dTaXplXSA9IHVzZVN0YXRlKFtdKVxuXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4ge31cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKGByZXN1bHRzL3ByZXNpZGVudC8ke3doaWNoRGF0YX0uanNvbmApXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKHJlcykgPT4geyBzZXREYXRhKHJlcykgfSlcbiAgfSwgW3doaWNoRGF0YV0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgIHNldFdpbmRvd1NpemUoW3dpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHRdKVxuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgbGlzdGVuZXIpXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGxpc3RlbmVyKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgaWYgKHR5cGVvZiBkYXRhID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4geyBsb2FkaW5nOiB0cnVlIH1cblxuICBjb25zdCBkYXRhV2l0aFVzZXJTZWxlY3Rpb25zID0ge1xuICAgIC4uLmRhdGEsXG4gICAgLi4udXNlclNlbGVjdGlvbnMsXG4gIH1cblxuICBjb25zb2xlLmRlYnVnKEpTT04uc3RyaW5naWZ5KGRhdGFXaXRoVXNlclNlbGVjdGlvbnMpKVxuXG4gIGNvbnN0IHRvdGFscyA9IE9iamVjdC5lbnRyaWVzKGRhdGFXaXRoVXNlclNlbGVjdGlvbnMpLnJlZHVjZSgoXG4gICAgYWNjLFxuICAgIFtzdGF0ZU5hbWUsIGRhdGFdXG4gICkgPT4ge1xuICAgIGNvbnN0IGZpbGxLZXkgPSBkYXRhLmZpbGxLZXlcbiAgICBjb25zdCBlbGVjdG9yYWxWb3RlcyA9IGRhdGFbJ0VsZWN0b3JhbCBWb3RlcyddXG4gICAgY29uc3QgZ3JvdXAgPSBmaWxsS2V5ID09PSAxID8gJ25ldXRyYWwnIDogKGZpbGxLZXkgPT09IDIgPyAnZGVtcycgOiAnR09QJylcblxuICAgIHJldHVybiB7XG4gICAgICAuLi5hY2MsXG4gICAgICBbZ3JvdXBdOiBhY2NbZ3JvdXBdICsgZWxlY3RvcmFsVm90ZXMsXG4gICAgfVxuICB9LCB7XG4gICAgR09QOiAwLFxuICAgIGRlbXM6IDAsXG4gICAgbmV1dHJhbDogMCxcbiAgfSlcblxuICBjb25zdCB1cGRhdGVVc2VyU2VsZWN0aW9uID0gKHN0YXRlTmFtZSkgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZGF0YVdpdGhVc2VyU2VsZWN0aW9uc1tzdGF0ZU5hbWVdXG5cbiAgICBjb25zdCB1cGRhdGVkVXNlclNlbGVjdGlvbnMgPSB7XG4gICAgICAuLi51c2VyU2VsZWN0aW9ucyxcbiAgICAgIFtzdGF0ZU5hbWVdOiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmaWxsS2V5OiAoKHN0YXRlLmZpbGxLZXkgKyAxKSAlIDMpICsgMSxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZWxlY3RvcmFsbWFwJywgSlNPTi5zdHJpbmdpZnkodXBkYXRlZFVzZXJTZWxlY3Rpb25zKSlcbiAgICBzZXRVc2VyU2VsZWN0aW9ucyh1cGRhdGVkVXNlclNlbGVjdGlvbnMpXG4gIH1cblxuICBjb25zdCByZXNldFVzZXJTZWxlY3Rpb25zID0gKCkgPT4ge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlbGVjdG9yYWxtYXAnLCBKU09OLnN0cmluZ2lmeSh7fSkpXG4gICAgc2V0VXNlclNlbGVjdGlvbnMoe30pXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRpdGxlOiB3aGljaERhdGEsXG4gICAgdG90YWxzLFxuICAgIHdpbmRvd1NpemUsXG4gICAgZGF0YTogZGF0YVdpdGhVc2VyU2VsZWN0aW9ucyxcbiAgICB1cGRhdGVVc2VyU2VsZWN0aW9uLFxuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIHJlc2V0VXNlclNlbGVjdGlvbnMsXG4gICAgY2hhbmdlRGF0YTogc2V0V2hpY2hEYXRhLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBEYXRhUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IGRhdGEgPSB1c2VEYXRhKClcblxuICByZXR1cm4gPERhdGFDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtkYXRhfT5cbiAgICB7Y2hpbGRyZW59XG4gIDwvRGF0YUNvbnRleHQuUHJvdmlkZXI+XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgRGF0YUNvbnRleHRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/DataContext.js\n");

/***/ })

})