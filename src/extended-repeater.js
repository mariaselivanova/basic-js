const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  let initialStr = String(str);
  let repeatTimes;
  let separator;
  let addition;
  let additionRepeatTimes;
  let additionSeparator;

  options.repeatTimes ? repeatTimes = options.repeatTimes : repeatTimes = 1;
  options.separator ? separator = options.separator : separator = '+'
  options.hasOwnProperty('addition') ? addition = String(options.addition) : addition = ""
  options.additionRepeatTimes ? additionRepeatTimes = options.additionRepeatTimes : additionRepeatTimes = 1
  options.additionSeparator ? additionSeparator = options.additionSeparator : additionSeparator = '|'

  const repeatedAddition = Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  const result = Array(repeatTimes).fill(initialStr + repeatedAddition).join(separator);

  return result;
}

module.exports = {
  repeater
};
