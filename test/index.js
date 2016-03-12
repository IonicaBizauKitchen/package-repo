const it = require('mocha').it
const describe = require('mocha').describe
const expect = require('chai').expect

const packageRepo = require('..')

describe('packageRepo', function () {
  it('is a function', function () {
    expect(packageRepo).to.be.a('function')
  })
})
