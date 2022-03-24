
function selectionSort(inputArr) {
    let n = inputArr.length;

    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j;
            }
        }
        
        if (min !== i) {
            // Swapping the elements
            [inputArr[i], inputArr[min]] = [inputArr[min], inputArr[i]];
        }
    }
    return inputArr;
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

console.log(selectionSort(numbers))







