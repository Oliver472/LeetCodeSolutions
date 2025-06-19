package MinSizeSubArrSum;

import java.util.Arrays;

public class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        int left = 0;
        int right = 0;
        int sum = 0;
        int minCount = Integer.MAX_VALUE;
        while (right < nums.length) {
            sum += nums[right++];
            while (sum >= target) {
                minCount = Math.min(minCount, right - left);
                sum -= nums[left++];
            }
        }

        return minCount == Integer.MAX_VALUE ? 0 : minCount;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        int target = 7;
        int[] nums = new int[]{2, 3, 1, 2, 4, 3};
        System.out.println(sol.minSubArrayLen(target, nums));
    }
}
