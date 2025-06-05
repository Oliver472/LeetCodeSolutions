/**
 * @param {string} s
 * @return {number}
 */


var s = "a"

var longestPalindrome = function(s) {
    var map = new Map();
    var count = 0;
    var isSingle = false
    for(const char of s) {
        map.set(char, (map.get(char ) || 0) + 1)
    }

    map.forEach((val, i) => {
        if (val % 2 === 0) {
            count = count + val
        } else {
            isSingle = true
        }
    })

    if (isSingle) {
        count += 1
    }

    return count
};

console.log(longestPalindrome(s));