/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let target = new Array();
  for(let i = 0 ; i < index.length ; i++){
    target.splice(index[i],0,nums[i]);
  }
  return target;
};