/**
 * getSeasonForMonth()
 * ------------------------------------------------------
 * Write a function called getSeasonForMonth() that accepts
 * an integer as an argument and returns the season of year.
 *   e.g. getSeasonForMonth(6) => 'summer'
 *
 * The function should be built to ONLY accept integer values
 * of 1-12.
 *
 * It the user should also return a boolean value of `false``
 * if the function is given a number less than 1, greater than 12,
 * or a non-number data type.
 *
 **/


function getSeasonForMonth(int){
  var whatSeason = ''
  
  if (int<=0 || int >=13 || typeof int!== 'number') {
    return false;
  } else {
    if(
        int === 12 ||
        int === 1 ||
        int === 2
      ){
      whatSeason = 'winter'
    } else if (
        int === 3 ||
        int === 4 ||
        int === 5
      ) {
      whatSeason = 'spring'
    } else if (
        int === 6 ||
        int === 7 ||
        int === 8
      ) {
      whatSeason = 'summer'
    } else if (
        int === 9 ||
        int === 10 ||
        int === 11
      ) {
      whatSeason = 'fall'
    }
    return whatSeason
  }
}


//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert( getSeasonForMonth(1) === "winter")
console.assert( getSeasonForMonth(3) === "spring")
console.assert( getSeasonForMonth(5) === "spring")
console.assert( getSeasonForMonth(7) === "summer")
console.assert( getSeasonForMonth(9) === "fall")
console.assert( getSeasonForMonth(12) === "winter")

console.assert( getSeasonForMonth(13) === false)
console.assert( getSeasonForMonth(32) === false)
console.assert( getSeasonForMonth(0) === false)
console.assert( getSeasonForMonth() === false)
console.assert( getSeasonForMonth("June") === false)
