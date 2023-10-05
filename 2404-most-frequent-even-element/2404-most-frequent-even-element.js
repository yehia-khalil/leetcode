/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    let map = {};
    for(item of nums){
        if(item%2 != 0){
            continue;
        }
        if(map[item]!=undefined){
            map[item]+=1;
        }else{
            map[item]=1;
        }
    }
    if(Object.keys(map).length==0){
        return -1;
    }
    let memo = {};
    for(item in map){
        if(!memo[map[item]]){
            memo[map[item]]=[item]
        }else{
            memo[map[item]]=[...memo[map[item]],item]
        }
    }
    let min=undefined
    for(item in memo){
        min=Math.min(...memo[item]);
    }
    return min??-1;
};