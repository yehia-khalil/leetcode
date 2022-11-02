/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let zeros = [];
  loop1:
    for(let i = 0 ; i < nums.length ; i++){
      if(nums[i]==0){
        zeros.push(nums.splice(i,1)[0]);
        i--;
        continue loop1;
      }
    }
  zeros.forEach(elem=>nums.push(elem))
};