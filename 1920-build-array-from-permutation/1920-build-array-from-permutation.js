/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    return nums.map((elem, i)=>{
      return nums[elem];
    })
};