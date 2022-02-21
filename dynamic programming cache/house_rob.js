/* * @param {number[]} nums
 * @return {number}*/

let rob = function (nums) {

    if (!nums.length) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {
        nums[i] = Math.max(nums[i-2] + nums[i], (nums[i-3] || 0) + nums[i]);
        console.log(nums)
    }

    return Math.max(nums[nums.length - 1], nums[nums.length - 2]);
};


console.log(rob([2,4,8,9,9,3]));  // 4






