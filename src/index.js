module.exports = function check(str, bracketsConfig) {
  let strArr = str.split('');
  for (let item of strArr) {
    if (item === ',' || item === ' ') {
      strArr.splice(i, 1);
        i = i - 1;
    }
  } 
  for (let i = 0; i < strArr.length; i++) {
    for (let item of bracketsConfig) {
      if (strArr[i] === item[0] && strArr[i+1] === item[1]) {
        strArr.splice(i, 2);
        i = i - 2;
      }
    }
  }
  return strArr.length === 0 ? true : false;
}
