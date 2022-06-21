/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if(nums.length == 1){
    return nums[0];
  }
  let max = nums[0];
  let sumArr = [];
  sumArr[0]=max;
  for(let i = 1 ; i < nums.length ; i++){
    if(nums[i]>sumArr[i-1]+nums[i]){
      sumArr[i]=nums[i];
    }else{
      sumArr[i]=sumArr[i-1]+nums[i];
    }
    
  }
  return Math.max(...sumArr);
};