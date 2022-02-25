// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
//
// Note that you must do this in-place without making a copy of the array.


const moveZeroes = (nums) => {

    let pointer = 0
    for (let i in nums){
        if (nums[i] !== 0){
            [nums[pointer], nums[i]] = [nums[i], nums[pointer]]
            pointer++
        }
    }
    return nums

};


console.log(moveZeroes([0,1,0,3,12]))

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

