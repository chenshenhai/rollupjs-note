(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function demo() {
    return new Promise(function (resolve, reject) {
      try {
        setTimeout(function () {
          var obj1 = { a: 1 };
          var obj2 = { b: 2 };
          var result = _extends({}, obj1, obj2);
          resolve(result);
        }, 1000);
      } catch (err) {
        reject(err);
      }
    });
  }

  var initDemo = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return demo();

            case 2:
              data = _context.sent;

              console.log(data);

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function initDemo() {
      return _ref.apply(this, arguments);
    };
  }();

  function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

  var arr1 = [1, 2, 3];
  var arr2 = [4, 5, 6];
  console.log([].concat(arr1, arr2));

  initDemo();

})));
