package HIndex;

import java.util.Arrays;

public class Solution {
    public int hIndex(int[] citations) {
        int[] buckets = new int[citations.length + 1];
        int n = citations.length;
        for(int c : citations) {
            if (c >= n) {
                buckets[n]++;
            } else {
                buckets[c]++;
            }
        }
        int count = 0;
        for(int i = n; i >= 0; i--) {
            count += buckets[i];
            if(count >= i) {
                return i;
            }
        }

        return 0;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        int[] citations = new int[]{3, 0, 6, 1, 5};
        System.out.println(sol.hIndex(citations));
    }
}
