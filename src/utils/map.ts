function map<T>(arr: readonly T[], transformFunction: (element: T) => any) {
  const output = []
  for (let index = 0; index < arr.length; index++) {
    const returnValue = transformFunction(arr[index])
    output.push(returnValue)
  }
  return output
}

export {map}
