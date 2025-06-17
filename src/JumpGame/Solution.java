package JumpGame;

public class Solution {


    public boolean canJump(int[] nums) {
        if (nums.length == 0 || nums[0] == 0) return false;
        int goal = nums.length - 1;
        for (int i = nums.length - 2; i >= 0; i--) {
            if (nums[i] + i >= goal) {
                goal = i;
            }
        }

        return goal == 0;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        int[] nums = new int[]{3, 2, 1, 0, 1, 4};
        System.out.println(sol.canJump(nums));
    }
}
