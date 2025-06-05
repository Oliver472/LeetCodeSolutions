/**
 * @param {string} s
 * @return {number}
 */

const s = "pwwkew"
/*var lengthOfLongestSubstring = function (s) {
    var res = [];
    var buff = [];

    for (i = 0; i < s.length; i++) {
        for (var j = i; j < s.length ; j++) {
            if (!buff.includes(s[j])) {
                buff.push(s[j]);
            } else {
                res.push(buff);
                buff = [];
                break
            }
        }
    }

    res.push(buff);
    return res.reduce((a, b) => (b.length > a.length ? b : a)).length;
};*/

var lengthOfLongestSubstring = function (s) {
    var seen = new Set();
    var maxLen = -1;
    var left = 0;
    for (let right = 0; right < s.length; right++) {
        while (seen.has(s[right])) {
            seen.delete(s[left++])
        }
        seen.add(s[right]);
        maxLen = Math.max(maxLen, seen.size);
    }

    return maxLen;
};


console.log(lengthOfLongestSubstring(s));