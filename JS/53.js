/**
 * @param {number[]} nums
 * @return {number}
 */

var nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

function maxSubArray(nums) {
    var sum = 0;
    var bestSum = 0;

    for (var i = 1; i < nums.length; i++) {
        sum += nums[i];
        if (sum > bestSum) {
            bestSum = sum
        }
        if (sum < 0) {
            sum = 0;
        }
    }

    return bestSum;
}


console.log(maxSubArray(nums))
