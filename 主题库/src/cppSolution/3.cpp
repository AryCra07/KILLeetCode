class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        int maxLength = 0;
        map<char, int> hash;
        for (int i = 0, j = 0; i < s.size(); i ++) {
            hash[s[i]] ++;
            while (hash[s[i]] > 1) hash[s[j++]] --;
            maxLength = max(maxLength, i - j + 1);
        }
        return maxLength;
    }
};