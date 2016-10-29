/**
 * Wrapper utility for breact
 * @module breact-wrap
 */

'use strict'

let d = (module) => module && module.default || module

module.exports = {
  get combine () { return d(require('./combine')) },
  get prefixOf () { return d(require('./prefix_of')) }
}
