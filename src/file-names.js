const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const compareArr = [];
  const count = {};

  for (let i = 0; i < names.length; i++) {
    let fileName = names[i]
    if (!compareArr.includes(fileName)) {
      compareArr.push(fileName);
      count[fileName] = 1;
    } else {
      let newName = `${fileName}(${count[fileName]})`;
      for (let x = 0; x < compareArr.length; x++) {
        if (compareArr.includes(newName))
          count[fileName]++;
          newName = `${fileName}(${count[fileName]})`;
      }
      compareArr.push(newName);
      count[newName] = 1;
    }
  }

  return compareArr;
}

module.exports = {
  renameFiles
};
