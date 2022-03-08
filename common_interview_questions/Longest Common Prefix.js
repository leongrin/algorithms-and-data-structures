// Write a function to find the longest common prefix string amongst an array of strings.
//
// If there is no common prefix, return an empty string "".

const longestCommonPrefix = (strs) => {
    let prefix = strs[0];
    let newMaxPrefix;

    function getPrefix(word) {
        let length = Math.min(word.length, prefix.length);
        let j = 0;
        while (j < length)  {
            if (word[j] === prefix[j]) {
                newMaxPrefix += word[j];
            } else {
                break;
            }
            j++;
        }
    }

    for (let i = 0; i < strs.length; i++) {
        newMaxPrefix = '';
        getPrefix(strs[i]);
        prefix = newMaxPrefix;
    }

    return prefix;
};


console.log(longestCommonPrefix(["",""]));




// Example 1:
//
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:
//
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


