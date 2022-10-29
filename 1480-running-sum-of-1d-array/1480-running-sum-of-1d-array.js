/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    return nums.map(function(elem,i){
      if(nums[i-1]){
        return nums[i]=nums[i]+nums[i-1]
      }
      return nums[i];
    })
};