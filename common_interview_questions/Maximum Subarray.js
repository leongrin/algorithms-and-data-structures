// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
//
// A subarray is a contiguous part of an array.

const maxSubArray = (nums) => {

    let maxSum = -Infinity
    let currentSum = 0
    for(let i = 0; i < nums.length; i++){
        currentSum = Math.max(nums[i], currentSum + nums[i])
        maxSum = Math.max(currentSum, maxSum);
    }
    return maxSum
};


console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))


// Example 1:
//
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Example 2:
//
// Input: nums = [1]
// Output: 1
// Example 3:
//
// Input: nums = [5,4,-1,7,8]
// Output: 23
