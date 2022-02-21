

const moveZeroes = function(nums) {

    let zeros = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zeros++;
            nums.splice(i, 1);
            i--
        }
    }

    while (zeros > 0) {
        nums.push(0)
        zeros--
    }

    return nums;

};


console.log(moveZeroes([0,0,1])); // [1,3,12,0,0]









