(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/IconButton/IconButton.js ***!
  \*********************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"styles\", function() { return styles; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ \"./node_modules/@material-ui/utils/esm/index.js\");\n/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ \"./node_modules/@material-ui/core/esm/styles/withStyles.js\");\n/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/colorManipulator */ \"./node_modules/@material-ui/core/esm/styles/colorManipulator.js\");\n/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ButtonBase */ \"./node_modules/@material-ui/core/esm/ButtonBase/index.js\");\n/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/capitalize */ \"./node_modules/@material-ui/core/esm/utils/capitalize.js\");\n\n\n\n\n\n\n\n\n\n\nvar styles = function styles(theme) {\n  return {\n    /* Styles applied to the root element. */\n    root: {\n      textAlign: 'center',\n      flex: '0 0 auto',\n      fontSize: theme.typography.pxToRem(24),\n      padding: 12,\n      borderRadius: '50%',\n      overflow: 'visible',\n      // Explicitly set the default value to solve a bug on IE 11.\n      color: theme.palette.action.active,\n      transition: theme.transitions.create('background-color', {\n        duration: theme.transitions.duration.shortest\n      }),\n      '&:hover': {\n        backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__[\"alpha\"])(theme.palette.action.active, theme.palette.action.hoverOpacity),\n        // Reset on touch devices, it doesn't add specificity\n        '@media (hover: none)': {\n          backgroundColor: 'transparent'\n        }\n      },\n      '&$disabled': {\n        backgroundColor: 'transparent',\n        color: theme.palette.action.disabled\n      }\n    },\n\n    /* Styles applied to the root element if `edge=\"start\"`. */\n    edgeStart: {\n      marginLeft: -12,\n      '$sizeSmall&': {\n        marginLeft: -3\n      }\n    },\n\n    /* Styles applied to the root element if `edge=\"end\"`. */\n    edgeEnd: {\n      marginRight: -12,\n      '$sizeSmall&': {\n        marginRight: -3\n      }\n    },\n\n    /* Styles applied to the root element if `color=\"inherit\"`. */\n    colorInherit: {\n      color: 'inherit'\n    },\n\n    /* Styles applied to the root element if `color=\"primary\"`. */\n    colorPrimary: {\n      color: theme.palette.primary.main,\n      '&:hover': {\n        backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__[\"alpha\"])(theme.palette.primary.main, theme.palette.action.hoverOpacity),\n        // Reset on touch devices, it doesn't add specificity\n        '@media (hover: none)': {\n          backgroundColor: 'transparent'\n        }\n      }\n    },\n\n    /* Styles applied to the root element if `color=\"secondary\"`. */\n    colorSecondary: {\n      color: theme.palette.secondary.main,\n      '&:hover': {\n        backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__[\"alpha\"])(theme.palette.secondary.main, theme.palette.action.hoverOpacity),\n        // Reset on touch devices, it doesn't add specificity\n        '@media (hover: none)': {\n          backgroundColor: 'transparent'\n        }\n      }\n    },\n\n    /* Pseudo-class applied to the root element if `disabled={true}`. */\n    disabled: {},\n\n    /* Styles applied to the root element if `size=\"small\"`. */\n    sizeSmall: {\n      padding: 3,\n      fontSize: theme.typography.pxToRem(18)\n    },\n\n    /* Styles applied to the children container element. */\n    label: {\n      width: '100%',\n      display: 'flex',\n      alignItems: 'inherit',\n      justifyContent: 'inherit'\n    }\n  };\n};\n/**\n * Refer to the [Icons](/components/icons/) section of the documentation\n * regarding the available icon options.\n */\n\nvar IconButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__[\"forwardRef\"](function IconButton(props, ref) {\n  var _props$edge = props.edge,\n      edge = _props$edge === void 0 ? false : _props$edge,\n      children = props.children,\n      classes = props.classes,\n      className = props.className,\n      _props$color = props.color,\n      color = _props$color === void 0 ? 'default' : _props$color,\n      _props$disabled = props.disabled,\n      disabled = _props$disabled === void 0 ? false : _props$disabled,\n      _props$disableFocusRi = props.disableFocusRipple,\n      disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,\n      _props$size = props.size,\n      size = _props$size === void 0 ? 'medium' : _props$size,\n      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(props, [\"edge\", \"children\", \"classes\", \"className\", \"color\", \"disabled\", \"disableFocusRipple\", \"size\"]);\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](_ButtonBase__WEBPACK_IMPORTED_MODULE_8__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(classes.root, className, color !== 'default' && classes[\"color\".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(color))], disabled && classes.disabled, size === \"small\" && classes[\"size\".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(size))], {\n      'start': classes.edgeStart,\n      'end': classes.edgeEnd\n    }[edge]),\n    centerRipple: true,\n    focusRipple: !disableFocusRipple,\n    disabled: disabled,\n    ref: ref\n  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](\"span\", {\n    className: classes.label\n  }, children));\n});\n true ? IconButton.propTypes = {\n  /**\n   * The icon element.\n   */\n  children: Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__[\"chainPropTypes\"])(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node, function (props) {\n    var found = react__WEBPACK_IMPORTED_MODULE_2__[\"Children\"].toArray(props.children).some(function (child) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__[\"isValidElement\"](child) && child.props.onClick;\n    });\n\n    if (found) {\n      return new Error(['Material-UI: You are providing an onClick event listener ' + 'to a child of a button element.', 'Firefox will never trigger the event.', 'You should move the onClick listener to the parent button element.', 'https://github.com/mui-org/material-ui/issues/13957'].join('\\n'));\n    }\n\n    return null;\n  }),\n\n  /**\n   * Override or extend the styles applied to the component.\n   * See [CSS API](#css) below for more details.\n   */\n  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,\n\n  /**\n   * @ignore\n   */\n  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,\n\n  /**\n   * The color of the component. It supports those theme colors that make sense for this component.\n   */\n  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['default', 'inherit', 'primary', 'secondary']),\n\n  /**\n   * If `true`, the button will be disabled.\n   */\n  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,\n\n  /**\n   * If `true`, the  keyboard focus ripple will be disabled.\n   */\n  disableFocusRipple: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,\n\n  /**\n   * If `true`, the ripple effect will be disabled.\n   */\n  disableRipple: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,\n\n  /**\n   * If given, uses a negative margin to counteract the padding on one\n   * side (this is often helpful for aligning the left or right\n   * side of the icon with content above or below, without ruining the border\n   * size and shape).\n   */\n  edge: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['start', 'end', false]),\n\n  /**\n   * The size of the button.\n   * `small` is equivalent to the dense button styling.\n   */\n  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['small', 'medium'])\n} : undefined;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(styles, {\n  name: 'MuiIconButton'\n})(IconButton));\n\n//# sourceURL=webpack:///./node_modules/@material-ui/core/esm/IconButton/IconButton.js?");

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/IconButton/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/IconButton/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _IconButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IconButton */ \"./node_modules/@material-ui/core/esm/IconButton/IconButton.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _IconButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n//# sourceURL=webpack:///./node_modules/@material-ui/core/esm/IconButton/index.js?");

/***/ }),

/***/ "./node_modules/@material-ui/icons/KeyboardArrowUp.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/icons/KeyboardArrowUp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nvar _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ \"./node_modules/@babel/runtime/helpers/interopRequireWildcard.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar React = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ \"./node_modules/@material-ui/icons/utils/createSvgIcon.js\"));\n\nvar _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement(\"path\", {\n  d: \"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z\"\n}), 'KeyboardArrowUp');\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/@material-ui/icons/KeyboardArrowUp.js?");

/***/ }),

/***/ "./src/common/ScrollToTop/index.js":
/*!*****************************************!*\
  !*** ./src/common/ScrollToTop/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"./node_modules/@material-ui/core/esm/IconButton/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./src/common/ScrollToTop/styles.js\");\n/* harmony import */ var _material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowUp */ \"./node_modules/@material-ui/icons/KeyboardArrowUp.js\");\n/* harmony import */ var _material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return {\n    root: {\n      '& > *': {\n        margin: theme.spacing(1),\n        color: 'white',\n        background: 'rgb(209, 29, 50)'\n      }\n    }\n  };\n});\n\nvar Input = function Input() {\n  var classes = useStyles();\n\n  var scrollUp = function scrollUp() {\n    var element = document.getElementById(\"Main-Title\");\n    element.scrollIntoView({\n      behavior: \"smooth\",\n      block: \"end\",\n      inline: \"nearest\"\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Up\"], {\n    onClick: scrollUp\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.root\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    color: \"secondary\",\n    \"aria-label\": \"add an alarm\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_4___default.a, null))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Input);\n\n//# sourceURL=webpack:///./src/common/ScrollToTop/index.js?");

/***/ }),

/***/ "./src/common/ScrollToTop/styles.js":
/*!******************************************!*\
  !*** ./src/common/ScrollToTop/styles.js ***!
  \******************************************/
/*! exports provided: Up */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Up\", function() { return Up; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _templateObject;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar Up = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n  color: rgba(0, 0, 0, 0.65);\\n  font-size: 18px;\\n  line-height: 1.5715;\\n  list-style: none;\\n  position: fixed;\\n  right: 100px;\\n  bottom: 50px;\\n  z-index: 10;\\n  width: 40px;\\n  height: 40px;\\n  cursor: pointer;\\n\\n  @media screen and (max-width: 1024px) {\\n      right: 20px;\\n  }\\n\"])));\n\n//# sourceURL=webpack:///./src/common/ScrollToTop/styles.js?");

/***/ })

}]);