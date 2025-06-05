/**
 * @param {number[]} height
 * @return {number}
 */

var height = [1, 8, 6, 2, 5, 4, 8, 3, 7]

var maxArea = function (height) {
    var left = 0;
    var right = height.length - 1;
    var max = 0;
    while (left < right) {
        var sum = 0;
        var distance = (Math.abs(left - right))
        if (height[left] > height[right]) {
            sum = height[right] * distance;
        } else {
            sum = height[left] * distance;
        }

        if (sum > max) {
            max = sum;
        }

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return max;
};

console.log(maxArea(height));