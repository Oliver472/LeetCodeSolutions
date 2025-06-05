/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var nums = [0,0,0,0]

var threeSum = function (nums) {
    nums.sort((a, b) => a - b)
    var result = [];
    const target = 0;
    for (let i = 0; i < nums.length; i++) {
        var left = i + 1;
        var right = nums.length - 1;
        while (left < right) {
            var sum = nums[i] + nums[left] + nums[right];
            if (sum === target) {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
            } else if (sum > target) {
                right--
            } else {
                left++;
            }
        }
    }
    return result;
};

console.log(threeSum(nums))