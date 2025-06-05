/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var nums = [1, 3, 5, 6]
var target = 7

var searchInsert = function (nums, target) {
    var found = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            found = i;
            break
        }
       if (nums[i] < target) {
           found  = i + 1
       }
    }
    return found
};

console.log(searchInsert(nums, target));