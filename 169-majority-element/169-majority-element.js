 /**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let map = {};
  let max = 0;
  let index=0;
  for(let i = 0 ; i < nums.length ; i++){
    map[nums[i]] = map[nums[i]] ? map[nums[i]]+1 : 1;
    if(map[nums[i]] > max){
      max=map[nums[i]];
      index=nums[i];
    }
  }
  return index;
};