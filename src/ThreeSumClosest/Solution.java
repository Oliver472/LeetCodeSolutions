package ThreeSumClosest;

import java.util.Arrays;

public class Solution {


    public int threeSumClosest(int[] nums, int target) {
        Arrays.sort(nums);
        int sum = Integer.MAX_VALUE;

        for (int i = 0 ; i < nums.length - 2 ; i++) {
            int left = i + 1, right = nums.length - 1;
            while (left < right) {
                int locSum = nums[left] + nums[right] + nums[i];
                if (Math.abs(locSum - target) < Math.abs(sum - target)) {
                    sum = locSum;
                }
                if (locSum < target) {
                    left++;
                } else if (locSum > target) {
                    right--;
                } else return locSum;
            }
        }

        return sum;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        int[] nums = new int[]{-1, 2, 1, -4};
        int target = 1;
        System.out.println(sol.threeSumClosest(nums, target));
    }
}
