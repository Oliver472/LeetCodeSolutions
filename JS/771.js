/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

var jewels = "aA"
var stones = "aAAbbbb"

var numJewelsInStones = function(jewels, stones) {
    var map = new Map();
    var count = 0;
    var x = 0;
    for (let i = 0; i < stones.length; i++) {
        map.set(stones[i], (map.get(stones[i]) || 0) + 1);
    }

    for(const jewel of jewels) {
        if(map.get(jewel)) {
            count += map.get(jewel)
        }
    }

    return count;
};

console.log(numJewelsInStones(jewels, stones));