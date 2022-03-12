// Given an integer n, return the number of prime numbers that are strictly less than n.

const countPrimes = (n) => {
    let nums = new Array(n).fill(true);
    let primeCount = 0;

    for (let i = 2; i * i < n; i++) {
        if (nums[i]) {
            for (let j = i; j * i < n; j++) {
                nums[j * i] = false;
            }
        }
    }

    for (let i = 2; i < n; i++) {
        if (nums[i]) primeCount++;
    }

    return primeCount;
};


console.log(countPrimes(10000))



// Example 1:
//
// Input: n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.


// Example 2:
//
// Input: n = 0
// Output: 0


// Example 3:
//
// Input: n = 1
// Output: 0



