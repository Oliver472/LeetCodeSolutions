package RotateArray;

import java.util.Stack;

public class Solution {

    /*
    * Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
            Example 1:

            Input: nums = [1,2,3,4,5,6,7], k = 3
            Output: [5,6,7,1,2,3,4]
            Explanation:
            rotate 1 steps to the right: [7,1,2,3,4,5,6]
            rotate 2 steps to the right: [6,7,1,2,3,4,5]
            rotate 3 steps to the right: [5,6,7,1,2,3,4]
            Example 2:

            Input: nums = [-1,-100,3,99], k = 2
            Output: [3,99,-1,-100]
            Explanation:
            rotate 1 steps to the right: [99,-1,-100,3]
            rotate 2 steps to the right: [3,99,-1,-100]
    * */

    public void rotate(int[] nums, int k) {
        int[] pom = new int[nums.length];
        for (int i = 0; i < nums.length; i++) {
            pom[(i + k) % nums.length] = nums[i];
        }
        System.arraycopy(pom, 0, nums, 0, nums.length);
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        int[] nums = new int[]{1,2};
        int k = 3;
        sol.rotate(nums,k);
        for(int x : nums) {
            System.out.print(x);
            System.out.print(" ");
        }
    }


}
