/**
 * @function scoped
 * @param {function} mapper - A mapper function
 * @returns {Scoped} A scoped instance
 */
'use strict';

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var abind = require('abind');

var Scoped = function () {
  function Scoped(mapper) {
    (0, _classCallCheck3.default)(this, Scoped);

    var s = this;
    abind(s, { proto: Scoped.prototype });
    s.scopes = [];
    s.mapper = mapper;
  }

  /**
   * Mark scope
   * @param {string} scope
   * @returns {string} - scope
   */


  (0, _createClass3.default)(Scoped, [{
    key: 'asScope',
    value: function asScope(scope) {
      var s = this;
      var scopes = s.scopes;

      var unknown = scope && !~scopes.indexOf(scope);
      if (unknown) {
        scopes.push(scope);
      }
      return scope;
    }

    /**
     * Convert into scoped props
     * @returns {Object}
     */

  }, {
    key: 'toProps',
    value: function toProps() {
      var s = this;
      var mapper = s.mapper,
          scopes = s.scopes;

      return _assign2.default.apply(Object, [{}].concat((0, _toConsumableArray3.default)(scopes.map(function (scope) {
        return (0, _defineProperty3.default)({}, scope, mapper(scope));
      }))));
    }
  }]);
  return Scoped;
}();

/** @lends scoped */


function create() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Scoped, [null].concat(args)))();
}

module.exports = create;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjb3BlZC5qcyJdLCJuYW1lcyI6WyJhYmluZCIsInJlcXVpcmUiLCJTY29wZWQiLCJtYXBwZXIiLCJzIiwicHJvdG8iLCJwcm90b3R5cGUiLCJzY29wZXMiLCJzY29wZSIsInVua25vd24iLCJpbmRleE9mIiwicHVzaCIsIm1hcCIsImNyZWF0ZSIsImFyZ3MiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUUMsUUFBUSxPQUFSLENBQWQ7O0lBRU1DLE07QUFDSixrQkFBYUMsTUFBYixFQUFxQjtBQUFBOztBQUNuQixRQUFNQyxJQUFJLElBQVY7QUFDQUosVUFBTUksQ0FBTixFQUFTLEVBQUVDLE9BQU9ILE9BQU9JLFNBQWhCLEVBQVQ7QUFDQUYsTUFBRUcsTUFBRixHQUFXLEVBQVg7QUFDQUgsTUFBRUQsTUFBRixHQUFXQSxNQUFYO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs0QkFLU0ssSyxFQUFPO0FBQ2QsVUFBTUosSUFBSSxJQUFWO0FBRGMsVUFFUkcsTUFGUSxHQUVHSCxDQUZILENBRVJHLE1BRlE7O0FBR2QsVUFBSUUsVUFBVUQsU0FBUyxDQUFDLENBQUNELE9BQU9HLE9BQVAsQ0FBZUYsS0FBZixDQUF6QjtBQUNBLFVBQUlDLE9BQUosRUFBYTtBQUNYRixlQUFPSSxJQUFQLENBQVlILEtBQVo7QUFDRDtBQUNELGFBQU9BLEtBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs4QkFJVztBQUNULFVBQU1KLElBQUksSUFBVjtBQURTLFVBRUhELE1BRkcsR0FFZ0JDLENBRmhCLENBRUhELE1BRkc7QUFBQSxVQUVLSSxNQUZMLEdBRWdCSCxDQUZoQixDQUVLRyxNQUZMOztBQUdULGFBQU8sZ0NBQWMsRUFBZCwwQ0FDRkEsT0FBT0ssR0FBUCxDQUFXLFVBQUNKLEtBQUQ7QUFBQSxpREFDWEEsS0FEVyxFQUNITCxPQUFPSyxLQUFQLENBREc7QUFBQSxPQUFYLENBREUsR0FBUDtBQUtEOzs7OztBQUdIOzs7QUFDQSxTQUFTSyxNQUFULEdBQTBCO0FBQUEsb0NBQU5DLElBQU07QUFBTkEsUUFBTTtBQUFBOztBQUN4Qiw0Q0FBV1osTUFBWCxnQkFBcUJZLElBQXJCO0FBQ0Q7O0FBRURDLE9BQU9DLE9BQVAsR0FBaUJILE1BQWpCIiwiZmlsZSI6InNjb3BlZC5qcyIsInNvdXJjZVJvb3QiOiJsaWIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmdW5jdGlvbiBzY29wZWRcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG1hcHBlciAtIEEgbWFwcGVyIGZ1bmN0aW9uXG4gKiBAcmV0dXJucyB7U2NvcGVkfSBBIHNjb3BlZCBpbnN0YW5jZVxuICovXG4ndXNlIHN0cmljdCdcblxuY29uc3QgYWJpbmQgPSByZXF1aXJlKCdhYmluZCcpXG5cbmNsYXNzIFNjb3BlZCB7XG4gIGNvbnN0cnVjdG9yIChtYXBwZXIpIHtcbiAgICBjb25zdCBzID0gdGhpc1xuICAgIGFiaW5kKHMsIHsgcHJvdG86IFNjb3BlZC5wcm90b3R5cGUgfSlcbiAgICBzLnNjb3BlcyA9IFtdXG4gICAgcy5tYXBwZXIgPSBtYXBwZXJcbiAgfVxuXG4gIC8qKlxuICAgKiBNYXJrIHNjb3BlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzY29wZVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSAtIHNjb3BlXG4gICAqL1xuICBhc1Njb3BlIChzY29wZSkge1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gICAgbGV0IHsgc2NvcGVzIH0gPSBzXG4gICAgbGV0IHVua25vd24gPSBzY29wZSAmJiAhfnNjb3Blcy5pbmRleE9mKHNjb3BlKVxuICAgIGlmICh1bmtub3duKSB7XG4gICAgICBzY29wZXMucHVzaChzY29wZSlcbiAgICB9XG4gICAgcmV0dXJuIHNjb3BlXG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCBpbnRvIHNjb3BlZCBwcm9wc1xuICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgKi9cbiAgdG9Qcm9wcyAoKSB7XG4gICAgY29uc3QgcyA9IHRoaXNcbiAgICBsZXQgeyBtYXBwZXIsIHNjb3BlcyB9ID0gc1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LFxuICAgICAgLi4uc2NvcGVzLm1hcCgoc2NvcGUpID0+ICh7XG4gICAgICAgIFtzY29wZV06IG1hcHBlcihzY29wZSlcbiAgICAgIH0pKVxuICAgIClcbiAgfVxufVxuXG4vKiogQGxlbmRzIHNjb3BlZCAqL1xuZnVuY3Rpb24gY3JlYXRlICguLi5hcmdzKSB7XG4gIHJldHVybiBuZXcgU2NvcGVkKC4uLmFyZ3MpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlXG4iXX0=