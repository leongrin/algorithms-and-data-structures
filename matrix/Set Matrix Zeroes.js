// 73. Set Matrix Zeroes
// https://leetcode.com/problems/set-matrix-zeroes/

const setZeroes = (matrix) => {


    const rowsToZero = new Set();
    const colsToZero = new Set();

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === 0) {
                rowsToZero.add(row);
                colsToZero.add(col);
            }
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (rowsToZero.has(row)) matrix[row][col] = 0;
            if (colsToZero.has(col)) matrix[row][col] = 0;
        }
    }

    return matrix;

};


const matrix = [[1,1,1],[1,0,1],[1,1,1]];   // expected [[1,0,1],[0,0,0],[1,0,1]]
/*const matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];*/   // expected [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

console.log(setZeroes(matrix));



