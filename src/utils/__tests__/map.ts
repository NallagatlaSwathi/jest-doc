import {map} from '../map'

test('should map an array', () => {
  const input = [1, 2, 3]

  const expectedOutput = [1, 4, 9]

  expect(map(input, element => element ** 2)).toStrictEqual(expectedOutput)
})
