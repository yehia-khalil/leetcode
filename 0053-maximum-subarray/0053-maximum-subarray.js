/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
 let max = -10000000;
  let sum = -10000000;
  for(let i = 0 ; i < nums.length ;i++){
   sum+=nums[i];
      if(nums[i]>sum){
          sum=nums[i]
      }
      if(sum>max){
          max=sum;
      }
  }
  return max;
};
