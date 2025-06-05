/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */


var s = "abc"
var t = "ahbgdc"
var isSubsequence = function (s, t) {
    var string = s
    for (let i = 0; i < t.length; i++) {
        if (t[i] === string[0]) {
            string = string.slice( 1);
        }
    }
    return string === "";
};


console.log(isSubsequence(s, t));