/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let roman ={
              'I':1,
              'V':5,
              'X':10,
              'L':50,
              'C':100,
              'D':500,
              'M':1000,
             };
  let sum=0;
  let prev=roman[s[0]];
  for(let i = 0 ; i < s.length ; i++){
    console.log(sum)
    if(prev<roman[s[i]]){
      sum+=roman[s[i]]-prev-prev
      prev=roman[s[i]]
      continue;
    }
    sum+=roman[s[i]];
    prev=roman[s[i]]
  }
  return sum;
};