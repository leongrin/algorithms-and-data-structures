// Very fast for almost sorted lists

// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344158#overview

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(arr) {
    const length = arr.length;

    for (let i = 0; i < length; i++) {
        if (arr[i] < arr[0]) {
            //move number to the first position
            arr.unshift(arr.splice(i,1)[0]);
        } else {
            // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
            if (arr[i] < arr[i-1]) {
                //find where number should go
                for (let j = 1; j < i; j++) {
                    if (arr[i] >= arr[j-1] && arr[i] < arr[j]) {
                        //move number to the right spot
                        arr.splice(j,0,arr.splice(i,1)[0]);
                    }
                }
            }
        }
    }

    return arr;
}


console.log(insertionSort(numbers));

