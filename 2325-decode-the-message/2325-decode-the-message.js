/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    let mapper ={};
  let start = 97;
  for(let letter of key){
    if(letter!=" " && !mapper[letter]){
      mapper[letter]=String.fromCharCode(start);
      start++;
    }
  }
  let sentence = message.split("").map(elem=>mapper[elem]?mapper[elem]:" ").join("");
  return sentence;
};