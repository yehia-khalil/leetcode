/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(num, k) {
  let count=0;
  let str=String(num)
  for(let i = 0 ; i < str.length ; i++){
    let sub=str[i]
    for(let j = i+1 ; j < str.length+1 ; j++){
      if(sub.length == k ){
        if(num%Number(sub)==0){
          count++;
        }
      }
      sub+=str[j]
    }
  }
  return count;
};