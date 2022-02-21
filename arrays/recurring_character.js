

const firstRecurring = nums => {

    let obj = {};
    let found;

    for (let i = 0; i < nums.length; i++) {
        if (!obj[nums[i]]) {
            obj[nums[i]] = true;
        } else {
            found = nums[i];
            break;
        }
    }

    return found;

}


console.log(firstRecurring([2, 5, 1, 2, 3, 5, 1, 2, 4]));





