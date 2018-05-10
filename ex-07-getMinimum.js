/**
 * getMinimum()
 * ------------------------------------------------------
 * Write a function called `getMinimum()` that takes 4 numbers as arguments
 * and returns the one with the lowest value.
 *
 **/

function getMinimum(num1, num2, num3, num4){

  if(num1 <= num2 && num1 <= num3 && num1 <= num4){
    console.log(num1)
      return num1
  } else if (num2 <= num1 && num2 <= num3 && num2 <= num4){
    console.log(num2)
      return num2
  } else if (num3 <= num1 && num3 <= num2 && num3 <= num4){
    console.log(num3)
      return num3
  } else {
    console.log(num4)
      return num4
  }
}




//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert( getMinimum(1,2,4,0) === 0 )
console.assert( getMinimum(4,8,4,20) === 4 )
console.assert( getMinimum(1000,-2,-99,50) === -99 )
console.assert( getMinimum(-1000,-2,-99,50) === -1000 )
console.assert( getMinimum(400,-11,4,-5) === -11 )
