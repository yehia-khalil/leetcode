/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let arr=[];
  for(let i = 1 ; i <= n ; i++){
    if(i%3==0 && i%5==0){
      arr[i]='FizzBuzz'
    }else{
      if(i%3==0){
        arr[i]='Fizz'
      }else if(i%5==0){
        arr[i]='Buzz'
      }else{
        arr[i]=`${i}`
      }
    }
  }
  arr.shift()
  return arr;
};