webpackHotUpdate("static/development/pages/house.js",{

/***/ "./pages/house/housenavbar.js":
/*!************************************!*\
  !*** ./pages/house/housenavbar.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HouseNavBar; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _housenavbar_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./housenavbar.module.css */ "./pages/house/housenavbar.module.css");
/* harmony import */ var _housenavbar_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_housenavbar_module_css__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "/Users/teddylin/Desktop/harvard-houses/pages/house/housenavbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var HouseNavBar = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(HouseNavBar, _React$Component);

  var _super = _createSuper(HouseNavBar);

  function HouseNavBar(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HouseNavBar);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "clickAdams", function () {
      _this.setState({
        adams: true,
        cabot: false,
        currier: false,
        dunster: false
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "clickCabot", function () {
      _this.setState({
        adams: false,
        cabot: true,
        currier: false,
        dunster: false
      });
    });

    _this.state = {
      adams: false,
      cabot: false,
      currier: false,
      dunster: false
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HouseNavBar, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 5
        }
      }, __jsx("div", {
        className: _housenavbar_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.header,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 9
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/adams",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 13
        }
      }, __jsx("a", {
        className: _housenavbar_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.item,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 33
        }
      }, "Adams")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/cabot",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }
      }, __jsx("a", {
        className: _housenavbar_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.item,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 33
        }
      }, "Cabot")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/currier",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }
      }, __jsx("a", {
        className: _housenavbar_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.item,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 35
        }
      }, "Currier")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/house",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 13
        }
      }, __jsx("a", {
        className: _housenavbar_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.item,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 33
        }
      }, "Dunster")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/eliot",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 13
        }
      }, __jsx("a", {
        className: _housenavbar_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.item,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 33
        }
      }, "Eliot")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/kirkland",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 13
        }
      }, __jsx("a", {
        className: _housenavbar_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.item,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 36
        }
      }, "Kirkland")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/leverett",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }
      }, __jsx("a", {
        className: _housenavbar_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.item,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 36
        }
      }, "Leverett")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/lowell",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 13
        }
      }, __jsx("a", {
        className: _housenavbar_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.item,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 34
        }
      }, "Lowell")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/mather",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 13
        }
      }, __jsx("a", {
        className: _housenavbar_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.item,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 34
        }
      }, "Mather")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/pforzheimer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }
      }, __jsx("a", {
        className: _housenavbar_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.item,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 39
        }
      }, "Pforzheimer")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/quincy",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 13
        }
      }, __jsx("a", {
        className: _housenavbar_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.item,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 34
        }
      }, "Quincy")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/winthrop",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 13
        }
      }, __jsx("a", {
        className: _housenavbar_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.item,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 36
        }
      }, "Winthrop"))), children);
    }
  }]);

  return HouseNavBar;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component({
  children: children
})); // import Link from 'next/link'
// import Head from 'next/head'
// import styles from './housenavbar.module.css';
// export default function HouseNavBar({children}) {
//   return (
//     <div>
//         <div className = {styles.header}>
//           <Link href="/"><a className = {styles.item}>Adams</a></Link>
//           <Link href="/signup"><a className = {styles.item}>Cabot</a></Link>
//           <Link href="/search"><a className = {styles.item}>Currier</a></Link>
//           <Link href="/house"><a className = {styles.item}>Dunster</a></Link>
//           <Link href="/faq"><a className = {styles.item}>Eliot</a></Link>
//           <Link href="/profile"><a className = {styles.item}>Kirkland</a></Link>
//           <Link href="/"><a className = {styles.item}>Leverett</a></Link>
//           <Link href="/signup"><a className = {styles.item}>Lowell</a></Link>
//           <Link href="/search"><a className = {styles.item}>Mather</a></Link>
//           <Link href="/house"><a className = {styles.item}>Pforzheimer</a></Link>
//           <Link href="/faq"><a className = {styles.item}>Quincy</a></Link>
//           <Link href="/profile"><a className = {styles.item}>Winthrop</a></Link>
//         </div>
//       {children}
//     </div>
//   )
// }




/***/ })

})
//# sourceMappingURL=house.js.3704c8b0e07360ec45de.hot-update.js.map