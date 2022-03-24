// 844. Backspace String Compare
// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a
// backspace character.
//
// Note that after backspacing an empty text, the text will continue empty.

const backspaceCompare = (S, T) => {
    let p1 = S.length - 1, p2 = T.length - 1;

    while(p1 >= 0 || p2 >= 0) {
        if(S[p1] === "#" || T[p2] === "#") {
            if(S[p1] === "#") {
                let backCount = 2;

                while(backCount > 0) {
                    p1--;
                    backCount--;

                    if(S[p1] === "#") {
                        backCount += 2;
                    }
                }
            }

            if(T[p2] === "#") {
                let backCount = 2;

                while(backCount > 0) {
                    p2--;
                    backCount--;

                    if(T[p2] === "#") {
                        backCount += 2;
                    }
                }
            }
        } else {
            if(S[p1] !== T[p2]) {
                return false;
            } else {
                p1--;
                p2--;
            }
        }
    }

    return true;
};

console.log(backspaceCompare("ab#c", "ad#c"))


/*
Example 1:

Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".


    Example 2:

Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".


    Example 3:

Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".
*/

