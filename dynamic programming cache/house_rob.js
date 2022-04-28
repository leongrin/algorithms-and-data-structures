/* * @param {number[]} nums
 * @return {number}*/

let rob = function (nums) {
    if (!nums) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);

    let firstTotal = nums[0];
    let secondTotal = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {
        let curr = Math.max(nums[i] + firstTotal, secondTotal);
        firstTotal = secondTotal;
        secondTotal = curr;
    }

    return secondTotal;
};


/*const nums = [1,2,3,1];*/   // expected 4
/*const nums = [2,7,9,3,1];*/   // expected 12
const nums = [2,1,1,2];    // expected 4

console.log(rob(nums));






