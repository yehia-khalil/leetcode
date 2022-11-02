/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let arr = [];
  let arr2=[];
  for(let i = 0 ; i < nums.length ; i++){
    if(nums[i]%2==0){
      arr.push(nums[i])
    }else{
      arr2.push(nums[i])
    }
  }
  arr.push(...arr2);
  return arr;
};