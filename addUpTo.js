// write a function that calculates the sum of all numbers
// from 1 up to some number n.

// OPTION 1
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++){
      total += i;
  }
  return total;
}

console.log(addUpTo(3))
console.log(addUpTo(100))


// OPTION 2
function addUpTo(n) {
  return n * (n +1)/2;
}
console.log(addUpTo(10))