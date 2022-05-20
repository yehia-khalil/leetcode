/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  loop1:
    for(let i = 0 ; i < haystack.length ; i++){
      if(haystack[i]==needle[0]){
        loop2:
          for(let j = 0 ; j < needle.length ; j++){
            if(needle[j]!=haystack[j+i]){
              continue loop1;
            }
          }
        return i;
      }
    }
  return -1;
};