
let cache ={};

function climbStairs(n) {
    /*if (n <= 0 || undefined) return 0;
    if (n === 1) return 1;
    if (n === 2) return 2;
    if (cache[n]) return cache[n];
    cache[n] = climbStairs(n-1) + climbStairs(n-2);
    return cache[n];*/
    let array = [1, 2];

    if (n <= 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 2;

    for (let i = 2; i < n; i++) {
        array.push(array[i-1] + array[i-2]);
    }

    return array.pop();
}

console.log(climbStairs(5));







