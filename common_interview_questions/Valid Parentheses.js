// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
// An input string is valid if:
//
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

const isValid = (s) => {
    let brackets = {
        '[': ']',
        '{': '}',
        '(': ')'
    };

    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (brackets[s[i]]) {
            stack.push(brackets[s[i]])
        } else if (s[i] !== stack.pop()) {
            return false;
        }
    }

    return  !stack.length;
};


console.log(isValid("[{}]"));



// Example 1:
//
// Input: s = "()"
// Output: true
// Example 2:
//
// Input: s = "()[]{}"
// Output: true
// Example 3:
//
// Input: s = "(]"
// Output: false


/*let bracket = {
    '(': ')',
    '[': ']',
    '{': '}'
};

let stack = [];

for (let char of s) {
    if (bracket[char]) {
        stack.push(bracket[char]);
    } else if (stack.pop() !== char) return false;
}

return (!stack.length)*/
