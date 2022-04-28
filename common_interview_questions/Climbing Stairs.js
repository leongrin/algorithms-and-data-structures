// You are climbing a staircase. It takes n steps to reach the top.
//
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?


function climbStairs(n) {
    /*if (!n) return null;
    if (n === 1) return 1;
    if (n === 2) return 2;

    let resArr = [1, 2];

    let i = 1;

    while (i < n - 1) {
        resArr.push(resArr[i] + resArr[i - 1]);
        i++
    }

    return resArr.pop();*/

    function countSteps (stairsRemaining, savedResults) {
        if (stairsRemaining < 0) return 0;

        if (stairsRemaining === 0) return 1;

        if (savedResults[stairsRemaining]) return savedResults[stairsRemaining];

        savedResults[stairsRemaining] = countSteps(stairsRemaining - 1, savedResults) + countSteps(stairsRemaining - 2, savedResults);

        return savedResults[stairsRemaining];
    }

    return countSteps(n, {});
}


console.log(climbStairs(5));



// Example 1:
//
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:
//
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step


// 4 steps
// 1. 1 step + 1 step + 1 step + 1
// 2. 1 step + 2 steps + 1
// 3. 2 steps + 1 step + 1
// 1 + 1 + 2
// 2 + 2


// 5 steps
// 1 + 1 + 1 + 1 + 1
// 1 + 2 + 1 + 1
// 1 + 1 + 2 + 1
// 1 + 1 + 1 + 2
// 1 + 2 + 2
// 2 + 1 + 1 + 1
// 2 + 2 + 1
// 2 + 1 + 2

// [1, 2, 3, 5, 8]

