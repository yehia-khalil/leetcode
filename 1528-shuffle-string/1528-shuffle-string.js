/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
  let d = new Array(s.length);
  for(let i = 0 ; i < s.length ; i++){
    d[indices[i]]=s[i];
  }
    return d.join("");
};