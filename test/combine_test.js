/**
 * Test case for combine.
 * Runs with mocha.
 */
'use strict'

const combine = require('../lib/combine.js')
const assert = require('assert')
const co = require('co')

describe('combine', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Combine', () => co(function * () {
    let combined = combine(
      (Component) => ({ foo: 'bar' })
    )({
      bar: 'baz'
    })
    assert.equal(combined.foo, 'bar')
    assert.equal(combined.bar, 'baz')
  }))
})

/* global describe, before, after, it */
