"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/layout/DetailsProduct.js":
/*!*********************************************!*\
  !*** ./components/layout/DetailsProduct.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/formatDistanceToNow */ \"./node_modules/date-fns/esm/formatDistanceToNow/index.js\");\n/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/locale */ \"./node_modules/date-fns/esm/locale/index.js\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ \"./node_modules/@emotion/react/dist/emotion-react.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\Proyectos\\\\REACT\\\\next\\\\productos\\\\components\\\\layout\\\\DetailsProduct.js\",\n    _this = undefined;\n\n\n\n\n\n\n\nvar DetailsProduct = function DetailsProduct(_ref) {\n  var product = _ref.product;\n  console.log(product);\n  var comentarios = product.comentarios,\n      creado = product.creado,\n      descripcion = product.descripcion,\n      empresa = product.empresa,\n      id = product.id,\n      name = product.name,\n      url = product.url,\n      urlImage = product.urlImage,\n      votos = product.votos;\n  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"div\", {\n    className: \"card col-10 px-auto mx-auto\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"div\", {\n    \"class\": \"row gx-5\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"div\", {\n    \"class\": \"col-sm-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 17\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"div\", {\n    \"class\": \"col-sm-11 mx-auto\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 21\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"img\", {\n    \"class\": \"card-img align-items-center mt-3 mx-auto \",\n    src: urlImage,\n    alt: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 25\n    }\n  }))), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"div\", {\n    \"class\": \"col-sm-7\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 17\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"div\", {\n    \"class\": \"card-body\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 21\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"h3\", {\n    \"class\": \"card-title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 25\n    }\n  }, name), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"p\", {\n    \"class\": \"card-text\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 25\n    }\n  }, descripcion), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 25\n    }\n  }, \"Publicado hace: \", (0,date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(new Date(creado), {\n    locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_4__.es\n  }), \" \")))));\n};\n\n_c = DetailsProduct;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailsProduct);\n{\n  /*div class=\"card\" style=\"width: 500px;\">\r\n             <div class=\"row no-gutters\">\r\n             <div class=\"col-sm-5\">\r\n                 <img class=\"card-img\"src={urlImage} alt=\"\" />\r\n                 </div>\r\n                 <div class=\"col-sm-7\">\r\n                     <div class=\"card-body\">\r\n                         <h5 class=\"card-title\">{name}</h5>\r\n                         <p class=\"card-text\">{descripcion}</p>\r\n                         <p >Publicado hace: {formatDistanceToNow( new Date(creado), {locale: es} )} </p>\r\n                     </div>\r\n                 </div>\r\n             </div>\r\n         </div>\r\n     \r\n  //git//*/\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"DetailsProduct\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9EZXRhaWxzUHJvZHVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUksY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUFlO0FBQUEsTUFBYkMsT0FBYSxRQUFiQSxPQUFhO0FBQ2xDQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsT0FBWjtBQUNBLE1BQU9HLFdBQVAsR0FBNEVILE9BQTVFLENBQU9HLFdBQVA7QUFBQSxNQUFtQkMsTUFBbkIsR0FBNEVKLE9BQTVFLENBQW1CSSxNQUFuQjtBQUFBLE1BQTBCQyxXQUExQixHQUE0RUwsT0FBNUUsQ0FBMEJLLFdBQTFCO0FBQUEsTUFBc0NDLE9BQXRDLEdBQTRFTixPQUE1RSxDQUFzQ00sT0FBdEM7QUFBQSxNQUE4Q0MsRUFBOUMsR0FBNEVQLE9BQTVFLENBQThDTyxFQUE5QztBQUFBLE1BQWlEQyxJQUFqRCxHQUE0RVIsT0FBNUUsQ0FBaURRLElBQWpEO0FBQUEsTUFBc0RDLEdBQXRELEdBQTRFVCxPQUE1RSxDQUFzRFMsR0FBdEQ7QUFBQSxNQUEwREMsUUFBMUQsR0FBNEVWLE9BQTVFLENBQTBEVSxRQUExRDtBQUFBLE1BQW1FQyxLQUFuRSxHQUE0RVgsT0FBNUUsQ0FBbUVXLEtBQW5FO0FBQ0EsU0FDSTtBQUFLLGFBQVMsRUFBQyw2QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFNLFVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJO0FBQUssYUFBTSxVQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQU0sbUJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBTSwyQ0FBWDtBQUFzRCxPQUFHLEVBQUVELFFBQTNEO0FBQXFFLE9BQUcsRUFBQyxFQUF6RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixDQUZKLEVBT0k7QUFBSyxhQUFNLFVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBTSxXQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFJLGFBQU0sWUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXdCRixJQUF4QixDQURKLEVBRUk7QUFBRyxhQUFNLFdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFzQkgsV0FBdEIsQ0FGSixFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQXFCUix3RUFBbUIsQ0FBRSxJQUFJZSxJQUFKLENBQVNSLE1BQVQsQ0FBRixFQUFvQjtBQUFDUyxJQUFBQSxNQUFNLEVBQUVmLCtDQUFFQTtBQUFYLEdBQXBCLENBQXhDLE1BSEosQ0FESixDQVBKLENBREosQ0FESjtBQW9CSCxDQXZCRDs7S0FBTUM7QUF5Qk4sK0RBQWVBLGNBQWY7QUFFQTtBQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvRGV0YWlsc1Byb2R1Y3QuanM/OTNlMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgZm9ybWF0RGlzdGFuY2VUb05vdyBmcm9tICdkYXRlLWZucy9mb3JtYXREaXN0YW5jZVRvTm93JztcclxuaW1wb3J0IHvCoGVzIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlJztcclxuXHJcbmNvbnN0IERldGFpbHNQcm9kdWN0ID0gKHtwcm9kdWN0fSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocHJvZHVjdClcclxuICAgIGNvbnN0IHtjb21lbnRhcmlvcyxjcmVhZG8sZGVzY3JpcGNpb24sZW1wcmVzYSxpZCxuYW1lLHVybCx1cmxJbWFnZSx2b3Rvc30gPSBwcm9kdWN0O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY29sLTEwIHB4LWF1dG8gbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGd4LTVcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTExIG14LWF1dG9cIj4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImNhcmQtaW1nIGFsaWduLWl0ZW1zLWNlbnRlciBtdC0zIG14LWF1dG8gXCJzcmM9e3VybEltYWdlfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImNhcmQtdGl0bGVcIj57bmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dFwiPntkZXNjcmlwY2lvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwID5QdWJsaWNhZG8gaGFjZToge2Zvcm1hdERpc3RhbmNlVG9Ob3coIG5ldyBEYXRlKGNyZWFkbyksIHtsb2NhbGU6IGVzfSApfSA8L3A+ICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxzUHJvZHVjdDtcclxuXHJcbnsvKmRpdiBjbGFzcz1cImNhcmRcIiBzdHlsZT1cIndpZHRoOiA1MDBweDtcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBuby1ndXR0ZXJzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImNhcmQtaW1nXCJzcmM9e3VybEltYWdlfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImNhcmQtdGl0bGVcIj57bmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dFwiPntkZXNjcmlwY2lvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwID5QdWJsaWNhZG8gaGFjZToge2Zvcm1hdERpc3RhbmNlVG9Ob3coIG5ldyBEYXRlKGNyZWFkbyksIHtsb2NhbGU6IGVzfSApfSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuLy9naXQvLyovfSJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJmb3JtYXREaXN0YW5jZVRvTm93IiwiZXMiLCJEZXRhaWxzUHJvZHVjdCIsInByb2R1Y3QiLCJjb25zb2xlIiwibG9nIiwiY29tZW50YXJpb3MiLCJjcmVhZG8iLCJkZXNjcmlwY2lvbiIsImVtcHJlc2EiLCJpZCIsIm5hbWUiLCJ1cmwiLCJ1cmxJbWFnZSIsInZvdG9zIiwiRGF0ZSIsImxvY2FsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout/DetailsProduct.js\n");

/***/ })

});