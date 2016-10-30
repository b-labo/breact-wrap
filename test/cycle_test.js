/**
 * Test case for cycle.
 * Runs with mocha.
 */
'use strict'

const cycle = require('../lib/cycle.js')
const assert = require('assert')
const co = require('co')

describe('cycle', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Cycle', () => co(function * () {
    let result = yield cycle({
      will: () => 'will',
      do: (result) => result + ':do',
      did: (result) => result + ':did'
    })
    assert.equal(result, 'will:do:did')
  }))
})

/* global describe, before, after, it */
