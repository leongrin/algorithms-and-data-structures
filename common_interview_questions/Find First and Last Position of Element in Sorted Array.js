// 34. Find First and Last Position of Element in Sorted Array
// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
//
// If target is not found in the array, return [-1, -1].
//
// You must write an algorithm with O(log n) runtime complexity.

const searchRange = function (nums, target) {

    const binarySearch = (nums, left, right) => {
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) return mid;
            else if (target > nums[mid]) left = mid + 1;
            else right = mid - 1;
        }

        return null;
    };

    if (nums.length < 1) return [-1, -1];

    const firstPos = binarySearch(nums, 0, nums.length - 1);

    if (firstPos === null) return [-1, -1];

    let endPos = firstPos,
        startPos = firstPos,
        temp1,
        temp2;

    while (startPos !== null) {
        temp1 = startPos;
        startPos = binarySearch(nums, 0, startPos - 1);
    }
    startPos = temp1;

    while (endPos !== null) {
        temp2 = endPos;
        endPos = binarySearch(nums, endPos + 1, nums.length - 1);
    }
    endPos = temp2;

    return [startPos, endPos];
};


console.log(searchRange([5,7,7,8,8,10], 8));


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

