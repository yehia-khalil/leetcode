/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    let map = {};
  for(let i = 0 ; i < groupSizes.length ; i++){
    if(!map[groupSizes[i]]){
      map[groupSizes[i]]=[i]
    }else{
      map[groupSizes[i]]=[...map[groupSizes[i]],i];
    }
  }
  let res=[];
  let keys = Object.keys(map);
  for(let i = 0 ; i < keys.length ; i++){
    let arr = map[keys[i]];
    while(arr.length>0){
      res.push(arr.splice(0,keys[i]));
    }
  }
  return res;
};