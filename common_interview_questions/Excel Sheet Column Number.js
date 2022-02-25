// Given a string columnTitle that represents the column title as appear in an Excel sheet, return its corresponding column number.
//
// For example:
//
// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28

function titleToNumber(columnTitle) {
    /*let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let total;
    if (!columnTitle) return null
    if (columnTitle.length === 1) return alphabet.indexOf(columnTitle) + 1;
    if (columnTitle.length > 1) {
        let i = 0;
        let size = columnTitle.length - 1;
        let partialTotal = 0;
        while(size > 0) {
            partialTotal += (alphabet.indexOf(columnTitle[size])) * alphabet.length ** (size);
            size--;
        }

        let secondAdd = alphabet.indexOf(columnTitle[columnTitle.length - 1]) + 1;
        total = partialTotal + secondAdd;
    }

    return total;*/

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let value = 0;

    const getNumericValue = (arr) => {
        if (arr.length > 1) {
            getNumericValue(arr.slice(1));
        }

        value += (alphabet.indexOf(arr[0]) + 1) * (Math.pow(26, (arr.length - 1)));
    }

    getNumericValue(columnTitle);

    return value;

}


console.log(titleToNumber('FXSHRXW'));



