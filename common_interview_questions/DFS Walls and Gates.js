
const findClosestPathToZero = (grid) => {

    function saveClosestPath(i, j, count) {
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length ||  count > grid[i][j]) return;

        grid[i][j] = count;

        count++;

        saveClosestPath(i, j+1, count);
        saveClosestPath(i, j-1, count);
        saveClosestPath(i+1, j, count);
        saveClosestPath(i-1, j, count);
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 0) {
                saveClosestPath(i, j, 0);
            }
        }
    }

    return grid;
};


const grid1 = [
    [Infinity, -1, 0, Infinity],
    [Infinity, Infinity, Infinity, -1],
    [Infinity, -1, Infinity, -1],
    [0, -1, Infinity, Infinity]
]; /*
Expected [
[3, -1, 0, 1],
[2, 2, 1, -1],
[1, -1, 2, -1],
[0, -1, 3, 4]
]
*/

const grid2 = [
    [Infinity, -1, 0, Infinity],
    [-1, Infinity, Infinity, -1],
    [Infinity, -1, Infinity, -1],
    [0, -1, Infinity, Infinity]
];
/*
Expected [
[Infinity, -1, 0, 1],
[-1, 2, 1, -1],
[1, -1, 2, -1],
[0, -1, 3, 4]
]
*/

console.log(findClosestPathToZero(grid2));







