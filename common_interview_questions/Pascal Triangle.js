// Given an integer numRows, return the first numRows of Pascal's triangle.
//
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

const generate = (numRows) => {
    if (numRows === 1) return [[1]];
    if (numRows === 2) return [[1], [1, 1]];
    if (numRows === 3) return [[1], [1, 1], [1,2,1]];
    let result = [[1], [1, 1], [1,2,1]];
    let i = 2;
    function getNewArray (arr) {
        let final = [1];

        for (let j = 0; j < arr.length; j++) {
            if (j === arr.length - 1) {
                final.push(1)
            } else {
                final.push(arr[j] + arr[j + 1])
            }

        }
        return final;
    }
    while (i < numRows - 1) {
        let newArray = getNewArray(result[i]);
        result.push(newArray);
        i++
    }

    return result;
};


console.log(generate(5));

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

