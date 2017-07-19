webpackHotUpdate(0,{

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(30);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _createBrowserHistory = __webpack_require__(235);

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _reactRouter = __webpack_require__(195);

var _welcome = __webpack_require__(211);

var _welcome2 = _interopRequireDefault(_welcome);

var _todo = __webpack_require__(212);

var _todo2 = _interopRequireDefault(_todo);

var _mobxReact = __webpack_require__(58);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
  _mobxReact.Provider,
  stores,
  _react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.hashHistory },
    _react2.default.createElement(_reactRouter.Route, { path: '/', component: _welcome2.default })
  )
), document.getElementById('root'));

/***/ })

})