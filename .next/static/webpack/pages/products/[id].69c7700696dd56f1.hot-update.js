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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Administrador_Desktop_Proyectos_REACT_next_productos_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var C_Users_Administrador_Desktop_Proyectos_REACT_next_productos_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var C_Users_Administrador_Desktop_Proyectos_REACT_next_productos_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var C_Users_Administrador_Desktop_Proyectos_REACT_next_productos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var C_Users_Administrador_Desktop_Proyectos_REACT_next_productos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(C_Users_Administrador_Desktop_Proyectos_REACT_next_productos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../firebase */ \"./firebase/index.js\");\n/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../firebase/firebase */ \"./firebase/firebase.js\");\n/* harmony import */ var _components_layout_404__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/layout/404 */ \"./components/layout/404.js\");\n/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/layout/Layout */ \"./components/layout/Layout.js\");\n/* harmony import */ var date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns/formatDistanceToNow */ \"./node_modules/date-fns/esm/formatDistanceToNow/index.js\");\n/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns/locale */ \"./node_modules/date-fns/esm/locale/index.js\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @emotion/react */ \"./node_modules/@emotion/react/dist/emotion-react.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\Proyectos\\\\REACT\\\\next\\\\productos\\\\pages\\\\products\\\\[id].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Administrador_Desktop_Proyectos_REACT_next_productos_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\nvar Products = function Products() {\n  _s();\n\n  //State del componente\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({}),\n      product = _useState[0],\n      saveProduct = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),\n      error = _useState2[0],\n      saveError = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({}),\n      comment = _useState3[0],\n      saveComment = _useState3[1]; //routing para obtener el id actual \n\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n  var id = router.query.id;\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_firebase__WEBPACK_IMPORTED_MODULE_6__.FirebaseContext),\n      firebase = _useContext.firebase,\n      user = _useContext.user;\n\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    if (id) {\n      var getProduct = /*#__PURE__*/function () {\n        var _ref = (0,C_Users_Administrador_Desktop_Proyectos_REACT_next_productos_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/C_Users_Administrador_Desktop_Proyectos_REACT_next_productos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {\n          var productQuery, product;\n          return C_Users_Administrador_Desktop_Proyectos_REACT_next_productos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {\n            while (1) {\n              switch (_context.prev = _context.next) {\n                case 0:\n                  _context.next = 2;\n                  return firebase.db.collection('productos').doc(id);\n\n                case 2:\n                  productQuery = _context.sent;\n                  _context.next = 5;\n                  return productQuery.get();\n\n                case 5:\n                  product = _context.sent;\n\n                  if (product.exists) {\n                    saveProduct(product.data());\n                  } else {\n                    saveError(true);\n                  }\n\n                case 7:\n                case \"end\":\n                  return _context.stop();\n              }\n            }\n          }, _callee);\n        }));\n\n        return function getProduct() {\n          return _ref.apply(this, arguments);\n        };\n      }();\n\n      getProduct();\n    }\n  }, [id, product]);\n  if (Object.keys(product).length === 0) return 'Cargando...';\n  var comentarios = product.comentarios,\n      creado = product.creado,\n      descripcion = product.descripcion,\n      empresa = product.empresa,\n      name = product.name,\n      url = product.url,\n      urlImage = product.urlImage,\n      votos = product.votos,\n      creador = product.creador,\n      haVotado = product.haVotado; //Administrar y validar los votos \n\n  var votarProduct = function votarProduct() {\n    if (!user) {\n      router.push('/login');\n    } //Obtener y sumar votos \n\n\n    var newTotal = votos + 1; //Verificar si el usuario actual ah votado \n\n    if (haVotado.includes(user.uid)) return; //Guardar el id del usuario que ah votado \n\n    var newHanVotado = [].concat((0,C_Users_Administrador_Desktop_Proyectos_REACT_next_productos_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(haVotado), [user.uid]); //Actualizar DB\n\n    firebase.db.collection('productos').doc(id).update({\n      votos: newTotal,\n      haVotado: newHanVotado\n    }); //Actualizar el state \n\n    saveProduct(_objectSpread(_objectSpread({}, product), {}, {\n      votos: newTotal\n    }));\n  }; //Funciones para crear comentarios \n\n\n  var commentChanges = function commentChanges(e) {\n    saveComment(_objectSpread(_objectSpread({}, comentarios), {}, (0,C_Users_Administrador_Desktop_Proyectos_REACT_next_productos_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, e.target.name, e.target.value)));\n  }; //Identifica si el comentario es del creador del producto\n\n\n  var esCreador = function esCreador(id) {\n    if (creador.id == id) {\n      return true;\n    }\n  };\n\n  var addComment = function addComment(e) {\n    e.preventDefault();\n\n    if (!user) {\n      router.push('/login');\n    } //Informacion extra del comentario \n\n\n    comment.userId = user.uid;\n    comment.userNombre = user.displayName; //Tomar copia de comentarios y agregarlos al \n\n    var newComments = [].concat((0,C_Users_Administrador_Desktop_Proyectos_REACT_next_productos_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(comentarios), [comment]); //Actualizar bd \n\n    firebase.db.collection('productos').doc(id).update({\n      comentarios: newComments\n    }); //Actualizar el state \n\n    saveProduct(_objectSpread(_objectSpread({}, product), {}, {\n      comentarios: newComments\n    }));\n  };\n\n  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 9\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null, error && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_layout_404__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 23\n    }\n  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"div\", {\n    className: \"container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 17\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 21\n    }\n  }, name), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"div\", {\n    className: \"container row justify-content-between\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 21\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"div\", {\n    className: \"col-6\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 25\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 29\n    }\n  }, \" Publicado hace: \", (0,date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(new Date(creado), {\n    locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_12__.es\n  }), \" \"), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 29\n    }\n  }, \"Creado por: \", creador.name, \" de \", empresa), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"img\", {\n    className: \"col-12\",\n    src: urlImage,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 29\n    }\n  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 29\n    }\n  }, descripcion, \" \"), user && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 37\n    }\n  }, \"Agregue tu comentario\"), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"form\", {\n    onSubmit: addComment,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 41\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"input\", {\n    className: \"col-12 \",\n    type: \"text\",\n    name: \"message\",\n    onChange: commentChanges,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 45\n    }\n  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"input\", {\n    type: \"submit\",\n    className: \"mt-3 col-12 text-center btn btn-danger\",\n    value: \"agregarComentario\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 45\n    }\n  }))), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 29\n    }\n  }, \"Comentarios\"), comentarios.length === 0 ? \"Aun no hay comentarios\" : (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 33\n    }\n  }, comentarios.map(function (comentario, i) {\n    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"li\", {\n      key: \" \".concat(comentario.userId, \"-\").concat(i, \" \"),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 152,\n        columnNumber: 37\n      }\n    }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 155,\n        columnNumber: 41\n      }\n    }, comentario.message), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 157,\n        columnNumber: 41\n      }\n    }, \" Escrito por: \", (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"strong\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 157,\n        columnNumber: 58\n      }\n    }, comentario.userNombre, \" \"), \" \"), esCreador(comentarios.userId) && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"span\", {\n      className: \"btn-sm bg-dark\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 158,\n        columnNumber: 75\n      }\n    }, \"Es Creador\"));\n  }))), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"aside\", {\n    className: \"col-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 165,\n      columnNumber: 25\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"button\", {\n    className: \"btn btn-danger my-2 col-12 \",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 166,\n      columnNumber: 29\n    }\n  }, \"Visita URL\"), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"p\", {\n    className: \"text-center my-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 167,\n      columnNumber: 29\n    }\n  }, votos, \" votos\"), user && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"button\", {\n    onClick: votarProduct,\n    className: \"btn btn-outline-dark bg-light text-dark col-12  my-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 170,\n      columnNumber: 37\n    }\n  }, \"Votar\")))))));\n};\n\n_s(Products, \"rjCc74RUwJNeMgbVhUyUuhNVL3M=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];\n});\n\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\n\nvar _c;\n\n$RefreshReg$(_c, \"Products\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVo7QUFBQSxXQUNqQjtBQUNJLFNBQUcsYUFBTUQsVUFBVSxDQUFDUCxNQUFqQixjQUEyQlEsQ0FBM0IsTUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJRCxVQUFVLENBQUNFLE9BQWYsQ0FISixFQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQWlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBU0YsVUFBVSxDQUFDTixVQUFwQixNQUFqQixNQUxKLEVBTUtKLFNBQVMsQ0FBQ3JCLFdBQVcsQ0FBQ3dCLE1BQWIsQ0FBVCxJQUFpQztBQUFNLGVBQVMsRUFBQyxnQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFOdEMsQ0FEaUI7QUFBQSxHQUFoQixDQURMLENBNUJSLENBREosRUE0Q0k7QUFBTyxhQUFTLEVBQUMsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQVEsYUFBUyxFQUFDLDZCQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLEVBRUk7QUFBRyxhQUFTLEVBQUMsa0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFpQ2pCLEtBQWpDLFdBRkosRUFHS25CLElBQUksSUFDRCxvSEFDSTtBQUFRLFdBQU8sRUFBRXNCLFlBQWpCO0FBQStCLGFBQVMsRUFBQyxzREFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLENBSlIsQ0E1Q0osQ0FISixDQUZKLENBREosQ0FESjtBQW9FSCxDQTVLRDs7R0FBTWpDO1VBUWFQOzs7S0FSYk87QUE4S04sK0RBQWVBLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvW2lkXS5qcz85OGJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCx1c2VDb250ZXh0LHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHtGaXJlYmFzZUNvbnRleHR9IGZyb20gJy4uLy4uL2ZpcmViYXNlJztcclxuaW1wb3J0IGZpcmViYXNlcyBmcm9tICcuLi8uLi9maXJlYmFzZS9maXJlYmFzZSc7XHJcbmltcG9ydCBFcnJvcjQwNCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dC80MDQnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dCdcclxuaW1wb3J0IGZvcm1hdERpc3RhbmNlVG9Ob3cgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0RGlzdGFuY2VUb05vdyc7XHJcbmltcG9ydCB7wqBlcyB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZSc7XHJcblxyXG5jb25zdCBQcm9kdWN0cyA9ICgpID0+IHtcclxuXHJcbiAgICAvL1N0YXRlIGRlbCBjb21wb25lbnRlXHJcbiAgICBjb25zdCBbcHJvZHVjdCwgc2F2ZVByb2R1Y3RdID0gdXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3QgW2Vycm9yLHNhdmVFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbY29tbWVudCxzYXZlQ29tbWVudF0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gICAgLy9yb3V0aW5nIHBhcmEgb2J0ZW5lciBlbCBpZCBhY3R1YWwgXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHtxdWVyeTogeyBpZCB9fSA9IHJvdXRlcjtcclxuXHJcbiAgICBjb25zdCB7ZmlyZWJhc2UsIHVzZXJ9ID0gdXNlQ29udGV4dChGaXJlYmFzZUNvbnRleHQpOyBcclxuICAgIHVzZUVmZmVjdCAoKCkgPT57XHJcbiAgICAgICAgaWYoaWQpIHtcclxuICAgICAgICAgICAgY29uc3QgZ2V0UHJvZHVjdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RRdWVyeSA9IGF3YWl0IGZpcmViYXNlLmRiLmNvbGxlY3Rpb24oJ3Byb2R1Y3RvcycpLmRvYyhpZCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0ID0gYXdhaXQgcHJvZHVjdFF1ZXJ5LmdldCgpO1xyXG4gICAgICAgICAgICAgICAgaWYocHJvZHVjdC5leGlzdHMpIHtcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHNhdmVQcm9kdWN0KCBwcm9kdWN0LmRhdGEoKSApO1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNhdmVFcnJvcih0cnVlKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGdldFByb2R1Y3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbaWQscHJvZHVjdF0pXHJcblxyXG4gICAgaWYoT2JqZWN0LmtleXMocHJvZHVjdCkubGVuZ3RoID09PSAwKSByZXR1cm4gJ0NhcmdhbmRvLi4uJztcclxuICAgIGNvbnN0IHtjb21lbnRhcmlvcyxjcmVhZG8sZGVzY3JpcGNpb24sZW1wcmVzYSxuYW1lLHVybCx1cmxJbWFnZSx2b3RvcyxjcmVhZG9yLGhhVm90YWRvfSA9IHByb2R1Y3Q7XHJcbiAgICBcclxuICAgIC8vQWRtaW5pc3RyYXIgeSB2YWxpZGFyIGxvcyB2b3RvcyBcclxuICAgIGNvbnN0IHZvdGFyUHJvZHVjdCA9ICgpID0+IHtcclxuICAgICAgICBpZighdXNlcikge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnL2xvZ2luJyk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgXHJcbiAgICAgICAgLy9PYnRlbmVyIHkgc3VtYXIgdm90b3MgXHJcbiAgICAgICAgY29uc3QgbmV3VG90YWwgPSB2b3RvcyArIDEgOyBcclxuXHJcbiAgICAgICAgLy9WZXJpZmljYXIgc2kgZWwgdXN1YXJpbyBhY3R1YWwgYWggdm90YWRvIFxyXG4gICAgICAgIGlmKGhhVm90YWRvLmluY2x1ZGVzKHVzZXIudWlkKSkgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vR3VhcmRhciBlbCBpZCBkZWwgdXN1YXJpbyBxdWUgYWggdm90YWRvIFxyXG4gICAgICAgIGNvbnN0IG5ld0hhblZvdGFkbyA9IFsuLi5oYVZvdGFkbyx1c2VyLnVpZF07XHJcblxyXG4gICAgICAgIC8vQWN0dWFsaXphciBEQlxyXG4gICAgICAgIGZpcmViYXNlLmRiLmNvbGxlY3Rpb24oJ3Byb2R1Y3RvcycpLmRvYyhpZCkudXBkYXRlKHsgXHJcbiAgICAgICAgICAgIHZvdG9zOiBuZXdUb3RhbCwgXHJcbiAgICAgICAgICAgIGhhVm90YWRvOiBuZXdIYW5Wb3RhZG8sXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy9BY3R1YWxpemFyIGVsIHN0YXRlIFxyXG4gICAgICAgIHNhdmVQcm9kdWN0KHtcclxuICAgICAgICAgICAgLi4ucHJvZHVjdCxcclxuICAgICAgICAgICAgdm90b3M6IG5ld1RvdGFsXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAgICAgIC8vRnVuY2lvbmVzIHBhcmEgY3JlYXIgY29tZW50YXJpb3MgXHJcbiAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNvbW1lbnRDaGFuZ2VzID0gZSA9PiB7XHJcbiAgICAgICAgICAgIHNhdmVDb21tZW50KHtcclxuICAgICAgICAgICAgICAgIC4uLmNvbWVudGFyaW9zLFxyXG4gICAgICAgICAgICAgICAgW2UudGFyZ2V0Lm5hbWVdIDogZS50YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICAvL0lkZW50aWZpY2Egc2kgZWwgY29tZW50YXJpbyBlcyBkZWwgY3JlYWRvciBkZWwgcHJvZHVjdG9cclxuICAgICAgICBjb25zdCBlc0NyZWFkb3IgPSBpZCA9PiB7XHJcbiAgICAgICAgICAgIGlmKGNyZWFkb3IuaWQgPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBhZGRDb21tZW50ID0gZSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmKCF1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL2xvZ2luJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vSW5mb3JtYWNpb24gZXh0cmEgZGVsIGNvbWVudGFyaW8gXHJcbiAgICAgICAgICAgIGNvbW1lbnQudXNlcklkID0gdXNlci51aWQ7IFxyXG4gICAgICAgICAgICBjb21tZW50LnVzZXJOb21icmUgPSB1c2VyLmRpc3BsYXlOYW1lOyBcclxuXHJcbiAgICAgICAgICAgIC8vVG9tYXIgY29waWEgZGUgY29tZW50YXJpb3MgeSBhZ3JlZ2FybG9zIGFsIFxyXG4gICAgICAgICAgICBjb25zdCBuZXdDb21tZW50cyA9IFsuLi5jb21lbnRhcmlvcyxjb21tZW50XTtcclxuXHJcbiAgICAgICAgICAgIC8vQWN0dWFsaXphciBiZCBcclxuICAgICAgICAgICAgICAgIGZpcmViYXNlLmRiLmNvbGxlY3Rpb24oJ3Byb2R1Y3RvcycpLmRvYyhpZCkudXBkYXRlKHsgXHJcbiAgICAgICAgICAgICAgICAgICAgY29tZW50YXJpb3M6IG5ld0NvbW1lbnRzLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgLy9BY3R1YWxpemFyIGVsIHN0YXRlIFxyXG4gICAgICAgICAgICAgICAgc2F2ZVByb2R1Y3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnByb2R1Y3QsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tZW50YXJpb3M6IG5ld0NvbW1lbnRzXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtlcnJvciAmJiA8RXJyb3I0MDQvPn1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT57bmFtZX08L2gxPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIHJvdyBqdXN0aWZ5LWNvbnRlbnQtYmV0d2Vlbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4gUHVibGljYWRvIGhhY2U6IHtmb3JtYXREaXN0YW5jZVRvTm93KG5ldyBEYXRlKGNyZWFkbyksIHtsb2NhbGU6IGVzfSl9IDwvcD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5DcmVhZG8gcG9yOiB7Y3JlYWRvci5uYW1lfSBkZSB7ZW1wcmVzYX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nY29sLTEyJyBzcmM9e3VybEltYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2Rlc2NyaXBjaW9ufSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5BZ3JlZ3VlIHR1IGNvbWVudGFyaW88L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17YWRkQ29tbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLTEyIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y29tbWVudENoYW5nZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJtdC0zIGNvbC0xMiB0ZXh0LWNlbnRlciBidG4gYnRuLWRhbmdlclwiIHZhbHVlPVwiYWdyZWdhckNvbWVudGFyaW9cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+Q29tZW50YXJpb3M8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbWVudGFyaW9zLmxlbmd0aCA9PT0gMCA/IFwiQXVuIG5vIGhheSBjb21lbnRhcmlvc1wiIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb21lbnRhcmlvcy5tYXAoKGNvbWVudGFyaW8saSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2AgJHtjb21lbnRhcmlvLnVzZXJJZH0tJHtpfSBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Y29tZW50YXJpby5tZXNzYWdlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+IEVzY3JpdG8gcG9yOiA8c3Ryb25nPntjb21lbnRhcmlvLnVzZXJOb21icmV9IDwvc3Ryb25nPiA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXNDcmVhZG9yKGNvbWVudGFyaW9zLnVzZXJJZCkgJiYgPHNwYW4gY2xhc3NOYW1lPSdidG4tc20gYmctZGFyayc+RXMgQ3JlYWRvcjwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+ICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT0nY29sLTQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tZGFuZ2VyIG15LTIgY29sLTEyICc+VmlzaXRhIFVSTDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciBteS0yJz57dm90b3N9IHZvdG9zPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dm90YXJQcm9kdWN0fSBjbGFzc05hbWU9J2J0biBidG4tb3V0bGluZS1kYXJrIGJnLWxpZ2h0IHRleHQtZGFyayBjb2wtMTIgIG15LTInPlZvdGFyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hc2lkZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0czsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJGaXJlYmFzZUNvbnRleHQiLCJmaXJlYmFzZXMiLCJFcnJvcjQwNCIsIkxheW91dCIsImZvcm1hdERpc3RhbmNlVG9Ob3ciLCJlcyIsIlByb2R1Y3RzIiwicHJvZHVjdCIsInNhdmVQcm9kdWN0IiwiZXJyb3IiLCJzYXZlRXJyb3IiLCJjb21tZW50Iiwic2F2ZUNvbW1lbnQiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiZmlyZWJhc2UiLCJ1c2VyIiwiZ2V0UHJvZHVjdCIsImRiIiwiY29sbGVjdGlvbiIsImRvYyIsInByb2R1Y3RRdWVyeSIsImdldCIsImV4aXN0cyIsImRhdGEiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiY29tZW50YXJpb3MiLCJjcmVhZG8iLCJkZXNjcmlwY2lvbiIsImVtcHJlc2EiLCJuYW1lIiwidXJsIiwidXJsSW1hZ2UiLCJ2b3RvcyIsImNyZWFkb3IiLCJoYVZvdGFkbyIsInZvdGFyUHJvZHVjdCIsInB1c2giLCJuZXdUb3RhbCIsImluY2x1ZGVzIiwidWlkIiwibmV3SGFuVm90YWRvIiwidXBkYXRlIiwiY29tbWVudENoYW5nZXMiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJlc0NyZWFkb3IiLCJhZGRDb21tZW50IiwicHJldmVudERlZmF1bHQiLCJ1c2VySWQiLCJ1c2VyTm9tYnJlIiwiZGlzcGxheU5hbWUiLCJuZXdDb21tZW50cyIsIkRhdGUiLCJsb2NhbGUiLCJtYXAiLCJjb21lbnRhcmlvIiwiaSIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/products/[id].js\n");

/***/ })

});