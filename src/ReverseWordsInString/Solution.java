package ReverseWordsInString;

public class Solution {

    public String reverseWords(String s) {
        StringBuilder sb = new StringBuilder();
        StringBuilder ss = new StringBuilder();
        for (int i = s.length() - 1; i >= 0; i--) {
            if (s.charAt(i) != ' ') {
                ss.append(s.charAt(i));
            } else if (!ss.isEmpty()) {
                sb.append(ss.reverse());
                sb.append(' ');
                ss = new StringBuilder();
            }
        }
        sb.append(ss.reverse());
        if (sb.charAt(sb.length() - 1) == ' ') {
            sb.delete(sb.length() - 1, sb.length());
        }
        return sb.toString();
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        String s = "  hello world  ";
        System.out.println(sol.reverseWords(s));
    }

}
