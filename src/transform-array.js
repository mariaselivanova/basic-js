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
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 3, 4, 5]
 * 
 */

function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const resultArr = [];
  const skippedIndexes = [];

  for (let i = 0; i < arr.length; i++) {

    let item = arr[i];

    if (item === '--double-next') {
      if (i < arr.length - 1) {
        resultArr.push(arr[i + 1]);
      }
    } else if (item === '--double-prev') {
      if (i > 0 && !skippedIndexes.includes(i - 1)) {
        resultArr.push(arr[i - 1]);
      }
    } else if (item === '--discard-next') {
      if (i < arr.length - 1) {
        skippedIndexes.push(i + 1);
        i++;
      }
    } else if (item === '--discard-prev') {
      if (resultArr.length > 0 && !skippedIndexes.includes(i - 1)) {
        resultArr.pop();
      }
    } else {
      resultArr.push(item);
    }
  }

  return resultArr;
}





module.exports = {
  transform
};
