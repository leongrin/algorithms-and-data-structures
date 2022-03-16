// Given a string s, find the length of the longest substring without repeating characters.

const lengthOfLongestSubstring = (s) => {
    let set = new Set();
    let left = 0;
    let right = 0;
    let maxCount = 0;

    while (right < s.length) {
        if (!set.has(s[right])) {
            set.add(s[right]);
            maxCount = Math.max(maxCount, set.size);
            right++;
        } else {
            set.delete(s[left]);
            left++;
        }
    }

    return maxCount;
};


console.log(lengthOfLongestSubstring("dvdf"))



// Example 1:
//
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:
//
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:
//
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

