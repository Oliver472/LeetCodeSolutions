package PascalsTriangle;

import java.util.ArrayList;
import java.util.List;

public class Solution {

    public List<List<Integer>> generate(int numRows) {
        if (numRows < 1) return new ArrayList<>();
        List<List<Integer>> res = new ArrayList<>();
        for (int i = 1; i <= numRows; i++) {
            List<Integer> buff = new ArrayList<>();
            for (int j = 0; j < i; j++) {
                if (j == 0 || j == i - 1) {
                    buff.add(1);
                } else {
                    int elem = res.get(res.size() - 1).get(j) + res.get(res.size() - 1).get(j - 1);
                    buff.add(elem);
                }
            }
            res.add(buff);
        }
        return res;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        int numRows = 6;
        sol.generate(numRows);
    }

}
