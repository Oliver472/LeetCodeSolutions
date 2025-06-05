/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var nums = [3,0,1,0]
var k = 1
var topKFrequent = function(nums, k) {
    var map = new Map()
    var result = []
    for (var i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }

    const sortedByValue = new Map(
        [...map.entries()].sort((a, b) => b[1] - a[1] )
    );

    for (let i = 0; i < k; i++) {
        result.push(Array.from(sortedByValue.keys())[i])
    }

    return result
};


console.log(topKFrequent(nums, k));