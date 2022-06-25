/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
  let s=[];
  loop:
  for(let i = 0 ; i < nums.length ; i++){
    s.push(nums[i]);
  }
  for(let i = 0 ; i < nums.length ; i++){
    s.push(nums[i]);
  }
  return s;
};