// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.


function firstUniqChar(s) {
    let letterCount = {};

    for (let i of s) {
        letterCount[i] = (letterCount[i]  || 0) + 1;
    }

    for (let i = 0; i < s.length; i++) {
        if (letterCount[s[i]] === 1) return i;
    }

    return -1;
}


console.log(firstUniqChar('leetcode'))



// Input: s = "leetcode"
// Output: 0

