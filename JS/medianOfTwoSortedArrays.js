/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

const nums1 = [2]
const nums2 = []

var findMedianSortedArrays = function (nums1, nums2) {
    var arr = [...nums1, ...nums2]
    for (let i = 0; i < arr.length; i++) {
        if (arr.length <= 1) {
            break
        }
        while (arr[i] !== arr[arr[i] - 1]) {
            let correctIndex = arr[i] - 1;
            [arr[i], arr[correctIndex]] = [arr[correctIndex], arr[i]];
        }
    }

    return (arr.length % 2 !== 0) ? arr[(Math.floor(arr.length / 2))] : (arr[(Math.floor(arr.length / 2) - 1)] + arr[(Math.floor(arr.length / 2))]) / 2
};

console.log(findMedianSortedArrays(nums1, nums2))