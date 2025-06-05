/**
 * @param {number[]} nums
 * @return {number}
 */

var nums = [0,0,1,1,1,2,2,3,3,4]

var removeDuplicates = function(nums) {
    var set = new Set()
    for (let i = 0; i < nums.length; i++) {
        set.add(nums[i])
    }
    var x = 0
    nums = []
    for(const num of set) {
        nums[x] = num
        x++
    }

    return nums.length
};

console.log(removeDuplicates(nums));