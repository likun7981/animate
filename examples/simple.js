webpackJsonp([0],{

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(76);


/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(27);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

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

/***/ 52:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_extends__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_slow_less__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_slow_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__assets_slow_less__);
throw new Error("Cannot find module \"rc-animate\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_prop_types__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_object_assign__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_object_assign__);







/* eslint no-console:0, react/no-multi-comp:0 */








var Div = function Div(props) {
  var style = props.style,
      show = props.show,
      restProps = __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_objectWithoutProperties___default()(props, ['style', 'show']);

  var newStyle = __WEBPACK_IMPORTED_MODULE_12_object_assign___default()({}, style, {
    display: show ? '' : 'none'
  });
  return __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement('div', __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_extends___default()({}, restProps, { style: newStyle }));
};

Div.propTypes = {
  style: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.object,
  show: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.bool
};

var Demo = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Demo, _Component);

  function Demo(props) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Demo);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Demo.__proto__ || Object.getPrototypeOf(Demo)).call(this, props));

    _this.state = {
      exclusive: false,
      enter: true
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Demo, [{
    key: 'toggle',
    value: function toggle(field) {
      this.setState(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, field, !this.state[field]));
    }
  }, {
    key: 'render',
    value: function render() {
      var style = {
        width: '200px',
        height: '200px',
        backgroundColor: 'red'
      };
      return __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
          'label',
          null,
          __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement('input', {
            type: 'checkbox',
            onChange: this.toggle.bind(this, 'enter'),
            checked: this.state.enter
          }),
          'show'
        ),
        '\xA0',
        __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
          'label',
          null,
          __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement('input', {
            type: 'checkbox',
            onChange: this.toggle.bind(this, 'exclusive'),
            checked: this.state.exclusive
          }),
          'exclusive'
        ),
        __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement('br', null),
        __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement('br', null),
        __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_8_rc_animate___default.a,
          {
            component: '',
            exclusive: this.state.exclusive,
            showProp: 'show',
            transitionName: 'fade'
          },
          __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(Div, { show: this.state.enter, style: style })
        )
      );
    }
  }]);

  return Demo;
}(__WEBPACK_IMPORTED_MODULE_9_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_11_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(Demo, null), document.getElementById('__react-content'));

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ })

},[135]);
//# sourceMappingURL=simple.js.map