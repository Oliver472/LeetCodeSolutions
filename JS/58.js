/**
 * @param {string} s
 * @return {number}
 */

var s = "   fly me   to   the moon  "

var lengthOfLastWord = function(s) {
    var gg = false
    var result = ""
    for (let i = s.length - 1; i > -1; i--) {
        if (s[i] !== " " && gg === false) {
            gg = true
            for (let j = i; j > -1; j--) {
                if (s[j] === " ") {
                    break
                } else {
                    result += s[j]
                }
            }
            break
        }
    }
    return result.split("").reverse().join("").length
};


console.log(lengthOfLastWord(s));