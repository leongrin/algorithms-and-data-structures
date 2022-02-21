
const containsDuplicate = function(nums) {

    /*let result = false;

    const obj = {};

    for (let i = 0; i < nums.length; i++) {
        if (!obj[nums[i]]) {
            obj[nums[i]] = true
        } else {
            result = true
        }
    }

    return result*/

    const nonDuplicated = new Set(nums);

    return nums.length !== nonDuplicated.size
};


console.log(containsDuplicate(nums = [1,2,3,1]));  // true





