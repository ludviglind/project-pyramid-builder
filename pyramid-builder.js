export function rightAngledPyramid(totalRows) {
  let string = ''

  for (let currentRow = 1; currentRow <= totalRows; currentRow++) {
    // Statements in outer loop executes once for every complete inner loop

    for (let currentColumn = 1; currentColumn <= currentRow; currentColumn++) {
      // Because currentColumn resets to 1 for every new iteration (row)

      string += '#'
      // Adding a # on top of previous #, creating a stair-like pyramid shape

    }
    string += '\n'
    // A new line for every row

  }
  return string
}

export function leftAngledPyramid(totalRows) {
  let string = ''

  for (let currentRow = 1; currentRow <= totalRows; currentRow++) {
    // Nested foor-loop, just as rightAngledPyramid

    for (let currentColumn = 1; currentColumn <= totalRows; currentColumn++) {
      // An entire row no matter which currentRow

      if (currentColumn > totalRows - currentRow) {
        string += '#'
        // Add a # to string if currentColumn > totalRows - currentRow

      } else {
        string += ' '
        // Otherwise, add a blank space to string

      }
    }
    string += '\n'
  }
  return string
}

export function fullPyramid(totalRows) {
  const midPoint = Math.floor((totalRows * 2 - 1) / 2)
  // Defines middle of pyramid

  const totalColumns = totalRows * 2 - 1
  // Defines size of largest column (bottom column)

  let string = ''

  for (let currentRow = 0; currentRow < totalRows; currentRow++) {
    // Nested foor-loop, just as rightAngledPyramid

    for (let currentColumn = 0; currentColumn < totalColumns; currentColumn++) {
      // Creates an entire row, no matter which current row

      if (midPoint - currentRow <= currentColumn && midPoint + currentRow >= currentColumn) {
        // Current column in relation to midpoint and current row
        string += '#'
        // To decide if string should be a #

      } else {
        string += ' '
        // Or a blank space

      }
    }
    string += '\n'
  }
  return string
}