// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.
//
// Note that the same word in the dictionary may be reused multiple times in the segmentation.

const wordBreak = (s, wordDict) => {

    if (wordDict == null || wordDict.length === 0) return false;

    const set = new Set(wordDict);
    const dp = new Array(s.length + 1).fill(false);
    dp[0] = true;

    for (let end = 1; end <= s.length; end++) {
        for (let start = 0; start < end; start++) {
            const w = s.slice(start, end);
            if (dp[start] === true && set.has(w)) {
                dp[end] = true;
                break;
            }
        }
    }
    return dp[s.length];

    /*const set = new Set(wordDict);
    return verifyBreak(s, set, 0, {});*/
};

// recursive function
function verifyBreak(s, set, start, memo) {
    if (start === s.length) return true;  // Base Case: it passed the end of the word, and no match was found.

    if (memo[start]) return memo[start];

    for (let end = start + 1; end <= s.length; end++) {  // in order to complete the substring, the end needs to be
        // one index beyond the last index of the substring.
        let wildGuess = s.substring(start, end);

        if (set.has(wildGuess) && verifyBreak(s, set, end, memo)) {
            return memo[start] = true;
        }
    }

    return memo[start] = false;
}


console.log(wordBreak("applepenapple", ["apple","pen"]))


// Example 1:
//
// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".


// Example 2:
//
// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.


// Example 3:
//
// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false


