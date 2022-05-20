const assert = require('assert')
const thumbWar = require('../thumbWar')
const utils = require('../utils')

function fn(impl = () => {}) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args)
    return impl(...args)
  }

  mockFn.mock = {calls: []}

  return mockFn
}

const originalGetWinner = utils.getWinner
utils.getWinner = fn((player1, player2) => player1)

const winner = thumbWar('Vishal', 'Swathi')
assert.strictEqual(winner, 'Vishal')
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ['Vishal', 'Swathi'],
  ['Vishal', 'Swathi'],
])

utils.getWinner = originalGetWinner
