// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
//
// You must implement a solution with a linear runtime complexity and use only constant extra space.

function singleNumber(nums) {

    let sortedArray = nums.sort((a, b) => a - b);
    let index = 0;
    let number;

    while(index < sortedArray.length) {
        if (sortedArray[index] === sortedArray[index + 1]) {
            index += 2;
        } else if (sortedArray[index] === sortedArray[index - 1]) {
            index++;
        } else {
            number = sortedArray[index];
            break;
        }
    }

    return number ? number : null;

}


console.log(singleNumber([4,1,2,1,2]))

// Input: nums = [4,1,2,1,2]
// Output: 4





