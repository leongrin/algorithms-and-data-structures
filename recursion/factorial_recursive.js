
// Recursion
function factorial(num){
    if(num === 1 || num < 1) return 1;  // stops the recursion to go on indefinitely. Base case.
    return num * factorial(num-1);
}

// 5 * fact 4 (4 * 6 = 24) === 120
// 4 * fact 3 (3 * 2 = 6)
// 3 * fact 2 (2 * 1 = 2)
// 2 * fact 1 === 1



// Loop alternative
function factorialLoop(num) {
    let sum = num;
    while (num > 0) {
        num--;
        if (num >=1) sum = sum * num  // condition to stop the loop to go on forever
    }
    return sum;
}

// Recursive with helper function
function factorialHelperFunction(numb){
    let result = numb;

    function multiply() {
        if (numb < 1) {
            result = 1;
            return;
        }
        if (numb === 1) return;

        numb--;
        result *= numb
        multiply()
    }

    multiply()

    return result;
}

const numbToTest = 5;

console.log(`Recursive => ${factorial(numbToTest)}`)

console.log(`Loop => ${factorialLoop(numbToTest)}`);

console.log(`Recursive Helper Function => ${factorialHelperFunction(numbToTest)}`);

