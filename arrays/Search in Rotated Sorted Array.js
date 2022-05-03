// 33. Search in Rotated Sorted Array
// https://leetcode.com/problems/search-in-rotated-sorted-array/
// https://www.udemy.com/course/ultimate-javascript-leetcode-interview-bootcamp/learn/lecture/21372730#questions

const search = (nums, target) => {
    if (nums.length === 1) {
        if (nums[0] === target) return 0;
        else return -1;
    }

    let left = 0;
    let right = nums.length - 1;
    let inflectionPointIndex;
    let resultIdx;

    function binarySearch (left, right) {
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                resultIdx = mid;
                break;
            }
            if (target > nums[mid]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    if (nums[left] < nums[right]) {
        binarySearch(left, right)
    } else {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i + 1] < nums[i]) {
                inflectionPointIndex = i;
                break;
            }
        }

        binarySearch(left, inflectionPointIndex);
        binarySearch(inflectionPointIndex + 1, right);
    }

    return resultIdx !== undefined ? resultIdx : -1;

};

const nums = [4,5,6,7,0,1,2], target = 0;   // expected 4
/*const nums = [4,5,6,7,0,1,2], target = 3;*/    // expected -1
/*const nums = [1], target = 0;*/    // expected -1
/*const nums = [1,3], target = 3;*/    // expected 1
/*const nums = [4,5,6,7,0,1,2], target = 0;*/    // expected 4
/*const nums = [5,1,3], target = 5;*/    // expected 0

console.log(search(nums, target));




