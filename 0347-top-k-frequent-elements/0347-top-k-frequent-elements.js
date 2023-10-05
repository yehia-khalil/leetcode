/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = {};
    for (let item of nums){
        if(map[item]){
            map[item]+=1;
        }else{
            map[item]=1;
        }
    }
    let arr = Object.keys(map).sort((a,b)=>map[b]-map[a]).map(Number);
    arr.splice(k);
    return arr;
};