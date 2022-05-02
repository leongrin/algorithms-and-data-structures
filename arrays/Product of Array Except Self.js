// 238. Product of Array Except Self
// https://leetcode.com/problems/product-of-array-except-self/
// https://www.udemy.com/course/ultimate-javascript-leetcode-interview-bootcamp/learn/lecture/15015622#questions

const productExceptSelf = (nums) => {
    const output = Array(nums.length).fill(1);
    let product = 1;

    // multiply from the left
    for (let i = 0; i < nums.length; i++) {
        output[i] = output[i] * product;
        product = product * nums[i];
    }

    product = 1;
    // multiply from the right
    for (let i = nums.length - 1; i >= 0; i--) {
        output[i] = output[i] * product;
        product = product * nums[i];
    }

    return output;
};

const nums = [1,2,3,4];   // expected [24,12,8,6]
/*const nums = [-1,1,0,-3,3];*/   // expected [0,0,9,0,0]


console.log(productExceptSelf(nums));
