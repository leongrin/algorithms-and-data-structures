
const twoSum = function(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums.slice(i + 1).includes(target - nums[i])) {
            let index = nums.slice(i + 1).indexOf(target - nums[i]) + i + 1;
            return [i, index];
        }
    }
};


console.log(twoSum([2,7,11,15], 9)); // [0,1]





