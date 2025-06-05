/**
 * @param {number[]} nums
 * @return {number}
 */


const nums = [1, 2, 3, 4, 5, 6]

var continuousSubarrays = function (nums) {
    var buff = []
    var res = []
    for (let i = 1; i <= nums.length; i++) {
        var windowSize = i
        var left = 0;
        var right = 0;
        while (true) {  
            buff.push(nums[right]);

            if (buff.length === windowSize) {
                res.push(buff);
                buff = [];
            } else {
                right++;
            }
        }
    }
};


console.log(...continuousSubarrays(nums));