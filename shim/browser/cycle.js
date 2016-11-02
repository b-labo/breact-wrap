/**
 * Do with cycle
 * @function cycle
 * @returns {Promise}
 */
'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = function noop() {
  return undefined;
};

/** @lends cycle */
function cycle(_ref) {
  var _ref$will = _ref.will,
      will = _ref$will === undefined ? noop : _ref$will,
      _ref$do = _ref.do,
      do_ = _ref$do === undefined ? noop : _ref$do,
      _ref$did = _ref.did,
      did = _ref$did === undefined ? noop : _ref$did;

  return _promise2.default.resolve(true).then(will).then(do_).then(did);
}

module.exports = cycle;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN5Y2xlLmpzIl0sIm5hbWVzIjpbIm5vb3AiLCJ1bmRlZmluZWQiLCJjeWNsZSIsIndpbGwiLCJkbyIsImRvXyIsImRpZCIsInJlc29sdmUiLCJ0aGVuIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBS0E7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsU0FBTUMsU0FBTjtBQUFBLENBQWI7O0FBRUE7QUFDQSxTQUFTQyxLQUFULE9BQTZEO0FBQUEsdUJBQTNDQyxJQUEyQztBQUFBLE1BQTNDQSxJQUEyQyw2QkFBcENILElBQW9DO0FBQUEscUJBQTlCSSxFQUE4QjtBQUFBLE1BQTFCQyxHQUEwQiwyQkFBcEJMLElBQW9CO0FBQUEsc0JBQWRNLEdBQWM7QUFBQSxNQUFkQSxHQUFjLDRCQUFSTixJQUFROztBQUMzRCxTQUFPLGtCQUFRTyxPQUFSLENBQWdCLElBQWhCLEVBQ0pDLElBREksQ0FDQ0wsSUFERCxFQUVKSyxJQUZJLENBRUNILEdBRkQsRUFHSkcsSUFISSxDQUdDRixHQUhELENBQVA7QUFJRDs7QUFFREcsT0FBT0MsT0FBUCxHQUFpQlIsS0FBakIiLCJmaWxlIjoiY3ljbGUuanMiLCJzb3VyY2VSb290IjoibGliIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBEbyB3aXRoIGN5Y2xlXG4gKiBAZnVuY3Rpb24gY3ljbGVcbiAqIEByZXR1cm5zIHtQcm9taXNlfVxuICovXG4ndXNlIHN0cmljdCdcblxuY29uc3Qgbm9vcCA9ICgpID0+IHVuZGVmaW5lZFxuXG4vKiogQGxlbmRzIGN5Y2xlICovXG5mdW5jdGlvbiBjeWNsZSAoeyB3aWxsID0gbm9vcCwgZG86IGRvXyA9IG5vb3AsIGRpZCA9IG5vb3AgfSkge1xuICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpXG4gICAgLnRoZW4od2lsbClcbiAgICAudGhlbihkb18pXG4gICAgLnRoZW4oZGlkKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGN5Y2xlXG4iXX0=