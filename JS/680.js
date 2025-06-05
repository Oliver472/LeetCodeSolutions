/**
 * @param {string} s
 * @return {boolean}
 */

var s = "abac"

var validPalindrome = function(s) {
    var left = 0;
    var right = s.length - 1;

    var isPalindrome = function(start, end) {
        while (start < end) {
            if (s[start] !== s[end]) {
                return false;
            }
            start++
            end--;

        }
        return true;
    }

    while (left < right) {
        if (s[left] !== s[right]) {
            return isPalindrome(left, right) || isPalindrome(left, right - 1);
        }
        left++;
        right--;
    }

    return true
};

console.log(validPalindrome(s))