const assert = require('assert')
const thumbWar = require('../thumbWar')
const utils = require('../utils')

const originalGetWinner = utils.getWinner
utils.getWinner = (player1, player2) => player1

const winner = thumbWar('Vishal', 'Swathi')
assert.strictEqual(winner, 'Vishal')

utils.getWinner = originalGetWinner
