// Divide and Conquer
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
    if (array.length === 1) {
        return array
    }
    // Split Array in into right and left
    const length = array.length;
    const middle = Math.floor(length / 2)
    const leftArray = mergeSort(array.slice(0, middle))
    const rightArray = mergeSort(array.slice(middle))

    return merge(leftArray, rightArray);
}

function merge(leftArray, rightArray){
    const result = [];
    let i = 0;
    let j = 0;

    while(i < leftArray.length && j < rightArray.length){

        if(leftArray[i] < rightArray[j]){
            result.push(leftArray[i]);
            i++;
        } else{
            result.push(rightArray[j]);
            j++
        }
    }

    return result.concat(leftArray.slice(i)).concat(rightArray.slice(j));
}


const answer = mergeSort(numbers);
console.log(answer);






