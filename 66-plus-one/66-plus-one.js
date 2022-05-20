/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  // if(digits[digits.length-1]!=9){
  //   digits.splice(digits.length-1,1,digits[digits.length-1]+1)
  //   return digits;
  // }
    return String(BigInt(digits.join(""))+1n).split("");
};