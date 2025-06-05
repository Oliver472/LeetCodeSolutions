package GroupAnagrams;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class Solution {
/*

    Given an array of strings strs, group the anagrams together. You can return the answer in any order.



            Example 1:

    Input: strs = ["eat","tea","tan","ate","nat","bat"]

    Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

    Explanation:

    There is no string in strs that can be rearranged to form "bat".
    The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
    The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
*/

    public List<List<String>> groupAnagrams(String[] strs) {
        HashMap<String, List<String>> map = new HashMap<>();
        for(String s : strs) {
            int[] count = new int[26];
            StringBuilder sb = new StringBuilder();

            for (char ch : s.toCharArray()) {
                int index = ch - 'a';
                count[index]++;
            }

            for (int i = 0; i < 26; i++) {
                sb.append("#").append(count[i]);
            }

            if (map.containsKey(sb.toString())) {
                map.get(sb.toString()).add(s);
            } else {
                List<String> list = new ArrayList<>();
                list.add(s);
                map.put(sb.toString(), list);
            }

        }

        return new ArrayList<>(map.values());
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        String[] strs = {"eat", "tea", "tan", "ate", "nat", "bat"};
        System.out.println(sol.groupAnagrams(strs));
    }
}
