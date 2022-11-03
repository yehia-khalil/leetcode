/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let i = 0;
  let c = 0;
  while(i < nums.length){
    if(i==nums.length-c){
      break;
    }
    if(nums[i]==val){
      let temp = nums[nums.length-c-1];
      nums[nums.length-c-1]=nums[i];
      nums[i]=temp;
      c++;
    }else{
      i++;
    }
  }
  return nums.length-c;
};