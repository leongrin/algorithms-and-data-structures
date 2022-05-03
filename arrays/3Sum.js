// 15. 3Sum
// https://leetcode.com/problems/3sum/
// https://www.udemy.com/course/ultimate-javascript-leetcode-interview-bootcamp/learn/lecture/21372732?start=375#questions

const threeSum = (nums) => {
    if (nums.length < 3) return [];

    const results = [];

    // having the numbers in ascending order will make this problem much easier.
    // also, knowing the overall problem  will take at least O(N^2) time, we can
    // afford the O(NlogN) sort operation
    nums = nums.sort((a, b) => a - b);

    // if the question asks us for a custom target, we can control it here
    let target = 0

    for (let mostLeft = 0; mostLeft < nums.length - 2; mostLeft++) {
        // `mostLeft` represents the "left" most number in our sorted set.
        // once this number hits 0, there's no need to go further since
        // positive numbers cannot sum to a negative number
        if (nums[mostLeft] > 0) break

        // we don't want repeats, so skip numbers we've already seen
        if (nums[mostLeft] === nums[mostLeft - 1]) continue

        // `middle` represents the "middle" element between `mostLeft` and `farRight`.
        // we will increment this up through the array while `mostLeft` and `farRight`
        // are anchored to their positions. we will decrement `farRight` for
        // for each pass through the array, and finally increment `mostLeft`
        // once `middle` and `farRight` meet.
        let middle = mostLeft + 1

        // `farRight` represents the "right" most element
        let farRight = nums.length - 1

        // to summarize our setup, we have `mostLeft` that starts at the beginning,
        // `farRight` that starts at the end, and `middle` that races in between the two.
        //
        // note that `mostLeft` is controlled by our outer for-loop and will move the slowest.
        // in the meantime, `middle` and `farRight` will take turns inching towards each other depending
        // on some logic we'll set up below. once they collide, `mostLeft` will be incremented up
        // and we'll repeat the process.

        while (middle < farRight) {
            let sum = nums[mostLeft] + nums[middle] + nums[farRight]

            // if we find the target sum, increment `middle` and decrement `farRight` for
            // other potential combos where `mostLeft` is the anchor
            if (sum === target) {
                // store the valid threesum
                results.push([nums[mostLeft], nums[middle], nums[farRight]])

                // this is important! we need to continue to increment `middle` and decrement `farRight`
                // as long as those values are duplicated. in other words, we wanna skip values
                // we've already seen. otherwise, an input array of [-2,0,0,2,2] would result in
                // [[-2,0,2], [-2,0,2]].
                //
                // (mostLeft'm not a fan of this part because we're doing a while loop as we're
                // already inside of another while loop...)
                while (nums[middle] === nums[middle + 1]) middle++
                while (nums[farRight] === nums[farRight - 1]) farRight--

                // finally, we need to actually move `middle` forward and `farRight` backward to the
                // next unique elements. the previous while loops will not handle this.
                middle++
                farRight--

                // if the sum is too small, increment `middle` to get closer to the target
            } else if (sum < target) {
                middle++

                // if the sum is too large, decrement `farRight` to get closer to the target
            } else { // (sum > target)
                farRight--
            }
        }
    }

    return results
};

/*const nums = [-1, 0, 1, 2, -1, -4];*/   // expected [[-1,-1,2],[-1,0,1]]
/*const nums = [0, 0, 0];*/   // expected [0, 0, 0]
/*const nums = [0, 0, 0, 0];*/   // expected [0, 0, 0]
const nums = [-1,0,1,2,-1,-4,-2,-3,3,0,4];   // expected [[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]

console.log(threeSum(nums));





