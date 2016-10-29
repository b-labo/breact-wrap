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

  asScope (scope) {
    const s = this
    let { scopes } = s
    let unknown = scope && !~scopes.indexOf(scope)
    if (unknown) {
      scopes.push(scope)
    }
    return scope
  }

  toState () {
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
