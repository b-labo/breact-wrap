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
    return (0, _assign2.default)(wrappers.reduce(function (Wrapped, wrap, i) {
      return (0, _assign2.default)(wrap(Wrapped), {
        wrappedComponentName: Component.name,
        wrappedComponentDepth: i
      });
    }, Component), Component, {});
  };
}

module.exports = combine;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbWJpbmUuanMiXSwibmFtZXMiOlsiY29tYmluZSIsIndyYXBwZXJzIiwiQ29tcG9uZW50IiwicmVkdWNlIiwiV3JhcHBlZCIsIndyYXAiLCJpIiwid3JhcHBlZENvbXBvbmVudE5hbWUiLCJuYW1lIiwid3JhcHBlZENvbXBvbmVudERlcHRoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQU1BOztBQUVBOzs7Ozs7OztBQUNBLFNBQVNBLE9BQVQsR0FBK0I7QUFBQSxvQ0FBVkMsUUFBVTtBQUFWQSxZQUFVO0FBQUE7O0FBQzdCLFNBQU8sVUFBQ0MsU0FBRDtBQUFBLFdBQWUsc0JBQ3BCRCxTQUFTRSxNQUFULENBQWdCLFVBQUNDLE9BQUQsRUFBVUMsSUFBVixFQUFnQkMsQ0FBaEIsRUFBc0I7QUFDcEMsYUFBTyxzQkFBY0QsS0FBS0QsT0FBTCxDQUFkLEVBQTZCO0FBQ2xDRyw4QkFBc0JMLFVBQVVNLElBREU7QUFFbENDLCtCQUF1Qkg7QUFGVyxPQUE3QixDQUFQO0FBSUQsS0FMRCxFQUtHSixTQUxILENBRG9CLEVBT3BCQSxTQVBvQixFQVFwQixFQVJvQixDQUFmO0FBQUEsR0FBUDtBQVVEOztBQUVEUSxPQUFPQyxPQUFQLEdBQWlCWCxPQUFqQiIsImZpbGUiOiJjb21iaW5lLmpzIiwic291cmNlUm9vdCI6ImxpYiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29tYmluZSBtdWx0aXBsZSB3cmFwcGVycyBpbnRvIG9uZVxuICogQGZ1bmN0aW9uIGNvbWJpbmVcbiAqIEBwYXJhbSB7Li4uZnVuY3Rpb259IHdyYXBwZXJzIC0gV3JhcHBlcnMgdG8gY29tYmluZVxuICogQHJldHVybnMge2Z1bmN0aW9ufSAtIENvbWJpbmVkIGZ1bmN0aW9uLlxuICovXG4ndXNlIHN0cmljdCdcblxuLyoqIEBsZW5kcyBjb21iaW5lICovXG5mdW5jdGlvbiBjb21iaW5lICguLi53cmFwcGVycykge1xuICByZXR1cm4gKENvbXBvbmVudCkgPT4gT2JqZWN0LmFzc2lnbihcbiAgICB3cmFwcGVycy5yZWR1Y2UoKFdyYXBwZWQsIHdyYXAsIGkpID0+IHtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHdyYXAoV3JhcHBlZCksIHtcbiAgICAgICAgd3JhcHBlZENvbXBvbmVudE5hbWU6IENvbXBvbmVudC5uYW1lLFxuICAgICAgICB3cmFwcGVkQ29tcG9uZW50RGVwdGg6IGlcbiAgICAgIH0pXG4gICAgfSwgQ29tcG9uZW50KSxcbiAgICBDb21wb25lbnQsXG4gICAge31cbiAgKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbWJpbmVcbiJdfQ==