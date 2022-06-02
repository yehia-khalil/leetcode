/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let memo = {};
  for(let item of nums){
    if(!memo[item]){
      memo[item]=1;
      continue;
    }
    memo[item]=memo[item]+1;
  }
  for(let key in memo){
    if(memo[key]==1) return key;
  }
};