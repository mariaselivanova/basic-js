const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) {

  let result = {};

  if (!domains.length) {
    return {};
  }

  for (let i = 0; i < domains.length; i++) {
    const parts = domains[i]
    const reverseDomainParts = parts.split(".").reverse();
    let current = "";
    for (let x = 0; x < reverseDomainParts.length; x++) {
      current += "." + reverseDomainParts[x];
      if (!result[current]) {
        result[current] = 1;
      } else {
        result[current]++;
      }
    }
  }
  
  return result
}

module.exports = {
  getDNSStats
};
