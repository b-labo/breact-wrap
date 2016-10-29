/**
 * Test case for scoped.
 * Runs with mocha.
 */
'use strict'

const scoped = require('../lib/scoped.js')
const assert = require('assert')
const co = require('co')

describe('scoped', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Scoped', () => co(function * () {
    let { asScope, toProps } = scoped((scope) => 'foo:' + scope)
    asScope('bar')
    asScope('baz')
    assert.deepEqual(toProps(), [ { bar: 'foo:bar' }, { baz: 'foo:baz' } ])
  }))
})

/* global describe, before, after, it */
