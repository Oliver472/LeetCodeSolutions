/**
 * @param {string} s
 * @return {boolean}
 */

var  s = "0P"
var isPalindrome = function(s) {
    var sMod = s.replace(/[^a-zA-Z]/g, '').toLowerCase();
    var left = 0;
    var right = sMod.length - 1;
    var result = true
    while (left < right) {
        if (sMod[left] !== sMod[right]) {
            result = false;
        }
        left++;
        right--;
    }
    return result;
};


console.log(isPalindrome(s));