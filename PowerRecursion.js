// Recursion problem

// write a function that accepts a base and an exponent.
// the function should return the power of base to the exponent.
// this function should mimic the functionality of Math.pow()
// do not worry about negative bases or exponents

function power(base, exponent) {
  if(exponent === 0) return 1;
  return base * power(base, exponenet-1);
}

power(2, 0);