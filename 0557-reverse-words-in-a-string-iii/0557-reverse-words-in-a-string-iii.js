/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(" ").map((item,index)=>{
        return item.split("").reverse().join("");
    }).join(" ");
};