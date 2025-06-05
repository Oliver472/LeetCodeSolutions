/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */

const words = ["a","b","c","d"]
const groups = [1,0,1,1]
var getLongestSubsequence = function(words, groups) {
    const n = words.length;
    var buffer = [];
    buffer.push(words[0]);
    for (let i = 0; i < n; i++) {
        if (groups[i + 1] === undefined) break
        var currState = groups[i];
        var nextState = groups[i + 1];
        if (currState !== groups[i + 1]) {
            buffer.push(words[i + 1]);
        }
    }
    return buffer;
};

console.log(getLongestSubsequence(words, groups))