webpackHotUpdate("static/development/pages/comments.js",{

/***/ "./pages/comments/index.js":
/*!*********************************!*\
  !*** ./pages/comments/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CommentBox; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _comments_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comments.module.css */ "./pages/comments/comments.module.css");
/* harmony import */ var _comments_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_comments_module_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/teddylin/Desktop/harvard-houses/pages/comments/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var CommentBox = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(CommentBox, _React$Component);

  var _super = _createSuper(CommentBox);

  function CommentBox() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CommentBox);

    _this = _super.call(this);
    _this.state = {
      showComments: false,
      comments: [{
        id: 1,
        author: "landiggity",
        body: "This is my first comment on this forum so don't be a dick"
      }, {
        id: 2,
        author: "scarlett-jo",
        body: "That's a mighty fine comment you've got there my good looking fellow..."
      }, {
        id: 3,
        author: "rosco",
        body: "What is the meaning of all of this 'React' mumbo-jumbo?"
      }]
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CommentBox, [{
    key: "render",
    value: function render() {
      var comments = this.getComments();
      var commentNodes;
      var buttonText = 'Show Comments';

      if (this.state.showComments) {
        buttonText = 'Hide Comments';
        commentNodes = __jsx("div", {
          className: "comment-list",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 22
          }
        }, comments);
      }

      return __jsx("div", {
        className: "comment-box",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 7
        }
      }, __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 9
        }
      }, "Join the Discussion!"), __jsx(CommentForm, {
        addComment: this.addComment.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 9
        }
      }), __jsx("button", {
        id: "comment-reveal",
        onClick: this.handleClick.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 9
        }
      }, buttonText), __jsx("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 9
        }
      }, "Comments"), __jsx("h4", {
        className: "comment-count",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 9
        }
      }, this.getCommentsTitle(comments.length)), commentNodes);
    } // end render

  }, {
    key: "addComment",
    value: function addComment(author, body) {
      var comment = {
        id: this.state.comments.length + 1,
        author: author,
        body: body
      };
      this.setState({
        comments: this.state.comments.concat([comment])
      }); // *new array references help React stay fast, so concat works better than push here.
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      this.setState({
        showComments: !this.state.showComments
      });
    }
  }, {
    key: "getComments",
    value: function getComments() {
      var _this2 = this;

      return this.state.comments.map(function (comment) {
        return __jsx(Comment, {
          author: comment.author,
          body: comment.body,
          key: comment.id,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 9
          }
        });
      });
    }
  }, {
    key: "getCommentsTitle",
    value: function getCommentsTitle(commentCount) {
      if (commentCount === 0) {
        return 'No comments yet';
      } else if (commentCount === 1) {
        return "1 comment";
      } else {
        return "".concat(commentCount, " comments");
      }
    }
  }]);

  return CommentBox;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component); // end CommentBox component




var CommentForm = /*#__PURE__*/function (_React$Component2) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(CommentForm, _React$Component2);

  var _super2 = _createSuper(CommentForm);

  function CommentForm() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CommentForm);

    return _super2.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CommentForm, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      return __jsx("form", {
        className: "comment-form",
        onSubmit: this.handleSubmit.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "comment-form-fields",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 9
        }
      }, __jsx("input", {
        placeholder: "Name",
        required: true,
        ref: function ref(input) {
          return _this3.author = input;
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 91
        }
      }), __jsx("textarea", {
        placeholder: "Comment",
        rows: "4",
        required: true,
        ref: function ref(textarea) {
          return _this3.body = textarea;
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }
      })), __jsx("div", {
        className: "comment-form-actions",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 9
        }
      }, __jsx("button", {
        type: "submit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }
      }, "Post Comment")));
    } // end render

  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault(); // prevents page from reloading on submit

      var author = this.author;
      var body = this.body;
      this.props.addComment(author.value, body.value);
    }
  }]);

  return CommentForm;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component); // end CommentForm component


var Comment = /*#__PURE__*/function (_React$Component3) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Comment, _React$Component3);

  var _super3 = _createSuper(Comment);

  function Comment() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Comment);

    return _super3.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Comment, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "comment",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 7
        }
      }, __jsx("p", {
        className: "comment-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 9
        }
      }, this.props.author), __jsx("p", {
        className: "comment-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 9
        }
      }, this.props.body), __jsx("div", {
        className: "comment-footer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 9
        }
      }, __jsx("a", {
        href: "#",
        className: "comment-footer-delete",
        onClick: this.deleteComment,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }
      }, "Delete Comment")));
    }
  }, {
    key: "deleteComment",
    value: function deleteComment() {
      alert("-- DELETE Comment Functionality COMMING SOON...");
    }
  }]);

  return Comment;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/***/ })

})
//# sourceMappingURL=comments.js.a92040e671349f025f51.hot-update.js.map