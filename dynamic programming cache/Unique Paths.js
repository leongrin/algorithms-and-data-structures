// 62. Unique Paths
// https://leetcode.com/problems/unique-paths/
// https://www.udemy.com/course/ultimate-javascript-leetcode-interview-bootcamp/learn/lecture/21386984#questions

const uniquePaths = (m, n) => {

    const dpMatrix = [...Array(m)].map(() => Array(n));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0) {
                dpMatrix[i][j] = 1;
            } else if (j === 0) {
                dpMatrix[i][j] = 1;
            } else {
                dpMatrix[i][j] = dpMatrix[i - 1][j] + dpMatrix[i][j - 1];
            }
        }
    }

    return dpMatrix[m-1][n-1];


    // RECURSIVE WITH MEMOIZATION ALTERNATIVE
    /*const grid = [...Array(m)].map(() => Array(n));

    function countPaths (i, j) {
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length) return 0;

        if (i === m-1 && j === n-1) {
            return 1;
        }

        if (grid[i][j]) {
            return grid[i][j];
        }

        let res = countPaths(i + 1, j) + countPaths(i, j + 1);

        grid[i][j] = res;

        return res;
    }

    return countPaths(0, 0);*/
};


const m = 3, n = 7;   // expected 28
/*const m = 23, n = 12;*/   // expected 193536720
/*const m = 3, n = 2;*/   // expected 3


console.log(uniquePaths(m, n));
