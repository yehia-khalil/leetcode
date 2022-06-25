/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
  let s=[];
  s.push(...nums);
  s.push(...nums);
  return s;
};