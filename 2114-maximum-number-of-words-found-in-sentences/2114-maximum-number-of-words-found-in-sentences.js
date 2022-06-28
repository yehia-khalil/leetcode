/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(s) {
    let max = -Infinity;
  for(let i = 0 ; i < s.length ; i++){
    let arr = s[i].split(" ");
    let count = arr.length;
    if(count>max){
      max=count;
    }
  }
  return max;
};