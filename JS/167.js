/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

var numbers = [2, 7, 11, 15]
var target = 9
var twoSum = function (numbers, target) {
    var left = 0
    var right = numbers.length - 1
    var sum = numbers[0] + numbers[right];

    while (left < right) {
        if (sum === target) {
            return [left + 1, right + 1]
        }
        if (sum > target) {
            right--;
        } else {
            left++
        }
        sum = numbers[left] + numbers[right];
    }
};

console.log(twoSum(numbers, target));