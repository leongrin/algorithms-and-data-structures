// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of
// one or more dictionary words.
//
// Note that the same word in the dictionary may be reused multiple times in the segmentation.

const wordBreak = (s, wordDict) => {
    if (!wordDict.length) return false;

    const dpVisited = new Array(s.length + 1).fill(false);
    dpVisited[0] = true;

    for (let end = 1; end <= s.length; end++) {
        for (let start = 0; start < end; start++) {
            const w = s.slice(start, end);
            if (dpVisited[start] === true && wordDict.includes(w)) {
                dpVisited[end] = true;
                break;
            }
        }
    }
    return dpVisited[s.length];
};


console.log(wordBreak("leetcode", ['lee', "leet","code"]))


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
