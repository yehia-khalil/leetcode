/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack=[];
  let close="])}";
  for(let i = 0 ; i < s.length ; i++){
    if(close.indexOf(s[i])!=-1){
      switch(s[i]){
        case "]":
          if(stack[stack.length-1]=="["){
            stack.pop();
            continue;
          }
          break;
        case ")":
          if(stack[stack.length-1]=="("){
            stack.pop();
            continue;
          }
          break;
        case "}":
          if(stack[stack.length-1]=="{"){
            stack.pop();
            continue;
          }
          break;
      }
    }
    stack.push(s[i]);
  }
  
  return stack.length==0;
};