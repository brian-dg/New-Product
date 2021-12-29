"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/products/[id]",{

/***/ "./pages/products/[id].js":
/*!********************************!*\
  !*** ./pages/products/[id].js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Administrador_Desktop_Proyectos_REACT_next_productos_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var C_Users_Administrador_Desktop_Proyectos_REACT_next_productos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var C_Users_Administrador_Desktop_Proyectos_REACT_next_productos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Administrador_Desktop_Proyectos_REACT_next_productos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../firebase */ \"./firebase/index.js\");\n/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../firebase/firebase */ \"./firebase/firebase.js\");\n/* harmony import */ var _components_layout_404__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/layout/404 */ \"./components/layout/404.js\");\n/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/layout/Layout */ \"./components/layout/Layout.js\");\n/* harmony import */ var date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns/formatDistanceToNow */ \"./node_modules/date-fns/esm/formatDistanceToNow/index.js\");\n/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns/locale */ \"./node_modules/date-fns/esm/locale/index.js\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/react */ \"./node_modules/@emotion/react/dist/emotion-react.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\Proyectos\\\\REACT\\\\next\\\\productos\\\\pages\\\\products\\\\[id].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nvar Products = function Products() {\n  _s();\n\n  //State del componente\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}),\n      product = _useState[0],\n      saveProduct = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      error = _useState2[0],\n      saveError = _useState2[1]; //routing para obtener el id actual \n\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n  var id = router.query.id;\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_firebase__WEBPACK_IMPORTED_MODULE_4__.FirebaseContext),\n      firebase = _useContext.firebase;\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    if (id) {\n      var getProduct = /*#__PURE__*/function () {\n        var _ref = (0,C_Users_Administrador_Desktop_Proyectos_REACT_next_productos_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/C_Users_Administrador_Desktop_Proyectos_REACT_next_productos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n          var productQuery, product;\n          return C_Users_Administrador_Desktop_Proyectos_REACT_next_productos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n            while (1) {\n              switch (_context.prev = _context.next) {\n                case 0:\n                  _context.next = 2;\n                  return _firebase_firebase__WEBPACK_IMPORTED_MODULE_5__[\"default\"].db.collection('productos').doc(id);\n\n                case 2:\n                  productQuery = _context.sent;\n                  _context.next = 5;\n                  return productQuery.get();\n\n                case 5:\n                  product = _context.sent;\n\n                  if (product.exists) {\n                    saveProduct(product.data());\n                  } else {\n                    saveError(true);\n                  }\n\n                case 7:\n                case \"end\":\n                  return _context.stop();\n              }\n            }\n          }, _callee);\n        }));\n\n        return function getProduct() {\n          return _ref.apply(this, arguments);\n        };\n      }();\n\n      getProduct();\n    }\n  }, [id]);\n  if (Object.keys(product).length === 0) return 'Cargando...';\n  var comentarios = product.comentarios,\n      creado = product.creado,\n      descripcion = product.descripcion,\n      empresa = product.empresa,\n      name = product.name,\n      url = product.url,\n      urlImage = product.urlImage,\n      votos = product.votos;\n  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, error && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_layout_404__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 23\n    }\n  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(\"div\", {\n    className: \"container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 17\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 21\n    }\n  }, name), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(\"div\", {\n    className: \"container row justify-content-between\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 21\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(\"div\", {\n    className: \"col-6\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 25\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 29\n    }\n  }, \" Publicado hace: \", (0,date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(new Date(creado), {\n    locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_10__.es\n  }), \" \"), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(\"img\", {\n    src: urlImage,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 29\n    }\n  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 29\n    }\n  }, descripcion), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 29\n    }\n  }, \"Agregue tu comentario\"), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(\"form\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 29\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(\"input\", {\n    className: \"col-12 \",\n    type: \"text\",\n    id: \"message\",\n    name: \"message\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 29\n    }\n  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(\"input\", {\n    type: \"submit\",\n    className: \"mt-3 col-12 text-center btn btn-danger\",\n    value: \"agregar Comentarios\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 29\n    }\n  })), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 29\n    }\n  }, \"Comentarios\"), comentarios.map(function (comentario) {\n    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(\"li\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 32\n      }\n    }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 36\n      }\n    }, comentario.name), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 36\n      }\n    }, \"Escrito por: \", comentario.usuarioNombre));\n  })), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(\"aside\", {\n    className: \"col-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 25\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(\"button\", {\n    className: \"btn btn-danger col-12 \",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 29\n    }\n  }, \"Visita URL\"), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 29\n    }\n  }, votos), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(\"button\", {\n    className: \"btn btn-danger col-12 \",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 29\n    }\n  }, \"Votar\"))))));\n};\n\n_s(Products, \"7yqUMyVdzq/HbDHD01bLo5pLung=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];\n});\n\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\n\nvar _c;\n\n$RefreshReg$(_c, \"Products\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0I7QUFBQSxHQUExQixDQWhCTCxDQURKLEVBd0JJO0FBQU8sYUFBUyxFQUFDLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFRLGFBQVMsRUFBQyx3QkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSUwsS0FBSixDQUZKLEVBR0k7QUFBUSxhQUFTLEVBQUMsd0JBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISixDQXhCSixDQUhKLENBRkosQ0FESixDQURKO0FBMkNILENBdkVEOztHQUFNM0I7VUFNYVA7OztLQU5iTztBQXlFTiwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9kdWN0cy9baWRdLmpzPzk4YmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LHVzZUNvbnRleHQsdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQge0ZpcmViYXNlQ29udGV4dH0gZnJvbSAnLi4vLi4vZmlyZWJhc2UnO1xyXG5pbXBvcnQgZmlyZWJhc2VzIGZyb20gJy4uLy4uL2ZpcmViYXNlL2ZpcmViYXNlJztcclxuaW1wb3J0IEVycm9yNDA0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0LzQwNCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0J1xyXG5pbXBvcnQgZm9ybWF0RGlzdGFuY2VUb05vdyBmcm9tICdkYXRlLWZucy9mb3JtYXREaXN0YW5jZVRvTm93JztcclxuaW1wb3J0IHvCoGVzIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlJztcclxuXHJcbmNvbnN0IFByb2R1Y3RzID0gKCkgPT4ge1xyXG5cclxuICAgIC8vU3RhdGUgZGVsIGNvbXBvbmVudGVcclxuICAgIGNvbnN0IFtwcm9kdWN0LCBzYXZlUHJvZHVjdF0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbZXJyb3Isc2F2ZUVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIC8vcm91dGluZyBwYXJhIG9idGVuZXIgZWwgaWQgYWN0dWFsIFxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7cXVlcnk6IHtpZH19ID0gcm91dGVyO1xyXG5cclxuICAgIGNvbnN0IHtmaXJlYmFzZX0gPSB1c2VDb250ZXh0KEZpcmViYXNlQ29udGV4dCk7IFxyXG4gICAgdXNlRWZmZWN0ICgoKSA9PntcclxuICAgICAgICBpZihpZCkge1xyXG4gICAgICAgICAgICBjb25zdCBnZXRQcm9kdWN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdFF1ZXJ5ID0gYXdhaXQgZmlyZWJhc2VzLmRiLmNvbGxlY3Rpb24oJ3Byb2R1Y3RvcycpLmRvYyhpZCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0ID0gYXdhaXQgcHJvZHVjdFF1ZXJ5LmdldCgpO1xyXG4gICAgICAgICAgICAgICAgaWYocHJvZHVjdC5leGlzdHMpIHtcclxuICAgICAgICAgICAgICAgICAgIHNhdmVQcm9kdWN0KHByb2R1Y3QuZGF0YSgpICk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2F2ZUVycm9yKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGdldFByb2R1Y3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbaWRdKVxyXG5cclxuICAgIGlmKE9iamVjdC5rZXlzKHByb2R1Y3QpLmxlbmd0aCA9PT0gMCkgcmV0dXJuICdDYXJnYW5kby4uLic7XHJcbiAgICBjb25zdCB7Y29tZW50YXJpb3MsY3JlYWRvLGRlc2NyaXBjaW9uLGVtcHJlc2EsbmFtZSx1cmwsdXJsSW1hZ2Usdm90b3N9ID0gcHJvZHVjdDtcclxuICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAge2Vycm9yICYmIDxFcnJvcjQwNC8+fVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPntuYW1lfTwvaDE+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgcm93IGp1c3RpZnktY29udGVudC1iZXR3ZWVuJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC02Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBQdWJsaWNhZG8gaGFjZToge2Zvcm1hdERpc3RhbmNlVG9Ob3cobmV3IERhdGUoY3JlYWRvKSwge2xvY2FsZTogZXN9KX0gPC9wPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt1cmxJbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntkZXNjcmlwY2lvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+QWdyZWd1ZSB0dSBjb21lbnRhcmlvPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtMTIgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibWVzc2FnZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJtdC0zIGNvbC0xMiB0ZXh0LWNlbnRlciBidG4gYnRuLWRhbmdlclwiIHZhbHVlPVwiYWdyZWdhciBDb21lbnRhcmlvc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+Q29tZW50YXJpb3M8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbWVudGFyaW9zLm1hcChjb21lbnRhcmlvID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2NvbWVudGFyaW8ubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RXNjcml0byBwb3I6IHtjb21lbnRhcmlvLnVzdWFyaW9Ob21icmV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4gKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPSdjb2wtNCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1kYW5nZXIgY29sLTEyICc+VmlzaXRhIFVSTDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3ZvdG9zfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLWRhbmdlciBjb2wtMTIgJz5Wb3RhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2FzaWRlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICAgICBcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkZpcmViYXNlQ29udGV4dCIsImZpcmViYXNlcyIsIkVycm9yNDA0IiwiTGF5b3V0IiwiZm9ybWF0RGlzdGFuY2VUb05vdyIsImVzIiwiUHJvZHVjdHMiLCJwcm9kdWN0Iiwic2F2ZVByb2R1Y3QiLCJlcnJvciIsInNhdmVFcnJvciIsInJvdXRlciIsImlkIiwicXVlcnkiLCJmaXJlYmFzZSIsImdldFByb2R1Y3QiLCJkYiIsImNvbGxlY3Rpb24iLCJkb2MiLCJwcm9kdWN0UXVlcnkiLCJnZXQiLCJleGlzdHMiLCJkYXRhIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImNvbWVudGFyaW9zIiwiY3JlYWRvIiwiZGVzY3JpcGNpb24iLCJlbXByZXNhIiwibmFtZSIsInVybCIsInVybEltYWdlIiwidm90b3MiLCJEYXRlIiwibG9jYWxlIiwibWFwIiwiY29tZW50YXJpbyIsInVzdWFyaW9Ob21icmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/products/[id].js\n");

/***/ })

});