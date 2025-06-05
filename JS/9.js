/**
 * @param {number} x
 * @return {boolean}
 */

var x = 10

var isPalindrome = function(x) {
    if (x < 0) return false;
    var s = x.toString();
    var left = 0;
    var right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
};

console.log(isPalindrome(x));

