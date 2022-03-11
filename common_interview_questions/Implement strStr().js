// Implement strStr().
//
// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
//
// Clarification:
//
// What should we return when needle is an empty string? This is a great question to ask during an interview.
//
// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

const strStr = (haystack, needle) => {
    if (!needle) return 0;
    if (needle.length > haystack.length) return -1;

    let i = 0;
    while (i < haystack.length) {
        if (haystack.slice(i, needle.length + i) === needle) return i;
        i++;
    }

    return -1;
};


console.log(strStr("hello", 'll'));

// Example 1:
//
// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:
//
// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
// Example 3:
//
// Input: haystack = "", needle = ""
// Output: 0

