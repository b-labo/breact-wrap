/**
 * Combine multiple wrappers into one
 * @function combine
 * @param {...function} wrappers - Wrappers to combine
 * @returns {function} - Combined function.
 */
'use strict';

/** @lends combine */

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function combine() {
  for (var _len = arguments.length, wrappers = Array(_len), _key = 0; _key < _len; _key++) {
    wrappers[_key] = arguments[_key];
  }

  return function (Component) {
    return wrappers.reduce(function (Wrapped, wrap, i) {
      return (0, _assign2.default)(wrap(Wrapped), {
        wrappedComponentName: Component.name,
        wrappedComponentDepth: i
      });
    }, Component);
  };
}

module.exports = combine;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbWJpbmUuanMiXSwibmFtZXMiOlsiY29tYmluZSIsIndyYXBwZXJzIiwiQ29tcG9uZW50IiwicmVkdWNlIiwiV3JhcHBlZCIsIndyYXAiLCJpIiwid3JhcHBlZENvbXBvbmVudE5hbWUiLCJuYW1lIiwid3JhcHBlZENvbXBvbmVudERlcHRoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQU1BOztBQUVBOzs7Ozs7OztBQUNBLFNBQVNBLE9BQVQsR0FBK0I7QUFBQSxvQ0FBVkMsUUFBVTtBQUFWQSxZQUFVO0FBQUE7O0FBQzdCLFNBQU8sVUFBQ0MsU0FBRDtBQUFBLFdBQ0xELFNBQVNFLE1BQVQsQ0FBZ0IsVUFBQ0MsT0FBRCxFQUFVQyxJQUFWLEVBQWdCQyxDQUFoQixFQUFzQjtBQUNwQyxhQUFPLHNCQUFjRCxLQUFLRCxPQUFMLENBQWQsRUFBNkI7QUFDbENHLDhCQUFzQkwsVUFBVU0sSUFERTtBQUVsQ0MsK0JBQXVCSDtBQUZXLE9BQTdCLENBQVA7QUFJRCxLQUxELEVBS0dKLFNBTEgsQ0FESztBQUFBLEdBQVA7QUFPRDs7QUFFRFEsT0FBT0MsT0FBUCxHQUFpQlgsT0FBakIiLCJmaWxlIjoiY29tYmluZS5qcyIsInNvdXJjZVJvb3QiOiJsaWIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvbWJpbmUgbXVsdGlwbGUgd3JhcHBlcnMgaW50byBvbmVcbiAqIEBmdW5jdGlvbiBjb21iaW5lXG4gKiBAcGFyYW0gey4uLmZ1bmN0aW9ufSB3cmFwcGVycyAtIFdyYXBwZXJzIHRvIGNvbWJpbmVcbiAqIEByZXR1cm5zIHtmdW5jdGlvbn0gLSBDb21iaW5lZCBmdW5jdGlvbi5cbiAqL1xuJ3VzZSBzdHJpY3QnXG5cbi8qKiBAbGVuZHMgY29tYmluZSAqL1xuZnVuY3Rpb24gY29tYmluZSAoLi4ud3JhcHBlcnMpIHtcbiAgcmV0dXJuIChDb21wb25lbnQpID0+XG4gICAgd3JhcHBlcnMucmVkdWNlKChXcmFwcGVkLCB3cmFwLCBpKSA9PiB7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih3cmFwKFdyYXBwZWQpLCB7XG4gICAgICAgIHdyYXBwZWRDb21wb25lbnROYW1lOiBDb21wb25lbnQubmFtZSxcbiAgICAgICAgd3JhcHBlZENvbXBvbmVudERlcHRoOiBpXG4gICAgICB9KVxuICAgIH0sIENvbXBvbmVudClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb21iaW5lXG4iXX0=