//300. Longest Increasing Subsequence
//https://leetcode.com/problems/longest-increasing-subsequence/
// https://www.udemy.com/course/ultimate-javascript-leetcode-interview-bootcamp/learn/lecture/21386972#questions

const lengthOfLIS = (nums) => {
    if (!nums.length) return 0;
    if (nums.length === 1) return 1;

    const dp = Array(nums.length).fill(1);

    let i = 0;
    let j = 1;

    while (i < nums.length && j < nums.length) {
        console.log(`comparing nums[j] => ${nums[j]} and nums[i] => ${nums[i]}`);
        if (nums[j] > nums[i]) {
            console.log('1');
            dp[j] = Math.max(dp[i] + 1, dp[j]);
        }
        i++;
        if (j === i) {
            i = 0;
            j++;
        }
    }

    return Math.max(...dp);

};

/*const nums = [10,9,2,5,3,7,101,18];*/  // expected 4
/*const nums = [0,1,0,3,2,3];*/   // expected 4
/*const nums = [7,7,7,7,7,7,7];*/   // expected 1
const nums = [1,3,6,7,9,4,10,5,6];   // expected 6
/*const nums = [2,15,3,7,8,6,18];*/    // expected 5

console.log(lengthOfLIS(nums));
