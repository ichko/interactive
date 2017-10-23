/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.vec = vec;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function vec(x, y) {
  return new Vector(x, y);
}

var Vector = function () {
  function Vector() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Vector);

    this.x = x;
    this.y = y;
  }

  _createClass(Vector, [{
    key: "add",
    value: function add(_ref) {
      var x = _ref.x,
          y = _ref.y;

      this.x += x;
      this.y += y;

      return this;
    }
  }, {
    key: "subtract",
    value: function subtract(_ref2) {
      var x = _ref2.x,
          y = _ref2.y;

      this.x -= x;
      this.y -= y;

      return this;
    }
  }, {
    key: "scale",
    value: function scale(size) {
      this.x *= size;
      this.y *= size;

      return this;
    }
  }, {
    key: "copy",
    value: function copy() {
      return new Vector(this.x, this.y);
    }
  }, {
    key: "length",
    value: function length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
  }, {
    key: "scaleTo",
    value: function scaleTo(size) {
      var len = this.length() || 1;
      this.scale(size / len);

      return this;
    }
  }]);

  return Vector;
}();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vector = __webpack_require__(0);

var _engine = __webpack_require__(3);

var _snake = __webpack_require__(6);

var _ref = [window.innerWidth, window.innerHeight],
    width = _ref[0],
    height = _ref[1];

var canvas = document.getElementById('canvas');
canvas.width = width;
canvas.height = height;
var ctx = canvas.getContext('2d');

ctx.scale(1, -1);
ctx.translate(width / 2, -height / 2);

var engine = new _engine.Engine({ width: width, height: height });
var snake = new _snake.Snake({
  size: 5,
  color: 'rgba(250, 10, 100, 1)',
  tailSize: 50,
  position: (0, _vector.vec)(10, 10),
  velocity: (0, _vector.vec)(1, 1)
});

engine.addToScene(snake);

var frame = 0;
(function animation() {
  frame++;

  snake.position.x = Math.sin(frame / 70) * 500;
  snake.position.y = Math.cos(frame / 20) * 200;

  engine.clear(ctx).update().render(ctx);

  window.requestAnimationFrame(animation);
})();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Engine = exports.Engine = function () {
  function Engine(_ref) {
    var width = _ref.width,
        height = _ref.height;

    _classCallCheck(this, Engine);

    this.scene = [];
    this.canvasSize = { width: width, height: height };
  }

  _createClass(Engine, [{
    key: "addToScene",
    value: function addToScene(object) {
      this.scene.push(object);
      return this;
    }
  }, {
    key: "update",
    value: function update() {
      this.scene.forEach(function (object) {
        return object.update && object.update();
      });
      return this;
    }
  }, {
    key: "render",
    value: function render(ctx) {
      this.scene.forEach(function (object) {
        return object.render && object.render(ctx);
      });
      return this;
    }
  }, {
    key: "clear",
    value: function clear(ctx) {
      ctx.clearRect(-this.canvasSize.width / 2, -this.canvasSize.height / 2, this.canvasSize.width, this.canvasSize.height);

      return this;
    }
  }]);

  return Engine;
}();

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.range = range;
function range() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  return Array.from(Array(size).keys());
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Snake = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _vector = __webpack_require__(0);

var _utils = __webpack_require__(5);

var _creature = __webpack_require__(7);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Snake = exports.Snake = function (_Creature) {
  _inherits(Snake, _Creature);

  function Snake(config) {
    _classCallCheck(this, Snake);

    var _this = _possibleConstructorReturn(this, (Snake.__proto__ || Object.getPrototypeOf(Snake)).call(this, config));

    _this.tailSize = config.tailSize;
    _this.tail = (0, _utils.range)(_this.tailSize).map(function () {
      return new _creature.Creature({
        position: config.position.copy(),
        size: config.size,
        color: config.color
      });
    });

    _this.tail.push(_this);
    return _this;
  }

  _createClass(Snake, [{
    key: 'update',
    value: function update() {
      _get(Snake.prototype.__proto__ || Object.getPrototypeOf(Snake.prototype), 'update', this).call(this);
      for (var i = this.tail.length - 1; i >= 1; i--) {
        var direction = this.tail[i].position.copy().subtract(this.tail[i - 1].position);

        this.tail[i - 1].position.add(direction.scaleTo(direction.length() - this.size * 2));
      }
    }
  }, {
    key: 'render',
    value: function render(ctx) {
      _get(Snake.prototype.__proto__ || Object.getPrototypeOf(Snake.prototype), 'render', this).call(this, ctx);
      for (var i = 0; i < this.tail.length - 1; i++) {
        this.tail[i].render(ctx);
      }
    }
  }]);

  return Snake;
}(_creature.Creature);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Creature = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _vector = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Creature = exports.Creature = function () {
  function Creature(_ref) {
    var position = _ref.position,
        size = _ref.size,
        color = _ref.color,
        _ref$velocity = _ref.velocity,
        velocity = _ref$velocity === undefined ? (0, _vector.vec)() : _ref$velocity;

    _classCallCheck(this, Creature);

    this.position = position;
    this.size = size;
    this.color = color;
    this.velocity = velocity;
  }

  _createClass(Creature, [{
    key: 'render',
    value: function render(ctx) {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI);
      ctx.fill();
      ctx.closePath();
    }
  }, {
    key: 'update',
    value: function update() {
      this.position.add(this.velocity);
    }
  }]);

  return Creature;
}();

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjFhOWQ4ZGU1YTg5ZTJhYjA5YjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc25ha2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NyZWF0dXJlLmpzIl0sIm5hbWVzIjpbInZlYyIsIngiLCJ5IiwiVmVjdG9yIiwic2l6ZSIsIk1hdGgiLCJzcXJ0IiwibGVuIiwibGVuZ3RoIiwic2NhbGUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJ3aWR0aCIsImhlaWdodCIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwidHJhbnNsYXRlIiwiZW5naW5lIiwic25ha2UiLCJjb2xvciIsInRhaWxTaXplIiwicG9zaXRpb24iLCJ2ZWxvY2l0eSIsImFkZFRvU2NlbmUiLCJmcmFtZSIsImFuaW1hdGlvbiIsInNpbiIsImNvcyIsImNsZWFyIiwidXBkYXRlIiwicmVuZGVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiRW5naW5lIiwic2NlbmUiLCJjYW52YXNTaXplIiwib2JqZWN0IiwicHVzaCIsImZvckVhY2giLCJjbGVhclJlY3QiLCJyYW5nZSIsIkFycmF5IiwiZnJvbSIsImtleXMiLCJTbmFrZSIsImNvbmZpZyIsInRhaWwiLCJtYXAiLCJjb3B5IiwiaSIsImRpcmVjdGlvbiIsInN1YnRyYWN0IiwiYWRkIiwic2NhbGVUbyIsIkNyZWF0dXJlIiwiYmVnaW5QYXRoIiwiZmlsbFN0eWxlIiwiYXJjIiwiUEkiLCJmaWxsIiwiY2xvc2VQYXRoIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7UUM3RGdCQSxHLEdBQUFBLEc7Ozs7QUFBVCxTQUFTQSxHQUFULENBQWFDLENBQWIsRUFBZ0JDLENBQWhCLEVBQW1CO0FBQ3hCLFNBQU8sSUFBSUMsTUFBSixDQUFXRixDQUFYLEVBQWNDLENBQWQsQ0FBUDtBQUNEOztJQUVLQyxNO0FBQ0osb0JBQTBCO0FBQUEsUUFBZEYsQ0FBYyx1RUFBVixDQUFVO0FBQUEsUUFBUEMsQ0FBTyx1RUFBSCxDQUFHOztBQUFBOztBQUN4QixTQUFLRCxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDRDs7Ozs4QkFFYTtBQUFBLFVBQVJELENBQVEsUUFBUkEsQ0FBUTtBQUFBLFVBQUxDLENBQUssUUFBTEEsQ0FBSzs7QUFDWixXQUFLRCxDQUFMLElBQVVBLENBQVY7QUFDQSxXQUFLQyxDQUFMLElBQVVBLENBQVY7O0FBRUEsYUFBTyxJQUFQO0FBQ0Q7OztvQ0FFa0I7QUFBQSxVQUFSRCxDQUFRLFNBQVJBLENBQVE7QUFBQSxVQUFMQyxDQUFLLFNBQUxBLENBQUs7O0FBQ2pCLFdBQUtELENBQUwsSUFBVUEsQ0FBVjtBQUNBLFdBQUtDLENBQUwsSUFBVUEsQ0FBVjs7QUFFQSxhQUFPLElBQVA7QUFDRDs7OzBCQUVLRSxJLEVBQU07QUFDVixXQUFLSCxDQUFMLElBQVVHLElBQVY7QUFDQSxXQUFLRixDQUFMLElBQVVFLElBQVY7O0FBRUEsYUFBTyxJQUFQO0FBQ0Q7OzsyQkFFTTtBQUNMLGFBQU8sSUFBSUQsTUFBSixDQUFXLEtBQUtGLENBQWhCLEVBQW1CLEtBQUtDLENBQXhCLENBQVA7QUFDRDs7OzZCQUVRO0FBQ1AsYUFBT0csS0FBS0MsSUFBTCxDQUFVLEtBQUtMLENBQUwsR0FBUyxLQUFLQSxDQUFkLEdBQWtCLEtBQUtDLENBQUwsR0FBUyxLQUFLQSxDQUExQyxDQUFQO0FBQ0Q7Ozs0QkFFT0UsSSxFQUFNO0FBQ1osVUFBSUcsTUFBTSxLQUFLQyxNQUFMLE1BQWlCLENBQTNCO0FBQ0EsV0FBS0MsS0FBTCxDQUFXTCxPQUFPRyxHQUFsQjs7QUFFQSxhQUFPLElBQVA7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q0g7O0FBQ0E7O0FBQ0E7O1dBRzBCLENBQUVHLE9BQU9DLFVBQVQsRUFBcUJELE9BQU9FLFdBQTVCLEM7SUFBbEJDLEs7SUFBT0MsTTs7QUFDZixJQUFNQyxTQUFTQyxTQUFTQyxjQUFULENBQXdCLFFBQXhCLENBQWY7QUFDQUYsT0FBT0YsS0FBUCxHQUFlQSxLQUFmO0FBQ0FFLE9BQU9ELE1BQVAsR0FBZ0JBLE1BQWhCO0FBQ0EsSUFBTUksTUFBTUgsT0FBT0ksVUFBUCxDQUFrQixJQUFsQixDQUFaOztBQUVBRCxJQUFJVCxLQUFKLENBQVUsQ0FBVixFQUFhLENBQUMsQ0FBZDtBQUNBUyxJQUFJRSxTQUFKLENBQWNQLFFBQVEsQ0FBdEIsRUFBeUIsQ0FBQ0MsTUFBRCxHQUFVLENBQW5DOztBQUdBLElBQU1PLFNBQVMsbUJBQVcsRUFBRVIsWUFBRixFQUFTQyxjQUFULEVBQVgsQ0FBZjtBQUNBLElBQU1RLFFBQVEsaUJBQVU7QUFDdEJsQixRQUFNLENBRGdCO0FBRXRCbUIsU0FBTyx1QkFGZTtBQUd0QkMsWUFBVSxFQUhZO0FBSXRCQyxZQUFVLGlCQUFJLEVBQUosRUFBUSxFQUFSLENBSlk7QUFLdEJDLFlBQVUsaUJBQUksQ0FBSixFQUFPLENBQVA7QUFMWSxDQUFWLENBQWQ7O0FBUUFMLE9BQU9NLFVBQVAsQ0FBa0JMLEtBQWxCOztBQUVBLElBQUlNLFFBQVEsQ0FBWjtBQUNBLENBQUMsU0FBU0MsU0FBVCxHQUFxQjtBQUNwQkQ7O0FBRUFOLFFBQU1HLFFBQU4sQ0FBZXhCLENBQWYsR0FBbUJJLEtBQUt5QixHQUFMLENBQVNGLFFBQVEsRUFBakIsSUFBdUIsR0FBMUM7QUFDQU4sUUFBTUcsUUFBTixDQUFldkIsQ0FBZixHQUFtQkcsS0FBSzBCLEdBQUwsQ0FBU0gsUUFBUSxFQUFqQixJQUF1QixHQUExQzs7QUFFQVAsU0FDR1csS0FESCxDQUNTZCxHQURULEVBRUdlLE1BRkgsR0FHR0MsTUFISCxDQUdVaEIsR0FIVjs7QUFLQVIsU0FBT3lCLHFCQUFQLENBQTZCTixTQUE3QjtBQUNELENBWkQsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUMzQmFPLE0sV0FBQUEsTTtBQUNYLHdCQUErQjtBQUFBLFFBQWpCdkIsS0FBaUIsUUFBakJBLEtBQWlCO0FBQUEsUUFBVkMsTUFBVSxRQUFWQSxNQUFVOztBQUFBOztBQUM3QixTQUFLdUIsS0FBTCxHQUFhLEVBQWI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLEVBQUV6QixZQUFGLEVBQVNDLGNBQVQsRUFBbEI7QUFDRDs7OzsrQkFFVXlCLE0sRUFBUTtBQUNqQixXQUFLRixLQUFMLENBQVdHLElBQVgsQ0FBZ0JELE1BQWhCO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7Ozs2QkFFUTtBQUNQLFdBQUtGLEtBQUwsQ0FBV0ksT0FBWCxDQUFtQjtBQUFBLGVBQVVGLE9BQU9OLE1BQVAsSUFBaUJNLE9BQU9OLE1BQVAsRUFBM0I7QUFBQSxPQUFuQjtBQUNBLGFBQU8sSUFBUDtBQUNEOzs7MkJBRU1mLEcsRUFBSztBQUNWLFdBQUttQixLQUFMLENBQVdJLE9BQVgsQ0FBbUI7QUFBQSxlQUFVRixPQUFPTCxNQUFQLElBQWlCSyxPQUFPTCxNQUFQLENBQWNoQixHQUFkLENBQTNCO0FBQUEsT0FBbkI7QUFDQSxhQUFPLElBQVA7QUFDRDs7OzBCQUVLQSxHLEVBQUs7QUFDVEEsVUFBSXdCLFNBQUosQ0FDRSxDQUFDLEtBQUtKLFVBQUwsQ0FBZ0J6QixLQUFqQixHQUF5QixDQUQzQixFQUVFLENBQUMsS0FBS3lCLFVBQUwsQ0FBZ0J4QixNQUFqQixHQUEwQixDQUY1QixFQUdFLEtBQUt3QixVQUFMLENBQWdCekIsS0FIbEIsRUFJRSxLQUFLeUIsVUFBTCxDQUFnQnhCLE1BSmxCOztBQU9BLGFBQU8sSUFBUDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7OztRQzlCYTZCLEssR0FBQUEsSztBQUFULFNBQVNBLEtBQVQsR0FBeUI7QUFBQSxNQUFWdkMsSUFBVSx1RUFBSCxDQUFHOztBQUM5QixTQUFPd0MsTUFBTUMsSUFBTixDQUFXRCxNQUFNeEMsSUFBTixFQUFZMEMsSUFBWixFQUFYLENBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGRDs7QUFDQTs7QUFDQTs7Ozs7Ozs7SUFFYUMsSyxXQUFBQSxLOzs7QUFDWCxpQkFBWUMsTUFBWixFQUFvQjtBQUFBOztBQUFBLDhHQUNaQSxNQURZOztBQUVsQixVQUFLeEIsUUFBTCxHQUFnQndCLE9BQU94QixRQUF2QjtBQUNBLFVBQUt5QixJQUFMLEdBQVksa0JBQU0sTUFBS3pCLFFBQVgsRUFBcUIwQixHQUFyQixDQUF5QjtBQUFBLGFBQU0sdUJBQWE7QUFDdER6QixrQkFBVXVCLE9BQU92QixRQUFQLENBQWdCMEIsSUFBaEIsRUFENEM7QUFFdEQvQyxjQUFNNEMsT0FBTzVDLElBRnlDO0FBR3REbUIsZUFBT3lCLE9BQU96QjtBQUh3QyxPQUFiLENBQU47QUFBQSxLQUF6QixDQUFaOztBQU1BLFVBQUswQixJQUFMLENBQVVULElBQVY7QUFUa0I7QUFVbkI7Ozs7NkJBRVE7QUFDUDtBQUNBLFdBQUssSUFBSVksSUFBSSxLQUFLSCxJQUFMLENBQVV6QyxNQUFWLEdBQW1CLENBQWhDLEVBQWtDNEMsS0FBSyxDQUF2QyxFQUF5Q0EsR0FBekMsRUFBOEM7QUFDNUMsWUFBTUMsWUFBWSxLQUFLSixJQUFMLENBQVVHLENBQVYsRUFBYTNCLFFBQWIsQ0FDZjBCLElBRGUsR0FFZkcsUUFGZSxDQUVOLEtBQUtMLElBQUwsQ0FBVUcsSUFBSSxDQUFkLEVBQWlCM0IsUUFGWCxDQUFsQjs7QUFJQSxhQUFLd0IsSUFBTCxDQUFVRyxJQUFJLENBQWQsRUFBaUIzQixRQUFqQixDQUEwQjhCLEdBQTFCLENBQThCRixVQUMzQkcsT0FEMkIsQ0FDbkJILFVBQVU3QyxNQUFWLEtBQXFCLEtBQUtKLElBQUwsR0FBWSxDQURkLENBQTlCO0FBRUQ7QUFDRjs7OzJCQUVNYyxHLEVBQUs7QUFDViwyR0FBYUEsR0FBYjtBQUNBLFdBQUssSUFBSWtDLElBQUksQ0FBYixFQUFlQSxJQUFJLEtBQUtILElBQUwsQ0FBVXpDLE1BQVYsR0FBbUIsQ0FBdEMsRUFBd0M0QyxHQUF4QyxFQUE2QztBQUMzQyxhQUFLSCxJQUFMLENBQVVHLENBQVYsRUFBYWxCLE1BQWIsQ0FBb0JoQixHQUFwQjtBQUNEO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENIOzs7O0lBRWF1QyxRLFdBQUFBLFE7QUFDWCwwQkFHRztBQUFBLFFBRkRoQyxRQUVDLFFBRkRBLFFBRUM7QUFBQSxRQUZTckIsSUFFVCxRQUZTQSxJQUVUO0FBQUEsUUFERG1CLEtBQ0MsUUFEREEsS0FDQztBQUFBLDZCQURNRyxRQUNOO0FBQUEsUUFETUEsUUFDTixpQ0FEaUIsa0JBQ2pCOztBQUFBOztBQUNELFNBQUtELFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS3JCLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUttQixLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLRyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNEOzs7OzJCQUVNUixHLEVBQUs7QUFDVkEsVUFBSXdDLFNBQUo7QUFDQXhDLFVBQUl5QyxTQUFKLEdBQWdCLEtBQUtwQyxLQUFyQjtBQUNBTCxVQUFJMEMsR0FBSixDQUFRLEtBQUtuQyxRQUFMLENBQWN4QixDQUF0QixFQUF5QixLQUFLd0IsUUFBTCxDQUFjdkIsQ0FBdkMsRUFBMEMsS0FBS0UsSUFBL0MsRUFBcUQsQ0FBckQsRUFBd0QsSUFBSUMsS0FBS3dELEVBQWpFO0FBQ0EzQyxVQUFJNEMsSUFBSjtBQUNBNUMsVUFBSTZDLFNBQUo7QUFDRDs7OzZCQUVRO0FBQ1AsV0FBS3RDLFFBQUwsQ0FBYzhCLEdBQWQsQ0FBa0IsS0FBSzdCLFFBQXZCO0FBQ0QiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2MWE5ZDhkZTVhODllMmFiMDliOSIsImV4cG9ydCBmdW5jdGlvbiB2ZWMoeCwgeSkge1xuICByZXR1cm4gbmV3IFZlY3Rvcih4LCB5KTtcbn1cblxuY2xhc3MgVmVjdG9yIHtcbiAgY29uc3RydWN0b3IoeCA9IDAsIHkgPSAwKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG5cbiAgYWRkKHsgeCwgeSB9KSB7XG4gICAgdGhpcy54ICs9IHg7XG4gICAgdGhpcy55ICs9IHk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHN1YnRyYWN0KHsgeCwgeSB9KSB7XG4gICAgdGhpcy54IC09IHg7XG4gICAgdGhpcy55IC09IHk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNjYWxlKHNpemUpIHtcbiAgICB0aGlzLnggKj0gc2l6ZTtcbiAgICB0aGlzLnkgKj0gc2l6ZTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY29weSgpIHtcbiAgICByZXR1cm4gbmV3IFZlY3Rvcih0aGlzLngsIHRoaXMueSk7XG4gIH1cblxuICBsZW5ndGgoKSB7XG4gICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkpO1xuICB9XG5cbiAgc2NhbGVUbyhzaXplKSB7XG4gICAgbGV0IGxlbiA9IHRoaXMubGVuZ3RoKCkgfHwgMTtcbiAgICB0aGlzLnNjYWxlKHNpemUgLyBsZW4pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92ZWN0b3IuanMiLCJpbXBvcnQgeyB2ZWMgfSBmcm9tICd2ZWN0b3InO1xuaW1wb3J0IHsgRW5naW5lIH0gZnJvbSAnZW5naW5lJztcbmltcG9ydCB7IFNuYWtlIH0gZnJvbSAnc25ha2UnO1xuXG5cbmNvbnN0IFsgd2lkdGgsIGhlaWdodCBdID0gWyB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0IF07XG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG5jYW52YXMud2lkdGggPSB3aWR0aDtcbmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuY3R4LnNjYWxlKDEsIC0xKTtcbmN0eC50cmFuc2xhdGUod2lkdGggLyAyLCAtaGVpZ2h0IC8gMik7XG5cblxuY29uc3QgZW5naW5lID0gbmV3IEVuZ2luZSh7IHdpZHRoLCBoZWlnaHQgfSk7XG5jb25zdCBzbmFrZSA9IG5ldyBTbmFrZSh7XG4gIHNpemU6IDUsXG4gIGNvbG9yOiAncmdiYSgyNTAsIDEwLCAxMDAsIDEpJyxcbiAgdGFpbFNpemU6IDUwLFxuICBwb3NpdGlvbjogdmVjKDEwLCAxMCksXG4gIHZlbG9jaXR5OiB2ZWMoMSwgMSlcbn0pO1xuXG5lbmdpbmUuYWRkVG9TY2VuZShzbmFrZSk7XG5cbmxldCBmcmFtZSA9IDA7XG4oZnVuY3Rpb24gYW5pbWF0aW9uKCkge1xuICBmcmFtZSsrO1xuXG4gIHNuYWtlLnBvc2l0aW9uLnggPSBNYXRoLnNpbihmcmFtZSAvIDcwKSAqIDUwMDtcbiAgc25ha2UucG9zaXRpb24ueSA9IE1hdGguY29zKGZyYW1lIC8gMjApICogMjAwO1xuXG4gIGVuZ2luZVxuICAgIC5jbGVhcihjdHgpXG4gICAgLnVwZGF0ZSgpXG4gICAgLnJlbmRlcihjdHgpO1xuXG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbn0pKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9pbmRleC5qcyIsImV4cG9ydCBjbGFzcyBFbmdpbmUge1xuICBjb25zdHJ1Y3Rvcih7IHdpZHRoLCBoZWlnaHQgfSkge1xuICAgIHRoaXMuc2NlbmUgPSBbXTtcbiAgICB0aGlzLmNhbnZhc1NpemUgPSB7IHdpZHRoLCBoZWlnaHQgfTtcbiAgfVxuXG4gIGFkZFRvU2NlbmUob2JqZWN0KSB7XG4gICAgdGhpcy5zY2VuZS5wdXNoKG9iamVjdCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5zY2VuZS5mb3JFYWNoKG9iamVjdCA9PiBvYmplY3QudXBkYXRlICYmIG9iamVjdC51cGRhdGUoKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXIoY3R4KSB7XG4gICAgdGhpcy5zY2VuZS5mb3JFYWNoKG9iamVjdCA9PiBvYmplY3QucmVuZGVyICYmIG9iamVjdC5yZW5kZXIoY3R4KSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjbGVhcihjdHgpIHtcbiAgICBjdHguY2xlYXJSZWN0KFxuICAgICAgLXRoaXMuY2FudmFzU2l6ZS53aWR0aCAvIDIsIFxuICAgICAgLXRoaXMuY2FudmFzU2l6ZS5oZWlnaHQgLyAyLFxuICAgICAgdGhpcy5jYW52YXNTaXplLndpZHRoLFxuICAgICAgdGhpcy5jYW52YXNTaXplLmhlaWdodFxuICAgICk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS5qcyIsImV4cG9ydCBmdW5jdGlvbiByYW5nZShzaXplID0gMCkge1xuICByZXR1cm4gQXJyYXkuZnJvbShBcnJheShzaXplKS5rZXlzKCkpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzLmpzIiwiaW1wb3J0IHsgdmVjIH0gZnJvbSAndmVjdG9yJztcclxuaW1wb3J0IHsgcmFuZ2UgfSBmcm9tICd1dGlscyc7XHJcbmltcG9ydCB7IENyZWF0dXJlIH0gZnJvbSAnY3JlYXR1cmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNuYWtlIGV4dGVuZHMgQ3JlYXR1cmUge1xyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgc3VwZXIoY29uZmlnKTtcclxuICAgIHRoaXMudGFpbFNpemUgPSBjb25maWcudGFpbFNpemU7XHJcbiAgICB0aGlzLnRhaWwgPSByYW5nZSh0aGlzLnRhaWxTaXplKS5tYXAoKCkgPT4gbmV3IENyZWF0dXJlKHtcclxuICAgICAgcG9zaXRpb246IGNvbmZpZy5wb3NpdGlvbi5jb3B5KCksXHJcbiAgICAgIHNpemU6IGNvbmZpZy5zaXplLFxyXG4gICAgICBjb2xvcjogY29uZmlnLmNvbG9yXHJcbiAgICB9KSk7XHJcblxyXG4gICAgdGhpcy50YWlsLnB1c2godGhpcyk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICBzdXBlci51cGRhdGUoKTtcclxuICAgIGZvciAobGV0IGkgPSB0aGlzLnRhaWwubGVuZ3RoIC0gMTtpID49IDE7aS0tKSB7XHJcbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMudGFpbFtpXS5wb3NpdGlvblxyXG4gICAgICAgIC5jb3B5KClcclxuICAgICAgICAuc3VidHJhY3QodGhpcy50YWlsW2kgLSAxXS5wb3NpdGlvbik7XHJcblxyXG4gICAgICB0aGlzLnRhaWxbaSAtIDFdLnBvc2l0aW9uLmFkZChkaXJlY3Rpb25cclxuICAgICAgICAuc2NhbGVUbyhkaXJlY3Rpb24ubGVuZ3RoKCkgLSB0aGlzLnNpemUgKiAyKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoY3R4KSB7XHJcbiAgICBzdXBlci5yZW5kZXIoY3R4KTtcclxuICAgIGZvciAobGV0IGkgPSAwO2kgPCB0aGlzLnRhaWwubGVuZ3RoIC0gMTtpKyspIHtcclxuICAgICAgdGhpcy50YWlsW2ldLnJlbmRlcihjdHgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc25ha2UuanMiLCJpbXBvcnQgeyB2ZWMgfSBmcm9tICd2ZWN0b3InO1xyXG5cclxuZXhwb3J0IGNsYXNzIENyZWF0dXJlIHtcclxuICBjb25zdHJ1Y3Rvcih7XHJcbiAgICBwb3NpdGlvbiwgc2l6ZSxcclxuICAgIGNvbG9yLCB2ZWxvY2l0eSA9IHZlYygpXHJcbiAgfSkge1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgdGhpcy5zaXplID0gc2l6ZTtcclxuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgIHRoaXMudmVsb2NpdHkgPSB2ZWxvY2l0eTtcclxuICB9XHJcblxyXG4gIHJlbmRlcihjdHgpIHtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xyXG4gICAgY3R4LmFyYyh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5zaXplLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICBjdHguZmlsbCgpO1xyXG4gICAgY3R4LmNsb3NlUGF0aCgpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgdGhpcy5wb3NpdGlvbi5hZGQodGhpcy52ZWxvY2l0eSk7XHJcbiAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NyZWF0dXJlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==