function sumRange(num){
   if(num === 1) return 1; // stops the recursion to go on indefinitely. Base case.
   return num + sumRange(num-1);
}

sumRange(4)


                                   
