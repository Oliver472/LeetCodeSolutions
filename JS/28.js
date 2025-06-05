/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

var haystack = "leetcode"
var needle = "leeto"

var strStr = function(haystack, needle) {
    var bestIndex = -1;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            var isOk = true
            for (var j = 0; j < needle.length; j++) {
                if (haystack[i + j] !== needle[j])  {
                    isOk = false
                }
            }
            if(isOk) {
                return i
            }
        }
    }

    return bestIndex;
};

console.log(strStr(haystack, needle));