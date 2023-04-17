const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  chain: [],

  getLength() {
    return this.chain.length
  },

  addLink(value) {
    if (value === undefined) {
      this.chain.push("")
    } else {
       this.chain.push(value)
    }
    return this;
  },

  removeLink(position) {
    if (
      typeof position !== 'number' ||
      position <= 0 ||
      position > this.chain.length ||
      !Number.isInteger(position)
    ) {
      this.chain.length = 0;
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },
  
  finishChain() {
    const mappedArr = this.chain.map(item => `( ${item} )`)
    const result = mappedArr.join("~~")
    this.chain.length = 0;
    return result;
  }
};

module.exports = {
  chainMaker
};
