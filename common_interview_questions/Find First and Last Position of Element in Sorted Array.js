// 34. Find First and Last Position of Element in Sorted Array
// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
//
// If target is not found in the array, return [-1, -1].
//
// You must write an algorithm with O(log n) runtime complexity.

const searchRange = (nums, target) => {
    if (!nums.length) return [-1,-1];

    let start = 0;
    let end = nums.length - 1;
    let middle = Math.floor((start + end) / 2);
    console.log(`middle => ${middle}, nums[middle] => ${nums[middle]}, target => ${target}`)

    while(nums[middle] !== target && start <= end) {
        if(target < nums[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }

    if (nums[middle] !== target) return [-1,-1];

    start = middle;
    end = middle;

    console.log(`middle => ${middle}`)

    while (nums[start] === target && nums[end] === target) {
        if (nums[start - 1] === target) start--;
        if (nums[end + 1] === target) end++;
        if (nums[start - 1] !== target && nums[end + 1] !== target) break;
    }

    return [start, end];
};


console.log(searchRange([0,0,0,1,2,3], 0));


// Example 1:
//
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]


// Example 2:
//
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]


// Example 3:
//
// Input: nums = [], target = 0
// Output: [-1,-1]

