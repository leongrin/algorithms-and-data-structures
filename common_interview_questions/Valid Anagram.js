// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
//
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


function isAnagram(s, t) {
    let letterCount = {};
    let result = true;

    if (!s || !t) return false;

    for (let i = 0; i < s.length; i++) {
        if (!letterCount[s[i]]) {
            letterCount[s[i]] = 1;
        } else {
            letterCount[s[i]]++;
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (letterCount[t[i]] > 0) {
            letterCount[t[i]]--;
        } else {
            result = false;
            break;
        }
    }

    for (let key in letterCount) {
        if (letterCount[key] !== 0) {
            result = false;
            break;
        }
    }

    return result;
}


console.log(isAnagram('anagrmm', 'nagaram'));



// Input: s = "anagram", t = "nagaram"
// Output: true
