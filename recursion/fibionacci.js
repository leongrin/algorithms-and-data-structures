
// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence.
// The Fibonacci sequence is a sequence of whole numbers 1, 1, 2, 3, 5, 8...

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fibTeacher(n){
    if (n <= 2) return 1;
    return fibTeacher(n-1) + fibTeacher(n-2);
}


function fibMySolution(numb){

    let fibArray = [1, 1];
    let value;

    function getFibNum() {
        if (numb === 1) {
            value = numb;
            return;
        }
        fibArray[fibArray.length] = fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2];
        if (fibArray.length === numb) {
            value = fibArray[fibArray.length - 1];
            return;
        }
        getFibNum()
    }

    getFibNum()

    return value;

}


/*console.log(fibTeacher(4));
console.log(fibMySolution(4));*/


// Fib by index
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...
// (fibByIndex(4)); // 5

let calculations = 0;  // calculate the number of iterations

function fibByIndex(index) {
    calculations++;

    if (index < 2) {
        return 1;
    }

    return fibByIndex(index - 2) + fibByIndex(index - 1); // If at some point it will return a value, you can keep
    // calling the recursion function while it gets closer to the point where it will return a value.
}

console.log(fibByIndex(10)); // 89

console.log(`Calculations => ${calculations}`);




