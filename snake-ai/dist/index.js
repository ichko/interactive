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
    tailSize: 0, position: position, velocity: (0, _vector.vec)(0, 1)
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
    key: 'call',
    value: function call(self, direction) {
      self.steer(direction);
    }
  }]);

  return Navigator;
}();

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzAzOTBjMmM1ODM0YzkyNTdhNGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NuYWtlLmpzIiwid2VicGFjazovLy8uL3NyYy9jcmVhdHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmVydm91cy1zeXN0ZW0uanMiXSwibmFtZXMiOlsidmVjIiwicG9sYXIiLCJ4IiwieSIsIlZlY3RvciIsImFuZ2xlIiwibWFnbml0dWRlIiwiTWF0aCIsImNvcyIsInNpbiIsIm9sZFgiLCJzaXplIiwidmVjdG9yIiwiY29weSIsInN1YnRyYWN0IiwibGVuZ3RoIiwibGVuIiwic2NhbGUiLCJhdGFuMiIsInNxcnQiLCJyYW5nZSIsInJhbmRvbSIsInJhbmRvbVBvc2l0aW9uIiwiYXJnTWluIiwiQXJyYXkiLCJmcm9tIiwia2V5cyIsIm1heCIsIm1pbiIsIlBJIiwiZWxlbWVudHMiLCJoYW5kbGVyIiwibWFwcGVkRWxlbWVudHMiLCJtYXAiLCJtaW5JZCIsImZvckVhY2giLCJlbGVtZW50IiwiaWQiLCJtYXRoIiwiaW50ZXJzZWN0IiwibGluZUNpcmNsZSIsInN0YXJ0IiwiZW5kIiwicmFkaXVzIiwicG9zaXRpb24iLCJyYXkiLCJkeCIsImR5IiwiZHIiLCJkZXQiLCJkaXNjIiwiZGlzY1Jvb3QiLCJ4MSIsInNpZ24iLCJ4MiIsInkxIiwiYWJzIiwieTIiLCJwMSIsInAyIiwibWluTGVuSWQiLCJtaW5MZW5QIiwidmFsaWQiLCJkaXN0YW5jZSIsImludGVyc2VjdGlvbiIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ0cmFuc2xhdGUiLCJhaVNuYWtlIiwiZW52aXJvbm1lbnQiLCJjb2xvciIsInRhaWxTaXplIiwidmVsb2NpdHkiLCJwbHVnIiwiZW5naW5lIiwiYWRkVG9TY2VuZSIsInNjZW5lIiwiYW5pbWF0aW9uIiwiY2xlYXIiLCJ1cGRhdGUiLCJyZW5kZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJFbmdpbmUiLCJyZW5kZXJlciIsIm9iamVjdCIsInB1c2giLCJDYW52YXNSZW5kZXJlciIsImNhbnZhc1NpemUiLCJiZWdpblBhdGgiLCJmaWxsU3R5bGUiLCJhcmMiLCJmaWxsIiwiY2xvc2VQYXRoIiwiY2xlYXJSZWN0IiwiZGlyZWN0aW9uIiwibGluZUVuZCIsImFkZCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSIsIkZvb2QiLCJTbmFrZSIsImNvbmZpZyIsInRhaWwiLCJpIiwic2NhbGVUbyIsIkNyZWF0dXJlIiwicGx1Z2lucyIsIk1vdmVtZW50Iiwicm90YXRlIiwiY2lyY2xlIiwicGx1Z2luIiwicGFydCIsInZhbHVlIiwiY2FsbCIsInNlbGYiLCJTaWdodCIsImZvdiIsInJheUNvdW50Iiwic3RyZW5ndGgiLCJyYXlBbmdsZXMiLCJyYXlJZCIsInJheUFuZ2xlIiwicmF5cyIsImdldFNpZ2h0RGlyZWN0aW9ucyIsImludGVyc2VjdGlvbnMiLCJpbnRlcnNlY3RzIiwiZmlsdGVyIiwiT2NjaXBpdGFsTG9iZSIsImFyY2hpdGVjdHVyZSIsInNpZ2h0IiwiTmF2aWdhdG9yIiwic3RlZXIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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YTtBQUNoQixjQUFLa0csSUFBTCxDQUFVdEMsSUFBVixDQUFlO0FBQ2JTLHFCQUFXQSxVQUFVVyxPQUFWLENBQWtCLE1BQUtjLFFBQXZCLENBREU7QUFFYm5GLG9CQUFVK0UsS0FBSy9FO0FBRkYsU0FBZjs7QUFLQSxZQUFNeUYsZ0JBQWdCLE1BQUt4RCxXQUFMLENBQ25CNUMsR0FEbUIsQ0FDZjtBQUFBLGlCQUFXLE1BQUtxRyxVQUFMLENBQWdCO0FBQzlCMUYsc0JBQVUrRSxLQUFLL0UsUUFEZTtBQUU5QjBEO0FBRjhCLFdBQWhCLEVBR2JsRSxPQUhhLENBQVg7QUFBQSxTQURlLEVBS25CbUcsTUFMbUIsQ0FLWjtBQUFBLGlCQUFnQnZFLGFBQWFGLEtBQTdCO0FBQUEsU0FMWSxDQUF0Qjs7QUFPQSxlQUFPdUUsY0FBYyxtQkFDbkJBLGFBRG1CLEVBQ0o7QUFBQSxjQUFHdEUsUUFBSCxTQUFHQSxRQUFIO0FBQUEsaUJBQWtCQSxRQUFsQjtBQUFBLFNBREksQ0FBZCxDQUFQO0FBR0QsT0FqQkksQ0FBUDtBQWtCRDs7OzJCQUVNNEIsUSxFQUFVO0FBQ2YsV0FBS3dDLElBQUwsQ0FBVWhHLE9BQVYsQ0FBa0I7QUFBQSxlQUFPd0QsU0FBUzlDLEdBQVQsQ0FBYUEsR0FBYixDQUFQO0FBQUEsT0FBbEI7QUFDRDs7Ozs7O0lBR1UyRixhLFdBQUFBLGE7QUFDWCx5QkFBWUMsWUFBWixFQUEwQjtBQUFBOztBQUN4QixTQUFLQSxZQUFMLEdBQW9CQSxZQUFwQjtBQUNEOzs7O3lCQUVJZCxJLEVBQU1lLEssRUFBTztBQUNoQjtBQUNBLGFBQU8sQ0FBQ25JLEtBQUtjLE1BQUwsS0FBZ0IsR0FBakIsSUFBd0IsRUFBL0I7QUFDRDs7Ozs7O0lBR1VzSCxTLFdBQUFBLFM7Ozs7Ozs7eUJBQ05oQixJLEVBQU1yQixTLEVBQVc7QUFDcEJxQixXQUFLaUIsS0FBTCxDQUFXdEMsU0FBWDtBQUNEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYzAzOTBjMmM1ODM0YzkyNTdhNGMiLCJleHBvcnQgZnVuY3Rpb24gdmVjKHgsIHkpIHtcclxuICByZXR1cm4gbmV3IFZlY3Rvcih4LCB5KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvbGFyKGFuZ2xlLCBtYWduaXR1ZGUgPSAxKSB7XHJcbiAgcmV0dXJuIG5ldyBWZWN0b3IoXHJcbiAgICBtYWduaXR1ZGUgKiBNYXRoLmNvcyhhbmdsZSksXHJcbiAgICBtYWduaXR1ZGUgKiBNYXRoLnNpbihhbmdsZSlcclxuICApO1xyXG59XHJcblxyXG5cclxuY2xhc3MgVmVjdG9yIHtcclxuICBjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDApIHtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGFuZ2xlKCkge1xyXG4gICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy55LCB0aGlzLngpO1xyXG4gIH1cclxuXHJcbiAgcm90YXRlKGFuZ2xlKSB7XHJcbiAgICBjb25zdCBvbGRYID0gdGhpcy54O1xyXG5cclxuICAgIHRoaXMueCA9IHRoaXMueCAqIE1hdGguY29zKGFuZ2xlKSAtIHRoaXMueSAqIE1hdGguc2luKGFuZ2xlKTtcclxuICAgIHRoaXMueSA9IHRoaXMueSAqIE1hdGguY29zKGFuZ2xlKSArIG9sZFggKiBNYXRoLnNpbihhbmdsZSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBhZGQoeyB4LCB5IH0pIHtcclxuICAgIHRoaXMueCArPSB4O1xyXG4gICAgdGhpcy55ICs9IHk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBzdWJ0cmFjdCh7IHgsIHkgfSkge1xyXG4gICAgdGhpcy54IC09IHg7XHJcbiAgICB0aGlzLnkgLT0geTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHNjYWxlKHNpemUpIHtcclxuICAgIHRoaXMueCAqPSBzaXplO1xyXG4gICAgdGhpcy55ICo9IHNpemU7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBnZXQgY29weSgpIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMueCwgdGhpcy55KTtcclxuICB9XHJcblxyXG4gIGdldCBsZW5ndGgoKSB7XHJcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSk7XHJcbiAgfVxyXG5cclxuICBkaXN0YW5jZSh2ZWN0b3IpIHtcclxuICAgIHJldHVybiB0aGlzLmNvcHlcclxuICAgICAgLnN1YnRyYWN0KHZlY3RvcilcclxuICAgICAgLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIHNjYWxlVG8oc2l6ZSkge1xyXG4gICAgY29uc3QgbGVuID0gdGhpcy5sZW5ndGggfHwgMTtcclxuICAgIHRoaXMuc2NhbGUoc2l6ZSAvIGxlbik7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92ZWN0b3IuanMiLCJpbXBvcnQgeyBwb2xhciB9IGZyb20gJ3ZlY3Rvcic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmFuZ2Uoc2l6ZSA9IDApIHtcclxuICByZXR1cm4gQXJyYXkuZnJvbShBcnJheShzaXplKS5rZXlzKCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tKG1heCwgbWluKSB7XHJcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbVBvc2l0aW9uKHNpemUpIHtcclxuICByZXR1cm4gcG9sYXIocmFuZG9tKDAsIE1hdGguUEkgKiAyKSwgcmFuZG9tKDAsIHNpemUpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFyZ01pbihlbGVtZW50cywgaGFuZGxlciA9IHggPT4geCkge1xyXG4gIGNvbnN0IG1hcHBlZEVsZW1lbnRzID0gZWxlbWVudHMubWFwKGhhbmRsZXIpO1xyXG4gIGxldCBtaW5JZCA9IC0xO1xyXG5cclxuICBtYXBwZWRFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50LCBpZCkgPT5cclxuICAgIG1pbklkID0gbWFwcGVkRWxlbWVudHNbbWluSWRdIDwgZWxlbWVudCA/XHJcbiAgICBtaW5JZCA6IGlkXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIG1pbklkO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWF0aCA9IHtcclxuICBpbnRlcnNlY3Q6IHtcclxuICAgIGxpbmVDaXJjbGU6ICh7IHN0YXJ0LCBlbmQgfSwgeyByYWRpdXMsIHBvc2l0aW9uIH0pID0+IHtcclxuICAgICAgY29uc3QgeyB4OiBkeCwgeTogZHkgfSA9IHZlYyA9IHJheS5wb3NpdGlvbi5zdWJ0cmFjdChlbmQpO1xyXG4gICAgICBjb25zdCBkciA9IHZlYy5sZW5ndGg7XHJcbiAgICAgIGNvbnN0IGRldCA9IHBvc2l0aW9uLnggKiBlbmQueSAtIGVuZC54ICogcG9zaXRpb24ueTtcclxuICAgICAgY29uc3QgZGlzYyA9IHJhZGl1cyAqIHJhZGl1cyAqIGRyICogZHIgLSBkZXQgKiBkZXQ7XHJcbiAgICAgIGNvbnN0IGRpc2NSb290ID0gTWF0aC5zcXJ0KGRpc2MpO1xyXG5cclxuICAgICAgY29uc3QgeDEgPSAoZGV0ICogZHkgKyBNYXRoLnNpZ24oZHkpICogZHggKiBkaXNjUm9vdCkgLyAoZHIgKiBkcik7XHJcbiAgICAgIGNvbnN0IHgyID0gKGRldCAqIGR5IC0gTWF0aC5zaWduKGR5KSAqIGR4ICogZGlzY1Jvb3QpIC8gKGRyICogZHIpO1xyXG5cclxuICAgICAgY29uc3QgeTEgPSAoLWRldCAqIGR4ICsgTWF0aC5hYnMoZHkpICogZGlzY1Jvb3QpIC8gKGRyICogZHIpO1xyXG4gICAgICBjb25zdCB5MiA9ICgtZGV0ICogZHggLSBNYXRoLmFicyhkeSkgKiBkaXNjUm9vdCkgLyAoZHIgKiBkcik7XHJcblxyXG4gICAgICBjb25zdCBwMSA9IHZlYyh4MSwgeTEpO1xyXG4gICAgICBjb25zdCBwMiA9IHZlYyh4MiwgeTIpO1xyXG4gICAgICBjb25zdCBtaW5MZW5JZCA9IGFyZ01pbihbcDEsIHAyXSwgdmVjdG9yID0+IHZlY3Rvci5sZW5ndGgpO1xyXG4gICAgICBjb25zdCBtaW5MZW5QID0gW3AxLCBwMl1bbWluTGVuSWRdO1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB2YWxpZDogZGlzYyA+PSAwLFxyXG4gICAgICAgIGRpc3RhbmNlOiBtaW5MZW5QLmxlbmd0aCxcclxuICAgICAgICBpbnRlcnNlY3Rpb246IG1pbkxlblAsXHJcbiAgICAgICAgZWxlbWVudFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMuanMiLCJpbXBvcnQgeyB2ZWMgfSBmcm9tICd2ZWN0b3InO1xyXG5pbXBvcnQgeyByYW5nZSwgcmFuZG9tLCByYW5kb21Qb3NpdGlvbiB9IGZyb20gJ3V0aWxzJztcclxuaW1wb3J0IHsgRW5naW5lIH0gZnJvbSAnZW5naW5lJztcclxuaW1wb3J0IHsgQ2FudmFzUmVuZGVyZXIgfSBmcm9tICdyZW5kZXJlcic7XHJcbmltcG9ydCB7IFNuYWtlIH0gZnJvbSAnc25ha2UnO1xyXG5pbXBvcnQgeyBTaWdodCwgT2NjaXBpdGFsTG9iZSwgTmF2aWdhdG9yIH0gZnJvbSAnbmVydm91cy1zeXN0ZW0nO1xyXG5cclxuXHJcbmNvbnN0IFsgd2lkdGgsIGhlaWdodCBdID0gWyB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0IF07XHJcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcclxuY2FudmFzLndpZHRoID0gd2lkdGg7XHJcbmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuY3R4LnNjYWxlKDEsIC0xKTtcclxuY3R4LnRyYW5zbGF0ZSh3aWR0aCAvIDIsIC1oZWlnaHQgLyAyKTtcclxuXHJcbmZ1bmN0aW9uIGFpU25ha2Uoc2l6ZSwgcG9zaXRpb24sIGVudmlyb25tZW50KSB7XHJcbiAgcmV0dXJuIG5ldyBTbmFrZSh7XHJcbiAgICBzaXplLCBjb2xvcjogJ3JnYmEoMjUwLCAxMCwgMTAwLCAxKScsXHJcbiAgICB0YWlsU2l6ZTogMCwgcG9zaXRpb24sIHZlbG9jaXR5OiB2ZWMoMCwgMSlcclxuICB9KVxyXG4gIC5wbHVnKG5ldyBTaWdodChlbnZpcm9ubWVudCksIG5ldyBPY2NpcGl0YWxMb2JlKCksIG5ldyBOYXZpZ2F0b3IoKSk7XHJcbn1cclxuXHJcbmNvbnN0IGVuZ2luZSA9IG5ldyBFbmdpbmUoXHJcbiAgbmV3IENhbnZhc1JlbmRlcmVyKGN0eCwgeyB3aWR0aCwgaGVpZ2h0IH0pXHJcbik7XHJcblxyXG5yYW5nZSgxMCkuZm9yRWFjaCgoKSA9PiBlbmdpbmUuYWRkVG9TY2VuZShcclxuICBhaVNuYWtlKHJhbmRvbSgwLCAxNSksIHJhbmRvbVBvc2l0aW9uKDgwMCksIGVuZ2luZS5zY2VuZSlcclxuKSk7XHJcblxyXG4oZnVuY3Rpb24gYW5pbWF0aW9uKCkge1xyXG4gIGVuZ2luZVxyXG4gICAgLmNsZWFyKClcclxuICAgIC51cGRhdGUoKVxyXG4gICAgLnJlbmRlcigpO1xyXG5cclxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XHJcbn0pKCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2luZGV4LmpzIiwiZXhwb3J0IGNsYXNzIEVuZ2luZSB7XHJcbiAgY29uc3RydWN0b3IocmVuZGVyZXIpIHtcclxuICAgIHRoaXMuc2NlbmUgPSBbXTtcclxuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcclxuICB9XHJcblxyXG4gIGFkZFRvU2NlbmUob2JqZWN0KSB7XHJcbiAgICB0aGlzLnNjZW5lLnB1c2gob2JqZWN0KTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgdGhpcy5zY2VuZS5mb3JFYWNoKG9iamVjdCA9PiBvYmplY3QudXBkYXRlICYmIG9iamVjdC51cGRhdGUoKSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHRoaXMuc2NlbmUuZm9yRWFjaChvYmplY3QgPT5cclxuICAgICAgb2JqZWN0LnJlbmRlciAmJiBvYmplY3QucmVuZGVyKHRoaXMucmVuZGVyZXIpKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgY2xlYXIoKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmNsZWFyKCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS5qcyIsImltcG9ydCB7IHZlYyB9IGZyb20gJ3ZlY3Rvcic7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENhbnZhc1JlbmRlcmVyIHtcclxuICBjb25zdHJ1Y3RvcihjdHgsIHsgd2lkdGggPSA1MCwgaGVpZ2h0ID0gNTAgfSA9IHt9KSB7XHJcbiAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgIHRoaXMuY2FudmFzU2l6ZSA9IHsgd2lkdGgsIGhlaWdodCB9O1xyXG4gIH1cclxuXHJcbiAgY2lyY2xlKHsgeCA9IDAsIHkgPSAwLCByYWRpdXMgPSA1IH0gPSB7fSwgeyBjb2xvciA9ICdyZWQnIH0gPSB7fSkge1xyXG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgIHRoaXMuY3R4LmFyYyh4LCB5LCByYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xyXG4gIH1cclxuXHJcbiAgY2xlYXIoKSB7XHJcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoXHJcbiAgICAgIC10aGlzLmNhbnZhc1NpemUud2lkdGggLyAyLFxyXG4gICAgICAtdGhpcy5jYW52YXNTaXplLmhlaWdodCAvIDIsXHJcbiAgICAgIHRoaXMuY2FudmFzU2l6ZS53aWR0aCxcclxuICAgICAgdGhpcy5jYW52YXNTaXplLmhlaWdodFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJheSh7XHJcbiAgICBwb3NpdGlvbiA9IHZlYygpLFxyXG4gICAgZGlyZWN0aW9uID0gdmVjKClcclxuICB9ID0ge30sIHsgY29sb3IgfSA9IHt9KSB7XHJcbiAgICBjb25zdCBsaW5lRW5kID0gcG9zaXRpb24uY29weS5hZGQoZGlyZWN0aW9uKTtcclxuXHJcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgdGhpcy5jdHgubW92ZVRvKHBvc2l0aW9uLngsIHBvc2l0aW9uLnkpO1xyXG4gICAgdGhpcy5jdHgubGluZVRvKGxpbmVFbmQueCwgbGluZUVuZC55KTtcclxuICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG4gIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXJlci5qcyIsImltcG9ydCB7IHJhbmdlIH0gZnJvbSAndXRpbHMnO1xyXG5pbXBvcnQgeyBDcmVhdHVyZSB9IGZyb20gJ2NyZWF0dXJlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBGb29kIGV4dGVuZHMgQ3JlYXR1cmUge1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNuYWtlIGV4dGVuZHMgQ3JlYXR1cmUge1xyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgc3VwZXIoY29uZmlnKTtcclxuICAgIHRoaXMudGFpbFNpemUgPSBjb25maWcudGFpbFNpemU7XHJcbiAgICB0aGlzLnRhaWwgPSByYW5nZSh0aGlzLnRhaWxTaXplKS5tYXAoaWQgPT4gbmV3IENyZWF0dXJlKHtcclxuICAgICAgcG9zaXRpb246IGNvbmZpZy5wb3NpdGlvbi5jb3B5LFxyXG4gICAgICBzaXplOiBjb25maWcuc2l6ZSxcclxuICAgICAgY29sb3I6IGNvbmZpZy5jb2xvclxyXG4gICAgfSkpO1xyXG5cclxuICAgIHRoaXMudGFpbC5wdXNoKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgc3VwZXIudXBkYXRlKCk7XHJcbiAgICBmb3IgKGxldCBpID0gdGhpcy50YWlsLmxlbmd0aCAtIDE7aSA+PSAxO2ktLSkge1xyXG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLnRhaWxbaV0ucG9zaXRpb25cclxuICAgICAgICAuY29weS5zdWJ0cmFjdCh0aGlzLnRhaWxbaSAtIDFdLnBvc2l0aW9uKTtcclxuXHJcbiAgICAgIHRoaXMudGFpbFtpIC0gMV0ucG9zaXRpb24uYWRkKGRpcmVjdGlvblxyXG4gICAgICAgIC5zY2FsZVRvKGRpcmVjdGlvbi5sZW5ndGggLSB0aGlzLnNpemUgKiAyKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIocmVuZGVyZXIpIHtcclxuICAgIHN1cGVyLnJlbmRlcihyZW5kZXJlcik7XHJcbiAgICBmb3IgKGxldCBpID0gMDtpIDwgdGhpcy50YWlsLmxlbmd0aCAtIDE7aSsrKSB7XHJcbiAgICAgIHRoaXMudGFpbFtpXS5yZW5kZXIocmVuZGVyZXIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc25ha2UuanMiLCJpbXBvcnQgeyB2ZWMgfSBmcm9tICd2ZWN0b3InO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDcmVhdHVyZSB7XHJcbiAgY29uc3RydWN0b3Ioe1xyXG4gICAgcG9zaXRpb24sIHNpemUsXHJcbiAgICBjb2xvciwgdmVsb2NpdHkgPSB2ZWMoKVxyXG4gIH0pIHtcclxuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICB0aGlzLnZlbG9jaXR5ID0gdmVsb2NpdHk7XHJcbiAgICB0aGlzLnBsdWdpbnMgPSBbXTtcclxuICAgIHRoaXMucGx1ZyhuZXcgTW92ZW1lbnQoKSk7XHJcbiAgfVxyXG5cclxuICBzdGVlcihhbmdsZSkge1xyXG4gICAgdGhpcy52ZWxvY2l0eS5yb3RhdGUoYW5nbGUpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKHJlbmRlcmVyKSB7XHJcbiAgICByZW5kZXJlci5jaXJjbGUoe1xyXG4gICAgICB4OiB0aGlzLnBvc2l0aW9uLngsXHJcbiAgICAgIHk6IHRoaXMucG9zaXRpb24ueSxcclxuICAgICAgcmFkaXVzOiB0aGlzLnNpemVcclxuICAgIH0sIHsgY29sb3I6IHRoaXMuY29sb3IgfSk7XHJcblxyXG4gICAgdGhpcy5wbHVnaW5zLmZvckVhY2gocGx1Z2luID0+XHJcbiAgICAgIHBsdWdpbi5mb3JFYWNoKHBhcnQgPT5cclxuICAgICAgICBwYXJ0LnJlbmRlciAmJiBwYXJ0LnJlbmRlcihyZW5kZXJlcikpKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIGxldCB2YWx1ZSA9IHRoaXM7XHJcbiAgICB0aGlzLnBsdWdpbnMuZm9yRWFjaChwbHVnaW4gPT5cclxuICAgICAgcGx1Z2luLmZvckVhY2gocGFydCA9PlxyXG4gICAgICAgIHZhbHVlID0gcGFydC5jYWxsKHRoaXMsIHZhbHVlKSkpO1xyXG4gIH1cclxuXHJcbiAgcGx1ZyguLi5wbHVnaW4pIHtcclxuICAgIHRoaXMucGx1Z2lucy5wdXNoKHBsdWdpbik7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIE1vdmVtZW50IHtcclxuICBjYWxsKHNlbGYpIHtcclxuICAgIHNlbGYucG9zaXRpb24uYWRkKHNlbGYudmVsb2NpdHkpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY3JlYXR1cmUuanMiLCJpbXBvcnQgeyB2ZWMgfSBmcm9tICd2ZWN0b3InO1xyXG5pbXBvcnQgeyByYW5nZSwgYXJnTWluLCBtYXRoIH0gZnJvbSAndXRpbHMnO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBTaWdodCB7XHJcbiAgY29uc3RydWN0b3Ioe1xyXG4gICAgZm92ID0gTWF0aC5QSSAvIDIsXHJcbiAgICByYXlDb3VudCA9IDgsXHJcbiAgICBzdHJlbmd0aCA9IDI1MCxcclxuICAgIGVudmlyb25tZW50ID0gW11cclxuICB9ID0ge30pIHtcclxuICAgIHRoaXMuc3RyZW5ndGggPSBzdHJlbmd0aDtcclxuICAgIHRoaXMucmF5QW5nbGVzID0gcmFuZ2UocmF5Q291bnQpXHJcbiAgICAgIC5tYXAocmF5SWQgPT4gcmF5SWQgLyAocmF5Q291bnQgLSAxKSAqIGZvdiAtIGZvdiAvIDIpO1xyXG4gICAgdGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0U2lnaHREaXJlY3Rpb25zKHZlbG9jaXR5KSB7XHJcbiAgICByZXR1cm4gdGhpcy5yYXlBbmdsZXNcclxuICAgICAgLm1hcChyYXlBbmdsZSA9PiB2ZWxvY2l0eS5jb3B5LnJvdGF0ZShyYXlBbmdsZSkpO1xyXG4gIH1cclxuXHJcbiAgaW50ZXJzZWN0KHJheSwgZWxlbWVudCkge1xyXG4gICAgcmV0dXJuIG1hdGguaW50ZXJzZWN0LmxpbmVDaXJjbGUoe1xyXG4gICAgICBzdGFydDogcmF5LnBvc2l0aW9uLFxyXG4gICAgICBlbmQ6IHJheS5wb3NpdGlvbi5jb3B5LmFkZChyYXkuZGlyZWN0aW9uLnNjYWxlVG8odGhpcy5zdHJlbmd0aCkpXHJcbiAgICB9LCB7XHJcbiAgICAgIHBvc2l0aW9uOiBlbGVtZW50LnBvc2l0aW9uLFxyXG4gICAgICByYWRpdXM6IGVsZW1lbnQuc2l6ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjYWxsKHNlbGYpIHtcclxuICAgIHRoaXMucmF5cyA9IFtdO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmdldFNpZ2h0RGlyZWN0aW9ucyhzZWxmLnZlbG9jaXR5KVxyXG4gICAgICAubWFwKGRpcmVjdGlvbiA9PiB7XHJcbiAgICAgICAgdGhpcy5yYXlzLnB1c2goe1xyXG4gICAgICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb24uc2NhbGVUbyh0aGlzLnN0cmVuZ3RoKSxcclxuICAgICAgICAgIHBvc2l0aW9uOiBzZWxmLnBvc2l0aW9uXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGludGVyc2VjdGlvbnMgPSB0aGlzLmVudmlyb25tZW50XHJcbiAgICAgICAgICAubWFwKGVsZW1lbnQgPT4gdGhpcy5pbnRlcnNlY3RzKHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHNlbGYucG9zaXRpb24sXHJcbiAgICAgICAgICAgIGRpcmVjdGlvblxyXG4gICAgICAgICAgfSwgZWxlbWVudCkpXHJcbiAgICAgICAgICAuZmlsdGVyKGludGVyc2VjdGlvbiA9PiBpbnRlcnNlY3Rpb24udmFsaWQpO1xyXG5cclxuICAgICAgICByZXR1cm4gaW50ZXJzZWN0aW9uc1thcmdNaW4oXHJcbiAgICAgICAgICBpbnRlcnNlY3Rpb25zLCAoeyBkaXN0YW5jZSB9KSA9PiBkaXN0YW5jZVxyXG4gICAgICAgICldO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcihyZW5kZXJlcikge1xyXG4gICAgdGhpcy5yYXlzLmZvckVhY2gocmF5ID0+IHJlbmRlcmVyLnJheShyYXkpKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBPY2NpcGl0YWxMb2JlIHtcclxuICBjb25zdHJ1Y3RvcihhcmNoaXRlY3R1cmUpIHtcclxuICAgIHRoaXMuYXJjaGl0ZWN0dXJlID0gYXJjaGl0ZWN0dXJlO1xyXG4gIH1cclxuXHJcbiAgY2FsbChzZWxmLCBzaWdodCkge1xyXG4gICAgLy8gcmV0dXJuIHRoaXMuZmVlZEZvcndhcmQoc2lnaHQpO1xyXG4gICAgcmV0dXJuIChNYXRoLnJhbmRvbSgpIC0gMC40KSAvIDEwO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE5hdmlnYXRvciB7XHJcbiAgY2FsbChzZWxmLCBkaXJlY3Rpb24pIHtcclxuICAgIHNlbGYuc3RlZXIoZGlyZWN0aW9uKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL25lcnZvdXMtc3lzdGVtLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==