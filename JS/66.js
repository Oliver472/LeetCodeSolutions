/**
 * @param {number[]} digits
 * @return {number[]}
 */

var digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]

var plusOne = function (digits) {
    var res = BigInt(digits.join(''))
    res++;
    return res.toString().split('').map(Number)
};

console.log(plusOne(digits));