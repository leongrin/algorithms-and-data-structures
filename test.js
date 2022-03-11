

const findMin = (nums) => {
    let left = 0;
    let right = nums.length - 1;

    while (right > left) {
        let mid = Math.floor((left + right) / 2);
        console.log(`mid => ${mid}`);
        console.log(`mid number nums[mid] => ${nums[mid]}`)
        if (nums[mid] > nums[right]) {
            console.log(`Yes, nums[mid] > nums[right] => ${nums[mid]} > ${nums[right]}`);
            left = mid + 1
        }
        else {
            console.log(`No, nums[mid] is NOT > nums[right] => ${nums[mid]} is NOT > ${nums[right]}`);
            right = mid
        }
        console.log(`Now, left => ${left} and right => ${right}`);
    }

    return nums[left];
};


console.log(findMin([4, 5, 6, 0, 1, 2, 3, 4, 5]));




