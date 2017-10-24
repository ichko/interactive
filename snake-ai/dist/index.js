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

var renderer = new _renderer.CanvasRenderer(ctx, { width: width, height: height });
var engine = new _engine.Engine(renderer);
var snake = new _snake.Snake({
  size: 5,
  color: 'rgba(250, 10, 100, 1)',
  tailSize: 50,
  position: (0, _vector.vec)(10, 10),
  velocity: (0, _vector.vec)(1, 1)
}).plug(new _nervousSystem.Sight(), new _nervousSystem.OccipitalLobe(), new _nervousSystem.Navigator());

engine.addToScene(snake);

(function animation() {
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
exports.Snake = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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
        position: config.position.copy,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWM0OWFmMWYyNWI1YTFkZDM4MTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9zbmFrZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NyZWF0dXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9uZXJ2b3VzLXN5c3RlbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXIuanMiXSwibmFtZXMiOlsidmVjIiwicG9sYXIiLCJ4IiwieSIsIlZlY3RvciIsImFuZ2xlIiwibWFnbml0dWRlIiwiTWF0aCIsImNvcyIsInNpbiIsIm9sZFgiLCJzaXplIiwidmVjdG9yIiwiY29weSIsInN1YnRyYWN0IiwibGVuZ3RoIiwibGVuIiwic2NhbGUiLCJhdGFuMiIsInNxcnQiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJ3aWR0aCIsImhlaWdodCIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwidHJhbnNsYXRlIiwicmVuZGVyZXIiLCJlbmdpbmUiLCJzbmFrZSIsImNvbG9yIiwidGFpbFNpemUiLCJwb3NpdGlvbiIsInZlbG9jaXR5IiwicGx1ZyIsImFkZFRvU2NlbmUiLCJhbmltYXRpb24iLCJjbGVhciIsInVwZGF0ZSIsInJlbmRlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIkVuZ2luZSIsInNjZW5lIiwib2JqZWN0IiwicHVzaCIsImZvckVhY2giLCJTbmFrZSIsImNvbmZpZyIsInRhaWwiLCJtYXAiLCJpIiwiZGlyZWN0aW9uIiwiYWRkIiwic2NhbGVUbyIsInJhbmdlIiwiYXJnTWluIiwiQXJyYXkiLCJmcm9tIiwia2V5cyIsImVsZW1lbnRzIiwiaGFuZGxlciIsIm1hcHBlZEVsZW1lbnRzIiwibWluSWQiLCJlbGVtZW50IiwiaWQiLCJDcmVhdHVyZSIsInBsdWdpbnMiLCJNb3ZlbWVudCIsInJvdGF0ZSIsImNpcmNsZSIsInJhZGl1cyIsInBsdWdpbiIsInBhcnQiLCJ2YWx1ZSIsImNhbGwiLCJzZWxmIiwiU2lnaHQiLCJmb3YiLCJQSSIsInJheUNvdW50Iiwic3RyZW5ndGgiLCJlbnZpcm9ubWVudCIsInJheUlkIiwicmF5QW5nbGUiLCJyYXkiLCJyIiwiZXllIiwiZHgiLCJkeSIsImRyIiwiZGV0IiwiZGlzYyIsImRpc2NSb290IiwieDEiLCJzaWduIiwieDIiLCJ5MSIsImFicyIsInkyIiwicDEiLCJwMiIsIm1pbkxlbklkIiwibWluTGVuUCIsInZhbGlkIiwiZGlzdGFuY2UiLCJpbnRlcnNlY3Rpb24iLCJnZXRTaWdodERpcmVjdGlvbnMiLCJpbnRlcnNlY3Rpb25zIiwiaW50ZXJzZWN0cyIsImZpbHRlciIsIk9jY2lwaXRhbExvYmUiLCJhcmNoaXRlY3R1cmUiLCJzaWdodCIsInJhbmRvbSIsIk5hdmlnYXRvciIsInN0ZWVyIiwiQ2FudmFzUmVuZGVyZXIiLCJjYW52YXNTaXplIiwiYmVnaW5QYXRoIiwiZmlsbFN0eWxlIiwiYXJjIiwiZmlsbCIsImNsb3NlUGF0aCIsImNsZWFyUmVjdCIsIm9yaWVudGF0aW9uIiwibGluZUVuZCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVB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LElBQVQ7QUFDQSxXQUFLakcsR0FBTCxDQUFTa0csU0FBVDtBQUNEOzs7NEJBRU87QUFDTixXQUFLbEcsR0FBTCxDQUFTbUcsU0FBVCxDQUNFLENBQUMsS0FBS04sVUFBTCxDQUFnQmxHLEtBQWpCLEdBQXlCLENBRDNCLEVBRUUsQ0FBQyxLQUFLa0csVUFBTCxDQUFnQmpHLE1BQWpCLEdBQTBCLENBRjVCLEVBR0UsS0FBS2lHLFVBQUwsQ0FBZ0JsRyxLQUhsQixFQUlFLEtBQUtrRyxVQUFMLENBQWdCakcsTUFKbEI7QUFNRDs7OzhCQUVTSSxHLGdCQUFtRDtBQUFBLFVBQTVDUSxRQUE0QyxTQUE1Q0EsUUFBNEM7QUFBQSxVQUFsQzRGLFdBQWtDLFNBQWxDQSxXQUFrQztBQUFBLDhCQUFqQjlGLEtBQWlCO0FBQUEsVUFBakJBLEtBQWlCLCtCQUFULEtBQVM7O0FBQzNELFVBQU0rRixVQUFVN0YsU0FBU3ZCLElBQVQsQ0FBYzJDLEdBQWQsQ0FBa0J3RSxXQUFsQixDQUFoQjs7QUFFQXBHLFVBQUkrRixTQUFKLEdBQWdCekYsS0FBaEI7QUFDQU4sVUFBSThGLFNBQUo7QUFDQTlGLFVBQUlzRyxNQUFKLENBQVc5RixTQUFTbEMsQ0FBcEIsRUFBdUJrQyxTQUFTakMsQ0FBaEM7QUFDQXlCLFVBQUl1RyxNQUFKLENBQVdGLFFBQVEvSCxDQUFuQixFQUFzQitILFFBQVE5SCxDQUE5QjtBQUNBeUIsVUFBSXdHLE1BQUo7QUFDRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDVjNDlhZjFmMjViNWExZGQzODE5IiwiZXhwb3J0IGZ1bmN0aW9uIHZlYyh4LCB5KSB7XG4gIHJldHVybiBuZXcgVmVjdG9yKHgsIHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9sYXIoYW5nbGUsIG1hZ25pdHVkZSA9IDEpIHtcbiAgcmV0dXJuIG5ldyBWZWN0b3IoXG4gICAgbWFnbml0dWRlICogTWF0aC5jb3MoYW5nbGUpLFxuICAgIG1hZ25pdHVkZSAqIE1hdGguc2luKGFuZ2xlKVxuICApO1xufVxuXG5cbmNsYXNzIFZlY3RvciB7XG4gIGNvbnN0cnVjdG9yKHggPSAwLCB5ID0gMCkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuXG4gIGdldCBhbmdsZSgpIHtcbiAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLnksIHRoaXMueCk7XG4gIH1cblxuICByb3RhdGUoYW5nbGUpIHtcbiAgICBjb25zdCBvbGRYID0gdGhpcy54O1xuXG4gICAgdGhpcy54ID0gdGhpcy54ICogTWF0aC5jb3MoYW5nbGUpIC0gdGhpcy55ICogTWF0aC5zaW4oYW5nbGUpO1xuICAgIHRoaXMueSA9IHRoaXMueSAqIE1hdGguY29zKGFuZ2xlKSArIG9sZFggKiBNYXRoLnNpbihhbmdsZSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZCh7IHgsIHkgfSkge1xuICAgIHRoaXMueCArPSB4O1xuICAgIHRoaXMueSArPSB5O1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdWJ0cmFjdCh7IHgsIHkgfSkge1xuICAgIHRoaXMueCAtPSB4O1xuICAgIHRoaXMueSAtPSB5O1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzY2FsZShzaXplKSB7XG4gICAgdGhpcy54ICo9IHNpemU7XG4gICAgdGhpcy55ICo9IHNpemU7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldCBjb3B5KCkge1xuICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMueCwgdGhpcy55KTtcbiAgfVxuXG4gIGdldCBsZW5ndGgoKSB7XG4gICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkpO1xuICB9XG5cbiAgZGlzdGFuY2UodmVjdG9yKSB7XG4gICAgcmV0dXJuIHRoaXMuY29weVxuICAgICAgLnN1YnRyYWN0KHZlY3RvcilcbiAgICAgIC5sZW5ndGg7XG4gIH1cblxuICBzY2FsZVRvKHNpemUpIHtcbiAgICBjb25zdCBsZW4gPSB0aGlzLmxlbmd0aCB8fCAxO1xuICAgIHRoaXMuc2NhbGUoc2l6ZSAvIGxlbik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZlY3Rvci5qcyIsImltcG9ydCB7IHZlYyB9IGZyb20gJ3ZlY3Rvcic7XG5pbXBvcnQgeyBFbmdpbmUgfSBmcm9tICdlbmdpbmUnO1xuaW1wb3J0IHsgQ2FudmFzUmVuZGVyZXIgfSBmcm9tICdyZW5kZXJlcic7XG5pbXBvcnQgeyBTbmFrZSB9IGZyb20gJ3NuYWtlJztcbmltcG9ydCB7IFNpZ2h0LCBPY2NpcGl0YWxMb2JlLCBOYXZpZ2F0b3IgfSBmcm9tICduZXJ2b3VzLXN5c3RlbSc7XG5cblxuY29uc3QgWyB3aWR0aCwgaGVpZ2h0IF0gPSBbIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQgXTtcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG5jdHguc2NhbGUoMSwgLTEpO1xuY3R4LnRyYW5zbGF0ZSh3aWR0aCAvIDIsIC1oZWlnaHQgLyAyKTtcblxuXG5jb25zdCByZW5kZXJlciA9IG5ldyBDYW52YXNSZW5kZXJlcihjdHgsIHsgd2lkdGgsIGhlaWdodCB9KTtcbmNvbnN0IGVuZ2luZSA9IG5ldyBFbmdpbmUocmVuZGVyZXIpO1xuY29uc3Qgc25ha2UgPSBuZXcgU25ha2Uoe1xuICAgIHNpemU6IDUsXG4gICAgY29sb3I6ICdyZ2JhKDI1MCwgMTAsIDEwMCwgMSknLFxuICAgIHRhaWxTaXplOiA1MCxcbiAgICBwb3NpdGlvbjogdmVjKDEwLCAxMCksXG4gICAgdmVsb2NpdHk6IHZlYygxLCAxKVxuICB9KVxuICAucGx1ZyhcbiAgICBuZXcgU2lnaHQoKSxcbiAgICBuZXcgT2NjaXBpdGFsTG9iZSgpLFxuICAgIG5ldyBOYXZpZ2F0b3IoKVxuICApO1xuXG5lbmdpbmUuYWRkVG9TY2VuZShzbmFrZSk7XG5cbihmdW5jdGlvbiBhbmltYXRpb24oKSB7XG4gIGVuZ2luZVxuICAgIC5jbGVhcihjdHgpXG4gICAgLnVwZGF0ZSgpXG4gICAgLnJlbmRlcihjdHgpO1xuXG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbn0pKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9pbmRleC5qcyIsImV4cG9ydCBjbGFzcyBFbmdpbmUge1xuICBjb25zdHJ1Y3RvcihyZW5kZXJlcikge1xuICAgIHRoaXMuc2NlbmUgPSBbXTtcbiAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XG4gIH1cblxuICBhZGRUb1NjZW5lKG9iamVjdCkge1xuICAgIHRoaXMuc2NlbmUucHVzaChvYmplY3QpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuc2NlbmUuZm9yRWFjaChvYmplY3QgPT4gb2JqZWN0LnVwZGF0ZSAmJiBvYmplY3QudXBkYXRlKCkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuc2NlbmUuZm9yRWFjaChvYmplY3QgPT5cbiAgICAgIG9iamVjdC5yZW5kZXIgJiYgb2JqZWN0LnJlbmRlcih0aGlzLnJlbmRlcmVyKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmNsZWFyKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUuanMiLCJpbXBvcnQgeyByYW5nZSB9IGZyb20gJ3V0aWxzJztcbmltcG9ydCB7IENyZWF0dXJlIH0gZnJvbSAnY3JlYXR1cmUnO1xuXG5leHBvcnQgY2xhc3MgU25ha2UgZXh0ZW5kcyBDcmVhdHVyZSB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gICAgdGhpcy50YWlsU2l6ZSA9IGNvbmZpZy50YWlsU2l6ZTtcbiAgICB0aGlzLnRhaWwgPSByYW5nZSh0aGlzLnRhaWxTaXplKS5tYXAoaWQgPT4gbmV3IENyZWF0dXJlKHtcbiAgICAgIHBvc2l0aW9uOiBjb25maWcucG9zaXRpb24uY29weSxcbiAgICAgIHNpemU6IGNvbmZpZy5zaXplLFxuICAgICAgY29sb3I6IGNvbmZpZy5jb2xvclxuICAgIH0pKTtcblxuICAgIHRoaXMudGFpbC5wdXNoKHRoaXMpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHN1cGVyLnVwZGF0ZSgpO1xuICAgIGZvciAobGV0IGkgPSB0aGlzLnRhaWwubGVuZ3RoIC0gMTtpID49IDE7aS0tKSB7XG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLnRhaWxbaV0ucG9zaXRpb25cbiAgICAgICAgLmNvcHkuc3VidHJhY3QodGhpcy50YWlsW2kgLSAxXS5wb3NpdGlvbik7XG5cbiAgICAgIHRoaXMudGFpbFtpIC0gMV0ucG9zaXRpb24uYWRkKGRpcmVjdGlvblxuICAgICAgICAuc2NhbGVUbyhkaXJlY3Rpb24ubGVuZ3RoIC0gdGhpcy5zaXplICogMikpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcihyZW5kZXJlcikge1xuICAgIHN1cGVyLnJlbmRlcihyZW5kZXJlcik7XG4gICAgZm9yIChsZXQgaSA9IDA7aSA8IHRoaXMudGFpbC5sZW5ndGggLSAxO2krKykge1xuICAgICAgdGhpcy50YWlsW2ldLnJlbmRlcihyZW5kZXJlcik7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc25ha2UuanMiLCJleHBvcnQgZnVuY3Rpb24gcmFuZ2Uoc2l6ZSA9IDApIHtcbiAgcmV0dXJuIEFycmF5LmZyb20oQXJyYXkoc2l6ZSkua2V5cygpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFyZ01pbihlbGVtZW50cywgaGFuZGxlciA9IHggPT4geCkge1xuICBjb25zdCBtYXBwZWRFbGVtZW50cyA9IGVsZW1lbnRzLm1hcChoYW5kbGVyKTtcbiAgbGV0IG1pbklkID0gLTE7XG5cbiAgbWFwcGVkRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCwgaWQpID0+XG4gICAgbWluSWQgPSBtYXBwZWRFbGVtZW50c1ttaW5JZF0gPCBlbGVtZW50ID9cbiAgICBtaW5JZCA6IGlkXG4gICk7XG5cbiAgcmV0dXJuIG1pbklkO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzLmpzIiwiaW1wb3J0IHsgdmVjIH0gZnJvbSAndmVjdG9yJztcblxuXG5leHBvcnQgY2xhc3MgQ3JlYXR1cmUge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgcG9zaXRpb24sIHNpemUsXG4gICAgY29sb3IsIHZlbG9jaXR5ID0gdmVjKClcbiAgfSkge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLnZlbG9jaXR5ID0gdmVsb2NpdHk7XG4gICAgdGhpcy5wbHVnaW5zID0gW107XG4gICAgdGhpcy5wbHVnKG5ldyBNb3ZlbWVudCgpKTtcbiAgfVxuXG4gIHN0ZWVyKGFuZ2xlKSB7XG4gICAgdGhpcy52ZWxvY2l0eS5yb3RhdGUoYW5nbGUpO1xuICB9XG5cbiAgcmVuZGVyKHJlbmRlcmVyKSB7XG4gICAgcmVuZGVyZXIuY2lyY2xlKHtcbiAgICAgIHg6IHRoaXMucG9zaXRpb24ueCxcbiAgICAgIHk6IHRoaXMucG9zaXRpb24ueSxcbiAgICAgIHJhZGl1czogdGhpcy5zaXplXG4gICAgfSwgeyBjb2xvcjogdGhpcy5jb2xvciB9KTtcblxuICAgIHRoaXMucGx1Z2lucy5mb3JFYWNoKHBsdWdpbiA9PlxuICAgICAgcGx1Z2luLmZvckVhY2gocGFydCA9PlxuICAgICAgICBwYXJ0LnJlbmRlciAmJiBwYXJ0LnJlbmRlcihyZW5kZXJlcikpKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBsZXQgdmFsdWUgPSB0aGlzO1xuICAgIHRoaXMucGx1Z2lucy5mb3JFYWNoKHBsdWdpbiA9PlxuICAgICAgcGx1Z2luLmZvckVhY2gocGFydCA9PlxuICAgICAgICB2YWx1ZSA9IHBhcnQuY2FsbCh0aGlzLCB2YWx1ZSkpKTtcbiAgfVxuXG4gIHBsdWcoLi4ucGx1Z2luKSB7XG4gICAgdGhpcy5wbHVnaW5zLnB1c2gocGx1Z2luKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5jbGFzcyBNb3ZlbWVudCB7XG4gIGNhbGwoc2VsZikge1xuICAgIHNlbGYucG9zaXRpb24uYWRkKHNlbGYudmVsb2NpdHkpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY3JlYXR1cmUuanMiLCJpbXBvcnQgeyB2ZWMgfSBmcm9tICd2ZWN0b3InO1xuaW1wb3J0IHsgcmFuZ2UsIGFyZ01pbiB9IGZyb20gJ3V0aWxzJztcblxuXG5leHBvcnQgY2xhc3MgU2lnaHQge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgZm92ID0gTWF0aC5QSSAvIDIsXG4gICAgcmF5Q291bnQgPSAxNixcbiAgICBzdHJlbmd0aCA9IDE1LFxuICAgIGVudmlyb25tZW50ID0gW11cbiAgfSA9IHt9KSB7XG4gICAgdGhpcy5mb3YgPSBmb3Y7XG4gICAgdGhpcy5yYXlDb3VudCA9IHJheUNvdW50O1xuICAgIHRoaXMuc3RyZW5ndGggPSBzdHJlbmd0aDtcbiAgICB0aGlzLmVudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XG4gIH1cblxuICBnZXRTaWdodERpcmVjdGlvbnModmVsb2NpdHkpIHtcbiAgICByZXR1cm4gcmFuZ2UodGhpcy5yYXlDb3VudClcbiAgICAgIC5tYXAocmF5SWQgPT4gcmF5SWQgLyAodGhpcy5yYXlDb3VudCAtIDEpICogdGhpcy5mb3YgLSB0aGlzLmZvdiAvIDIpXG4gICAgICAubWFwKHJheUFuZ2xlID0+IHZlbG9jaXR5LmNvcHkucm90YXRlKHJheUFuZ2xlKSk7XG4gIH1cblxuICBpbnRlcnNlY3QocmF5LCBlbGVtZW50KSB7XG4gICAgY29uc3QgciA9IGVsZW1lbnQuc2l6ZTtcbiAgICBjb25zdCBleWUgPSByYXkucG9zaXRpb24uY29weS5hZGQocmF5LmRpcmVjdGlvbi5zY2FsZVRvKHRoaXMuc3RyZW5ndGgpKTtcbiAgICBjb25zdCB7IHg6IGR4LCB5OiBkeSB9ID0gcmF5LnBvc2l0aW9uLnN1YnRyYWN0KGV5ZSk7XG4gICAgY29uc3QgZHIgPSBleWUubGVuZ3RoO1xuICAgIGNvbnN0IGRldCA9IGVsZW1lbnQucG9zaXRpb24ueCAqIGV5ZS55IC0gZXllLnggKiBlbGVtZW50LnBvc2l0aW9uLnk7XG4gICAgY29uc3QgZGlzYyA9IHIgKiByICogZHIgKiBkciAtIGRldCAqIGRldDtcbiAgICBjb25zdCBkaXNjUm9vdCA9IE1hdGguc3FydChkaXNjKTtcblxuICAgIGNvbnN0IHgxID0gKGRldCAqIGR5ICsgTWF0aC5zaWduKGR5KSAqIGR4ICogZGlzY1Jvb3QpIC8gKGRyICogZHIpO1xuICAgIGNvbnN0IHgyID0gKGRldCAqIGR5IC0gTWF0aC5zaWduKGR5KSAqIGR4ICogZGlzY1Jvb3QpIC8gKGRyICogZHIpO1xuXG4gICAgY29uc3QgeTEgPSAoLWRldCAqIGR4ICsgTWF0aC5hYnMoZHkpICogZGlzY1Jvb3QpIC8gKGRyICogZHIpO1xuICAgIGNvbnN0IHkyID0gKC1kZXQgKiBkeCAtIE1hdGguYWJzKGR5KSAqIGRpc2NSb290KSAvIChkciAqIGRyKTtcblxuICAgIGNvbnN0IHAxID0gdmVjKHgxLCB5MSk7XG4gICAgY29uc3QgcDIgPSB2ZWMoeDIsIHkyKTtcbiAgICBjb25zdCBtaW5MZW5JZCA9IGFyZ01pbihbcDEsIHAyXSwgdmVjdG9yID0+IHZlY3Rvci5sZW5ndGgpO1xuICAgIGNvbnN0IG1pbkxlblAgPSBbcDEsIHAyXVttaW5MZW5JZF07XG5cbiAgICByZXR1cm4ge1xuICAgICAgdmFsaWQ6IGRpc2MgPj0gMCxcbiAgICAgIGRpc3RhbmNlOiBtaW5MZW5QLmxlbmd0aCxcbiAgICAgIGludGVyc2VjdGlvbjogbWluTGVuUCxcbiAgICAgIGVsZW1lbnRcbiAgICB9O1xuICB9XG5cbiAgY2FsbChzZWxmKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U2lnaHREaXJlY3Rpb25zKHNlbGYudmVsb2NpdHkpXG4gICAgICAubWFwKGRpcmVjdGlvbiA9PiB7XG4gICAgICAgIGNvbnN0IGludGVyc2VjdGlvbnMgPSB0aGlzLmVudmlyb25tZW50XG4gICAgICAgICAgLm1hcChlbGVtZW50ID0+IHRoaXMuaW50ZXJzZWN0cyh7XG4gICAgICAgICAgICBwb3NpdGlvbjogc2VsZi5wb3NpdGlvbixcbiAgICAgICAgICAgIGRpcmVjdGlvblxuICAgICAgICAgIH0sIGVsZW1lbnQpKVxuICAgICAgICAgIC5maWx0ZXIoaW50ZXJzZWN0aW9uID0+IGludGVyc2VjdGlvbi52YWxpZCk7XG5cbiAgICAgICAgcmV0dXJuIGludGVyc2VjdGlvbnNbYXJnTWluKFxuICAgICAgICAgIGludGVyc2VjdGlvbnMsICh7IGRpc3RhbmNlIH0pID0+IGRpc3RhbmNlXG4gICAgICAgICldO1xuICAgICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE9jY2lwaXRhbExvYmUge1xuICBjb25zdHJ1Y3RvcihhcmNoaXRlY3R1cmUpIHtcbiAgICB0aGlzLmFyY2hpdGVjdHVyZSA9IGFyY2hpdGVjdHVyZTtcbiAgfVxuXG4gIGNhbGwoc2VsZiwgc2lnaHQpIHtcbiAgICAvLyByZXR1cm4gdGhpcy5mZWVkRm9yd2FyZChzaWdodCk7XG4gICAgcmV0dXJuIChNYXRoLnJhbmRvbSgpIC0gMC40KSAvIDEwO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOYXZpZ2F0b3Ige1xuICByZW5kZXIocmVuZGVyZXIpIHtcbiAgICAvLyBjdHguZmlsbFJlY3QoMCwwLDUwLDUwKTtcbiAgfVxuXG4gIGNhbGwoc2VsZiwgZGlyZWN0aW9uKSB7XG4gICAgc2VsZi5zdGVlcihkaXJlY3Rpb24pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbmVydm91cy1zeXN0ZW0uanMiLCJleHBvcnQgY2xhc3MgQ2FudmFzUmVuZGVyZXIge1xuICBjb25zdHJ1Y3RvcihjdHgsIHsgd2lkdGggPSA1MCwgaGVpZ2h0ID0gNTAgfSA9IHt9KSB7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5jYW52YXNTaXplID0geyB3aWR0aCwgaGVpZ2h0IH07XG4gIH1cblxuICBjaXJjbGUoeyB4ID0gMCwgeSA9IDAsIHJhZGl1cyA9IDUgfSA9IHt9LCB7IGNvbG9yID0gJ3JlZCcgfSA9IHt9KSB7XG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgdGhpcy5jdHguYXJjKHgsIHksIHJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdChcbiAgICAgIC10aGlzLmNhbnZhc1NpemUud2lkdGggLyAyLFxuICAgICAgLXRoaXMuY2FudmFzU2l6ZS5oZWlnaHQgLyAyLFxuICAgICAgdGhpcy5jYW52YXNTaXplLndpZHRoLFxuICAgICAgdGhpcy5jYW52YXNTaXplLmhlaWdodFxuICAgICk7XG4gIH1cblxuICByZW5kZXJSYXkoY3R4LCB7IHBvc2l0aW9uLCBvcmllbnRhdGlvbiB9LCB7IGNvbG9yID0gJ3JlZCcgfSkge1xuICAgIGNvbnN0IGxpbmVFbmQgPSBwb3NpdGlvbi5jb3B5LmFkZChvcmllbnRhdGlvbik7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8ocG9zaXRpb24ueCwgcG9zaXRpb24ueSk7XG4gICAgY3R4LmxpbmVUbyhsaW5lRW5kLngsIGxpbmVFbmQueSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlcmVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==