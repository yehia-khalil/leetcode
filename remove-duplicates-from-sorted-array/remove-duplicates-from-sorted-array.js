/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let ptr;
  let worm;
  let x = 0;
  ptr=worm=nums[x];
  for(let i = 1 ; i <= nums.length ; i++){
    worm=nums[i];
    if(ptr!==worm){
      x++;
      nums[x]=worm;
      ptr=nums[x];
    }else{
      continue;
    }
  }
  nums.length = x;
  return nums.length;
};