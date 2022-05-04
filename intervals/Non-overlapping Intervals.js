// 435. Non-overlapping Intervals
// https://leetcode.com/problems/non-overlapping-intervals/
// https://www.udemy.com/course/ultimate-javascript-leetcode-interview-bootcamp/learn/lecture/15028916#questions

const eraseOverlapIntervals = (intervals) => {
    intervals.sort((a, b) => a[0] - b[0]);

    let count = 0;

    let end = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
        if (end > intervals[i][0]) {
            count++;
            if (intervals[i][1] < end) end = intervals[i][1];
        } else {
            end = intervals[i][1];
        }
    }

    return count;
};


/*const intervals = [[1,2],[2,3],[3,4],[1,3]];*/   // expected 1
const intervals = [[1,2],[1,2],[1,2]];    // expected 2
/*const intervals = [[1,2],[2,3]];*/   // expected 0
/*const intervals = [[0,2],[1,3],[2,4],[3,5],[4,6]];*/    // expected 2

console.log(eraseOverlapIntervals(intervals));
