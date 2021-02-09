// Factorial Recursion practice problem

// write  a function factorial which accepts a number
// and returns the factorial of a number. a factorial is the product of 
// an integer and all the integers below, 
// e.g. a factorial (4!) because 4 * 3 * 2 * 1 always equals 24
// factorial of zero is always 1.

// my solution
function factorial(num) {
  if (num === 0) return 1;
  return num * (num-1) until it reaches 1;
}

// a correct solution
function factorial(num) {
  if(num < 0) return 0;
  if(num <= 1) return 1;
  return num * factorial(num-1)
}