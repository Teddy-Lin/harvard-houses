webpackHotUpdate("static/development/pages/house.js",{

/***/ "./pages/house/housetab.js":
/*!*********************************!*\
  !*** ./pages/house/housetab.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HouseTab; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-swipeable-views */ "./node_modules/react-swipeable-views/lib/index.js");
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/index.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/esm/Tab/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _housevideo_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./housevideo.js */ "./pages/house/housevideo.js");
/* harmony import */ var _houseinfo_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./houseinfo.js */ "./pages/house/houseinfo.js");
/* harmony import */ var _houseimage_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./houseimage.js */ "./pages/house/houseimage.js");
/* harmony import */ var _houseinstagram_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./houseinstagram.js */ "./pages/house/houseinstagram.js");
/* harmony import */ var _comments_index_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../comments/index.js */ "./pages/comments/index.js");



var _jsxFileName = "/Users/alexcheng/blockd/harvard-houses/pages/house/housetab.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;















function TabPanel(props) {
  var children = props.children,
      value = props.value,
      index = props.index,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["children", "value", "index"]);

  return __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    role: "tabpanel",
    hidden: value !== index,
    id: "full-width-tabpanel-".concat(index)
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }), value === index && __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, children)));
}

TabPanel.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,
  index: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any.isRequired
};
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  return {
    root: {
      backgroundColor: theme.palette.background.paper,
      width: 500
    }
  };
});
function HouseTab() {
  var classes = useStyles();
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["useTheme"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(0),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var handleChange = function handleChange(event, newValue) {
    setValue(newValue);
  };

  var handleChangeIndex = function handleChangeIndex(index) {
    setValue(index);
  };

  return __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    position: "static",
    color: "default",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_8__["default"], {
    value: value,
    onChange: handleChange,
    indicatorColor: "primary",
    textColor: "primary",
    variant: "fullWidth",
    fullWidth: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: "Information",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: "Comments",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: "Statistics",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: "Images",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: "Videos",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: "Instagram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }))), __jsx(react_swipeable_views__WEBPACK_IMPORTED_MODULE_5___default.a, {
    axis: theme.direction === 'rtl' ? 'x-reverse' : 'x',
    index: value,
    onChangeIndex: handleChangeIndex,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, __jsx(TabPanel, {
    value: value,
    index: 0,
    dir: theme.direction,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, __jsx(_houseinfo_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  })), __jsx(TabPanel, {
    value: value,
    index: 1,
    dir: theme.direction,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, __jsx(_comments_index_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  })), __jsx(TabPanel, {
    value: value,
    index: 2,
    dir: theme.direction,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }), __jsx(TabPanel, {
    value: value,
    index: 3,
    dir: theme.direction,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, __jsx(_houseimage_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  })), __jsx(TabPanel, {
    value: value,
    index: 4,
    dir: theme.direction,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, __jsx(_housevideo_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  })), __jsx(TabPanel, {
    value: value,
    index: 5,
    dir: theme.direction,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, __jsx(_houseinstagram_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }))));
} //
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
//
// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1,
//   },
// });
//
// export default function HouseTab() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);
//
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
//
//   return (
//     <Paper className={classes.root}>
//       <Tabs
//         // variant = "fullWidth"
//         fullWidth={true}
//         value={value}
//         onChange={handleChange}
//         indicatorColor="primary"
//         textColor="inherit"
//         centered
//       >
//         <Tab label="Information"/>
//         <Tab label="Comments"/>
//         <Tab label="Photos"/>
//         <Tab label="Videos"/>
//       </Tabs>
//     </Paper>
//   );
// }
//

/***/ })

})
//# sourceMappingURL=house.js.a9cc1cdddcbcbe8b41be.hot-update.js.map