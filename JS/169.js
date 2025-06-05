/**
 * @param {number[]} nums
 * @return {number}
 */

var nums = [3, 2, 3]

var majorityElement = function (nums) {
    var map = new Map();
    var result = 0;
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)
    }

    map.forEach((value, key) => {
        if (value > (nums.length / 2)) {
            result = key
        }
    })

    return result
};

console.log(majorityElement(nums));