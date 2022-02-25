// Given an array nums of size n, return the majority element.
//
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

function majorityElement(nums) {
    let obj = {};

    for (let i = 0; i < nums.length; i++) {
        if (!obj[nums[i]]) {
            obj[nums[i]] = 1;
        } else {
            obj[nums[i]] += 1;
        }
    }

    let maxCount = 0;
    let finalNum;

    for (let key in obj) {
        if (obj[key] > maxCount) {
            maxCount = obj[key];
            finalNum = key;
        }
    }

    return finalNum;
}


console.log(majorityElement([2,2,1,1,1,2,2]))

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2




