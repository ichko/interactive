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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.math = undefined;
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

var math = exports.math = {
  intersect: {
    lineCircle: function lineCircle(_ref, _ref2) {
      var start = _ref.start,
          end = _ref.end;
      var radius = _ref2.radius,
          position = _ref2.position;

      var _vec = vec = ray.position.subtract(end),
          dx = _vec.x,
          dy = _vec.y;

      var dr = vec.length;
      var det = position.x * end.y - end.x * position.y;
      var disc = radius * radius * dr * dr - det * det;
      var discRoot = Math.sqrt(disc);

      var x1 = (det * dy + Math.sign(dy) * dx * discRoot) / (dr * dr);
      var x2 = (det * dy - Math.sign(dy) * dx * discRoot) / (dr * dr);

      var y1 = (-det * dx + Math.abs(dy) * discRoot) / (dr * dr);
      var y2 = (-det * dx - Math.abs(dy) * discRoot) / (dr * dr);

      var p1 = vec(x1, y1);
      var p2 = vec(x2, y2);
      var minLenId = argMin([p1, p2], function (vector) {
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
  }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vector = __webpack_require__(0);

var _utils = __webpack_require__(1);

var _engine = __webpack_require__(4);

var _renderer = __webpack_require__(5);

var _snake = __webpack_require__(6);

var _nervousSystem = __webpack_require__(8);

var _ref = [window.innerWidth, window.innerHeight],
    width = _ref[0],
    height = _ref[1];

var canvas = document.getElementById('canvas');
canvas.width = width;
canvas.height = height;
var ctx = canvas.getContext('2d');

ctx.scale(1, -1);
ctx.translate(width / 2, -height / 2);

function aiSnake(size, position, environment) {
  return new _snake.Snake({
    size: size, color: 'rgba(250, 10, 100, 1)',
    tailSize: 10, position: position, velocity: (0, _vector.vec)(0, 5)
  }).plug(new _nervousSystem.Sight(environment), new _nervousSystem.OccipitalLobe(), new _nervousSystem.Navigator());
}

var engine = new _engine.Engine(new _renderer.CanvasRenderer(ctx, { width: width, height: height }));

(0, _utils.range)(10).forEach(function () {
  return engine.addToScene(aiSnake((0, _utils.random)(0, 15), (0, _utils.randomPosition)(800), engine.scene));
});

(function animation() {
  engine.clear().update().render();

  window.requestAnimationFrame(animation);
})();

/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CanvasRenderer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _vector = __webpack_require__(0);

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
    key: 'ray',
    value: function ray() {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref4$position = _ref4.position,
          position = _ref4$position === undefined ? (0, _vector.vec)() : _ref4$position,
          _ref4$direction = _ref4.direction,
          direction = _ref4$direction === undefined ? (0, _vector.vec)() : _ref4$direction;

      var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          color = _ref5.color;

      var lineEnd = position.copy.add(direction);

      this.ctx.fillStyle = color;
      this.ctx.beginPath();
      this.ctx.moveTo(position.x, position.y);
      this.ctx.lineTo(lineEnd.x, lineEnd.y);
      this.ctx.stroke();
    }
  }]);

  return CanvasRenderer;
}();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Snake = exports.Food = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _utils = __webpack_require__(1);

var _creature = __webpack_require__(7);

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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Navigator = exports.OccipitalLobe = exports.Sight = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _vector = __webpack_require__(0);

var _utils = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sight = exports.Sight = function () {
  function Sight() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$fov = _ref.fov,
        fov = _ref$fov === undefined ? Math.PI / 2 : _ref$fov,
        _ref$rayCount = _ref.rayCount,
        rayCount = _ref$rayCount === undefined ? 8 : _ref$rayCount,
        _ref$strength = _ref.strength,
        strength = _ref$strength === undefined ? 250 : _ref$strength,
        _ref$environment = _ref.environment,
        environment = _ref$environment === undefined ? [] : _ref$environment;

    _classCallCheck(this, Sight);

    this.strength = strength;
    this.rayAngles = (0, _utils.range)(rayCount).map(function (rayId) {
      return rayId / (rayCount - 1) * fov - fov / 2;
    });
    this.environment = environment;
  }

  _createClass(Sight, [{
    key: 'getSightDirections',
    value: function getSightDirections(velocity) {
      return this.rayAngles.map(function (rayAngle) {
        return velocity.copy.rotate(rayAngle);
      });
    }
  }, {
    key: 'intersect',
    value: function intersect(ray, element) {
      return _utils.math.intersect.lineCircle({
        start: ray.position,
        end: ray.position.copy.add(ray.direction.scaleTo(this.strength))
      }, {
        position: element.position,
        radius: element.size
      });
    }
  }, {
    key: 'call',
    value: function call(self) {
      var _this = this;

      this.rays = [];

      return this.getSightDirections(self.velocity).map(function (direction) {
        _this.rays.push({
          direction: direction.scaleTo(_this.strength),
          position: self.position
        });

        var intersections = _this.environment.map(function (element) {
          return _this.intersects({
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
  }, {
    key: 'render',
    value: function render(renderer) {
      this.rays.forEach(function (ray) {
        return renderer.ray(ray);
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
      return Math.sin(self.position.x * self.position.y);
    }
  }]);

  return OccipitalLobe;
}();

var Navigator = exports.Navigator = function () {
  function Navigator() {
    _classCallCheck(this, Navigator);
  }

  _createClass(Navigator, [{
    key: 'call',
    value: function call(self, direction) {
      self.steer(direction);
    }
  }]);

  return Navigator;
}();

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmUzZjM0ZTc0OTNkNjFkYzg4OWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NuYWtlLmpzIiwid2VicGFjazovLy8uL3NyYy9jcmVhdHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmVydm91cy1zeXN0ZW0uanMiXSwibmFtZXMiOlsidmVjIiwicG9sYXIiLCJ4IiwieSIsIlZlY3RvciIsImFuZ2xlIiwibWFnbml0dWRlIiwiTWF0aCIsImNvcyIsInNpbiIsIm9sZFgiLCJzaXplIiwidmVjdG9yIiwiY29weSIsInN1YnRyYWN0IiwibGVuZ3RoIiwibGVuIiwic2NhbGUiLCJhdGFuMiIsInNxcnQiLCJyYW5nZSIsInJhbmRvbSIsInJhbmRvbVBvc2l0aW9uIiwiYXJnTWluIiwiQXJyYXkiLCJmcm9tIiwia2V5cyIsIm1heCIsIm1pbiIsIlBJIiwiZWxlbWVudHMiLCJoYW5kbGVyIiwibWFwcGVkRWxlbWVudHMiLCJtYXAiLCJtaW5JZCIsImZvckVhY2giLCJlbGVtZW50IiwiaWQiLCJtYXRoIiwiaW50ZXJzZWN0IiwibGluZUNpcmNsZSIsInN0YXJ0IiwiZW5kIiwicmFkaXVzIiwicG9zaXRpb24iLCJyYXkiLCJkeCIsImR5IiwiZHIiLCJkZXQiLCJkaXNjIiwiZGlzY1Jvb3QiLCJ4MSIsInNpZ24iLCJ4MiIsInkxIiwiYWJzIiwieTIiLCJwMSIsInAyIiwibWluTGVuSWQiLCJtaW5MZW5QIiwidmFsaWQiLCJkaXN0YW5jZSIsImludGVyc2VjdGlvbiIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ0cmFuc2xhdGUiLCJhaVNuYWtlIiwiZW52aXJvbm1lbnQiLCJjb2xvciIsInRhaWxTaXplIiwidmVsb2NpdHkiLCJwbHVnIiwiZW5naW5lIiwiYWRkVG9TY2VuZSIsInNjZW5lIiwiYW5pbWF0aW9uIiwiY2xlYXIiLCJ1cGRhdGUiLCJyZW5kZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJFbmdpbmUiLCJyZW5kZXJlciIsIm9iamVjdCIsInB1c2giLCJDYW52YXNSZW5kZXJlciIsImNhbnZhc1NpemUiLCJiZWdpblBhdGgiLCJmaWxsU3R5bGUiLCJhcmMiLCJmaWxsIiwiY2xvc2VQYXRoIiwiY2xlYXJSZWN0IiwiZGlyZWN0aW9uIiwibGluZUVuZCIsImFkZCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSIsIkZvb2QiLCJTbmFrZSIsImNvbmZpZyIsInRhaWwiLCJpIiwic2NhbGVUbyIsIkNyZWF0dXJlIiwicGx1Z2lucyIsIk1vdmVtZW50Iiwicm90YXRlIiwiY2lyY2xlIiwicGx1Z2luIiwicGFydCIsInZhbHVlIiwiY2FsbCIsInNlbGYiLCJTaWdodCIsImZvdiIsInJheUNvdW50Iiwic3RyZW5ndGgiLCJyYXlBbmdsZXMiLCJyYXlJZCIsInJheUFuZ2xlIiwicmF5cyIsImdldFNpZ2h0RGlyZWN0aW9ucyIsImludGVyc2VjdGlvbnMiLCJpbnRlcnNlY3RzIiwiZmlsdGVyIiwiT2NjaXBpdGFsTG9iZSIsImFyY2hpdGVjdHVyZSIsInNpZ2h0IiwiTmF2aWdhdG9yIiwic3RlZXIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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dGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiZTNmMzRlNzQ5M2Q2MWRjODg5ZCIsImV4cG9ydCBmdW5jdGlvbiB2ZWMoeCwgeSkge1xyXG4gIHJldHVybiBuZXcgVmVjdG9yKHgsIHkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9sYXIoYW5nbGUsIG1hZ25pdHVkZSA9IDEpIHtcclxuICByZXR1cm4gbmV3IFZlY3RvcihcclxuICAgIG1hZ25pdHVkZSAqIE1hdGguY29zKGFuZ2xlKSxcclxuICAgIG1hZ25pdHVkZSAqIE1hdGguc2luKGFuZ2xlKVxyXG4gICk7XHJcbn1cclxuXHJcblxyXG5jbGFzcyBWZWN0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKHggPSAwLCB5ID0gMCkge1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgfVxyXG5cclxuICBnZXQgYW5nbGUoKSB7XHJcbiAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLnksIHRoaXMueCk7XHJcbiAgfVxyXG5cclxuICByb3RhdGUoYW5nbGUpIHtcclxuICAgIGNvbnN0IG9sZFggPSB0aGlzLng7XHJcblxyXG4gICAgdGhpcy54ID0gdGhpcy54ICogTWF0aC5jb3MoYW5nbGUpIC0gdGhpcy55ICogTWF0aC5zaW4oYW5nbGUpO1xyXG4gICAgdGhpcy55ID0gdGhpcy55ICogTWF0aC5jb3MoYW5nbGUpICsgb2xkWCAqIE1hdGguc2luKGFuZ2xlKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGFkZCh7IHgsIHkgfSkge1xyXG4gICAgdGhpcy54ICs9IHg7XHJcbiAgICB0aGlzLnkgKz0geTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHN1YnRyYWN0KHsgeCwgeSB9KSB7XHJcbiAgICB0aGlzLnggLT0geDtcclxuICAgIHRoaXMueSAtPSB5O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgc2NhbGUoc2l6ZSkge1xyXG4gICAgdGhpcy54ICo9IHNpemU7XHJcbiAgICB0aGlzLnkgKj0gc2l6ZTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGdldCBjb3B5KCkge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IodGhpcy54LCB0aGlzLnkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGxlbmd0aCgpIHtcclxuICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55KTtcclxuICB9XHJcblxyXG4gIGRpc3RhbmNlKHZlY3Rvcikge1xyXG4gICAgcmV0dXJuIHRoaXMuY29weVxyXG4gICAgICAuc3VidHJhY3QodmVjdG9yKVxyXG4gICAgICAubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgc2NhbGVUbyhzaXplKSB7XHJcbiAgICBjb25zdCBsZW4gPSB0aGlzLmxlbmd0aCB8fCAxO1xyXG4gICAgdGhpcy5zY2FsZShzaXplIC8gbGVuKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZlY3Rvci5qcyIsImltcG9ydCB7IHBvbGFyIH0gZnJvbSAndmVjdG9yJztcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmFuZ2Uoc2l6ZSA9IDApIHtcclxuICByZXR1cm4gQXJyYXkuZnJvbShBcnJheShzaXplKS5rZXlzKCkpO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbShtYXgsIG1pbikge1xyXG4gIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tUG9zaXRpb24oc2l6ZSkge1xyXG4gIHJldHVybiBwb2xhcihyYW5kb20oMCwgTWF0aC5QSSAqIDIpLCByYW5kb20oMCwgc2l6ZSkpO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFyZ01pbihlbGVtZW50cywgaGFuZGxlciA9IHggPT4geCkge1xyXG4gIGNvbnN0IG1hcHBlZEVsZW1lbnRzID0gZWxlbWVudHMubWFwKGhhbmRsZXIpO1xyXG4gIGxldCBtaW5JZCA9IC0xO1xyXG5cclxuICBtYXBwZWRFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50LCBpZCkgPT5cclxuICAgIG1pbklkID0gbWFwcGVkRWxlbWVudHNbbWluSWRdIDwgZWxlbWVudCA/XHJcbiAgICBtaW5JZCA6IGlkXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIG1pbklkO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IG1hdGggPSB7XHJcbiAgaW50ZXJzZWN0OiB7XHJcbiAgICBsaW5lQ2lyY2xlOiAoeyBzdGFydCwgZW5kIH0sIHsgcmFkaXVzLCBwb3NpdGlvbiB9KSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgeDogZHgsIHk6IGR5IH0gPSB2ZWMgPSByYXkucG9zaXRpb24uc3VidHJhY3QoZW5kKTtcclxuICAgICAgY29uc3QgZHIgPSB2ZWMubGVuZ3RoO1xyXG4gICAgICBjb25zdCBkZXQgPSBwb3NpdGlvbi54ICogZW5kLnkgLSBlbmQueCAqIHBvc2l0aW9uLnk7XHJcbiAgICAgIGNvbnN0IGRpc2MgPSByYWRpdXMgKiByYWRpdXMgKiBkciAqIGRyIC0gZGV0ICogZGV0O1xyXG4gICAgICBjb25zdCBkaXNjUm9vdCA9IE1hdGguc3FydChkaXNjKTtcclxuXHJcbiAgICAgIGNvbnN0IHgxID0gKGRldCAqIGR5ICsgTWF0aC5zaWduKGR5KSAqIGR4ICogZGlzY1Jvb3QpIC8gKGRyICogZHIpO1xyXG4gICAgICBjb25zdCB4MiA9IChkZXQgKiBkeSAtIE1hdGguc2lnbihkeSkgKiBkeCAqIGRpc2NSb290KSAvIChkciAqIGRyKTtcclxuXHJcbiAgICAgIGNvbnN0IHkxID0gKC1kZXQgKiBkeCArIE1hdGguYWJzKGR5KSAqIGRpc2NSb290KSAvIChkciAqIGRyKTtcclxuICAgICAgY29uc3QgeTIgPSAoLWRldCAqIGR4IC0gTWF0aC5hYnMoZHkpICogZGlzY1Jvb3QpIC8gKGRyICogZHIpO1xyXG5cclxuICAgICAgY29uc3QgcDEgPSB2ZWMoeDEsIHkxKTtcclxuICAgICAgY29uc3QgcDIgPSB2ZWMoeDIsIHkyKTtcclxuICAgICAgY29uc3QgbWluTGVuSWQgPSBhcmdNaW4oW3AxLCBwMl0sIHZlY3RvciA9PiB2ZWN0b3IubGVuZ3RoKTtcclxuICAgICAgY29uc3QgbWluTGVuUCA9IFtwMSwgcDJdW21pbkxlbklkXTtcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdmFsaWQ6IGRpc2MgPj0gMCxcclxuICAgICAgICBkaXN0YW5jZTogbWluTGVuUC5sZW5ndGgsXHJcbiAgICAgICAgaW50ZXJzZWN0aW9uOiBtaW5MZW5QLFxyXG4gICAgICAgIGVsZW1lbnRcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy5qcyIsImltcG9ydCB7IHZlYyB9IGZyb20gJ3ZlY3Rvcic7XHJcbmltcG9ydCB7IHJhbmdlLCByYW5kb20sIHJhbmRvbVBvc2l0aW9uIH0gZnJvbSAndXRpbHMnO1xyXG5pbXBvcnQgeyBFbmdpbmUgfSBmcm9tICdlbmdpbmUnO1xyXG5pbXBvcnQgeyBDYW52YXNSZW5kZXJlciB9IGZyb20gJ3JlbmRlcmVyJztcclxuaW1wb3J0IHsgU25ha2UgfSBmcm9tICdzbmFrZSc7XHJcbmltcG9ydCB7IFNpZ2h0LCBPY2NpcGl0YWxMb2JlLCBOYXZpZ2F0b3IgfSBmcm9tICduZXJ2b3VzLXN5c3RlbSc7XHJcblxyXG5cclxuY29uc3QgWyB3aWR0aCwgaGVpZ2h0IF0gPSBbIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQgXTtcclxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xyXG5jYW52YXMud2lkdGggPSB3aWR0aDtcclxuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG5jdHguc2NhbGUoMSwgLTEpO1xyXG5jdHgudHJhbnNsYXRlKHdpZHRoIC8gMiwgLWhlaWdodCAvIDIpO1xyXG5cclxuZnVuY3Rpb24gYWlTbmFrZShzaXplLCBwb3NpdGlvbiwgZW52aXJvbm1lbnQpIHtcclxuICByZXR1cm4gbmV3IFNuYWtlKHtcclxuICAgIHNpemUsIGNvbG9yOiAncmdiYSgyNTAsIDEwLCAxMDAsIDEpJyxcclxuICAgIHRhaWxTaXplOiAxMCwgcG9zaXRpb24sIHZlbG9jaXR5OiB2ZWMoMCwgNSlcclxuICB9KVxyXG4gIC5wbHVnKG5ldyBTaWdodChlbnZpcm9ubWVudCksIG5ldyBPY2NpcGl0YWxMb2JlKCksIG5ldyBOYXZpZ2F0b3IoKSk7XHJcbn1cclxuXHJcbmNvbnN0IGVuZ2luZSA9IG5ldyBFbmdpbmUoXHJcbiAgbmV3IENhbnZhc1JlbmRlcmVyKGN0eCwgeyB3aWR0aCwgaGVpZ2h0IH0pXHJcbik7XHJcblxyXG5yYW5nZSgxMCkuZm9yRWFjaCgoKSA9PiBlbmdpbmUuYWRkVG9TY2VuZShcclxuICBhaVNuYWtlKHJhbmRvbSgwLCAxNSksIHJhbmRvbVBvc2l0aW9uKDgwMCksIGVuZ2luZS5zY2VuZSlcclxuKSk7XHJcblxyXG4oZnVuY3Rpb24gYW5pbWF0aW9uKCkge1xyXG4gIGVuZ2luZVxyXG4gICAgLmNsZWFyKClcclxuICAgIC51cGRhdGUoKVxyXG4gICAgLnJlbmRlcigpO1xyXG5cclxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XHJcbn0pKCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2luZGV4LmpzIiwiZXhwb3J0IGNsYXNzIEVuZ2luZSB7XHJcbiAgY29uc3RydWN0b3IocmVuZGVyZXIpIHtcclxuICAgIHRoaXMuc2NlbmUgPSBbXTtcclxuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcclxuICB9XHJcblxyXG4gIGFkZFRvU2NlbmUob2JqZWN0KSB7XHJcbiAgICB0aGlzLnNjZW5lLnB1c2gob2JqZWN0KTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgdGhpcy5zY2VuZS5mb3JFYWNoKG9iamVjdCA9PiBvYmplY3QudXBkYXRlICYmIG9iamVjdC51cGRhdGUoKSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHRoaXMuc2NlbmUuZm9yRWFjaChvYmplY3QgPT5cclxuICAgICAgb2JqZWN0LnJlbmRlciAmJiBvYmplY3QucmVuZGVyKHRoaXMucmVuZGVyZXIpKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgY2xlYXIoKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmNsZWFyKCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS5qcyIsImltcG9ydCB7IHZlYyB9IGZyb20gJ3ZlY3Rvcic7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENhbnZhc1JlbmRlcmVyIHtcclxuICBjb25zdHJ1Y3RvcihjdHgsIHsgd2lkdGggPSA1MCwgaGVpZ2h0ID0gNTAgfSA9IHt9KSB7XHJcbiAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgIHRoaXMuY2FudmFzU2l6ZSA9IHsgd2lkdGgsIGhlaWdodCB9O1xyXG4gIH1cclxuXHJcbiAgY2lyY2xlKHsgeCA9IDAsIHkgPSAwLCByYWRpdXMgPSA1IH0gPSB7fSwgeyBjb2xvciA9ICdyZWQnIH0gPSB7fSkge1xyXG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgIHRoaXMuY3R4LmFyYyh4LCB5LCByYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xyXG4gIH1cclxuXHJcbiAgY2xlYXIoKSB7XHJcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoXHJcbiAgICAgIC10aGlzLmNhbnZhc1NpemUud2lkdGggLyAyLFxyXG4gICAgICAtdGhpcy5jYW52YXNTaXplLmhlaWdodCAvIDIsXHJcbiAgICAgIHRoaXMuY2FudmFzU2l6ZS53aWR0aCxcclxuICAgICAgdGhpcy5jYW52YXNTaXplLmhlaWdodFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJheSh7XHJcbiAgICBwb3NpdGlvbiA9IHZlYygpLFxyXG4gICAgZGlyZWN0aW9uID0gdmVjKClcclxuICB9ID0ge30sIHsgY29sb3IgfSA9IHt9KSB7XHJcbiAgICBjb25zdCBsaW5lRW5kID0gcG9zaXRpb24uY29weS5hZGQoZGlyZWN0aW9uKTtcclxuXHJcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgdGhpcy5jdHgubW92ZVRvKHBvc2l0aW9uLngsIHBvc2l0aW9uLnkpO1xyXG4gICAgdGhpcy5jdHgubGluZVRvKGxpbmVFbmQueCwgbGluZUVuZC55KTtcclxuICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG4gIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXJlci5qcyIsImltcG9ydCB7IHJhbmdlIH0gZnJvbSAndXRpbHMnO1xyXG5pbXBvcnQgeyBDcmVhdHVyZSB9IGZyb20gJ2NyZWF0dXJlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBGb29kIGV4dGVuZHMgQ3JlYXR1cmUge1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNuYWtlIGV4dGVuZHMgQ3JlYXR1cmUge1xyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgc3VwZXIoY29uZmlnKTtcclxuICAgIHRoaXMudGFpbFNpemUgPSBjb25maWcudGFpbFNpemU7XHJcbiAgICB0aGlzLnRhaWwgPSByYW5nZSh0aGlzLnRhaWxTaXplKS5tYXAoaWQgPT4gbmV3IENyZWF0dXJlKHtcclxuICAgICAgcG9zaXRpb246IGNvbmZpZy5wb3NpdGlvbi5jb3B5LFxyXG4gICAgICBzaXplOiBjb25maWcuc2l6ZSxcclxuICAgICAgY29sb3I6IGNvbmZpZy5jb2xvclxyXG4gICAgfSkpO1xyXG5cclxuICAgIHRoaXMudGFpbC5wdXNoKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgc3VwZXIudXBkYXRlKCk7XHJcbiAgICBmb3IgKGxldCBpID0gdGhpcy50YWlsLmxlbmd0aCAtIDE7aSA+PSAxO2ktLSkge1xyXG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLnRhaWxbaV0ucG9zaXRpb25cclxuICAgICAgICAuY29weS5zdWJ0cmFjdCh0aGlzLnRhaWxbaSAtIDFdLnBvc2l0aW9uKTtcclxuXHJcbiAgICAgIHRoaXMudGFpbFtpIC0gMV0ucG9zaXRpb24uYWRkKGRpcmVjdGlvblxyXG4gICAgICAgIC5zY2FsZVRvKGRpcmVjdGlvbi5sZW5ndGggLSB0aGlzLnNpemUgKiAyKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIocmVuZGVyZXIpIHtcclxuICAgIHN1cGVyLnJlbmRlcihyZW5kZXJlcik7XHJcbiAgICBmb3IgKGxldCBpID0gMDtpIDwgdGhpcy50YWlsLmxlbmd0aCAtIDE7aSsrKSB7XHJcbiAgICAgIHRoaXMudGFpbFtpXS5yZW5kZXIocmVuZGVyZXIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc25ha2UuanMiLCJpbXBvcnQgeyB2ZWMgfSBmcm9tICd2ZWN0b3InO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDcmVhdHVyZSB7XHJcbiAgY29uc3RydWN0b3Ioe1xyXG4gICAgcG9zaXRpb24sIHNpemUsXHJcbiAgICBjb2xvciwgdmVsb2NpdHkgPSB2ZWMoKVxyXG4gIH0pIHtcclxuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICB0aGlzLnZlbG9jaXR5ID0gdmVsb2NpdHk7XHJcbiAgICB0aGlzLnBsdWdpbnMgPSBbXTtcclxuICAgIHRoaXMucGx1ZyhuZXcgTW92ZW1lbnQoKSk7XHJcbiAgfVxyXG5cclxuICBzdGVlcihhbmdsZSkge1xyXG4gICAgdGhpcy52ZWxvY2l0eS5yb3RhdGUoYW5nbGUpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKHJlbmRlcmVyKSB7XHJcbiAgICByZW5kZXJlci5jaXJjbGUoe1xyXG4gICAgICB4OiB0aGlzLnBvc2l0aW9uLngsXHJcbiAgICAgIHk6IHRoaXMucG9zaXRpb24ueSxcclxuICAgICAgcmFkaXVzOiB0aGlzLnNpemVcclxuICAgIH0sIHsgY29sb3I6IHRoaXMuY29sb3IgfSk7XHJcblxyXG4gICAgdGhpcy5wbHVnaW5zLmZvckVhY2gocGx1Z2luID0+XHJcbiAgICAgIHBsdWdpbi5mb3JFYWNoKHBhcnQgPT5cclxuICAgICAgICBwYXJ0LnJlbmRlciAmJiBwYXJ0LnJlbmRlcihyZW5kZXJlcikpKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIGxldCB2YWx1ZSA9IHRoaXM7XHJcbiAgICB0aGlzLnBsdWdpbnMuZm9yRWFjaChwbHVnaW4gPT5cclxuICAgICAgcGx1Z2luLmZvckVhY2gocGFydCA9PlxyXG4gICAgICAgIHZhbHVlID0gcGFydC5jYWxsKHRoaXMsIHZhbHVlKSkpO1xyXG4gIH1cclxuXHJcbiAgcGx1ZyguLi5wbHVnaW4pIHtcclxuICAgIHRoaXMucGx1Z2lucy5wdXNoKHBsdWdpbik7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIE1vdmVtZW50IHtcclxuICBjYWxsKHNlbGYpIHtcclxuICAgIHNlbGYucG9zaXRpb24uYWRkKHNlbGYudmVsb2NpdHkpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY3JlYXR1cmUuanMiLCJpbXBvcnQgeyB2ZWMgfSBmcm9tICd2ZWN0b3InO1xyXG5pbXBvcnQgeyByYW5nZSwgYXJnTWluLCBtYXRoIH0gZnJvbSAndXRpbHMnO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBTaWdodCB7XHJcbiAgY29uc3RydWN0b3Ioe1xyXG4gICAgZm92ID0gTWF0aC5QSSAvIDIsXHJcbiAgICByYXlDb3VudCA9IDgsXHJcbiAgICBzdHJlbmd0aCA9IDI1MCxcclxuICAgIGVudmlyb25tZW50ID0gW11cclxuICB9ID0ge30pIHtcclxuICAgIHRoaXMuc3RyZW5ndGggPSBzdHJlbmd0aDtcclxuICAgIHRoaXMucmF5QW5nbGVzID0gcmFuZ2UocmF5Q291bnQpXHJcbiAgICAgIC5tYXAocmF5SWQgPT4gcmF5SWQgLyAocmF5Q291bnQgLSAxKSAqIGZvdiAtIGZvdiAvIDIpO1xyXG4gICAgdGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0U2lnaHREaXJlY3Rpb25zKHZlbG9jaXR5KSB7XHJcbiAgICByZXR1cm4gdGhpcy5yYXlBbmdsZXNcclxuICAgICAgLm1hcChyYXlBbmdsZSA9PiB2ZWxvY2l0eS5jb3B5LnJvdGF0ZShyYXlBbmdsZSkpO1xyXG4gIH1cclxuXHJcbiAgaW50ZXJzZWN0KHJheSwgZWxlbWVudCkge1xyXG4gICAgcmV0dXJuIG1hdGguaW50ZXJzZWN0LmxpbmVDaXJjbGUoe1xyXG4gICAgICBzdGFydDogcmF5LnBvc2l0aW9uLFxyXG4gICAgICBlbmQ6IHJheS5wb3NpdGlvbi5jb3B5LmFkZChyYXkuZGlyZWN0aW9uLnNjYWxlVG8odGhpcy5zdHJlbmd0aCkpXHJcbiAgICB9LCB7XHJcbiAgICAgIHBvc2l0aW9uOiBlbGVtZW50LnBvc2l0aW9uLFxyXG4gICAgICByYWRpdXM6IGVsZW1lbnQuc2l6ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjYWxsKHNlbGYpIHtcclxuICAgIHRoaXMucmF5cyA9IFtdO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmdldFNpZ2h0RGlyZWN0aW9ucyhzZWxmLnZlbG9jaXR5KVxyXG4gICAgICAubWFwKGRpcmVjdGlvbiA9PiB7XHJcbiAgICAgICAgdGhpcy5yYXlzLnB1c2goe1xyXG4gICAgICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb24uc2NhbGVUbyh0aGlzLnN0cmVuZ3RoKSxcclxuICAgICAgICAgIHBvc2l0aW9uOiBzZWxmLnBvc2l0aW9uXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGludGVyc2VjdGlvbnMgPSB0aGlzLmVudmlyb25tZW50XHJcbiAgICAgICAgICAubWFwKGVsZW1lbnQgPT4gdGhpcy5pbnRlcnNlY3RzKHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHNlbGYucG9zaXRpb24sXHJcbiAgICAgICAgICAgIGRpcmVjdGlvblxyXG4gICAgICAgICAgfSwgZWxlbWVudCkpXHJcbiAgICAgICAgICAuZmlsdGVyKGludGVyc2VjdGlvbiA9PiBpbnRlcnNlY3Rpb24udmFsaWQpO1xyXG5cclxuICAgICAgICByZXR1cm4gaW50ZXJzZWN0aW9uc1thcmdNaW4oXHJcbiAgICAgICAgICBpbnRlcnNlY3Rpb25zLCAoeyBkaXN0YW5jZSB9KSA9PiBkaXN0YW5jZVxyXG4gICAgICAgICldO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcihyZW5kZXJlcikge1xyXG4gICAgdGhpcy5yYXlzLmZvckVhY2gocmF5ID0+IHJlbmRlcmVyLnJheShyYXkpKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgT2NjaXBpdGFsTG9iZSB7XHJcbiAgY29uc3RydWN0b3IoYXJjaGl0ZWN0dXJlKSB7XHJcbiAgICB0aGlzLmFyY2hpdGVjdHVyZSA9IGFyY2hpdGVjdHVyZTtcclxuICB9XHJcblxyXG4gIGNhbGwoc2VsZiwgc2lnaHQpIHtcclxuICAgIC8vIHJldHVybiB0aGlzLmZlZWRGb3J3YXJkKHNpZ2h0KTtcclxuICAgIHJldHVybiAoTWF0aC5zaW4oc2VsZi5wb3NpdGlvbi54ICogc2VsZi5wb3NpdGlvbi55KSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE5hdmlnYXRvciB7XHJcbiAgY2FsbChzZWxmLCBkaXJlY3Rpb24pIHtcclxuICAgIHNlbGYuc3RlZXIoZGlyZWN0aW9uKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL25lcnZvdXMtc3lzdGVtLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==