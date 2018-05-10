/**
 * makeUserGreeting()
 * ------------------------------------------------------
 * Write a function called makeUserGreeting() that takes
 * (1) a string and (2) a boolean as arguments.
 *
 * The string-argument will be a username and the boolean-argument
 * will signify a true/false value for a returning customer.
 *
 * If the 2nd input is the boolean value `true`,
 * then the function should return a 'Good to see you again, «username».' greeting
 *    Ex: makeUserGreeting('Janet', true) //=> "Good to see you again, Janet."
 *
 * If the 2nd input is the boolean value `false`,
 * then the function should return a 'Welcome, «username»!' greeting
 *    Ex: makeUserGreeting('Janet', false) //=> "Welcome, Janet!"
 *
 * NOTE: Don't forget the comma and space and ending puctuation when building the string.
 **/

function makeUserGreeting(username, booleanArgument){
  var customer = ''

  if (booleanArgument == true){
    customer = 'Good to see you again, ' + username + '.'
  } else {
    customer = 'Welcome, ' + username + '!'
  }
  console.log(customer)
  return customer
}



//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

var funcOutput1 = makeUserGreeting("Atushi", true)
console.assert( funcOutput1  === "Good to see you again, Atushi." );

var funcOutput2 = makeUserGreeting("Mira", false)
console.assert( funcOutput2 === "Welcome, Mira!");

var funcOutput3 = makeUserGreeting("Nico", false)
console.assert(funcOutput3 !== "Good to see you again, Nico.");
