webpackJsonp([1],{

/***/ 0:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(72);


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(35), __esModule: true };

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(33);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(51);
module.exports = __webpack_require__(8).Object.assign;


/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(25);
var gOPS = __webpack_require__(28);
var pIE = __webpack_require__(26);
var toObject = __webpack_require__(47);
var IObject = __webpack_require__(38);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(18)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(13);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(41) });


/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_index_less__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_dom__);
throw new Error("Cannot find module \"rc-animate\"");





/* eslint no-console:0, react/no-multi-comp:0 */






var seed = 0;

var Alert = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Alert, _React$Component);

  function Alert() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Alert);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Alert, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var props = this.props;
      setTimeout(function () {
        props.onEnd();
      }, props.time);
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      var style = {
        background: 'yellow',
        width: 600,
        padding: 20,
        marginLeft: 'auto',
        marginRight: 'auto'
      };
      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
        'div',
        { style: style },
        props.str
      );
    }
  }]);

  return Alert;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

Alert.propTypes = {
  time: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.number,
  type: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.string,
  str: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.string,
  onEnd: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func
};
Alert.defaultProps = {
  onEnd: function onEnd() {},

  time: 2000,
  type: 'success'
};

var AlertGroup = function (_React$Component2) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(AlertGroup, _React$Component2);

  function AlertGroup() {
    var _ref;

    var _temp, _this2, _ret;

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, AlertGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = AlertGroup.__proto__ || Object.getPrototypeOf(AlertGroup)).call.apply(_ref, [this].concat(args))), _this2), _this2.state = {
      alerts: []
    }, _this2.onEnd = function (key) {
      var alerts = _this2.state.alerts;
      var ret = [];
      var target = void 0;
      alerts.forEach(function (a) {
        if (a.key === key) {
          target = a;
        } else {
          ret.push(a);
        }
      });
      if (target) {
        _this2.setState({
          alerts: ret
        }, function () {
          if (target.callback) {
            target.callback();
          }
        });
      }
    }, _this2.addAlert = function (a) {
      _this2.setState({
        alerts: _this2.state.alerts.concat(a)
      });
    }, _temp), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(_this2, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(AlertGroup, [{
    key: 'render',
    value: function render() {
      var alerts = this.state.alerts;
      var self = this;
      var children = alerts.map(function (a) {
        if (!a.key) {
          seed++;
          a.key = String(seed);
        }
        return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(Alert, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, a, { onEnd: self.onEnd.bind(self, a.key) }));
      });
      var style = {
        position: 'fixed',
        width: '100%',
        top: 50,
        zIndex: 9999
      };
      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
        'div',
        { style: style },
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_9_rc_animate___default.a,
          { transitionName: 'fade', component: 'div' },
          children
        )
      );
    }
  }]);

  return AlertGroup;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

var alertGroup = void 0;

function alert(str, time, type, callback) {
  if (!alertGroup) {
    var div = document.createElement('div');
    document.body.appendChild(div);
    alertGroup = __WEBPACK_IMPORTED_MODULE_8_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(AlertGroup, null), div);
  }
  alertGroup.addAlert({
    str: str,
    time: time,
    type: type,
    callback: callback
  });
}

function alertFn(i) {
  function m() {
    alert('' + i);
  }

  return m;
}

function onClick() {
  for (var i = 0; i < 4; i++) {
    setTimeout(alertFn(i), 1000 * i);
  }
}

__WEBPACK_IMPORTED_MODULE_8_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
  'div',
  null,
  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
    'h2',
    null,
    'notification'
  ),
  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
    'button',
    { onClick: onClick },
    'show notification'
  )
), document.getElementById('__react-content'));

/***/ })

},[131]);
//# sourceMappingURL=alert.js.map