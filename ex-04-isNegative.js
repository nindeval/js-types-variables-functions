/**
 * isNegative()
 * ------------------------------------------------------
 * Write a function called isNegative that returns true/false for
 * whether a number is negative or not.
 *
 **/

 function isNegative(num1){
   var bool = false;
   if (num1 < 0) {
     console.log(true)
     bool = true
   }
   return bool;
 }


//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert( isNegative(100) === false )
console.assert( isNegative(14) === false )
console.assert( isNegative(2) === false )
console.assert( isNegative(0) === false )
console.assert( isNegative(-1) === true )
console.assert( isNegative(-64) === true )
