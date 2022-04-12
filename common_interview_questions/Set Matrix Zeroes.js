// 73. Set Matrix Zeroes
// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
// You must do it in place.

const setZeroes = (matrix) => {

    /*const copy = JSON.parse(JSON.stringify(matrix));

    function traverse(i, j, dir = 'all') {

        matrix[i][j] = 0;

        if (i - 1 >= 0 && (dir === 'all' || dir === 'up')) traverse(i - 1, j, 'up');
        if (i + 1 < matrix.length && (dir === 'all' || dir === 'down')) traverse(i + 1, j, 'down');
        if (j - 1 >= 0 && (dir === 'all' || dir === 'left')) traverse(i, j - 1, 'left');
        if (j + 1 < matrix[i].length && (dir === 'all' || dir === 'right')) traverse(i, j + 1, 'right');
    }

    for (let i = 0; i < copy.length; i++) {
        for (let j = 0; j < copy[i].length; j++) {
            if (copy[i][j] === 0) {
                traverse(i, j)
            }
        }
    }

    return matrix;*/

    let iSet = new Set();
    let jSet = new Set();

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                iSet.add(i);
                jSet.add(j);
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (iSet.has(i) || jSet.has(j)) {
                matrix[i][j] = 0;
            }
        }
    }

    return matrix;
};


const matrix = [[1,1,1],[1,0,1],[1,1,1]]; // expected [[1,0,1],[0,0,0],[1,0,1]]
const matrix2 = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]; // expected [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

console.log(setZeroes(matrix2));







