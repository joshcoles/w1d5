function isPalindrome(s) {
  var stringReverse = s.split("").reverse().join("").replace(/\s/g, '');
  var newS = s.replace(/\s/g, '');
  return newS === stringReverse;
}

module.exports = isPalindrome;
