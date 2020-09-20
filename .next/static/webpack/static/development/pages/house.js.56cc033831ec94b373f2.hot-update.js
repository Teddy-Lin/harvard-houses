webpackHotUpdate("static/development/pages/house.js",{

/***/ "./node_modules/react-instagram-authless-feed/dist/components/Feed.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-instagram-authless-feed/dist/components/Feed.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Instagram = _interopRequireDefault(__webpack_require__(/*! ./../lib/Instagram */ "./node_modules/react-instagram-authless-feed/dist/lib/Instagram.js"));

var _Media = _interopRequireDefault(__webpack_require__(/*! ./Media */ "./node_modules/react-instagram-authless-feed/dist/components/Media.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Feed = /*#__PURE__*/function (_Component) {
  _inherits(Feed, _Component);

  var _super = _createSuper(Feed);

  function Feed(props) {
    var _this;

    _classCallCheck(this, Feed);

    _this = _super.call(this, props);
    _this.state = {
      loading: true,
      media: []
    };
    return _this;
  }

  _createClass(Feed, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.props.getFeedFn(this.props.userName).then(function (media) {
        return _this2.setState({
          loading: false,
          media: media
        });
      })["catch"](function () {
        return _this2.setState({
          loading: false,
          media: []
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var className = this.state.loading ? [this.props.className, this.props.classNameLoading].join(" ") : this.props.className;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: className
      }, this.state.media.map(function (media, index) {
        return /*#__PURE__*/_react["default"].createElement(_Media["default"], {
          key: index,
          src: media.src,
          url: media.url,
          alt: media.alt
        });
      }));
    }
  }]);

  return Feed;
}(_react.Component);

_defineProperty(Feed, "defaultProps", {
  className: "",
  classNameLoading: "",
  getFeedFn: _Instagram["default"].getFeed
});

var _default = Feed;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-instagram-authless-feed/dist/components/Media.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-instagram-authless-feed/dist/components/Media.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Media = /*#__PURE__*/function (_Component) {
  _inherits(Media, _Component);

  var _super = _createSuper(Media);

  function Media() {
    _classCallCheck(this, Media);

    return _super.apply(this, arguments);
  }

  _createClass(Media, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("a", {
        href: this.props.url,
        rel: "noopener",
        target: "_blank"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: this.props.src,
        alt: this.props.alt
      }));
    }
  }]);

  return Media;
}(_react.Component);

var _default = Media;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-instagram-authless-feed/dist/lib/Instagram.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-instagram-authless-feed/dist/lib/Instagram.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Instagram = /*#__PURE__*/function () {
  function Instagram() {
    _classCallCheck(this, Instagram);
  }

  _createClass(Instagram, null, [{
    key: "getFeed",
    value: function getFeed(userName) {
      var mapMedia = function mapMedia(json) {
        var thumbnailIndex = function thumbnailIndex(node) {
          node.thumbnail_resources.forEach(function (item, index) {
            if (item.config_width === 640) {
              return index;
            }
          });
          return 4; // MAGIC
        };

        var url = function url(node) {
          return "https://www.instagram.com/p/" + node.shortcode;
        };

        var src = function src(node) {
          switch (node.__typename) {
            case "GraphSidecar":
              return node.thumbnail_resources[thumbnailIndex(node)].src;

            case "GraphVideo":
              return node.thumbnail_src;

            default:
              return node.thumbnail_resources[thumbnailIndex(node)].src;
          }
        };

        var alt = function alt(node) {
          if (node.edge_media_to_caption.edges[0] && node.edge_media_to_caption.edges[0].node) {
            return node.edge_media_to_caption.edges[0].node.text;
          } else if (node.accessibility_caption) {
            return node.accessibility_caption;
          } else {
            return "";
          }
        };

        var edges = json.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges;
        return edges.map(function (edge) {
          return {
            alt: alt(edge.node),
            url: url(edge.node),
            src: src(edge.node)
          };
        });
      };

      var getJSON = function getJSON(body) {
        try {
          var data = body.split("window._sharedData = ")[1].split("</script>")[0];
          return JSON.parse(data.substr(0, data.length - 1));
        } catch (err) {
          throw Error("Cannot parse response body");
        }
      };

      var url = "https://www.instagram.com/" + userName + "/";
      return fetch(url).then(function (resp) {
        return resp.text();
      }).then(function (body) {
        return getJSON(body);
      }).then(function (json) {
        return mapMedia(json);
      });
    }
  }]);

  return Instagram;
}();

var _default = Instagram;
exports["default"] = _default;

/***/ }),

/***/ "./pages/house/houseinstagram.js":
/*!***************************************!*\
  !*** ./pages/house/houseinstagram.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HouseInstagram; });
/* harmony import */ var _houseinstagram_module_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./houseinstagram.module.css */ "./pages/house/houseinstagram.module.css");
/* harmony import */ var _houseinstagram_module_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_houseinstagram_module_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_instagram_embed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-instagram-embed */ "./node_modules/react-instagram-embed/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_instagram_authless_feed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-instagram-authless-feed */ "./node_modules/react-instagram-authless-feed/dist/components/Feed.js");
/* harmony import */ var react_instagram_authless_feed__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_instagram_authless_feed__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/alexcheng/blockd/harvard-houses/pages/house/houseinstagram.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




function HouseInstagram() {
  return __jsx("div", {
    "class": _houseinstagram_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(react_instagram_authless_feed__WEBPACK_IMPORTED_MODULE_3___default.a, {
    userName: "harvard",
    className: "Feed",
    classNameLoading: "Loading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), ",", __jsx(react_instagram_embed__WEBPACK_IMPORTED_MODULE_1__["default"], {
    url: "https://www.instagram.com/p/B-zrooXnOOz/",
    maxWidth: 400,
    hideCaption: true,
    containerTagName: "div",
    protocol: "",
    injectScript: true,
    onLoading: function onLoading() {},
    onSuccess: function onSuccess() {},
    onAfterRender: function onAfterRender() {},
    onFailure: function onFailure() {},
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), __jsx(react_instagram_embed__WEBPACK_IMPORTED_MODULE_1__["default"], {
    url: "https://www.instagram.com/p/B9kkHx_gE4r/",
    maxWidth: 400,
    hideCaption: true,
    containerTagName: "div",
    protocol: "",
    injectScript: true,
    onLoading: function onLoading() {},
    onSuccess: function onSuccess() {},
    onAfterRender: function onAfterRender() {},
    onFailure: function onFailure() {},
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), __jsx(react_instagram_embed__WEBPACK_IMPORTED_MODULE_1__["default"], {
    url: "https://www.instagram.com/p/CADqZrJHh3c/",
    maxWidth: 400,
    hideCaption: true,
    containerTagName: "div",
    protocol: "",
    injectScript: true,
    onLoading: function onLoading() {},
    onSuccess: function onSuccess() {},
    onAfterRender: function onAfterRender() {},
    onFailure: function onFailure() {},
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }), __jsx(react_instagram_embed__WEBPACK_IMPORTED_MODULE_1__["default"], {
    url: "https://www.instagram.com/p/B-r4m2PngeU/",
    maxWidth: 400,
    hideCaption: true,
    containerTagName: "div",
    protocol: "",
    injectScript: true,
    onLoading: function onLoading() {},
    onSuccess: function onSuccess() {},
    onAfterRender: function onAfterRender() {},
    onFailure: function onFailure() {},
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }));
}

/***/ })

})
//# sourceMappingURL=house.js.56cc033831ec94b373f2.hot-update.js.map