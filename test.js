
/*let cache ={};

function climbStairs(n) {
    /!*if (n <= 0 || undefined) return 0;
    if (n === 1) return 1;
    if (n === 2) return 2;
    if (cache[n]) return cache[n];
    cache[n] = climbStairs(n-1) + climbStairs(n-2);
    return cache[n];*!/
    let array = [1, 2];

    if (n <= 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 2;

    for (let i = 2; i < n; i++) {
        array.push(array[i-1] + array[i-2]);
    }

    return array.pop();
}

console.log(climbStairs(5));*/

/*const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums.slice(i + 1).includes(target - nums[i])) {
            let index = nums.slice(i + 1).indexOf(target - nums[i]) + i + 1;
            return [i, index];
        }
    }

};*/


const twoSum = (nums, target) => {
    let store = {};

    for (let i = 0; i < nums.length; i++) {
        if (store[target-nums[i]] || store[target-nums[i]] === 0) {
            return [store[target-nums[i]], i];
        } else {
            store[nums[i]] = i;
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9))







