// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

const trap = (height) => {

    let maxWaterLinePerIndexRightDirection = {}
    let maxWaterLinePerIndexLeftDirection = {}
    let maxLineYet = 0;

    let waterCount = 0;

    for (let i = 0; i < height.length; i++) {
        maxLineYet = Math.max(height[i], maxLineYet)
        maxWaterLinePerIndexRightDirection[i] = maxLineYet;
    }

    maxLineYet = 0;

    for (let i = height.length - 1; i >= 0; i--) {
        maxLineYet = Math.max(height[i], maxLineYet)
        maxWaterLinePerIndexLeftDirection[i] = maxLineYet;
    }

    // counting water

    for (let i = 0; i < height.length; i++) {
        let minLine = Math.min(maxWaterLinePerIndexRightDirection[i], maxWaterLinePerIndexLeftDirection[i]);
        waterCount += minLine - height[i];
    }

    return waterCount;
};


console.log(trap([4,2,0,3,2,5]))



// Example 1:
//
//
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:
//
// Input: height = [4,2,0,3,2,5]
// Output: 9

