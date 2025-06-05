/**
 * @param {number[]} nums
 * @return {number}
 */

var nums = [0,3,7,2,5,8,4,6,0,1]

var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0
    var set = new Set()
    for(const num of nums) {
        set.add(num)
    }

    var longest = 1;

    for(const num of set) {
        if (!set.has(num + 1)) {
            continue;
        } else {
            var current = num;
            var currLongest = 1
            while(set.has(current + 1)) {
                currLongest++;
                current++;
            }
            if (currLongest > longest) {
                longest = currLongest;
            }
        }
    }

    return longest;
};

console.log(longestConsecutive(nums));