/**
 * justOneString()
 * ------------------------------------------------------
 * Using logical operators, write a function called `justOneString()`
 * that accepts two arguments and will return true if either input is a string,
 * but returns false if both arguments or neither are strings
 *
 **/

function justOneString(a1, a2){
  if(typeof a1 === 'string' && typeof a2 === 'string'){
    return false
  } else if(typeof a1 === 'string' || typeof a2 === 'string'){
    return true
  } else {
    return false
  }


  // if(typeof a1 === ''){
  //   // -console.log(a1);
  //   return false
  // } else if(typeof a2 !== '') {
  //   // console.log(a2);
  //   return true
  // }

}


//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*
console.assert(justOneString('a', 5) === true)
console.log('1--------')
console.assert(justOneString(6, 'dotron') === true)
console.log('2--------')
console.assert(justOneString('peanut', 'butter') === false)
console.log('3--------')
console.assert(justOneString(8, true) === false)
console.log('4--------')
