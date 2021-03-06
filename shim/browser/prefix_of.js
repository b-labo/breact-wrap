/**
 * Get prefix of wrapped component
 * @function prefixOf
 * @param {function} component - A component class
 * @returns {string}
 */
'use strict';

var _require = require('stringcase'),
    spinalcase = _require.spinalcase;

/** @lends prefixOf */


function prefixOf(Component) {
  return spinalcase(Component.wrappedComponentName || Component.name);
}

module.exports = prefixOf;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZWZpeF9vZi5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwic3BpbmFsY2FzZSIsInByZWZpeE9mIiwiQ29tcG9uZW50Iiwid3JhcHBlZENvbXBvbmVudE5hbWUiLCJuYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQU1BOztlQUN1QkEsUUFBUSxZQUFSLEM7SUFBZkMsVSxZQUFBQSxVOztBQUVSOzs7QUFDQSxTQUFTQyxRQUFULENBQW1CQyxTQUFuQixFQUE4QjtBQUM1QixTQUFPRixXQUFXRSxVQUFVQyxvQkFBVixJQUFrQ0QsVUFBVUUsSUFBdkQsQ0FBUDtBQUNEOztBQUVEQyxPQUFPQyxPQUFQLEdBQWlCTCxRQUFqQiIsImZpbGUiOiJwcmVmaXhfb2YuanMiLCJzb3VyY2VSb290IjoibGliIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBHZXQgcHJlZml4IG9mIHdyYXBwZWQgY29tcG9uZW50XG4gKiBAZnVuY3Rpb24gcHJlZml4T2ZcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNvbXBvbmVudCAtIEEgY29tcG9uZW50IGNsYXNzXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG4ndXNlIHN0cmljdCdcbmNvbnN0IHsgc3BpbmFsY2FzZSB9ID0gcmVxdWlyZSgnc3RyaW5nY2FzZScpXG5cbi8qKiBAbGVuZHMgcHJlZml4T2YgKi9cbmZ1bmN0aW9uIHByZWZpeE9mIChDb21wb25lbnQpIHtcbiAgcmV0dXJuIHNwaW5hbGNhc2UoQ29tcG9uZW50LndyYXBwZWRDb21wb25lbnROYW1lIHx8IENvbXBvbmVudC5uYW1lKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHByZWZpeE9mXG4iXX0=