/**
 * @param {number[]} nums
 * @return {boolean}
 */



const nums = [1,2,3,1]


var containsDuplicate = function(nums) {
    var set = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            return true
        }
        set.add(nums[i]);
    }

    return false
};


console.log(containsDuplicate(nums));