

function digPow(n, p){

    let sum = 0;

    for (let item of n.toString()) {
        sum += item ** p;
        p++
    }

    if (sum % n === 0) {
        return sum / n
    } else {
        return -1
    }
}


console.log(digPow(46288, 3)); // 1












