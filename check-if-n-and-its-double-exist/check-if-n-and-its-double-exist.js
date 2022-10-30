/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
  let map={};
    for(let i = 0 ; i < arr.length ; i++){
      if(map[arr[i]/2] || map[arr[i]*2]){
        return true;
      }
      map[arr[i]]=1;
    }
  
  return false;
};