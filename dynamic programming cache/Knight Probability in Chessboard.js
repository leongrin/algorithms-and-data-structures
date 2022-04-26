// 688. Knight Probability in Chessboard
// https://leetcode.com/problems/knight-probability-in-chessboard/

const DIRECTIONS = [
    [-2, -1],
    [-2, 1],
    [-1, 2],
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2]
];

const knightProbability = (n, k, row, column) => {

    if (row < 0 || column < 0 || row >= n || column >= n) {
        return 0;
    }

    if (k === 0) {
        return 1;
    }

    let res = 0;

    for (let dir of DIRECTIONS) {
        res += knightProbability(n, k - 1, row + dir[0], column + dir[1]) / 8;
    }

    return res;
};

const n = 3, k = 2, row = 0, column = 0;  // expected 0.06250
/*const n = 1, k = 0, row = 0, column = 0;*/   // expected 1.00000
/*const n = 3, k = 3, row = 0, column = 0;*/  // expected 0.01562

console.log(knightProbability(n, k, row, column));



