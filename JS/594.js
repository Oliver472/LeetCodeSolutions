/**
 * @param {number[]} nums
 * @return {number}
 */

var nums = [1, 3, 2, 2, 5, 2, 3, 7]

var findLHS = function (nums) {
    var c = 0;
    var best  = 0 ;

    for (var i = 0; i < nums.length; i++) {
        for (var j = i  ; j < nums.length; j++) {
            if ((nums[j] === nums[i] + 1) || (nums[j] === nums[i] - 1) ) {
                c++;
            }
        }
        if (c > best) {
            best = c
        }
        c = 0
    }

    return best
};


console.log(findLHS(nums));