/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

var groupAnagrams = function (strs) {
    var map = new Map();

    for (let i = 0; i < strs.length; i++) {
        const count = new Array(26).fill(0);
        for (const c of strs[i]) {
            const index = c.charCodeAt(0) - 'a'.charCodeAt(0);
            count[index]++;
        }

        var key = ""
        for (let j = 0; j < 26; j++) {
            key += "#" + count[j]
        }

        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(strs[i]);
    }

    return Array.from(map.values());
};

console.log(groupAnagrams(strs));