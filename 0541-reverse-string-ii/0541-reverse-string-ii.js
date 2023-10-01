/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    if(s.length < k){
        return s.split("").reverse().join("");
    }
    s = s.split("");
    let sub1 = s.splice(k);
    s = s.reverse();
    s = s.concat(sub1);
    for(let i = 0+2*k ; i < s.length ; i+=2*k){
        let sub = s.slice(i,i+k);
        sub = sub.reverse(); 
        s.splice(i,k,...sub)
    }
    return s.join("");
};