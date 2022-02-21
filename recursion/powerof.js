
function power(a, b){
    let sum = a;

    function multiply() {
        if (b === 0) {
            sum = 1;
            return;
        }
        if (b === 1) {
            return;
        }

        sum *= a;

        b--;

        multiply()
    }

    multiply()

    return sum;
}

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

console.log(power(2, 4))



