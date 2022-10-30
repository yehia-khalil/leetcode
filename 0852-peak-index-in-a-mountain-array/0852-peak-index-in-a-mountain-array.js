/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
  let max = -Infinity;
  let i = 0;
  for(i;i<arr.length;i++){ 
    if(arr[i]>max){
      max=arr[i];
    }else{
      i--;
      break;
    }
  }
  return i;
};