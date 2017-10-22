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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vector = __webpack_require__(2);

var _engine = __webpack_require__(3);

var _life = __webpack_require__(5);

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
var snake = new _life.Snake({
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
/* 2 */
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
        return object.update();
      });
      return this;
    }
  }, {
    key: "render",
    value: function render(ctx) {
      this.scene.forEach(function (object) {
        return object.render(ctx);
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
exports.range = range;
function range() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  return Array.from(Array(size).keys());
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Snake = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(4);

var _vector = __webpack_require__(2);

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NeuralNervousSystem = function () {
  function NeuralNervousSystem() {
    _classCallCheck(this, NeuralNervousSystem);

    this.senses = [];
    this.actuator = [];
  }

  _createClass(NeuralNervousSystem, [{
    key: 'addSense',
    value: function addSense(sense) {
      this.senses.push(sense);
    }
  }, {
    key: 'addActuator',
    value: function addActuator(actuator) {
      this.actuator.push(actuator);
    }
  }]);

  return NeuralNervousSystem;
}();

var Creature = function () {
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

var Snake = exports.Snake = function (_Creature) {
  _inherits(Snake, _Creature);

  function Snake(config) {
    _classCallCheck(this, Snake);

    var _this = _possibleConstructorReturn(this, (Snake.__proto__ || Object.getPrototypeOf(Snake)).call(this, config));

    _this.tailSize = config.tailSize;
    _this.tail = (0, _utils.range)(_this.tailSize).map(function () {
      return new Creature({
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
}(Creature);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWM5NGVmMTVkZjdjMWYyYzhjMDkiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlmZS5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJ3aWR0aCIsImhlaWdodCIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0Iiwic2NhbGUiLCJ0cmFuc2xhdGUiLCJlbmdpbmUiLCJzbmFrZSIsInNpemUiLCJjb2xvciIsInRhaWxTaXplIiwicG9zaXRpb24iLCJ2ZWxvY2l0eSIsImFkZFRvU2NlbmUiLCJmcmFtZSIsImFuaW1hdGlvbiIsIngiLCJNYXRoIiwic2luIiwieSIsImNvcyIsImNsZWFyIiwidXBkYXRlIiwicmVuZGVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidmVjIiwiVmVjdG9yIiwic3FydCIsImxlbiIsImxlbmd0aCIsIkVuZ2luZSIsInNjZW5lIiwiY2FudmFzU2l6ZSIsIm9iamVjdCIsInB1c2giLCJmb3JFYWNoIiwiY2xlYXJSZWN0IiwicmFuZ2UiLCJBcnJheSIsImZyb20iLCJrZXlzIiwiTmV1cmFsTmVydm91c1N5c3RlbSIsInNlbnNlcyIsImFjdHVhdG9yIiwic2Vuc2UiLCJDcmVhdHVyZSIsImJlZ2luUGF0aCIsImZpbGxTdHlsZSIsImFyYyIsIlBJIiwiZmlsbCIsImNsb3NlUGF0aCIsImFkZCIsIlNuYWtlIiwiY29uZmlnIiwidGFpbCIsIm1hcCIsImNvcHkiLCJpIiwiZGlyZWN0aW9uIiwic3VidHJhY3QiLCJzY2FsZVRvIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FB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LFVBQzNCRSxPQUQyQixDQUNuQkYsVUFBVTlCLE1BQVYsS0FBcUIsS0FBS3JCLElBQUwsR0FBWSxDQURkLENBQTlCO0FBRUQ7QUFDRjs7OzJCQUVNTixHLEVBQUs7QUFDViwyR0FBYUEsR0FBYjtBQUNBLFdBQUssSUFBSXdELElBQUksQ0FBYixFQUFlQSxJQUFJLEtBQUtILElBQUwsQ0FBVTFCLE1BQVYsR0FBbUIsQ0FBdEMsRUFBd0M2QixHQUF4QyxFQUE2QztBQUMzQyxhQUFLSCxJQUFMLENBQVVHLENBQVYsRUFBYW5DLE1BQWIsQ0FBb0JyQixHQUFwQjtBQUNEO0FBQ0Y7Ozs7RUE5QndCMkMsUSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGFjOTRlZjE1ZGY3YzFmMmM4YzA5IiwiXHJcbmltcG9ydCB7IHZlYyB9IGZyb20gJ3ZlY3Rvcic7XHJcbmltcG9ydCB7IEVuZ2luZSB9IGZyb20gJ2VuZ2luZSc7XHJcbmltcG9ydCB7IFNuYWtlIH0gZnJvbSAnbGlmZSc7XHJcblxyXG5cclxuY29uc3QgWyB3aWR0aCwgaGVpZ2h0IF0gPSBbIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQgXTtcclxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xyXG5jYW52YXMud2lkdGggPSB3aWR0aDtcclxuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG5jdHguc2NhbGUoMSwgLTEpO1xyXG5jdHgudHJhbnNsYXRlKHdpZHRoIC8gMiwgLWhlaWdodCAvIDIpO1xyXG5cclxuXHJcbmNvbnN0IGVuZ2luZSA9IG5ldyBFbmdpbmUoeyB3aWR0aCwgaGVpZ2h0IH0pO1xyXG5jb25zdCBzbmFrZSA9IG5ldyBTbmFrZSh7XHJcbiAgc2l6ZTogNSxcclxuICBjb2xvcjogJ3JnYmEoMjUwLCAxMCwgMTAwLCAxKScsXHJcbiAgdGFpbFNpemU6IDUwLFxyXG4gIHBvc2l0aW9uOiB2ZWMoMTAsIDEwKSxcclxuICB2ZWxvY2l0eTogdmVjKDEsIDEpXHJcbn0pO1xyXG5cclxuZW5naW5lLmFkZFRvU2NlbmUoc25ha2UpO1xyXG5cclxubGV0IGZyYW1lID0gMDtcclxuKGZ1bmN0aW9uIGFuaW1hdGlvbigpIHtcclxuICBmcmFtZSsrO1xyXG5cclxuICBzbmFrZS5wb3NpdGlvbi54ID0gTWF0aC5zaW4oZnJhbWUgLyA3MCkgKiA1MDA7XHJcbiAgc25ha2UucG9zaXRpb24ueSA9IE1hdGguY29zKGZyYW1lIC8gMjApICogMjAwO1xyXG5cclxuICBlbmdpbmVcclxuICAgIC5jbGVhcihjdHgpXHJcbiAgICAudXBkYXRlKClcclxuICAgIC5yZW5kZXIoY3R4KTtcclxuXHJcbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xyXG59KSgpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9pbmRleC5qcyIsImV4cG9ydCBmdW5jdGlvbiB2ZWMoeCwgeSkge1xyXG4gIHJldHVybiBuZXcgVmVjdG9yKHgsIHkpO1xyXG59XHJcblxyXG5jbGFzcyBWZWN0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKHggPSAwLCB5ID0gMCkge1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgfVxyXG5cclxuICBhZGQoeyB4LCB5IH0pIHtcclxuICAgIHRoaXMueCArPSB4O1xyXG4gICAgdGhpcy55ICs9IHk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBzdWJ0cmFjdCh7IHgsIHkgfSkge1xyXG4gICAgdGhpcy54IC09IHg7XHJcbiAgICB0aGlzLnkgLT0geTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHNjYWxlKHNpemUpIHtcclxuICAgIHRoaXMueCAqPSBzaXplO1xyXG4gICAgdGhpcy55ICo9IHNpemU7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBjb3B5KCkge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IodGhpcy54LCB0aGlzLnkpO1xyXG4gIH1cclxuXHJcbiAgbGVuZ3RoKCkge1xyXG4gICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkpO1xyXG4gIH1cclxuXHJcbiAgc2NhbGVUbyhzaXplKSB7XHJcbiAgICBsZXQgbGVuID0gdGhpcy5sZW5ndGgoKSB8fCAxO1xyXG4gICAgdGhpcy5zY2FsZShzaXplIC8gbGVuKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZlY3Rvci5qcyIsImV4cG9ydCBjbGFzcyBFbmdpbmUge1xyXG4gIGNvbnN0cnVjdG9yKHsgd2lkdGgsIGhlaWdodCB9KSB7XHJcbiAgICB0aGlzLnNjZW5lID0gW107XHJcbiAgICB0aGlzLmNhbnZhc1NpemUgPSB7IHdpZHRoLCBoZWlnaHQgfTtcclxuICB9XHJcblxyXG4gIGFkZFRvU2NlbmUob2JqZWN0KSB7XHJcbiAgICB0aGlzLnNjZW5lLnB1c2gob2JqZWN0KTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgdGhpcy5zY2VuZS5mb3JFYWNoKG9iamVjdCA9PiBvYmplY3QudXBkYXRlKCkpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoY3R4KSB7XHJcbiAgICB0aGlzLnNjZW5lLmZvckVhY2gob2JqZWN0ID0+IG9iamVjdC5yZW5kZXIoY3R4KSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGNsZWFyKGN0eCkge1xyXG4gICAgY3R4LmNsZWFyUmVjdChcclxuICAgICAgLXRoaXMuY2FudmFzU2l6ZS53aWR0aCAvIDIsIFxyXG4gICAgICAtdGhpcy5jYW52YXNTaXplLmhlaWdodCAvIDIsXHJcbiAgICAgIHRoaXMuY2FudmFzU2l6ZS53aWR0aCxcclxuICAgICAgdGhpcy5jYW52YXNTaXplLmhlaWdodFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS5qcyIsImV4cG9ydCBmdW5jdGlvbiByYW5nZShzaXplID0gMCkge1xyXG4gIHJldHVybiBBcnJheS5mcm9tKEFycmF5KHNpemUpLmtleXMoKSk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzLmpzIiwiaW1wb3J0IHsgcmFuZ2UgfSBmcm9tICd1dGlscyc7XHJcbmltcG9ydCB7IHZlYyB9IGZyb20gJ3ZlY3Rvcic7XHJcblxyXG5jbGFzcyBOZXVyYWxOZXJ2b3VzU3lzdGVtIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuc2Vuc2VzID0gW107XHJcbiAgICB0aGlzLmFjdHVhdG9yID0gW107XHJcbiAgfVxyXG5cclxuICBhZGRTZW5zZShzZW5zZSkge1xyXG4gICAgdGhpcy5zZW5zZXMucHVzaChzZW5zZSk7XHJcbiAgfVxyXG5cclxuICBhZGRBY3R1YXRvcihhY3R1YXRvcikge1xyXG4gICAgdGhpcy5hY3R1YXRvci5wdXNoKGFjdHVhdG9yKTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIENyZWF0dXJlIHtcclxuICBjb25zdHJ1Y3Rvcih7XHJcbiAgICBwb3NpdGlvbiwgc2l6ZSxcclxuICAgIGNvbG9yLCB2ZWxvY2l0eSA9IHZlYygpXHJcbiAgfSkge1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgdGhpcy5zaXplID0gc2l6ZTtcclxuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgIHRoaXMudmVsb2NpdHkgPSB2ZWxvY2l0eTtcclxuICB9XHJcblxyXG4gIHJlbmRlcihjdHgpIHtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xyXG4gICAgY3R4LmFyYyh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5zaXplLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICBjdHguZmlsbCgpO1xyXG4gICAgY3R4LmNsb3NlUGF0aCgpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgdGhpcy5wb3NpdGlvbi5hZGQodGhpcy52ZWxvY2l0eSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU25ha2UgZXh0ZW5kcyBDcmVhdHVyZSB7XHJcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICBzdXBlcihjb25maWcpO1xyXG4gICAgdGhpcy50YWlsU2l6ZSA9IGNvbmZpZy50YWlsU2l6ZTtcclxuICAgIHRoaXMudGFpbCA9IHJhbmdlKHRoaXMudGFpbFNpemUpLm1hcCgoKSA9PiBuZXcgQ3JlYXR1cmUoe1xyXG4gICAgICBwb3NpdGlvbjogY29uZmlnLnBvc2l0aW9uLmNvcHkoKSxcclxuICAgICAgc2l6ZTogY29uZmlnLnNpemUsXHJcbiAgICAgIGNvbG9yOiBjb25maWcuY29sb3JcclxuICAgIH0pKTtcclxuXHJcbiAgICB0aGlzLnRhaWwucHVzaCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHN1cGVyLnVwZGF0ZSgpO1xyXG4gICAgZm9yIChsZXQgaSA9IHRoaXMudGFpbC5sZW5ndGggLSAxO2kgPj0gMTtpLS0pIHtcclxuICAgICAgY29uc3QgZGlyZWN0aW9uID0gdGhpcy50YWlsW2ldLnBvc2l0aW9uXHJcbiAgICAgICAgLmNvcHkoKVxyXG4gICAgICAgIC5zdWJ0cmFjdCh0aGlzLnRhaWxbaSAtIDFdLnBvc2l0aW9uKTtcclxuXHJcbiAgICAgIHRoaXMudGFpbFtpIC0gMV0ucG9zaXRpb24uYWRkKGRpcmVjdGlvblxyXG4gICAgICAgIC5zY2FsZVRvKGRpcmVjdGlvbi5sZW5ndGgoKSAtIHRoaXMuc2l6ZSAqIDIpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcihjdHgpIHtcclxuICAgIHN1cGVyLnJlbmRlcihjdHgpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7aSA8IHRoaXMudGFpbC5sZW5ndGggLSAxO2krKykge1xyXG4gICAgICB0aGlzLnRhaWxbaV0ucmVuZGVyKGN0eCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWZlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==