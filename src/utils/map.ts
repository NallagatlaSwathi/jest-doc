function map<T, U>(
  array: readonly T[],
  transformFunction: (element: T) => U,
): U[] {
  const output = []
  for (let index = 0; index < array.length; index++) {
    const returnValue = transformFunction(array[index])
    output.push(returnValue)
  }
  return output
}

export {map}
