const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    const subArr = matrix[i]
    for (let x = 0; x < subArr.length; x++) {
      if (subArr[x] === "^^") {
        count += 1;
      }
    }
  }
  return count;
}

module.exports = {
  countCats
};
