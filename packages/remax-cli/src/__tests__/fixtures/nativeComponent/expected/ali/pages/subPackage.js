require('./../runtime.js');
(my["webpackJsonp"] = my["webpackJsonp"] || []).push([[6],{

/***/ 2:
/***/ (function(module, exports) {

module.exports = "@remax/runtime";

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = "react";

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(31);


/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_ali__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var remax_ali__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(remax_ali__WEBPACK_IMPORTED_MODULE_2__);




var Plugin = requirePlugin('plugin://myPlugin');
Plugin.api();
var PluginComponent = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createNativeComponent"])("xx");
var PluginComponent2 = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createNativeComponent"])("dddd");

var _page = function _page() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_ali__WEBPACK_IMPORTED_MODULE_2__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](PluginComponent, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](PluginComponent2, null));
};

/* harmony default export */ __webpack_exports__["default"] = (Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_page, "pages/subPackage")));

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = "remax/ali";

/***/ })

},[[30,0]]]);