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
    let max= -Infinity;
    let num = Infinity;
    for(item in map){
        if(map[item]>=max){
            max=map[item];
        }
    }
    console.log(map)
    console.log(max)
    for(item in map){
        if(map[item] == max){
            if(Number(item)<num){
                num=Number(item)
            }
        }
    }
    return num;
};