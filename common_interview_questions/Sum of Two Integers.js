// Given two integers a and b, return the sum of the two integers without using the operators + and -.

const getSum = (a, b) => {
    let result = 0;

    let i = 0;
    if (a > 0) {
        console.log('a > 0')
        while (i < a) {
            result++;
            i++
        }
    }
    if (a < 0) {
        console.log('a < 0')
        while (a < i) {
            result--;
            i--
        }
    }

    let x = 0;
    if (b > 0) {
        console.log('b > 0')
        while(x < b) {
            result++;
            x++
        }
    }
    if (b < 0) {
        console.log('b < 0')
        while (b < x) {
            result--;
            x--
        }
    }



    return result;
};


console.log(getSum(-1, 1));


// Input: a = 2, b = 3
// Output: 5

