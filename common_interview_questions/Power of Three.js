// Given an integer n, return true if it is a power of three. Otherwise, return false.
//
// An integer n is a power of three, if there exists an integer x such that n == 3x.

const isPowerOfThree = (n) => {

    while (n > 1) {
        n = n / 3;
    }

    return n === 1;
};


console.log(isPowerOfThree(45))




// Example 1:
//
// Input: n = 27
// Output: true
// Example 2:
//
// Input: n = 0
// Output: false
// Example 3:
//
// Input: n = 9
// Output: true

