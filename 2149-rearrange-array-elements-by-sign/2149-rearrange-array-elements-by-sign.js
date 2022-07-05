/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let pos = nums.filter(item=>item>0);
  let neg = nums.filter(item=>item<0);
  let res = [];
  for(let i = 0 ; i < pos.length ; i++){
    res.push(pos[i],neg[i]);
  }
  return res;
};