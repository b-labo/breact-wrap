/**
 * @function scoped
 * @returns {Scoped} A scoped instance
 */
'use strict'

const abind = require('abind')

class Scoped {
  constructor () {
    const s = this
    abind(s, { proto: Scoped.prototype })
    s.scopes = []

    if (arguments[ 0 ]) {
      console.warn('[breact-wrap] Constructor with mapper is now deprecated.')
      s._mapper = arguments[ 0 ]
    }
  }

  /**
   * Mark scope
   * @param {string} scope
   * @returns {string} - scope
   */
  asScope (scope) {
    const s = this
    let { scopes } = s
    let unknown = scope && !~scopes.indexOf(scope)
    if (unknown) {
      scopes.push(scope)
    }
    return scope
  }

  /**
   * Convert into scoped props
   * @returns {Object}
   */
  toProps (mapper) {
    const s = this
    let { scopes } = s
    return Object.assign({},
      ...scopes.map((scope) => ({
        [scope]: (mapper || s._mapper)(scope)
      }))
    )
  }
}

/** @lends scoped */
function create (...args) {
  return new Scoped(...args)
}

module.exports = create
