
const k = 5;
const multiplier = 2;
const nums = [2,1,3,5,6];


var getFinalState = function(nums, k, multiplier) {
    for(i = 0; i < k;i++) {
        const index = nums.indexOf(Math.min(...nums))
        nums[index] = nums[index] * multiplier
    }
    return nums
};

console.log(getFinalState(nums, k, multiplier))