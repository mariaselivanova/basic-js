const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(array) {
  const indexes = array.reduce((acc, value, index) => {
    if (value === -1) {
      acc.push(index);
    }
    return acc;
  }, []);

  const arrwithoutones = array.filter((item) => item !== -1)
  arrwithoutones.sort((a, b) => a - b)
  for (let i = 0; i < indexes.length; i++) {
    arrwithoutones.splice(indexes[i], 0, - 1)
  }
  return arrwithoutones
}

module.exports = {
  sortByHeight
};
