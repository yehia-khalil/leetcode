/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let i = 0;
  loop:
   while(i<nums.length){
     if(nums[i]===val){
       nums.splice(i,1);
       continue loop;
     }
     i++;
   }
};