/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max(...candies);
    let arr = [];
    candies.forEach(element=>{
      if(element+extraCandies >= max){
        arr.push(true)
      }else{
        arr.push(false)
      }
    })
  return arr;
};