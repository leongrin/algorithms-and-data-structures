

function findPairArray(arr, sum) {
    let pair = [];
    let possibleMatches = {};

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= sum) {
            let match = sum - arr[i];
            if (possibleMatches[match]) {
                pair = [match, arr[i]];
                break;
            }
            possibleMatches[arr[i]] = true;
        }
    }

    return pair.length ? pair : false;
}


let sum = 8;
let array = [1, 2, 4, 4];
console.log(findPairArray(array, sum));
