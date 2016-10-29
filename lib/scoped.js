/**
 * @function scoped
 * @param {function} mapper - A mapper function
 * @returns {Scoped} A scoped instance
 */
'use strict'

const abind = require('abind')

class Scoped {
  constructor (mapper) {
    const s = this
    abind(s, { proto: Scoped.prototype })
    s.scopes = []
    s.mapper = mapper
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
   * @returns {Array}
   */
  toProps () {
    const s = this
    let { mapper, scopes } = s
    return scopes.map((scope) => ({
      [scope]: mapper(scope)
    }))
  }
}

/** @lends scoped */
function create (...args) {
  return new Scoped(...args)
}

module.exports = create
