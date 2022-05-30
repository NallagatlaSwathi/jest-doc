function groupBy<T>(array: T[], groupOn: keyof T) {
  const output = array.reduce(function reducer(acc: any, currentValue) {
    if (!acc[currentValue[groupOn]]) {
      acc[currentValue[groupOn]] = []
    }
    acc[currentValue[groupOn]].push(currentValue)

    return acc
  }, {})
  return output
}

export {groupBy}
