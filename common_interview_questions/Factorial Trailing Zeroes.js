// Given an integer n, return the number of trailing zeroes in n!.
//
// Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.

// ANSWER: We can simplify the answer to the Factorial Trailing Zeroes question to the following:
// (n / 5) + (n / 5^2) + (n / 5^3)... (n / 5^x)
// We continue until 5^x is greater than n.

const trailingZeroes = (n) => {
    let numZeroes = 0;
    while (n >= 5) {
        numZeroes += Math.floor(n / 5);
        n = Math.floor(n / 5);
    }
    return numZeroes;
};


console.log(trailingZeroes(25))




// Example 1:
//
// Input: n = 3
// Output: 0
// Explanation: 3! = 6, no trailing zero.
// Example 2:
//
// Input: n = 5
// Output: 1
// Explanation: 5! = 120, one trailing zero.
// Example 3:
//
// Input: n = 0
// Output: 0



