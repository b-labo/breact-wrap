/**
 * @function scoped
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
  function Scoped() {
    (0, _classCallCheck3.default)(this, Scoped);

    var s = this;
    abind(s, { proto: Scoped.prototype });
    s.scopes = [];

    if (arguments[0]) {
      console.warn('[breact-wrap] Constructor with mapper is now deprecated.');
      s._mapper = arguments[0];
    }
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
    value: function toProps(mapper) {
      var s = this;
      var scopes = s.scopes;

      return _assign2.default.apply(Object, [{}].concat((0, _toConsumableArray3.default)(scopes.map(function (scope) {
        return (0, _defineProperty3.default)({}, scope, (mapper || s._mapper)(scope));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjb3BlZC5qcyJdLCJuYW1lcyI6WyJhYmluZCIsInJlcXVpcmUiLCJTY29wZWQiLCJzIiwicHJvdG8iLCJwcm90b3R5cGUiLCJzY29wZXMiLCJhcmd1bWVudHMiLCJjb25zb2xlIiwid2FybiIsIl9tYXBwZXIiLCJzY29wZSIsInVua25vd24iLCJpbmRleE9mIiwicHVzaCIsIm1hcHBlciIsIm1hcCIsImNyZWF0ZSIsImFyZ3MiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLE9BQVIsQ0FBZDs7SUFFTUMsTTtBQUNKLG9CQUFlO0FBQUE7O0FBQ2IsUUFBTUMsSUFBSSxJQUFWO0FBQ0FILFVBQU1HLENBQU4sRUFBUyxFQUFFQyxPQUFPRixPQUFPRyxTQUFoQixFQUFUO0FBQ0FGLE1BQUVHLE1BQUYsR0FBVyxFQUFYOztBQUVBLFFBQUlDLFVBQVcsQ0FBWCxDQUFKLEVBQW9CO0FBQ2xCQyxjQUFRQyxJQUFSLENBQWEsMERBQWI7QUFDQU4sUUFBRU8sT0FBRixHQUFZSCxVQUFXLENBQVgsQ0FBWjtBQUNEO0FBQ0Y7O0FBRUQ7Ozs7Ozs7Ozs0QkFLU0ksSyxFQUFPO0FBQ2QsVUFBTVIsSUFBSSxJQUFWO0FBRGMsVUFFUkcsTUFGUSxHQUVHSCxDQUZILENBRVJHLE1BRlE7O0FBR2QsVUFBSU0sVUFBVUQsU0FBUyxDQUFDLENBQUNMLE9BQU9PLE9BQVAsQ0FBZUYsS0FBZixDQUF6QjtBQUNBLFVBQUlDLE9BQUosRUFBYTtBQUNYTixlQUFPUSxJQUFQLENBQVlILEtBQVo7QUFDRDtBQUNELGFBQU9BLEtBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs0QkFJU0ksTSxFQUFRO0FBQ2YsVUFBTVosSUFBSSxJQUFWO0FBRGUsVUFFVEcsTUFGUyxHQUVFSCxDQUZGLENBRVRHLE1BRlM7O0FBR2YsYUFBTyxnQ0FBYyxFQUFkLDBDQUNGQSxPQUFPVSxHQUFQLENBQVcsVUFBQ0wsS0FBRDtBQUFBLGlEQUNYQSxLQURXLEVBQ0gsQ0FBQ0ksVUFBVVosRUFBRU8sT0FBYixFQUFzQkMsS0FBdEIsQ0FERztBQUFBLE9BQVgsQ0FERSxHQUFQO0FBS0Q7Ozs7O0FBR0g7OztBQUNBLFNBQVNNLE1BQVQsR0FBMEI7QUFBQSxvQ0FBTkMsSUFBTTtBQUFOQSxRQUFNO0FBQUE7O0FBQ3hCLDRDQUFXaEIsTUFBWCxnQkFBcUJnQixJQUFyQjtBQUNEOztBQUVEQyxPQUFPQyxPQUFQLEdBQWlCSCxNQUFqQiIsImZpbGUiOiJzY29wZWQuanMiLCJzb3VyY2VSb290IjoibGliIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZnVuY3Rpb24gc2NvcGVkXG4gKiBAcmV0dXJucyB7U2NvcGVkfSBBIHNjb3BlZCBpbnN0YW5jZVxuICovXG4ndXNlIHN0cmljdCdcblxuY29uc3QgYWJpbmQgPSByZXF1aXJlKCdhYmluZCcpXG5cbmNsYXNzIFNjb3BlZCB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBjb25zdCBzID0gdGhpc1xuICAgIGFiaW5kKHMsIHsgcHJvdG86IFNjb3BlZC5wcm90b3R5cGUgfSlcbiAgICBzLnNjb3BlcyA9IFtdXG5cbiAgICBpZiAoYXJndW1lbnRzWyAwIF0pIHtcbiAgICAgIGNvbnNvbGUud2FybignW2JyZWFjdC13cmFwXSBDb25zdHJ1Y3RvciB3aXRoIG1hcHBlciBpcyBub3cgZGVwcmVjYXRlZC4nKVxuICAgICAgcy5fbWFwcGVyID0gYXJndW1lbnRzWyAwIF1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWFyayBzY29wZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2NvcGVcbiAgICogQHJldHVybnMge3N0cmluZ30gLSBzY29wZVxuICAgKi9cbiAgYXNTY29wZSAoc2NvcGUpIHtcbiAgICBjb25zdCBzID0gdGhpc1xuICAgIGxldCB7IHNjb3BlcyB9ID0gc1xuICAgIGxldCB1bmtub3duID0gc2NvcGUgJiYgIX5zY29wZXMuaW5kZXhPZihzY29wZSlcbiAgICBpZiAodW5rbm93bikge1xuICAgICAgc2NvcGVzLnB1c2goc2NvcGUpXG4gICAgfVxuICAgIHJldHVybiBzY29wZVxuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgaW50byBzY29wZWQgcHJvcHNcbiAgICogQHJldHVybnMge09iamVjdH1cbiAgICovXG4gIHRvUHJvcHMgKG1hcHBlcikge1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gICAgbGV0IHsgc2NvcGVzIH0gPSBzXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sXG4gICAgICAuLi5zY29wZXMubWFwKChzY29wZSkgPT4gKHtcbiAgICAgICAgW3Njb3BlXTogKG1hcHBlciB8fCBzLl9tYXBwZXIpKHNjb3BlKVxuICAgICAgfSkpXG4gICAgKVxuICB9XG59XG5cbi8qKiBAbGVuZHMgc2NvcGVkICovXG5mdW5jdGlvbiBjcmVhdGUgKC4uLmFyZ3MpIHtcbiAgcmV0dXJuIG5ldyBTY29wZWQoLi4uYXJncylcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVcbiJdfQ==