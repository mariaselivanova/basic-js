const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    return "'arr' parameter must be an instance of the Array!"
  }
  const array = arr
  for (let i = 0; i < arr.length; i++) {
    if (array[i] === '--discard-next') {
      array.splice(i + 1, 1)
    }
    if (array[i] === '--discard-prev') {
      array.splice(i - 1, 1)
    }
    if (array[i] === '--double-next') {
      array.splice(i + 1, 0, array[i + 1]);
    }

    if (array[i] === '--double-prev') {
      array.splice(i - 1, 0, array[i - 1]);
    }
  }
  const filteredArray = array.filter(item => item !== '--discard-next' && item !== '--discard-prev' && item !== '--double-next' && item !== '--double-prev')
  return filteredArray
}


module.exports = {
  transform
};
