// 56. Merge Intervals
// https://leetcode.com/problems/merge-intervals/

const merge = (intervals) => {
    if (!intervals.length) return intervals

    intervals.sort((a, b) => a[0] - b[0])

    let prev = intervals[0]
    let res = [prev];

    for (let curr of intervals) {
        if (prev[1] >= curr[0]) {
            prev[1] = Math.max(prev[1], curr[1]);
        } else {
            res.push(curr)
            prev = curr
        }
    }

    return res
};

/*const intervals = [[1,3],[2,6],[8,10],[15,18]];*/   // expected [[1,6],[8,10],[15,18]]
/*const intervals = [[1,4],[4,5]];*/   // expected [[1,5]]
/*const intervals = [[1,3]];*/    // expected [[1,3]]
/*const intervals = [[1,4],[5,6]];*/    // expected [[1,4],[5,6]]
/*const intervals = [[1,4],[2,3]];*/     // expected [[1,4]]
/*const intervals = [[4,5],[2,4],[4,6],[3,4],[0,0],[1,1],[3,5],[2,2]];*/    // expected [[0,0],[1,1],[2,6]]
const intervals = [[1,3],[2,6],[8,10],[15,18]];    // expected [[1,6],[8,10],[15,18]]


console.log(merge(intervals));
