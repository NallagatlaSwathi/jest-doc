const thumbWar = require('../thumbWar')
const utils = require('../utils')

test('returns winner', () => {
  const originalGetWinner = utils.getWinner
  utils.getWinner = jest.fn((player1, player2) => player1)

  const winner = thumbWar('Swathi', 'Vishal')

  expect(winner).toBe('Swathi')
  expect(utils.getWinner.mock.calls).toEqual([
    ['Swathi', 'Vishal'],
    ['Swathi', 'Vishal'],
  ])

  expect(utils.getWinner).toHaveBeenCalledTimes(2)
  expect(utils.getWinner).toHaveBeenNthCalledWith(1, 'Swathi', 'Vishal')
  expect(utils.getWinner).toHaveBeenNthCalledWith(2, 'Swathi', 'Vishal')

  utils.getWinner = originalGetWinner
})
