expect = require 'expect'

mod = require '../src'

describe 'module', ->
  it 'works', ->
    expect(mod()).toBe 'foo'

