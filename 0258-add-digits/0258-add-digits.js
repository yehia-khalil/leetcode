/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if (`${num}`.length == 1) return num;

    let flag = true;
    let sum;
    while(flag){
        let str = `${num}`.split("");
        sum = str.map(Number).reduce((item, accumulator) => item + accumulator, 0);
        if(`${sum}`.length == 1){
            flag = false;
        }
        num = sum;
    }
    return sum;
};