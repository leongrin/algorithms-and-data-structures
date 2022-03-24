// A permutation of an array of integers is an arrangement of its members into a sequence or linear order.
//
// For example, for arr = [1,2,3], the following are considered permutations of arr: [1,2,3], [1,3,2], [3,1,2], [2,3,1].
// The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all
// the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).
//
// For example, the next permutation of arr = [1,2,3] is [1,3,2].
// Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
// While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
// Given an array of integers nums, find the next permutation of nums.
//
// The replacement must be in place and use only constant extra memory. 1, 5, 8, 7, 1, 3, 4, 5 ,6

const nextPermutation = (nums) => {
    // Find the first decreasing index moving from end to start
    if (!nums.length) return null;
    if (nums.length === 1) return nums;

    let indexSwapped;
    let i = nums.length - 2;

    //finds the first number that is smaller than its next number
    while (i >= 0) {
        if (nums[i] < nums[i + 1]) {
            indexSwapped = i;
            break;
        }
        i--;
    }

    if (indexSwapped !== 0 && !indexSwapped) return nums.reverse();

    // Find the minimum number larger than number to be swapped. Minimum will always be in the far right because of
    // the way we find the number to be swapped; always having to be smaller than previous.
    if (indexSwapped !== undefined) {
        for (let i = nums.length - 1; i > indexSwapped; i--) {

            if (nums[indexSwapped] < nums[i]) {
                [nums[indexSwapped], nums[i]] = [nums[i], nums[indexSwapped]]
                break;
            }
        }
    }


    sortArrayInPlace(indexSwapped);

    // We are bubble sorting
    function sortArrayInPlace(idx) {
        let start = idx + 1;
        let end = nums.length - 1;

        while (start < end) {
            if (nums[start] > nums[start + 1]) {
                [nums[start], nums[start + 1]] = [nums[start + 1], nums[start]]
            }
            if (start === end - 1) {
                start = idx + 1;
                end--;
            } else {
                start++;
            }

        }
    }

    return nums;









    // BEST PROFESSIONAL SOLUTION
    /*for(let i = nums.length-1; i >= 0; i--) {
        if(nums[i] < nums[i+1]) {
            console.log(`i => ${i}`)
            const large = nextLarge(i);
            console.log(`large => ${large}`)
            swap(i, large);
            reverse(i+1);
            return nums;
        }
    }

    // If there is no next permutation reverse the arr
    nums.reverse()

    function swap(i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    function reverse(idx) {
        let start = idx, end = nums.length-1;

        while(start < end) {
            swap(start, end);
            start++;
            end--;
        }
    }

    function nextLarge(idx) {
        for(let i = nums.length-1; i > idx; i--) {
            if(nums[i] > nums[idx]) return i;
        }
    }*/


}


console.log(nextPermutation([1, 2, 3]));
// [2,1,3]

/*
1 - Find the first larger number than the last number of the array and swap it

2 - If a larger number is not found, reverse the array

2- Reverse the array after the number that was swapped, if it's length > 1
* */

/*
STEPS TO SOLVE THE PROBLEM

arr = [1, 5, 8, 4, 7, 6, 5, 3, 1];

1 - Find the peak number  => is 1 > 3 no, is 3 > 5 no, etc... is 7 > 4 yes, 7 is the peak.

2 - Next larger number to the right of the peak - 1   => peak = 4  => is 1 > 4 no, is 3 > 4 no, is 5 > 4 YES, so
 nextLarger = 5

3 - Flip peak - 1 and largest number to the right of the peak   => Lets flip nextLarger with peak - 1, so lets flit
 5 with 4;

4 - Reverse from peak to end of array   => 7, 6, 5, 3, 1 will become 1, 3, 5, 6, 7. So, next permutation is => [1,
 5, 8, 5, 1, 3, 4, 6, 7]
*/



// Example 1:
//
// Input: nums = [1,2,3]
// Output: [1,3,2]
// Example 2:
//
// Input: nums = [3,2,1]
// Output: [1,2,3]
// Example 3:
//
// Input: nums = [1,1,5]
// Output: [1,5,1]



/*for(let i = nums.length-1; i >= 0; i--) {
    console.log(`nums[i] => ${nums[i]} and nums[i+1] => ${nums[i+1]}`)
    if(nums[i] < nums[i+1]) {
        const large = nextLarge(i);
        swap(i, large);
        reverse(i+1);
        return nums;
    }
}

// If there is no next permutation reverse the arr
nums.reverse()

function swap(i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
}

function reverse(idx) {
    let start = idx, end = nums.length-1;

    while(start < end) {
        swap(start, end);
        start++;
        end--;
    }
}

function nextLarge(idx) {
    for(let i = nums.length-1; i > idx; i--) {
        if(nums[i] > nums[idx]) return i;
    }
}*/
