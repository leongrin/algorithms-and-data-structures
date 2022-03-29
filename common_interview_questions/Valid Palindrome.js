// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
// it reads the same forward and backward. Alphanumeric characters include letters and numbers.
//
// Given a string s, return true if it is a palindrome, or false otherwise.

const isPalindrome = (s) => {
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let start = 0;
    let end = s.length - 1;

    function trySubString(str) {
        let startIn = 0;
        let endIn = str.length - 1;
        while (startIn < endIn) {
            if (str[startIn] !== str[endIn]) return false;
            startIn++;
            endIn--;
        }
        return true;
    }

    while (start < end) {
        if (s[start] !== s[end]) {
            let stringStartPlus = s.slice(start + 1, end + 1);
            let stringEndMinus = s.slice(start, end);
            console.log(`stringStartPlus => ${stringStartPlus}`);
            console.log(`stringEndMinus => ${stringEndMinus}`);
            if (!trySubString(!stringStartPlus) && !trySubString(stringEndMinus)) return false;
            break;
        }
        start++;
        end--;
    }

    return true;
};


console.log(isPalindrome("abccdba"));





// Example 1:
//
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:
//
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:
//
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.


