// https://leetcode.com/problems/roman-to-integer/

function romanToInt(s) {
    let obj = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let total = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== 'I' && s[i] !== 'X' && s[i] !== 'C') {
            total += obj[s[i]]
        } else if (s[i] === 'I' && s[i + 1] !== 'V' && s[i + 1] !== 'X') {
            total += obj[s[i]];
        } else if (s[i] === 'I' && s[i + 1] === 'V') {
            total += 4;
            i++;
        } else if (s[i] === 'I' && s[i + 1] === 'X') {
            total += 9;
            i++;
        } else if (s[i] === 'X' && s[i + 1] !== 'L' && s[i + 1] !== 'C') {
            total += obj[s[i]];
        } else if (s[i] === 'X' && s[i + 1] === 'L') {
            total += 40;
            i++;
        } else if (s[i] === 'X' && s[i + 1] === 'C') {
            total += 90;
            i++;
        } else if (s[i] === 'C' && s[i + 1] !== 'D' && s[i + 1] !== 'M') {
            total += obj[s[i]];
        } else if (s[i] === 'C' && s[i + 1] === 'D') {
            total += 400;
            i++;
        } else if (s[i] === 'C' && s[i + 1] === 'M') {
            total += 900;
            i++;
        }
    }

    return total;

}


console.log(romanToInt('LVIII'));


// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.











