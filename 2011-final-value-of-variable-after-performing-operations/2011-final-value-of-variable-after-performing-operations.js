/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let init = 0;
  for(let i = 0 ; i < operations.length ; i++){
    switch(operations[i][1]){
      case "-":
        init--;
        break;
      case "+":
        init++;
        break;
    }
  }
  return init;
};