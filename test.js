
const isValid = (s) => {
    let brackets = {
        '(':  ')',
        '{': '}',
        '[': ']'
    };
    let stack = [];

    for (let item of s) {
        if (brackets[item]) {
            stack.push(brackets[item])
        } else {
            if (item !== stack.pop()) return false;
        }
    }

    return !stack.length;
};


console.log(isValid("()"))


