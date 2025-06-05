package LongestSubstringWithoutRepeatingChars;

import java.util.Collection;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

public class Solution {

    /*
    * Given a string s, find the length of the longest substring without duplicate characters.

        Example 1:

        Input: s = "abcabcbb"
        Output: 3
        Explanation: The answer is "abc", with the length of 3.
        Example 2:

        Input: s = "bbbbb"
        Output: 1
        Explanation: The answer is "b", with the length of 1.
        Example 3:

        Input: s = "pwwkew"
        Output: 3
        Explanation: The answer is "wke", with the length of 3.
        Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

          * */

    public int lengthOfLongestSubstring(String s) {
        HashSet<Character> set = new HashSet<>();
        int max = 0;
        int pointer = 0;
        char[] sc = s.toCharArray();

        while (pointer < sc.length) {
            if (set.add(sc[pointer])) {
                pointer++;
                if (set.size() > max) {
                    max = set.size();
                }
            } else {
                pointer = pointer - (set.size() - 1);
                set.removeAll(set);
            }
        }

        return max;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        String s = "dvdf";
        System.out.println(sol.lengthOfLongestSubstring(s));
    }
}
