module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/comments/comments.module.css":
/*!********************************************!*\
  !*** ./pages/comments/comments.module.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"body": "comments_body__19GsD",
	"button": "comments_button__1T1sz",
	"comment-box": "comments_comment-box__1qrxv",
	"comment-form": "comments_comment-form__1Sz_w",
	"comment-form-fields": "comments_comment-form-fields__1VvzK",
	"comment-form-actions": "comments_comment-form-actions__cKbMj",
	"comment-count": "comments_comment-count__3CQ6j",
	"comment-reveal": "comments_comment-reveal__1ciQd",
	"comment": "comments_comment__4ex0s",
	"comment-body": "comments_comment-body__rngQu",
	"comment-footer": "comments_comment-footer__3flsw",
	"comment-footer-delete": "comments_comment-footer-delete__35MDS"
};

/***/ }),

/***/ "./pages/comments/index.js":
/*!*********************************!*\
  !*** ./pages/comments/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CommentBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _comments_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments.module.css */ "./pages/comments/comments.module.css");
/* harmony import */ var _comments_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_comments_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/teddylin/Desktop/harvard-houses/pages/comments/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class CommentBox extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();
    this.state = {
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
  }

  render() {
    const comments = this.getComments();
    let commentNodes;
    let buttonText = 'Show Comments';

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


  addComment(author, body) {
    const comment = {
      id: this.state.comments.length + 1,
      author,
      body
    };
    this.setState({
      comments: this.state.comments.concat([comment])
    }); // *new array references help React stay fast, so concat works better than push here.
  }

  handleClick() {
    this.setState({
      showComments: !this.state.showComments
    });
  }

  getComments() {
    return this.state.comments.map(comment => {
      return __jsx(Comment, {
        author: comment.author,
        body: comment.body,
        key: comment.id,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 9
        }
      });
    });
  }

  getCommentsTitle(commentCount) {
    if (commentCount === 0) {
      return 'No comments yet';
    } else if (commentCount === 1) {
      return "1 comment";
    } else {
      return `${commentCount} comments`;
    }
  }

} // end CommentBox component

class CommentForm extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
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
      ref: input => this.author = input,
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
      ref: textarea => this.body = textarea,
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


  handleSubmit(event) {
    event.preventDefault(); // prevents page from reloading on submit

    let author = this.author;
    let body = this.body;
    this.props.addComment(author.value, body.value);
  }

} // end CommentForm component


class Comment extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
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

  deleteComment() {
    alert("-- DELETE Comment Functionality COMMING SOON...");
  }

}

/***/ }),

/***/ 3:
/*!***************************************!*\
  !*** multi ./pages/comments/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/teddylin/Desktop/harvard-houses/pages/comments/index.js */"./pages/comments/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=comments.js.map