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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Administrador_Desktop_Proyectos_REACT_next_productos_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var C_Users_Administrador_Desktop_Proyectos_REACT_next_productos_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var C_Users_Administrador_Desktop_Proyectos_REACT_next_productos_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var C_Users_Administrador_Desktop_Proyectos_REACT_next_productos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var C_Users_Administrador_Desktop_Proyectos_REACT_next_productos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(C_Users_Administrador_Desktop_Proyectos_REACT_next_productos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../firebase */ \"./firebase/index.js\");\n/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../firebase/firebase */ \"./firebase/firebase.js\");\n/* harmony import */ var _components_layout_404__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/layout/404 */ \"./components/layout/404.js\");\n/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/layout/Layout */ \"./components/layout/Layout.js\");\n/* harmony import */ var date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns/formatDistanceToNow */ \"./node_modules/date-fns/esm/formatDistanceToNow/index.js\");\n/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns/locale */ \"./node_modules/date-fns/esm/locale/index.js\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @emotion/react */ \"./node_modules/@emotion/react/dist/emotion-react.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\Proyectos\\\\REACT\\\\next\\\\productos\\\\pages\\\\products\\\\[id].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Administrador_Desktop_Proyectos_REACT_next_productos_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\nvar Products = function Products() {\n  _s();\n\n  //State del componente\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({}),\n      product = _useState[0],\n      saveProduct = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),\n      error = _useState2[0],\n      saveError = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({}),\n      comment = _useState3[0],\n      saveComment = _useState3[1]; //routing para obtener el id actual \n\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n  var id = router.query.id;\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_firebase__WEBPACK_IMPORTED_MODULE_6__.FirebaseContext),\n      firebase = _useContext.firebase,\n      user = _useContext.user;\n\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    if (id) {\n      var getProduct = /*#__PURE__*/function () {\n        var _ref = (0,C_Users_Administrador_Desktop_Proyectos_REACT_next_productos_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/C_Users_Administrador_Desktop_Proyectos_REACT_next_productos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {\n          var productQuery, product;\n          return C_Users_Administrador_Desktop_Proyectos_REACT_next_productos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {\n            while (1) {\n              switch (_context.prev = _context.next) {\n                case 0:\n                  _context.next = 2;\n                  return firebase.db.collection('productos').doc(id);\n\n                case 2:\n                  productQuery = _context.sent;\n                  _context.next = 5;\n                  return productQuery.get();\n\n                case 5:\n                  product = _context.sent;\n\n                  if (product.exists) {\n                    saveProduct(product.data());\n                  } else {\n                    saveError(true);\n                  }\n\n                case 7:\n                case \"end\":\n                  return _context.stop();\n              }\n            }\n          }, _callee);\n        }));\n\n        return function getProduct() {\n          return _ref.apply(this, arguments);\n        };\n      }();\n\n      getProduct();\n    }\n  }, [id, product]);\n  if (Object.keys(product).length === 0) return 'Cargando...';\n  var comentarios = product.comentarios,\n      creado = product.creado,\n      descripcion = product.descripcion,\n      empresa = product.empresa,\n      name = product.name,\n      url = product.url,\n      urlImage = product.urlImage,\n      votos = product.votos,\n      creador = product.creador,\n      haVotado = product.haVotado; //Administrar y validar los votos \n\n  var votarProduct = function votarProduct() {\n    if (!user) {\n      router.push('/login');\n    } //Obtener y sumar votos \n\n\n    var newTotal = votos + 1; //Verificar si el usuario actual ah votado \n\n    if (haVotado.includes(user.uid)) return; //Guardar el id del usuario que ah votado \n\n    var newHanVotado = [].concat((0,C_Users_Administrador_Desktop_Proyectos_REACT_next_productos_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(haVotado), [user.uid]); //Actualizar DB\n\n    firebase.db.collection('productos').doc(id).update({\n      votos: newTotal,\n      haVotado: newHanVotado\n    }); //Actualizar el state \n\n    saveProduct(_objectSpread(_objectSpread({}, product), {}, {\n      votos: newTotal\n    }));\n  }; //Funciones para crear comentarios \n\n\n  var commentChanges = function commentChanges(e) {\n    saveComment(_objectSpread(_objectSpread({}, comentarios), {}, (0,C_Users_Administrador_Desktop_Proyectos_REACT_next_productos_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, e.target.name, e.target.value)));\n  };\n\n  var addComment = function addComment(e) {\n    e.preventDefault();\n\n    if (!user) {\n      router.push('/login');\n    } //Informacion extra del comentario \n\n\n    comment.userId = user.uid;\n    comment.userNombre = user.displayName; //Tomar copia de comentarios y agregarlos al \n\n    var newComments = [].concat((0,C_Users_Administrador_Desktop_Proyectos_REACT_next_productos_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(comentarios), [comment]); //Actualizar bd \n\n    firebase.db.collection('productos').doc(id).update({\n      comentarios: newComments\n    }); //Actualizar el state \n\n    saveProduct(_objectSpread(_objectSpread({}, product), {}, {\n      comentarios: newComments\n    }));\n  };\n\n  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 9\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null, error && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_layout_404__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 23\n    }\n  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"div\", {\n    className: \"container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 17\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 21\n    }\n  }, name), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"div\", {\n    className: \"container row justify-content-between\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 21\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"div\", {\n    className: \"col-6\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 25\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 29\n    }\n  }, \" Publicado hace: \", (0,date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(new Date(creado), {\n    locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_12__.es\n  }), \" \"), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 29\n    }\n  }, \"Creado por: \", creador.name, \" de \", empresa), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"img\", {\n    className: \"col-12\",\n    src: urlImage,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 29\n    }\n  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 29\n    }\n  }, descripcion, \" \"), user && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 37\n    }\n  }, \"Agregue tu comentario\"), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"form\", {\n    onSubmit: addComment,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 41\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"input\", {\n    className: \"col-12 \",\n    type: \"text\",\n    name: \"message\",\n    onChange: commentChanges,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 45\n    }\n  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"input\", {\n    type: \"submit\",\n    className: \"mt-3 col-12 text-center btn btn-danger\",\n    value: \"agregarComentario\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 45\n    }\n  }))), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 29\n    }\n  }, \"Comentarios\"), comentarios.length === 0 ? \"Aun no hay comentarios\" : (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 33\n    }\n  }, comentarios.map(function (comentario, i) {\n    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"li\", {\n      key: \" \".concat(comentario.userId, \"-\").concat(i, \" \"),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 146,\n        columnNumber: 37\n      }\n    }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 149,\n        columnNumber: 41\n      }\n    }, comentario.message), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 150,\n        columnNumber: 41\n      }\n    }, \"Escrito por: \", comentario.userNombre));\n  }))), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"aside\", {\n    className: \"col-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 158,\n      columnNumber: 25\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"button\", {\n    className: \"btn btn-danger my-2 col-12 \",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 159,\n      columnNumber: 29\n    }\n  }, \"Visita URL\"), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"p\", {\n    className: \"text-center my-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 160,\n      columnNumber: 29\n    }\n  }, votos, \" votos\"), user && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"button\", {\n    onClick: votarProduct,\n    className: \"btn btn-outline-dark bg-light text-dark col-12  my-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 163,\n      columnNumber: 37\n    }\n  }, \"Votar\")))))));\n};\n\n_s(Products, \"rjCc74RUwJNeMgbVhUyUuhNVL3M=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];\n});\n\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\n\nvar _c;\n\n$RefreshReg$(_c, \"Products\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUQsVUFBVSxDQUFDRSxPQUFmLENBSEosRUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUFpQkYsVUFBVSxDQUFDTixVQUE1QixDQUpKLENBRGlCO0FBQUEsR0FBaEIsQ0FETCxDQTVCUixDQURKLEVBMkNJO0FBQU8sYUFBUyxFQUFDLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFRLGFBQVMsRUFBQyw2QkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixFQUVJO0FBQUcsYUFBUyxFQUFDLGtCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBaUNqQixLQUFqQyxXQUZKLEVBR0tuQixJQUFJLElBQ0Qsb0hBQ0k7QUFBUSxXQUFPLEVBQUVzQixZQUFqQjtBQUErQixhQUFTLEVBQUMsc0RBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixDQUpSLENBM0NKLENBSEosQ0FGSixDQURKLENBREo7QUFtRUgsQ0FyS0Q7O0dBQU1qQztVQVFhUDs7O0tBUmJPO0FBdUtOLCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2R1Y3RzL1tpZF0uanM/OThiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsdXNlQ29udGV4dCx1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7RmlyZWJhc2VDb250ZXh0fSBmcm9tICcuLi8uLi9maXJlYmFzZSc7XHJcbmltcG9ydCBmaXJlYmFzZXMgZnJvbSAnLi4vLi4vZmlyZWJhc2UvZmlyZWJhc2UnO1xyXG5pbXBvcnQgRXJyb3I0MDQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvNDA0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQnXHJcbmltcG9ydCBmb3JtYXREaXN0YW5jZVRvTm93IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdERpc3RhbmNlVG9Ob3cnO1xyXG5pbXBvcnQge8KgZXMgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUnO1xyXG5cclxuY29uc3QgUHJvZHVjdHMgPSAoKSA9PiB7XHJcblxyXG4gICAgLy9TdGF0ZSBkZWwgY29tcG9uZW50ZVxyXG4gICAgY29uc3QgW3Byb2R1Y3QsIHNhdmVQcm9kdWN0XSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFtlcnJvcixzYXZlRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2NvbW1lbnQsc2F2ZUNvbW1lbnRdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICAgIC8vcm91dGluZyBwYXJhIG9idGVuZXIgZWwgaWQgYWN0dWFsIFxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7cXVlcnk6IHsgaWQgfX0gPSByb3V0ZXI7XHJcblxyXG4gICAgY29uc3Qge2ZpcmViYXNlLCB1c2VyfSA9IHVzZUNvbnRleHQoRmlyZWJhc2VDb250ZXh0KTsgXHJcbiAgICB1c2VFZmZlY3QgKCgpID0+e1xyXG4gICAgICAgIGlmKGlkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdldFByb2R1Y3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0UXVlcnkgPSBhd2FpdCBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKCdwcm9kdWN0b3MnKS5kb2MoaWQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdCA9IGF3YWl0IHByb2R1Y3RRdWVyeS5nZXQoKTtcclxuICAgICAgICAgICAgICAgIGlmKHByb2R1Y3QuZXhpc3RzKSB7XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBzYXZlUHJvZHVjdCggcHJvZHVjdC5kYXRhKCkgKTtcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzYXZlRXJyb3IodHJ1ZSk7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBnZXRQcm9kdWN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2lkLHByb2R1Y3RdKVxyXG5cclxuICAgIGlmKE9iamVjdC5rZXlzKHByb2R1Y3QpLmxlbmd0aCA9PT0gMCkgcmV0dXJuICdDYXJnYW5kby4uLic7XHJcbiAgICBjb25zdCB7Y29tZW50YXJpb3MsY3JlYWRvLGRlc2NyaXBjaW9uLGVtcHJlc2EsbmFtZSx1cmwsdXJsSW1hZ2Usdm90b3MsY3JlYWRvcixoYVZvdGFkb30gPSBwcm9kdWN0O1xyXG4gICAgXHJcbiAgICAvL0FkbWluaXN0cmFyIHkgdmFsaWRhciBsb3Mgdm90b3MgXHJcbiAgICBjb25zdCB2b3RhclByb2R1Y3QgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoIXVzZXIpIHtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gIFxyXG4gICAgICAgIC8vT2J0ZW5lciB5IHN1bWFyIHZvdG9zIFxyXG4gICAgICAgIGNvbnN0IG5ld1RvdGFsID0gdm90b3MgKyAxIDsgXHJcblxyXG4gICAgICAgIC8vVmVyaWZpY2FyIHNpIGVsIHVzdWFyaW8gYWN0dWFsIGFoIHZvdGFkbyBcclxuICAgICAgICBpZihoYVZvdGFkby5pbmNsdWRlcyh1c2VyLnVpZCkpIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICAvL0d1YXJkYXIgZWwgaWQgZGVsIHVzdWFyaW8gcXVlIGFoIHZvdGFkbyBcclxuICAgICAgICBjb25zdCBuZXdIYW5Wb3RhZG8gPSBbLi4uaGFWb3RhZG8sdXNlci51aWRdO1xyXG5cclxuICAgICAgICAvL0FjdHVhbGl6YXIgREJcclxuICAgICAgICBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKCdwcm9kdWN0b3MnKS5kb2MoaWQpLnVwZGF0ZSh7IFxyXG4gICAgICAgICAgICB2b3RvczogbmV3VG90YWwsIFxyXG4gICAgICAgICAgICBoYVZvdGFkbzogbmV3SGFuVm90YWRvLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vQWN0dWFsaXphciBlbCBzdGF0ZSBcclxuICAgICAgICBzYXZlUHJvZHVjdCh7XHJcbiAgICAgICAgICAgIC4uLnByb2R1Y3QsXHJcbiAgICAgICAgICAgIHZvdG9zOiBuZXdUb3RhbFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgICAgICAvL0Z1bmNpb25lcyBwYXJhIGNyZWFyIGNvbWVudGFyaW9zIFxyXG4gICAgICBcclxuICAgICAgICBjb25zdCBjb21tZW50Q2hhbmdlcyA9IGUgPT4ge1xyXG4gICAgICAgICAgICBzYXZlQ29tbWVudCh7XHJcbiAgICAgICAgICAgICAgICAuLi5jb21lbnRhcmlvcyxcclxuICAgICAgICAgICAgICAgIFtlLnRhcmdldC5uYW1lXSA6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcblxyXG4gICAgICAgIGNvbnN0IGFkZENvbW1lbnQgPSBlID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgaWYoIXVzZXIpIHtcclxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9JbmZvcm1hY2lvbiBleHRyYSBkZWwgY29tZW50YXJpbyBcclxuICAgICAgICAgICAgY29tbWVudC51c2VySWQgPSB1c2VyLnVpZDsgXHJcbiAgICAgICAgICAgIGNvbW1lbnQudXNlck5vbWJyZSA9IHVzZXIuZGlzcGxheU5hbWU7IFxyXG5cclxuICAgICAgICAgICAgLy9Ub21hciBjb3BpYSBkZSBjb21lbnRhcmlvcyB5IGFncmVnYXJsb3MgYWwgXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0NvbW1lbnRzID0gWy4uLmNvbWVudGFyaW9zLGNvbW1lbnRdO1xyXG5cclxuICAgICAgICAgICAgLy9BY3R1YWxpemFyIGJkIFxyXG4gICAgICAgICAgICAgICAgZmlyZWJhc2UuZGIuY29sbGVjdGlvbigncHJvZHVjdG9zJykuZG9jKGlkKS51cGRhdGUoeyBcclxuICAgICAgICAgICAgICAgICAgICBjb21lbnRhcmlvczogbmV3Q29tbWVudHMsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAvL0FjdHVhbGl6YXIgZWwgc3RhdGUgXHJcbiAgICAgICAgICAgICAgICBzYXZlUHJvZHVjdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4ucHJvZHVjdCxcclxuICAgICAgICAgICAgICAgICAgICBjb21lbnRhcmlvczogbmV3Q29tbWVudHNcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAge2Vycm9yICYmIDxFcnJvcjQwNC8+fVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPntuYW1lfTwvaDE+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgcm93IGp1c3RpZnktY29udGVudC1iZXR3ZWVuJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC02Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBQdWJsaWNhZG8gaGFjZToge2Zvcm1hdERpc3RhbmNlVG9Ob3cobmV3IERhdGUoY3JlYWRvKSwge2xvY2FsZTogZXN9KX0gPC9wPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNyZWFkbyBwb3I6IHtjcmVhZG9yLm5hbWV9IGRlIHtlbXByZXNhfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdjb2wtMTInIHNyYz17dXJsSW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57ZGVzY3JpcGNpb259IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkFncmVndWUgdHUgY29tZW50YXJpbzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXthZGRDb21tZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtMTIgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjb21tZW50Q2hhbmdlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cIm10LTMgY29sLTEyIHRleHQtY2VudGVyIGJ0biBidG4tZGFuZ2VyXCIgdmFsdWU9XCJhZ3JlZ2FyQ29tZW50YXJpb1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5Db21lbnRhcmlvczwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29tZW50YXJpb3MubGVuZ3RoID09PSAwID8gXCJBdW4gbm8gaGF5IGNvbWVudGFyaW9zXCIgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbWVudGFyaW9zLm1hcCgoY29tZW50YXJpbyxpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YCAke2NvbWVudGFyaW8udXNlcklkfS0ke2l9IGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntjb21lbnRhcmlvLm1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RXNjcml0byBwb3I6IHtjb21lbnRhcmlvLnVzZXJOb21icmV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+ICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT0nY29sLTQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tZGFuZ2VyIG15LTIgY29sLTEyICc+VmlzaXRhIFVSTDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciBteS0yJz57dm90b3N9IHZvdG9zPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dm90YXJQcm9kdWN0fSBjbGFzc05hbWU9J2J0biBidG4tb3V0bGluZS1kYXJrIGJnLWxpZ2h0IHRleHQtZGFyayBjb2wtMTIgIG15LTInPlZvdGFyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hc2lkZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0czsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJGaXJlYmFzZUNvbnRleHQiLCJmaXJlYmFzZXMiLCJFcnJvcjQwNCIsIkxheW91dCIsImZvcm1hdERpc3RhbmNlVG9Ob3ciLCJlcyIsIlByb2R1Y3RzIiwicHJvZHVjdCIsInNhdmVQcm9kdWN0IiwiZXJyb3IiLCJzYXZlRXJyb3IiLCJjb21tZW50Iiwic2F2ZUNvbW1lbnQiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiZmlyZWJhc2UiLCJ1c2VyIiwiZ2V0UHJvZHVjdCIsImRiIiwiY29sbGVjdGlvbiIsImRvYyIsInByb2R1Y3RRdWVyeSIsImdldCIsImV4aXN0cyIsImRhdGEiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiY29tZW50YXJpb3MiLCJjcmVhZG8iLCJkZXNjcmlwY2lvbiIsImVtcHJlc2EiLCJuYW1lIiwidXJsIiwidXJsSW1hZ2UiLCJ2b3RvcyIsImNyZWFkb3IiLCJoYVZvdGFkbyIsInZvdGFyUHJvZHVjdCIsInB1c2giLCJuZXdUb3RhbCIsImluY2x1ZGVzIiwidWlkIiwibmV3SGFuVm90YWRvIiwidXBkYXRlIiwiY29tbWVudENoYW5nZXMiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJhZGRDb21tZW50IiwicHJldmVudERlZmF1bHQiLCJ1c2VySWQiLCJ1c2VyTm9tYnJlIiwiZGlzcGxheU5hbWUiLCJuZXdDb21tZW50cyIsIkRhdGUiLCJsb2NhbGUiLCJtYXAiLCJjb21lbnRhcmlvIiwiaSIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/products/[id].js\n");

/***/ })

});