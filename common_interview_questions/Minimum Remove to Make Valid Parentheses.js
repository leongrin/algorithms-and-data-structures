// 1249. Minimum Remove to Make Valid Parentheses
// Given a string s of '(' , ')' and lowercase English characters.
//
// Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses
// string is valid and return any valid string.
//
// Formally, a parentheses string is valid if and only if:
//
// It is the empty string, contains only lowercase characters, or
// It can be written as AB (A concatenated with B), where A and B are valid strings, or
// It can be written as (A), where A is a valid string.

const minRemoveToMakeValid = (s) => {
    if (!s) return null;

    let stack = [];
    let arr = s.split('');

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '(') {
            stack.push(i)
        }
        if (arr[i] === ')' && stack.length) {
            stack.pop();
            continue;
        }
        if (arr[i] === ')' && !stack.length) {
            arr.splice(i, 1);
            i--;
        }
    }

    let idx = arr.length - 1;

    while (stack.length) {
        if (arr[idx] === '(') {
            arr.splice(idx, 1);
            stack.pop();
        }
        idx--;
    }

    return arr.join('');
};


console.log(minRemoveToMakeValid("lee(t(c)o)de)"))


/*

   Example 1:

Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"
Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.

    Example 2:

Input: s = "a)b(c)d"
Output: "ab(c)d"


    Example 3:

Input: s = "))(("
Output: ""
Explanation: An empty string is also valid.
*/



