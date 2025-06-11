package MaxDiffBetEvenAndOdd;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;

public class Solution {

    public int maxDifference(String s) {
        HashMap<Character, Integer> map = new HashMap<>();
        int max = Integer.MIN_VALUE;
        for (char ch : s.toCharArray()) {
            map.put(ch, map.getOrDefault(ch, 0) + 1);
        }

        for (Map.Entry<Character, Integer> entry : map.entrySet()) {
            char key = entry.getKey();
            int value = entry.getValue();
            for (Map.Entry<Character, Integer> entry2 : map.entrySet()) {
                char key2 = entry2.getKey();
                int value2 = entry2.getValue();
                if ((value % 2 != 0) && (value2 % 2 == 0) && (key != key2)) {
                    int diff = value - value2;
                    max = (Math.max(max, diff));
                }
            }
        }

        return max;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        String s = "tzt";
        System.out.println(sol.maxDifference(s));
    }
}
