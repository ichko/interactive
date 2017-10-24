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
    key: "rotate",
    value: function rotate(angle) {
      var oldX = this.x;

      this.x = this.x * Math.cos(angle) - this.y * Math.sin(angle);
      this.y = this.y * Math.cos(angle) + oldX * Math.sin(angle);

      return this;
    }
  }, {
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
  }, {
    key: "angle",
    get: function get() {
      return Math.atan2(this.y, this.x);
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

var _snake = __webpack_require__(4);

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
/* 4 */
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

var _creature = __webpack_require__(6);

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
    key: 'steer',
    value: function steer(angle) {
      this.velocity.rotate(angle);
    }
  }, {
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
      return this.velocity.angle;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzI4NzMyZjE1MGFjNGZkNzZhM2YiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9zbmFrZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NyZWF0dXJlLmpzIl0sIm5hbWVzIjpbInZlYyIsInBvbGFyIiwieCIsInkiLCJWZWN0b3IiLCJhbmdsZSIsIm1hZ25pdHVkZSIsIk1hdGgiLCJjb3MiLCJzaW4iLCJvbGRYIiwic2l6ZSIsInNxcnQiLCJ2ZWN0b3IiLCJjb3B5Iiwic3VidHJhY3QiLCJsZW5ndGgiLCJsZW4iLCJzY2FsZSIsImF0YW4yIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsInRyYW5zbGF0ZSIsImVuZ2luZSIsInNuYWtlIiwiY29sb3IiLCJ0YWlsU2l6ZSIsInBvc2l0aW9uIiwidmVsb2NpdHkiLCJhZGRUb1NjZW5lIiwiZnJhbWUiLCJhbmltYXRpb24iLCJjbGVhciIsInVwZGF0ZSIsInJlbmRlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIkVuZ2luZSIsInNjZW5lIiwiY2FudmFzU2l6ZSIsIm9iamVjdCIsInB1c2giLCJmb3JFYWNoIiwiY2xlYXJSZWN0IiwiU25ha2UiLCJjb25maWciLCJ0YWlsIiwibWFwIiwiaSIsImRpcmVjdGlvbiIsImFkZCIsInNjYWxlVG8iLCJyYW5nZSIsImFyZ01pbiIsIkFycmF5IiwiZnJvbSIsImtleXMiLCJlbGVtZW50cyIsImhhbmRsZXIiLCJtYXBwZWRFbGVtZW50cyIsIm1pbklkIiwiZWxlbWVudCIsImlkIiwiQ3JlYXR1cmUiLCJwbHVnaW5zIiwicGx1ZyIsIk1vdmVtZW50Iiwicm90YXRlIiwiYmVnaW5QYXRoIiwiZmlsbFN0eWxlIiwiYXJjIiwiUEkiLCJmaWxsIiwiY2xvc2VQYXRoIiwicGx1Z2luIiwicGFydCIsInZhbHVlIiwiY2FsbCIsImNyZWF0dXJlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7UUM3RGdCQSxHLEdBQUFBLEc7UUFJQUMsSyxHQUFBQSxLOzs7O0FBSlQsU0FBU0QsR0FBVCxDQUFhRSxDQUFiLEVBQWdCQyxDQUFoQixFQUFtQjtBQUN4QixTQUFPLElBQUlDLE1BQUosQ0FBV0YsQ0FBWCxFQUFjQyxDQUFkLENBQVA7QUFDRDs7QUFFTSxTQUFTRixLQUFULENBQWVJLEtBQWYsRUFBcUM7QUFBQSxNQUFmQyxTQUFlLHVFQUFILENBQUc7O0FBQzFDLFNBQU8sSUFBSUYsTUFBSixDQUNMRSxZQUFZQyxLQUFLQyxHQUFMLENBQVNILEtBQVQsQ0FEUCxFQUVMQyxZQUFZQyxLQUFLRSxHQUFMLENBQVNKLEtBQVQsQ0FGUCxDQUFQO0FBSUQ7O0lBR0tELE07QUFDSixvQkFBMEI7QUFBQSxRQUFkRixDQUFjLHVFQUFWLENBQVU7QUFBQSxRQUFQQyxDQUFPLHVFQUFILENBQUc7O0FBQUE7O0FBQ3hCLFNBQUtELENBQUwsR0FBU0EsQ0FBVDtB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O3dCQXpCaUI7QUFDaEIsYUFBTyxLQUFLN0MsUUFBTCxDQUFjL0IsS0FBckI7QUFDRDs7Ozs7O0lBMEJHb0UsUTs7Ozs7Ozt5QkFDQ1ksUSxFQUFVO0FBQ2JBLGVBQVNsRCxRQUFULENBQWtCc0IsR0FBbEIsQ0FBc0I0QixTQUFTakQsUUFBL0I7QUFDRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDMyODczMmYxNTBhYzRmZDc2YTNmIiwiZXhwb3J0IGZ1bmN0aW9uIHZlYyh4LCB5KSB7XG4gIHJldHVybiBuZXcgVmVjdG9yKHgsIHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9sYXIoYW5nbGUsIG1hZ25pdHVkZSA9IDEpIHtcbiAgcmV0dXJuIG5ldyBWZWN0b3IoXG4gICAgbWFnbml0dWRlICogTWF0aC5jb3MoYW5nbGUpLFxuICAgIG1hZ25pdHVkZSAqIE1hdGguc2luKGFuZ2xlKVxuICApO1xufVxuXG5cbmNsYXNzIFZlY3RvciB7XG4gIGNvbnN0cnVjdG9yKHggPSAwLCB5ID0gMCkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuXG4gIGdldCBhbmdsZSgpIHtcbiAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLnksIHRoaXMueCk7XG4gIH1cblxuICByb3RhdGUoYW5nbGUpIHtcbiAgICBjb25zdCBvbGRYID0gdGhpcy54O1xuXG4gICAgdGhpcy54ID0gdGhpcy54ICogTWF0aC5jb3MoYW5nbGUpIC0gdGhpcy55ICogTWF0aC5zaW4oYW5nbGUpO1xuICAgIHRoaXMueSA9IHRoaXMueSAqIE1hdGguY29zKGFuZ2xlKSArIG9sZFggKiBNYXRoLnNpbihhbmdsZSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZCh7IHgsIHkgfSkge1xuICAgIHRoaXMueCArPSB4O1xuICAgIHRoaXMueSArPSB5O1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdWJ0cmFjdCh7IHgsIHkgfSkge1xuICAgIHRoaXMueCAtPSB4O1xuICAgIHRoaXMueSAtPSB5O1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzY2FsZShzaXplKSB7XG4gICAgdGhpcy54ICo9IHNpemU7XG4gICAgdGhpcy55ICo9IHNpemU7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNvcHkoKSB7XG4gICAgcmV0dXJuIG5ldyBWZWN0b3IodGhpcy54LCB0aGlzLnkpO1xuICB9XG5cbiAgbGVuZ3RoKCkge1xuICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55KTtcbiAgfVxuXG4gIGRpc3RhbmNlKHZlY3Rvcikge1xuICAgIHJldHVybiB0aGlzLmNvcHkoKVxuICAgICAgLnN1YnRyYWN0KHZlY3RvcilcbiAgICAgIC5sZW5ndGgoKTtcbiAgfVxuXG4gIHNjYWxlVG8oc2l6ZSkge1xuICAgIGNvbnN0IGxlbiA9IHRoaXMubGVuZ3RoKCkgfHwgMTtcbiAgICB0aGlzLnNjYWxlKHNpemUgLyBsZW4pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92ZWN0b3IuanMiLCJpbXBvcnQgeyB2ZWMgfSBmcm9tICd2ZWN0b3InO1xuaW1wb3J0IHsgRW5naW5lIH0gZnJvbSAnZW5naW5lJztcbmltcG9ydCB7IFNuYWtlIH0gZnJvbSAnc25ha2UnO1xuXG5cbmNvbnN0IFsgd2lkdGgsIGhlaWdodCBdID0gWyB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0IF07XG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG5jYW52YXMud2lkdGggPSB3aWR0aDtcbmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuY3R4LnNjYWxlKDEsIC0xKTtcbmN0eC50cmFuc2xhdGUod2lkdGggLyAyLCAtaGVpZ2h0IC8gMik7XG5cblxuY29uc3QgZW5naW5lID0gbmV3IEVuZ2luZSh7IHdpZHRoLCBoZWlnaHQgfSk7XG5jb25zdCBzbmFrZSA9IG5ldyBTbmFrZSh7XG4gIHNpemU6IDUsXG4gIGNvbG9yOiAncmdiYSgyNTAsIDEwLCAxMDAsIDEpJyxcbiAgdGFpbFNpemU6IDUwLFxuICBwb3NpdGlvbjogdmVjKDEwLCAxMCksXG4gIHZlbG9jaXR5OiB2ZWMoMSwgMSlcbn0pO1xuXG5lbmdpbmUuYWRkVG9TY2VuZShzbmFrZSk7XG5cbmxldCBmcmFtZSA9IDA7XG4oZnVuY3Rpb24gYW5pbWF0aW9uKCkge1xuICBmcmFtZSsrO1xuXG4gIHNuYWtlLnBvc2l0aW9uLnggPSBNYXRoLmNvcyhmcmFtZSAvIDIwMCkgKiA4MDA7XG4gIHNuYWtlLnBvc2l0aW9uLnkgPSAoTWF0aC5zaW4oZnJhbWUgLyAxNSkgKyBNYXRoLnNpbihmcmFtZSAvIDMwKSkgKiAxMDA7XG5cbiAgZW5naW5lXG4gICAgLmNsZWFyKGN0eClcbiAgICAudXBkYXRlKClcbiAgICAucmVuZGVyKGN0eCk7XG5cbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xufSkoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2luZGV4LmpzIiwiZXhwb3J0IGNsYXNzIEVuZ2luZSB7XG4gIGNvbnN0cnVjdG9yKHsgd2lkdGgsIGhlaWdodCB9KSB7XG4gICAgdGhpcy5zY2VuZSA9IFtdO1xuICAgIHRoaXMuY2FudmFzU2l6ZSA9IHsgd2lkdGgsIGhlaWdodCB9O1xuICB9XG5cbiAgYWRkVG9TY2VuZShvYmplY3QpIHtcbiAgICB0aGlzLnNjZW5lLnB1c2gob2JqZWN0KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnNjZW5lLmZvckVhY2gob2JqZWN0ID0+IG9iamVjdC51cGRhdGUgJiYgb2JqZWN0LnVwZGF0ZSgpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbmRlcihjdHgpIHtcbiAgICB0aGlzLnNjZW5lLmZvckVhY2gob2JqZWN0ID0+IG9iamVjdC5yZW5kZXIgJiYgb2JqZWN0LnJlbmRlcihjdHgpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNsZWFyKGN0eCkge1xuICAgIGN0eC5jbGVhclJlY3QoXG4gICAgICAtdGhpcy5jYW52YXNTaXplLndpZHRoIC8gMiwgXG4gICAgICAtdGhpcy5jYW52YXNTaXplLmhlaWdodCAvIDIsXG4gICAgICB0aGlzLmNhbnZhc1NpemUud2lkdGgsXG4gICAgICB0aGlzLmNhbnZhc1NpemUuaGVpZ2h0XG4gICAgKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lLmpzIiwiaW1wb3J0IHsgdmVjIH0gZnJvbSAndmVjdG9yJztcbmltcG9ydCB7IHJhbmdlIH0gZnJvbSAndXRpbHMnO1xuaW1wb3J0IHsgQ3JlYXR1cmUgfSBmcm9tICdjcmVhdHVyZSc7XG5cbmV4cG9ydCBjbGFzcyBTbmFrZSBleHRlbmRzIENyZWF0dXJlIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgICB0aGlzLnRhaWxTaXplID0gY29uZmlnLnRhaWxTaXplO1xuICAgIHRoaXMudGFpbCA9IHJhbmdlKHRoaXMudGFpbFNpemUpLm1hcChpZCA9PiBuZXcgQ3JlYXR1cmUoe1xuICAgICAgcG9zaXRpb246IGNvbmZpZy5wb3NpdGlvbi5jb3B5KCksXG4gICAgICBzaXplOiBjb25maWcuc2l6ZSxcbiAgICAgIGNvbG9yOiBjb25maWcuY29sb3JcbiAgICB9KSk7XG5cbiAgICB0aGlzLnRhaWwucHVzaCh0aGlzKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBzdXBlci51cGRhdGUoKTtcbiAgICBmb3IgKGxldCBpID0gdGhpcy50YWlsLmxlbmd0aCAtIDE7aSA+PSAxO2ktLSkge1xuICAgICAgY29uc3QgZGlyZWN0aW9uID0gdGhpcy50YWlsW2ldLnBvc2l0aW9uXG4gICAgICAgIC5jb3B5KClcbiAgICAgICAgLnN1YnRyYWN0KHRoaXMudGFpbFtpIC0gMV0ucG9zaXRpb24pO1xuXG4gICAgICB0aGlzLnRhaWxbaSAtIDFdLnBvc2l0aW9uLmFkZChkaXJlY3Rpb25cbiAgICAgICAgLnNjYWxlVG8oZGlyZWN0aW9uLmxlbmd0aCgpIC0gdGhpcy5zaXplICogMikpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcihjdHgpIHtcbiAgICBzdXBlci5yZW5kZXIoY3R4KTtcbiAgICBmb3IgKGxldCBpID0gMDtpIDwgdGhpcy50YWlsLmxlbmd0aCAtIDE7aSsrKSB7XG4gICAgICB0aGlzLnRhaWxbaV0ucmVuZGVyKGN0eCk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc25ha2UuanMiLCJleHBvcnQgZnVuY3Rpb24gcmFuZ2Uoc2l6ZSA9IDApIHtcbiAgcmV0dXJuIEFycmF5LmZyb20oQXJyYXkoc2l6ZSkua2V5cygpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFyZ01pbihlbGVtZW50cywgaGFuZGxlciA9IHggPT4geCkge1xuICBjb25zdCBtYXBwZWRFbGVtZW50cyA9IGVsZW1lbnRzLm1hcChoYW5kbGVyKTtcbiAgbGV0IG1pbklkID0gLTE7XG5cbiAgbWFwcGVkRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCwgaWQpID0+XG4gICAgbWluSWQgPSBtYXBwZWRFbGVtZW50c1ttaW5JZF0gPCBlbGVtZW50ID9cbiAgICBtaW5JZCA6IGlkXG4gICk7XG5cbiAgcmV0dXJuIG1pbklkO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzLmpzIiwiaW1wb3J0IHsgdmVjLCBwb2xhciB9IGZyb20gJ3ZlY3Rvcic7XG5cblxuZXhwb3J0IGNsYXNzIENyZWF0dXJlIHtcbiAgY29uc3RydWN0b3Ioe1xuICAgIHBvc2l0aW9uLCBzaXplLFxuICAgIGNvbG9yLCB2ZWxvY2l0eSA9IHZlYygpXG4gIH0pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgdGhpcy52ZWxvY2l0eSA9IHZlbG9jaXR5O1xuICAgIHRoaXMucGx1Z2lucyA9IFtdO1xuICAgIHRoaXMucGx1ZyhuZXcgTW92ZW1lbnQpO1xuICB9XG5cbiAgc3RlZXIoYW5nbGUpIHtcbiAgICB0aGlzLnZlbG9jaXR5LnJvdGF0ZShhbmdsZSk7XG4gIH1cblxuICBnZXQgb3JpZW50YXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudmVsb2NpdHkuYW5nbGU7XG4gIH1cblxuICByZW5kZXIoY3R4KSB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgIGN0eC5hcmModGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMuc2l6ZSwgMCwgMiAqIE1hdGguUEkpO1xuICAgIGN0eC5maWxsKCk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgdGhpcy5wbHVnaW5zLmZvckVhY2gocGx1Z2luID0+XG4gICAgICBwbHVnaW4uZm9yRWFjaChwYXJ0ID0+XG4gICAgICAgIHBhcnQucmVuZGVyICYmIHBhcnQucmVuZGVyKGN0eCkpKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBsZXQgdmFsdWUgPSB0aGlzO1xuICAgIHRoaXMucGx1Z2lucy5mb3JFYWNoKHBsdWdpbiA9PlxuICAgICAgcGx1Z2luLmZvckVhY2gocGFydCA9PlxuICAgICAgICB2YWx1ZSA9IHBhcnQuY2FsbCh0aGlzLCB2YWx1ZSkpKTtcbiAgfVxuXG4gIHBsdWcoLi4ucGx1Z2luKSB7XG4gICAgdGhpcy5wbHVnaW5zLnB1c2gocGx1Z2luKTtcbiAgfVxufVxuXG5jbGFzcyBNb3ZlbWVudCB7XG4gIGNhbGwoY3JlYXR1cmUpIHtcbiAgICBjcmVhdHVyZS5wb3NpdGlvbi5hZGQoY3JlYXR1cmUudmVsb2NpdHkpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY3JlYXR1cmUuanMiXSwic291cmNlUm9vdCI6IiJ9