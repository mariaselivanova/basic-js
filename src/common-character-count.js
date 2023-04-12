const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(string1, string2) {
  let count = 0;
  let secondStr = string2;
  
  for (let i = 0; i < string1.length; i++) {
    if (secondStr.includes(string1[i])) {
      count += 1;
      secondStr = secondStr.replace(string1[i], "")
    }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount
};
