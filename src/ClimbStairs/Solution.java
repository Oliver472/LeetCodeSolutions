package ClimbStairs;

public class Solution {

    public int climbStairs(int n) {
        if (n == 1) return 1;
        if (n == 2) return 2;

        int first = 1;
        int second = 2;

        for (int i = 3; i <= n; i++) {
            int third = first + second;
            first = second;
            second = third;
        }

        return second;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        int n = 44;
        System.out.println(sol.climbStairs(n));
    }
}
