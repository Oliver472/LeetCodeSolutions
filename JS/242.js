/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var s = "rat"
var t = "car"

var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    var result = true;
    var map = new Map();
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);
        map.set(t[i], (map.get(t[i]) || 0) - 1);
    }

   map.forEach((val, key) => {
       console.log(val ,key)
       if (val !== 0) {
           result = false;
       }
   })

    return result
};


console.log(isAnagram(s, t));