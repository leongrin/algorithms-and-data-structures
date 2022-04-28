// 55. Jump Game
// https://leetcode.com/problems/jump-game/
// https://www.youtube.com/watch?v=2HnlGToCdCc&t=562s

const canJump = (nums) => {
    if (!nums) return false;
    if (nums.length === 1) return true;

    let targetIndex = nums.length - 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] >= targetIndex - i) {
            targetIndex = i;
            if (i === 0) return true;
        }
    }

    return false;
};

/*const nums = [2,3,1,1,4];*/   // expected true
const nums = [3,2,1,0,4];   // expected false

console.log(canJump(nums));
