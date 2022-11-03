/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let map = {};
  for(let i = 1 ; i <= nums.length ; i++){
    map[i]=1;
  }
  for(let i = 0 ; i < nums.length ; i++){
    if(map[nums[i]]){
      delete map[nums[i]];
    }
  }
  return Object.keys(map);
};