/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    return (nums.map(elem=>Math.pow(elem,2))).sort((a,b)=>a-b)
};