/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
  let ones =[];
  for(let i = 0 ; i < boxes.length ; i++){
    if(boxes[i]==1){
      ones.push(i);
    }
  }
  let res = [];
  for(let i = 0 ; i < boxes.length ; i++){
      let ops=0;
      for(let j = 0 ; j < ones.length ; j++){
        ops+=Math.abs(i-ones[j]);
    }
    res.push(ops);
  }
  return res;
};