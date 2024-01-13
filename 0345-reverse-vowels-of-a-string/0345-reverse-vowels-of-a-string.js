/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = {
        "a": true, "e": true, "i": true, "o": true, "u": true,
        "A": true, "E": true, "I": true, "O": true, "U": true
    };
    let str =[];
    str.length = s.length;
    let ptr1 = 0;
    let ptr2 = s.length-1;
    
    while(ptr1 <= ptr2){
        if(!vowels[s[ptr1]]){ // if first ptr is not on vowel
            str[ptr1] = s[ptr1];
            ptr1++;
            continue;
        }
        if(!vowels[s[ptr2]]){ // if second ptr is not on vowel
            str[ptr2] = s[ptr2];
            ptr2--;
            continue;
        }
        
        if(vowels[s[ptr1]] && vowels[s[ptr2]]){
            str[ptr2] = s[ptr1];
            str[ptr1] = s[ptr2];
            ptr1++;
            ptr2--;
        }
    }
    return str.join('');
};