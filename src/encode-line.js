const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === '') {
    return ""
  }
  const regex = /(.)\1*/g;
  const substrings = str.match(regex);
  const mappedArr = substrings.map((item) => {
    return item.length > 1 ? item.length + item[0] : item[0];
  });
  return mappedArr.join('');
}

module.exports = {
  encodeLine
};
