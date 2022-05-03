// 153. Find Minimum in Rotated Sorted Array
// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
// https://www.udemy.com/course/ultimate-javascript-leetcode-interview-bootcamp/learn/lecture/21372724#questions

const findMin = (nums) => {
    /*let left = 0;
    let right = nums.length - 1;

    while (right > left) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[right]) left = mid + 1
        else right = mid
    }

    return nums[left];*/

    if (nums.length === 1) return nums[0];
    if (nums[0] < nums[nums.length - 1]) return nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i+1] < nums[i]) return nums[i+1];
    }

};


/*const nums = [3,4,5,1,2];*/   // expected 1
const nums = [4,5,6,7,0,1,2];    // expected 0
/*const nums = [11,13,15,17];*/   // expected 11

console.log(findMin(nums));





// Example 1:
//
// Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.
// Example 2:
//
// Input: nums = [4,5,6,7,0,1,2]
// Output: 0
// Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
// Example 3:
//
// Input: nums = [11,13,15,17]
// Output: 11
// Explanation: The original array was [11,13,15,17] and it was rotated 4 times.

