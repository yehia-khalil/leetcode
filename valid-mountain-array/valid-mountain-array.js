/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
  if(arr.length<3){
    return false;
  }
  let i = 0;
  for(i ; i < arr.length ; i++){
    if(arr[i]>=arr[i+1]){
      break;
    }
  }
  if(i==arr.length || i==0){
    return false;
  }
  for(let j = arr.length-1 ; j > i ; j--){
    if(arr[j]>=arr[j-1]){
      return false;
    }
  }
  return true;
};