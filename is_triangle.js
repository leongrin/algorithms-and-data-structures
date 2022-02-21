/*function isTriangle(a,b,c) {

    for (let item of [a, b, c]) {
        if (item <= 0) {
            return false;
        }
    }

    return (a + b > c && a + c > b && b + c > a);
}


console.log(isTriangle(1,8,9));*/  // true


/*function isPangram(string){
    let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z'];

    for (let item of string.toLowerCase()) {
        for (let index = 0; index < arr.length; index++) {
            if (arr[index] === item) {
                arr.splice(index, 1);
            }
        }
    }

    return arr.length === 0;
}

console.log(isPangram('This is not a pangram.'))*/


/*function comp(array1, array2){

    /!*if (!array1 || !array2) return false;

    if (array1.length !== array2.length) return false;

    for (let i = 0; i < array1.length; i++) {
        if (!array2.includes(array1[i] * array1[i])) {
            return false
        } else {
            for (let index = 0; index < array2.length; index++) {
                if (array1[i] * array1[i] === array2[index]) {
                    array2.splice(index, 1);
                    break;
                }
            }
        }
    }

    return array2 && array2.length === 0;*!/

    return !!array1 && !!array2 && array1.sort((a, b) => a - b).map(v => v * v).join('') === array2.sort((a, b) => a - b).join('');
}


/!*const a = [4, 10, 5, 5, 6, 6, 7, 1, 0, 6, 1, 6, 5, 5, 4, 9, 0, 8, 1, 5, 1, 0, 4, 2];
const b = [36, 49, 64, 16, 0, 1, 25, 81, 16, 26, 4, 36, 1, 25, 100, 25, 16, 25, 36, 0, 36, 0, 1, 1];*!/

const a = [121, 144, 19, 161, 19, 144, 19, 11];
const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

console.log(comp(a, b));*/


function dirReduc(arr) {

    for (let i = 0; i < arr.length; i++) {

        console.log(`Checking ${arr[i]}`);

        if (arr[i] === "NORTH" && arr[i + 1] === "SOUTH") {
            arr.splice(i, 2);
            i = -1;
            console.log(`1 => ${arr}`);

        } else if (arr[i] === "SOUTH" && arr[i + 1] === "NORTH") {
            arr.splice(i, 2);
            i = -1;
            console.log(`2 => ${arr}`);

        } else if (arr[i] === "EAST" && arr[i + 1] === "WEST") {
            arr.splice(i, 2);
            i = -1;
            console.log(`3 => ${arr}`);
        } else if (arr[i] === "WEST" && arr[i + 1] === "EAST") {
            arr.splice(i, 2);
            i = -1;
            console.log(`4 => ${arr}`)
        }
    }

    return arr;
}


console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))














