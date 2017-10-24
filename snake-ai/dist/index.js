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
        _ref$strength = _ref.strength,
        strength = _ref$strength === undefined ? 16 : _ref$strength,
        _ref$environment = _ref.environment,
        environment = _ref$environment === undefined ? [] : _ref$environment;

    _classCallCheck(this, Sight);

    this.strength = strength;
    this.fov = fov;
    this.environment = environment;
  }

  _createClass(Sight, [{
    key: 'getSightDirections',
    value: function getSightDirections(_ref2) {
      var _this = this;

      var position = _ref2.position,
          orientation = _ref2.orientation;

      return (0, _utils.range)(this.strength).map(function (rayId) {
        return rayId / (_this.strength - 1) * _this.fov - _this.fov / 2;
      }).map(function (rayAngle) {
        return (0, _vector.polar)(orientation.copy().add(rayAngle));
      });
    }
  }, {
    key: 'intersect',
    value: function intersect(_ref3, element) {
      var orientation = _ref3.orientation,
          position = _ref3.position;

      return {
        valid: true,
        distance: element.position.distance(orientation)
      };
    }
  }, {
    key: 'call',
    value: function call(sightContext) {
      var _this2 = this;

      return this.environment.map(function (element) {
        return _this2.getSightDirections(sightContext).find(function (direction) {
          return _this2.intersects({
            direction: direction,
            position: sightContext.position
          }, element);
        });
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
    value: function call(_, sight) {
      // return this.feedForward(sight);
      return 0.01;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjRmNzc0N2U4NWFiZDczZmNmODgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9zbmFrZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NyZWF0dXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9uZXJ2b3VzLXN5c3RlbS5qcyJdLCJuYW1lcyI6WyJ2ZWMiLCJwb2xhciIsIngiLCJ5IiwiVmVjdG9yIiwiYW5nbGUiLCJtYWduaXR1ZGUiLCJNYXRoIiwiY29zIiwic2luIiwib2xkWCIsInNpemUiLCJzcXJ0IiwidmVjdG9yIiwiY29weSIsInN1YnRyYWN0IiwibGVuZ3RoIiwibGVuIiwic2NhbGUiLCJhdGFuMiIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ0cmFuc2xhdGUiLCJlbmdpbmUiLCJzbmFrZSIsImNvbG9yIiwidGFpbFNpemUiLCJwb3NpdGlvbiIsInZlbG9jaXR5IiwicGx1ZyIsImFkZFRvU2NlbmUiLCJhbmltYXRpb24iLCJjbGVhciIsInVwZGF0ZSIsInJlbmRlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIkVuZ2luZSIsInNjZW5lIiwiY2FudmFzU2l6ZSIsIm9iamVjdCIsInB1c2giLCJmb3JFYWNoIiwiY2xlYXJSZWN0IiwiU25ha2UiLCJjb25maWciLCJ0YWlsIiwibWFwIiwiaSIsImRpcmVjdGlvbiIsImFkZCIsInNjYWxlVG8iLCJyYW5nZSIsImFyZ01pbiIsIkFycmF5IiwiZnJvbSIsImtleXMiLCJlbGVtZW50cyIsImhhbmRsZXIiLCJtYXBwZWRFbGVtZW50cyIsIm1pbklkIiwiZWxlbWVudCIsImlkIiwiQ3JlYXR1cmUiLCJwbHVnaW5zIiwiTW92ZW1lbnQiLCJyb3RhdGUiLCJiZWdpblBhdGgiLCJmaWxsU3R5bGUiLCJhcmMiLCJQSSIsImZpbGwiLCJjbG9zZVBhdGgiLCJwbHVnaW4iLCJwYXJ0IiwidmFsdWUiLCJjYWxsIiwic2VsZiIsIlNpZ2h0IiwiZm92Iiwic3RyZW5ndGgiLCJlbnZpcm9ubWVudCIsIm9yaWVudGF0aW9uIiwicmF5SWQiLCJyYXlBbmdsZSIsInZhbGlkIiwiZGlzdGFuY2UiLCJzaWdodENvbnRleHQiLCJnZXRTaWdodERpcmVjdGlvbnMiLCJmaW5kIiwiaW50ZXJzZWN0cyIsIk9jY2lwaXRhbExvYmUiLCJhcmNoaXRlY3R1cmUiLCJfIiwic2lnaHQiLCJOYXZpZ2F0b3IiLCJzdGVlciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O1FDN0RnQkEsRyxHQUFBQSxHO1FBSUFDLEssR0FBQUEsSzs7OztBQUpULFNBQVNELEdBQVQsQ0FBYUUsQ0FBYixFQUFnQkMsQ0FBaEIsRUFBbUI7QUFDeEIsU0FBTyxJQUFJQyxNQUFKLENBQVdGLENBQVgsRUFBY0MsQ0FBZCxDQUFQO0FBQ0Q7O0FBRU0sU0FBU0YsS0FBVCxDQUFlSSxLQUFmLEVBQXFDO0FBQUEsTUFBZkMsU0FB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QWtDO0FBQUEsVUFBckJ0RCxRQUFxQixTQUFyQkEsUUFBcUI7O0FBQzVDLGFBQU87QUFDTHlELGVBQU8sSUFERjtBQUVMQyxrQkFBVXpCLFFBQVFqQyxRQUFSLENBQWlCMEQsUUFBakIsQ0FBMEJKLFdBQTFCO0FBRkwsT0FBUDtBQUlEOzs7eUJBRUlLLFksRUFBYztBQUFBOztBQUNqQixhQUFPLEtBQUtOLFdBQUwsQ0FDSmxDLEdBREksQ0FDQTtBQUFBLGVBQVcsT0FBS3lDLGtCQUFMLENBQXdCRCxZQUF4QixFQUNiRSxJQURhLENBQ1I7QUFBQSxpQkFBYSxPQUFLQyxVQUFMLENBQWdCO0FBQ2pDekMsZ0NBRGlDO0FBRWpDckIsc0JBQVUyRCxhQUFhM0Q7QUFGVSxXQUFoQixFQUdoQmlDLE9BSGdCLENBQWI7QUFBQSxTQURRLENBQVg7QUFBQSxPQURBLENBQVA7QUFNRDs7Ozs7O0lBR1U4QixhLFdBQUFBLGE7QUFDWCx5QkFBWUMsWUFBWixFQUEwQjtBQUFBOztBQUN4QixTQUFLQSxZQUFMLEdBQW9CQSxZQUFwQjtBQUNEOzs7O3lCQUVJQyxDLEVBQUdDLEssRUFBTztBQUNiO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7Ozs7OztJQUdVQyxTLFdBQUFBLFM7Ozs7Ozs7MkJBQ0oxRSxHLEVBQUs7QUFDVjtBQUNEOzs7eUJBRUl3RCxJLEVBQU01QixTLEVBQVc7QUFDcEI0QixXQUFLbUIsS0FBTCxDQUFXL0MsU0FBWDtBQUNEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZjRmNzc0N2U4NWFiZDczZmNmODgiLCJleHBvcnQgZnVuY3Rpb24gdmVjKHgsIHkpIHtcbiAgcmV0dXJuIG5ldyBWZWN0b3IoeCwgeSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb2xhcihhbmdsZSwgbWFnbml0dWRlID0gMSkge1xuICByZXR1cm4gbmV3IFZlY3RvcihcbiAgICBtYWduaXR1ZGUgKiBNYXRoLmNvcyhhbmdsZSksXG4gICAgbWFnbml0dWRlICogTWF0aC5zaW4oYW5nbGUpXG4gICk7XG59XG5cblxuY2xhc3MgVmVjdG9yIHtcbiAgY29uc3RydWN0b3IoeCA9IDAsIHkgPSAwKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG5cbiAgZ2V0IGFuZ2xlKCkge1xuICAgIHJldHVybiBNYXRoLmF0YW4yKHRoaXMueSwgdGhpcy54KTtcbiAgfVxuXG4gIHJvdGF0ZShhbmdsZSkge1xuICAgIGNvbnN0IG9sZFggPSB0aGlzLng7XG5cbiAgICB0aGlzLnggPSB0aGlzLnggKiBNYXRoLmNvcyhhbmdsZSkgLSB0aGlzLnkgKiBNYXRoLnNpbihhbmdsZSk7XG4gICAgdGhpcy55ID0gdGhpcy55ICogTWF0aC5jb3MoYW5nbGUpICsgb2xkWCAqIE1hdGguc2luKGFuZ2xlKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWRkKHsgeCwgeSB9KSB7XG4gICAgdGhpcy54ICs9IHg7XG4gICAgdGhpcy55ICs9IHk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHN1YnRyYWN0KHsgeCwgeSB9KSB7XG4gICAgdGhpcy54IC09IHg7XG4gICAgdGhpcy55IC09IHk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNjYWxlKHNpemUpIHtcbiAgICB0aGlzLnggKj0gc2l6ZTtcbiAgICB0aGlzLnkgKj0gc2l6ZTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY29weSgpIHtcbiAgICByZXR1cm4gbmV3IFZlY3Rvcih0aGlzLngsIHRoaXMueSk7XG4gIH1cblxuICBsZW5ndGgoKSB7XG4gICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkpO1xuICB9XG5cbiAgZGlzdGFuY2UodmVjdG9yKSB7XG4gICAgcmV0dXJuIHRoaXMuY29weSgpXG4gICAgICAuc3VidHJhY3QodmVjdG9yKVxuICAgICAgLmxlbmd0aCgpO1xuICB9XG5cbiAgc2NhbGVUbyhzaXplKSB7XG4gICAgY29uc3QgbGVuID0gdGhpcy5sZW5ndGgoKSB8fCAxO1xuICAgIHRoaXMuc2NhbGUoc2l6ZSAvIGxlbik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZlY3Rvci5qcyIsImltcG9ydCB7IHZlYyB9IGZyb20gJ3ZlY3Rvcic7XG5pbXBvcnQgeyBFbmdpbmUgfSBmcm9tICdlbmdpbmUnO1xuaW1wb3J0IHsgU25ha2UgfSBmcm9tICdzbmFrZSc7XG5pbXBvcnQgeyBTaWdodCwgT2NjaXBpdGFsTG9iZSwgTmF2aWdhdG9yIH0gZnJvbSAnbmVydm91cy1zeXN0ZW0nO1xuXG5cbmNvbnN0IFsgd2lkdGgsIGhlaWdodCBdID0gWyB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0IF07XG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG5jYW52YXMud2lkdGggPSB3aWR0aDtcbmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuY3R4LnNjYWxlKDEsIC0xKTtcbmN0eC50cmFuc2xhdGUod2lkdGggLyAyLCAtaGVpZ2h0IC8gMik7XG5cblxuY29uc3QgZW5naW5lID0gbmV3IEVuZ2luZSh7IHdpZHRoLCBoZWlnaHQgfSk7XG5jb25zdCBzbmFrZSA9IG5ldyBTbmFrZSh7XG4gICAgc2l6ZTogNSxcbiAgICBjb2xvcjogJ3JnYmEoMjUwLCAxMCwgMTAwLCAxKScsXG4gICAgdGFpbFNpemU6IDUwLFxuICAgIHBvc2l0aW9uOiB2ZWMoMTAsIDEwKSxcbiAgICB2ZWxvY2l0eTogdmVjKDEsIDEpXG4gIH0pXG4gIC5wbHVnKFxuICAgIG5ldyBTaWdodCgpLFxuICAgIG5ldyBPY2NpcGl0YWxMb2JlKCksXG4gICAgbmV3IE5hdmlnYXRvcigpXG4gICk7XG5cbmVuZ2luZS5hZGRUb1NjZW5lKHNuYWtlKTtcblxuKGZ1bmN0aW9uIGFuaW1hdGlvbigpIHtcbiAgZW5naW5lXG4gICAgLmNsZWFyKGN0eClcbiAgICAudXBkYXRlKClcbiAgICAucmVuZGVyKGN0eCk7XG5cbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xufSkoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2luZGV4LmpzIiwiZXhwb3J0IGNsYXNzIEVuZ2luZSB7XG4gIGNvbnN0cnVjdG9yKHsgd2lkdGgsIGhlaWdodCB9KSB7XG4gICAgdGhpcy5zY2VuZSA9IFtdO1xuICAgIHRoaXMuY2FudmFzU2l6ZSA9IHsgd2lkdGgsIGhlaWdodCB9O1xuICB9XG5cbiAgYWRkVG9TY2VuZShvYmplY3QpIHtcbiAgICB0aGlzLnNjZW5lLnB1c2gob2JqZWN0KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnNjZW5lLmZvckVhY2gob2JqZWN0ID0+IG9iamVjdC51cGRhdGUgJiYgb2JqZWN0LnVwZGF0ZSgpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbmRlcihjdHgpIHtcbiAgICB0aGlzLnNjZW5lLmZvckVhY2gob2JqZWN0ID0+IG9iamVjdC5yZW5kZXIgJiYgb2JqZWN0LnJlbmRlcihjdHgpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNsZWFyKGN0eCkge1xuICAgIGN0eC5jbGVhclJlY3QoXG4gICAgICAtdGhpcy5jYW52YXNTaXplLndpZHRoIC8gMiwgXG4gICAgICAtdGhpcy5jYW52YXNTaXplLmhlaWdodCAvIDIsXG4gICAgICB0aGlzLmNhbnZhc1NpemUud2lkdGgsXG4gICAgICB0aGlzLmNhbnZhc1NpemUuaGVpZ2h0XG4gICAgKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lLmpzIiwiaW1wb3J0IHsgcmFuZ2UgfSBmcm9tICd1dGlscyc7XG5pbXBvcnQgeyBDcmVhdHVyZSB9IGZyb20gJ2NyZWF0dXJlJztcblxuZXhwb3J0IGNsYXNzIFNuYWtlIGV4dGVuZHMgQ3JlYXR1cmUge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICAgIHRoaXMudGFpbFNpemUgPSBjb25maWcudGFpbFNpemU7XG4gICAgdGhpcy50YWlsID0gcmFuZ2UodGhpcy50YWlsU2l6ZSkubWFwKGlkID0+IG5ldyBDcmVhdHVyZSh7XG4gICAgICBwb3NpdGlvbjogY29uZmlnLnBvc2l0aW9uLmNvcHkoKSxcbiAgICAgIHNpemU6IGNvbmZpZy5zaXplLFxuICAgICAgY29sb3I6IGNvbmZpZy5jb2xvclxuICAgIH0pKTtcblxuICAgIHRoaXMudGFpbC5wdXNoKHRoaXMpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHN1cGVyLnVwZGF0ZSgpO1xuICAgIGZvciAobGV0IGkgPSB0aGlzLnRhaWwubGVuZ3RoIC0gMTtpID49IDE7aS0tKSB7XG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLnRhaWxbaV0ucG9zaXRpb25cbiAgICAgICAgLmNvcHkoKVxuICAgICAgICAuc3VidHJhY3QodGhpcy50YWlsW2kgLSAxXS5wb3NpdGlvbik7XG5cbiAgICAgIHRoaXMudGFpbFtpIC0gMV0ucG9zaXRpb24uYWRkKGRpcmVjdGlvblxuICAgICAgICAuc2NhbGVUbyhkaXJlY3Rpb24ubGVuZ3RoKCkgLSB0aGlzLnNpemUgKiAyKSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKGN0eCkge1xuICAgIHN1cGVyLnJlbmRlcihjdHgpO1xuICAgIGZvciAobGV0IGkgPSAwO2kgPCB0aGlzLnRhaWwubGVuZ3RoIC0gMTtpKyspIHtcbiAgICAgIHRoaXMudGFpbFtpXS5yZW5kZXIoY3R4KTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zbmFrZS5qcyIsImV4cG9ydCBmdW5jdGlvbiByYW5nZShzaXplID0gMCkge1xuICByZXR1cm4gQXJyYXkuZnJvbShBcnJheShzaXplKS5rZXlzKCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJnTWluKGVsZW1lbnRzLCBoYW5kbGVyID0geCA9PiB4KSB7XG4gIGNvbnN0IG1hcHBlZEVsZW1lbnRzID0gZWxlbWVudHMubWFwKGhhbmRsZXIpO1xuICBsZXQgbWluSWQgPSAtMTtcblxuICBtYXBwZWRFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50LCBpZCkgPT5cbiAgICBtaW5JZCA9IG1hcHBlZEVsZW1lbnRzW21pbklkXSA8IGVsZW1lbnQgP1xuICAgIG1pbklkIDogaWRcbiAgKTtcblxuICByZXR1cm4gbWluSWQ7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMuanMiLCJpbXBvcnQgeyB2ZWMgfSBmcm9tICd2ZWN0b3InO1xuXG5cbmV4cG9ydCBjbGFzcyBDcmVhdHVyZSB7XG4gIGNvbnN0cnVjdG9yKHtcbiAgICBwb3NpdGlvbiwgc2l6ZSxcbiAgICBjb2xvciwgdmVsb2NpdHkgPSB2ZWMoKVxuICB9KSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIHRoaXMudmVsb2NpdHkgPSB2ZWxvY2l0eTtcbiAgICB0aGlzLnBsdWdpbnMgPSBbXTtcbiAgICB0aGlzLnBsdWcobmV3IE1vdmVtZW50KCkpO1xuICB9XG5cbiAgc3RlZXIoYW5nbGUpIHtcbiAgICB0aGlzLnZlbG9jaXR5LnJvdGF0ZShhbmdsZSk7XG4gIH1cblxuICBnZXQgb3JpZW50YXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudmVsb2NpdHkuYW5nbGU7XG4gIH1cblxuICByZW5kZXIoY3R4KSB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgIGN0eC5hcmModGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMuc2l6ZSwgMCwgMiAqIE1hdGguUEkpO1xuICAgIGN0eC5maWxsKCk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgdGhpcy5wbHVnaW5zLmZvckVhY2gocGx1Z2luID0+XG4gICAgICBwbHVnaW4uZm9yRWFjaChwYXJ0ID0+XG4gICAgICAgIHBhcnQucmVuZGVyICYmIHBhcnQucmVuZGVyKGN0eCkpKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBsZXQgdmFsdWUgPSB0aGlzO1xuICAgIHRoaXMucGx1Z2lucy5mb3JFYWNoKHBsdWdpbiA9PlxuICAgICAgcGx1Z2luLmZvckVhY2gocGFydCA9PlxuICAgICAgICB2YWx1ZSA9IHBhcnQuY2FsbCh0aGlzLCB2YWx1ZSkpKTtcbiAgfVxuXG4gIHBsdWcoLi4ucGx1Z2luKSB7XG4gICAgdGhpcy5wbHVnaW5zLnB1c2gocGx1Z2luKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5jbGFzcyBNb3ZlbWVudCB7XG4gIGNhbGwoc2VsZikge1xuICAgIHNlbGYucG9zaXRpb24uYWRkKHNlbGYudmVsb2NpdHkpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY3JlYXR1cmUuanMiLCJpbXBvcnQgeyBwb2xhciB9IGZyb20gJ3ZlY3Rvcic7XG5pbXBvcnQgeyByYW5nZSB9IGZyb20gJ3V0aWxzJztcblxuXG5leHBvcnQgY2xhc3MgU2lnaHQge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgZm92ID0gTWF0aC5QSSAvIDIsXG4gICAgc3RyZW5ndGggPSAxNixcbiAgICBlbnZpcm9ubWVudCA9IFtdXG4gIH0gPSB7fSkge1xuICAgIHRoaXMuc3RyZW5ndGggPSBzdHJlbmd0aDtcbiAgICB0aGlzLmZvdiA9IGZvdjtcbiAgICB0aGlzLmVudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XG4gIH1cblxuICBnZXRTaWdodERpcmVjdGlvbnMoeyBwb3NpdGlvbiwgb3JpZW50YXRpb24gfSkge1xuICAgIHJldHVybiByYW5nZSh0aGlzLnN0cmVuZ3RoKVxuICAgICAgLm1hcChyYXlJZCA9PiByYXlJZCAvICh0aGlzLnN0cmVuZ3RoIC0gMSkgKiB0aGlzLmZvdiAtIHRoaXMuZm92IC8gMilcbiAgICAgIC5tYXAocmF5QW5nbGUgPT4gcG9sYXIob3JpZW50YXRpb24uY29weSgpLmFkZChyYXlBbmdsZSkpKTtcbiAgfVxuXG4gIGludGVyc2VjdCh7IG9yaWVudGF0aW9uLCBwb3NpdGlvbiB9LCBlbGVtZW50KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbGlkOiB0cnVlLFxuICAgICAgZGlzdGFuY2U6IGVsZW1lbnQucG9zaXRpb24uZGlzdGFuY2Uob3JpZW50YXRpb24pXG4gICAgfTtcbiAgfVxuXG4gIGNhbGwoc2lnaHRDb250ZXh0KSB7XG4gICAgcmV0dXJuIHRoaXMuZW52aXJvbm1lbnRcbiAgICAgIC5tYXAoZWxlbWVudCA9PiB0aGlzLmdldFNpZ2h0RGlyZWN0aW9ucyhzaWdodENvbnRleHQpXG4gICAgICAgIC5maW5kKGRpcmVjdGlvbiA9PiB0aGlzLmludGVyc2VjdHMoe1xuICAgICAgICAgIGRpcmVjdGlvbixcbiAgICAgICAgICBwb3NpdGlvbjogc2lnaHRDb250ZXh0LnBvc2l0aW9uXG4gICAgICAgIH0sIGVsZW1lbnQpKSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE9jY2lwaXRhbExvYmUge1xuICBjb25zdHJ1Y3RvcihhcmNoaXRlY3R1cmUpIHtcbiAgICB0aGlzLmFyY2hpdGVjdHVyZSA9IGFyY2hpdGVjdHVyZTtcbiAgfVxuXG4gIGNhbGwoXywgc2lnaHQpIHtcbiAgICAvLyByZXR1cm4gdGhpcy5mZWVkRm9yd2FyZChzaWdodCk7XG4gICAgcmV0dXJuIDAuMDE7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE5hdmlnYXRvciB7XG4gIHJlbmRlcihjdHgpIHtcbiAgICAvLyBjdHguZmlsbFJlY3QoMCwwLDUwLDUwKTtcbiAgfVxuXG4gIGNhbGwoc2VsZiwgZGlyZWN0aW9uKSB7XG4gICAgc2VsZi5zdGVlcihkaXJlY3Rpb24pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbmVydm91cy1zeXN0ZW0uanMiXSwic291cmNlUm9vdCI6IiJ9