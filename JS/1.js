/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var nums = [2,7,11,15]
var target = 9;

var twoSum = function(nums, target) {
    var map = new Map();

    for (var i = 0; i < nums.length; i++) {
       map.set(nums[i], i);
    }

    for (let i = 0; i < nums.length; i++) {
        if (map.get(target - nums[i]) && (map.get(target - nums[i]) !== i) ) {
            return [i, map.get(target - nums[i])]
        }
    }
};


console.log(twoSum(nums, target));