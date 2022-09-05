/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
  let colCount=0;
  let astriscs=0;
  for(let i = 0 ; i < s.length ; i++){
    if(colCount%2==0){
      if(s[i]=='*'){
        astriscs++;
      }
    }
    if(s[i]=='|'){
      colCount++;
    }
  }
  return astriscs;
};