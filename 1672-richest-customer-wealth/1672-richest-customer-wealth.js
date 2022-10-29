/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    return Math.max(...accounts.map(elem=>elem.reduce((prev,curr)=>prev+curr)));
};