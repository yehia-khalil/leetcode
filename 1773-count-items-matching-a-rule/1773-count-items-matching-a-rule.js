/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let keys = {
      "type":0,
      "color":1,
      "name":2
    };
        let indi = keys[ruleKey];
  let count=0;
  for(let i = 0 ; i < items.length ; i++){
    if(items[i][indi]==ruleValue){
      count++;
    }
  }
  return count;
};