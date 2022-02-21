// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...

let calculations = 0;  // calculate the number of iterations

function fib() {
    let cache = {};

    return function helper(index) {
        calculations++;

        if (cache[index]) return cache[index];

        if (index < 2) return 1;

        cache[index] = helper(index - 1) + helper(index - 2);
        return cache[index];
    }
}



let cache = {}
function fibBest(index) {
    calculations++;
    if (index < 2) return 1;
    if (cache[index]) return cache[index];
    cache[index] = fibBest(index -2) + fibBest(index - 1);
    return cache[index];
}



function fibFast(num, memo=[]) {
    calculations++;
    if (memo[num]) return memo[num];

    if (num < 2) return 1;

    memo[num] = fibFast(num - 1, memo) + fibFast(num - 2, memo);
    return memo[num];
}

/*const fasterFib = fib();
console.log(fasterFib(10));*/

console.log(fibBest(10)); // 89

/*console.log(fibFast(10));*/

console.log(`Calculations => ${calculations}`);









