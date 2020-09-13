export function rightAngledPyramid(totalRows) {
  let string = ''

  for (let currentRow = 1; currentRow <= totalRows; currentRow++) {
    // Statements in outer loop executes once for every inner loop

    for (let currentColumn = 1; currentColumn <= currentRow; currentColumn++) {
      // CurrentColumn resets for every new iteration

      string += '#'
    }
    string += '\n'
  }
  return string
}