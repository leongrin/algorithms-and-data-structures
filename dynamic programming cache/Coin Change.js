// 322. Coin Change
// https://leetcode.com/problems/coin-change/
// https://www.udemy.com/course/ultimate-javascript-leetcode-interview-bootcamp/learn/lecture/21386978#questions

const coinChange = (coins, amount) => {
    if (amount === 0) return 0;
    let dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i < dp.length; i++) {
        for (let j = 0; j < coins.length; j++) {
            let coinsVal = coins[j];
            if (coinsVal <= i) {
                dp[i] = Math.min(dp[i - coinsVal] + 1, dp[i]);
            }
        }
    }

    return dp[dp.length - 1] === Infinity ? -1 : dp[dp.length - 1];
};

const coins = [1,2,5], amount = 11;   // expected 3
/*const coins = [2], amount = 3;*/    // expected -1
/*const coins = [1], amount = 0; */  // expected 0

console.log(coinChange(coins, amount));
