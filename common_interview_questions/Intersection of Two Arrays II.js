// Given two integer arrays nums1 and nums2, return an array of their intersection.
// Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

const intersect = (nums1, nums2) => {
    let obj ={};
    let resArray = [];
    for (let n of nums1) {
        obj[n] = (obj[n] || 0) + 1;

    }

    for (let i of nums2) {
        if (obj[i] && obj[i] > 0) {
            resArray.push(i);
            obj[i]--;
        }
    }

    return resArray;
};


console.log(intersect([4,9,5], [9,4,9,8,4]));



// Example 1:
//
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:
//
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.
