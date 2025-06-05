/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var nums = [1, 2, 3]

function subsets(nums) {
    const result = [];

    function backtrack(start, path) {
        // At each call, path is one subset — save a copy!
        result.push([...path]);
        console.log(result)

        // Try including each remaining element in turn
        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);            // include nums[i]
            backtrack(i + 1, path);        // recurse on remaining
            path.pop();                    // backtrack: remove nums[i]
        }
    }

    backtrack(0, []);
    return result;
}

console.log(subsets(nums));