package LongestPalindromicSubstr;

import java.util.ArrayDeque;
import java.util.Deque;

public class Solution {

    /*
    * Example 1:

        Input: s = "babad"
        Output: "bab"
        Explanation: "aba" is also a valid answer.
        Example 2:

        Input: s = "cbbd"
        Output: "bb"
    * */

    public String longestPalindrome(String s) {
        if (s.isEmpty()) return "";
        int[] ans = new int[]{0, 0};
        int max = 0;
        for (int i = 0; i < s.length(); i++) {
            int currMax = 1;
            int left = i - 1;
            int right = i + 1;
            while (( right < s.length()) && (s.charAt(right) == s.charAt(i))) {
                currMax++;
                if (currMax > max) {
                    max = currMax;
                    ans[0] = i;
                    ans[1] = right;
                }
                right++;
            }
            while ((left >= 0 && right < s.length()) && (s.charAt(left) == s.charAt(right))) {
                currMax += 2;
                if (currMax > max) {
                    max = currMax;
                    ans[0] = left;
                    ans[1] = right;
                }
                left--;
                right++;
            }
        }

        return s.substring(ans[0], ans[1] + 1);
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        String s = "cbbd";
        System.out.println(sol.longestPalindrome(s));
    }
}
