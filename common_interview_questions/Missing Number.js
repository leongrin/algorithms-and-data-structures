// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

const missingNumber = (nums) => {
    const sortedArray = nums.sort((a, b) => a - b);
    let n;
    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[0] !== 0) return 0;
        if (!(sortedArray[i] + 1) || sortedArray[i] + 1 !== sortedArray[i + 1]) {
            n = sortedArray[i] + 1;
            break;
        }
    }

    return n;
};


console.log(missingNumber([9,6,4,2,3,5,7,0,1]));


// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
