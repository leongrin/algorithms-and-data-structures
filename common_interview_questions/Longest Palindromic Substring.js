// Given a string s, return the longest palindromic substring in s.

const longestPalindrome = (s) => {
    if (!s.length) return '';

    let longest = '';

    const expandFromCenter = (s, left, right) => {
        let i = 0;
        while (s[left - i] && s[left - i] === s[right + i]) {
            i++;
        }
        i--;
        return s.slice(left - i, right + i + 1);
    }

    for (let i = 0; i < s.length; i++) {
        let oddPalindrome = expandFromCenter(s, i, i);
        let evenPalindrome = expandFromCenter(s, i - 1, i);

        if (oddPalindrome.length > longest.length) longest = oddPalindrome;
        if (evenPalindrome.length > longest.length) longest = evenPalindrome;
    }

    return longest;
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

