
const trap = (height) => {
    if (!height.length || height.length < 3) return 0;

    let maxRight = [];
    let maxLeft = [];
    let toRightTop = 0;
    let toLeftTop = 0;
    let waterCount = 0;

    for (let i = 0; i <height.length; i++) {
        if (height[i] > toRightTop) toRightTop = height[i];
        maxRight.push(toRightTop);
    }

    for (let i = height.length - 1; i >= 0; i--) {
        if (height[i] > toLeftTop) toLeftTop = height[i];
        maxLeft.unshift(toLeftTop);
    }

    for (let i = 0; i < height.length; i++) {
        waterCount += Math.min(maxLeft[i], maxRight[i]) - height[i];
    }

    return waterCount;

};


console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
