/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let s = [];
    nums.forEach((elem,i,arr)=>{
      if(i>0){
        s.push(elem+s[i-1]);
        return;
      }
      s.push(elem);
      return;
    })
    return s;
};