// factorial is multiplying instead of adding like sum

// non recursive way
function factorial(num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i;
  }
  return total
}

// recursive way
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}
factorial(5)