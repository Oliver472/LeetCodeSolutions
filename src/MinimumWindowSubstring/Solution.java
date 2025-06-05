package MinimumWindowSubstring;

import java.util.HashMap;

public class Solution {

    /*
    Given two strings s and t of lengths m and n respectively,
     return the minimum window substring of s such that every character
     in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

        The testcases will be generated such that the answer is unique.

        Example 1:

        Input: s = "ADOBECODEBANC", t = "ABC"
        Output: "BANC"
        Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
        Example 2:

        Input: s = "a", t = "a"
        Output: "a"
        Explanation: The entire string s is the minimum window.
        Example 3:

        Input: s = "a", t = "aa"
        Output: ""
        Explanation: Both 'a's from t must be included in the window.
        Since the largest window of s only has one 'a', return empty string.ł



     */

    public String minWindow(String s, String t) {
        int left = 0, right = 0;
        char[] sa = s.toCharArray(), ta = t.toCharArray();

        int[] ans = new int[]{0, 0, 0};

        HashMap<Character, Integer> Tmap = new HashMap<>();
        HashMap<Character, Integer> map = new HashMap<>();

        for (char x : t.toCharArray()) {
            Tmap.put(x, (Tmap.getOrDefault(x, 0)) + 1);
        }

        int unique = Tmap.keySet().size();
        int created = 0;

        while (left < s.length() - 1) {
            char ch = s.charAt(right);
            map.put(ch, (map.getOrDefault(ch, 0)) + 1);

            if (Tmap.containsKey(ch) && !map.containsKey(ch)) {
                created++;
            }

            while (left < right && unique == created) {
                ch = s.charAt(left);
                ans[0] = Math.abs(left - right);
                ans[1] = left;
                ans[2] = right;
                if (map.containsKey(ch)) {
                    map.put(ch, (map.getOrDefault(ch, 0)) - 1);
                    if (map.get(ch) == 0) {
                        map.remove(ch);
                        created--;
                    }
                }

                left++;
            }
            right++;

        }

        return s.substring(ans[1], ans[2]);
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        String s = "ADOBECODEBANC";
        String t = "ABC";
        System.out.println(sol.minWindow(s, t));
    }
}
