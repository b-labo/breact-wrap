/**
 * Get prefix of wrapped component
 * @function prefixOf
 * @param {function} component - A component class
 * @returns {string}
 */
'use strict'
const { spinalcase } = require('stringcase')

/** @lends prefixOf */
function prefixOf (Component) {
  return spinalcase(Component.wrappedComponentName || Component.name)
}

module.exports = prefixOf
