/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let obj = {}
   for (const key of allowed.split("")) {
    obj[key] = 1;
   }
  let count = 0;
  loop1:
  for(let word of words){
    for(let letter of word){
      if(!obj[letter]) continue loop1;
    }
    count++;
  }
  return count;;
};