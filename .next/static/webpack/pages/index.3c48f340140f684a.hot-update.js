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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/formatDistanceToNow */ \"./node_modules/date-fns/esm/formatDistanceToNow/index.js\");\n/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/locale */ \"./node_modules/date-fns/esm/locale/index.js\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ \"./node_modules/@emotion/react/dist/emotion-react.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\Proyectos\\\\REACT\\\\next\\\\productos\\\\components\\\\layout\\\\DetailsProduct.js\",\n    _this = undefined;\n\n\n\n\n\n\n\nvar DetailsProduct = function DetailsProduct(_ref) {\n  var product = _ref.product;\n  console.log(product);\n  var comentarios = product.comentarios,\n      creado = product.creado,\n      descripcion = product.descripcion,\n      empresa = product.empresa,\n      id = product.id,\n      name = product.name,\n      url = product.url,\n      urlImage = product.urlImage,\n      votos = product.votos;\n  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"div\", {\n    className: \"card col-10 px-auto mx-auto\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"div\", {\n    \"class\": \"row gx-5\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"div\", {\n    \"class\": \"col-sm-5 text-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 17\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"div\", {\n    \"class\": \"col-sm-5 text-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 21\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"img\", {\n    \"class\": \"card-img align-items-center mx-auto text-center\",\n    src: urlImage,\n    alt: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 21\n    }\n  }))), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"div\", {\n    \"class\": \"col-sm-7\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 17\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"div\", {\n    \"class\": \"card-body\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 21\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"h3\", {\n    \"class\": \"card-title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 25\n    }\n  }, name), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"p\", {\n    \"class\": \"card-text\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 25\n    }\n  }, descripcion), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 25\n    }\n  }, \"Publicado hace: \", (0,date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(new Date(creado), {\n    locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_4__.es\n  }), \" \")))));\n};\n\n_c = DetailsProduct;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailsProduct);\n{\n  /*div class=\"card\" style=\"width: 500px;\">\r\n             <div class=\"row no-gutters\">\r\n             <div class=\"col-sm-5\">\r\n                 <img class=\"card-img\"src={urlImage} alt=\"\" />\r\n                 </div>\r\n                 <div class=\"col-sm-7\">\r\n                     <div class=\"card-body\">\r\n                         <h5 class=\"card-title\">{name}</h5>\r\n                         <p class=\"card-text\">{descripcion}</p>\r\n                         <p >Publicado hace: {formatDistanceToNow( new Date(creado), {locale: es} )} </p>\r\n                     </div>\r\n                 </div>\r\n             </div>\r\n         </div>\r\n     \r\n  //git//*/\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"DetailsProduct\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9EZXRhaWxzUHJvZHVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUksY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUFlO0FBQUEsTUFBYkMsT0FBYSxRQUFiQSxPQUFhO0FBQ2xDQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsT0FBWjtBQUNBLE1BQU9HLFdBQVAsR0FBNEVILE9BQTVFLENBQU9HLFdBQVA7QUFBQSxNQUFtQkMsTUFBbkIsR0FBNEVKLE9BQTVFLENBQW1CSSxNQUFuQjtBQUFBLE1BQTBCQyxXQUExQixHQUE0RUwsT0FBNUUsQ0FBMEJLLFdBQTFCO0FBQUEsTUFBc0NDLE9BQXRDLEdBQTRFTixPQUE1RSxDQUFzQ00sT0FBdEM7QUFBQSxNQUE4Q0MsRUFBOUMsR0FBNEVQLE9BQTVFLENBQThDTyxFQUE5QztBQUFBLE1BQWlEQyxJQUFqRCxHQUE0RVIsT0FBNUUsQ0FBaURRLElBQWpEO0FBQUEsTUFBc0RDLEdBQXRELEdBQTRFVCxPQUE1RSxDQUFzRFMsR0FBdEQ7QUFBQSxNQUEwREMsUUFBMUQsR0FBNEVWLE9BQTVFLENBQTBEVSxRQUExRDtBQUFBLE1BQW1FQyxLQUFuRSxHQUE0RVgsT0FBNUUsQ0FBbUVXLEtBQW5FO0FBQ0EsU0FDSTtBQUFLLGFBQVMsRUFBQyw2QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFNLFVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJO0FBQUssYUFBTSxzQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFNLHNCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFQTtBQUFLLGFBQU0saURBQVg7QUFBNEQsT0FBRyxFQUFFRCxRQUFqRTtBQUEyRSxPQUFHLEVBQUMsRUFBL0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZBLENBREosQ0FGSixFQVFJO0FBQUssYUFBTSxVQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQU0sV0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSSxhQUFNLFlBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF3QkYsSUFBeEIsQ0FESixFQUVJO0FBQUcsYUFBTSxXQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBc0JILFdBQXRCLENBRkosRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFxQlIsd0VBQW1CLENBQUUsSUFBSWUsSUFBSixDQUFTUixNQUFULENBQUYsRUFBb0I7QUFBQ1MsSUFBQUEsTUFBTSxFQUFFZiwrQ0FBRUE7QUFBWCxHQUFwQixDQUF4QyxNQUhKLENBREosQ0FSSixDQURKLENBREo7QUFxQkgsQ0F4QkQ7O0tBQU1DO0FBMEJOLCtEQUFlQSxjQUFmO0FBRUE7QUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0L0RldGFpbHNQcm9kdWN0LmpzPzkzZTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IGZvcm1hdERpc3RhbmNlVG9Ob3cgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0RGlzdGFuY2VUb05vdyc7XHJcbmltcG9ydCB7wqBlcyB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZSc7XHJcblxyXG5jb25zdCBEZXRhaWxzUHJvZHVjdCA9ICh7cHJvZHVjdH0pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHByb2R1Y3QpXHJcbiAgICBjb25zdCB7Y29tZW50YXJpb3MsY3JlYWRvLGRlc2NyaXBjaW9uLGVtcHJlc2EsaWQsbmFtZSx1cmwsdXJsSW1hZ2Usdm90b3N9ID0gcHJvZHVjdDtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNvbC0xMCBweC1hdXRvIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBneC01XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS01IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS01IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJjYXJkLWltZyBhbGlnbi1pdGVtcy1jZW50ZXIgbXgtYXV0byB0ZXh0LWNlbnRlclwic3JjPXt1cmxJbWFnZX0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS03XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJjYXJkLXRpdGxlXCI+e25hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHRcIj57ZGVzY3JpcGNpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCA+UHVibGljYWRvIGhhY2U6IHtmb3JtYXREaXN0YW5jZVRvTm93KCBuZXcgRGF0ZShjcmVhZG8pLCB7bG9jYWxlOiBlc30gKX0gPC9wPiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsc1Byb2R1Y3Q7XHJcblxyXG57LypkaXYgY2xhc3M9XCJjYXJkXCIgc3R5bGU9XCJ3aWR0aDogNTAwcHg7XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbm8tZ3V0dGVyc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTVcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJjYXJkLWltZ1wic3JjPXt1cmxJbWFnZX0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS03XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlXCI+e25hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHRcIj57ZGVzY3JpcGNpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCA+UHVibGljYWRvIGhhY2U6IHtmb3JtYXREaXN0YW5jZVRvTm93KCBuZXcgRGF0ZShjcmVhZG8pLCB7bG9jYWxlOiBlc30gKX0gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbi8vZ2l0Ly8qL30iXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiZm9ybWF0RGlzdGFuY2VUb05vdyIsImVzIiwiRGV0YWlsc1Byb2R1Y3QiLCJwcm9kdWN0IiwiY29uc29sZSIsImxvZyIsImNvbWVudGFyaW9zIiwiY3JlYWRvIiwiZGVzY3JpcGNpb24iLCJlbXByZXNhIiwiaWQiLCJuYW1lIiwidXJsIiwidXJsSW1hZ2UiLCJ2b3RvcyIsIkRhdGUiLCJsb2NhbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/DetailsProduct.js\n");

/***/ })

});