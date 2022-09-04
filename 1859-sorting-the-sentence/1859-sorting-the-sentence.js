/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
  let sorted=[];
  let x = s.split(" ");
  for(word of x){
    sorted[word[word.length-1]-1]=word.slice(0,word.length-1);
  }
  return sorted.join(" ");
};