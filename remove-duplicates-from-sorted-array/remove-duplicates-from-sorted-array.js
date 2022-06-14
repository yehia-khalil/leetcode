/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  loop1:
    for(let i = 1 ; i < nums.length ; i++){
      if(nums[i]==nums[i-1]){
        nums.splice(i,1);
        i--;
        continue loop1;
      }
    }
  return nums.length;
};