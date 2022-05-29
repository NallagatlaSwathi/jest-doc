import {reduce} from '../reduce'

test('should map an array', () => {
  const input = [1, 2, 3]

  const expectedOutput = 6

  expect(
    reduce(
      input,
      function (accumulator, currentValue) {
        accumulator = accumulator + currentValue
        return accumulator
      },
      0,
    ),
  ).toBe(expectedOutput)
})
