package LongestPalindrome;

import java.util.HashMap;
import java.util.Map;

public class Solution {
   /* Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

    Letters are case sensitive, for example, "Aa" is not considered a palindrome.



            Example 1:

    Input: s = "abccccdd"
    Output: 7
    Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
    Example 2:

    Input: s = "a"
    Output: 1
    Explanation: The longest palindrome that can be built is "a", whose length is 1.
    */

    public int longestPalindrome(String s) {
        HashMap<Character, Integer> map = new HashMap<>();
        int max = 0;
        boolean singleChar = false;
        for (char x : s.toCharArray()) {
            map.put(x, map.getOrDefault(x, 0) + 1);
        }

        for (Map.Entry<Character, Integer> entry : map.entrySet()) {
            Integer value = entry.getValue();
            if (value % 2 == 0) {
                max += value;
            } else {
                max += value - 1;
                singleChar = true;
            }
        }

        return singleChar ? max + 1 : max;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        String s = "abcccdd";
        System.out.println(sol.longestPalindrome(s));
    }
}
