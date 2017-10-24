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

var engine = new _engine.Engine({ width: width, height: height });
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
exports.renderRay = renderRay;
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

function renderRay(ctx, _ref, _ref2) {
  var position = _ref.position,
      orientation = _ref.orientation;
  var _ref2$color = _ref2.color,
      color = _ref2$color === undefined ? 'red' : _ref2$color;

  var lineEnd = position.copy.add(orientation);

  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(position.x, position.y);
  ctx.lineTo(lineEnd.x, lineEnd.y);
  ctx.stroke();
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
      return this;
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
    value: function render(ctx) {
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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTRkOTZiMzEzYmNjZWUxYzkzMzQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9zbmFrZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NyZWF0dXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9uZXJ2b3VzLXN5c3RlbS5qcyJdLCJuYW1lcyI6WyJ2ZWMiLCJwb2xhciIsIngiLCJ5IiwiVmVjdG9yIiwiYW5nbGUiLCJtYWduaXR1ZGUiLCJNYXRoIiwiY29zIiwic2luIiwib2xkWCIsInNpemUiLCJ2ZWN0b3IiLCJjb3B5Iiwic3VidHJhY3QiLCJsZW5ndGgiLCJsZW4iLCJzY2FsZSIsImF0YW4yIiwic3FydCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ0cmFuc2xhdGUiLCJlbmdpbmUiLCJzbmFrZSIsImNvbG9yIiwidGFpbFNpemUiLCJwb3NpdGlvbiIsInZlbG9jaXR5IiwicGx1ZyIsImFkZFRvU2NlbmUiLCJhbmltYXRpb24iLCJjbGVhciIsInVwZGF0ZSIsInJlbmRlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIkVuZ2luZSIsInNjZW5lIiwiY2FudmFzU2l6ZSIsIm9iamVjdCIsInB1c2giLCJmb3JFYWNoIiwiY2xlYXJSZWN0IiwiU25ha2UiLCJjb25maWciLCJ0YWlsIiwibWFwIiwiaSIsImRpcmVjdGlvbiIsImFkZCIsInNjYWxlVG8iLCJyYW5nZSIsImFyZ01pbiIsInJlbmRlclJheSIsIkFycmF5IiwiZnJvbSIsImtleXMiLCJlbGVtZW50cyIsImhhbmRsZXIiLCJtYXBwZWRFbGVtZW50cyIsIm1pbklkIiwiZWxlbWVudCIsImlkIiwib3JpZW50YXRpb24iLCJsaW5lRW5kIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwiQ3JlYXR1cmUiLCJwbHVnaW5zIiwiTW92ZW1lbnQiLCJyb3RhdGUiLCJhcmMiLCJQSSIsImZpbGwiLCJjbG9zZVBhdGgiLCJwbHVnaW4iLCJwYXJ0IiwidmFsdWUiLCJjYWxsIiwic2VsZiIsIlNpZ2h0IiwiZm92IiwicmF5Q291bnQiLCJzdHJlbmd0aCIsImVudmlyb25tZW50IiwicmF5SWQiLCJyYXlBbmdsZSIsInJheSIsInIiLCJleWUiLCJkeCIsImR5IiwiZHIiLCJkZXQiLCJkaXNjIiwiZGlzY1Jvb3QiLCJ4MSIsInNpZ24iLCJ4MiIsInkxIiwiYWJzIiwieTIiLCJwMSIsInAyIiwibWluTGVuSWQiLCJtaW5MZW5QIiwidmFsaWQiLCJkaXN0YW5jZSIsImludGVyc2VjdGlvbiIsImdldFNpZ2h0RGlyZWN0aW9ucyIsImludGVyc2VjdGlvbnMiLCJpbnRlcnNlY3RzIiwiZmlsdGVyIiwiT2NjaXBpdGFsTG9iZSIsImFyY2hpdGVjdHVyZSIsInNpZ2h0IiwicmFuZG9tIiwiTmF2aWdhdG9yIiwic3RlZXIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFD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Y2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxNGQ5NmIzMTNiY2NlZTFjOTMzNCIsImV4cG9ydCBmdW5jdGlvbiB2ZWMoeCwgeSkge1xuICByZXR1cm4gbmV3IFZlY3Rvcih4LCB5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvbGFyKGFuZ2xlLCBtYWduaXR1ZGUgPSAxKSB7XG4gIHJldHVybiBuZXcgVmVjdG9yKFxuICAgIG1hZ25pdHVkZSAqIE1hdGguY29zKGFuZ2xlKSxcbiAgICBtYWduaXR1ZGUgKiBNYXRoLnNpbihhbmdsZSlcbiAgKTtcbn1cblxuXG5jbGFzcyBWZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDApIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cblxuICBnZXQgYW5nbGUoKSB7XG4gICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy55LCB0aGlzLngpO1xuICB9XG5cbiAgcm90YXRlKGFuZ2xlKSB7XG4gICAgY29uc3Qgb2xkWCA9IHRoaXMueDtcblxuICAgIHRoaXMueCA9IHRoaXMueCAqIE1hdGguY29zKGFuZ2xlKSAtIHRoaXMueSAqIE1hdGguc2luKGFuZ2xlKTtcbiAgICB0aGlzLnkgPSB0aGlzLnkgKiBNYXRoLmNvcyhhbmdsZSkgKyBvbGRYICogTWF0aC5zaW4oYW5nbGUpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhZGQoeyB4LCB5IH0pIHtcbiAgICB0aGlzLnggKz0geDtcbiAgICB0aGlzLnkgKz0geTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc3VidHJhY3QoeyB4LCB5IH0pIHtcbiAgICB0aGlzLnggLT0geDtcbiAgICB0aGlzLnkgLT0geTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2NhbGUoc2l6ZSkge1xuICAgIHRoaXMueCAqPSBzaXplO1xuICAgIHRoaXMueSAqPSBzaXplO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQgY29weSgpIHtcbiAgICByZXR1cm4gbmV3IFZlY3Rvcih0aGlzLngsIHRoaXMueSk7XG4gIH1cblxuICBnZXQgbGVuZ3RoKCkge1xuICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55KTtcbiAgfVxuXG4gIGRpc3RhbmNlKHZlY3Rvcikge1xuICAgIHJldHVybiB0aGlzLmNvcHlcbiAgICAgIC5zdWJ0cmFjdCh2ZWN0b3IpXG4gICAgICAubGVuZ3RoO1xuICB9XG5cbiAgc2NhbGVUbyhzaXplKSB7XG4gICAgY29uc3QgbGVuID0gdGhpcy5sZW5ndGggfHwgMTtcbiAgICB0aGlzLnNjYWxlKHNpemUgLyBsZW4pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92ZWN0b3IuanMiLCJpbXBvcnQgeyB2ZWMgfSBmcm9tICd2ZWN0b3InO1xuaW1wb3J0IHsgRW5naW5lIH0gZnJvbSAnZW5naW5lJztcbmltcG9ydCB7IFNuYWtlIH0gZnJvbSAnc25ha2UnO1xuaW1wb3J0IHsgU2lnaHQsIE9jY2lwaXRhbExvYmUsIE5hdmlnYXRvciB9IGZyb20gJ25lcnZvdXMtc3lzdGVtJztcblxuXG5jb25zdCBbIHdpZHRoLCBoZWlnaHQgXSA9IFsgd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCBdO1xuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuY2FudmFzLndpZHRoID0gd2lkdGg7XG5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbmN0eC5zY2FsZSgxLCAtMSk7XG5jdHgudHJhbnNsYXRlKHdpZHRoIC8gMiwgLWhlaWdodCAvIDIpO1xuXG5cbmNvbnN0IGVuZ2luZSA9IG5ldyBFbmdpbmUoeyB3aWR0aCwgaGVpZ2h0IH0pO1xuY29uc3Qgc25ha2UgPSBuZXcgU25ha2Uoe1xuICAgIHNpemU6IDUsXG4gICAgY29sb3I6ICdyZ2JhKDI1MCwgMTAsIDEwMCwgMSknLFxuICAgIHRhaWxTaXplOiA1MCxcbiAgICBwb3NpdGlvbjogdmVjKDEwLCAxMCksXG4gICAgdmVsb2NpdHk6IHZlYygxLCAxKVxuICB9KVxuICAucGx1ZyhcbiAgICBuZXcgU2lnaHQoKSxcbiAgICBuZXcgT2NjaXBpdGFsTG9iZSgpLFxuICAgIG5ldyBOYXZpZ2F0b3IoKVxuICApO1xuXG5lbmdpbmUuYWRkVG9TY2VuZShzbmFrZSk7XG5cbihmdW5jdGlvbiBhbmltYXRpb24oKSB7XG4gIGVuZ2luZVxuICAgIC5jbGVhcihjdHgpXG4gICAgLnVwZGF0ZSgpXG4gICAgLnJlbmRlcihjdHgpO1xuXG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbn0pKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9pbmRleC5qcyIsImV4cG9ydCBjbGFzcyBFbmdpbmUge1xuICBjb25zdHJ1Y3Rvcih7IHdpZHRoLCBoZWlnaHQgfSkge1xuICAgIHRoaXMuc2NlbmUgPSBbXTtcbiAgICB0aGlzLmNhbnZhc1NpemUgPSB7IHdpZHRoLCBoZWlnaHQgfTtcbiAgfVxuXG4gIGFkZFRvU2NlbmUob2JqZWN0KSB7XG4gICAgdGhpcy5zY2VuZS5wdXNoKG9iamVjdCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5zY2VuZS5mb3JFYWNoKG9iamVjdCA9PiBvYmplY3QudXBkYXRlICYmIG9iamVjdC51cGRhdGUoKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXIoY3R4KSB7XG4gICAgdGhpcy5zY2VuZS5mb3JFYWNoKG9iamVjdCA9PiBvYmplY3QucmVuZGVyICYmIG9iamVjdC5yZW5kZXIoY3R4KSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjbGVhcihjdHgpIHtcbiAgICBjdHguY2xlYXJSZWN0KFxuICAgICAgLXRoaXMuY2FudmFzU2l6ZS53aWR0aCAvIDIsIFxuICAgICAgLXRoaXMuY2FudmFzU2l6ZS5oZWlnaHQgLyAyLFxuICAgICAgdGhpcy5jYW52YXNTaXplLndpZHRoLFxuICAgICAgdGhpcy5jYW52YXNTaXplLmhlaWdodFxuICAgICk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS5qcyIsImltcG9ydCB7IHJhbmdlIH0gZnJvbSAndXRpbHMnO1xuaW1wb3J0IHsgQ3JlYXR1cmUgfSBmcm9tICdjcmVhdHVyZSc7XG5cbmV4cG9ydCBjbGFzcyBTbmFrZSBleHRlbmRzIENyZWF0dXJlIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgICB0aGlzLnRhaWxTaXplID0gY29uZmlnLnRhaWxTaXplO1xuICAgIHRoaXMudGFpbCA9IHJhbmdlKHRoaXMudGFpbFNpemUpLm1hcChpZCA9PiBuZXcgQ3JlYXR1cmUoe1xuICAgICAgcG9zaXRpb246IGNvbmZpZy5wb3NpdGlvbi5jb3B5LFxuICAgICAgc2l6ZTogY29uZmlnLnNpemUsXG4gICAgICBjb2xvcjogY29uZmlnLmNvbG9yXG4gICAgfSkpO1xuXG4gICAgdGhpcy50YWlsLnB1c2godGhpcyk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgc3VwZXIudXBkYXRlKCk7XG4gICAgZm9yIChsZXQgaSA9IHRoaXMudGFpbC5sZW5ndGggLSAxO2kgPj0gMTtpLS0pIHtcbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMudGFpbFtpXS5wb3NpdGlvblxuICAgICAgICAuY29weS5zdWJ0cmFjdCh0aGlzLnRhaWxbaSAtIDFdLnBvc2l0aW9uKTtcblxuICAgICAgdGhpcy50YWlsW2kgLSAxXS5wb3NpdGlvbi5hZGQoZGlyZWN0aW9uXG4gICAgICAgIC5zY2FsZVRvKGRpcmVjdGlvbi5sZW5ndGggLSB0aGlzLnNpemUgKiAyKSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKGN0eCkge1xuICAgIHN1cGVyLnJlbmRlcihjdHgpO1xuICAgIGZvciAobGV0IGkgPSAwO2kgPCB0aGlzLnRhaWwubGVuZ3RoIC0gMTtpKyspIHtcbiAgICAgIHRoaXMudGFpbFtpXS5yZW5kZXIoY3R4KTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zbmFrZS5qcyIsImV4cG9ydCBmdW5jdGlvbiByYW5nZShzaXplID0gMCkge1xuICByZXR1cm4gQXJyYXkuZnJvbShBcnJheShzaXplKS5rZXlzKCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJnTWluKGVsZW1lbnRzLCBoYW5kbGVyID0geCA9PiB4KSB7XG4gIGNvbnN0IG1hcHBlZEVsZW1lbnRzID0gZWxlbWVudHMubWFwKGhhbmRsZXIpO1xuICBsZXQgbWluSWQgPSAtMTtcblxuICBtYXBwZWRFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50LCBpZCkgPT5cbiAgICBtaW5JZCA9IG1hcHBlZEVsZW1lbnRzW21pbklkXSA8IGVsZW1lbnQgP1xuICAgIG1pbklkIDogaWRcbiAgKTtcblxuICByZXR1cm4gbWluSWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJSYXkoY3R4LCB7IHBvc2l0aW9uLCBvcmllbnRhdGlvbiB9LCB7IGNvbG9yID0gJ3JlZCcgfSkge1xuICBjb25zdCBsaW5lRW5kID0gcG9zaXRpb24uY29weS5hZGQob3JpZW50YXRpb24pO1xuXG4gIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBjdHgubW92ZVRvKHBvc2l0aW9uLngsIHBvc2l0aW9uLnkpO1xuICBjdHgubGluZVRvKGxpbmVFbmQueCwgbGluZUVuZC55KTtcbiAgY3R4LnN0cm9rZSgpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzLmpzIiwiaW1wb3J0IHsgdmVjIH0gZnJvbSAndmVjdG9yJztcblxuXG5leHBvcnQgY2xhc3MgQ3JlYXR1cmUge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgcG9zaXRpb24sIHNpemUsXG4gICAgY29sb3IsIHZlbG9jaXR5ID0gdmVjKClcbiAgfSkge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLnZlbG9jaXR5ID0gdmVsb2NpdHk7XG4gICAgdGhpcy5wbHVnaW5zID0gW107XG4gICAgdGhpcy5wbHVnKG5ldyBNb3ZlbWVudCgpKTtcbiAgfVxuXG4gIHN0ZWVyKGFuZ2xlKSB7XG4gICAgdGhpcy52ZWxvY2l0eS5yb3RhdGUoYW5nbGUpO1xuICB9XG5cbiAgZ2V0IG9yaWVudGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnZlbG9jaXR5LmFuZ2xlO1xuICB9XG5cbiAgcmVuZGVyKGN0eCkge1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICBjdHguYXJjKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLnNpemUsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICBjdHguZmlsbCgpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcblxuICAgIHRoaXMucGx1Z2lucy5mb3JFYWNoKHBsdWdpbiA9PlxuICAgICAgcGx1Z2luLmZvckVhY2gocGFydCA9PlxuICAgICAgICBwYXJ0LnJlbmRlciAmJiBwYXJ0LnJlbmRlcihjdHgpKSk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgbGV0IHZhbHVlID0gdGhpcztcbiAgICB0aGlzLnBsdWdpbnMuZm9yRWFjaChwbHVnaW4gPT5cbiAgICAgIHBsdWdpbi5mb3JFYWNoKHBhcnQgPT5cbiAgICAgICAgdmFsdWUgPSBwYXJ0LmNhbGwodGhpcywgdmFsdWUpKSk7XG4gIH1cblxuICBwbHVnKC4uLnBsdWdpbikge1xuICAgIHRoaXMucGx1Z2lucy5wdXNoKHBsdWdpbik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuY2xhc3MgTW92ZW1lbnQge1xuICBjYWxsKHNlbGYpIHtcbiAgICBzZWxmLnBvc2l0aW9uLmFkZChzZWxmLnZlbG9jaXR5KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NyZWF0dXJlLmpzIiwiaW1wb3J0IHsgdmVjIH0gZnJvbSAndmVjdG9yJztcbmltcG9ydCB7IHJhbmdlLCBhcmdNaW4gfSBmcm9tICd1dGlscyc7XG5cblxuZXhwb3J0IGNsYXNzIFNpZ2h0IHtcbiAgY29uc3RydWN0b3Ioe1xuICAgIGZvdiA9IE1hdGguUEkgLyAyLFxuICAgIHJheUNvdW50ID0gMTYsXG4gICAgc3RyZW5ndGggPSAxNSxcbiAgICBlbnZpcm9ubWVudCA9IFtdXG4gIH0gPSB7fSkge1xuICAgIHRoaXMuZm92ID0gZm92O1xuICAgIHRoaXMucmF5Q291bnQgPSByYXlDb3VudDtcbiAgICB0aGlzLnN0cmVuZ3RoID0gc3RyZW5ndGg7XG4gICAgdGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuICB9XG5cbiAgZ2V0U2lnaHREaXJlY3Rpb25zKHZlbG9jaXR5KSB7XG4gICAgcmV0dXJuIHJhbmdlKHRoaXMucmF5Q291bnQpXG4gICAgICAubWFwKHJheUlkID0+IHJheUlkIC8gKHRoaXMucmF5Q291bnQgLSAxKSAqIHRoaXMuZm92IC0gdGhpcy5mb3YgLyAyKVxuICAgICAgLm1hcChyYXlBbmdsZSA9PiB2ZWxvY2l0eS5jb3B5LnJvdGF0ZShyYXlBbmdsZSkpO1xuICB9XG5cbiAgaW50ZXJzZWN0KHJheSwgZWxlbWVudCkge1xuICAgIGNvbnN0IHIgPSBlbGVtZW50LnNpemU7XG4gICAgY29uc3QgZXllID0gcmF5LnBvc2l0aW9uLmNvcHkuYWRkKHJheS5kaXJlY3Rpb24uc2NhbGVUbyh0aGlzLnN0cmVuZ3RoKSk7XG4gICAgY29uc3QgeyB4OiBkeCwgeTogZHkgfSA9IHJheS5wb3NpdGlvbi5zdWJ0cmFjdChleWUpO1xuICAgIGNvbnN0IGRyID0gZXllLmxlbmd0aDtcbiAgICBjb25zdCBkZXQgPSBlbGVtZW50LnBvc2l0aW9uLnggKiBleWUueSAtIGV5ZS54ICogZWxlbWVudC5wb3NpdGlvbi55O1xuICAgIGNvbnN0IGRpc2MgPSByICogciAqIGRyICogZHIgLSBkZXQgKiBkZXQ7XG4gICAgY29uc3QgZGlzY1Jvb3QgPSBNYXRoLnNxcnQoZGlzYyk7XG5cbiAgICBjb25zdCB4MSA9IChkZXQgKiBkeSArIE1hdGguc2lnbihkeSkgKiBkeCAqIGRpc2NSb290KSAvIChkciAqIGRyKTtcbiAgICBjb25zdCB4MiA9IChkZXQgKiBkeSAtIE1hdGguc2lnbihkeSkgKiBkeCAqIGRpc2NSb290KSAvIChkciAqIGRyKTtcblxuICAgIGNvbnN0IHkxID0gKC1kZXQgKiBkeCArIE1hdGguYWJzKGR5KSAqIGRpc2NSb290KSAvIChkciAqIGRyKTtcbiAgICBjb25zdCB5MiA9ICgtZGV0ICogZHggLSBNYXRoLmFicyhkeSkgKiBkaXNjUm9vdCkgLyAoZHIgKiBkcik7XG5cbiAgICBjb25zdCBwMSA9IHZlYyh4MSwgeTEpO1xuICAgIGNvbnN0IHAyID0gdmVjKHgyLCB5Mik7XG4gICAgY29uc3QgbWluTGVuSWQgPSBhcmdNaW4oW3AxLCBwMl0sIHZlY3RvciA9PiB2ZWN0b3IubGVuZ3RoKTtcbiAgICBjb25zdCBtaW5MZW5QID0gW3AxLCBwMl1bbWluTGVuSWRdO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbGlkOiBkaXNjID49IDAsXG4gICAgICBkaXN0YW5jZTogbWluTGVuUC5sZW5ndGgsXG4gICAgICBpbnRlcnNlY3Rpb246IG1pbkxlblAsXG4gICAgICBlbGVtZW50XG4gICAgfTtcbiAgfVxuXG4gIGNhbGwoc2VsZikge1xuICAgIHJldHVybiB0aGlzLmdldFNpZ2h0RGlyZWN0aW9ucyhzZWxmLnZlbG9jaXR5KVxuICAgICAgLm1hcChkaXJlY3Rpb24gPT4ge1xuICAgICAgICBjb25zdCBpbnRlcnNlY3Rpb25zID0gdGhpcy5lbnZpcm9ubWVudFxuICAgICAgICAgIC5tYXAoZWxlbWVudCA9PiB0aGlzLmludGVyc2VjdHMoe1xuICAgICAgICAgICAgcG9zaXRpb246IHNlbGYucG9zaXRpb24sXG4gICAgICAgICAgICBkaXJlY3Rpb25cbiAgICAgICAgICB9LCBlbGVtZW50KSlcbiAgICAgICAgICAuZmlsdGVyKGludGVyc2VjdGlvbiA9PiBpbnRlcnNlY3Rpb24udmFsaWQpO1xuXG4gICAgICAgIHJldHVybiBpbnRlcnNlY3Rpb25zW2FyZ01pbihpbnRlcnNlY3Rpb25zLCAoeyBkaXN0YW5jZSB9KSA9PiBkaXN0YW5jZSldXG4gICAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgT2NjaXBpdGFsTG9iZSB7XG4gIGNvbnN0cnVjdG9yKGFyY2hpdGVjdHVyZSkge1xuICAgIHRoaXMuYXJjaGl0ZWN0dXJlID0gYXJjaGl0ZWN0dXJlO1xuICB9XG5cbiAgY2FsbChzZWxmLCBzaWdodCkge1xuICAgIC8vIHJldHVybiB0aGlzLmZlZWRGb3J3YXJkKHNpZ2h0KTtcbiAgICByZXR1cm4gKE1hdGgucmFuZG9tKCkgLSAwLjQpIC8gMTA7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE5hdmlnYXRvciB7XG4gIHJlbmRlcihjdHgpIHtcbiAgICAvLyBjdHguZmlsbFJlY3QoMCwwLDUwLDUwKTtcbiAgfVxuXG4gIGNhbGwoc2VsZiwgZGlyZWN0aW9uKSB7XG4gICAgc2VsZi5zdGVlcihkaXJlY3Rpb24pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbmVydm91cy1zeXN0ZW0uanMiXSwic291cmNlUm9vdCI6IiJ9