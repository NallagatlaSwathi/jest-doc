function reduce<T>(
  array: T[],
  reduceFunction: (accumulator: T, currentValue: T) => T,
  initialValue?: T,
) {
  let accumulator = initialValue ?? array[0] // nullish coalescing operator

  for (let index = 0; index < array.length; index++) {
    accumulator = reduceFunction(accumulator, array[index])
  }

  return accumulator
}

export {reduce}
