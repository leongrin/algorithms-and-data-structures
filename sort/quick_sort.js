// Divide and Conquer => BEST EXPLANATION
// https://www.udemy.com/course/master-the-coding-interview-big-tech-faang-interviews/learn/lecture/22228256#overview

function quickSort(array, leftIndex, rightIndex){

    if(leftIndex < rightIndex) {
        let partitionIndex = partition(array, leftIndex, rightIndex);  // This is the correct index for the pivot number in a sorted array. Our pivot number is
        // always the far right index of the array.

        //sort left and right
        quickSort(array, leftIndex, partitionIndex - 1);
        quickSort(array, partitionIndex + 1, rightIndex);
    }

    return array;
}

// array is a reference value (not a primitive), so the partition function keeps swapping and sorting the array.
function partition(array, left, right){
    let pivotValue = array[right];
    let i = left;

    for(let j = left; j < right; j++) {
        if(array[j] < pivotValue){
            swap(array, j, i);
            i++;
        }
    }
    swap(array, right, i);  // the final swap, to swap the pivot number with the i, which is the partitionIndex;
    return i;
}

function swap(array, firstIndex, secondIndex){
    [array[firstIndex], array[secondIndex]] = [array[secondIndex], array[firstIndex]]
}


//Select first and last index as 2nd and 3rd parameters
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log(quickSort(numbers, 0, numbers.length - 1));




