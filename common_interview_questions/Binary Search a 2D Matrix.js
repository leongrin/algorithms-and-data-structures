// 74. Search a 2D Matrix
// Write an efficient algorithm that searches for a value target in an m x n integer matrix. This matrix has the following properties:
//
// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.

const searchMatrix = (matrix, target) => {

    let result = false;

    function helper(mat, tar) {
        let mid = Math.floor(mat.length / 2);

        if (tar === mat[mid][0]) {
            result = true;
        } else if(mid === 0) {
            for (let item of mat[0]) {
                if (item === tar) {
                    result = true;
                    return true;
                }
            }
        } else if (tar < mat[mid][0]) {
            helper(mat.slice(0, mid), tar)
        } else {
            helper(mat.slice(mid), tar);
        }
    }

    helper(matrix, target);

    return result;
};


const matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3;  // expected true

/*const matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13;*/ // expected false

console.log(searchMatrix(matrix, target));







