/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let max = nums.length;
    let memo = {};
    for(let i = 0 ; i <= max ; i++){
        memo[i]=1;
    }
    for(let i = 0 ; i <= max ; i++){
        memo[nums[i]]+=1;
    }
    let missing;
    Object.keys(memo).forEach(key => {
        if(memo[key] == 1){
            missing =  key;
        }
    });
    return missing;
};