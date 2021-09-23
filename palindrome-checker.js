module.exports = function (str) {
  // write your code here
  const newString = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const reversedStr = newString.split('').reverse().join('');
  return newString === reversedStr;
}
