// 54. Spiral Matrix
// https://leetcode.com/problems/spiral-matrix/

const spiralOrder = (matrix) => {
    if (matrix.length === 1) return matrix[0];

    let result = [];

    while (matrix.length && matrix[0].length) {
        // add first row
        result = result.concat(matrix.shift());

        // add last column
        if (matrix.length && matrix[0].length) {
            for (let item of matrix) {
                result.push(item.pop())
            }
        }

        // add last row
        if (matrix.length && matrix[0].length) result = result.concat(matrix.pop().reverse());


        // add first column
        if (matrix.length && matrix[0].length) {
            for (let i = matrix.length - 1; i >= 0; i--) {
                result.push(matrix[i].shift())
            }
        }
    }

    return result;
};


/*const matrix = [[1,2,3],[4,5,6],[7,8,9]];*/    // expected [1,2,3,6,9,8,7,4,5]
/*const matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];*/   // expected [1,2,3,4,8,12,11,10,9,5,6,7]
/*const matrix = [[2,5],[8,4],[0,-1]];*/   // expected [2,5,4,-1,0,8]
const matrix = [[7], [9], [6]];    // expected [7,9,6]

console.log(spiralOrder(matrix));






