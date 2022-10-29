/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let arr = nums.filter(elem=>String(elem).length%2==0);
  return arr.length;
};