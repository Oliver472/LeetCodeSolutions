package ValidAnagram;

import java.util.HashMap;
import java.util.Map;

public class Solution {

    /*
    Given two strings s and t, return true if t is an anagram of s, and false otherwise.
    Example 1:

    Input: s = "anagram", t = "nagaram"

    Output: true

    Example 2:

    Input: s = "rat", t = "car"

    Output: false*/

    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) return false;
        HashMap<Character, Integer> map = new HashMap();
        char[] cs = s.toCharArray();
        char[] ct = t.toCharArray();
        boolean isEmpty = true;
        for (int i = 0; i < s.toCharArray().length; i++) {
            map.put(cs[i], map.getOrDefault(cs[i], 0) + 1);
            map.put(ct[i], map.getOrDefault(ct[i], 0) - 1);
        }

        for (Map.Entry<Character, Integer> entry : map.entrySet()) {
            if (entry.getValue() != 0) {
                isEmpty = false;
                break;
            }
        }

        return isEmpty;
    }

    public static void main(String[] args) {
        String s = "a";
        String t = "ab";
        Solution solution = new Solution();
        System.out.println(solution.isAnagram(s,t));
    }
}
