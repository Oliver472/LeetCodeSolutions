package RansomNote;

import java.util.HashMap;

public class Solution {

    public boolean canConstruct(String ransomNote, String magazine) {
        HashMap<Character, Integer> map = new HashMap<>();
        for(char ch : magazine.toCharArray()) {
            map.put(ch, map.getOrDefault(ch, 0) + 1);
        }

        for(char ch : ransomNote.toCharArray()) {
            if (map.containsKey(ch) && map.get(ch) > 0){
                map.put(ch, map.getOrDefault(ch, 0) - 1);
            } else {
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        String ransomNote = "aaa";
        String magazine = "aab";
        System.out.println(sol.canConstruct(ransomNote, magazine));
    }
}
