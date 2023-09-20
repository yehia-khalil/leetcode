/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let string = s.toLocaleLowerCase().replaceAll(/[\W_]+/g,"")
    if(string.length == 0){
        return true;
    }
    let i = 0 ;
    while(i <= Math.floor(string.length/2)){
        if(string[i]!=string[string.length-i-1])
            return false;
        i++;
        continue;
    }
    return true;
};