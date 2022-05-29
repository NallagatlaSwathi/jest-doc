function filter<T>(
  array: readonly T[],
  filterFunction: (element: T) => boolean,
): T[] {
  const output: T[] = []

  for (let index = 0; index < array.length; index++) {
    const shouldInclude = filterFunction(array[index])

    if (shouldInclude) {
      output.push(array[index])
    }
  }
  return output
}

export {filter}
