// 867. Transpose Matrix
// Given a 2D integer array matrix, return the transpose of matrix.
//
// The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

const transpose = (matrix) => {

    let newMatrix = new Array(matrix[0].length).fill(0).map(() => new Array(matrix.length).fill(0));

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            newMatrix[j][i] = matrix[i][j];
        }
    }

    return newMatrix;

    /*let result = [];

    for(let i = 0; i < matrix[0].length; i++){
        let currentCol = []
        for(let j = 0; j < matrix.length; j++){
            currentCol.push(matrix[j][i])
        }
        result.push(currentCol);
    }
    return result*/
};


const matrix = [[1,2,3],[4,5,6],[7,8,9]]; // expected [[1,4,7],[2,5,8],[3,6,9]]

const matrix2 = [[1,2,3],[4,5,6]]; // expected [[1,4],[2,5],[3,6]]

console.log(transpose(matrix2));




