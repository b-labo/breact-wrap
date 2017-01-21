/**
 * Combine multiple wrappers into one
 * @function combine
 * @param {...function} wrappers - Wrappers to combine
 * @returns {function} - Combined function.
 */
'use strict'

/** @lends combine */
function combine (...wrappers) {
  return (Component) => Object.assign(
    wrappers.reduce((Wrapped, wrap, i) => {
      return Object.assign(wrap(Wrapped), {
        wrappedComponentName: Component.name,
        wrappedComponentDepth: i
      })
    }, Component),
    Component,
    {}
  )
}

module.exports = combine
