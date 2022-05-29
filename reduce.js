function reduce(array, reduceFunction, initialValue) {
  let accumulator = initialValue ?? array[0] // nullish coalescing operator

  for (let index = 0; index < array.length; index++) {
    accumulator = reduceFunction(accumulator, array[index])
  }

  return accumulator
}

const arr = [1, 2, 3]
const output = reduce(
  arr,
  function (accumulator, currentValue) {
    accumulator = accumulator + currentValue
    return accumulator
  },
  0,
)

console.log(output)
