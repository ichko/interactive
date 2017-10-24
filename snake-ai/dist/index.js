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
    key: "distance",
    value: function distance(vector) {
      return this.copy.subtract(vector).length;
    }
  }, {
    key: "scaleTo",
    value: function scaleTo(size) {
      var len = this.length || 1;
      this.scale(size / len);

      return this;
    }
  }, {
    key: "angle",
    get: function get() {
      return Math.atan2(this.y, this.x);
    }
  }, {
    key: "copy",
    get: function get() {
      return new Vector(this.x, this.y);
    }
  }, {
    key: "length",
    get: function get() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
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

var _utils = __webpack_require__(5);

var _engine = __webpack_require__(3);

var _renderer = __webpack_require__(8);

var _snake = __webpack_require__(4);

var _nervousSystem = __webpack_require__(7);

var _ref = [window.innerWidth, window.innerHeight],
    width = _ref[0],
    height = _ref[1];

var canvas = document.getElementById('canvas');
canvas.width = width;
canvas.height = height;
var ctx = canvas.getContext('2d');

ctx.scale(1, -1);
ctx.translate(width / 2, -height / 2);

function aiSnake(size, position) {
  return new _snake.Snake({
    size: size, color: 'rgba(250, 10, 100, 1)',
    tailSize: 50, position: position, velocity: (0, _vector.vec)(0, 1)
  }).plug(new _nervousSystem.Sight(), new _nervousSystem.OccipitalLobe(), new _nervousSystem.Navigator());
}

var renderer = new _renderer.CanvasRenderer(ctx, { width: width, height: height });
var engine = new _engine.Engine(renderer);

(0, _utils.range)(10).forEach(function () {
  return engine.addToScene(aiSnake((0, _utils.random)(0, 15), (0, _utils.randomPosition)(800)));
});

(function animation() {
  engine.clear().update().render();

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
  function Engine(renderer) {
    _classCallCheck(this, Engine);

    this.scene = [];
    this.renderer = renderer;
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
    value: function render() {
      var _this = this;

      this.scene.forEach(function (object) {
        return object.render && object.render(_this.renderer);
      });
      return this;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.renderer.clear();
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
exports.Snake = exports.Food = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _utils = __webpack_require__(5);

var _creature = __webpack_require__(6);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Food = exports.Food = function (_Creature) {
  _inherits(Food, _Creature);

  function Food() {
    _classCallCheck(this, Food);

    return _possibleConstructorReturn(this, (Food.__proto__ || Object.getPrototypeOf(Food)).apply(this, arguments));
  }

  return Food;
}(_creature.Creature);

var Snake = exports.Snake = function (_Creature2) {
  _inherits(Snake, _Creature2);

  function Snake(config) {
    _classCallCheck(this, Snake);

    var _this2 = _possibleConstructorReturn(this, (Snake.__proto__ || Object.getPrototypeOf(Snake)).call(this, config));

    _this2.tailSize = config.tailSize;
    _this2.tail = (0, _utils.range)(_this2.tailSize).map(function (id) {
      return new _creature.Creature({
        position: config.position.copy,
        size: config.size,
        color: config.color
      });
    });

    _this2.tail.push(_this2);
    return _this2;
  }

  _createClass(Snake, [{
    key: 'update',
    value: function update() {
      _get(Snake.prototype.__proto__ || Object.getPrototypeOf(Snake.prototype), 'update', this).call(this);
      for (var i = this.tail.length - 1; i >= 1; i--) {
        var direction = this.tail[i].position.copy.subtract(this.tail[i - 1].position);

        this.tail[i - 1].position.add(direction.scaleTo(direction.length - this.size * 2));
      }
    }
  }, {
    key: 'render',
    value: function render(renderer) {
      _get(Snake.prototype.__proto__ || Object.getPrototypeOf(Snake.prototype), 'render', this).call(this, renderer);
      for (var i = 0; i < this.tail.length - 1; i++) {
        this.tail[i].render(renderer);
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
exports.random = random;
exports.randomPosition = randomPosition;
exports.argMin = argMin;

var _vector = __webpack_require__(0);

function range() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  return Array.from(Array(size).keys());
}

function random(max, min) {
  return Math.random() * (max - min) + min;
}

function randomPosition(size) {
  return (0, _vector.polar)(random(0, Math.PI * 2), random(0, size));
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
    value: function render(renderer) {
      renderer.circle({
        x: this.position.x,
        y: this.position.y,
        radius: this.size
      }, { color: this.color });

      this.plugins.forEach(function (plugin) {
        return plugin.forEach(function (part) {
          return part.render && part.render(renderer);
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
      return this;
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
    value: function call(self) {
      self.position.add(self.velocity);
    }
  }]);

  return Movement;
}();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Navigator = exports.OccipitalLobe = exports.Sight = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _vector = __webpack_require__(0);

var _utils = __webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sight = exports.Sight = function () {
  function Sight() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$fov = _ref.fov,
        fov = _ref$fov === undefined ? Math.PI / 2 : _ref$fov,
        _ref$rayCount = _ref.rayCount,
        rayCount = _ref$rayCount === undefined ? 16 : _ref$rayCount,
        _ref$strength = _ref.strength,
        strength = _ref$strength === undefined ? 15 : _ref$strength,
        _ref$environment = _ref.environment,
        environment = _ref$environment === undefined ? [] : _ref$environment;

    _classCallCheck(this, Sight);

    this.fov = fov;
    this.rayCount = rayCount;
    this.strength = strength;
    this.environment = environment;
  }

  _createClass(Sight, [{
    key: 'getSightDirections',
    value: function getSightDirections(velocity) {
      var _this = this;

      return (0, _utils.range)(this.rayCount).map(function (rayId) {
        return rayId / (_this.rayCount - 1) * _this.fov - _this.fov / 2;
      }).map(function (rayAngle) {
        return velocity.copy.rotate(rayAngle);
      });
    }
  }, {
    key: 'intersect',
    value: function intersect(ray, element) {
      var r = element.size;
      var eye = ray.position.copy.add(ray.direction.scaleTo(this.strength));

      var _ray$position$subtrac = ray.position.subtract(eye),
          dx = _ray$position$subtrac.x,
          dy = _ray$position$subtrac.y;

      var dr = eye.length;
      var det = element.position.x * eye.y - eye.x * element.position.y;
      var disc = r * r * dr * dr - det * det;
      var discRoot = Math.sqrt(disc);

      var x1 = (det * dy + Math.sign(dy) * dx * discRoot) / (dr * dr);
      var x2 = (det * dy - Math.sign(dy) * dx * discRoot) / (dr * dr);

      var y1 = (-det * dx + Math.abs(dy) * discRoot) / (dr * dr);
      var y2 = (-det * dx - Math.abs(dy) * discRoot) / (dr * dr);

      var p1 = (0, _vector.vec)(x1, y1);
      var p2 = (0, _vector.vec)(x2, y2);
      var minLenId = (0, _utils.argMin)([p1, p2], function (vector) {
        return vector.length;
      });
      var minLenP = [p1, p2][minLenId];

      return {
        valid: disc >= 0,
        distance: minLenP.length,
        intersection: minLenP,
        element: element
      };
    }
  }, {
    key: 'call',
    value: function call(self) {
      var _this2 = this;

      return this.getSightDirections(self.velocity).map(function (direction) {
        var intersections = _this2.environment.map(function (element) {
          return _this2.intersects({
            position: self.position,
            direction: direction
          }, element);
        }).filter(function (intersection) {
          return intersection.valid;
        });

        return intersections[(0, _utils.argMin)(intersections, function (_ref2) {
          var distance = _ref2.distance;
          return distance;
        })];
      });
    }
  }]);

  return Sight;
}();

var OccipitalLobe = exports.OccipitalLobe = function () {
  function OccipitalLobe(architecture) {
    _classCallCheck(this, OccipitalLobe);

    this.architecture = architecture;
  }

  _createClass(OccipitalLobe, [{
    key: 'call',
    value: function call(self, sight) {
      // return this.feedForward(sight);
      return (Math.random() - 0.4) / 10;
    }
  }]);

  return OccipitalLobe;
}();

var Navigator = exports.Navigator = function () {
  function Navigator() {
    _classCallCheck(this, Navigator);
  }

  _createClass(Navigator, [{
    key: 'render',
    value: function render(renderer) {
      // ctx.fillRect(0,0,50,50);
    }
  }, {
    key: 'call',
    value: function call(self, direction) {
      self.steer(direction);
    }
  }]);

  return Navigator;
}();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CanvasRenderer = exports.CanvasRenderer = function () {
  function CanvasRenderer(ctx) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$width = _ref.width,
        width = _ref$width === undefined ? 50 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === undefined ? 50 : _ref$height;

    _classCallCheck(this, CanvasRenderer);

    this.ctx = ctx;
    this.canvasSize = { width: width, height: height };
  }

  _createClass(CanvasRenderer, [{
    key: 'circle',
    value: function circle() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$x = _ref2.x,
          x = _ref2$x === undefined ? 0 : _ref2$x,
          _ref2$y = _ref2.y,
          y = _ref2$y === undefined ? 0 : _ref2$y,
          _ref2$radius = _ref2.radius,
          radius = _ref2$radius === undefined ? 5 : _ref2$radius;

      var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref3$color = _ref3.color,
          color = _ref3$color === undefined ? 'red' : _ref3$color;

      this.ctx.beginPath();
      this.ctx.fillStyle = color;
      this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
      this.ctx.fill();
      this.ctx.closePath();
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.ctx.clearRect(-this.canvasSize.width / 2, -this.canvasSize.height / 2, this.canvasSize.width, this.canvasSize.height);
    }
  }, {
    key: 'renderRay',
    value: function renderRay(ctx, _ref4, _ref5) {
      var position = _ref4.position,
          orientation = _ref4.orientation;
      var _ref5$color = _ref5.color,
          color = _ref5$color === undefined ? 'red' : _ref5$color;

      var lineEnd = position.copy.add(orientation);

      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(position.x, position.y);
      ctx.lineTo(lineEnd.x, lineEnd.y);
      ctx.stroke();
    }
  }]);

  return CanvasRenderer;
}();

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTFmZjIyYmU1YzY4Y2U5ZmE3MGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9zbmFrZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NyZWF0dXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9uZXJ2b3VzLXN5c3RlbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXIuanMiXSwibmFtZXMiOlsidmVjIiwicG9sYXIiLCJ4IiwieSIsIlZlY3RvciIsImFuZ2xlIiwibWFnbml0dWRlIiwiTWF0aCIsImNvcyIsInNpbiIsIm9sZFgiLCJzaXplIiwidmVjdG9yIiwiY29weSIsInN1YnRyYWN0IiwibGVuZ3RoIiwibGVuIiwic2NhbGUiLCJhdGFuMiIsInNxcnQiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJ3aWR0aCIsImhlaWdodCIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwidHJhbnNsYXRlIiwiYWlTbmFrZSIsInBvc2l0aW9uIiwiY29sb3IiLCJ0YWlsU2l6ZSIsInZlbG9jaXR5IiwicGx1ZyIsInJlbmRlcmVyIiwiZW5naW5lIiwiZm9yRWFjaCIsImFkZFRvU2NlbmUiLCJhbmltYXRpb24iLCJjbGVhciIsInVwZGF0ZSIsInJlbmRlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIkVuZ2luZSIsInNjZW5lIiwib2JqZWN0IiwicHVzaCIsIkZvb2QiLCJTbmFrZSIsImNvbmZpZyIsInRhaWwiLCJtYXAiLCJpIiwiZGlyZWN0aW9uIiwiYWRkIiwic2NhbGVUbyIsInJhbmdlIiwicmFuZG9tIiwicmFuZG9tUG9zaXRpb24iLCJhcmdNaW4iLCJBcnJheSIsImZyb20iLCJrZXlzIiwibWF4IiwibWluIiwiUEkiLCJlbGVtZW50cyIsImhhbmRsZXIiLCJtYXBwZWRFbGVtZW50cyIsIm1pbklkIiwiZWxlbWVudCIsImlkIiwiQ3JlYXR1cmUiLCJwbHVnaW5zIiwiTW92ZW1lbnQiLCJyb3RhdGUiLCJjaXJjbGUiLCJyYWRpdXMiLCJwbHVnaW4iLCJwYXJ0IiwidmFsdWUiLCJjYWxsIiwic2VsZiIsIlNpZ2h0IiwiZm92IiwicmF5Q291bnQiLCJzdHJlbmd0aCIsImVudmlyb25tZW50IiwicmF5SWQiLCJyYXlBbmdsZSIsInJheSIsInIiLCJleWUiLCJkeCIsImR5IiwiZHIiLCJkZXQiLCJkaXNjIiwiZGlzY1Jvb3QiLCJ4MSIsInNpZ24iLCJ4MiIsInkxIiwiYWJzIiwieTIiLCJwMSIsInAyIiwibWluTGVuSWQiLCJtaW5MZW5QIiwidmFsaWQiLCJkaXN0YW5jZSIsImludGVyc2VjdGlvbiIsImdldFNpZ2h0RGlyZWN0aW9ucyIsImludGVyc2VjdGlvbnMiLCJpbnRlcnNlY3RzIiwiZmlsdGVyIiwiT2NjaXBpdGFsTG9iZSIsImFyY2hpdGVjdHVyZSIsInNpZ2h0IiwiTmF2aWdhdG9yIiwic3RlZXIiLCJDYW52YXNSZW5kZXJlciIsImNhbnZhc1NpemUiLCJiZWdpblBhdGgiLCJmaWxsU3R5bGUiLCJhcmMiLCJmaWxsIiwiY2xvc2VQYXRoIiwiY2xlYXJSZWN0Iiwib3JpZW50YXRpb24iLCJsaW5lRW5kIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtB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MkUsV0FBbEIsQ0FBaEI7O0FBRUF4RyxVQUFJbUcsU0FBSixHQUFnQjlGLEtBQWhCO0FBQ0FMLFVBQUlrRyxTQUFKO0FBQ0FsRyxVQUFJMEcsTUFBSixDQUFXdEcsU0FBUzlCLENBQXBCLEVBQXVCOEIsU0FBUzdCLENBQWhDO0FBQ0F5QixVQUFJMkcsTUFBSixDQUFXRixRQUFRbkksQ0FBbkIsRUFBc0JtSSxRQUFRbEksQ0FBOUI7QUFDQXlCLFVBQUk0RyxNQUFKO0FBQ0QiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1MWZmMjJiZTVjNjhjZTlmYTcwZSIsImV4cG9ydCBmdW5jdGlvbiB2ZWMoeCwgeSkge1xuICByZXR1cm4gbmV3IFZlY3Rvcih4LCB5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvbGFyKGFuZ2xlLCBtYWduaXR1ZGUgPSAxKSB7XG4gIHJldHVybiBuZXcgVmVjdG9yKFxuICAgIG1hZ25pdHVkZSAqIE1hdGguY29zKGFuZ2xlKSxcbiAgICBtYWduaXR1ZGUgKiBNYXRoLnNpbihhbmdsZSlcbiAgKTtcbn1cblxuXG5jbGFzcyBWZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDApIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cblxuICBnZXQgYW5nbGUoKSB7XG4gICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy55LCB0aGlzLngpO1xuICB9XG5cbiAgcm90YXRlKGFuZ2xlKSB7XG4gICAgY29uc3Qgb2xkWCA9IHRoaXMueDtcblxuICAgIHRoaXMueCA9IHRoaXMueCAqIE1hdGguY29zKGFuZ2xlKSAtIHRoaXMueSAqIE1hdGguc2luKGFuZ2xlKTtcbiAgICB0aGlzLnkgPSB0aGlzLnkgKiBNYXRoLmNvcyhhbmdsZSkgKyBvbGRYICogTWF0aC5zaW4oYW5nbGUpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhZGQoeyB4LCB5IH0pIHtcbiAgICB0aGlzLnggKz0geDtcbiAgICB0aGlzLnkgKz0geTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc3VidHJhY3QoeyB4LCB5IH0pIHtcbiAgICB0aGlzLnggLT0geDtcbiAgICB0aGlzLnkgLT0geTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2NhbGUoc2l6ZSkge1xuICAgIHRoaXMueCAqPSBzaXplO1xuICAgIHRoaXMueSAqPSBzaXplO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQgY29weSgpIHtcbiAgICByZXR1cm4gbmV3IFZlY3Rvcih0aGlzLngsIHRoaXMueSk7XG4gIH1cblxuICBnZXQgbGVuZ3RoKCkge1xuICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55KTtcbiAgfVxuXG4gIGRpc3RhbmNlKHZlY3Rvcikge1xuICAgIHJldHVybiB0aGlzLmNvcHlcbiAgICAgIC5zdWJ0cmFjdCh2ZWN0b3IpXG4gICAgICAubGVuZ3RoO1xuICB9XG5cbiAgc2NhbGVUbyhzaXplKSB7XG4gICAgY29uc3QgbGVuID0gdGhpcy5sZW5ndGggfHwgMTtcbiAgICB0aGlzLnNjYWxlKHNpemUgLyBsZW4pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92ZWN0b3IuanMiLCJpbXBvcnQgeyB2ZWMgfSBmcm9tICd2ZWN0b3InO1xuaW1wb3J0IHsgcmFuZ2UsIHJhbmRvbSwgcmFuZG9tUG9zaXRpb24gfSBmcm9tICd1dGlscyc7XG5pbXBvcnQgeyBFbmdpbmUgfSBmcm9tICdlbmdpbmUnO1xuaW1wb3J0IHsgQ2FudmFzUmVuZGVyZXIgfSBmcm9tICdyZW5kZXJlcic7XG5pbXBvcnQgeyBTbmFrZSB9IGZyb20gJ3NuYWtlJztcbmltcG9ydCB7IFNpZ2h0LCBPY2NpcGl0YWxMb2JlLCBOYXZpZ2F0b3IgfSBmcm9tICduZXJ2b3VzLXN5c3RlbSc7XG5cblxuY29uc3QgWyB3aWR0aCwgaGVpZ2h0IF0gPSBbIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQgXTtcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG5jdHguc2NhbGUoMSwgLTEpO1xuY3R4LnRyYW5zbGF0ZSh3aWR0aCAvIDIsIC1oZWlnaHQgLyAyKTtcblxuZnVuY3Rpb24gYWlTbmFrZShzaXplLCBwb3NpdGlvbikge1xuICByZXR1cm4gbmV3IFNuYWtlKHtcbiAgICBzaXplLCBjb2xvcjogJ3JnYmEoMjUwLCAxMCwgMTAwLCAxKScsXG4gICAgdGFpbFNpemU6IDUwLCBwb3NpdGlvbiwgdmVsb2NpdHk6IHZlYygwLCAxKVxuICB9KVxuICAucGx1ZyhuZXcgU2lnaHQoKSwgbmV3IE9jY2lwaXRhbExvYmUoKSwgbmV3IE5hdmlnYXRvcigpKTtcbn1cblxuY29uc3QgcmVuZGVyZXIgPSBuZXcgQ2FudmFzUmVuZGVyZXIoY3R4LCB7IHdpZHRoLCBoZWlnaHQgfSk7XG5jb25zdCBlbmdpbmUgPSBuZXcgRW5naW5lKHJlbmRlcmVyKTtcblxucmFuZ2UoMTApLmZvckVhY2goKCkgPT4gZW5naW5lLmFkZFRvU2NlbmUoYWlTbmFrZShyYW5kb20oMCwgMTUpLCByYW5kb21Qb3NpdGlvbig4MDApKSkpO1xuXG4oZnVuY3Rpb24gYW5pbWF0aW9uKCkge1xuICBlbmdpbmVcbiAgICAuY2xlYXIoKVxuICAgIC51cGRhdGUoKVxuICAgIC5yZW5kZXIoKTtcblxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG59KSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaW5kZXguanMiLCJleHBvcnQgY2xhc3MgRW5naW5lIHtcbiAgY29uc3RydWN0b3IocmVuZGVyZXIpIHtcbiAgICB0aGlzLnNjZW5lID0gW107XG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xuICB9XG5cbiAgYWRkVG9TY2VuZShvYmplY3QpIHtcbiAgICB0aGlzLnNjZW5lLnB1c2gob2JqZWN0KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnNjZW5lLmZvckVhY2gob2JqZWN0ID0+IG9iamVjdC51cGRhdGUgJiYgb2JqZWN0LnVwZGF0ZSgpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLnNjZW5lLmZvckVhY2gob2JqZWN0ID0+XG4gICAgICBvYmplY3QucmVuZGVyICYmIG9iamVjdC5yZW5kZXIodGhpcy5yZW5kZXJlcikpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5jbGVhcigpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lLmpzIiwiaW1wb3J0IHsgcmFuZ2UgfSBmcm9tICd1dGlscyc7XG5pbXBvcnQgeyBDcmVhdHVyZSB9IGZyb20gJ2NyZWF0dXJlJztcblxuZXhwb3J0IGNsYXNzIEZvb2QgZXh0ZW5kcyBDcmVhdHVyZSB7XG5cbn1cblxuZXhwb3J0IGNsYXNzIFNuYWtlIGV4dGVuZHMgQ3JlYXR1cmUge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICAgIHRoaXMudGFpbFNpemUgPSBjb25maWcudGFpbFNpemU7XG4gICAgdGhpcy50YWlsID0gcmFuZ2UodGhpcy50YWlsU2l6ZSkubWFwKGlkID0+IG5ldyBDcmVhdHVyZSh7XG4gICAgICBwb3NpdGlvbjogY29uZmlnLnBvc2l0aW9uLmNvcHksXG4gICAgICBzaXplOiBjb25maWcuc2l6ZSxcbiAgICAgIGNvbG9yOiBjb25maWcuY29sb3JcbiAgICB9KSk7XG5cbiAgICB0aGlzLnRhaWwucHVzaCh0aGlzKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBzdXBlci51cGRhdGUoKTtcbiAgICBmb3IgKGxldCBpID0gdGhpcy50YWlsLmxlbmd0aCAtIDE7aSA+PSAxO2ktLSkge1xuICAgICAgY29uc3QgZGlyZWN0aW9uID0gdGhpcy50YWlsW2ldLnBvc2l0aW9uXG4gICAgICAgIC5jb3B5LnN1YnRyYWN0KHRoaXMudGFpbFtpIC0gMV0ucG9zaXRpb24pO1xuXG4gICAgICB0aGlzLnRhaWxbaSAtIDFdLnBvc2l0aW9uLmFkZChkaXJlY3Rpb25cbiAgICAgICAgLnNjYWxlVG8oZGlyZWN0aW9uLmxlbmd0aCAtIHRoaXMuc2l6ZSAqIDIpKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIocmVuZGVyZXIpIHtcbiAgICBzdXBlci5yZW5kZXIocmVuZGVyZXIpO1xuICAgIGZvciAobGV0IGkgPSAwO2kgPCB0aGlzLnRhaWwubGVuZ3RoIC0gMTtpKyspIHtcbiAgICAgIHRoaXMudGFpbFtpXS5yZW5kZXIocmVuZGVyZXIpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NuYWtlLmpzIiwiaW1wb3J0IHsgcG9sYXIgfSBmcm9tICd2ZWN0b3InO1xuXG5leHBvcnQgZnVuY3Rpb24gcmFuZ2Uoc2l6ZSA9IDApIHtcbiAgcmV0dXJuIEFycmF5LmZyb20oQXJyYXkoc2l6ZSkua2V5cygpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbShtYXgsIG1pbikge1xuICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tUG9zaXRpb24oc2l6ZSkge1xuICByZXR1cm4gcG9sYXIocmFuZG9tKDAsIE1hdGguUEkgKiAyKSwgcmFuZG9tKDAsIHNpemUpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFyZ01pbihlbGVtZW50cywgaGFuZGxlciA9IHggPT4geCkge1xuICBjb25zdCBtYXBwZWRFbGVtZW50cyA9IGVsZW1lbnRzLm1hcChoYW5kbGVyKTtcbiAgbGV0IG1pbklkID0gLTE7XG5cbiAgbWFwcGVkRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCwgaWQpID0+XG4gICAgbWluSWQgPSBtYXBwZWRFbGVtZW50c1ttaW5JZF0gPCBlbGVtZW50ID9cbiAgICBtaW5JZCA6IGlkXG4gICk7XG5cbiAgcmV0dXJuIG1pbklkO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzLmpzIiwiaW1wb3J0IHsgdmVjIH0gZnJvbSAndmVjdG9yJztcblxuXG5leHBvcnQgY2xhc3MgQ3JlYXR1cmUge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgcG9zaXRpb24sIHNpemUsXG4gICAgY29sb3IsIHZlbG9jaXR5ID0gdmVjKClcbiAgfSkge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLnZlbG9jaXR5ID0gdmVsb2NpdHk7XG4gICAgdGhpcy5wbHVnaW5zID0gW107XG4gICAgdGhpcy5wbHVnKG5ldyBNb3ZlbWVudCgpKTtcbiAgfVxuXG4gIHN0ZWVyKGFuZ2xlKSB7XG4gICAgdGhpcy52ZWxvY2l0eS5yb3RhdGUoYW5nbGUpO1xuICB9XG5cbiAgcmVuZGVyKHJlbmRlcmVyKSB7XG4gICAgcmVuZGVyZXIuY2lyY2xlKHtcbiAgICAgIHg6IHRoaXMucG9zaXRpb24ueCxcbiAgICAgIHk6IHRoaXMucG9zaXRpb24ueSxcbiAgICAgIHJhZGl1czogdGhpcy5zaXplXG4gICAgfSwgeyBjb2xvcjogdGhpcy5jb2xvciB9KTtcblxuICAgIHRoaXMucGx1Z2lucy5mb3JFYWNoKHBsdWdpbiA9PlxuICAgICAgcGx1Z2luLmZvckVhY2gocGFydCA9PlxuICAgICAgICBwYXJ0LnJlbmRlciAmJiBwYXJ0LnJlbmRlcihyZW5kZXJlcikpKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBsZXQgdmFsdWUgPSB0aGlzO1xuICAgIHRoaXMucGx1Z2lucy5mb3JFYWNoKHBsdWdpbiA9PlxuICAgICAgcGx1Z2luLmZvckVhY2gocGFydCA9PlxuICAgICAgICB2YWx1ZSA9IHBhcnQuY2FsbCh0aGlzLCB2YWx1ZSkpKTtcbiAgfVxuXG4gIHBsdWcoLi4ucGx1Z2luKSB7XG4gICAgdGhpcy5wbHVnaW5zLnB1c2gocGx1Z2luKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5jbGFzcyBNb3ZlbWVudCB7XG4gIGNhbGwoc2VsZikge1xuICAgIHNlbGYucG9zaXRpb24uYWRkKHNlbGYudmVsb2NpdHkpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY3JlYXR1cmUuanMiLCJpbXBvcnQgeyB2ZWMgfSBmcm9tICd2ZWN0b3InO1xuaW1wb3J0IHsgcmFuZ2UsIGFyZ01pbiB9IGZyb20gJ3V0aWxzJztcblxuXG5leHBvcnQgY2xhc3MgU2lnaHQge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgZm92ID0gTWF0aC5QSSAvIDIsXG4gICAgcmF5Q291bnQgPSAxNixcbiAgICBzdHJlbmd0aCA9IDE1LFxuICAgIGVudmlyb25tZW50ID0gW11cbiAgfSA9IHt9KSB7XG4gICAgdGhpcy5mb3YgPSBmb3Y7XG4gICAgdGhpcy5yYXlDb3VudCA9IHJheUNvdW50O1xuICAgIHRoaXMuc3RyZW5ndGggPSBzdHJlbmd0aDtcbiAgICB0aGlzLmVudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XG4gIH1cblxuICBnZXRTaWdodERpcmVjdGlvbnModmVsb2NpdHkpIHtcbiAgICByZXR1cm4gcmFuZ2UodGhpcy5yYXlDb3VudClcbiAgICAgIC5tYXAocmF5SWQgPT4gcmF5SWQgLyAodGhpcy5yYXlDb3VudCAtIDEpICogdGhpcy5mb3YgLSB0aGlzLmZvdiAvIDIpXG4gICAgICAubWFwKHJheUFuZ2xlID0+IHZlbG9jaXR5LmNvcHkucm90YXRlKHJheUFuZ2xlKSk7XG4gIH1cblxuICBpbnRlcnNlY3QocmF5LCBlbGVtZW50KSB7XG4gICAgY29uc3QgciA9IGVsZW1lbnQuc2l6ZTtcbiAgICBjb25zdCBleWUgPSByYXkucG9zaXRpb24uY29weS5hZGQocmF5LmRpcmVjdGlvbi5zY2FsZVRvKHRoaXMuc3RyZW5ndGgpKTtcbiAgICBjb25zdCB7IHg6IGR4LCB5OiBkeSB9ID0gcmF5LnBvc2l0aW9uLnN1YnRyYWN0KGV5ZSk7XG4gICAgY29uc3QgZHIgPSBleWUubGVuZ3RoO1xuICAgIGNvbnN0IGRldCA9IGVsZW1lbnQucG9zaXRpb24ueCAqIGV5ZS55IC0gZXllLnggKiBlbGVtZW50LnBvc2l0aW9uLnk7XG4gICAgY29uc3QgZGlzYyA9IHIgKiByICogZHIgKiBkciAtIGRldCAqIGRldDtcbiAgICBjb25zdCBkaXNjUm9vdCA9IE1hdGguc3FydChkaXNjKTtcblxuICAgIGNvbnN0IHgxID0gKGRldCAqIGR5ICsgTWF0aC5zaWduKGR5KSAqIGR4ICogZGlzY1Jvb3QpIC8gKGRyICogZHIpO1xuICAgIGNvbnN0IHgyID0gKGRldCAqIGR5IC0gTWF0aC5zaWduKGR5KSAqIGR4ICogZGlzY1Jvb3QpIC8gKGRyICogZHIpO1xuXG4gICAgY29uc3QgeTEgPSAoLWRldCAqIGR4ICsgTWF0aC5hYnMoZHkpICogZGlzY1Jvb3QpIC8gKGRyICogZHIpO1xuICAgIGNvbnN0IHkyID0gKC1kZXQgKiBkeCAtIE1hdGguYWJzKGR5KSAqIGRpc2NSb290KSAvIChkciAqIGRyKTtcblxuICAgIGNvbnN0IHAxID0gdmVjKHgxLCB5MSk7XG4gICAgY29uc3QgcDIgPSB2ZWMoeDIsIHkyKTtcbiAgICBjb25zdCBtaW5MZW5JZCA9IGFyZ01pbihbcDEsIHAyXSwgdmVjdG9yID0+IHZlY3Rvci5sZW5ndGgpO1xuICAgIGNvbnN0IG1pbkxlblAgPSBbcDEsIHAyXVttaW5MZW5JZF07XG5cbiAgICByZXR1cm4ge1xuICAgICAgdmFsaWQ6IGRpc2MgPj0gMCxcbiAgICAgIGRpc3RhbmNlOiBtaW5MZW5QLmxlbmd0aCxcbiAgICAgIGludGVyc2VjdGlvbjogbWluTGVuUCxcbiAgICAgIGVsZW1lbnRcbiAgICB9O1xuICB9XG5cbiAgY2FsbChzZWxmKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U2lnaHREaXJlY3Rpb25zKHNlbGYudmVsb2NpdHkpXG4gICAgICAubWFwKGRpcmVjdGlvbiA9PiB7XG4gICAgICAgIGNvbnN0IGludGVyc2VjdGlvbnMgPSB0aGlzLmVudmlyb25tZW50XG4gICAgICAgICAgLm1hcChlbGVtZW50ID0+IHRoaXMuaW50ZXJzZWN0cyh7XG4gICAgICAgICAgICBwb3NpdGlvbjogc2VsZi5wb3NpdGlvbixcbiAgICAgICAgICAgIGRpcmVjdGlvblxuICAgICAgICAgIH0sIGVsZW1lbnQpKVxuICAgICAgICAgIC5maWx0ZXIoaW50ZXJzZWN0aW9uID0+IGludGVyc2VjdGlvbi52YWxpZCk7XG5cbiAgICAgICAgcmV0dXJuIGludGVyc2VjdGlvbnNbYXJnTWluKFxuICAgICAgICAgIGludGVyc2VjdGlvbnMsICh7IGRpc3RhbmNlIH0pID0+IGRpc3RhbmNlXG4gICAgICAgICldO1xuICAgICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE9jY2lwaXRhbExvYmUge1xuICBjb25zdHJ1Y3RvcihhcmNoaXRlY3R1cmUpIHtcbiAgICB0aGlzLmFyY2hpdGVjdHVyZSA9IGFyY2hpdGVjdHVyZTtcbiAgfVxuXG4gIGNhbGwoc2VsZiwgc2lnaHQpIHtcbiAgICAvLyByZXR1cm4gdGhpcy5mZWVkRm9yd2FyZChzaWdodCk7XG4gICAgcmV0dXJuIChNYXRoLnJhbmRvbSgpIC0gMC40KSAvIDEwO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOYXZpZ2F0b3Ige1xuICByZW5kZXIocmVuZGVyZXIpIHtcbiAgICAvLyBjdHguZmlsbFJlY3QoMCwwLDUwLDUwKTtcbiAgfVxuXG4gIGNhbGwoc2VsZiwgZGlyZWN0aW9uKSB7XG4gICAgc2VsZi5zdGVlcihkaXJlY3Rpb24pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbmVydm91cy1zeXN0ZW0uanMiLCJleHBvcnQgY2xhc3MgQ2FudmFzUmVuZGVyZXIge1xuICBjb25zdHJ1Y3RvcihjdHgsIHsgd2lkdGggPSA1MCwgaGVpZ2h0ID0gNTAgfSA9IHt9KSB7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5jYW52YXNTaXplID0geyB3aWR0aCwgaGVpZ2h0IH07XG4gIH1cblxuICBjaXJjbGUoeyB4ID0gMCwgeSA9IDAsIHJhZGl1cyA9IDUgfSA9IHt9LCB7IGNvbG9yID0gJ3JlZCcgfSA9IHt9KSB7XG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgdGhpcy5jdHguYXJjKHgsIHksIHJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdChcbiAgICAgIC10aGlzLmNhbnZhc1NpemUud2lkdGggLyAyLFxuICAgICAgLXRoaXMuY2FudmFzU2l6ZS5oZWlnaHQgLyAyLFxuICAgICAgdGhpcy5jYW52YXNTaXplLndpZHRoLFxuICAgICAgdGhpcy5jYW52YXNTaXplLmhlaWdodFxuICAgICk7XG4gIH1cblxuICByZW5kZXJSYXkoY3R4LCB7IHBvc2l0aW9uLCBvcmllbnRhdGlvbiB9LCB7IGNvbG9yID0gJ3JlZCcgfSkge1xuICAgIGNvbnN0IGxpbmVFbmQgPSBwb3NpdGlvbi5jb3B5LmFkZChvcmllbnRhdGlvbik7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8ocG9zaXRpb24ueCwgcG9zaXRpb24ueSk7XG4gICAgY3R4LmxpbmVUbyhsaW5lRW5kLngsIGxpbmVFbmQueSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlcmVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==