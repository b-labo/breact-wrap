/**
 * Do with cycle
 * @function cycle
 * @returns {Promise}
 */
'use strict'

const noop = () => undefined

/** @lends cycle */
function cycle ({ will = noop, do: do_ = noop, did = noop }) {
  return Promise.resolve(true)
    .then(will)
    .then(do_)
    .then(did)
}

module.exports = cycle
