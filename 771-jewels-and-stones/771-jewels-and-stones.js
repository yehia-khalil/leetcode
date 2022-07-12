/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
  let map = {};
  for(let letter of jewels){
    map[letter]=1;
  }
  let count = 0;
  for(let letter of stones){
    if(map[letter]){
      count++;
    }
  }
  return count;
};