
function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}


const rotate = function(nums, k) {

    k = k % nums.length;

    reverse(nums, 0, nums.length - 1);
    console.log(`nums1 => ${nums}`);
    reverse(nums, 0, k - 1);
    console.log(`nums2 => ${nums}`);
    reverse(nums, k, nums.length - 1);
    return nums;



    /*while (k > 0) {
        nums.unshift(nums.pop());
        k--
    }

    return nums*/

};


console.log(rotate([1,2,3,4,5,6,7], 3)); // [5,6,7,1,2,3,4]









