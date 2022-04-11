
const findClosestPathToZero = (grid) => {

};


const grid1 = [
    ['x', -1, 0, 'x'],
    ['x', 'x', 'x', -1],
    ['x', -1, 'x', -1],
    [0, -1, 'x', 'x']
]; /*
Expected [
[3, -1, 0, 1],
[2, 2, 1, -1],
[1, -1, 2, -1],
[0, -1, 3, 4]
]
*/

const grid2 = [
    ['x', -1, 0, 'x'],
    [-1, 'x', 'x', -1],
    ['x', -1, 'x', -1],
    [0, -1, 'x', 'x']
];
/*
Expected [
[x, -1, 0, 1],
[-1, 2, 1, -1],
[1, -1, 2, -1],
[0, -1, 3, 4]
]
*/

console.log(findClosestPathToZero(grid1));







