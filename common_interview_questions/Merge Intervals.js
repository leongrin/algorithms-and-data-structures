// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array
// of the non-overlapping intervals that cover all the intervals in the input.

const merge = (intervals) => {
    if (intervals.length === 1) return [intervals[0]];
    let sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
    let finalArr = [];

    for (let i = 1; i < sortedIntervals.length; i++) {
        /*console.log(`i => ${i}`)
        console.log(sortedIntervals)*/
        if (sortedIntervals[i - 1][1] >= sortedIntervals[i][0]) {
            let newInterval = [sortedIntervals[i - 1][0], Math.max(sortedIntervals[i][1], sortedIntervals[i- 1][1])];
            sortedIntervals.shift();
            sortedIntervals[0] = newInterval;
            i = 0;
            if ( i === sortedIntervals.length - 1) finalArr.push(newInterval)
        } else {
            /*console.log('inside else')*/
            finalArr.push(sortedIntervals[i - 1])
            /*console.log(`finalArr => ${finalArr}`)*/
            if ( i === sortedIntervals.length - 1) finalArr.push(sortedIntervals[i])
        }
    }

    return finalArr;
};


console.log(merge([[1,4],[4,5]]));


// Example 1:
//
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:
//
// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
//
//
// Constraints:
//
// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104

