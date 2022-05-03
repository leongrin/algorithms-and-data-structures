// 53. Maximum Subarray
// https://leetcode.com/problems/maximum-subarray/
// https://www.udemy.com/course/ultimate-javascript-leetcode-interview-bootcamp/learn/lecture/21372708#questions

const maxSubArray = function(nums) {

    if (!nums.length) return 0;
    if (nums.length === 1) return nums[0];

    const dp = [nums[0]];
    let maxDp = nums[0];

    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(nums[i], dp[i-1] + nums[i]);
        maxDp = Math.max(maxDp, dp[i]);
    }

    return maxDp;

};


console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));  // 6



