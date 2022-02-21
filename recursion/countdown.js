// Recursive Version
function countDownRecursion(num){
    if(num <= 0) {
        console.log("All done!");
        return;  // stops the recursion to go on indefinitely. Base case.
    }
    console.log(num);
    num--;
    countDownRecursion(num);
}


countDownRecursion(3)



// Iterative Version
function countDownLoop(num){
    for(let i = num; i > 0; i--){  // condition to stop the loop to go on forever
        console.log(i);
    }
    console.log("All done!")
}

