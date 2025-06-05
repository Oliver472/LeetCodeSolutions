package SpecialArray1;

public class Solution {

   /* An array is considered special if the parity of every pair of adjacent elements is different. In other words, one element in each pair must be even, and the other must be odd.

    You are given an array of integers nums. Return true if nums is a special array, otherwise, return false.

    Example 1:

    Input: nums = [1]

    Output: true

    Explanation:

    There is only one element. So the answer is true.

    Example 2:

    Input: nums = [2,1,4]

    Output: true

    Explanation:

    There is only two pairs: (2,1) and (1,4), and both of them contain numbers with different parity. So the answer is true.

    Example 3:

    Input: nums = [4,3,1,6]

    Output: false

    Explanation:

    nums[1] and nums[2] are both odd. So the answer is false.*/

    public boolean isArraySpecial(int[] nums) {
        boolean isSpecial = true;
        for (int i = 0; i < nums.length; i++) {
            if ((i + 1) >= nums.length) break;
            if (((nums[i] % 2 == 0) && nums[i + 1] % 2 == 0) || ((nums[i] % 2 != 0) && nums[i + 1] % 2 != 0)) {
                isSpecial = false;
                break;
            }
        }

        return isSpecial;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        int[] nums = new int[]{1};
        System.out.println(sol.isArraySpecial(nums));
    }
}
