/**
 * @param {string} s
 * @return {string}
 */

var s = "babad"

var longestPalindrome = function (s) {
    var result = [];
    var maxSteps = 0;
    for (let i = 0; i < s.length; i++) {
        var steps = 0;
        var left = i - 1;
        var right = i + 1;
        while(true) {
            if (left >= 0 && right < s.length && s[right] === s[left]) {
                steps++;
                left--;
                right++
            } else {
                break
            }
            if (steps > maxSteps) {
                maxSteps = steps
                result.push(left + 1)
                result.push(right - 1)
            }
        }
    }

    for (var j = result[0]; j < result[1] + 1; j++) {
        console.log(s[j])
    }
    return result
};


console.log(longestPalindrome(s))