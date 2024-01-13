/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let intersect=[];
    let map={};
    for(item of nums1){
        map[item]=1;
    }
    for(item of nums2){
        if(map[item]){
            intersect.push(item)
        }
    }
    return [...new Set(intersect)]
};
