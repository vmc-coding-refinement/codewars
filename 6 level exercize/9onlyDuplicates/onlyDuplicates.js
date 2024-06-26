/**
 * https://www.codewars.com/kata/5a1dc4baffe75f270200006b/train/javascript
 * @param {string} str 
 * @returns the string with only duplicate characters
 */
function keepOnlyDuplicates(str) {
  return str.split('').reduce((res, char) => {
    return res.includes(char) || (new RegExp(`${char}.*${char}`)).test(str)
      ? res + char
      : res;
  }, '');
}

module.exports = keepOnlyDuplicates;
