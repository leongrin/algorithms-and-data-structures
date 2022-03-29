// 215. Kth Largest Element in an Array
// Given an integer array nums and an integer k, return the kth largest element in the array.
//
// Note that it is the kth largest element in the sorted order, not the kth distinct element.

const findKthLargest = (nums, k) => {
    let sortedDesc = mergeSort(nums);
    return sortedDesc[sortedDesc.length - k];
};

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
};

const merge = (arr1, arr2) => {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    return result.concat(arr1.slice(i)).concat(arr2.slice(j));
}

console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4))


// Example 1:
//
// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5


// Example 2:
//
// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4




