package LongestCommonPrefix;

public class Solution {

    /*
    * Write a function to find the longest common prefix string amongst an array of strings.

        If there is no common prefix, return an empty string "".



        Example 1:

        Input: strs = ["flower","flow","flight"]
        Output: "fl"
        Example 2:

        Input: strs = ["dog","racecar","car"]
        Output: ""
        Explanation: There is no common prefix among the input strings.
    * */

    public String longestCommonPrefix(String[] strs) {
        if (strs.length == 0) return "";

        String base = strs[0];
        for (int i = 0; i < base.length(); i++) {
            for (String word : strs) {
                if ((word.charAt(i) != base.charAt(i)) || (i == word.length())) {
                    return base.substring(0, i);
                }
            }
        }

        return base;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        String[] strs = new String[]{"flower", "flow", "flight"};
        System.out.println(sol.longestCommonPrefix(strs));
    }
}
