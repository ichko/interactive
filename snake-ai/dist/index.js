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


var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function range() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  return Array.from(Array(size).keys());
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
    key: 'add',
    value: function add(_ref) {
      var x = _ref.x,
          y = _ref.y;

      this.x += x;
      this.y += y;

      return this;
    }
  }, {
    key: 'subtract',
    value: function subtract(_ref2) {
      var x = _ref2.x,
          y = _ref2.y;

      this.x -= x;
      this.y -= y;

      return this;
    }
  }, {
    key: 'scale',
    value: function scale(size) {
      this.x *= size;
      this.y *= size;

      return this;
    }
  }, {
    key: 'copy',
    value: function copy() {
      return new Vector(this.x, this.y);
    }
  }, {
    key: 'length',
    value: function length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
  }, {
    key: 'scaleTo',
    value: function scaleTo(size) {
      var len = this.length() || 1;
      this.scale(size / len);

      return this;
    }
  }]);

  return Vector;
}();

function vec(x, y) {
  return new Vector(x, y);
}

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
  function Creature(_ref3) {
    var position = _ref3.position,
        size = _ref3.size,
        color = _ref3.color,
        _ref3$velocity = _ref3.velocity,
        velocity = _ref3$velocity === undefined ? vec() : _ref3$velocity;

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

var Snake = function (_Creature) {
  _inherits(Snake, _Creature);

  function Snake(config) {
    _classCallCheck(this, Snake);

    var _this = _possibleConstructorReturn(this, (Snake.__proto__ || Object.getPrototypeOf(Snake)).call(this, config));

    _this.tailSize = config.tailSize;
    _this.tail = range(_this.tailSize).map(function () {
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

var Engine = function () {
  function Engine(_ref4) {
    var width = _ref4.width,
        height = _ref4.height;

    _classCallCheck(this, Engine);

    this.scene = [];
    this.canvasSize = { width: width, height: height };
  }

  _createClass(Engine, [{
    key: 'addToScene',
    value: function addToScene(object) {
      this.scene.push(object);
      return this;
    }
  }, {
    key: 'update',
    value: function update() {
      this.scene.forEach(function (object) {
        return object.update();
      });
      return this;
    }
  }, {
    key: 'render',
    value: function render(ctx) {
      this.scene.forEach(function (object) {
        return object.render(ctx);
      });
      return this;
    }
  }, {
    key: 'clear',
    value: function clear(ctx) {
      ctx.clearRect(-this.canvasSize.width / 2, -this.canvasSize.height / 2, this.canvasSize.width, this.canvasSize.height);

      return this;
    }
  }]);

  return Engine;
}();

var _ref5 = [window.innerWidth, window.innerHeight],
    width = _ref5[0],
    height = _ref5[1];

var canvas = document.getElementById('canvas');
canvas.width = width;
canvas.height = height;
var ctx = canvas.getContext('2d');

ctx.scale(1, -1);
ctx.translate(width / 2, -height / 2);

var engine = new Engine({ width: width, height: height });
var snake = new Snake({
  size: 5,
  color: 'rgba(250, 10, 100, 1)',
  tailSize: 50,
  position: vec(10, 10),
  velocity: vec(1, 1)
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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjdhZjM1MTNkZmZkN2JlZTI5NzciLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiXSwibmFtZXMiOlsicmFuZ2UiLCJzaXplIiwiQXJyYXkiLCJmcm9tIiwia2V5cyIsIlZlY3RvciIsIngiLCJ5IiwiTWF0aCIsInNxcnQiLCJsZW4iLCJsZW5ndGgiLCJzY2FsZSIsInZlYyIsIk5ldXJhbE5lcnZvdXNTeXN0ZW0iLCJzZW5zZXMiLCJhY3R1YXRvciIsInNlbnNlIiwicHVzaCIsIkNyZWF0dXJlIiwicG9zaXRpb24iLCJjb2xvciIsInZlbG9jaXR5IiwiY3R4IiwiYmVnaW5QYXRoIiwiZmlsbFN0eWxlIiwiYXJjIiwiUEkiLCJmaWxsIiwiY2xvc2VQYXRoIiwiYWRkIiwiU25ha2UiLCJjb25maWciLCJ0YWlsU2l6ZSIsInRhaWwiLCJtYXAiLCJjb3B5IiwiaSIsImRpcmVjdGlvbiIsInN1YnRyYWN0Iiwic2NhbGVUbyIsInJlbmRlciIsIkVuZ2luZSIsIndpZHRoIiwiaGVpZ2h0Iiwic2NlbmUiLCJjYW52YXNTaXplIiwib2JqZWN0IiwiZm9yRWFjaCIsInVwZGF0ZSIsImNsZWFyUmVjdCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwidHJhbnNsYXRlIiwiZW5naW5lIiwic25ha2UiLCJhZGRUb1NjZW5lIiwiZnJhbWUiLCJhbmltYXRpb24iLCJzaW4iLCJjb3MiLCJjbGVhciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFD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LENBQTZCSixTQUE3QjtBQUNELENBWkQsSSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDI3YWYzNTEzZGZmZDdiZWUyOTc3IiwiZnVuY3Rpb24gcmFuZ2Uoc2l6ZSA9IDApIHtcclxuICByZXR1cm4gQXJyYXkuZnJvbShBcnJheShzaXplKS5rZXlzKCkpO1xyXG59XHJcblxyXG5cclxuY2xhc3MgVmVjdG9yIHtcclxuICBjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDApIHtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gIH1cclxuXHJcbiAgYWRkKHsgeCwgeSB9KSB7XHJcbiAgICB0aGlzLnggKz0geDtcclxuICAgIHRoaXMueSArPSB5O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgc3VidHJhY3QoeyB4LCB5IH0pIHtcclxuICAgIHRoaXMueCAtPSB4O1xyXG4gICAgdGhpcy55IC09IHk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBzY2FsZShzaXplKSB7XHJcbiAgICB0aGlzLnggKj0gc2l6ZTtcclxuICAgIHRoaXMueSAqPSBzaXplO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgY29weSgpIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMueCwgdGhpcy55KTtcclxuICB9XHJcblxyXG4gIGxlbmd0aCgpIHtcclxuICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55KTtcclxuICB9XHJcblxyXG4gIHNjYWxlVG8oc2l6ZSkge1xyXG4gICAgbGV0IGxlbiA9IHRoaXMubGVuZ3RoKCkgfHwgMTtcclxuICAgIHRoaXMuc2NhbGUoc2l6ZSAvIGxlbik7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB2ZWMoeCwgeSkge1xyXG4gIHJldHVybiBuZXcgVmVjdG9yKHgsIHkpO1xyXG59XHJcblxyXG5cclxuY2xhc3MgTmV1cmFsTmVydm91c1N5c3RlbSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnNlbnNlcyA9IFtdO1xyXG4gICAgdGhpcy5hY3R1YXRvciA9IFtdO1xyXG4gIH1cclxuXHJcbiAgYWRkU2Vuc2Uoc2Vuc2UpIHtcclxuICAgIHRoaXMuc2Vuc2VzLnB1c2goc2Vuc2UpO1xyXG4gIH1cclxuXHJcbiAgYWRkQWN0dWF0b3IoYWN0dWF0b3IpIHtcclxuICAgIHRoaXMuYWN0dWF0b3IucHVzaChhY3R1YXRvcik7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBDcmVhdHVyZSB7XHJcbiAgY29uc3RydWN0b3Ioe1xyXG4gICAgcG9zaXRpb24sIHNpemUsXHJcbiAgICBjb2xvciwgdmVsb2NpdHkgPSB2ZWMoKVxyXG4gIH0pIHtcclxuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICB0aGlzLnZlbG9jaXR5ID0gdmVsb2NpdHk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoY3R4KSB7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcclxuICAgIGN0eC5hcmModGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMuc2l6ZSwgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgY3R4LmZpbGwoKTtcclxuICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMucG9zaXRpb24uYWRkKHRoaXMudmVsb2NpdHkpO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgU25ha2UgZXh0ZW5kcyBDcmVhdHVyZSB7XHJcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICBzdXBlcihjb25maWcpO1xyXG4gICAgdGhpcy50YWlsU2l6ZSA9IGNvbmZpZy50YWlsU2l6ZTtcclxuICAgIHRoaXMudGFpbCA9IHJhbmdlKHRoaXMudGFpbFNpemUpLm1hcCgoKSA9PiBuZXcgQ3JlYXR1cmUoe1xyXG4gICAgICBwb3NpdGlvbjogY29uZmlnLnBvc2l0aW9uLmNvcHkoKSxcclxuICAgICAgc2l6ZTogY29uZmlnLnNpemUsXHJcbiAgICAgIGNvbG9yOiBjb25maWcuY29sb3JcclxuICAgIH0pKTtcclxuXHJcbiAgICB0aGlzLnRhaWwucHVzaCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHN1cGVyLnVwZGF0ZSgpO1xyXG4gICAgZm9yIChsZXQgaSA9IHRoaXMudGFpbC5sZW5ndGggLSAxO2kgPj0gMTtpLS0pIHtcclxuICAgICAgY29uc3QgZGlyZWN0aW9uID0gdGhpcy50YWlsW2ldLnBvc2l0aW9uXHJcbiAgICAgICAgLmNvcHkoKVxyXG4gICAgICAgIC5zdWJ0cmFjdCh0aGlzLnRhaWxbaSAtIDFdLnBvc2l0aW9uKTtcclxuXHJcbiAgICAgIHRoaXMudGFpbFtpIC0gMV0ucG9zaXRpb24uYWRkKGRpcmVjdGlvblxyXG4gICAgICAgIC5zY2FsZVRvKGRpcmVjdGlvbi5sZW5ndGgoKSAtIHRoaXMuc2l6ZSAqIDIpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcihjdHgpIHtcclxuICAgIHN1cGVyLnJlbmRlcihjdHgpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7aSA8IHRoaXMudGFpbC5sZW5ndGggLSAxO2krKykge1xyXG4gICAgICB0aGlzLnRhaWxbaV0ucmVuZGVyKGN0eCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuY2xhc3MgRW5naW5lIHtcclxuICBjb25zdHJ1Y3Rvcih7IHdpZHRoLCBoZWlnaHQgfSkge1xyXG4gICAgdGhpcy5zY2VuZSA9IFtdO1xyXG4gICAgdGhpcy5jYW52YXNTaXplID0geyB3aWR0aCwgaGVpZ2h0IH07XHJcbiAgfVxyXG5cclxuICBhZGRUb1NjZW5lKG9iamVjdCkge1xyXG4gICAgdGhpcy5zY2VuZS5wdXNoKG9iamVjdCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMuc2NlbmUuZm9yRWFjaChvYmplY3QgPT4gb2JqZWN0LnVwZGF0ZSgpKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKGN0eCkge1xyXG4gICAgdGhpcy5zY2VuZS5mb3JFYWNoKG9iamVjdCA9PiBvYmplY3QucmVuZGVyKGN0eCkpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBjbGVhcihjdHgpIHtcclxuICAgIGN0eC5jbGVhclJlY3QoXHJcbiAgICAgIC10aGlzLmNhbnZhc1NpemUud2lkdGggLyAyLCBcclxuICAgICAgLXRoaXMuY2FudmFzU2l6ZS5oZWlnaHQgLyAyLFxyXG4gICAgICB0aGlzLmNhbnZhc1NpemUud2lkdGgsXHJcbiAgICAgIHRoaXMuY2FudmFzU2l6ZS5oZWlnaHRcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IFsgd2lkdGgsIGhlaWdodCBdID0gWyB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0IF07XHJcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcclxuY2FudmFzLndpZHRoID0gd2lkdGg7XHJcbmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuY3R4LnNjYWxlKDEsIC0xKTtcclxuY3R4LnRyYW5zbGF0ZSh3aWR0aCAvIDIsIC1oZWlnaHQgLyAyKTtcclxuXHJcblxyXG5jb25zdCBlbmdpbmUgPSBuZXcgRW5naW5lKHsgd2lkdGgsIGhlaWdodCB9KTtcclxuY29uc3Qgc25ha2UgPSBuZXcgU25ha2Uoe1xyXG4gIHNpemU6IDUsXHJcbiAgY29sb3I6ICdyZ2JhKDI1MCwgMTAsIDEwMCwgMSknLFxyXG4gIHRhaWxTaXplOiA1MCxcclxuICBwb3NpdGlvbjogdmVjKDEwLCAxMCksXHJcbiAgdmVsb2NpdHk6IHZlYygxLCAxKVxyXG59KTtcclxuXHJcbmVuZ2luZS5hZGRUb1NjZW5lKHNuYWtlKTtcclxuXHJcbmxldCBmcmFtZSA9IDA7XHJcbihmdW5jdGlvbiBhbmltYXRpb24oKSB7XHJcbiAgZnJhbWUrKztcclxuXHJcbiAgc25ha2UucG9zaXRpb24ueCA9IE1hdGguc2luKGZyYW1lIC8gNzApICogNTAwO1xyXG4gIHNuYWtlLnBvc2l0aW9uLnkgPSBNYXRoLmNvcyhmcmFtZSAvIDIwKSAqIDIwMDtcclxuXHJcbiAgZW5naW5lXHJcbiAgICAuY2xlYXIoY3R4KVxyXG4gICAgLnVwZGF0ZSgpXHJcbiAgICAucmVuZGVyKGN0eCk7XHJcblxyXG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcclxufSkoKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9