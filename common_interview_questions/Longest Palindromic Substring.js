// Given a string s, return the longest palindromic substring in s.
// https://leetcode.com/problems/longest-palindromic-substring/submissions/
// https://www.udemy.com/course/ultimate-javascript-leetcode-interview-bootcamp/learn/lecture/15002228#questions

const longestPalindrome = (s) => {
    let startIndex = 0;
    let maxLength = 1;

    function expandAroundMiddle(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            const currPalLength = right - left + 1;
            if (currPalLength > maxLength) {
                maxLength = currPalLength;
                startIndex = left;
            }
            left--;
            right++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        expandAroundMiddle(i - 1, i + 1);  // odd
        expandAroundMiddle(i, i + 1);  // even
    }

    return s.slice(startIndex, startIndex + maxLength);
};


console.log(longestPalindrome('cbbd'));


// Example 1:
//
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:
//
// Input: s = "cbbd"
// Output: "bb"

