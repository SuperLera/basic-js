const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let counter = 0
  let cat = "^^"

  for(i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === cat) {
        counter++
      }
    }
  }

  return counter
};
