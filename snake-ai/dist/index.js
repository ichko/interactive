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
exports.polar = polar;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function vec(x, y) {
  return new Vector(x, y);
}

function polar(angle) {
  var magnitude = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  return new Vector(magnitude * Math.cos(angle), magnitude * Math.sin(angle));
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
    key: "distance",
    value: function distance(vector) {
      return this.copy().subtract(vector).length();
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

  snake.position.x = Math.cos(frame / 200) * 800;
  snake.position.y = (Math.sin(frame / 15) + Math.sin(frame / 30)) * 100;

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
exports.argMin = argMin;
function range() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  return Array.from(Array(size).keys());
}

function argMin(elements) {
  var handler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (x) {
    return x;
  };

  var mappedElements = elements.map(handler);
  var minId = -1;

  mappedElements.forEach(function (element, id) {
    return minId = mappedElements[minId] < element ? minId : id;
  });

  return minId;
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
    _this.tail = (0, _utils.range)(_this.tailSize).map(function (id) {
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
    this.plugins = [];
    this.plug(new Movement());
  }

  _createClass(Creature, [{
    key: 'render',
    value: function render(ctx) {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI);
      ctx.fill();
      ctx.closePath();

      this.plugins.forEach(function (plugin) {
        return plugin.forEach(function (part) {
          return part.render && part.render(ctx);
        });
      });
    }
  }, {
    key: 'update',
    value: function update() {
      var _this = this;

      var value = this;
      this.plugins.forEach(function (plugin) {
        return plugin.forEach(function (part) {
          return value = part.call(_this, value);
        });
      });
    }
  }, {
    key: 'plug',
    value: function plug() {
      for (var _len = arguments.length, plugin = Array(_len), _key = 0; _key < _len; _key++) {
        plugin[_key] = arguments[_key];
      }

      this.plugins.push(plugin);
    }
  }, {
    key: 'orientation',
    get: function get() {
      return Math.atan2(this.velocity.y, this.velocity.x);
    }
  }]);

  return Creature;
}();

var Movement = function () {
  function Movement() {
    _classCallCheck(this, Movement);
  }

  _createClass(Movement, [{
    key: 'call',
    value: function call(creature) {
      creature.position.add(creature.velocity);
    }
  }]);

  return Movement;
}();

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDk3NDUzMDhkODllOTk3YjVlNmMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc25ha2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NyZWF0dXJlLmpzIl0sIm5hbWVzIjpbInZlYyIsInBvbGFyIiwieCIsInkiLCJWZWN0b3IiLCJhbmdsZSIsIm1hZ25pdHVkZSIsIk1hdGgiLCJjb3MiLCJzaW4iLCJzaXplIiwic3FydCIsInZlY3RvciIsImNvcHkiLCJzdWJ0cmFjdCIsImxlbmd0aCIsImxlbiIsInNjYWxlIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsInRyYW5zbGF0ZSIsImVuZ2luZSIsInNuYWtlIiwiY29sb3IiLCJ0YWlsU2l6ZSIsInBvc2l0aW9uIiwidmVsb2NpdHkiLCJhZGRUb1NjZW5lIiwiZnJhbWUiLCJhbmltYXRpb24iLCJjbGVhciIsInVwZGF0ZSIsInJlbmRlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIkVuZ2luZSIsInNjZW5lIiwiY2FudmFzU2l6ZSIsIm9iamVjdCIsInB1c2giLCJmb3JFYWNoIiwiY2xlYXJSZWN0IiwicmFuZ2UiLCJhcmdNaW4iLCJBcnJheSIsImZyb20iLCJrZXlzIiwiZWxlbWVudHMiLCJoYW5kbGVyIiwibWFwcGVkRWxlbWVudHMiLCJtYXAiLCJtaW5JZCIsImVsZW1lbnQiLCJpZCIsIlNuYWtlIiwiY29uZmlnIiwidGFpbCIsImkiLCJkaXJlY3Rpb24iLCJhZGQiLCJzY2FsZVRvIiwiQ3JlYXR1cmUiLCJwbHVnaW5zIiwicGx1ZyIsIk1vdmVtZW50IiwiYmVnaW5QYXRoIiwiZmlsbFN0eWxlIiwiYXJjIiwiUEkiLCJmaWxsIiwiY2xvc2VQYXRoIiwicGx1Z2luIiwicGFydCIsInZhbHVlIiwiY2FsbCIsImF0YW4yIiwiY3JlYXR1cmUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztRQzdEZ0JBLEcsR0FBQUEsRztRQUlBQyxLLEdBQUFBLEs7Ozs7QUFKVCxTQUFTRCxHQUFULENBQWFFLENBQWIsRUFBZ0JDLENBQWhCLEVBQW1CO0FBQ3hCLFNBQU8sSUFBSUMsTUFBSixDQUFXRixDQUFYLEVBQWNDLENBQWQsQ0FBUDtBQUNEOztBQUVNLFNBQVNGLEtBQVQsQ0FBZUksS0FBZixFQUFxQztBQUFBLE1BQWZDLFNBQWUsdUVBQUgsQ0FBRzs7QUFDMUMsU0FBTyxJQUFJRixNQUFKLENBQ0xFLFlBQVlDLEtBQUtDLEdBQUwsQ0FBU0gsS0FBVCxDQURQLEVBRUxDLFlBQVlDLEtBQUtFLEdBQUwsQ0FBU0osS0FBVCxDQUZQLENBQVA7QUFJRDs7SUFFS0QsTTtBQUNKLG9CQUEwQjtBQUFBLFFBQWRGLENBQWMsdUVBQVYsQ0FBVTtBQUFBLFFBQVBDLENBQU8sdUVBQUgsQ0FBRzs7QUFBQTs7QUFDeEIsU0FBS0QsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS0MsQ0FBTCxH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SWtELElBQUo7QUFDQWxELFVBQUltRCxTQUFKOztBQUVBLFdBQUtSLE9BQUwsQ0FBYXRCLE9BQWIsQ0FBcUI7QUFBQSxlQUNuQitCLE9BQU8vQixPQUFQLENBQWU7QUFBQSxpQkFDYmdDLEtBQUt2QyxNQUFMLElBQWV1QyxLQUFLdkMsTUFBTCxDQUFZZCxHQUFaLENBREY7QUFBQSxTQUFmLENBRG1CO0FBQUEsT0FBckI7QUFHRDs7OzZCQUVRO0FBQUE7O0FBQ1AsVUFBSXNELFFBQVEsSUFBWjtBQUNBLFdBQUtYLE9BQUwsQ0FBYXRCLE9BQWIsQ0FBcUI7QUFBQSxlQUNuQitCLE9BQU8vQixPQUFQLENBQWU7QUFBQSxpQkFDYmlDLFFBQVFELEtBQUtFLElBQUwsUUFBZ0JELEtBQWhCLENBREs7QUFBQSxTQUFmLENBRG1CO0FBQUEsT0FBckI7QUFHRDs7OzJCQUVlO0FBQUEsd0NBQVJGLE1BQVE7QUFBUkEsY0FBUTtBQUFBOztBQUNkLFdBQUtULE9BQUwsQ0FBYXZCLElBQWIsQ0FBa0JnQyxNQUFsQjtBQUNEOzs7d0JBekJpQjtBQUNoQixhQUFPdkUsS0FBSzJFLEtBQUwsQ0FBVyxLQUFLaEQsUUFBTCxDQUFjL0IsQ0FBekIsRUFBNEIsS0FBSytCLFFBQUwsQ0FBY2hDLENBQTFDLENBQVA7QUFDRDs7Ozs7O0lBMEJHcUUsUTs7Ozs7Ozt5QkFDQ1ksUSxFQUFVO0FBQ2JBLGVBQVNsRCxRQUFULENBQWtCaUMsR0FBbEIsQ0FBc0JpQixTQUFTakQsUUFBL0I7QUFDRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGQ5NzQ1MzA4ZDg5ZTk5N2I1ZTZjIiwiZXhwb3J0IGZ1bmN0aW9uIHZlYyh4LCB5KSB7XG4gIHJldHVybiBuZXcgVmVjdG9yKHgsIHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9sYXIoYW5nbGUsIG1hZ25pdHVkZSA9IDEpIHtcbiAgcmV0dXJuIG5ldyBWZWN0b3IoXG4gICAgbWFnbml0dWRlICogTWF0aC5jb3MoYW5nbGUpLFxuICAgIG1hZ25pdHVkZSAqIE1hdGguc2luKGFuZ2xlKVxuICApO1xufVxuXG5jbGFzcyBWZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDApIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cblxuICBhZGQoeyB4LCB5IH0pIHtcbiAgICB0aGlzLnggKz0geDtcbiAgICB0aGlzLnkgKz0geTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc3VidHJhY3QoeyB4LCB5IH0pIHtcbiAgICB0aGlzLnggLT0geDtcbiAgICB0aGlzLnkgLT0geTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2NhbGUoc2l6ZSkge1xuICAgIHRoaXMueCAqPSBzaXplO1xuICAgIHRoaXMueSAqPSBzaXplO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjb3B5KCkge1xuICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMueCwgdGhpcy55KTtcbiAgfVxuXG4gIGxlbmd0aCgpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSk7XG4gIH1cblxuICBkaXN0YW5jZSh2ZWN0b3IpIHtcbiAgICByZXR1cm4gdGhpcy5jb3B5KClcbiAgICAgIC5zdWJ0cmFjdCh2ZWN0b3IpXG4gICAgICAubGVuZ3RoKCk7XG4gIH1cblxuICBzY2FsZVRvKHNpemUpIHtcbiAgICBsZXQgbGVuID0gdGhpcy5sZW5ndGgoKSB8fCAxO1xuICAgIHRoaXMuc2NhbGUoc2l6ZSAvIGxlbik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZlY3Rvci5qcyIsImltcG9ydCB7IHZlYyB9IGZyb20gJ3ZlY3Rvcic7XG5pbXBvcnQgeyBFbmdpbmUgfSBmcm9tICdlbmdpbmUnO1xuaW1wb3J0IHsgU25ha2UgfSBmcm9tICdzbmFrZSc7XG5cblxuY29uc3QgWyB3aWR0aCwgaGVpZ2h0IF0gPSBbIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQgXTtcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG5jdHguc2NhbGUoMSwgLTEpO1xuY3R4LnRyYW5zbGF0ZSh3aWR0aCAvIDIsIC1oZWlnaHQgLyAyKTtcblxuXG5jb25zdCBlbmdpbmUgPSBuZXcgRW5naW5lKHsgd2lkdGgsIGhlaWdodCB9KTtcbmNvbnN0IHNuYWtlID0gbmV3IFNuYWtlKHtcbiAgc2l6ZTogNSxcbiAgY29sb3I6ICdyZ2JhKDI1MCwgMTAsIDEwMCwgMSknLFxuICB0YWlsU2l6ZTogNTAsXG4gIHBvc2l0aW9uOiB2ZWMoMTAsIDEwKSxcbiAgdmVsb2NpdHk6IHZlYygxLCAxKVxufSk7XG5cbmVuZ2luZS5hZGRUb1NjZW5lKHNuYWtlKTtcblxubGV0IGZyYW1lID0gMDtcbihmdW5jdGlvbiBhbmltYXRpb24oKSB7XG4gIGZyYW1lKys7XG5cbiAgc25ha2UucG9zaXRpb24ueCA9IE1hdGguY29zKGZyYW1lIC8gMjAwKSAqIDgwMDtcbiAgc25ha2UucG9zaXRpb24ueSA9IChNYXRoLnNpbihmcmFtZSAvIDE1KSArIE1hdGguc2luKGZyYW1lIC8gMzApKSAqIDEwMDtcblxuICBlbmdpbmVcbiAgICAuY2xlYXIoY3R4KVxuICAgIC51cGRhdGUoKVxuICAgIC5yZW5kZXIoY3R4KTtcblxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG59KSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaW5kZXguanMiLCJleHBvcnQgY2xhc3MgRW5naW5lIHtcbiAgY29uc3RydWN0b3IoeyB3aWR0aCwgaGVpZ2h0IH0pIHtcbiAgICB0aGlzLnNjZW5lID0gW107XG4gICAgdGhpcy5jYW52YXNTaXplID0geyB3aWR0aCwgaGVpZ2h0IH07XG4gIH1cblxuICBhZGRUb1NjZW5lKG9iamVjdCkge1xuICAgIHRoaXMuc2NlbmUucHVzaChvYmplY3QpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuc2NlbmUuZm9yRWFjaChvYmplY3QgPT4gb2JqZWN0LnVwZGF0ZSAmJiBvYmplY3QudXBkYXRlKCkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVuZGVyKGN0eCkge1xuICAgIHRoaXMuc2NlbmUuZm9yRWFjaChvYmplY3QgPT4gb2JqZWN0LnJlbmRlciAmJiBvYmplY3QucmVuZGVyKGN0eCkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY2xlYXIoY3R4KSB7XG4gICAgY3R4LmNsZWFyUmVjdChcbiAgICAgIC10aGlzLmNhbnZhc1NpemUud2lkdGggLyAyLCBcbiAgICAgIC10aGlzLmNhbnZhc1NpemUuaGVpZ2h0IC8gMixcbiAgICAgIHRoaXMuY2FudmFzU2l6ZS53aWR0aCxcbiAgICAgIHRoaXMuY2FudmFzU2l6ZS5oZWlnaHRcbiAgICApO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUuanMiLCJleHBvcnQgZnVuY3Rpb24gcmFuZ2Uoc2l6ZSA9IDApIHtcbiAgcmV0dXJuIEFycmF5LmZyb20oQXJyYXkoc2l6ZSkua2V5cygpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFyZ01pbihlbGVtZW50cywgaGFuZGxlciA9IHggPT4geCkge1xuICBjb25zdCBtYXBwZWRFbGVtZW50cyA9IGVsZW1lbnRzLm1hcChoYW5kbGVyKTtcbiAgbGV0IG1pbklkID0gLTE7XG5cbiAgbWFwcGVkRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCwgaWQpID0+XG4gICAgbWluSWQgPSBtYXBwZWRFbGVtZW50c1ttaW5JZF0gPCBlbGVtZW50ID9cbiAgICBtaW5JZCA6IGlkXG4gICk7XG5cbiAgcmV0dXJuIG1pbklkO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzLmpzIiwiaW1wb3J0IHsgdmVjIH0gZnJvbSAndmVjdG9yJztcclxuaW1wb3J0IHsgcmFuZ2UgfSBmcm9tICd1dGlscyc7XHJcbmltcG9ydCB7IENyZWF0dXJlIH0gZnJvbSAnY3JlYXR1cmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNuYWtlIGV4dGVuZHMgQ3JlYXR1cmUge1xyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgc3VwZXIoY29uZmlnKTtcclxuICAgIHRoaXMudGFpbFNpemUgPSBjb25maWcudGFpbFNpemU7XHJcbiAgICB0aGlzLnRhaWwgPSByYW5nZSh0aGlzLnRhaWxTaXplKS5tYXAoaWQgPT4gbmV3IENyZWF0dXJlKHtcclxuICAgICAgcG9zaXRpb246IGNvbmZpZy5wb3NpdGlvbi5jb3B5KCksXHJcbiAgICAgIHNpemU6IGNvbmZpZy5zaXplLFxyXG4gICAgICBjb2xvcjogY29uZmlnLmNvbG9yXHJcbiAgICB9KSk7XHJcblxyXG4gICAgdGhpcy50YWlsLnB1c2godGhpcyk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICBzdXBlci51cGRhdGUoKTtcclxuICAgIGZvciAobGV0IGkgPSB0aGlzLnRhaWwubGVuZ3RoIC0gMTtpID49IDE7aS0tKSB7XHJcbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMudGFpbFtpXS5wb3NpdGlvblxyXG4gICAgICAgIC5jb3B5KClcclxuICAgICAgICAuc3VidHJhY3QodGhpcy50YWlsW2kgLSAxXS5wb3NpdGlvbik7XHJcblxyXG4gICAgICB0aGlzLnRhaWxbaSAtIDFdLnBvc2l0aW9uLmFkZChkaXJlY3Rpb25cclxuICAgICAgICAuc2NhbGVUbyhkaXJlY3Rpb24ubGVuZ3RoKCkgLSB0aGlzLnNpemUgKiAyKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoY3R4KSB7XHJcbiAgICBzdXBlci5yZW5kZXIoY3R4KTtcclxuICAgIGZvciAobGV0IGkgPSAwO2kgPCB0aGlzLnRhaWwubGVuZ3RoIC0gMTtpKyspIHtcclxuICAgICAgdGhpcy50YWlsW2ldLnJlbmRlcihjdHgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc25ha2UuanMiLCJpbXBvcnQgeyB2ZWMgfSBmcm9tICd2ZWN0b3InO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDcmVhdHVyZSB7XHJcbiAgY29uc3RydWN0b3Ioe1xyXG4gICAgcG9zaXRpb24sIHNpemUsXHJcbiAgICBjb2xvciwgdmVsb2NpdHkgPSB2ZWMoKVxyXG4gIH0pIHtcclxuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICB0aGlzLnZlbG9jaXR5ID0gdmVsb2NpdHk7XHJcbiAgICB0aGlzLnBsdWdpbnMgPSBbXTtcclxuICAgIHRoaXMucGx1ZyhuZXcgTW92ZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG9yaWVudGF0aW9uKCkge1xyXG4gICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy52ZWxvY2l0eS55LCB0aGlzLnZlbG9jaXR5LngpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKGN0eCkge1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XHJcbiAgICBjdHguYXJjKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLnNpemUsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgIGN0eC5maWxsKCk7XHJcbiAgICBjdHguY2xvc2VQYXRoKCk7XHJcblxyXG4gICAgdGhpcy5wbHVnaW5zLmZvckVhY2gocGx1Z2luID0+XHJcbiAgICAgIHBsdWdpbi5mb3JFYWNoKHBhcnQgPT5cclxuICAgICAgICBwYXJ0LnJlbmRlciAmJiBwYXJ0LnJlbmRlcihjdHgpKSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICBsZXQgdmFsdWUgPSB0aGlzO1xyXG4gICAgdGhpcy5wbHVnaW5zLmZvckVhY2gocGx1Z2luID0+XHJcbiAgICAgIHBsdWdpbi5mb3JFYWNoKHBhcnQgPT5cclxuICAgICAgICB2YWx1ZSA9IHBhcnQuY2FsbCh0aGlzLCB2YWx1ZSkpKTtcclxuICB9XHJcblxyXG4gIHBsdWcoLi4ucGx1Z2luKSB7XHJcbiAgICB0aGlzLnBsdWdpbnMucHVzaChwbHVnaW4pO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgTW92ZW1lbnQge1xyXG4gIGNhbGwoY3JlYXR1cmUpIHtcclxuICAgIGNyZWF0dXJlLnBvc2l0aW9uLmFkZChjcmVhdHVyZS52ZWxvY2l0eSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jcmVhdHVyZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=