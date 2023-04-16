const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  
  calculateDepth(arr) {
    if (!(arr instanceof Array)) {
      throw new Error("'arr' parameter must be an instance of the Array!");
    }
    let initialDepth = 1;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] instanceof Array) {
        const depth = this.calculateDepth(arr[i]) + 1;
        if (depth > initialDepth) {
          initialDepth = depth
        }
      }
    }

    return initialDepth;
  }
}

module.exports = {
  DepthCalculator
};
