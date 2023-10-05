/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let frequency = nums.length/3;
    let map = {};
    for (let item of nums){
        if(map[item]){
            map[item]+=1;
        }else{
            map[item]=1;
        }
    }
    let arr =[];
    for(let key in map){
        if(map[key]>frequency){
            arr.push(key)
        }
    }
    return arr;
};