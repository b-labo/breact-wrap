/**
 * Wrapper utility for breact
 * @module breact-wrap
 */

'use strict'

let d = (module) => module && module.default || module

module.exports = {
  get combine () { return d(require('./combine')) },
  get cycle () { return d(require('./cycle')) },
  get prefixOf () { return d(require('./prefix_of')) },
  get scoped () { return d(require('./scoped')) }
}
