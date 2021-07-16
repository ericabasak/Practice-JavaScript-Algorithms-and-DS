// Write a program that takes no parameter and returns a list (or array) 
// the next 20 leap years (note that to solve this you need to know at least one past leap year).
// ie. leapYears() = [2024, 2028, 2032, 2036, 2040, 2044, ...etc]


// psuedocode
// takes no parameters
// create a variable with empty array to push the years into
// take a year and add 4 digit number to that
// return a list with the next 20 leap years


function leapYears(){
  let arr = [];
  for(let n = 2020; n <= 2040; n += 4){
    arr.push(n);
  }
  return arr;
}
console.log(leapYears())
