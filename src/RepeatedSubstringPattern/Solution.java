package RepeatedSubstringPattern;

import java.util.HashMap;
import java.util.Map;

public class Solution {

    /*
    * Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.



        Example 1:

        Input: s = "abab"
        Output: true
        Explanation: It is the substring "ab" twice.
        Example 2:

        Input: s = "aba"
        Output: false

            * */

    public boolean repeatedSubstringPattern(String s) {
        String doubled = s + s;
        String trimmed = doubled.substring(1, doubled.length() - 1);
        return trimmed.contains(s);
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        String s = "aba";
        System.out.println(sol.repeatedSubstringPattern(s));
    }
}
