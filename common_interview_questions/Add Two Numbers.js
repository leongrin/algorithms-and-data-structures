
const addTwoNumbers = (l1, l2) => {
    let arrA = l1;

    let arrB = l2;

    let resultArray = [];

    let number = Math.max(arrA.length, arrB.length) - 1;
    let add = 0;
    let indexA = arrA.length - 1;
    let indexB = arrB.length - 1;

    while (number >= 0) {
        let nToAdd = (arrA[indexA] || 0) + (arrB[indexB] || 0) + add;
        if (String(nToAdd).length === 1) {
            resultArray.unshift(Number(nToAdd));
            add = 0;
        } else {
            add = 1;
            resultArray.unshift(Number(String(nToAdd)[1]));
        }

        indexA--;
        indexB--;
        number--;
    }

    if (add === 1) resultArray.unshift(1);

    return resultArray;

};


console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]))










