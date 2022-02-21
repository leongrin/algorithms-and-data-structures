
function collectOddValues(arr){
    
    let result = [];

    function helper(helperInput){   // recursion function inside an outer function
        if(helperInput.length === 0) {
            return;   // Base case to stop running forever
        }
        
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        
        helper(helperInput.slice(1))
    }
    
    helper(arr)

    return result;
}

collectOddValues([1,2,3,4,5,6,7,8,9])

