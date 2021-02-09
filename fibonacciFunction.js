// fibonacci Function

// write a recursive function called fib which accepts a number 
// returns the nth number in the fibonacci sequence.
// recall that the fibonacci sequence is the sequence of whole numbers,
// i.e. 1,1,2,3,5,8, etc which starts with 1 and 1, and where every
// number thereafter is equal to the sum of the previous two numbers.

// my solution
function fib(num) {
  if(num === 0) return 0;
  return num + fib(num + 1);
}


// a correct solution
function fib(num) {
  if(num <= 2) return 1;
  return fin(num - 1) + fib(num - 2);
}