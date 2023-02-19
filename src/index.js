module.exports = function check(str, bracketsConfig) {

  let arr = str.split('');

  for (let i = 0; i < arr.length; i++) {
    for (let item of bracketsConfig) {
      if (arr[i] === item[0] && arr[i+1] === item[1]) {
        arr.splice(i, 2);
        i = i - 2;
      }
    }
  }
  return arr.length ? false : true;

  
}
