// 152. Maximum Product Subarray
// https://leetcode.com/problems/maximum-product-subarray/
// https://www.udemy.com/course/ultimate-javascript-leetcode-interview-bootcamp/learn/lecture/21372762#questions

const maxProduct = (nums) => {

    let prevMax = nums[0];
    let prevMin = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        // given the new number, the new maximun can have 3 conditions
        // 1. number(+) * prevMax(+) is the largest
        // 2. number(+) it self is the largest
        // 3. number(-) * prevMin(-) is the largest
        let currMax = Math.max(nums[i] * prevMax, nums[i], nums[i] * prevMin);

        let currMin = Math.min(nums[i] * prevMax, nums[i], nums[i] * prevMin);

        // updating the prevMax & prevMin, these two may swap locations
        prevMax = currMax
        prevMin = currMin

        result = Math.max(currMax, result);
    }

    return result;
};

/*const nums = [2,3,-2,4];*/   // expected 6
/*const nums = [-2,0,-1];*/   // expected 0
/*const nums = [-2,3,-4];*/   // expected 24
const nums = [2,-5,-2,-4,3];   // expected 24

console.log(maxProduct(nums));
