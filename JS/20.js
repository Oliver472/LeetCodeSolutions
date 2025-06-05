/**
 * @param {string} s
 * @return {boolean}
 */

var  s = "()[]{}";
var isValid = function(s) {
    var map = new Map();

    for(const b of s) {
        map.set(b, (map.get(b) || 0) + 1)
    }

    console.log(map)
};


console.log(isValid(s));