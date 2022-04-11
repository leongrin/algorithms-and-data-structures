
const orangesRotting = (grid) => {

    let queue = [];
    let minutes = 0;
    let layer = 0;
    let fresh = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j])
            }
            if (grid[i][j] === 1) fresh++;
        }
    }

    console.log(`fresh begin => ${fresh}`);

    layer = queue.length;

    while(queue.length) {
        let [i, j] = queue.shift();
        console.log(`Checking [i, j] => ${[i, j]} ========================================================`)
        if (i + 1 < grid.length && grid[i + 1][j] === 1) {
            grid[i + 1][j] = 2;
            fresh--;
            queue.push([i + 1, j]);
            console.log(`cond 1 [i + 1, j] => ${[i + 1, j]}`);
        }
        if (i - 1 >= 0 && grid[i- 1][j] === 1) {
            grid[i - 1][j] = 2;
            queue.push([i - 1, j]);
            fresh--;
            console.log(`cond 2 [i - 1, j] => ${[i - 1, j]}`);
        }
        if (j - 1 >= 0 && grid[i][j - 1] === 1) {
            grid[i][j - 1] = 2;
            queue.push([i, j - 1]);
            fresh--;
            console.log(`cond 3 [i, j - 1] => ${[i, j - 1]}`);
        }
        if (j + 1 < grid[i].length && grid[i][j + 1] === 1) {
            grid[i][j + 1] = 2;
            queue.push([i, j + 1]);
            fresh--;
            console.log(`cond 4 [i, j + 1] => ${[i, j + 1]}`);
        }

        layer--;

        if (layer === 0 && queue.length > 0) {
            minutes++;
            layer = queue.length;
            console.log(`checking new layer of ${layer} on minute ${minutes}-------------`);
            console.log(`grid =>`);
            grid.forEach(item => console.log(item));
        }
    }

    console.log(`grid => ${grid}`);

    console.log(`fresh end => ${fresh}`);

    return !fresh ? minutes : -1;
};

let grid1 = [
    [2,1,1],
    [1,1,0],
    [0,1,1]
];  // expected 4

let grid2 = [
    [2,1,1],
    [0,1,1],
    [1,0,1]
];  // expected -1

let grid3 = [
    [2,0,1,1,1,1,1,1,1,1],
    [1,0,1,0,0,0,0,0,0,1],
    [1,0,1,0,1,1,1,1,0,1],
    [1,0,1,0,1,0,0,1,0,1],
    [1,0,1,0,1,0,0,1,0,1],
    [1,0,1,0,1,1,0,1,0,1],
    [1,0,1,0,0,0,0,1,0,1],
    [1,0,1,1,1,1,1,1,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1]
];  // expected 58


console.log(orangesRotting(grid2));





