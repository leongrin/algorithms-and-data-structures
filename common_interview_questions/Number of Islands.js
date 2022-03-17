// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
//
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume
// all four edges of the grid are all surrounded by water.

const numIslands = (grid) => {
    if (!grid.length) return 0;
    let totalIslands = 0;

    function turnOneToZerosAndAddIslands(grid, i, j) {
        if (i < 0 || j < 0 || i > grid.length - 1 || j > grid[i].length - 1 || grid[i][j] === '0') return 0;

        grid[i][j] = '0';

        turnOneToZerosAndAddIslands(grid, i - 1, j);
        turnOneToZerosAndAddIslands(grid, i + 1, j);
        turnOneToZerosAndAddIslands(grid, i, j - 1);
        turnOneToZerosAndAddIslands(grid, i, j + 1);

        return 1;
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                totalIslands += turnOneToZerosAndAddIslands(grid, i, j);
            }
        }
    }

    return totalIslands;
};




const grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
];

const grid2 = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
]

console.log(numIslands(grid2))


// Example 1:
//
// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1


// Example 2:
//
// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3




/*if (!grid.length) return 0;

let numIslands = 0;

for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === '1') {
            numIslands += turnOneToZerosAndAddIslands(grid, i, j);
        }
    }
}

function turnOneToZerosAndAddIslands(grid, i, j) {
    if (
        i < 0 ||
        j < 0 ||
        i >= grid.length ||
        j >= grid[i].length ||
        grid[i][j] === '0'
    ) {
        return 0
    }

    grid[i][j] = '0';

    turnOneToZerosAndAddIslands(grid, i - 1, j);
    turnOneToZerosAndAddIslands(grid, i + 1, j);
    turnOneToZerosAndAddIslands(grid, i, j - 1);
    turnOneToZerosAndAddIslands(grid, i, j + 1);

    return 1;
}

return numIslands;*/


